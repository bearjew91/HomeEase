/**
 * TypeScript types for HomeEase
 */

export interface User {
  id: string
  email: string
  name: string
  dateOfBirth?: Date
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed'
  numberOfChildren?: number
}

export interface Project {
  id: string
  name: string
  city: string
  neighborhood: string
  apartmentSizes: number[] // bedrooms
  priceRange: {
    min: number
    max: number
  }
  subsidyAmount: number
  numberOfUnits: number
  completionDate?: Date
  registrationDeadline?: Date
  competitionLevel?: 'low' | 'medium' | 'high'
}

export interface UserProfile {
  userId: string
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  existingDebts: number
  preferredCities: string[]
  apartmentSizeNeeded: number
  maxBudget: number
  riskTolerance: 'low' | 'medium' | 'high'
}

export interface CalculatorResult {
  type: 'affordability' | 'mortgage'
  timestamp: Date
  inputs: any
  outputs: any
}

export interface LotteryApplication {
  id: string
  userId: string
  projectId: string
  status: 'registered' | 'approved' | 'rejected' | 'won' | 'lost'
  applicationDate: Date
  registrationNumber?: string
}

export interface WinnerChecklistItem {
  id: string
  title: string
  description: string
  dueDate: Date
  isCompleted: boolean
  category: 'documents' | 'financial' | 'legal' | 'inspection'
}
