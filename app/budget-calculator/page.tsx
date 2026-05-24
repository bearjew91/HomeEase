'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  calculateAffordability,
  type AffordabilityInputs,
  type AffordabilityResult,
} from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useT } from '@/lib/i18n/LocaleProvider'

interface FormState {
  availableCash: number
  netMonthlyIncome: number
  existingMonthlyLoanPayments: number
  annualInterestRatePct: number
  termYears: number
}

const initial: FormState = {
  availableCash: 0,
  netMonthlyIncome: 0,
  existingMonthlyLoanPayments: 0,
  annualInterestRatePct: 5.0,
  termYears: 30,
}

type Item = { label: string; detail: string }
type Source = { label: string; body: string }
type FieldCopy = { label: string; placeholder?: string; hint?: string }

export default function AffordabilityPage() {
  const t = useT()
  const rulesItems = t<Item[]>('budget.rules.items')
  const grantsItems = t<Item[]>('budget.rules.grants')
  const sources = t<Source[]>('budget.sources.items')
  const f = (key: string) => t<FieldCopy>(`budget.form.${key}`)

  const [form, setForm] = useState<FormState>(initial)
  const [result, setResult] = useState<AffordabilityResult | null>(null)

  const onNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
  }

  const handleCalculate = () => {
    const inputs: AffordabilityInputs = {
      availableCash: form.availableCash,
      netMonthlyIncome: form.netMonthlyIncome,
      existingMonthlyLoanPayments: form.existingMonthlyLoanPayments,
      annualInterestRate: form.annualInterestRatePct / 100,
      termYears: form.termYears,
    }
    setResult(calculateAffordability(inputs))
  }

  const fmt = (n: number) => `₪${Math.round(n).toLocaleString('he-IL')}`

  const numberField = (name: keyof FormState, copy: FieldCopy, step?: string) => (
    <div key={name as string}>
      <label className="field-label" htmlFor={name as string}>{copy.label}</label>
      <Input
        id={name as string}
        type="number"
        name={name as string}
        value={(form[name] as number) || ''}
        onChange={onNumber}
        placeholder={copy.placeholder}
        step={step}
      />
      {copy.hint && <p className="mt-1.5 text-xs text-[var(--ink-soft)]">{copy.hint}</p>}
    </div>
  )

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('budget.eyebrow')}</span>
        <h1 className="page-title">{t('budget.title')}</h1>
        <p className="page-lede">{t('budget.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('budget.lastUpdated')}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="surface-card">
          <h2>{t('budget.form.title')}</h2>
          <p className="mb-6">{t('budget.form.intro')}</p>

          <div className="space-y-5">
            {numberField('availableCash', f('cash'))}
            {numberField('netMonthlyIncome', f('netIncome'))}
            {numberField('existingMonthlyLoanPayments', f('existingLoans'))}
            {numberField('annualInterestRatePct', f('interestRate'), '0.1')}
            {numberField('termYears', f('termYears'))}

            <Button onClick={handleCalculate} className="mt-4 w-full">
              {t('budget.form.calculate')}
            </Button>
          </div>
        </section>

        <section className="surface-card">
          <h2>{t('budget.results.title')}</h2>
          {result ? (
            <div className="space-y-4">
              <div className="stat-tile tone-good">
                <p className="stat-label">{t('budget.results.maxPriceSafe')}</p>
                <p className="stat-value">{fmt(result.safe.maxPurchasePrice)}</p>
                <p className="stat-foot">{t('budget.results.maxPriceSafeFoot')}</p>
              </div>

              <div className="stat-tile tone-warn">
                <p className="stat-label">{t('budget.results.maxPriceStretched')}</p>
                <p className="stat-value">{fmt(result.stretched.maxPurchasePrice)}</p>
                <p className="stat-foot">{t('budget.results.maxPriceStretchedFoot')}</p>
              </div>

              <div className="stat-tile tone-orange">
                <p className="stat-label">{t('budget.results.maxPriceHard')}</p>
                <p className="stat-value">{fmt(result.hard.maxPurchasePrice)}</p>
                <p className="stat-foot">{t('budget.results.maxPriceHardFoot')}</p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5">
                <p className="field-label">{t('budget.results.breakdown')}</p>
                <ul className="mt-2 space-y-1.5 text-sm" style={{ listStyle: 'none', padding: 0 }}>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.disposableIncome')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.disposableMonthlyIncome)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.cash')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.availableCash)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.safePayment')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.safe.monthlyPayment)} <span className="text-[var(--ink-soft)] font-normal">({(result.safe.ptiRatio * 100).toFixed(0)}%)</span></strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.safeLoan')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.safe.maxLoan)}</strong></li>
                </ul>
              </div>

              <div className="callout callout-warn">
                <span className="callout-mark">!</span>
                <span>{t('budget.results.warn')}</span>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center">
              <p className="text-sm text-[var(--ink-soft)]">
                {t('budget.results.emptyPrefix')} <strong className="text-[var(--brand-deep)]">{t('budget.results.emptyHighlight')}</strong>{t('budget.results.emptySuffix')}
              </p>
            </div>
          )}
        </section>
      </div>

      <div className="divider-rule" />

      <section className="surface-card mb-10">
        <h2>{t('budget.rules.title')}</h2>
        <p className="mb-5">{t('budget.rules.intro')}</p>
        <div className="space-y-3">
          {rulesItems.map(r => (
            <div key={r.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{r.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{r.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-6 mb-2 text-[var(--brand-deep)]">{t('budget.rules.grantsTitle')}</h3>
        <div className="space-y-3">
          {grantsItems.map(g => (
            <div key={g.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{g.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{g.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card">
        <h2>{t('budget.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('budget.sources.disclaimer')}</p>
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
        <span className="step-eyebrow">{t('budget.next.eyebrow')}</span>
        <h3>{t('budget.next.title')}</h3>
        <p>{t('budget.next.body')}</p>
        <Link href="/project-finder" className="step-cta">{t('budget.next.cta')}</Link>
      </aside>
    </div>
  )
}
