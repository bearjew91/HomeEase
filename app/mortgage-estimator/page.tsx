'use client'

import { useState } from 'react'
import Link from 'next/link'
import { calculateMortgage } from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useT } from '@/lib/i18n/LocaleProvider'

interface MortgageInput {
  monthlyIncome: number
  existingObligations: number
  desiredMonthlyPayment: number
  interestRate: number
  loanTerm: number
  downPayment: number
}

interface MortgageResult {
  maxLoan: number
  maxPurchasePrice: number
  monthlyPayment: number
  debtToIncomeRatio: number
  paymentRatio: number
  totalInterest: number
}

const fieldNames: (keyof MortgageInput)[] = ['monthlyIncome', 'existingObligations', 'downPayment', 'interestRate', 'loanTerm']
const fieldSteps: Record<string, string | undefined> = { interestRate: '0.1' }

type Field = { label: string; placeholder: string; hint?: string }
type Item = { label: string; detail: string }
type Source = { label: string; body: string }

export default function MortgageEstimatorPage() {
  const t = useT()
  const fieldsCopy = t<Field[]>('mortgage.form.fields')
  const rulesItems = t<Item[]>('mortgage.rules.items')
  const sources = t<Source[]>('mortgage.sources.items')

  const [inputs, setInputs] = useState<MortgageInput>({
    monthlyIncome: 0,
    existingObligations: 0,
    desiredMonthlyPayment: 0,
    interestRate: 4.0,
    loanTerm: 20,
    downPayment: 0,
  })
  const [result, setResult] = useState<MortgageResult | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
  }

  const handleCalculate = () => setResult(calculateMortgage(inputs) as MortgageResult)

  const fmt = (n: number) => `₪${Math.round(n).toLocaleString('he-IL')}`

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
            {fieldNames.map((name, idx) => {
              const f = fieldsCopy[idx]
              return (
                <div key={name}>
                  <label className="field-label" htmlFor={name}>{f.label}</label>
                  <Input
                    id={name}
                    type="number"
                    name={name}
                    value={inputs[name] || ''}
                    onChange={handleInputChange}
                    placeholder={f.placeholder}
                    step={fieldSteps[name]}
                  />
                  {f.hint && <p className="mt-1.5 text-xs text-[var(--ink-soft)]">{f.hint}</p>}
                </div>
              )
            })}

            <Button onClick={handleCalculate} className="mt-4 w-full">
              {t('mortgage.form.calculate')}
            </Button>
          </div>
        </section>

        <section className="surface-card">
          <h2>{t('mortgage.results.title')}</h2>
          {result ? (
            <div className="space-y-4">
              <div className="stat-tile tone-good">
                <p className="stat-label">{t('mortgage.results.maxLoan')}</p>
                <p className="stat-value">{fmt(result.maxLoan)}</p>
                <p className="stat-foot">{t('mortgage.results.maxLoanFoot')}</p>
              </div>

              <div className="stat-tile tone-brand">
                <p className="stat-label">{t('mortgage.results.maxPrice')}</p>
                <p className="stat-value">{fmt(result.maxPurchasePrice)}</p>
                <p className="stat-foot">{t('mortgage.results.maxPriceFoot')}</p>
              </div>

              <div className="stat-tile tone-warn">
                <p className="stat-label">{t('mortgage.results.monthlyPayment')}</p>
                <p className="stat-value">{fmt(result.monthlyPayment)}</p>
                <p className="stat-foot">{t('mortgage.results.monthlyPaymentFoot')}</p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5">
                <p className="field-label">{t('mortgage.results.debtDetail')}</p>
                <ul className="mt-2 space-y-1.5 text-sm" style={{ listStyle: 'none', padding: 0 }}>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.debtToIncome')}:</span> <strong className="text-[var(--foreground)]">{result.debtToIncomeRatio.toFixed(1)}%</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.paymentRatio')}:</span> <strong className="text-[var(--foreground)]">{result.paymentRatio.toFixed(1)}% {t('mortgage.results.paymentRatioSuffix')}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.totalInterest')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.totalInterest)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('mortgage.results.totalCost')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.maxLoan + result.totalInterest)}</strong></li>
                </ul>
              </div>

              <div className={`callout ${result.debtToIncomeRatio > 50 ? 'callout-danger' : 'callout-warn'}`}>
                <span className="callout-mark">!</span>
                <span>{t('mortgage.results.warnPrefix')} <strong>{result.debtToIncomeRatio.toFixed(1)}%</strong>.</span>
              </div>
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
