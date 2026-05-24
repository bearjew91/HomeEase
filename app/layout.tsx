import type { Metadata } from 'next'
import { Playfair_Display, Manrope, Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LocaleProvider } from '@/lib/i18n/LocaleProvider'
import { getServerLocale } from '@/lib/i18n/getServerLocale'
import { isRtl } from '@/lib/i18n/messages'

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

export const metadata: Metadata = {
  title: 'HomeEase - Israeli Housing Lottery Planning',
  description: 'Plan your journey to affordable housing through Israeli subsidized housing lotteries. Get guidance on eligibility, budgeting, and the complete process.',
  keywords: 'housing lottery, Israel, Mechir LeMishtaken, affordable housing, financial planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getServerLocale()
  const dir = isRtl(locale) ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${manrope.variable} ${frankRuhl.variable} ${heebo.variable}`}
    >
      <body className="antialiased">
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
      </body>
    </html>
  )
}
