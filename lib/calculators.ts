/**
 * HomeEase calculators — Israeli housing-lottery mortgage + budget planning.
 *
 * All rules and thresholds are sourced from the spec at
 * `homeease-israeli-housing-lottery-calculator-spec-he.md` (2026-05-24),
 * which cites Bank of Israel directive 329 and Kol-Zchut.
 *
 * These calculators are conservative planning estimates — not bank approvals.
 */

// ---------------------------------------------------------------------------
// Regulatory + planning constants
// ---------------------------------------------------------------------------

/** BoI 329: max LTV by purchase type. */
export const LTV_CAP = {
  first_home: 0.75,
  replacement: 0.70,
  investment: 0.50,
} as const

/** Subsidized housing appraisal cap (Feb 2026 update, raised from ₪1.8M). */
export const SUBSIDIZED_APPRAISAL_CAP = 2_100_000

/** Minimum own-funds floors for subsidized homes (BoI 329). */
export const MIN_OWN_FUNDS = {
  withGrant: 60_000,
  withoutGrant: 100_000,
} as const

/** Payment-to-income tiers. 0.50 is the BoI 329 hard ceiling. */
export const PTI = {
  safe: 0.30,
  stretched: 0.40,
  hard: 0.50,
} as const

/** BoI 329: max mortgage term. */
export const MAX_MORTGAGE_TERM_YEARS = 30

/** Default planning interest rate (illustrative — banks set the real rate). */
export const DEFAULT_ANNUAL_INTEREST_RATE = 0.05

// ---------------------------------------------------------------------------
// Core math
// ---------------------------------------------------------------------------

/** Standard Spitzer monthly payment for an annuity loan. */
export function monthlyPayment(
  principal: number,
  annualRate: number,
  termYears: number,
): number {
  const months = termYears * 12
  if (months <= 0) return 0
  const r = annualRate / 12
  if (r === 0) return principal / months
  return (principal * (r * Math.pow(1 + r, months))) / (Math.pow(1 + r, months) - 1)
}

/** Inverse — max loan principal for a given monthly payment. */
export function principalFromPayment(
  monthlyPay: number,
  annualRate: number,
  termYears: number,
): number {
  const months = termYears * 12
  if (months <= 0 || monthlyPay <= 0) return 0
  const r = annualRate / 12
  if (r === 0) return monthlyPay * months
  return (monthlyPay * (Math.pow(1 + r, months) - 1)) / (r * Math.pow(1 + r, months))
}

// ---------------------------------------------------------------------------
// Mortgage calculator
// ---------------------------------------------------------------------------

export type PurchaseType = 'first_home' | 'replacement' | 'investment'

export interface MortgageInputs {
  purchasePrice: number
  /** Bank appraisal of market value. Optional — defaults to purchasePrice. */
  appraisedMarketValue?: number
  netMonthlyHouseholdIncome: number
  existingMonthlyLoanPayments: number
  monthlyRentUntilEntry?: number
  childSupportOrAlimony?: number
  otherFixedMonthlyObligations?: number
  /** Cash the buyer can put down (savings, gifts, sale proceeds). */
  availableCashEquity: number
  /** Whether the project qualifies for the eligible-buyer grant. */
  hasEligibleGrant: boolean
  /** Subsidized-housing LTV rule (₪2.1M cap). Default true for HomeEase users. */
  useSubsidizedRules?: boolean
  /** Optional legacy floor: max(reg floor, 10% of price). Default false. */
  useLegacyTenPercentFloor?: boolean
  purchaseType?: PurchaseType
  annualInterestRate?: number
  termYears?: number
}

export type ResultCategory = 'green' | 'yellow' | 'orange' | 'red'

export interface MortgageResult {
  /** LTV-eligible value (purchase price or capped appraisal). */
  ltvValue: number
  /** Maximum loan permitted by LTV rules. */
  maxLoanByLtv: number
  /** Regulatory floor (₪60k/₪100k, plus optional 10% legacy). */
  ownFundsFloor: number
  /** Equity the buyer actually needs to bring (max of floor or LTV gap). */
  requiredEquity: number
  /** Equity shortfall vs. what the buyer has. 0 if they're covered. */
  equityGap: number
  /** Buyer's disposable monthly income after fixed obligations. */
  disposableMonthlyIncome: number
  /** Max loan principal by PTI tier (planning, planning-stretched, regulatory). */
  maxLoanBySafePti: number
  maxLoanByWarningPti: number
  maxLoanByHardPti: number
  /** Final max loan = min(LTV cap, PTI cap). */
  maxLoanSafe: number
  maxLoanStretched: number
  maxLoanHard: number
  /** Loan size the buyer is actually asking for at this price. */
  requestedLoan: number
  /** Monthly payment for that requested loan at the assumed rate/term. */
  requestedMonthlyPayment: number
  /** Requested payment as a share of disposable income. */
  requestedPti: number
  /** Planning category — green/yellow/orange/red per spec §7. */
  category: ResultCategory
  /** True if the deal fits in the conservative (safe) plan. */
  canProceedConservative: boolean
  /** True if it fits the stretched plan (yellow ceiling). */
  canProceedStretched: boolean
  /** True if it fits the regulatory hard cap (still risky). */
  canProceedRegulatoryMax: boolean
}

function getLtvCap(input: MortgageInputs): number {
  return LTV_CAP[input.purchaseType ?? 'first_home']
}

export function getLtvValue(input: MortgageInputs): number {
  const price = input.purchasePrice
  const appraised = input.appraisedMarketValue ?? price
  if (!input.useSubsidizedRules) return price
  if (appraised > SUBSIDIZED_APPRAISAL_CAP) {
    return Math.max(SUBSIDIZED_APPRAISAL_CAP, price)
  }
  return appraised
}

export function getOwnFundsFloor(input: MortgageInputs): number {
  // Per spec §3.3, the ₪60k/₪100k floors are specific to subsidized purchases.
  // For non-subsidized buys the LTV cap is the only regulatory equity rule.
  if (!input.useSubsidizedRules) {
    return input.useLegacyTenPercentFloor ? input.purchasePrice * 0.10 : 0
  }
  const regulatoryFloor = input.hasEligibleGrant
    ? MIN_OWN_FUNDS.withGrant
    : MIN_OWN_FUNDS.withoutGrant
  if (input.useLegacyTenPercentFloor) {
    return Math.max(regulatoryFloor, input.purchasePrice * 0.10)
  }
  return regulatoryFloor
}

export function getDisposableMonthlyIncome(input: MortgageInputs): number {
  return Math.max(
    0,
    input.netMonthlyHouseholdIncome
      - input.existingMonthlyLoanPayments
      - (input.monthlyRentUntilEntry ?? 0)
      - (input.childSupportOrAlimony ?? 0)
      - (input.otherFixedMonthlyObligations ?? 0),
  )
}

function categorize(
  hasEnoughEquity: boolean,
  requestedLoan: number,
  maxLoanByLtv: number,
  requestedPti: number,
): ResultCategory {
  if (!hasEnoughEquity) return 'red'
  if (requestedLoan > maxLoanByLtv) return 'red'
  if (requestedPti > PTI.hard) return 'red'
  if (requestedPti > PTI.stretched) return 'orange'
  if (requestedPti > PTI.safe) return 'yellow'
  return 'green'
}

export function calculateMortgage(input: MortgageInputs): MortgageResult {
  const rate = input.annualInterestRate ?? DEFAULT_ANNUAL_INTEREST_RATE
  const term = Math.min(input.termYears ?? MAX_MORTGAGE_TERM_YEARS, MAX_MORTGAGE_TERM_YEARS)
  const useSubsidized = input.useSubsidizedRules ?? true
  const normalized: MortgageInputs = { ...input, useSubsidizedRules: useSubsidized }

  const ltvCap = getLtvCap(normalized)
  const ltvValue = getLtvValue(normalized)
  const maxLoanByLtvRaw = ltvValue * ltvCap

  const ownFundsFloor = getOwnFundsFloor(normalized)
  const requiredEquity = Math.max(ownFundsFloor, input.purchasePrice - maxLoanByLtvRaw)
  const equityGap = Math.max(0, requiredEquity - input.availableCashEquity)

  // A bank won't lend more than the buyer actually needs after their equity.
  const maxLoanByLtv = Math.max(0, Math.min(maxLoanByLtvRaw, input.purchasePrice - requiredEquity))

  const disposable = getDisposableMonthlyIncome(normalized)
  const maxLoanBySafePti = principalFromPayment(disposable * PTI.safe, rate, term)
  const maxLoanByWarningPti = principalFromPayment(disposable * PTI.stretched, rate, term)
  const maxLoanByHardPti = principalFromPayment(disposable * PTI.hard, rate, term)

  const maxLoanSafe = Math.min(maxLoanByLtv, maxLoanBySafePti)
  const maxLoanStretched = Math.min(maxLoanByLtv, maxLoanByWarningPti)
  const maxLoanHard = Math.min(maxLoanByLtv, maxLoanByHardPti)

  const requestedLoan = Math.max(0, input.purchasePrice - input.availableCashEquity)
  const requestedMonthlyPayment = monthlyPayment(requestedLoan, rate, term)
  const requestedPti = disposable > 0 ? requestedMonthlyPayment / disposable : Infinity

  const hasEnoughEquity = input.availableCashEquity >= requiredEquity
  const category = categorize(hasEnoughEquity, requestedLoan, maxLoanByLtv, requestedPti)

  return {
    ltvValue,
    maxLoanByLtv,
    ownFundsFloor,
    requiredEquity,
    equityGap,
    disposableMonthlyIncome: disposable,
    maxLoanBySafePti,
    maxLoanByWarningPti,
    maxLoanByHardPti,
    maxLoanSafe,
    maxLoanStretched,
    maxLoanHard,
    requestedLoan,
    requestedMonthlyPayment,
    requestedPti,
    category,
    canProceedConservative: hasEnoughEquity && requestedLoan <= maxLoanSafe,
    canProceedStretched: hasEnoughEquity && requestedLoan <= maxLoanStretched,
    canProceedRegulatoryMax: hasEnoughEquity && requestedLoan <= maxLoanHard,
  }
}

// ---------------------------------------------------------------------------
// Affordability — the simple, three-input version
// ---------------------------------------------------------------------------
//
// Three inputs the user actually knows off the top of their head:
//   - cash they can put down today
//   - net monthly household income
//   - existing monthly loan payments
//
// Math:
//   disposable = netIncome − loans
//   monthlyPaymentAt(tier) = disposable × {30%, 40%, 50%}
//   maxLoanAt(tier) = inverse-annuity(monthlyPaymentAt(tier))
//   maxPriceAt(tier) = cash + maxLoanAt(tier)
//
// Three tiers map to the green/yellow/orange traffic light from spec §7.
// Anything tighter than green stays red.

export interface AffordabilityInputs {
  availableCash: number
  netMonthlyIncome: number
  existingMonthlyLoanPayments: number
  annualInterestRate?: number
  termYears?: number
}

export interface AffordabilityTier {
  category: ResultCategory
  ptiRatio: number
  monthlyPayment: number
  maxLoan: number
  maxPurchasePrice: number
}

export interface AffordabilityResult {
  disposableMonthlyIncome: number
  availableCash: number
  /** Recommended (safe) tier — the headline number. */
  safe: AffordabilityTier
  /** 40% PTI — tight but possible. */
  stretched: AffordabilityTier
  /** 50% PTI — BoI regulatory ceiling. */
  hard: AffordabilityTier
}

export function calculateAffordability(input: AffordabilityInputs): AffordabilityResult {
  const rate = input.annualInterestRate ?? DEFAULT_ANNUAL_INTEREST_RATE
  const term = Math.min(input.termYears ?? MAX_MORTGAGE_TERM_YEARS, MAX_MORTGAGE_TERM_YEARS)
  const cash = Math.max(0, input.availableCash)
  const disposable = Math.max(0, input.netMonthlyIncome - input.existingMonthlyLoanPayments)

  const tier = (category: ResultCategory, ptiRatio: number): AffordabilityTier => {
    const monthlyPay = disposable * ptiRatio
    const maxLoan = principalFromPayment(monthlyPay, rate, term)
    return {
      category,
      ptiRatio,
      monthlyPayment: monthlyPay,
      maxLoan,
      maxPurchasePrice: cash + maxLoan,
    }
  }

  return {
    disposableMonthlyIncome: disposable,
    availableCash: cash,
    safe: tier('green', PTI.safe),
    stretched: tier('yellow', PTI.stretched),
    hard: tier('orange', PTI.hard),
  }
}
