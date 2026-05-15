import Link from 'next/link'

import Button from '@/components/shared/Button'
import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false })

export default function Home() {
  const steps = [
    {
      id: '01',
      title: 'Check eligibility',
      copy: 'Understand whether you qualify, what documents matter, and which official portals you actually need.',
      href: '/eligibility',
    },
    {
      id: '02',
      title: 'Model the real budget',
      copy: 'See the gap between lottery excitement and real affordability before you apply anywhere.',
      href: '/budget-calculator',
    },
    {
      id: '03',
      title: 'Prioritize the right projects',
      copy: 'Filter by budget, location, and risk so you stop chasing projects that do not fit your life.',
      href: '/project-finder',
    },
  ]

  const proofPoints = [
    'Official process guidance, organized into plain-language steps',
    'Financial planning before you win, not after the pressure starts',
    'Project selection logic tied to affordability and lifestyle',
  ]

  return (
    <div className="pb-8">
      <section className="grain-overlay px-4 pb-16 pt-6 md:pb-24 md:pt-10">
        <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-8 md:p-12">
            <span className="section-label">Built for Israeli housing lotteries</span>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] text-stone-900 md:text-7xl">
              A calmer way to plan a lottery win before it becomes a financial panic.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] md:text-xl">
              HomeEase turns the Mechir LeMishtaken journey into a guided planning flow: eligibility, affordability, project fit, and the steps that matter after winning.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/budget-calculator">
                <Button>Run the budget check</Button>
              </Link>
              <Link href="/eligibility">
                <Button className="border border-[var(--line)] bg-[rgba(255,251,245,0.7)] text-[var(--foreground)] shadow-none hover:-translate-y-0.5 hover:bg-white">
                  Review eligibility
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-stone-900">01</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Eligibility first</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-stone-900">02</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Budget before hope</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-stone-900">03</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Projects that fit</p>
              </div>
            </div>

          </div>
          {/* 3D Hero Section */}
          <div className="hidden lg:block">
            <Hero3D />
          </div>

          <div className="grid gap-4">
            <div className="soft-card rounded-[1.75rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">What the product fixes</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-[rgba(154,52,18,0.15)] bg-[rgba(154,52,18,0.06)] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--brand-deep)]">Without a plan</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">People enter lotteries based on excitement, then discover too late that the mortgage, location, or deadlines do not work.</p>
                </div>
                <div className="rounded-2xl border border-[rgba(44,93,72,0.16)] bg-[rgba(73,122,101,0.08)] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#315f4b]">With HomeEase</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">Users get a planning layer before they register, so every application starts from realistic numbers and clear next steps.</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[1.75rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Core promise</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground)]">
                {proofPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="shell rounded-[2rem] border border-[var(--line)] bg-[rgba(255,249,240,0.75)] p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Three-part flow</span>
              <h2 className="mt-5 max-w-2xl text-3xl text-stone-900 md:text-5xl">
                The platform should feel like a decision system, not a content dump.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--ink-soft)]">
              Each stage removes a different kind of uncertainty: legal eligibility, financial reality, and project choice.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <Link
                key={step.id}
                href={step.href}
                className="group rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,252,247,0.92)] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[rgba(154,52,18,0.3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">{step.id}</span>
                  <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                    Open
                  </span>
                </div>
                <h3 className="mt-8 text-2xl text-stone-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{step.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card rounded-[1.75rem] p-8">
            <span className="section-label">Why this matters</span>
            <h2 className="mt-5 text-3xl text-stone-900 md:text-4xl">
              Winning is not the hard part. Being ready is.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
              The product needs to reduce expensive mistakes early: applying to the wrong projects, overestimating mortgage capacity, or reaching the winner stage without prepared documents.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Current MVP tools</p>
              <h3 className="mt-4 text-2xl text-stone-900">Interactive calculators</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                The budget and mortgage screens already work, which means the product can feel useful even before the knowledge base is fully researched.
              </p>
            </div>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-soft)]">Next content layer</p>
              <h3 className="mt-4 text-2xl text-stone-900">Knowledge base pages</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                Eligibility, registration, and winner-roadmap pages are ready for real data once you collect the official requirements and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-6">
        <div className="shell rounded-[2rem] bg-[linear-gradient(135deg,#8d3a17_0%,#5a2615_100%)] px-8 py-10 text-white shadow-[0_28px_80px_rgba(90,38,21,0.24)] md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80">
                Start with the working tools
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl md:text-5xl">
                Test the calculators now, then feed the research into the guides.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col md:items-end">
              <Link href="/budget-calculator">
                <Button className="bg-white text-[var(--brand-deep)] shadow-none hover:bg-stone-100">
                  Open budget calculator
                </Button>
              </Link>
              <Link href="/registration">
                <Button className="border border-white/20 bg-white/10 text-white shadow-none hover:bg-white/15">
                  Review registration flow
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
