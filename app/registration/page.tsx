'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'

type Item = { label: string; detail?: string; body?: string }
type Step = { title: string; desc: string }
type Row = { window: string; detail: string }
type Source = { label: string; body: string }

export default function RegistrationPage() {
  const t = useT()

  const cycle = t<Item[]>('registration.cycle.items')
  const steps = t<Step[]>('registration.flow.steps')
  const where = t<Item[]>('registration.where.items')
  const afterReg = t<Row[]>('registration.after.rows')
  const sources = t<Source[]>('registration.sources.items')

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('registration.eyebrow')}</span>
        <h1 className="page-title">{t('registration.title')}</h1>
        <p className="page-lede">{t('registration.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('registration.lastUpdated')}
        </p>
      </header>

      <section className="surface-card">
        <h2>{t('registration.cycle.title')}</h2>
        <p className="mb-5">{t('registration.cycle.intro')}</p>
        <div className="space-y-3">
          {cycle.map(c => (
            <div key={c.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{c.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('registration.flow.title')}</h2>
        <p className="mb-6">{t('registration.flow.intro')}</p>

        <div className="timeline">
          {steps.map((s, idx) => (
            <div key={s.title} className="timeline-row">
              <div className="timeline-num">{String(idx + 1).padStart(2, '0')}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="callout callout-warn my-10">
        <span className="callout-mark">!</span>
        <div>
          <p className="font-semibold" style={{ marginBottom: '0.35rem' }}>{t('registration.benMakom.title')}</p>
          <p style={{ margin: 0, color: 'inherit', opacity: 0.9 }}>{t('registration.benMakom.body')}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="surface-card">
          <h2>{t('registration.where.title')}</h2>
          <p className="mb-4">{t('registration.where.intro')}</p>
          <ul>
            {where.map(w => (
              <li key={w.label}>
                <strong className="text-[var(--foreground)]">{w.label} —</strong> {w.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card">
          <h2>{t('registration.after.title')}</h2>
          <p className="mb-4">{t('registration.after.intro')}</p>
          <div className="space-y-3">
            {afterReg.map(r => (
              <div key={r.window} className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3 border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-deep)]">{r.window}</span>
                <span className="text-sm text-[var(--ink-soft)]">{r.detail}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('registration.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('registration.sources.disclaimer')}</p>
        <div className="space-y-3">
          {sources.map(s => (
            <div key={s.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{s.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <aside className="next-step">
        <span className="step-eyebrow">{t('registration.next.eyebrow')}</span>
        <h3>{t('registration.next.title')}</h3>
        <p>{t('registration.next.body')}</p>
        <Link href="/eligibility" className="step-cta">{t('registration.next.cta')}</Link>
      </aside>
    </div>
  )
}
