'use client'

import { useState } from 'react'
import Link from 'next/link'
import { calculateAffordability } from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useT } from '@/lib/i18n/LocaleProvider'

interface BudgetInput {
  monthlySavings: number
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  existingDebts: number
}

interface BudgetResult {
  monthlyCapacity: number
  downPaymentAvailable: number
  maxPurchasePrice: number
  monthlyAvailable: number
  debtRatio: number
  savingsRate: number
}

const fieldNames: (keyof BudgetInput)[] = ['monthlyIncome', 'monthlyExpenses', 'currentSavings', 'existingDebts']

type Field = { label: string; placeholder: string; hint?: string }
type Item = { label: string; detail: string }
type Source = { label: string; body: string }

export default function BudgetCalculatorPage() {
  const t = useT()
  const fieldsCopy = t<Field[]>('budget.form.fields')
  const rulesItems = t<Item[]>('budget.rules.items')
  const grantsItems = t<Item[]>('budget.rules.grants')
  const sources = t<Source[]>('budget.sources.items')

  const [inputs, setInputs] = useState<BudgetInput>({
    monthlySavings: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    currentSavings: 0,
    existingDebts: 0,
  })
  const [result, setResult] = useState<BudgetResult | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
  }

  const handleCalculate = () => setResult(calculateAffordability(inputs) as BudgetResult)

  const fmt = (n: number) => `₪${Math.round(n).toLocaleString('he-IL')}`

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

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="surface-card">
          <h2>{t('budget.form.title')}</h2>
          <p className="mb-6">{t('budget.form.intro')}</p>

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
                  />
                  {f.hint && <p className="mt-1.5 text-xs text-[var(--ink-soft)]">{f.hint}</p>}
                </div>
              )
            })}

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
                <p className="stat-label">{t('budget.results.monthlyCapacity')}</p>
                <p className="stat-value">{fmt(result.monthlyCapacity)}</p>
                <p className="stat-foot">{t('budget.results.monthlyCapacityFoot')}</p>
              </div>

              <div className="stat-tile tone-brand">
                <p className="stat-label">{t('budget.results.downPayment')}</p>
                <p className="stat-value">{fmt(result.downPaymentAvailable)}</p>
                <p className="stat-foot">{t('budget.results.downPaymentFoot')}</p>
              </div>

              <div className="stat-tile tone-warn">
                <p className="stat-label">{t('budget.results.maxPrice')}</p>
                <p className="stat-value">{fmt(result.maxPurchasePrice)}</p>
                <p className="stat-foot">{t('budget.results.maxPriceFoot')}</p>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.7)] p-5">
                <p className="field-label">{t('budget.results.breakdown')}</p>
                <ul className="mt-2 space-y-1.5 text-sm" style={{ listStyle: 'none', padding: 0 }}>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.monthlyAvailable')}:</span> <strong className="text-[var(--foreground)]">{fmt(result.monthlyAvailable)}</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.debtRatio')}:</span> <strong className="text-[var(--foreground)]">{result.debtRatio.toFixed(1)}%</strong></li>
                  <li><span className="text-[var(--ink-soft)]">{t('budget.results.savingsRate')}:</span> <strong className="text-[var(--foreground)]">{result.savingsRate.toFixed(0)}% {t('budget.results.savingsRateSuffix')}</strong></li>
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
        <Link href="/mortgage-estimator" className="step-cta">{t('budget.next.cta')}</Link>
      </aside>
    </div>
  )
}
