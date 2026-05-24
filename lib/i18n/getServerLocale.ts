import { cookies } from 'next/headers'
import { DEFAULT_LOCALE, LOCALES, type Locale } from './messages'

export function getServerLocale(): Locale {
  const cookieLocale = cookies().get('locale')?.value as Locale | undefined
  if (cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)) {
    return cookieLocale
  }
  return DEFAULT_LOCALE
}
