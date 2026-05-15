/**
 * Sample project data structure
 * This file will be populated with real data from Israeli housing lotteries
 */

import { Project } from './types'

export const sampleProjects: Project[] = [
  {
    id: 'project-1',
    name: 'Mechir LeMishtaken Project - Tel Aviv',
    city: 'Tel Aviv',
    neighborhood: 'Ramat Hasharon',
    apartmentSizes: [2, 3, 4],
    priceRange: {
      min: 1800000,
      max: 2800000,
    },
    subsidyAmount: 350000,
    numberOfUnits: 48,
    competitionLevel: 'high',
  },
  {
    id: 'project-2',
    name: 'Affordability Program - Ashdod',
    city: 'Ashdod',
    neighborhood: 'Barkai',
    apartmentSizes: [2, 3],
    priceRange: {
      min: 900000,
      max: 1500000,
    },
    subsidyAmount: 200000,
    numberOfUnits: 72,
    competitionLevel: 'medium',
  },
  {
    id: 'project-3',
    name: 'Development Initiative - Beer Sheva',
    city: 'Beer Sheva',
    neighborhood: 'Downtown',
    apartmentSizes: [1, 2, 3],
    priceRange: {
      min: 600000,
      max: 1200000,
    },
    subsidyAmount: 250000,
    numberOfUnits: 96,
    competitionLevel: 'low',
  },
]

export function getProjectById(id: string): Project | undefined {
  return sampleProjects.find(p => p.id === id)
}

export function getProjectsByCity(city: string): Project[] {
  return sampleProjects.filter(p => p.city.toLowerCase() === city.toLowerCase())
}

export function getProjectsByBudget(minBudget: number, maxBudget: number): Project[] {
  return sampleProjects.filter(p => 
    p.priceRange.min <= maxBudget && p.priceRange.max >= minBudget
  )
}
