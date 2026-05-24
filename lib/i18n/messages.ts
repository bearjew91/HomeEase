// Central message catalog. Add a new key here, then translate in `he`.
// Keys use dot.notation; the t() hook supports {placeholders} via {{name}} syntax.

export const messages = {
  en: {
    common: {
      brand: 'HomeEase',
      tagline: 'Housing Lottery Planning',
      open: 'Open',
      next: 'Next',
      back: 'Back',
      lastUpdated: 'Last updated',
    },

    locale: {
      switchTo: 'עברית',
      label: 'Language',
    },

    nav: {
      eligibility: 'Eligibility',
      registration: 'Registration',
      budget: 'Budget',
      mortgage: 'Mortgage',
      projects: 'Projects',
      roadmap: 'Roadmap',
    },

    footer: {
      blurb: 'Planning platform for Israeli housing lottery eligibility and financial preparation.',
      brandKicker: 'Israel housing planning',
      resources: 'Resources',
      guides: 'Guides',
      legal: 'Legal',
      links: {
        eligibility: 'Eligibility Guide',
        budget: 'Budget Calculator',
        mortgage: 'Mortgage Estimator',
        projects: 'Project Finder',
        registration: 'Registration Steps',
        winner: 'After Winning',
        faq: 'FAQ',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        disclaimer: 'Disclaimer',
      },
      disclaimer: 'HomeEase provides general information only. It does not constitute legal, financial, or professional advice. Consult professionals before making decisions.',
      copyright: '© {year} HomeEase. Not affiliated with Israeli government agencies.',
    },

    home: {
      eyebrow: 'Built for Israeli housing lotteries',
      heroTitle: 'A calmer way to plan a lottery win before it becomes a financial panic.',
      heroLede: 'HomeEase turns the Mechir LeMishtaken journey into a guided planning flow: eligibility, affordability, project fit, and the steps that matter after winning.',
      ctaBudget: 'Run the budget check',
      ctaEligibility: 'Review eligibility',
      pillars: {
        a: 'Eligibility first',
        b: 'Budget before hope',
        c: 'Projects that fit',
      },
      proof: {
        title: 'What the product fixes',
        withoutTitle: 'Without a plan',
        withoutBody: 'People enter lotteries based on excitement, then discover too late that the mortgage, location, or deadlines do not work.',
        withTitle: 'With HomeEase',
        withBody: 'Users get a planning layer before they register, so every application starts from realistic numbers and clear next steps.',
        promiseTitle: 'Core promise',
        promise: [
          'Official process guidance, organized into plain-language steps',
          'Financial planning before you win, not after the pressure starts',
          'Project selection logic tied to affordability and lifestyle',
        ],
      },
      flow: {
        kicker: 'Three-part flow',
        title: 'The platform should feel like a decision system, not a content dump.',
        lede: 'Each stage removes a different kind of uncertainty: legal eligibility, financial reality, and project choice.',
        steps: [
          { title: 'Check eligibility', copy: 'Understand whether you qualify, what documents matter, and which official portals you actually need.' },
          { title: 'Model the real budget', copy: 'See the gap between lottery excitement and real affordability before you apply anywhere.' },
          { title: 'Prioritize the right projects', copy: 'Filter by budget, location, and risk so you stop chasing projects that do not fit your life.' },
        ],
      },
      why: {
        kicker: 'Why this matters',
        title: 'Winning is not the hard part. Being ready is.',
        body: 'The product needs to reduce expensive mistakes early: applying to the wrong projects, overestimating mortgage capacity, or reaching the winner stage without prepared documents.',
        mvpKicker: 'Current MVP tools',
        mvpTitle: 'Interactive calculators',
        mvpBody: 'The budget and mortgage screens already work, which means the product can feel useful even before the knowledge base is fully researched.',
        nextKicker: 'Next content layer',
        nextTitle: 'Knowledge base pages',
        nextBody: 'Eligibility, registration, and winner-roadmap pages are ready for real data once you collect the official requirements and timelines.',
      },
      finalCta: {
        kicker: 'Start with the working tools',
        title: 'Test the calculators now, then feed the research into the guides.',
        ctaBudget: 'Open budget calculator',
        ctaRegistration: 'Review registration flow',
      },
    },

    eligibility: {
      eyebrow: 'Step 01 — Eligibility',
      title: 'Find out where you actually stand, before you spend energy applying.',
      lede: 'Eligibility is the cheapest filter in the entire process. Pass through it cleanly here and the rest of the journey stops being a guessing game.',
      lastUpdated: 'May 2026',
      programNote: 'Mechir LeMishtaken is now part of the Dira BeHanacha (Apartment at a Discount) program, managed by the Ministry of Construction & Housing. Eligibility is built around the "Lack of Housing" (Hasarei Diur) classification.',
      tracks: {
        title: 'Who can apply',
        intro: 'Eligibility runs through one of five tracks. You qualify under whichever matches your status.',
        items: [
          { label: 'Couples', detail: 'Married, common-law (Yeduim BaTzibur), or engaged with a wedding planned within 3 months of the request. No minimum age.' },
          { label: 'Singles', detail: 'Age 35 and up. The standard single-applicant track.' },
          { label: 'Young Settlers', detail: 'Singles aged 26–35 apply under the Mishtaken Tza\'ir track.' },
          { label: 'Lone parents', detail: 'At least one child under 21 living with you permanently.' },
          { label: 'Disabled applicants', detail: 'Singles aged 21+ with recognized 75%+ medical disability or qualifying mobility constraint.' },
        ],
        residency: 'You must be an Israeli citizen or permanent resident. Israelis married to foreign nationals stay eligible but submit a specific affidavit.',
      },
      reservists: {
        title: 'Reservist quota — half of every lottery',
        body: 'Under the 2026 Mimiluim LeMifteach (Reserves to Key) policy, 50% of units in every lottery are reserved for active reservists. A quarter of those (25% of the lottery total) is further prioritized for combat reservists. "Active" means at least 60 days under Order 8 since 7 October 2023.',
      },
      ownership: {
        title: 'Lack-of-housing rules',
        intro: 'To qualify as Hasarei Diur the Ministry checks the last 3 years. Any one of these disqualifies the whole application.',
        items: [
          { label: '3-year cooling-off', detail: 'No residential property owned in the 3 years before the request. (Recently reduced from 6 years.)' },
          { label: 'Partial ownership', detail: 'Holding more than one-third (1/3) of a residential property disqualifies.' },
          { label: 'Inheritance', detail: 'Same one-third rule — an inherited share above 1/3 disqualifies.' },
          { label: 'Land & building rights', detail: 'Disqualified if you held rights to a residential lot, Nachala (agricultural estate), or property under construction in the past 3 years.' },
          { label: 'Housing improvers', detail: 'Current single-home owners (Meshaprei Diur) can enter follow-up lotteries (Hagralot Hemshech) if they commit to selling within 12 months of occupying the new unit.' },
        ],
      },
      income: {
        title: 'Income ceilings',
        body: 'Income caps exist and are checked at the eligibility stage, but the exact ILS values change between Ministry circulars and depend on household composition. Pull the current figures directly from dira.moch.gov.il before applying.',
      },
      docs: {
        title: 'Required documents',
        intro: 'Gather these once and reuse them across every lottery you enter.',
        groups: [
          { title: 'Identity', items: ['Teudat Zehut (Israeli ID card)', 'Updated Sefach showing current marital status and children'] },
          { title: 'Marital / family', items: ['Marriage certificate (married couples)', 'Cohabitation declaration signed before a lawyer (common-law)', 'Rabbinate registration or affidavit of intent to marry within 3 months (engaged)', 'Divorce agreement (if divorced less than 3 years ago)'] },
          { title: 'Service', items: ['IDF service confirmation — Form 3010 or 861 — for reservists claiming the 50% quota'] },
          { title: 'Medical', items: ['Official recognition from Bituach Leumi or Ministry of Defense for disabled applicants'] },
          { title: 'Property history', items: ['Tabu (Land Registry) extracts or Tax Authority documents to clarify past ownership, if needed'] },
        ],
      },
      sequence: {
        title: 'How to get the certificate',
        intro: 'Eligibility certificates are issued by authorized registration companies — not directly by the Ministry.',
        steps: [
          { title: 'Pick a registration company', body: 'Choose one of the three authorized providers: Milgam, Alonim, or Maof.' },
          { title: 'Submit documents', body: 'Hand over the full document set — identity, family status, service, property history.' },
          { title: 'Pay the fee', body: 'New certificate: 200–240 ILS. Renewal or extension: 50 ILS.' },
          { title: 'Receive the certificate', body: 'Once issued, the certificate is your ticket into every active lottery you qualify for.' },
        ],
      },
      next: {
        eyebrow: 'Next',
        title: "You're eligible — now make sure the numbers work.",
        body: 'Eligibility says you can enter. The budget calculator says whether winning is something you can actually live with for the next 25 years.',
        cta: 'Run the budget check',
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Rules change between cycles. Verify with the official portal before submitting.',
        items: [
          { label: 'Ministry of Construction & Housing', body: 'dira.moch.gov.il — official program portal' },
          { label: 'Authorized registration companies', body: 'Milgam, Alonim, Maof' },
          { label: 'Reservist policy', body: 'Mimiluim LeMifteach (2026) — 50% reservist quota' },
        ],
      },
    },

    registration: {
      eyebrow: 'Step 05 — Registration',
      title: 'Move through the official registration without surprises.',
      lede: 'The registration window is short and unforgiving. Walk in with documents prepared, the portal already known, and a personal log of every action you take.',
      lastUpdated: 'May 2026',
      cycle: {
        title: 'Current cycle — Lottery 11',
        intro: 'The dates that matter for the active 2026 round.',
        items: [
          { label: 'Eligibility issuance deadline', detail: '30 April 2026 — new certificates had to be submitted by this date.' },
          { label: 'Registration window closes', detail: '7 May 2026, 23:59.' },
          { label: 'Results published', detail: 'Approximately 10 days after the registration window closes.' },
        ],
      },
      flow: {
        title: 'How registration actually works',
        intro: 'Two distinct phases — first get the eligibility certificate, then register for specific projects.',
        steps: [
          { title: 'Issue the eligibility certificate', desc: 'Apply through Milgam, Alonim, or Maof — online or in person at their branches.' },
          { title: 'Register online for lotteries',     desc: 'Once the certificate arrives by email, log in to the official portal and pick the lotteries you want to enter.' },
          { title: 'Pick up to 3 cities',                desc: 'You can register in up to three different cities. Within each city you are automatically entered for every available project.' },
          { title: 'Wait for the computerized draw',     desc: 'After the window closes, the Ministry runs the draw and audits the results.' },
          { title: 'Post-win selection',                 desc: 'Winners receive a ranking, attend the developer conference, then have a 45-minute window to pick a specific apartment and sign the purchase contract.' },
        ],
      },
      benMakom: {
        title: '"Ben Makom" — local-resident bonus',
        body: 'Local-resident (Ben Makom) status is auto-verified from your Ministry of Interior address records. If your Sefach address is out of date, update it at the Ministry of Interior BEFORE applying for eligibility — otherwise you lose the bonus for your city.',
      },
      after: {
        title: 'What happens after you submit',
        intro: 'Realistic timeline through the post-submission period.',
        rows: [
          { window: 'Immediate', detail: 'SMS + email confirmation for each project and city you registered for.' },
          { window: '~10 business days', detail: 'Document verification → eligibility certificate issued. Longer if external verification (e.g., Tax Authority) is needed.' },
          { window: '~10 days after close', detail: 'Drawing results emailed simultaneously to all participants.' },
          { window: 'Months to years', detail: 'From winning to apartment selection — waiting for the building permit (Heter Bniya), a prerequisite for the developer to offer units.' },
        ],
      },
      where: {
        title: 'Where to register',
        intro: 'Two systems handle two different steps.',
        items: [
          { label: 'Official portal', body: 'dira.moch.gov.il — handles the lottery registration itself.' },
          { label: 'Authorized issuance companies', body: 'Milgam, Alonim, or Maof — handle eligibility certificate issuance.' },
          { label: 'Note on municipalities', body: 'Local municipal offices do NOT handle registration. Their only relevance is your address record at the Ministry of Interior.' },
        ],
      },
      next: {
        eyebrow: 'Back to fundamentals',
        title: 'Make sure eligibility is locked before you register.',
        body: 'A registration submitted without confirmed eligibility gets rejected late in the process, when reapplying may already be impossible.',
        cta: 'Re-check eligibility',
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Dates and procedures change between cycles. Verify with the official portal before submitting.',
        items: [
          { label: 'Ministry of Construction & Housing', body: 'dira.moch.gov.il — official registration portal' },
          { label: 'Ministry of Interior', body: 'Updates to your Sefach address must go through here.' },
          { label: 'Cycle reference', body: 'Lottery 11 — April/May 2026 dates' },
        ],
      },
    },

    budget: {
      eyebrow: 'Step 02 — Affordability',
      title: 'Pin the real number, before the lottery sets it for you.',
      lede: 'Most people learn what they can afford the week after they win. This calculator gives you the answer first, so the rest of the journey runs on a confirmed budget.',
      lastUpdated: 'May 2026',
      rules: {
        title: 'Equity rules — Dira BeHanacha (2026)',
        intro: 'Subsidized lotteries have a much lower equity floor than the open market.',
        items: [
          { label: 'Minimum own funds (with grant)', detail: '₪60,000 cash if the project is on the eligible-grant list.' },
          { label: 'Minimum own funds (no grant)', detail: '₪100,000 cash for other subsidized purchases.' },
          { label: 'Appraisal cap', detail: 'LTV is calculated on appraised market value, capped at ₪2.1M (raised from ₪1.8M in Feb 2026).' },
          { label: 'LTV ceiling', detail: '75% of the capped appraisal — first-home only.' },
          { label: 'Day of selection', detail: 'A non-refundable ~₪2,000 deposit goes to the developer on selection day.' },
        ],
        grantsTitle: 'Grants on top',
        grants: [
          { label: "Periphery grant (Ma'anak Makom)", detail: '₪40,000–60,000 in National Priority areas or towns ranked 1–4 on the periphery index.' },
          { label: 'Security grant', detail: '~₪9,000 for Mamad (safe room) build/upgrade in projects along the northern border.' },
          { label: 'Conditions', detail: 'Grants generally require living in the unit for 5–7 years without selling.' },
        ],
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Bank of Israel rules and grant amounts change. Verify with your bank and dira.moch.gov.il before committing.',
        items: [
          { label: 'Bank of Israel — Directive 329', body: 'LTV caps, PTI ceiling, and subsidized-housing rules.' },
          { label: 'Ministry of Construction & Housing', body: 'Dira BeHanacha program and Ma\'anak Makom grant.' },
          { label: 'Kol-Zchut', body: 'Plain-language summary of mortgage limits in Israel.' },
        ],
      },
      form: {
        title: 'Your numbers',
        intro: 'Three inputs. Everything stays in your browser.',
        calculate: 'Calculate',
        cash: { label: 'Cash you can put down (₪)', placeholder: '250,000', hint: 'Savings, gifts, sale proceeds — what you can actually bring on day one.' },
        netIncome: { label: 'Net monthly household income (₪)', placeholder: '20,000', hint: 'Combined take-home pay after tax.' },
        existingLoans: { label: 'Existing loan payments (₪/mo)', placeholder: '1,500', hint: 'Car, consumer, student loans. Everything recurring.' },
        interestRate: { label: 'Planning interest rate (%)', placeholder: '5.0', hint: 'A conservative bank-quoted rate. Change it to see how sensitive the result is.' },
        termYears: { label: 'Mortgage term (years)', placeholder: '30', hint: 'Max 30 per BoI directive 329.' },
      },
      results: {
        title: 'What you can afford',
        maxPriceSafe: 'Comfortable',
        maxPriceSafeFoot: '30% of disposable income to housing. The number we recommend planning around.',
        maxPriceStretched: 'Stretched',
        maxPriceStretchedFoot: '40% of disposable income. Tight — stress-test it against a higher rate.',
        maxPriceHard: 'Regulatory edge',
        maxPriceHardFoot: '50% of disposable income — the BoI ceiling. Heavy, and what a bank might still approve in theory.',
        breakdown: 'Detail',
        disposableIncome: 'Disposable monthly income',
        cash: 'Cash going to down payment',
        safePayment: 'Comfortable monthly payment',
        safeLoan: 'Loan supported at comfortable tier',
        warn: 'Planning estimate, not a bank approval. Real terms depend on appraisal, credit profile, mortgage mix, and rate at signing.',
        emptyPrefix: 'Fill in your numbers on the left and press',
        emptyHighlight: 'Calculate',
        emptySuffix: '. Results appear here.',
      },
      next: {
        eyebrow: 'Next',
        title: 'Match your budget against real projects.',
        body: 'Now that you know your envelope, the project finder filters the lottery list to what fits both your budget and your life — without the romantic noise.',
        cta: 'Find matching projects',
      },
    },

    mortgage: {
      eyebrow: 'Step 03 — Mortgage',
      title: 'From a budget envelope to a concrete loan you can defend at the bank.',
      lede: "Banks underwrite on ratios, not optimism. This estimator shows the loan envelope they'll actually approve, plus a green / yellow / orange / red planning category.",
      lastUpdated: 'May 2026',
      rules: {
        title: 'Mortgage rules — first-time buyers (2026)',
        intro: 'Per BoI directive 329, with the 2026 update for subsidized housing.',
        items: [
          { label: 'LTV ceiling', detail: '75% of LTV-eligible value for a first home (70% replacement, 50% investment).' },
          { label: 'Subsidized appraisal cap', detail: 'LTV value = appraisal, capped at ₪2.1M. Above that, the cap or purchase price (whichever is higher) is used.' },
          { label: 'PTI hard ceiling', detail: 'Monthly payment cannot exceed 50% of disposable income.' },
          { label: 'Planning tiers', detail: '30% PTI = comfortable, 40% = stretched, 50% = regulatory edge.' },
          { label: 'Max term', detail: '30 years.' },
          { label: 'Track mix', detail: 'At least 33⅓% must be fixed-rate; max 66⅔% variable. Mix is set by the bank.' },
          { label: 'Borrowed equity', detail: "A bank cannot lend you more so you can treat it as own funds. Personal loans count as obligations, not equity." },
        ],
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Interest rates change with the BoI base rate. Get a bank-quoted Ishur Ekroni (pre-approval) before relying on these numbers.',
        items: [
          { label: 'Bank of Israel — Directive 329 (Feb 2026 update)', body: 'LTV caps, PTI ceiling, subsidized appraisal cap. boi.org.il/media/ptciib1v/h2840.pdf' },
          { label: 'BoI — Q&A on housing-loan limits', body: 'Including the rule that a loan cannot count as own funds. boi.org.il/media/141cr3bf/111581.pdf' },
          { label: 'Kol-Zchut', body: 'Plain-language mortgage limits: kolzchut.org.il' },
          { label: 'Ministry of Construction & Housing', body: 'Dira BeHanacha and funding benefits: gov.il/he/departments/topics/dira' },
        ],
      },
      form: {
        title: 'Mortgage details',
        intro: 'All inputs are local — try a few scenarios.',
        calculate: 'Calculate mortgage',
        purchasePrice: { label: 'Purchase price (₪)', placeholder: '1,800,000', hint: 'Contract price for the subsidized unit.' },
        appraisedValue: { label: 'Appraised market value (₪)', placeholder: '2,300,000', hint: 'Optional. If known, lets us apply the ₪2.1M subsidized cap.' },
        netIncome: { label: 'Net monthly household income (₪)', placeholder: '20,000', hint: 'Combined take-home pay.' },
        existingLoans: { label: 'Existing loan payments (₪/mo)', placeholder: '1,500', hint: 'Car, consumer, student loans — recurring monthly.' },
        rentUntilEntry: { label: 'Rent until move-in (₪/mo)', placeholder: '5,500', hint: 'Optional. Subtracted from disposable income while you wait for delivery.' },
        otherObligations: { label: 'Other fixed obligations (₪/mo)', placeholder: '0', hint: 'Alimony, child support, recurring obligations.' },
        cashEquity: { label: 'Available cash equity (₪)', placeholder: '250,000', hint: 'Cash you can put down — savings, family gifts, sale proceeds.' },
        hasGrant: { label: 'Project qualifies for the eligible-buyer grant', hint: 'Verify against the official project list — drops the equity floor to ₪60,000.' },
        useSubsidized: { label: 'Use subsidized-housing LTV rules', hint: 'On by default — applies the ₪2.1M appraisal cap and ₪60k/₪100k equity floors.' },
        interestRate: { label: 'Planning interest rate (%)', placeholder: '5.0', hint: 'Conservative blended rate. Real rate is set by the bank.' },
        termYears: { label: 'Loan term (years)', placeholder: '30', hint: 'Max 30 per BoI 329.' },
      },
      results: {
        title: 'Planning result',
        categoryLabel: 'Planning category',
        category: {
          green: { title: 'Comfortable', body: 'The numbers fit a conservative plan. You still need a bank pre-approval — but the math looks healthy.' },
          yellow: { title: 'Stretched', body: 'Possible but tight. Monthly payment eats a large share of disposable income — stress-test it against a higher rate.' },
          orange: { title: 'Bank-risk zone', body: 'Even if a bank approves this, payments will be heavy. Treat with caution.' },
          red: { title: 'Likely a no-go', body: "Doesn't pass equity, LTV, or the 50% PTI ceiling. Adjust price, equity, or term." },
        },
        requestedLoan: 'Loan you would need',
        requestedLoanFoot: 'Purchase price minus the cash equity you have today.',
        monthlyPayment: 'Monthly payment',
        monthlyPaymentFoot: 'Spitzer schedule at the rate and term above.',
        requiredEquity: 'Required equity',
        requiredEquityFoot: 'BoI regulatory floor or the LTV gap — whichever is higher.',
        breakdown: 'Detail',
        equityYouHave: 'Equity you have',
        equityGap: 'Equity gap',
        maxLoanByLtv: 'Max loan by LTV',
        maxLoanSafe: 'Max loan @ safe PTI (30%)',
        maxLoanStretched: 'Max loan @ stretched PTI (40%)',
        maxLoanHard: 'Max loan @ regulatory cap (50%)',
        disposableIncome: 'Disposable income',
        pti: 'Payment-to-income',
        ltvValue: 'LTV value used',
        warnings: {
          noAppraisal: "We assumed appraisal = purchase price. Once a real appraisal comes in, the LTV calc may improve.",
          equityGap: "You're below the equity floor. Either bring more cash, lower the price, or wait until savings catch up.",
          highPti: 'Monthly payment is above 40% of disposable income — meaningfully risky if income or rates shift.',
          ltvBreach: 'Your requested loan exceeds the LTV ceiling. The bank will require more equity.',
          borrowedEquity: 'A new loan generally cannot be treated as own funds. The bank will count it as an obligation.',
        },
        emptyPrefix: 'Fill in your details on the left and press',
        emptyHighlight: 'Calculate',
        emptySuffix: ' to see your planning category.',
      },
      next: {
        eyebrow: 'Next',
        title: 'Match this envelope against real projects.',
        body: 'Now that you know the upper bound, the project finder filters the lottery list to what fits both your budget and your life — without the romantic noise.',
        cta: 'Find matching projects',
      },
    },

    projects: {
      eyebrow: 'Step 04 — Project fit',
      title: "Stop falling in love with projects that don't fit your life.",
      lede: 'The authoritative project list lives on dira.moch.gov.il. This page explains the scale, the listing shape, and the rules so you read the portal correctly.',
      lastUpdated: 'May 2026',
      programNote: 'The various tracks (Mechir LeMishtaken, Mechir Matara, Mechir Mufchat) were consolidated under "Dira BeHanacha" in 2023. The Ministry portal is the only authoritative source — there is no public API or open dataset.',
      scale: {
        title: 'The current scale',
        intro: 'Concrete numbers from the most recent cycle, so you can read the odds before you register.',
        items: [
          { label: '~130,000 registrants', detail: 'Final 2025 lottery — full registrant count across all projects.' },
          { label: '~7,500 available units', detail: 'Across every project in that single lottery.' },
          { label: '~17:1 implied competition', detail: 'Average ratio — concentrated in high-demand cities; periphery towns are dramatically less competitive.' },
        ],
      },
      fields: {
        title: 'What every official listing contains',
        intro: 'Each project page on dira.moch.gov.il exposes the same fields.',
        items: [
          { label: 'Price per built sq.m (מחיר למ"ר בנוי)', detail: 'Mechir Matara typically excludes the 20% discount (up to 300k ILS). Other tracks usually factor the discount into the published rate.' },
          { label: 'Location', detail: 'Specific city or settlement where the project is being built.' },
          { label: 'Developer (Yazam)', detail: 'Company that won the land tender and runs construction.' },
          { label: 'Unit count', detail: 'Number of apartments available in the lottery for that project.' },
          { label: 'Program track', detail: 'Mechir Matara, Mechir LeMishtaken, or Mechir Mufchat.' },
          { label: 'Building permit (Heter Bniya) status', detail: 'Whether the permit is in place — directly drives when you can pick a unit and start construction.' },
        ],
      },
      limits: {
        title: 'How many lotteries you can enter',
        intro: 'Different rules for the main series vs. follow-up rounds.',
        items: [
          { label: 'Main lottery (first series)', detail: 'Up to 3 different cities. Within each city, you are auto-registered for every available project — no per-city limit.' },
          { label: 'Follow-up lotteries (Hagralot Hemshech)', detail: 'No limit on the number of cities or individual projects.' },
          { label: 'Auto-cancellation on win', detail: 'Winning one project automatically cancels all your other pending registrations in the same series.' },
          { label: 'Historical results', detail: 'Past results are published anonymously on the portal — useful for sanity-checking competition before you commit a city slot.' },
        ],
      },
      next: {
        eyebrow: 'Next',
        title: 'Know what happens after the win.',
        body: 'The winner roadmap maps the actual post-draw process — selection windows, signing deadlines, and the documents that turn a win into a signed contract.',
        cta: 'Open winner roadmap',
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Project lists are cycle-specific. Always cross-check with dira.moch.gov.il before relying on a listing.',
        items: [
          { label: 'Ministry of Construction & Housing', body: 'dira.moch.gov.il — the only authoritative project list' },
          { label: 'Israel Land Authority (RMI)', body: 'Land tender results and developer assignments' },
          { label: 'Cycle reference', body: 'Final 2025 lottery — ~7,500 units / ~130k registrants' },
        ],
      },
    },

    winner: {
      eyebrow: 'Step 06 — After the win',
      title: 'Two phases — wait for the permit, then sprint through selection.',
      lede: 'The real post-win schedule is not a 30-day countdown. It is a slow waiting phase that can last years, followed by a 45-minute selection window and a 10-day signing sprint.',
      lastUpdated: 'May 2026',
      banner: 'You won. Use the waiting period before Heter Bniya to lock mortgage pre-approval and update any personal status changes — when the selection slot arrives, you will have hours, not weeks.',
      timeline: {
        title: 'The real timeline',
        intro: 'A waiting phase you cannot rush, then a sprint where every minute counts.',
        phaseLabel: 'Stage',
        phases: [
          { days: '~10 days post-draw', title: 'Notification', tasks: ['Results emailed to all participants', 'Developer makes initial contact about the project schedule', 'Confirm your ranking (place in line)'] },
          { days: 'Months to years',    title: 'Waiting for Heter Bniya (building permit)', tasks: ['Local authority works through the permit process', 'No selection or signing happens until the permit is issued', 'Use this window to lock in mortgage pre-approval (Ishur Ekroni)'] },
          { days: 'Permit + weeks',     title: 'Information conference', tasks: ['Developer presents technical specs and project details', 'Selection slot allocated based on lottery rank'] },
          { days: '45 minutes',         title: 'Apartment selection', tasks: ['Groups of 6 winners enter together', 'Hard 45-minute window to pick a specific unit', 'Missing the window can cost your priority rank'] },
          { days: '10 working days',    title: 'Contract signing', tasks: ['Sign the supervised purchase agreement', '~2,000 ILS non-refundable down payment paid on selection day', 'Eligibility certificate must still be valid'] },
        ],
      },
      hardDeadlines: {
        title: 'Hard deadlines vs. negotiable elements',
        intro: 'Knowing which dates are firm vs. flexible prevents avoidable losses.',
        items: [
          { label: '45-minute selection — HARD', detail: 'Miss the window and you may lose your priority rank.' },
          { label: '10-day signing — HARD', detail: 'Regulatory requirement after selection. No standard extension.' },
          { label: 'Eligibility validity — HARD', detail: 'Certificate must stay valid until the contract is signed. Renew (50 ILS) if it expires mid-process.' },
          { label: 'Payment schedule — FLEXIBLE', detail: 'Developer follows construction milestones, but early payments can sometimes be negotiated to lock the price against the Construction Input Index.' },
        ],
      },
      docs: {
        title: 'Documents required at the winner stage',
        intro: 'Beyond what was required at registration — get these in motion the moment you win.',
        items: [
          { label: 'Mortgage pre-approval (Ishur Ekroni)', detail: 'Get this BEFORE the selection meeting — without it you risk a non-viable deal.' },
          { label: 'Proof of initial payment', detail: '~2,000 ILS non-refundable down payment to the developer on selection day.' },
          { label: 'Updated personal status', detail: 'If marital status changed since registration, file an updated Sefach with the registration company immediately.' },
          { label: 'Notarized power of attorney', detail: 'Required if you cannot attend the selection meeting in person.' },
        ],
      },
      badakBayit: {
        title: 'Building inspection (Badak Bayit)',
        body: 'A private professional inspection is highly recommended before receiving the keys. It is at the buyer\'s choice and cost — performed by a private engineer to identify defects (dampness, cracks, plumbing) that the developer is legally obligated to fix during the warranty period.',
      },
      declining: {
        title: 'Declining a unit — what it costs you',
        intro: 'You can cancel any time before signing, but the rules around your future status are strict.',
        items: [
          { label: 'How to cancel', detail: 'Through the official portal, any time before contract signing.' },
          { label: 'Series A — 2 free waivers', detail: 'You can decline twice without losing Series A status. The third cancellation drops you to Series B (lower priority).' },
          { label: 'Cascade cancellation', detail: 'Canceling a win automatically cancels all other pending registrations in the same series.' },
          { label: 'Once contract is signed', detail: 'Eligibility is "realized" — you are barred from future subsidized lotteries.' },
        ],
      },
      clauses: {
        title: 'Contract clauses unique to Dira BeHanacha units',
        intro: 'Contracts are uniform and supervised — neither developer nor buyer can alter them.',
        items: [
          { label: 'Resale ban', detail: '5 years from receiving the key (Form 4 / Tofes 4) OR 7 years from the lottery date — whichever comes FIRST.' },
          { label: 'Illegal-sale penalty', detail: '~450,000 ILS (CPI-linked) for selling before the ban expires without Exceptions Committee approval.' },
          { label: 'Renting permitted', detail: 'You can rent the unit out immediately on receiving the key — useful for covering the mortgage if you do not move in yourself.' },
          { label: 'Price linkage', detail: 'Apartment price is linked to the Construction Input Index from the date the building permit is issued.' },
        ],
      },
      next: {
        eyebrow: 'Loop closed',
        title: "You've walked the whole path. Revisit any layer as your situation changes.",
        body: 'Use the calculators with real numbers now, and re-check eligibility before each cycle — rules shift between lotteries.',
        cta: 'Back to start',
      },
      sources: {
        title: 'Sources & freshness',
        disclaimer: 'Contract clauses are supervised but cycle dates change. Verify with dira.moch.gov.il and your registration company.',
        items: [
          { label: 'Ministry of Construction & Housing', body: 'Supervised contract terms and Exceptions Committee' },
          { label: 'Israel Land Authority (RMI)', body: 'Resale restrictions and 5/7-year sale ban' },
          { label: 'Form 4 (Tofes 4)', body: 'Occupancy certificate that starts the 5-year clock' },
        ],
      },
    },
  },

  he: {
    common: {
      brand: "HomeEase",
      tagline: "תכנון חכם להגרלות דיור",
      open: "פתיחה",
      next: "הבא",
      back: "חזרה",
      lastUpdated: "עודכן לאחרונה",
    },
    locale: {
      switchTo: "English",
      label: "שפה",
    },
    nav: {
      eligibility: "זכאות",
      registration: "הרשמה",
      budget: "תקציב",
      mortgage: "משכנתא",
      projects: "פרויקטים",
      roadmap: "מפת דרך",
    },
    footer: {
      blurb: "פלטפורמת תכנון לזכאות, תקציב והכנה פיננסית להגרלות דירה בהנחה.",
      brandKicker: "תכנון דיור בישראל",
      resources: "כלים",
      guides: "מדריכים",
      legal: "משפטי",
      links: {
        eligibility: "מדריך זכאות",
        budget: "מחשבון תקציב",
        mortgage: "מחשבון משכנתא",
        projects: "איתור פרויקטים",
        registration: "שלבי הרשמה",
        winner: "אחרי הזכייה",
        faq: "שאלות נפוצות",
        contact: "יצירת קשר",
        privacy: "מדיניות פרטיות",
        terms: "תנאי שימוש",
        disclaimer: "הבהרה משפטית",
      },
      disclaimer: "HomeEase מספקת מידע כללי בלבד. זה לא ייעוץ משפטי, פיננסי או מקצועי. לפני החלטות גדולות, דברו עם אנשי מקצוע.",
      copyright: "© {year} HomeEase. אינה קשורה לרשויות ממשלת ישראל.",
    },
    home: {
      eyebrow: "נבנה במיוחד להגרלות הדיור בישראל",
      heroTitle: "הדרך החכמה והרגועה להתכונן לזכייה בדירה — לפני שהלחץ הכלכלי מתחיל.",
      heroLede: "HomeEase הופכת את תהליך דירה בהנחה למסלול ברור: זכאות, תקציב, משכנתא, התאמת פרויקטים והכנה ליום שאחרי הזכייה.",
      ctaBudget: "בדיקת תקציב",
      ctaEligibility: "בדיקת זכאות",
      pillars: {
        a: "קודם זכאות",
        b: "תקציב לפני החלטות",
        c: "פרויקטים שמתאימים לכם",
      },
      proof: {
        title: "מה HomeEase פותרת",
        withoutTitle: "בלי תכנון",
        withoutBody: "נכנסים להגרלות בהתלהבות, ואז מגלים מאוחר מדי שהמשכנתא, המיקום או לוחות הזמנים פשוט לא מסתדרים.",
        withTitle: "עם HomeEase",
        withBody: "מקבלים כלי תכנון אמיתי עוד לפני ההרשמה, כך שכל החלטה מתחילה ממספרים מציאותיים וצעדים ברורים.",
        promiseTitle: "ההבטחה",
        promise: [
          "הנחיה לתהליך הרשמי, מסודרת בשלבים בשפה ברורה",
          "תכנון פיננסי לפני הזכייה, לא אחרי שהלחץ מתחיל",
          "לוגיקה לבחירת פרויקטים שמתאימה לאורח חיים ולתקציב",
        ],
      },
      flow: {
        kicker: "תהליך בשלושה חלקים",
        title: "הפלטפורמה אמורה לעזור לכם להחליט — לא להעמיס עליכם מידע.",
        lede: "כל שלב מוריד סוג אחר של אי־ודאות: זכאות, כסף ובחירת פרויקט.",
        steps: [
          {
            title: "בדיקת זכאות",
            copy: "להבין אם אתם זכאים, אילו מסמכים נחוצים, ולאילו פורטלים רשמיים באמת צריך להיכנס.",
          },
          {
            title: "הבנת התקציב האמיתי",
            copy: "לראות את הפער בין ההתלהבות מהגרלה לבין יכולת כלכלית אמיתית — לפני שמגישים בקשה.",
          },
          {
            title: "תיעדוף הפרויקטים הנכונים",
            copy: "לסנן לפי תקציב, מיקום וסיכון, כדי להפסיק לרדוף אחרי פרויקטים שלא מתאימים לחיים שלכם.",
          },
        ],
      },
      why: {
        kicker: "למה זה חשוב",
        title: "לזכות זה לא החלק הקשה. להגיע מוכנים — זה כבר סיפור אחר.",
        body: "המטרה היא למנוע טעויות יקרות לפני שנרשמים: בחירת פרויקטים לא מתאימים, הערכת יתר של יכולת המשכנתא, או הגעה לשלב הזוכים בלי מסמכים מוכנים.",
        mvpKicker: "כלים שכבר עובדים",
        mvpTitle: "מחשבונים אינטראקטיביים",
        mvpBody: "מחשבון התקציב ומחשבון המשכנתא כבר זמינים, כך שהמוצר נותן ערך גם לפני שמאגר הידע הושלם.",
        nextKicker: "שכבת התוכן הבאה",
        nextTitle: "מאגר מידע",
        nextBody: "דפי הזכאות, ההרשמה ומפת הדרך לזוכים מוכנים להתחבר לנתונים אמיתיים ברגע שנאסוף את הדרישות ולוחות הזמנים הרשמיים.",
      },
      finalCta: {
        kicker: "התחילו עם הכלים שכבר עובדים",
        title: "נסו את המחשבונים עכשיו, ומשם המשיכו למדריכים המלאים.",
        ctaBudget: "פתיחת מחשבון תקציב",
        ctaRegistration: "מעבר לתהליך ההרשמה",
      },
    },
    eligibility: {
      eyebrow: "שלב 01 — זכאות",
      title: "בדקו איפה אתם באמת עומדים, לפני שמשקיעים אנרגיה בהרשמה.",
      lede: "בדיקת זכאות היא הסינון הכי זול בכל התהליך. סוגרים אותה כמו שצריך, וכל מה שבא אחר כך מפסיק להיות ניחוש.",
      lastUpdated: "מאי 2026",
      programNote: "מחיר למשתכן הוא חלק מתוכנית \"דירה בהנחה\", שמנוהלת על ידי משרד הבינוי והשיכון. הזכאות מבוססת בעיקר על ההגדרה של \"חסרי דיור\".",
      tracks: {
        title: "מי יכול להגיש",
        intro: "יש חמישה מסלולי זכאות. אתם נכנסים דרך המסלול שמתאים למצב שלכם.",
        items: [
          {
            label: "זוגות",
            detail: "נשואים, ידועים בציבור, או מאורסים שמתכננים להתחתן תוך 3 חודשים מהגשת הבקשה. בלי גיל מינימום.",
          },
          {
            label: "יחידים",
            detail: "גיל 35 ומעלה. המסלול הסטנדרטי ליחידים.",
          },
          {
            label: "משתכנים צעירים",
            detail: "יחידים בגיל 26–35 ניגשים במסלול \"משתכן צעיר\".",
          },
          {
            label: "הורים יחידניים",
            detail: "לפחות ילד אחד מתחת לגיל 21 שגר איתכם דרך קבע.",
          },
          {
            label: "אנשים עם מוגבלות",
            detail: "יחידים מגיל 21 עם נכות רפואית מוכרת של 75%+ או מגבלת ניידות מתאימה.",
          },
        ],
        residency: "חייבים להיות אזרחי ישראל או תושבי קבע. ישראלים שנשואים לאזרחים זרים עדיין יכולים להיות זכאים, אבל צריכים להגיש תצהיר ייעודי.",
      },
      reservists: {
        title: "מכסת מילואים — חצי מכל הגרלה",
        body: "במסגרת מדיניות \"ממילואים למפתח\" של 2026, 50% מהדירות בכל הגרלה שמורות לחיילי מילואים פעילים. רבע מהמכסה הזו, כלומר 25% מכלל ההגרלה, שמור לחיילי מילואים בתפקידי לחימה. \"פעיל\" פירושו לפחות 60 ימי שירות בצו 8 מאז 7 באוקטובר 2023.",
      },
      ownership: {
        title: "כללי \"חסרי דיור\"",
        intro: "כדי להיחשב חסרי דיור, המשרד בודק את שלוש השנים האחרונות. כל אחד מהסעיפים הבאים יכול לפסול את הבקשה.",
        items: [
          {
            label: "צינון של 3 שנים",
            detail: "אין בבעלותכם נכס מגורים בשלוש השנים שלפני הגשת הבקשה. (קוצר לאחרונה מ-6 שנים.)",
          },
          {
            label: "בעלות חלקית",
            detail: "החזקה של יותר משליש (1/3) מנכס מגורים פוסלת.",
          },
          {
            label: "ירושה",
            detail: "אותו כלל של שליש — חלק שירשתם שגדול מ-1/3 פוסל.",
          },
          {
            label: "זכויות במקרקעין ובנייה",
            detail: "פסילה אם החזקתם בזכויות במגרש מגורים, נחלה, או דירה בשלבי בנייה ב-3 השנים האחרונות.",
          },
          {
            label: "משפרי דיור",
            detail: "בעלי דירה יחידה יכולים לגשת ל\"הגרלות המשך\", בתנאי שמתחייבים למכור את הדירה הקיימת תוך 12 חודשים מהכניסה ליחידה החדשה.",
          },
        ],
      },
      income: {
        title: "תקרות הכנסה",
        body: "תקרות הכנסה קיימות ונבדקות בשלב הזכאות, אבל הסכומים המדויקים בשקלים משתנים בין חוזרי המשרד ותלויים בהרכב משק הבית. לפני הגשה, כדאי למשוך את המספרים העדכניים ישירות מ-dira.moch.gov.il.",
      },
      docs: {
        title: "מסמכים נדרשים",
        intro: "אוספים פעם אחת, ומשתמשים שוב בכל הגרלה.",
        groups: [
          {
            title: "זהות",
            items: [
              "תעודת זהות",
              "ספח מעודכן שמשקף את המצב המשפחתי הנוכחי וילדים",
            ],
          },
          {
            title: "מצב משפחתי",
            items: [
              "תעודת נישואין (לנשואים)",
              "הצהרת ידועים בציבור חתומה בפני עו״ד",
              "רישום ברבנות או תצהיר על כוונה להתחתן תוך 3 חודשים (למאורסים)",
              "הסכם גירושין (אם התגרשתם בפחות מ-3 שנים)",
            ],
          },
          {
            title: "שירות",
            items: [
              "אישור שירות מצה״ל — טופס 3010 או 861 — למילואימניקים שמבקשים את מכסת ה-50%",
            ],
          },
          {
            title: "רפואי",
            items: [
              "הכרה רשמית מהביטוח הלאומי או ממשרד הביטחון למבקשים עם מוגבלות",
            ],
          },
          {
            title: "היסטוריית רכוש",
            items: [
              "נסחי טאבו או מסמכים מרשות המסים להבהרת בעלות בעבר, אם נדרש",
            ],
          },
        ],
      },
      sequence: {
        title: "איך מקבלים תעודת זכאות",
        intro: "תעודות זכאות מונפקות דרך חברות רישום מורשות — לא ישירות מול המשרד.",
        steps: [
          {
            title: "בחירת חברת רישום",
            body: "בוחרים אחת משלוש החברות המורשות: מילגם, אלונים, או מעו״ף.",
          },
          {
            title: "הגשת מסמכים",
            body: "מעבירים את כל סט המסמכים — זהות, מצב משפחתי, שירות, היסטוריית רכוש.",
          },
          {
            title: "תשלום אגרה",
            body: "תעודה חדשה: 200–240 ש״ח. חידוש או הארכה: 50 ש״ח.",
          },
          {
            title: "קבלת התעודה",
            body: "ברגע שהיא הונפקה, התעודה היא הכרטיס שלכם לכל הגרלה פעילה שאתם זכאים אליה.",
          },
        ],
      },
      next: {
        eyebrow: "הצעד הבא",
        title: "אתם זכאים. עכשיו צריך לוודא שהמספרים עובדים.",
        body: "זכאות אומרת שאפשר להיכנס להגרלה. מחשבון התקציב אומר אם הזכייה באמת מתאימה לחיים שלכם גם 25 שנה קדימה.",
        cta: "בדיקת תקציב",
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "הכללים יכולים להשתנות בין מחזורי הגרלות. תמיד לאמת מול הפורטל הרשמי לפני הגשה.",
        items: [
          {
            label: "משרד הבינוי והשיכון",
            body: "dira.moch.gov.il — הפורטל הרשמי של התוכנית",
          },
          {
            label: "חברות רישום מורשות",
            body: "מילגם, אלונים, מעו״ף",
          },
          {
            label: "מדיניות מילואים",
            body: "\"ממילואים למפתח\" (2026) — מכסת 50% למילואימניקים",
          },
        ],
      },
    },
    registration: {
      eyebrow: "שלב 05 — הרשמה",
      title: "לעבור את ההרשמה הרשמית בלי הפתעות.",
      lede: "חלון ההרשמה קצר ולא סלחני. נכנסים אליו כשהמסמכים מוכנים, הפורטל מוכר לכם, ויש לכם תיעוד מסודר של כל פעולה.",
      lastUpdated: "מאי 2026",
      cycle: {
        title: "המחזור הנוכחי — הגרלה 11",
        intro: "התאריכים החשובים בסבב הפעיל של 2026.",
        items: [
          {
            label: "מועד אחרון להוצאת תעודת זכאות",
            detail: "30 באפריל 2026 — תעודות חדשות היה צריך להגיש עד התאריך הזה.",
          },
          {
            label: "סגירת חלון ההרשמה",
            detail: "7 במאי 2026, 23:59.",
          },
          {
            label: "פרסום תוצאות",
            detail: "בערך 10 ימים אחרי סגירת חלון ההרשמה.",
          },
        ],
      },
      flow: {
        title: "איך ההרשמה עובדת בפועל",
        intro: "יש שני שלבים נפרדים: קודם מוציאים תעודת זכאות, ואז נרשמים לפרויקטים ספציפיים.",
        steps: [
          {
            title: "הוצאת תעודת זכאות",
            desc: "מגישים דרך מילגם, אלונים, או מעו״ף — אונליין או פיזית בסניפים.",
          },
          {
            title: "הרשמה אונליין להגרלות",
            desc: "אחרי שהתעודה מגיעה במייל, נכנסים לפורטל הרשמי ובוחרים את ההגרלות שרוצים לגשת אליהן.",
          },
          {
            title: "בחירה של עד 3 ערים",
            desc: "אפשר להירשם בעד שלוש ערים שונות. בתוך כל עיר אתם נרשמים אוטומטית לכל הפרויקטים הזמינים.",
          },
          {
            title: "המתנה להגרלה ממוחשבת",
            desc: "אחרי שהחלון נסגר, המשרד מריץ את ההגרלה ומבקר את התוצאות.",
          },
          {
            title: "בחירה אחרי זכייה",
            desc: "הזוכים מקבלים דירוג (מקום בתור), מגיעים לכנס יזם, ואז יש חלון של 45 דקות לבחור דירה ספציפית ולחתום על חוזה הרכישה.",
          },
        ],
      },
      benMakom: {
        title: "\"בן מקום\" — הטבת תושב מקומי",
        body: "מעמד \"בן מקום\" מאומת אוטומטית מול הכתובת שלכם במשרד הפנים. אם הכתובת בספח לא מעודכנת, חייבים לעדכן אותה לפני שמגישים בקשה לזכאות. אחרת אתם עלולים לאבד את ההטבה בעיר שלכם.",
      },
      after: {
        title: "מה קורה אחרי ההגשה",
        intro: "לוח זמנים מציאותי לתקופה שאחרי ההרשמה.",
        rows: [
          {
            window: "מיידי",
            detail: "אישור ב-SMS ובמייל לכל פרויקט ועיר שאליהם נרשמתם.",
          },
          {
            window: "כ-10 ימי עסקים",
            detail: "אימות מסמכים → הנפקת תעודת זכאות. יותר ארוך אם נדרש אימות חיצוני (למשל מרשות המסים).",
          },
          {
            window: "כ-10 ימים מסגירת החלון",
            detail: "תוצאות ההגרלה נשלחות במייל לכל המשתתפים בו-זמנית.",
          },
          {
            window: "חודשים עד שנים",
            detail: "מהזכייה ועד בחירת דירה — תלוי בקבלת היתר בנייה, שהוא תנאי לפני שהיזם מציע יחידות.",
          },
        ],
      },
      where: {
        title: "איפה נרשמים",
        intro: "שתי מערכות מטפלות בשני שלבים שונים.",
        items: [
          {
            label: "הפורטל הרשמי",
            body: "dira.moch.gov.il — אחראי על ההרשמה להגרלה עצמה.",
          },
          {
            label: "חברות הנפקה מורשות",
            body: "מילגם, אלונים, או מעו״ף — אחראיות על הנפקת תעודת הזכאות.",
          },
          {
            label: "הערה על העיריות",
            body: "משרדי העירייה לא מטפלים בהרשמה. הרלוונטיות היחידה שלהם היא דרך רישום הכתובת שלכם במשרד הפנים.",
          },
        ],
      },
      next: {
        eyebrow: "חזרה לבסיס",
        title: "סגרו זכאות לפני שניגשים להרשמה.",
        body: "הרשמה בלי זכאות מאושרת עלולה להידחות מאוחר בתהליך, לפעמים בשלב שכבר אי אפשר להגיש מחדש.",
        cta: "בדיקה חוזרת של הזכאות",
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "תאריכים ונהלים יכולים להשתנות בין מחזורים. תמיד לאמת מול הפורטל הרשמי לפני הגשה.",
        items: [
          {
            label: "משרד הבינוי והשיכון",
            body: "dira.moch.gov.il — הפורטל הרשמי להרשמה",
          },
          {
            label: "משרד הפנים",
            body: "עדכון כתובת בספח מתבצע דרכם.",
          },
          {
            label: "הפניית מחזור",
            body: "הגרלה 11 — תאריכי אפריל/מאי 2026",
          },
        ],
      },
    },
    budget: {
      eyebrow: "שלב 02 — יכולת כלכלית",
      title: "להבין את המספר האמיתי, לפני שההגרלה תקבע אותו בשבילכם.",
      lede: "רוב הזוכים מגלים את התקציב שלהם רק אחרי שזכו. כאן מקבלים את התשובה קודם, וכל ההמשך כבר נשען על מספר שעמד במבחן.",
      lastUpdated: "מאי 2026",
      rules: {
        title: "כללי הון עצמי — דירה בהנחה (2026)",
        intro: "בדירות מסובסדות, רצפת ההון העצמי נמוכה משמעותית מהשוק החופשי.",
        items: [
          { label: "מינימום הון עצמי (עם מענק)", detail: "₪60,000 במזומן, אם הפרויקט עומד ברשימת הזכאות למענק." },
          { label: "מינימום הון עצמי (ללא מענק)", detail: "₪100,000 במזומן לרכישה מסובסדת רגילה." },
          { label: "תקרת שמאות", detail: "LTV מחושב לפי שווי שמאות, עד תקרה של ₪2.1M (עודכן מ-₪1.8M בפברואר 2026)." },
          { label: "תקרת LTV", detail: "75% מהשווי לחישוב — לדירה ראשונה בלבד." },
          { label: "יום הבחירה", detail: "מקדמה לא חוזרת של כ-₪2,000 ליזם ביום שבוחרים יחידה." },
        ],
        grantsTitle: "מענקים נוספים",
        grants: [
          { label: "מענק מקום", detail: "₪40,000–60,000 באזורי עדיפות לאומית או ביישובים בעלי מדד פריפריה 1–4." },
          { label: "מענק ביטחון", detail: "כ-₪9,000 לבניית או שדרוג ממ\"ד בפרויקטים לאורך גבול הצפון." },
          { label: "תנאים", detail: "המענקים בדרך כלל דורשים מגורים בדירה במשך 5–7 שנים, בלי למכור." },
        ],
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "כללי בנק ישראל וסכומי המענקים מתעדכנים מדי שנה. לפני התחייבות — תמיד לאמת מול הבנק ומול dira.moch.gov.il.",
        items: [
          { label: "בנק ישראל — הוראת ניהול בנקאי תקין 329", body: "תקרות LTV, יחס החזר, כללים לדירות מסובסדות." },
          { label: "משרד הבינוי והשיכון", body: "תוכנית דירה בהנחה ומענק מקום." },
          { label: "כל זכות", body: "סיכום בשפה פשוטה של מגבלות משכנתא בישראל." },
        ],
      },
      form: {
        title: "התמונה הפיננסית שלכם",
        intro: "כל הנתונים נשארים אצלכם במחשב — שום דבר לא נשלח החוצה.",
        calculate: "חישוב יכולת כלכלית",
        cash: { label: "מזומן להון עצמי (₪)", placeholder: "250,000", hint: "חיסכון, מתנות, תמורת מכירה — מה שבאמת זמין ביום הראשון." },
        netIncome: { label: "הכנסה חודשית נטו של משק הבית (₪)", placeholder: "20,000", hint: "סך ההכנסה שנכנסת לחשבון אחרי מסים." },
        existingLoans: { label: "החזרי הלוואות קיימים (₪ בחודש)", placeholder: "1,500", hint: "רכב, צרכני, סטודנט — כל מה שקבוע." },
        interestRate: { label: "ריבית תכנון (%)", placeholder: "5.0", hint: "ריבית שמרנית להערכה. שווה לשחק עם הריבית כדי לראות עד כמה התוצאה רגישה." },
        termYears: { label: "תקופת משכנתא (שנים)", placeholder: "30", hint: "עד 30 שנה לפי הוראת בנק ישראל 329." },
      },
      results: {
        title: "מה אתם יכולים להרשות",
        maxPriceSafe: "נוח",
        maxPriceSafeFoot: "30% מההכנסה הפנויה לדיור. זה המספר שכדאי לתכנן סביבו.",
        maxPriceStretched: "מתוח",
        maxPriceStretchedFoot: "40% מההכנסה הפנויה. צמוד — שווה לבדוק תרחיש של ריבית גבוהה יותר.",
        maxPriceHard: "הקצה הרגולטורי",
        maxPriceHardFoot: "50% מההכנסה — תקרת בנק ישראל. כבד, ומה שבנק עדיין עשוי לאשר בתאוריה.",
        breakdown: "פירוט",
        disposableIncome: "הכנסה פנויה חודשית",
        cash: "מזומן להון עצמי",
        safePayment: "החזר חודשי נוח",
        safeLoan: "הלוואה שתומכת בהחזר נוח",
        warn: "זו הערכה תכנונית, לא אישור בנקאי. התנאים בפועל תלויים בשמאות, דירוג אשראי, תמהיל המשכנתא והריבית ביום החתימה.",
        emptyPrefix: "מלאו את המספרים מימין ולחצו על",
        emptyHighlight: "חישוב",
        emptySuffix: ". התוצאות יופיעו כאן.",
      },
      next: {
        eyebrow: "הצעד הבא",
        title: "להצליב את התקציב מול פרויקטים אמיתיים.",
        body: "עכשיו, כשברור עד איזה מחיר אפשר להגיע, איתור הפרויקטים עוזר לסנן את ההגרלות לפי תקציב, מיקום ואורח חיים — בלי להתאהב במה שלא מתאים.",
        cta: "איתור פרויקטים מתאימים",
      },
    },
    mortgage: {
      eyebrow: "שלב 03 — משכנתא",
      title: "מתקציב כללי להלוואה שאפשר לדבר עליה עם הבנק.",
      lede: "בנקים מאשרים לפי יחסים, לא לפי אופטימיות. המחשבון מראה איזו הלוואה באמת יכולה לעבור, וקטגוריית תכנון בצבעים: ירוק / צהוב / כתום / אדום.",
      lastUpdated: "מאי 2026",
      rules: {
        title: "כללי משכנתא — דירה ראשונה (2026)",
        intro: "לפי הוראת בנק ישראל 329, כולל עדכון 2026 לדירות מסובסדות.",
        items: [
          { label: "תקרת LTV", detail: "75% מהשווי לחישוב לדירה ראשונה (70% לדירה חליפית, 50% לדירה להשקעה)." },
          { label: "תקרת שמאות לדירות מסובסדות", detail: "השווי לחישוב = שמאות, עד תקרה של ₪2.1M. מעל זה — התקרה או מחיר הרכישה, הגבוה מביניהם." },
          { label: "תקרת PTI קשיחה", detail: "ההחזר החודשי לא יכול לעבור 50% מההכנסה הפנויה." },
          { label: "רמות תכנון", detail: "30% PTI = נוח, 40% = מתוח, 50% = הקצה הרגולטורי." },
          { label: "תקופה מקסימלית", detail: "30 שנים." },
          { label: "תמהיל מסלולים", detail: "לפחות 33⅓% צריך להיות בקבועה; עד 66⅔% במשתנה. הבנק קובע את התמהיל." },
          { label: "הון עצמי שמקורו בהלוואה", detail: "הבנק לא יכול לתת לכם הלוואה שתיחשב הון עצמי. הלוואה צרכנית תיחשב התחייבות, לא הון." },
        ],
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "הריביות משתנות עם ריבית בנק ישראל. לפני שמסתמכים על המספרים — לבקש אישור עקרוני מהבנק.",
        items: [
          { label: "בנק ישראל — הוראה 329 (עדכון פברואר 2026)", body: "תקרות LTV, יחס החזר, תקרת שמאות לדירות מסובסדות. boi.org.il/media/ptciib1v/h2840.pdf" },
          { label: "בנק ישראל — שאלות ותשובות על מגבלות משכנתא", body: "כולל הכלל שהלוואה לא יכולה להיחשב הון עצמי. boi.org.il/media/141cr3bf/111581.pdf" },
          { label: "כל זכות", body: "מגבלות משכנתא בשפה פשוטה: kolzchut.org.il" },
          { label: "משרד הבינוי והשיכון", body: "דירה בהנחה והטבות מימון: gov.il/he/departments/topics/dira" },
        ],
      },
      form: {
        title: "פרטי המשכנתא",
        intro: "הכל מקומי — שווה להריץ כמה תרחישים.",
        calculate: "חישוב משכנתא",
        purchasePrice: { label: "מחיר הרכישה (₪)", placeholder: "1,800,000", hint: "מחיר החוזה של הדירה המסובסדת." },
        appraisedValue: { label: "שווי שמאות (₪)", placeholder: "2,300,000", hint: "אופציונלי. אם ידוע — נחיל את תקרת ₪2.1M לדירות מסובסדות." },
        netIncome: { label: "הכנסה חודשית נטו של משק הבית (₪)", placeholder: "20,000", hint: "סך ההכנסה שנכנסת לחשבון." },
        existingLoans: { label: "החזרי הלוואות קיימים (₪ בחודש)", placeholder: "1,500", hint: "רכב, צרכני, סטודנט — חודשי." },
        rentUntilEntry: { label: "שכירות עד הכניסה (₪ בחודש)", placeholder: "5,500", hint: "אופציונלי. מנכה מההכנסה הפנויה בזמן ההמתנה." },
        otherObligations: { label: "התחייבויות קבועות נוספות (₪ בחודש)", placeholder: "0", hint: "מזונות, חיובים קבועים אחרים." },
        cashEquity: { label: "הון עצמי במזומן זמין (₪)", placeholder: "250,000", hint: "מה שיש לכם להביא — חיסכון, מתנות, תמורת מכירה." },
        hasGrant: { label: "הפרויקט זכאי למענק לזכאים", hint: "לאמת מול הרשימה הרשמית — מוריד את רצפת ההון העצמי ל-₪60,000." },
        useSubsidized: { label: "להחיל כללי דירה מסובסדת", hint: "פעיל כברירת מחדל — מחיל תקרת ₪2.1M ורצפות ₪60k/₪100k." },
        interestRate: { label: "ריבית תכנון (%)", placeholder: "5.0", hint: "ריבית שמרנית להערכה. הריבית בפועל נקבעת מול הבנק." },
        termYears: { label: "תקופת ההלוואה (שנים)", placeholder: "30", hint: "עד 30 שנה לפי הוראה 329." },
      },
      results: {
        title: "תוצאת תכנון",
        categoryLabel: "קטגוריית תכנון",
        category: {
          green: { title: "נוח יחסית", body: "נראה שהעסקה יושבת בטווח נוח יחסית. עדיין צריך אישור עקרוני מהבנק, אבל המספרים הראשוניים נראים סבירים." },
          yellow: { title: "מתוח", body: "אפשרי אולי, אבל מתוח. ההחזר אוכל חלק גדול מההכנסה הפנויה, וכדאי לבדוק תרחיש ריבית גבוה יותר." },
          orange: { title: "אזור סיכון בנקאי", body: "זה כבר אזור מסוכן. גם אם בנק מסוים יסכים לבדוק את זה, ההחזר עלול להיות כבד מאוד." },
          red: { title: "כנראה לא עובד", body: "לפי הנתונים, העסקה כנראה לא עוברת. או שחסר הון עצמי, או שההחזר גבוה מדי, או שסכום המשכנתא עובר את מגבלת המימון." },
        },
        requestedLoan: "סכום ההלוואה שתצטרכו",
        requestedLoanFoot: "מחיר הרכישה פחות ההון העצמי הקיים.",
        monthlyPayment: "החזר חודשי",
        monthlyPaymentFoot: "לפי לוח שפיצר, בריבית והתקופה שלמעלה.",
        requiredEquity: "הון עצמי נדרש",
        requiredEquityFoot: "רצפת בנק ישראל או הפער מ-LTV — הגבוה מביניהם.",
        breakdown: "פירוט",
        equityYouHave: "הון עצמי שיש לכם",
        equityGap: "פער הון עצמי",
        maxLoanByLtv: "הלוואה מקסימלית לפי LTV",
        maxLoanSafe: "הלוואה מקסימלית בטוחה (30% PTI)",
        maxLoanStretched: "הלוואה מקסימלית מתוחה (40% PTI)",
        maxLoanHard: "הלוואה מקסימלית בקצה הרגולטורי (50% PTI)",
        disposableIncome: "הכנסה פנויה",
        pti: "יחס החזר להכנסה",
        ltvValue: "שווי לחישוב LTV",
        warnings: {
          noAppraisal: "אין שמאות — חישבנו לפי מחיר הרכישה כדי להישאר שמרניים. בדירה בהנחה, שמאות גבוהה יותר יכולה לשפר את אחוז המימון.",
          equityGap: "אתם מתחת לרצפת ההון העצמי. צריך להביא יותר מזומן, להוריד מחיר או לחכות שהחיסכון יתפוס.",
          highPti: "ההחזר החודשי עובר 40% מההכנסה הפנויה — סיכון משמעותי אם הריבית או ההכנסה משתנות.",
          ltvBreach: "סכום ההלוואה המבוקש עובר את תקרת ה-LTV. הבנק ידרוש יותר הון עצמי.",
          borrowedEquity: "הלוואה חדשה לרוב לא נחשבת הון עצמי. הבנק יבחן אותה כהתחייבות נוספת.",
        },
        emptyPrefix: "מלאו את הפרטים מימין ולחצו על",
        emptyHighlight: "חישוב",
        emptySuffix: " כדי לראות את קטגוריית התכנון.",
      },
      next: {
        eyebrow: "הצעד הבא",
        title: "להצליב את ההלוואה מול פרויקטים אמיתיים.",
        body: "עכשיו, כשברור מה הגבול העליון, איתור הפרויקטים עוזר לסנן את ההגרלות לפי תקציב, מיקום ואורח חיים — בלי להתאהב במה שלא מתאים.",
        cta: "איתור פרויקטים מתאימים",
      },
    },
    projects: {
      eyebrow: "שלב 04 — התאמת פרויקטים",
      title: "להפסיק להתאהב בפרויקטים שלא מתאימים לחיים שלכם.",
      lede: "רשימת הפרויקטים הרשמית נמצאת ב-dira.moch.gov.il. הדף הזה מסביר את היקף ההגרלות, מבנה הרשימות והכללים, כדי שתדעו לקרוא את הפורטל נכון.",
      lastUpdated: "מאי 2026",
      programNote: "המסלולים השונים, כמו מחיר למשתכן, מחיר מטרה ומחיר מופחת, אוחדו תחת המותג \"דירה בהנחה\" ב-2023. הפורטל של המשרד הוא מקור האמת היחיד — אין API ציבורי או מאגר פתוח מלא.",
      scale: {
        title: "היקף המחזור הנוכחי",
        intro: "מספרים מהמחזור האחרון, כדי שתוכלו להבין את הסיכויים לפני ההרשמה.",
        items: [
          {
            label: "כ-130,000 נרשמים",
            detail: "ההגרלה האחרונה של 2025 — סך כל הנרשמים בכל הפרויקטים.",
          },
          {
            label: "כ-7,500 יחידות זמינות",
            detail: "בכל הפרויקטים באותה הגרלה.",
          },
          {
            label: "יחס תחרות משתמע של כ-17:1",
            detail: "ממוצע — מתרכז בערי ביקוש; בערי פריפריה התחרות נמוכה משמעותית.",
          },
        ],
      },
      fields: {
        title: "מה כולל כל פרויקט רשמי",
        intro: "כל דף פרויקט ב-dira.moch.gov.il מציג את אותם שדות בסיסיים.",
        items: [
          {
            label: "מחיר למ\"ר בנוי",
            detail: "מחיר מטרה: בדרך כלל לא כולל את הנחת ה-20% (עד 300 אלף ש״ח). מסלולים אחרים: ההנחה לרוב כבר משוקללת במחיר המפורסם.",
          },
          {
            label: "מיקום",
            detail: "העיר או היישוב המדויק שבו הפרויקט נבנה.",
          },
          {
            label: "יזם",
            detail: "החברה שזכתה במכרז הקרקע ומבצעת את הבנייה.",
          },
          {
            label: "מספר יחידות",
            detail: "מספר הדירות שזמינות להגרלה בפרויקט.",
          },
          {
            label: "מסלול תוכנית",
            detail: "מחיר מטרה, מחיר למשתכן, או מחיר מופחת.",
          },
          {
            label: "סטטוס היתר בנייה",
            detail: "האם יש היתר בנייה — קובע ישירות מתי תוכלו לבחור יחידה ומתי הבנייה תתחיל.",
          },
        ],
      },
      limits: {
        title: "לכמה הגרלות אפשר להירשם",
        intro: "הכללים שונים בין הסבב הראשי לבין הגרלות המשך.",
        items: [
          {
            label: "הגרלה ראשית (סדרה ראשונה)",
            detail: "עד 3 ערים שונות. בתוך כל עיר — רישום אוטומטי לכל הפרויקטים, בלי תקרה לעיר.",
          },
          {
            label: "הגרלות המשך",
            detail: "אין הגבלה על מספר הערים או הפרויקטים.",
          },
          {
            label: "ביטול אוטומטי בזכייה",
            detail: "זכייה בפרויקט אחד מבטלת אוטומטית את כל ההרשמות האחרות שלכם באותה סדרה.",
          },
          {
            label: "תוצאות היסטוריות",
            detail: "תוצאות עבר מתפרסמות בפורטל באופן אנונימי — שימושי לבדיקת תחרות לפני שמשקיעים סלוט עיר.",
          },
        ],
      },
      next: {
        eyebrow: "הצעד הבא",
        title: "לדעת מה קורה אחרי הזכייה.",
        body: "מפת הדרך לזוכים מסבירה את התהליך שאחרי ההגרלה: חלונות בחירה, דדליינים לחתימה, והמסמכים שהופכים זכייה לחוזה חתום.",
        cta: "פתיחת מפת הדרך",
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "רשימות הפרויקטים משתנות בין מחזורים. תמיד להצליב מול dira.moch.gov.il לפני שמסתמכים על פרויקט מסוים.",
        items: [
          {
            label: "משרד הבינוי והשיכון",
            body: "dira.moch.gov.il — רשימת הפרויקטים הרשמית היחידה",
          },
          {
            label: "רשות מקרקעי ישראל (רמ״י)",
            body: "תוצאות מכרזי קרקע והקצאת יזמים",
          },
          {
            label: "הפניית מחזור",
            body: "הגרלה אחרונה של 2025 — כ-7,500 יחידות / ~130 אלף נרשמים",
          },
        ],
      },
    },
    winner: {
      eyebrow: "שלב 06 — אחרי הזכייה",
      title: "שני שלבים: מחכים להיתר, ואז נכנסים לספרינט בחירה.",
      lede: "הלו״ז האמיתי אחרי הזכייה הוא לא ספירה פשוטה של 30 יום. קודם מגיע שלב המתנה שיכול לקחת שנים, ואז חלון בחירה קצר וספרינט חתימה של 10 ימים.",
      lastUpdated: "מאי 2026",
      banner: "זכיתם. נצלו את תקופת ההמתנה לפני היתר הבנייה כדי לסגור אישור עקרוני למשכנתא ולעדכן כל שינוי במצב האישי. כשיגיע תור הבחירה, יהיו לכם שעות — לא שבועות.",
      timeline: {
        title: "לוח הזמנים האמיתי",
        intro: "קודם שלב המתנה שאי אפשר לקצר, ואז ספרינט שבו כל דקה חשובה.",
        phaseLabel: "שלב",
        phases: [
          {
            days: "כ-10 ימים אחרי ההגרלה",
            title: "הודעה",
            tasks: [
              "תוצאות נשלחות במייל לכל המשתתפים",
              "היזם יוצר קשר ראשוני לגבי לוח הזמנים של הפרויקט",
              "אישור הדירוג שלכם (מקום בתור)",
            ],
          },
          {
            days: "חודשים עד שנים",
            title: "המתנה להיתר בנייה",
            tasks: [
              "הרשות המקומית מקדמת את תהליך ההיתר",
              "אין בחירה או חתימה עד שההיתר מונפק",
              "ניצול החלון לסגירת אישור עקרוני למשכנתא",
            ],
          },
          {
            days: "היתר + שבועות",
            title: "כנס מידע",
            tasks: [
              "היזם מציג מפרט טכני ופרטי פרויקט",
              "סלוט הבחירה מוקצה לפי דירוג ההגרלה",
            ],
          },
          {
            days: "45 דקות",
            title: "בחירת דירה",
            tasks: [
              "קבוצות של 6 זוכים נכנסות יחד",
              "חלון קשיח של 45 דקות לבחור יחידה ספציפית",
              "פספוס החלון עלול לעלות בדירוג העדיפות",
            ],
          },
          {
            days: "10 ימי עסקים",
            title: "חתימת חוזה",
            tasks: [
              "חתימה על חוזה הרכישה המפוקח",
              "תשלום מקדמה של כ-2,000 ש״ח (לא ניתן להחזר) ביום הבחירה",
              "תעודת הזכאות חייבת להיות בתוקף",
            ],
          },
        ],
      },
      hardDeadlines: {
        title: "דדליינים קשיחים מול דברים שאפשר להזיז",
        intro: "כשיודעים מה קשיח ומה גמיש, נמנעים מהפסדים מיותרים.",
        items: [
          {
            label: "בחירה ב-45 דקות — קשיח",
            detail: "פספוס החלון עלול לעלות בדירוג העדיפות שלכם.",
          },
          {
            label: "חתימה תוך 10 ימים — קשיח",
            detail: "דרישה רגולטורית אחרי הבחירה. אין הארכה סטנדרטית.",
          },
          {
            label: "תוקף הזכאות — קשיח",
            detail: "התעודה חייבת להיות בתוקף עד החתימה. אם פגה באמצע — מחדשים ב-50 ש״ח.",
          },
          {
            label: "לוח התשלומים — גמיש",
            detail: "היזם עובד לפי אבני דרך של בנייה, אבל לפעמים אפשר לסגור תשלומים מוקדמים כדי לנעול את המחיר מול מדד תשומות הבנייה.",
          },
        ],
      },
      docs: {
        title: "מסמכים לשלב הזכייה",
        intro: "מעבר למה שנדרש בהרשמה — כדאי להתחיל להזיז אותם ברגע שזכיתם.",
        items: [
          {
            label: "אישור עקרוני למשכנתא",
            detail: "משיגים אותו לפני פגישת הבחירה — בלעדיו יש סיכון שהעסקה לא ריאלית.",
          },
          {
            label: "הוכחת תשלום מקדמה",
            detail: "מקדמה של כ-2,000 ש״ח (לא ניתן להחזר) ליזם ביום הבחירה.",
          },
          {
            label: "עדכון מצב אישי",
            detail: "אם המצב המשפחתי השתנה מאז ההרשמה, מגישים ספח מעודכן לחברת הרישום מיידית.",
          },
          {
            label: "ייפוי כוח נוטריוני",
            detail: "נדרש אם אתם לא יכולים להגיע באופן אישי לפגישת הבחירה.",
          },
        ],
      },
      badakBayit: {
        title: "בדק בית",
        body: "בדיקה מקצועית פרטית מומלצת מאוד לפני קבלת המפתחות. הבדיקה היא לבחירת הקונה ובמימונו, ומתבצעת על ידי מהנדס פרטי שמאתר ליקויים כמו רטיבות, סדקים ובעיות אינסטלציה. את הליקויים שהחוק מחייב לתקן, היזם צריך לטפל בהם בתקופת האחריות.",
      },
      declining: {
        title: "ויתור על דירה — מה זה עולה לכם",
        intro: "אפשר לבטל לפני החתימה, אבל הכללים לגבי המעמד העתידי שלכם מחמירים.",
        items: [
          {
            label: "איך מבטלים",
            detail: "דרך הפורטל הרשמי, בכל רגע לפני חתימת חוזה.",
          },
          {
            label: "סדרה א׳ — 2 ויתורים ללא קנס",
            detail: "אפשר לוותר פעמיים בלי לאבד את מעמד סדרה א׳. הביטול השלישי מעביר אתכם לסדרה ב׳ (עדיפות נמוכה יותר).",
          },
          {
            label: "ביטול מדורג",
            detail: "ביטול זכייה מבטל אוטומטית את כל ההרשמות האחרות שלכם באותה סדרה.",
          },
          {
            label: "ברגע שהחוזה נחתם",
            detail: "הזכאות נחשבת ל\"ממומשת\" — אתם נחסמים מהגרלות מסובסדות עתידיות.",
          },
        ],
      },
      clauses: {
        title: "סעיפי חוזה ייחודיים ל\"דירה בהנחה\"",
        intro: "החוזים אחידים ומפוקחים. לא היזם ולא הקונה יכולים לשנות אותם בחופשיות.",
        items: [
          {
            label: "איסור מכירה",
            detail: "5 שנים מקבלת המפתח (טופס 4) או 7 שנים ממועד ההגרלה — לפי המוקדם מבין השניים.",
          },
          {
            label: "קנס מכירה אסורה",
            detail: "כ-450,000 ש״ח (צמוד למדד) על מכירה לפני שתקופת האיסור הסתיימה, ללא אישור של ועדת חריגים.",
          },
          {
            label: "השכרה מותרת",
            detail: "אפשר להשכיר את הדירה מיד עם קבלת המפתח — שימושי לכיסוי המשכנתא אם לא עוברים אליה.",
          },
          {
            label: "הצמדת מחיר",
            detail: "מחיר הדירה צמוד למדד תשומות הבנייה החל מהיום שבו ניתן היתר הבנייה.",
          },
        ],
      },
      next: {
        eyebrow: "סגרנו מעגל",
        title: "עברתם את כל המסלול. עכשיו אפשר לחזור לכל שלב כשהמצב משתנה.",
        body: "הריצו את המחשבונים עם מספרים אמיתיים, ובדקו זכאות מחדש לפני כל מחזור. הכללים יכולים לזוז בין הגרלות.",
        cta: "חזרה להתחלה",
      },
      sources: {
        title: "מקורות ועדכניות",
        disclaimer: "סעיפי החוזה מפוקחים, אבל תאריכי המחזור משתנים. תמיד לאמת מול dira.moch.gov.il ומול חברת הרישום שלכם.",
        items: [
          {
            label: "משרד הבינוי והשיכון",
            body: "תנאי חוזה מפוקחים וועדת חריגים",
          },
          {
            label: "רשות מקרקעי ישראל (רמ״י)",
            body: "הגבלות מכירה ואיסור 5/7 שנים",
          },
          {
            label: "טופס 4",
            body: "תעודת אכלוס שמתחילה את ספירת 5 השנים",
          },
        ],
      },
    },
  },
} as const;

export type Locale = keyof typeof messages;
export const LOCALES: Locale[] = ['en', 'he'];
export const DEFAULT_LOCALE: Locale = 'he';
export const RTL_LOCALES: Locale[] = ['he'];

export const isRtl = (locale: Locale) => RTL_LOCALES.includes(locale);
