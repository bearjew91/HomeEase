import type { Metadata } from 'next'
import { getServerLocale } from '@/lib/i18n/getServerLocale'
import { messages, type Locale } from '@/lib/i18n/messages'
import { SITE_URL, SITE_NAME, absoluteUrl } from '@/lib/site'

type RouteKey = 'home' | 'eligibility' | 'registration' | 'budget' | 'mortgage' | 'projects' | 'roadmap'

const PATHS: Record<RouteKey, string> = {
  home: '/',
  eligibility: '/eligibility',
  registration: '/registration',
  budget: '/budget-calculator',
  mortgage: '/mortgage-estimator',
  projects: '/project-finder',
  roadmap: '/winner-roadmap',
}

// Fallback titles/descriptions for routes the i18n catalog doesn't cleanly expose.
// Kept short — search engines truncate beyond ~60ch for titles, ~155ch for descriptions.
const FALLBACK: Record<RouteKey, { he: { title: string; description: string }; en: { title: string; description: string } }> = {
  home: {
    he: {
      title: 'HomeEase — תכנון להגרלות דיור בישראל',
      description: 'כלי תכנון לדירה בהנחה ולמחיר למשתכן: זכאות, תקציב, משכנתא ופרויקטים — בעברית ובלי בירוקרטיה.',
    },
    en: {
      title: 'HomeEase — Israeli Housing Lottery Planning',
      description: 'Planning toolkit for Dira BeHanacha and Mechir LeMishtaken: eligibility, budget, mortgage, and projects — in plain language.',
    },
  },
  eligibility: {
    he: { title: 'בדיקת זכאות', description: 'הסינון הזול ביותר בתהליך. לסגור זכאות לפני שמשקיעים זמן בהרשמה.' },
    en: { title: 'Eligibility', description: 'The cheapest filter in the lottery process. Clear eligibility before spending energy on registration.' },
  },
  registration: {
    he: { title: 'הרשמה להגרלה', description: 'איך לעבור את ההרשמה הרשמית בלי הפתעות — מסמכים, חלון זמן ופורטל.' },
    en: { title: 'Registration', description: 'Move through official lottery registration without surprises — docs, window, portal.' },
  },
  budget: {
    he: { title: 'מחשבון תקציב', description: 'איזה מחיר דירה אתם באמת יכולים להרשות? תכנון לפי כללי בנק ישראל לדירות מסובסדות.' },
    en: { title: 'Affordability calculator', description: 'What can you actually afford? Planning estimate using BoI rules for subsidized housing.' },
  },
  mortgage: {
    he: { title: 'מחשבון משכנתא', description: 'איזה סכום משכנתא יאשרו לכם בפועל? לפי הוראת בנק ישראל 329 והעדכון לדירות מסובסדות.' },
    en: { title: 'Mortgage estimator', description: 'What loan will the bank actually approve? Per BoI directive 329 and the 2026 subsidized-housing rules.' },
  },
  projects: {
    he: { title: 'איתור פרויקטים', description: 'איך לקרוא נכון את רשימת הפרויקטים של דירה בהנחה. ההיקף, הכללים, ומה לחפש.' },
    en: { title: 'Project finder', description: 'How to read the official Dira BeHanacha project list. Scale, rules, and what to look for.' },
  },
  roadmap: {
    he: { title: 'מפת דרך לזוכים', description: 'הצעדים החיוניים מהזכייה ועד קבלת המפתח. שמאות, חוזה, משכנתא, מסירה.' },
    en: { title: 'Winner roadmap', description: 'Essential steps from winning to getting the keys. Appraisal, contract, mortgage, handover.' },
  },
}

function pick(locale: Locale, key: RouteKey): { title: string; description: string } {
  const t = (path: string): string | undefined => {
    const parts = path.split('.')
    let cur: unknown = messages[locale]
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[p]
      } else return undefined
    }
    return typeof cur === 'string' ? cur : undefined
  }
  const localeKey = key === 'home' ? null : (key === 'budget' ? 'budget' : key === 'mortgage' ? 'mortgage' : key)
  const titleFromCatalog = localeKey ? t(`${localeKey}.title`) : undefined
  const ledeFromCatalog = localeKey ? t(`${localeKey}.lede`) : undefined
  const fb = FALLBACK[key][locale]
  return {
    title: titleFromCatalog && titleFromCatalog.length <= 60 ? titleFromCatalog : fb.title,
    description: ledeFromCatalog && ledeFromCatalog.length <= 160 ? ledeFromCatalog : fb.description,
  }
}

const ROUTE_LABEL: Record<RouteKey, { he: string; en: string }> = {
  home: { he: 'בית', en: 'Home' },
  eligibility: { he: 'זכאות', en: 'Eligibility' },
  registration: { he: 'הרשמה', en: 'Registration' },
  budget: { he: 'תקציב', en: 'Budget' },
  mortgage: { he: 'משכנתא', en: 'Mortgage' },
  projects: { he: 'פרויקטים', en: 'Projects' },
  roadmap: { he: 'מפת דרך', en: 'Roadmap' },
}

export function buildBreadcrumb(key: RouteKey): Record<string, unknown> {
  if (key === 'home') {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: ROUTE_LABEL.home[getServerLocale()], item: absoluteUrl('/') },
      ],
    }
  }
  const locale = getServerLocale()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ROUTE_LABEL.home[locale], item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: ROUTE_LABEL[key][locale], item: absoluteUrl(PATHS[key]) },
    ],
  }
}

export function buildMetadata(key: RouteKey): Metadata {
  const locale = getServerLocale()
  const { title, description } = pick(locale, key)
  const url = absoluteUrl(PATHS[key])
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
