'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'

type Item = { label: string; detail: string }
type Source = { label: string; body: string }

export default function ProjectFinderPage() {
  const t = useT()

  const scale = t<Item[]>('projects.scale.items')
  const fields = t<Item[]>('projects.fields.items')
  const limits = t<Item[]>('projects.limits.items')
  const sources = t<Source[]>('projects.sources.items')

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('projects.eyebrow')}</span>
        <h1 className="page-title">{t('projects.title')}</h1>
        <p className="page-lede">{t('projects.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('projects.lastUpdated')}
        </p>
      </header>

      <div className="callout callout-note mb-10">
        <span className="callout-mark">i</span>
        <span>{t('projects.programNote')}</span>
      </div>

      <section className="surface-card">
        <h2>{t('projects.scale.title')}</h2>
        <p className="mb-5">{t('projects.scale.intro')}</p>
        <div className="space-y-3">
          {scale.map(s => (
            <div key={s.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{s.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('projects.fields.title')}</h2>
        <p className="mb-5">{t('projects.fields.intro')}</p>
        <div className="space-y-3">
          {fields.map(f => (
            <div key={f.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{f.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('projects.limits.title')}</h2>
        <p className="mb-5">{t('projects.limits.intro')}</p>
        <div className="space-y-3">
          {limits.map(l => (
            <div key={l.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{l.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{l.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('projects.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('projects.sources.disclaimer')}</p>
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
        <span className="step-eyebrow">{t('projects.next.eyebrow')}</span>
        <h3>{t('projects.next.title')}</h3>
        <p>{t('projects.next.body')}</p>
        <Link href="/winner-roadmap" className="step-cta">{t('projects.next.cta')}</Link>
      </aside>
    </div>
  )
}
