'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  calculateMortgage,
  type MortgageInputs,
  type MortgageResult,
  type ResultCategory,
} from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useT } from '@/lib/i18n/LocaleProvider'

interface FormState {
  purchasePrice: number
  appraisedMarketValue: number
  netMonthlyHouseholdIncome: number
  existingMonthlyLoanPayments: number
  monthlyRentUntilEntry: number
  otherFixedMonthlyObligations: number
  availableCashEquity: number
  hasEligibleGrant: boolean
  useSubsidizedRules: boolean
  annualInterestRatePct: number
  termYears: number
}

const initial: FormState = {
  purchasePrice: 0,
  appraisedMarketValue: 0,
  netMonthlyHouseholdIncome: 0,
  existingMonthlyLoanPayments: 0,
  monthlyRentUntilEntry: 0,
  otherFixedMonthlyObligations: 0,
  availableCashEquity: 0,
  hasEligibleGrant: false,
  useSubsidizedRules: true,
  annualInterestRatePct: 5.0,
  termYears: 30,
}

type Item = { label: string; detail: string }
type Source = { label: string; body: string }
type FieldCopy = { label: string; placeholder?: string; hint?: string }
type ToggleCopy = { label: string; hint?: string }
type CategoryCopy = { title: string; body: string }

const toneByCategory: Record<ResultCategory, string> = {
  green: 'tone-good',
  yellow: 'tone-warn',
  orange: 'tone-orange',
  red: 'tone-danger',
}

const calloutByCategory: Record<ResultCategory, string> = {
  green: 'callout-good',
  yellow: 'callout-warn',
  orange: 'callout-warn',
  red: 'callout-danger',
}

export default function MortgageEstimatorPage() {
  const t = useT()
  const rulesItems = t<Item[]>('mortgage.rules.items')
  const sources = t<Source[]>('mortgage.sources.items')
  const f = (key: string) => t<FieldCopy>(`mortgage.form.${key}`)
  const toggle = (key: string) => t<ToggleCopy>(`mortgage.form.${key}`)

  const [form, setForm] = useState<FormState>(initial)
  const [result, setResult] = useState<MortgageResult | null>(null)

  const onNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
  }
  const onBool = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setForm(prev => ({ ...prev, [name]: checked }))
  }

  const handleCalculate = () => {
    const inputs: MortgageInputs = {
      purchasePrice: form.purchasePrice,
      appraisedMarketValue: form.appraisedMarketValue || undefined,
      netMonthlyHouseholdIncome: form.netMonthlyHouseholdIncome,
      existingMonthlyLoanPayments: form.existingMonthlyLoanPayments,
      monthlyRentUntilEntry: form.monthlyRentUntilEntry || undefined,
      otherFixedMonthlyObligations: form.otherFixedMonthlyObligations || undefined,
      availableCashEquity: form.availableCashEquity,
      hasEligibleGrant: form.hasEligibleGrant,
      useSubsidizedRules: form.useSubsidizedRules,
      annualInterestRate: form.annualInterestRatePct / 100,
      termYears: form.termYears,
    }
    setResult(calculateMortgage(inputs))
  }

  const fmt = (n: number) => `₪${Math.round(n).toLocaleString('he-IL')}`
  const pct = (n: number) => `${(n * 100).toFixed(1)}%`

  const numberField = (
    name: keyof FormState,
    copy: FieldCopy,
    step?: string,
  ) => (
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

  const checkboxField = (name: keyof FormState, copy: ToggleCopy) => (
    <label key={name as string} className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        name={name as string}
        checked={form[name] as boolean}
        onChange={onBool}
        className="mt-1 h-4 w-4 accent-[var(--brand)]"
      />
      <span>
        <span className="block text-sm font-semibold text-[var(--foreground)]">{copy.label}</span>
        {copy.hint && <span className="block text-xs text-[var(--ink-soft)] mt-0.5">{copy.hint}</span>}
      </span>
    </label>
  )

  const category = result?.category
  const categoryCopy = category ? t<CategoryCopy>(`mortgage.results.category.${category}`) : null

  return (
    <div className="page-shell">
      <header className="mb-10">
        <span className="page-eyebrow">{t('mortgage.eyebrow')}</span>
        <h1 className="page-title">{t('mortgage.title')}</h1>
        <p className="page-lede">{t('mortgage.lede')}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
          {t('common.lastUpdated')}: {t('mortgage.lastUpdated')}
        </p>
      </header>

      <section className="surface-card mb-10">
        <h2>{t('mortgage.rules.title')}</h2>
        <p className="mb-5">{t('mortgage.rules.intro')}</p>
        <div className="space-y-3">
          {rulesItems.map(r => (
            <div key={r.label} className="border-t border-[var(--line)] pt-3 first:border-t-0 first:pt-0">
              <p className="font-semibold text-[var(--foreground)]" style={{ fontSize: '0.95rem' }}>{r.label}</p>
              <p className="text-sm text-[var(--ink-soft)]">{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="surface-card">
          <h2>{t('mortgage.form.title')}</h2>
          <p className="mb-6">{t('mortgage.form.intro')}</p>

          <div className="space-y-5">
            {numberField('purchasePrice', f('purchasePrice'))}
            {numberField('appraisedMarketValue', f('appraisedValue'))}
            {numberField('netMonthlyHouseholdIncome', f('netIncome'))}
            {numberField('existingMonthlyLoanPayments', f('existingLoans'))}
            {numberField('monthlyRentUntilEntry', f('rentUntilEntry'))}
            {numberField('otherFixedMonthlyObligations', f('otherObligations'))}
            {numberField('availableCashEquity', f('cashEquity'))}
            {numberField('annualInterestRatePct', f('interestRate'), '0.1')}
            {numberField('termYears', f('termYears'))}

            <div className="space-y-3 pt-2">
              {checkboxField('hasEligibleGrant', toggle('hasGrant'))}
              {checkboxField('useSubsidizedRules', toggle('useSubsidized'))}
            </div>

            <Button onClick={handleCalculate} className="mt-4 w-full">
              {t('mortgage.form.calculate')}
            </Button>
          </div>
        </section>

        <section className="surface-card">
          <h2>{t('mortgage.results.title')}</h2>
          {result && categoryCopy && category ? (
            <div className="space-y-4">
              <div className={`stat-tile ${toneByCategory[category]}`}>
                <p className="stat-label">{t('mortgage.results.categoryLabel')}</p>
                <p className="stat-value">{categoryCopy.title}</p>
                <p className="stat-foot">{categoryCopy.body}</p>
              </div>

              <div className="stat-tile tone-brand">
                <p className="stat-label">{t('mortgage.results.requestedLoan')}</p>
                <p className="stat-value">{fmt(result.requestedLoan)}</p>
                <p className="stat-foot">{t('mortgage.results.requestedLoanFoot')}</p>
              </div>

              <div className="stat-tile tone-warn">
                <p className="stat-label">{t('mortgage.results.monthlyPayment')}</p>
                <p className="stat-value">{fmt(result.requestedMonthlyPayment)}</p>
                <p className="stat-foot">{t('mortgage.results.monthlyPaymentFoot')}</p>
              </div>

              <div className="stat-tile">
                <p className="stat-label">{t('mortgage.results.requiredEquity')}</p>
                <p className="stat-value">{fmt(result.requiredEquity)}</p>
                <p className="stat-foot">{t('mortgage.results.requiredEquityFoot')}</p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5">
                <p className="field-label">{t('mortgage.results.breakdown')}</p>
                <ul className="mt-2 space-y-1.5 text-sm" style={{ listStyle: 'none', padding: 0 }}>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.equityYouHave')}:</span> <strong className="text-[var(--foreground)]">{fmt(form.availableCashEquity)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.equityGap')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.equityGap)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.ltvValue')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.ltvValue)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.maxLoanByLtv')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.maxLoanByLtv)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.maxLoanSafe')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.maxLoanSafe)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.maxLoanStretched')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.maxLoanStretched)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.maxLoanHard')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.maxLoanHard)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.disposableIncome')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.disposableMonthlyIncome)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.pti')}:</span> <strong className="text-[var(--foreground)]">{Number.isFinite(result.requestedPti) ? pct(result.requestedPti) : '—'}</strong></li>
                </ul>
              </div>

              <div className={`callout ${calloutByCategory[category]}`}>
                <span className="callout-mark">!</span>
                <span>{categoryCopy.body}</span>
              </div>

              {!form.appraisedMarketValue && form.useSubsidizedRules && (
                <div className="callout callout-note">
                  <span className="callout-mark">i</span>
                  <span>{t('mortgage.results.warnings.noAppraisal')}</span>
                </div>
              )}
              {result.equityGap > 0 && (
                <div className="callout callout-danger">
                  <span className="callout-mark">!</span>
                  <span>{t('mortgage.results.warnings.equityGap')}</span>
                </div>
              )}
              {result.requestedPti > 0.40 && Number.isFinite(result.requestedPti) && (
                <div className="callout callout-warn">
                  <span className="callout-mark">!</span>
                  <span>{t('mortgage.results.warnings.highPti')}</span>
                </div>
              )}
              {result.requestedLoan > result.maxLoanByLtv && (
                <div className="callout callout-danger">
                  <span className="callout-mark">!</span>
                  <span>{t('mortgage.results.warnings.ltvBreach')}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center">
              <p className="text-sm text-[var(--ink-soft)]">
                {t('mortgage.results.emptyPrefix')} <strong className="text-[var(--brand-deep)]">{t('mortgage.results.emptyHighlight')}</strong>{t('mortgage.results.emptySuffix')}
              </p>
            </div>
          )}
        </section>
      </div>

      <div className="divider-rule" />

      <section className="surface-card">
        <h2>{t('mortgage.sources.title')}</h2>
        <p className="mb-5 text-sm text-[var(--ink-soft)]">{t('mortgage.sources.disclaimer')}</p>
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
        <span className="step-eyebrow">{t('mortgage.next.eyebrow')}</span>
        <h3>{t('mortgage.next.title')}</h3>
        <p>{t('mortgage.next.body')}</p>
        <Link href="/project-finder" className="step-cta">{t('mortgage.next.cta')}</Link>
      </aside>
    </div>
  )
}
