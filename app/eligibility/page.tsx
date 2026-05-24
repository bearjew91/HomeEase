'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'

type Item = { label: string; detail?: string }
type Step = { title: string; body: string }
type DocGroup = { title: string; items: string[] }
type Source = { label: string; body: string }

export default function EligibilityPage() {
  const t = useT()

  const tracks = t<Item[]>('eligibility.tracks.items')
  const ownership = t<Item[]>('eligibility.ownership.items')
  const docGroups = t<DocGroup[]>('eligibility.docs.groups')
  const steps = t<Step[]>('eligibility.sequence.steps')
  const sources = t<Source[]>('eligibility.sources.items')

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('eligibility.eyebrow')}</span>
        <h1 className="page-title">{t('eligibility.title')}</h1>
        <p className="page-lede">{t('eligibility.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('eligibility.lastUpdated')}
        </p>
      </header>

      <div className="callout callout-note mb-10">
        <span className="callout-mark">i</span>
        <span>{t('eligibility.programNote')}</span>
      </div>

      <section className="surface-card">
        <h2>{t('eligibility.tracks.title')}</h2>
        <p className="mb-5">{t('eligibility.tracks.intro')}</p>
        <div className="space-y-3">
          {tracks.map((c, idx) => (
            <div key={c.label} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <span className="font-display text-xl text-[var(--brand-deep)]" style={{ fontFamily: 'var(--font-display)' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{c.label}</p>
                <p className="text-sm text-[var(--ink-soft)]">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-[var(--ink-soft)]">{t('eligibility.tracks.residency')}</p>
      </section>

      <div className="divider-rule" />

      <div className="callout callout-good mb-10">
        <span className="callout-mark">★</span>
        <div>
          <p className="font-semibold" style={{ marginBottom: '0.35rem' }}>{t('eligibility.reservists.title')}</p>
          <p style={{ margin: 0, color: 'inherit', opacity: 0.9 }}>{t('eligibility.reservists.body')}</p>
        </div>
      </div>

      <section className="surface-card">
        <h2>{t('eligibility.ownership.title')}</h2>
        <p className="mb-5">{t('eligibility.ownership.intro')}</p>
        <div className="space-y-3">
          {ownership.map(o => (
            <div key={o.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{o.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{o.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('eligibility.income.title')}</h2>
        <p>{t('eligibility.income.body')}</p>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('eligibility.docs.title')}</h2>
        <p className="mb-6">{t('eligibility.docs.intro')}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {docGroups.map(g => (
            <div key={g.title} className="rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5">
              <p className="field-label" style={{ color: 'var(--brand)' }}>{g.title}</p>
              <ul className="mt-3">{g.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('eligibility.sequence.title')}</h2>
        <p className="mb-6">{t('eligibility.sequence.intro')}</p>
        <div className="timeline">
          {steps.map((step, idx) => (
            <div key={step.title} className="timeline-row">
              <div className="timeline-num">{String(idx + 1).padStart(2, '0')}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('eligibility.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('eligibility.sources.disclaimer')}</p>
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
        <span className="step-eyebrow">{t('eligibility.next.eyebrow')}</span>
        <h3>{t('eligibility.next.title')}</h3>
        <p>{t('eligibility.next.body')}</p>
        <Link href="/budget-calculator" className="step-cta">{t('eligibility.next.cta')}</Link>
      </aside>
    </div>
  )
}
