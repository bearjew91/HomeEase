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
// Budget calculator — works backwards from "what can I afford?"
// ---------------------------------------------------------------------------

export interface BudgetInputs {
  netMonthlyHouseholdIncome: number
  currentMonthlyExpenses: number
  existingMonthlyLoanPayments: number
  monthlyRentUntilEntry?: number
  availableCashSavings: number
  /** Cash to reserve for emergencies. Defaults to 3× monthly income. */
  emergencyFundToKeep?: number
  /** Lawyer, moving, furniture, indexation buffer. Default ₪50k. */
  expectedExtraPurchaseCosts?: number
  hasEligibleGrant: boolean
  expectedGrantAmount?: number
  annualInterestRate?: number
  termYears?: number
}

export interface BudgetResult {
  /** Cash the user can actually put toward the apartment. */
  availableEquityForApartment: number
  /** Emergency fund target. */
  emergencyFundToKeep: number
  /** Extra purchase-related costs reserved. */
  expectedExtraPurchaseCosts: number
  /** Net income minus fixed outflows. */
  monthlyFreeCashflow: number
  /** Conservative monthly housing payment cap. */
  safeMonthlyCapacity: number
  /** Max loan supported by safeMonthlyCapacity. */
  maxLoanByIncome: number
  /** Conservative max purchase price = equity + max loan. */
  estimatedMaxPurchasePrice: number
  /** Same number, re-validated by the mortgage calc to confirm it passes LTV + PTI + equity floor. */
  verified: MortgageResult
  /** Savings rate as % of net income. */
  savingsRate: number
}

export function calculateAffordability(input: BudgetInputs): BudgetResult {
  const rate = input.annualInterestRate ?? DEFAULT_ANNUAL_INTEREST_RATE
  const term = Math.min(input.termYears ?? MAX_MORTGAGE_TERM_YEARS, MAX_MORTGAGE_TERM_YEARS)
  const emergencyFundToKeep = input.emergencyFundToKeep ?? input.netMonthlyHouseholdIncome * 3
  const expectedExtraPurchaseCosts = input.expectedExtraPurchaseCosts ?? 50_000

  const availableEquityForApartment = Math.max(
    0,
    input.availableCashSavings - emergencyFundToKeep - expectedExtraPurchaseCosts,
  )

  const monthlyFreeCashflow = Math.max(
    0,
    input.netMonthlyHouseholdIncome
      - input.currentMonthlyExpenses
      - input.existingMonthlyLoanPayments
      - (input.monthlyRentUntilEntry ?? 0),
  )

  // Use the *lower* of "30% of net income" and "70% of free cashflow" —
  // protects against both income-rich/expense-rich and income-poor/expense-light cases.
  const safeMonthlyCapacity = Math.min(
    input.netMonthlyHouseholdIncome * PTI.safe,
    monthlyFreeCashflow * 0.70,
  )

  const maxLoanByIncome = principalFromPayment(safeMonthlyCapacity, rate, term)
  const estimatedMaxPurchasePrice = Math.max(0, availableEquityForApartment + maxLoanByIncome)

  // Re-run through the mortgage calc with the estimated price to confirm it passes
  // LTV + PTI + equity-floor in combination (not just in isolation).
  const verified = calculateMortgage({
    purchasePrice: estimatedMaxPurchasePrice,
    netMonthlyHouseholdIncome: input.netMonthlyHouseholdIncome,
    existingMonthlyLoanPayments: input.existingMonthlyLoanPayments,
    monthlyRentUntilEntry: input.monthlyRentUntilEntry,
    availableCashEquity: availableEquityForApartment,
    hasEligibleGrant: input.hasEligibleGrant,
    useSubsidizedRules: true,
    annualInterestRate: rate,
    termYears: term,
  })

  const savingsRate = input.netMonthlyHouseholdIncome > 0
    ? (monthlyFreeCashflow / input.netMonthlyHouseholdIncome) * 100
    : 0

  return {
    availableEquityForApartment,
    emergencyFundToKeep,
    expectedExtraPurchaseCosts,
    monthlyFreeCashflow,
    safeMonthlyCapacity,
    maxLoanByIncome,
    estimatedMaxPurchasePrice,
    verified,
    savingsRate,
  }
}
