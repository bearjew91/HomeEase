export type EligibilityStatus =
  | 'eligible'
  | 'likely_eligible_pending_documents'
  | 'not_eligible'
  | 'cannot_determine'

export type FamilyStatus =
  | 'married'
  | 'common_law'
  | 'engaged'
  | 'single'
  | 'parent'
  | 'divorced'
  | 'widow'

export interface EligibilityProfile {
  status: FamilyStatus
  age: number
  owns_property: boolean
  is_reservist: boolean
  is_combat?: boolean
  is_citizen_or_resident: boolean
  is_kibbutz_member: boolean
  signed_prior_subsidized_contract: boolean
  has_child_under_21_in_custody?: boolean
  disability_percent?: number
  is_wheelchair_bound?: boolean
  ben_makom_city?: string
  lived_3_years_in_city?: boolean
  lived_4_of_10_years_in_city?: boolean
}

export interface EligibilityResult {
  status: EligibilityStatus
  reasons: string[]
  required_documents: string[]
  priority_flags: {
    reservist: boolean
    combat_reservist: boolean
    ben_makom: boolean
    disabled: boolean
  }
  requires_manual_review: boolean
}

export interface EligibilitySummarySection {
  title: string
  tone: 'eligible' | 'special' | 'ineligible' | 'conditional'
  items: string[]
}

export interface EligibilityRule {
  rule_id: string
  rule_type: string
  rule_description: string
  condition_logic: string
  required_evidence: string
  exceptions: string
  confidence: 'high' | 'medium' | 'low'
}

export interface RequiredDocument {
  document: string
  who_must_provide_it: string
  purpose: string
  issuing_authority: string
  validity_window: string
  notes: string
}

export interface DisqualificationCondition {
  condition: string
  why_it_disqualifies: string
  duration: string
  appeal_path: string
}

export interface ScreeningQuestion {
  id: number
  question: string
  rule_id: string
  answer_type: string
}

export interface OutputCategory {
  title: string
  description: string
}

export interface OperationalFact {
  label: string
  value: string
}

export interface OpenQuestion {
  title: string
  status: string
}

export const eligibilityDecisionSummary: EligibilitySummarySection[] = [
  {
    title: 'Clearly Eligible',
    tone: 'eligible',
    items: [
      'Married couples.',
      'Common-law / cohabiting couples.',
      'Couples engaged to be married within 3 months.',
      'Applicants who did not own more than one-third of a residential property in the last 3 years.',
    ],
  },
  {
    title: 'Clearly Eligible — Singles',
    tone: 'eligible',
    items: [
      'Single individuals aged 35+.',
      'Divorcees aged 35+.',
      'Widows / widowers aged 35+.',
      'Must still meet the Lack of Housing / Hasar Diur rules.',
    ],
  },
  {
    title: 'Eligible — Special Tracks',
    tone: 'special',
    items: [
      'Singles aged 26–35 under the Young Settler / Mishtaken Tza’ir track.',
      'Applicants aged 21+ with a recognized 75%+ medical disability.',
      'Applicants with specific mobility limitations.',
      'Wheelchair-bound applicants.',
    ],
  },
  {
    title: 'Clearly Ineligible',
    tone: 'ineligible',
    items: [
      'Anyone who owned more than one-third of a residential property in the last 3 years.',
      'Anyone who held rights in residential land in the last 3 years.',
      'Anyone who already realized eligibility by signing a contract in a prior subsidized housing program.',
      'Kibbutz members.',
    ],
  },
  {
    title: 'Conditional — Housing Improvers',
    tone: 'conditional',
    items: [
      'Current owners of a single property may participate only in follow-up lotteries.',
      'They must commit to selling their current property within 12 months of occupying the new property.',
    ],
  },
]

export const canonicalEligibilityRules: EligibilityRule[] = [
  {
    rule_id: 'ER01',
    rule_type: 'Personal Status',
    rule_description: 'Couples eligibility',
    condition_logic: 'Married OR common-law OR engaged within 3 months',
    required_evidence: 'ID + Sefach, marriage certificate, or declaration of cohabitation',
    exceptions: 'No separate exception captured in the current research pack.',
    confidence: 'high',
  },
  {
    rule_id: 'ER02',
    rule_type: 'Age',
    rule_description: 'Single eligibility',
    condition_logic: 'Single applicant must be 35+',
    required_evidence: 'ID card',
    exceptions: 'Young Settler 26–35 or disabled 21+',
    confidence: 'high',
  },
  {
    rule_id: 'ER03',
    rule_type: 'Family Composition',
    rule_description: 'Lone parent eligibility',
    condition_logic: 'Parent with at least one child under 21 living with them permanently',
    required_evidence: 'ID + Sefach showing child',
    exceptions: 'Divorced parents under 35 whose children are not in custody',
    confidence: 'high',
  },
  {
    rule_id: 'ER04',
    rule_type: 'Ownership',
    rule_description: 'Lack of Housing / Hasar Diur',
    condition_logic: 'No ownership of more than 1/3 of a home in the last 3 years',
    required_evidence: 'Land Registry / Tabu search, Tax Authority check',
    exceptions: 'Ownership of 1/3 or less of a single home',
    confidence: 'high',
  },
  {
    rule_id: 'ER05',
    rule_type: 'Ownership',
    rule_description: 'Dual ownership bar',
    condition_logic: 'Cannot have owned 2 properties simultaneously for 1 year within the last 3 years',
    required_evidence: 'Land Registry / Tabu ownership history plus Tax Authority property history review',
    exceptions: 'No exception captured in the current research pack.',
    confidence: 'high',
  },
  {
    rule_id: 'ER06',
    rule_type: 'Residency / Citizenship',
    rule_description: 'Citizenship requirement',
    condition_logic: 'Must be Israeli citizen or permanent resident',
    required_evidence: 'Israeli ID or resident permit',
    exceptions: 'No exception captured in the current research pack.',
    confidence: 'high',
  },
  {
    rule_id: 'ER07',
    rule_type: 'Military',
    rule_description: 'Active reservist priority',
    condition_logic: '60+ days of Order 8 service since October 7, 2023',
    required_evidence: 'IDF service confirmation, Form 3010/861',
    exceptions: 'Combat reservists receive a 25% sub-quota inside the reservist pool',
    confidence: 'high',
  },
  {
    rule_id: 'ER08',
    rule_type: 'Participation',
    rule_description: 'Prior realization',
    condition_logic: 'Cannot have previously signed a contract in a subsidized housing program',
    required_evidence: 'Ministry database check',
    exceptions: 'Winning without signing a contract',
    confidence: 'high',
  },
  {
    rule_id: 'ER09',
    rule_type: 'Local Status',
    rule_description: 'Ben Makom priority',
    condition_logic: 'Residency in the lottery city for 3 years OR 4 out of the last 10 years',
    required_evidence: 'Interior Ministry address history',
    exceptions: 'No exception captured in the current research pack.',
    confidence: 'high',
  },
]

export const requiredEligibilityDocuments: RequiredDocument[] = [
  {
    document: 'ID card + Sefach',
    who_must_provide_it: 'All applicants',
    purpose: 'Identity, address, family status verification',
    issuing_authority: 'Ministry of Interior',
    validity_window: 'Current / updated',
    notes: 'Must reflect current marital status and children.',
  },
  {
    document: 'Marriage certificate',
    who_must_provide_it: 'Married couples',
    purpose: 'Prove marital status',
    issuing_authority: 'Rabbinate / Civil Authority',
    validity_window: 'Current official certificate',
    notes: 'Use an official certificate that matches the marital status recorded on the ID + Sefach.',
  },
  {
    document: 'Cohabitation declaration',
    who_must_provide_it: 'Common-law couples',
    purpose: 'Prove non-married partner status',
    issuing_authority: 'Lawyer / Notary',
    validity_window: 'No specific validity window captured in the current research pack.',
    notes: 'Must be signed before a lawyer.',
  },
  {
    document: 'Engagement proof',
    who_must_provide_it: 'Engaged couples',
    purpose: 'Allow application before wedding',
    issuing_authority: 'Rabbinate',
    validity_window: '3 months',
    notes: 'Must marry within 3 months of the eligibility request.',
  },
  {
    document: 'Divorce agreement',
    who_must_provide_it: 'Divorcees',
    purpose: 'Determine custody and property rights',
    issuing_authority: 'Family Court / Rabbinical Court',
    validity_window: 'No specific validity window captured in the current research pack.',
    notes: 'Especially relevant for divorcees divorced less than 3 years ago.',
  },
  {
    document: 'IDF service form',
    who_must_provide_it: 'Reservists',
    purpose: 'Prove active service for the reservist quota',
    issuing_authority: 'IDF Human Resources',
    validity_window: 'Post-October 7, 2023',
    notes: 'Must show 60+ days of Order 8 reserve service.',
  },
  {
    document: 'Medical / disability document',
    who_must_provide_it: 'Disabled applicants',
    purpose: 'Prove 75%+ disability or mobility constraints',
    issuing_authority: 'Bituach Leumi / Ministry of Defense',
    validity_window: 'No specific validity window captured in the current research pack.',
    notes: 'Includes wheelchair-bound / Ratuk status.',
  },
]

export const disqualificationConditions: DisqualificationCondition[] = [
  {
    condition: 'Current ownership',
    why_it_disqualifies: 'Ownership of more than 1/3 of a property currently or in the last 3 years',
    duration: 'Temporary, 3-year cooling period',
    appeal_path: 'Wait for the cooling period or apply as a Housing Improver if eligible.',
  },
  {
    condition: 'Kibbutz membership',
    why_it_disqualifies: 'Kibbutz members are legally excluded from the program',
    duration: 'Permanent while membership continues',
    appeal_path: 'No appeal while membership remains active.',
  },
  {
    condition: 'Signed past contract',
    why_it_disqualifies: 'Program eligibility can only be realized once',
    duration: 'Permanent',
    appeal_path: 'None',
  },
  {
    condition: 'Failure to marry',
    why_it_disqualifies: 'Engaged couples must marry within 3 months of the request',
    duration: 'Temporary',
    appeal_path: 'Re-apply after marriage.',
  },
  {
    condition: 'Dual property history',
    why_it_disqualifies: 'Owned 2 properties simultaneously for 1 year within the last 3 years',
    duration: 'Temporary, 3-year cooling period',
    appeal_path: 'Wait for the cooling period to end and re-apply once the 3-year lookback no longer includes the overlap.',
  },
]

export const screeningQuestions: ScreeningQuestion[] = [
  { id: 1, question: 'Are you an Israeli citizen or permanent resident?', rule_id: 'ER06', answer_type: 'Yes / No' },
  { id: 2, question: 'Have you ever signed a contract for a home in a government housing lottery, such as Mechir Lemishtaken?', rule_id: 'ER08', answer_type: 'Yes / No' },
  { id: 3, question: 'Are you a member of a Kibbutz?', rule_id: 'Disqualification', answer_type: 'Yes / No' },
  { id: 4, question: 'Do you currently own, or have you owned in the last 3 years, more than one-third of a residential property?', rule_id: 'ER04', answer_type: 'Yes / No' },
  { id: 5, question: 'In the last 3 years, did you ever own two or more properties at the same time for at least 12 months?', rule_id: 'ER05', answer_type: 'Yes / No' },
  { id: 6, question: 'Have you held rights in a residential lot or agricultural estate / Nachala in the last 3 years?', rule_id: 'ER04', answer_type: 'Yes / No' },
  { id: 7, question: 'Are you currently married or registered as common-law / Yeduim BaTzibur?', rule_id: 'ER01', answer_type: 'Yes / No' },
  { id: 8, question: 'Are you engaged and planning to marry within the next 3 months?', rule_id: 'ER01', answer_type: 'Yes / No' },
  { id: 9, question: 'Are you a single individual aged 35 or older?', rule_id: 'ER02', answer_type: 'Yes / No' },
  { id: 10, question: 'Are you a single individual aged 26–34?', rule_id: 'ER02 Special Track', answer_type: 'Yes / No' },
  { id: 11, question: 'Are you a single parent with a child under 21 living with you?', rule_id: 'ER03', answer_type: 'Yes / No' },
  { id: 12, question: 'Are you a divorcee under 35 whose children are not in your custody?', rule_id: 'ER03 Exception', answer_type: 'Yes / No' },
  { id: 13, question: 'Do you have a recognized medical disability of 75% or higher?', rule_id: 'ER02 Special Track', answer_type: 'Yes / No' },
  { id: 14, question: 'Are you confined to a wheelchair?', rule_id: 'Special Priority', answer_type: 'Yes / No' },
  { id: 15, question: 'Have you served 60+ days in Order 8 reserve duty since October 7, 2023?', rule_id: 'ER07', answer_type: 'Yes / No' },
  { id: 16, question: 'Are you defined by the IDF as a combat reservist?', rule_id: 'ER07 Sub-priority', answer_type: 'Yes / No' },
  { id: 17, question: 'Have you lived in your current city for the last 3 consecutive years?', rule_id: 'ER09', answer_type: 'Yes / No' },
  { id: 18, question: 'Have you lived in your current city for 4 out of the last 10 years?', rule_id: 'ER09', answer_type: 'Yes / No' },
  { id: 19, question: 'Do you own a single home and wish to buy a different one?', rule_id: 'Housing Improver Track', answer_type: 'Yes / No' },
  { id: 20, question: 'Does any child under 21 living with you own more than one-third of a property?', rule_id: 'Rule 355', answer_type: 'Yes / No' },
]

export const outputCategories: OutputCategory[] = [
  {
    title: 'Eligible',
    description: 'Applicant meets the age / status requirement and passes the property ownership bar.',
  },
  {
    title: 'Likely Eligible Pending Documents',
    description: 'Applicant appears eligible but still needs proof such as a common-law declaration, engagement proof, reservist confirmation, or disability document.',
  },
  {
    title: 'Not Eligible',
    description: 'Applicant fails citizenship, prior realization, Kibbutz membership, or 3-year ownership rules.',
  },
  {
    title: 'Cannot Determine',
    description: 'Critical data is missing or unclear, such as address history, disability percentage, custody status, or ownership rights.',
  },
]

export const priorityOverlay = [
  'Disabled / handicapped applicants.',
  'Reservists.',
  'Ben Makom / local residents.',
  'General eligible applicants.',
]

export const operationalFacts: OperationalFact[] = [
  { label: 'New eligibility certificate cost', value: '240 ILS' },
  { label: 'Renewal certificate cost', value: '50 ILS' },
  { label: 'Eligibility certificate validity', value: 'Exactly 1 year' },
  { label: 'Winner unit selection window', value: '45 minutes' },
]

export const openQuestions: OpenQuestion[] = [
  { title: 'Income thresholds and salary caps', status: 'Missing official source data.' },
  { title: 'Engaged vs. common-law without a wedding date', status: 'Needs legal verification.' },
  { title: 'Student age exemptions', status: 'Missing.' },
  { title: 'Real-time combat reservist classification interface', status: 'Needs technical verification with the IDF.' },
]

export function evaluateEligibility(profile: EligibilityProfile): EligibilityResult {
  const reasons: string[] = []
  const required_documents: string[] = []
  const priority_flags = {
    reservist: false,
    combat_reservist: false,
    ben_makom: false,
    disabled: false,
  }

  if (!profile.is_citizen_or_resident) {
    return {
      status: 'not_eligible',
      reasons: ['Applicant must be an Israeli citizen or permanent resident.'],
      required_documents,
      priority_flags,
      requires_manual_review: false,
    }
  }

  if (profile.signed_prior_subsidized_contract) {
    return {
      status: 'not_eligible',
      reasons: ['Applicant already signed a contract in a subsidized housing program.'],
      required_documents,
      priority_flags,
      requires_manual_review: false,
    }
  }

  if (profile.is_kibbutz_member) {
    return {
      status: 'not_eligible',
      reasons: ['Kibbutz members are excluded from eligibility.'],
      required_documents,
      priority_flags,
      requires_manual_review: false,
    }
  }

  if (profile.owns_property) {
    return {
      status: 'not_eligible',
      reasons: ['Applicant owned more than one-third of a residential property in the last 3 years.'],
      required_documents,
      priority_flags,
      requires_manual_review: false,
    }
  }

  let eligibleByStatus = false

  if (['married', 'common_law', 'engaged'].includes(profile.status)) {
    eligibleByStatus = true

    if (profile.status === 'common_law') {
      required_documents.push('cohabitation_declaration')
    }

    if (profile.status === 'engaged') {
      required_documents.push('engagement_proof')
    }
  }

  if (['single', 'divorced', 'widow'].includes(profile.status) && profile.age >= 35) {
    eligibleByStatus = true
  }

  if (
    profile.has_child_under_21_in_custody &&
    ['parent', 'single', 'divorced', 'widow'].includes(profile.status)
  ) {
    eligibleByStatus = true
  }

  if (profile.status === 'single' && profile.age >= 26 && profile.age <= 34) {
    eligibleByStatus = true
    reasons.push('Applicant may qualify under the Mishtaken Tza’ir / Young Settler track.')
  }

  if (
    profile.age >= 21 &&
    ((profile.disability_percent ?? 0) >= 75 || profile.is_wheelchair_bound)
  ) {
    eligibleByStatus = true
    priority_flags.disabled = true
    required_documents.push('disability_doc')
  }

  if (!eligibleByStatus) {
    return {
      status: 'cannot_determine',
      reasons: ['Applicant does not clearly match a known eligible age / status track.'],
      required_documents,
      priority_flags,
      requires_manual_review: true,
    }
  }

  if (profile.is_reservist) {
    priority_flags.reservist = true
    required_documents.push('form_3010_or_861')

    if (profile.is_combat) {
      priority_flags.combat_reservist = true
    }
  }

  if (profile.lived_3_years_in_city || profile.lived_4_of_10_years_in_city) {
    priority_flags.ben_makom = true
  }

  return {
    status: required_documents.length > 0
      ? 'likely_eligible_pending_documents'
      : 'eligible',
    reasons,
    required_documents,
    priority_flags,
    requires_manual_review: false,
  }
}
