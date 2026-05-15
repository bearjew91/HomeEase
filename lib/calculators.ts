/**
 * Financial calculators for HomeEase
 */

export interface BudgetInputs {
  monthlySavings: number
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  existingDebts: number
}

export interface AffordabilityResult {
  monthlyAvailable: number
  monthlyCapacity: number
  downPaymentAvailable: number
  maxPurchasePrice: number
  debtRatio: number
  savingsRate: number
}

export interface MortgageInputs {
  monthlyIncome: number
  existingObligations: number
  desiredMonthlyPayment: number
  interestRate: number
  loanTerm: number
  downPayment: number
}

export interface MortgageResult {
  maxLoan: number
  maxPurchasePrice: number
  monthlyPayment: number
  debtToIncomeRatio: number
  paymentRatio: number
  totalInterest: number
}

/**
 * Calculate affordability based on budget inputs
 */
export function calculateAffordability(inputs: BudgetInputs): AffordabilityResult {
  const {
    monthlyIncome,
    monthlyExpenses,
    currentSavings,
    existingDebts,
  } = inputs

  // Monthly available for savings/mortgage
  const monthlyAvailable = monthlyIncome - monthlyExpenses

  // Conservative: assume 30% of income can go to housing
  const monthlyCapacity = Math.max(0, monthlyAvailable * 0.3)

  // Down payment is savings minus debts
  const downPaymentAvailable = Math.max(0, currentSavings - existingDebts)

  // Rough estimate: assume 20-year mortgage at 4% interest
  // Using simple formula: P = M * ((1 + r)^n - 1) / (r * (1 + r)^n)
  // For simplicity: P ≈ M * (n * 12 / 0.0048)
  const monthlyRate = 0.04 / 12
  const numberOfPayments = 20 * 12
  const loanAmount = monthlyCapacity * (((1 + monthlyRate) ** numberOfPayments - 1) / (monthlyRate * (1 + monthlyRate) ** numberOfPayments))
  
  // Max purchase price = loan + down payment
  const maxPurchasePrice = Math.round(loanAmount + downPaymentAvailable)

  // Debt ratio
  const debtRatio = existingDebts > 0 ? (existingDebts / (currentSavings + loanAmount)) * 100 : 0

  // Savings rate
  const savingsRate = monthlyIncome > 0 ? (monthlyAvailable / monthlyIncome) * 100 : 0

  return {
    monthlyAvailable: Math.round(monthlyAvailable),
    monthlyCapacity: Math.round(monthlyCapacity),
    downPaymentAvailable: Math.round(downPaymentAvailable),
    maxPurchasePrice,
    debtRatio,
    savingsRate,
  }
}

/**
 * Calculate mortgage details
 */
export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const {
    monthlyIncome,
    existingObligations,
    interestRate,
    loanTerm,
    downPayment,
  } = inputs

  // Maximum debt-to-income ratio (typically 60% in Israel)
  const maxDebtToIncomeRatio = 0.60
  const maxTotalObligation = monthlyIncome * maxDebtToIncomeRatio

  // Maximum new mortgage obligation
  const maxMortgageObligation = Math.max(0, maxTotalObligation - existingObligations)

  // Calculate loan amount based on monthly payment
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  
  // Formula: Loan = Payment * ((1 + r)^n - 1) / (r * (1 + r)^n)
  const maxLoan = monthlyRate > 0
    ? maxMortgageObligation * (((1 + monthlyRate) ** numberOfPayments - 1) / (monthlyRate * (1 + monthlyRate) ** numberOfPayments))
    : maxMortgageObligation * numberOfPayments

  // Max purchase price
  const maxPurchasePrice = Math.round(maxLoan + downPayment)

  // Monthly payment
  const monthlyPayment = Math.round(maxMortgageObligation)

  // Calculate total interest
  const totalInterest = (monthlyPayment * numberOfPayments) - maxLoan

  // Debt-to-income ratio
  const debtToIncomeRatio = monthlyIncome > 0 ? ((existingObligations + monthlyPayment) / monthlyIncome) * 100 : 0

  // Payment ratio (mortgage vs income)
  const paymentRatio = monthlyIncome > 0 ? (monthlyPayment / monthlyIncome) * 100 : 0

  return {
    maxLoan: Math.round(maxLoan),
    maxPurchasePrice,
    monthlyPayment,
    debtToIncomeRatio,
    paymentRatio,
    totalInterest: Math.round(totalInterest),
  }
}

/**
 * Calculate project fit score (placeholder for future enhancement)
 */
export function calculateProjectFitScore(userBudget: number, projectPrice: number, userPreferences: any): number {
  // Placeholder: return a score from 0-100
  const priceDifference = Math.abs(userBudget - projectPrice) / userBudget
  
  if (priceDifference < 0.1) return 100
  if (priceDifference < 0.2) return 85
  if (priceDifference < 0.3) return 70
  if (priceDifference < 0.5) return 50
  return 30
}
