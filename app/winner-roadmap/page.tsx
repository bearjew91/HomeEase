'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'

type Phase = { days: string; title: string; tasks: string[] }
type Item = { label: string; detail: string }
type Source = { label: string; body: string }

export default function WinnerRoadmapPage() {
  const t = useT()

  const phases = t<Phase[]>('winner.timeline.phases')
  const hardDeadlines = t<Item[]>('winner.hardDeadlines.items')
  const docs = t<Item[]>('winner.docs.items')
  const declining = t<Item[]>('winner.declining.items')
  const clauses = t<Item[]>('winner.clauses.items')
  const sources = t<Source[]>('winner.sources.items')
  const phaseLabel = t<string>('winner.timeline.phaseLabel')

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('winner.eyebrow')}</span>
        <h1 className="page-title">{t('winner.title')}</h1>
        <p className="page-lede">{t('winner.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('winner.lastUpdated')}
        </p>
      </header>

      <div className="callout callout-good mb-10">
        <span className="callout-mark">✓</span>
        <span>{t('winner.banner')}</span>
      </div>

      <section className="surface-card">
        <h2>{t('winner.timeline.title')}</h2>
        <p className="mb-6">{t('winner.timeline.intro')}</p>

        <div className="space-y-5">
          {phases.map((p, idx) => (
            <article key={p.title} className="grid gap-4 rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5 md:grid-cols-[12rem_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">{phaseLabel} {String(idx + 1).padStart(2, '0')}</p>
                <p className="mt-1 font-display text-lg text-[var(--foreground)]" style={{ fontFamily: 'var(--font-display)' }}>{p.days}</p>
              </div>
              <div>
                <h3>{p.title}</h3>
                <ul className="mt-2">
                  {p.tasks.map(task => <li key={task}>{task}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('winner.hardDeadlines.title')}</h2>
        <p className="mb-5">{t('winner.hardDeadlines.intro')}</p>
        <div className="space-y-3">
          {hardDeadlines.map(it => (
            <div key={it.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{it.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{it.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('winner.docs.title')}</h2>
        <p className="mb-5">{t('winner.docs.intro')}</p>
        <div className="space-y-3">
          {docs.map(d => (
            <div key={d.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{d.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="callout callout-note my-10">
        <span className="callout-mark">i</span>
        <div>
          <p className="font-semibold" style={{ marginBottom: '0.35rem' }}>{t('winner.badakBayit.title')}</p>
          <p style={{ margin: 0, color: 'inherit', opacity: 0.9 }}>{t('winner.badakBayit.body')}</p>
        </div>
      </div>

      <section className="surface-card">
        <h2>{t('winner.declining.title')}</h2>
        <p className="mb-5">{t('winner.declining.intro')}</p>
        <div className="space-y-3">
          {declining.map(it => (
            <div key={it.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{it.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{it.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('winner.clauses.title')}</h2>
        <p className="mb-5">{t('winner.clauses.intro')}</p>
        <div className="space-y-3">
          {clauses.map(c => (
            <div key={c.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{c.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('winner.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('winner.sources.disclaimer')}</p>
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
        <span className="step-eyebrow">{t('winner.next.eyebrow')}</span>
        <h3>{t('winner.next.title')}</h3>
        <p>{t('winner.next.body')}</p>
        <Link href="/" className="step-cta">{t('winner.next.cta')}</Link>
      </aside>
    </div>
  )
}
