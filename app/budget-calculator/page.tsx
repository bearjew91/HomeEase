'use client'

import { useState } from 'react'
import { calculateAffordability } from '@/lib/calculators'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'

interface BudgetInput {
  monthlySavings: number
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  existingDebts: number
}

export default function BudgetCalculatorPage() {
  const [inputs, setInputs] = useState<BudgetInput>({
    monthlySavings: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    currentSavings: 0,
    existingDebts: 0,
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
    const affordability = calculateAffordability(inputs)
    setResult(affordability)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Budget Calculator</h1>
        <p className="text-xl text-gray-600">
          Understand what you can realistically afford for a home purchase.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Input Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Financial Situation</h2>
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
              <label className="block text-sm font-semibold mb-2">Monthly Expenses (₪)</label>
              <Input
                type="number"
                name="monthlyExpenses"
                value={inputs.monthlyExpenses}
                onChange={handleInputChange}
                placeholder="10000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Current Savings (₪)</label>
              <Input
                type="number"
                name="currentSavings"
                value={inputs.currentSavings}
                onChange={handleInputChange}
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Existing Debts (₪)</label>
              <Input
                type="number"
                name="existingDebts"
                value={inputs.existingDebts}
                onChange={handleInputChange}
                placeholder="50000"
              />
            </div>

            <Button 
              onClick={handleCalculate}
              className="w-full bg-primary text-white hover:bg-secondary"
            >
              Calculate Affordability
            </Button>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Results</h2>
          {result ? (
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Monthly Capacity</h3>
                <p className="text-3xl font-bold text-green-600">
                  ₪{result.monthlyCapacity.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Maximum monthly mortgage payment you can afford
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Down Payment Available</h3>
                <p className="text-3xl font-bold text-blue-600">
                  ₪{result.downPaymentAvailable.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Your current savings minus debts
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
                <h3 className="font-semibold text-lg mb-2">Estimated Max Purchase Price</h3>
                <p className="text-3xl font-bold text-amber-600">
                  ₪{result.maxPurchasePrice.toLocaleString('he-IL')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Rough estimate based on current mortgage assumptions
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h3 className="font-semibold mb-3">📊 Breakdown</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Monthly available:</strong> ₪{result.monthlyAvailable.toLocaleString('he-IL')}</li>
                  <li><strong>Debt ratio:</strong> {result.debtRatio.toFixed(1)}%</li>
                  <li><strong>Savings rate:</strong> {result.savingsRate.toFixed(0)}% of income</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm text-yellow-800">
                <strong>⚠️ Note:</strong> This is an estimate. Actual mortgage approval depends on bank underwriting and current interest rates.
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">
                Enter your financial information and click "Calculate" to see your results.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 p-6 bg-accent/10 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Next Step</h3>
        <p className="text-gray-700 mb-4">
          Now that you know your budget, let's estimate your mortgage capacity and explore projects that fit your needs.
        </p>
        <a href="/mortgage-estimator" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Go to Mortgage Estimator
        </a>
      </div>
    </div>
  )
}
