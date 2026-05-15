'use client'

import { useState } from 'react'
import { calculateMortgage } from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'

interface MortgageInput {
  monthlyIncome: number
  existingObligations: number
  desiredMonthlyPayment: number
  interestRate: number
  loanTerm: number
  downPayment: number
}

export default function MortgageEstimatorPage() {
  const [inputs, setInputs] = useState<MortgageInput>({
    monthlyIncome: 0,
    existingObligations: 0,
    desiredMonthlyPayment: 0,
    interestRate: 4.0,
    loanTerm: 20,
    downPayment: 0,
  })

  const [result, setResult] = useState<any>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }))
  }

  const handleCalculate = () => {
    const mortgage = calculateMortgage(inputs)
    setResult(mortgage)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Mortgage Estimator</h1>
        <p className="text-xl text-gray-600">
          Understand your loan eligibility and estimated monthly payments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Input Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Mortgage Details</h2>
          <div className="space-y-6 bg-white p-6 rounded-lg shadow">
            
            <div>
              <label className="block text-sm font-semibold mb-2">Monthly Net Income (₪)</label>
              <Input
                type="number"
                name="monthlyIncome"
                value={inputs.monthlyIncome}
                onChange={handleInputChange}
                placeholder="15000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Existing Monthly Obligations (₪)</label>
              <Input
                type="number"
                name="existingObligations"
                value={inputs.existingObligations}
                onChange={handleInputChange}
                placeholder="2000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Down Payment Available (₪)</label>
              <Input
                type="number"
                name="downPayment"
                value={inputs.downPayment}
                onChange={handleInputChange}
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Interest Rate (%)</label>
              <Input
                type="number"
                name="interestRate"
                value={inputs.interestRate}
                onChange={handleInputChange}
                placeholder="4.0"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Loan Term (Years)</label>
              <Input
                type="number"
                name="loanTerm"
                value={inputs.loanTerm}
                onChange={handleInputChange}
                placeholder="20"
              />
            </div>

            <Button 
              onClick={handleCalculate}
              className="w-full bg-primary text-white hover:bg-secondary"
            >
              Calculate Mortgage
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Results</h2>
          {result ? (
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Max Loan Amount</h3>
                <p className="text-3xl font-bold text-green-600">
                  ₪{result.maxLoan.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Based on your income and obligations
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Max Purchase Price</h3>
                <p className="text-3xl font-bold text-blue-600">
                  ₪{result.maxPurchasePrice.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Including your down payment
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Monthly Payment</h3>
                <p className="text-3xl font-bold text-amber-600">
                  ₪{result.monthlyPayment.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Principal + interest only
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h3 className="font-semibold mb-3">📊 Debt Details</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Debt-to-income ratio:</strong> {result.debtToIncomeRatio.toFixed(1)}%</li>
                  <li><strong>Payment ratio:</strong> {result.paymentRatio.toFixed(1)}% of income</li>
                  <li><strong>Total interest:</strong> ₪{result.totalInterest.toLocaleString('he-IL')}</li>
                  <li><strong>Total cost:</strong> ₪{(result.maxLoan + result.totalInterest).toLocaleString('he-IL')}</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-yellow-800">
                <strong>⚠️ Limits:</strong> Most banks cap debt-to-income at 60%. Your ratio is {result.debtToIncomeRatio.toFixed(1)}%.
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">
                Enter your information and click "Calculate" to estimate your mortgage.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Next Step</h3>
        <p className="text-gray-700 mb-4">
          Now that you know your budget and mortgage capacity, let's find projects that match your needs.
        </p>
        <a href="/project-finder" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Find Projects
        </a>
      </div>
    </div>
  )
}
