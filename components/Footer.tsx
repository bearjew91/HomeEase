'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'

export default function Footer() {
  const t = useT()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 pb-8 pt-20">
      <div className="shell overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(51,37,29,0.98),rgba(29,22,18,0.98))] px-6 py-10 text-stone-200 shadow-[0_28px_80px_rgba(40,27,21,0.18)] md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.18em] text-white">
                HE
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">{t('common.brand')}</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-400">{t('footer.brandKicker')}</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-stone-300">{t('footer.blurb')}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eligibility" className="text-stone-200 transition-colors hover:text-white">{t('footer.links.eligibility')}</Link></li>
              <li><Link href="/budget-calculator" className="text-stone-200 transition-colors hover:text-white">{t('footer.links.budget')}</Link></li>
              <li><Link href="/project-finder" className="text-stone-200 transition-colors hover:text-white">{t('footer.links.projects')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">{t('footer.guides')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/registration" className="text-stone-200 transition-colors hover:text-white">{t('footer.links.registration')}</Link></li>
              <li><Link href="/winner-roadmap" className="text-stone-200 transition-colors hover:text-white">{t('footer.links.winner')}</Link></li>
              <li><a href="#" className="block text-stone-200 transition-colors hover:text-white">{t('footer.links.faq')}</a></li>
              <li><a href="#" className="block text-stone-200 transition-colors hover:text-white">{t('footer.links.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="block text-stone-200 transition-colors hover:text-white">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="block text-stone-200 transition-colors hover:text-white">{t('footer.links.terms')}</a></li>
              <li><a href="#" className="block text-stone-200 transition-colors hover:text-white">{t('footer.links.disclaimer')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-center text-sm leading-6 text-stone-300">
            <strong>{t('footer.links.disclaimer')}:</strong> {t('footer.disclaimer')}
          </p>
          <p className="mt-4 text-center text-sm text-stone-400">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
