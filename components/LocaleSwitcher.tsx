'use client'

import { useLocale, useT } from '@/lib/i18n/LocaleProvider'

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()
  const t = useT()
  const next = locale === 'en' ? 'he' : 'en'

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={t('locale.label')}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,251,245,0.65)] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-deep)] transition-colors hover:bg-[rgba(154,52,18,0.08)]"
    >
      <span aria-hidden className="text-[0.65rem] opacity-60">{locale.toUpperCase()}</span>
      <span aria-hidden className="opacity-40">→</span>
      <span>{t('locale.switchTo')}</span>
    </button>
  )
}
