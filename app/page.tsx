'use client'

import Link from 'next/link'
import Button from '@/components/shared/Button'
import { useT } from '@/lib/i18n/LocaleProvider'

export default function Home() {
  const t = useT()

  const flowSteps = t<{ title: string; copy: string }[]>('home.flow.steps')
  const proofPoints = t<string[]>('home.proof.promise')

  const stepLinks = ['/eligibility', '/budget-calculator', '/project-finder']

  return (
    <div className="pb-8">
      <section className="grain-overlay px-4 pb-20 pt-6 md:pb-32 md:pt-12">
        <div className="shell">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-8 md:p-14 lg:max-w-[58%]">
            <span className="section-label">{t('home.eyebrow')}</span>
            <h1 className="mt-6 text-5xl leading-[0.93] text-stone-900 md:text-7xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)] md:text-xl">
              {t('home.heroLede')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/budget-calculator">
                <Button>{t('home.ctaBudget')}</Button>
              </Link>
              <Link href="/eligibility">
                <Button className="border border-[var(--line)] bg-[rgba(255,251,245,0.7)] text-[var(--foreground)] shadow-none hover:-translate-y-0.5 hover:bg-white">
                  {t('home.ctaEligibility')}
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              {(['a', 'b', 'c'] as const).map((k, idx) => (
                <div key={k}>
                  <p className="text-3xl font-semibold text-stone-900">{String(idx + 1).padStart(2, '0')}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                    {t(`home.pillars.${k}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:ml-auto lg:max-w-[56%] lg:grid-cols-2">
            <div className="soft-card rounded-[1.75rem] p-6 lg:col-span-2">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">{t('home.proof.title')}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(154,52,18,0.15)] bg-[rgba(154,52,18,0.06)] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-deep)]">{t('home.proof.withoutTitle')}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{t('home.proof.withoutBody')}</p>
                </div>
                <div className="rounded-2xl border border-[rgba(44,93,72,0.16)] bg-[rgba(73,122,101,0.08)] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#315f4b]">{t('home.proof.withTitle')}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{t('home.proof.withBody')}</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[1.75rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">{t('home.proof.promiseTitle')}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground)]">
                {proofPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="shell rounded-[2rem] border border-[var(--line)] bg-[rgba(255,249,240,0.75)] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">{t('home.flow.kicker')}</span>
              <h2 className="mt-5 max-w-2xl text-3xl text-stone-900 md:text-5xl">
                {t('home.flow.title')}
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--ink-soft)]">
              {t('home.flow.lede')}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {flowSteps.map((step, idx) => (
              <Link
                key={idx}
                href={stepLinks[idx]}
                className="group rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,252,247,0.92)] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[rgba(154,52,18,0.3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    {t('common.open')}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl text-stone-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{step.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card rounded-[1.75rem] p-8">
            <span className="section-label">{t('home.why.kicker')}</span>
            <h2 className="mt-5 text-3xl text-stone-900 md:text-4xl">
              {t('home.why.title')}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
              {t('home.why.body')}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">{t('home.why.mvpKicker')}</p>
              <h3 className="mt-4 text-2xl text-stone-900">{t('home.why.mvpTitle')}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                {t('home.why.mvpBody')}
              </p>
            </div>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">{t('home.why.nextKicker')}</p>
              <h3 className="mt-4 text-2xl text-stone-900">{t('home.why.nextTitle')}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                {t('home.why.nextBody')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-6">
        <div className="shell rounded-[2rem] bg-[linear-gradient(135deg,#8d3a17_0%,#5a2615_100%)] px-8 py-10 text-white shadow-[0_28px_80px_rgba(90,38,21,0.24)] md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80">
                {t('home.finalCta.kicker')}
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">
                {t('home.finalCta.title')}
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col md:items-end">
              <Link href="/budget-calculator">
                <Button className="bg-white text-[var(--brand-deep)] shadow-none hover:bg-stone-100">
                  {t('home.finalCta.ctaBudget')}
                </Button>
              </Link>
              <Link href="/registration">
                <Button className="border border-white/20 bg-white/10 text-white shadow-none hover:bg-white/15">
                  {t('home.finalCta.ctaRegistration')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
