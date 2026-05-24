import type { Metadata } from 'next'
import { Playfair_Display, Manrope, Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LocaleProvider } from '@/lib/i18n/LocaleProvider'
import { getServerLocale } from '@/lib/i18n/getServerLocale'
import { isRtl } from '@/lib/i18n/messages'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'

const BuildingBackground = dynamic(
  () => import('@/components/BuildingBackground'),
  { ssr: false },
)

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display-en',
  weight: ['400', '500', '600', '700'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans-en',
  weight: ['400', '500', '600', '700', '800'],
})

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  variable: '--font-display-he',
  weight: ['400', '500', '700'],
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-sans-he',
  weight: ['400', '500', '600', '700', '800'],
})

export function generateMetadata(): Metadata {
  const base = buildMetadata('home')
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: { default: base.title as string, template: `%s — ${SITE_NAME}` },
    description: base.description,
    keywords: [
      'דירה בהנחה', 'מחיר למשתכן', 'מחיר מטרה', 'הגרלת דיור', 'משכנתא',
      'Dira BeHanacha', 'Mechir LeMishtaken', 'Israeli housing lottery', 'affordable housing Israel',
    ],
    openGraph: base.openGraph,
    twitter: base.twitter,
    alternates: base.alternates,
    robots: { index: true, follow: true },
    icons: { icon: '/icon.svg' },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getServerLocale()
  const dir = isRtl(locale) ? 'rtl' : 'ltr'

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale === 'he' ? 'he-IL' : 'en-US',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ILS' },
    description: locale === 'he'
      ? 'כלי תכנון לדירה בהנחה ולמחיר למשתכן: זכאות, תקציב, משכנתא ופרויקטים.'
      : 'Planning toolkit for Israeli housing lotteries: eligibility, budget, mortgage, and projects.',
  }

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${manrope.variable} ${frankRuhl.variable} ${heebo.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <LocaleProvider locale={locale}>
          <BuildingBackground />
          <div className="relative z-10">
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

