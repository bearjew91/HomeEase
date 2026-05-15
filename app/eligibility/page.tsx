'use client'

import Link from 'next/link'
import {
  canonicalEligibilityRules,
  disqualificationConditions,
  eligibilityDecisionSummary,
  openQuestions,
  operationalFacts,
  outputCategories,
  priorityOverlay,
  requiredEligibilityDocuments,
  screeningQuestions,
} from '@/lib/eligibility'

const toneStyles = {
  eligible: 'border-emerald-200 bg-emerald-50',
  special: 'border-blue-200 bg-blue-50',
  ineligible: 'border-rose-200 bg-rose-50',
  conditional: 'border-amber-200 bg-amber-50',
} as const

export default function EligibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <span className="section-label">Eligibility data pack</span>
        <h1 className="mt-4 mb-4 text-4xl font-bold">HomeEase Eligibility Check</h1>
        <p className="text-xl text-gray-600">
          Use this page as the source of truth for HomeEase eligibility screening, document
          collection, and priority logic.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[rgba(255,250,242,0.86)] p-6">
        <p className="text-lg text-gray-700">
          <strong>Important:</strong> HomeEase should never guarantee eligibility, mortgage
          approval, or legal certainty. Use{' '}
          <span className="font-semibold">likely eligible pending documents</span> when proof is
          missing and <span className="font-semibold">cannot determine</span> when legal,
          property, or military status is unclear.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Eligibility Decision Summary</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {eligibilityDecisionSummary.map((section) => (
              <div
                key={section.title}
                className={`rounded-2xl border p-6 ${toneStyles[section.tone]}`}
              >
                <h3 className="mb-3 text-xl font-semibold">{section.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-bold">Canonical Eligibility Rules</h2>
          <p className="mb-4 text-gray-600">
            These are the internal rules the wizard should map to explicitly.
          </p>
          <div className="space-y-4">
            {canonicalEligibilityRules.map((rule) => (
              <div
                key={rule.rule_id}
                className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[rgba(154,52,18,0.08)] px-3 py-1 text-sm font-semibold text-[var(--brand-deep)]">
                    {rule.rule_id}
                  </span>
                  <p className="text-sm uppercase tracking-[0.12em] text-[var(--ink-soft)]">
                    {rule.rule_type}
                  </p>
                  <p className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    Confidence: {rule.confidence}
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{rule.rule_description}</h3>
                <dl className="mt-4 grid gap-4 md:grid-cols-3">
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Condition Logic</dt>
                    <dd className="mt-1 text-sm text-gray-700">{rule.condition_logic}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Required Evidence</dt>
                    <dd className="mt-1 text-sm text-gray-700">{rule.required_evidence}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-900">Exceptions</dt>
                    <dd className="mt-1 text-sm text-gray-700">{rule.exceptions}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Required Documents</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {requiredEligibilityDocuments.map((document) => (
              <div
                key={document.document}
                className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{document.document}</h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Who:</strong> {document.who_must_provide_it}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Purpose:</strong> {document.purpose}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Authority:</strong> {document.issuing_authority}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Validity:</strong> {document.validity_window}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Notes:</strong> {document.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Disqualification Conditions</h2>
            <div className="space-y-4">
              {disqualificationConditions.map((item) => (
                <div key={item.condition} className="border-l-4 border-rose-300 pl-4">
                  <h3 className="font-semibold">{item.condition}</h3>
                  <p className="mt-1 text-sm text-gray-700">{item.why_it_disqualifies}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    <strong>Appeal path:</strong> {item.appeal_path}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Priority Overlay</h2>
            <ol className="space-y-3 text-gray-700">
              {priorityOverlay.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(154,52,18,0.08)] text-sm font-semibold text-[var(--brand-deep)]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <h3 className="mt-8 text-lg font-semibold">Operational Facts To Track</h3>
            <div className="mt-4 space-y-3">
              {operationalFacts.map((fact) => (
                <div key={fact.label} className="rounded-xl bg-slate-50 px-4 py-3">
                  <p className="text-sm text-[var(--ink-soft)]">{fact.label}</p>
                  <p className="font-semibold text-slate-900">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">User-Friendly Screening Questions</h2>
          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm">
            <ol className="space-y-4">
              {screeningQuestions.map((question) => (
                <li
                  key={question.id}
                  className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="font-semibold text-gray-900">
                    {question.id}. {question.question}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Rule: {question.rule_id} · Answer type: {question.answer_type}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Final Output Categories</h2>
            <div className="space-y-4">
              {outputCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Open Questions</h2>
            <div className="space-y-4">
              {openQuestions.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 rounded-lg bg-accent/10 p-6">
        <h3 className="mb-2 text-lg font-bold">Next Step</h3>
        <p className="mb-4 text-gray-700">
          Once you confirm you're eligible, move on to understanding your budget and mortgage
          capacity.
        </p>
        <Link
          href="/budget-calculator"
          aria-label="Go to the budget calculator"
          className="inline-block rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-secondary"
        >
          Go to Budget Calculator
        </Link>
      </div>
    </div>
  )
}
