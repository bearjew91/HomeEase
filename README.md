# HomeEase - Israeli Housing Lottery Planning Platform

HomeEase guides young Israeli couples through subsidized housing lotteries (Mechir LeMishtaken) with clarity, planning, and confidence. This is an open-source project designed to help users understand their eligibility, plan their finances, and navigate the lottery process.

## 📋 Project Overview

**Problem:** People join housing lotteries without proper financial planning, discover they can't afford the mortgage, or miss critical deadlines.

**Solution:** HomeEase provides free guidance and interactive tools to help users:
- Understand if they're eligible for lotteries
- Calculate their real purchasing power
- Estimate mortgage capacity
- Find projects that match their budget
- Prepare for the steps before and after winning

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/homeease.git
cd homeease
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Visit `http://localhost:3000`

### Build for production:
```bash
npm run build
npm start
```

## 📁 Project Structure

```
homeease/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── eligibility/       # Eligibility guide
│   ├── registration/      # Registration guide
│   ├── budget-calculator/ # Budget calculator
│   ├── mortgage-estimator/# Mortgage calculator
│   ├── project-finder/    # Project matching
│   └── winner-roadmap/    # Post-winning guide
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── shared/            # Reusable UI components
├── lib/                   # Utility functions
│   ├── calculators.ts     # Financial calculations
│   ├── types.ts          # TypeScript definitions
│   └── projects.ts       # Project utilities
├── public/               # Static assets
├── data/                # Data files (projects, etc)
└── config files         # Next.js, TypeScript, Tailwind
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (recommended)
- **Future:** Supabase (Auth + Database), Stripe (Payments)

## 📄 Features

### MVP (Current)
- ✅ Landing page with value proposition
- ✅ Eligibility guide (placeholder)
- ✅ Registration steps guide (placeholder)
- ✅ Budget calculator (working)
- ✅ Mortgage estimator (working)
- ✅ Project finder (placeholder)
- ✅ Winner roadmap (placeholder)
- ✅ Full navigation and responsive design

### Coming Soon
- 🔐 User authentication (Supabase)
- 💾 Save calculator results
- 📊 Dashboard for saved data
- 🏠 Real project listings
- 🤖 AI assistant
- 📁 Financial file upload
- 💳 Payment/premium features

## 🧮 Calculators

### Budget Calculator
Helps users understand their monthly capacity and maximum purchase price based on:
- Monthly income and expenses
- Current savings
- Existing debts

### Mortgage Estimator
Estimates loan eligibility and monthly payments based on:
- Income and existing obligations
- Interest rates
- Loan terms
- Down payment available

## 📝 Content Placeholders

The following pages contain placeholder content that will be filled with real Israeli housing data:
- Eligibility requirements
- Registration procedures
- Project listings
- Required documentation
- Timeline information

**These will be populated once research data is collected.**

## 🔧 Development

### Adding a new page:
1. Create folder in `app/` (e.g., `app/new-section/`)
2. Create `page.tsx` inside
3. Add link to navigation in `components/Navigation.tsx`

### Adding a component:
1. Create file in `components/` or `components/shared/`
2. Export as React component
3. Import in pages as needed

### Adding calculations:
1. Add function to `lib/calculators.ts`
2. Export from the file
3. Import and use in page components

## 📱 Responsive Design

The site is fully responsive and works on:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (375px - 767px)

Built with Tailwind CSS responsive utilities.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

That's it! Vercel will automatically deploy on every push to main.

### Deploy to other platforms:
- Netlify
- AWS Amplify
- Heroku
- Any Node.js hosting

## 📚 Research Data Needed

The following data should be researched and added:
- Israeli housing lottery eligibility criteria
- Ministry of Housing registration procedures
- Current projects and listings
- Mortgage lending standards
- Required documentation
- Timeline processes

See `RESEARCH_TODO.md` for detailed data requirements.

## 🤝 Contributing

This is an open-source project. Contributions welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ⚖️ Disclaimer

HomeEase provides general information only and does not constitute legal, financial, or professional advice. Always consult with professionals (lawyers, financial advisors, banks) before making financial decisions related to housing purchases.

## 📞 Support

For questions or issues:
1. Check the FAQ section (coming soon)
2. Open an issue on GitHub
3. Contact the team at support@homeease.co.il (coming soon)

## 🎯 Roadmap

- Phase 1: Static foundation ✅ (in progress)
- Phase 2: Interactive calculators ✅ (in progress)
- Phase 3: Project matching (coming)
- Phase 4: User accounts & persistence (coming)
- Phase 5: Premium features & payments (coming)
- Phase 6: AI assistant (coming)

---

**Built with ❤️ to help Israeli couples achieve their housing dreams.**
