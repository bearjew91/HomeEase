# HomeEase — Initial Product Plan

## 1. Product Summary

HomeEase is a guided platform for young couples in Israel who are eligible for **Mechir LeMishtaken / subsidized housing lotteries**.

The goal is to help users plan ahead, understand what they can realistically afford, choose the right lottery projects, and prepare financially before they win.

The main problem:  
People join lotteries without proper planning, then discover too late that they are not financially ready or chose projects that do not fit their real budget.

---

## 2. Core Value

HomeEase helps users answer:

- Am I eligible?
- Where do I register?
- How much money do I actually have?
- How much mortgage/loan can I realistically get?
- Which projects make sense for me?
- What should I prepare before and after winning?
- How can I improve my savings and financial readiness?

---

## 3. Target Users

Primary users:

- Young couples in Israel
- Eligible buyers for subsidized housing lotteries
- People who are confused by the official process
- People who need practical financial guidance before applying

Secondary users:

- Individuals checking eligibility
- Families helping children prepare for apartment purchase
- People who won and need next-step guidance

---

## 4. MVP Features

### 4.1 Eligibility & Registration Guide

Purpose:  
Help users understand if they are eligible and where/how to sign up.

Includes:

- Simple explanation of eligibility requirements
- Step-by-step guide for registration
- Links to official registration sites
- Explanation of required documents
- Explanation of what happens after eligibility approval
- User/password/account setup guidance

Status: MVP feature.

---

### 4.2 Lottery Calendar / New Projects

Purpose:  
Help users know when new lotteries open and what projects are available.

Includes:

- List of active lotteries
- Future lottery updates
- Project basic info:
  - City
  - Neighborhood
  - Apartment size
  - Estimated price
  - Registration deadline
  - Number of apartments
  - Expected competition level, if available

Status: MVP or early post-MVP depending on data availability.

---

### 4.3 Starting Budget Calculator

Purpose:  
Let users enter their current financial starting point.

Inputs:

- Available cash / savings
- Monthly net income
- Monthly expenses
- Existing loans
- Credit card payments
- Rent
- Other fixed obligations

Outputs:

- Estimated available monthly payment
- Rough affordability range
- Warning if budget is unrealistic
- Suggested next step

Status: MVP feature.

---

### 4.4 Loan / Mortgage Eligibility Estimator

Purpose:  
Help users understand that mortgage approval is based mainly on income and repayment ability, not only cash in the bank.

Inputs:

- Net income
- Existing obligations
- Available equity
- Desired monthly payment
- Estimated interest assumptions

Outputs:

- Rough loan estimate
- Estimated maximum apartment price
- Suggested safe budget range
- Risk warnings

Important:  
This should not be presented as official bank approval. It is an estimate only.

Status: MVP feature.

---

### 4.5 Project Fit Tool

Purpose:  
Help users choose lottery projects that match their financial reality and lifestyle.

Inputs:

- Budget range
- Loan estimate
- Preferred cities
- Distance from work/family
- Apartment size needs
- Risk tolerance
- Willingness to relocate
- Future resale/rental considerations

Outputs:

- Recommended project priority list
- Projects to avoid
- Practical reasoning for each suggestion

Status: Core differentiator, should be part of MVP if possible.

---

### 4.6 Winner Roadmap

Purpose:  
Guide users after they win so they do not freeze or miss important steps.

Includes:

- What happens after winning
- Documents to prepare
- Financial checks
- Bank/mortgage preparation
- Contract timeline
- Important deadlines
- Mistakes to avoid

Status: MVP or early post-MVP.

---

## 5. Paid Features

The platform should provide general education for free, but require signup/payment for personalized planning.

### Free Tier

Includes:

- General guides
- Eligibility explanation
- Registration guide
- Basic calculators
- Public project information
- General lottery process explanations

Goal:  
Build trust and provide real value without friction.

---

### Paid Tier

Includes:

- Personalized roadmap
- Full financial planning flow
- Saved user profile
- Project matching based on user budget
- Deeper affordability analysis
- Savings improvement suggestions
- Uploading bank/credit card statements
- AI-based financial insights
- Action plan before applying / after winning

Goal:  
Users pay for personal clarity, planning, and decision support.

---

## 6. Future Advanced Features

### 6.1 Financial File Upload & Analysis

Purpose:  
Allow users to upload financial files and get deeper insights.

Supported files:

- Bank statements
- Credit card statements
- Loan documents
- Salary slips
- Expense exports

Outputs:

- Spending breakdown
- Monthly cash flow
- Wasteful categories
- Saving opportunities
- Improved mortgage readiness score
- Personalized financial action plan

Status: Future premium feature.

---

### 6.2 AI Assistant

Purpose:  
An AI agent that understands the platform, the housing process, eligibility rules, financial planning, and user context.

Capabilities:

- Answer questions
- Explain legal/eligibility topics
- Guide users through the process
- Help compare projects
- Explain mortgage concepts
- Review uploaded financial data
- Generate personalized recommendations

Implementation idea:

- Start without AI or with very limited AI
- Later add API-based AI
- Use RAG/knowledge base with official documents and internal guides
- Avoid fine-tuning at the beginning

Status: Future feature, not required for first MVP.

---

## 7. Monetization Model

Recommended model:

- Free public information and basic tools
- Paid subscription or one-time payment for personalized planning

Possible pricing:

- Monthly subscription
- One-time planning report
- Freemium with premium calculators
- Crowdfunded AI usage later if API costs become high

Best first monetization test:

- Free platform
- Paid personalized roadmap/report

---

## 8. Suggested Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Hosting

- Vercel

### Source Control

- GitHub

### Database

Initial options:

- Supabase
- Neon Postgres
- Vercel Postgres

Recommended:  
Start with Supabase or Neon for fast setup.

### Authentication

Options:

- Supabase Auth
- Clerk
- Auth.js

Recommended:  
Use Supabase Auth if Supabase is also used as the database.

### Payments

Future:

- Stripe
- Israeli payment provider if needed later

### AI

Future:

- OpenAI API / Anthropic API for MVP AI
- Later consider open-source model if usage becomes expensive

---

## 9. MVP Scope

The first version should include:

1. Landing page
2. Explanation of the process
3. Eligibility guide
4. Registration guide
5. Basic budget calculator
6. Basic mortgage/loan estimate calculator
7. Project selection guidance
8. Simple roadmap page
9. Signup/paywall placeholder for future premium planning

Avoid in MVP:

- Full AI agent
- Complex file uploads
- Real bank integrations
- Advanced legal automation
- Overcomplicated dashboards

---

## 10. Development Approach

Build in phases.

### Phase 1 — Static Foundation

Goal:  
Create a useful public website.

Tasks:

- Create project structure
- Add landing page
- Add guides
- Add eligibility page
- Add registration page
- Add roadmap page

---

### Phase 2 — Calculators

Goal:  
Make the site interactive.

Tasks:

- Add starting budget calculator
- Add mortgage/loan estimate calculator
- Add affordability result page
- Add warnings and explanations

---

### Phase 3 — Project Matching

Goal:  
Help users choose projects.

Tasks:

- Add project input/listing model
- Add project filters
- Add fit score logic
- Show recommended/avoid projects

---

### Phase 4 — User Accounts

Goal:  
Allow users to save their planning data.

Tasks:

- Add authentication
- Save user profile
- Save calculator results
- Save preferred projects
- Add dashboard

---

### Phase 5 — Premium Planning

Goal:  
Add paid personalized roadmap.

Tasks:

- Add payment flow
- Add premium dashboard
- Generate personalized roadmap
- Add deeper financial suggestions

---

### Phase 6 — AI Assistant

Goal:  
Add smart guidance.

Tasks:

- Build knowledge base
- Add AI chat
- Add RAG
- Add source references
- Add user-context-aware answers

---

## 11. Key Product Principles

- Keep it simple.
- Focus on practical action, not theory.
- Use official sources where possible.
- Make financial limitations clear early.
- Do not promise bank approval.
- Give users confidence before they apply.
- Free content builds trust.
- Paid features should save real time, money, or confusion.

---

## 12. Initial Product Definition

HomeEase is a planning platform for Israeli subsidized housing lotteries. It helps eligible couples understand the process, estimate their real buying power, choose suitable projects, and prepare for the steps before and after winning. The platform provides free guidance and basic tools, while personalized planning, financial analysis, and savings recommendations are premium features.

---

## 13. Immediate Next Step

Start building the MVP:

1. Create GitHub repo.
2. Create Next.js project.
3. Deploy to Vercel.
4. Build landing page.
5. Add the first guide: eligibility and registration.
6. Add the first calculator: starting budget.