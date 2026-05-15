import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 pb-8 pt-20">
      <div className="shell overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(51,37,29,0.98),rgba(29,22,18,0.98))] px-6 py-10 text-stone-200 shadow-[0_28px_80px_rgba(40,27,21,0.18)] md:px-10">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.18em] text-white">
                HE
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white">HomeEase</h3>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Israel housing planning</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-stone-300">
              Planning platform for Israeli housing lottery eligibility and financial preparation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/eligibility" className="text-stone-200 transition-colors hover:text-white">Eligibility Guide</Link></li>
              <li><Link href="/budget-calculator" className="text-stone-200 transition-colors hover:text-white">Budget Calculator</Link></li>
              <li><Link href="/mortgage-estimator" className="text-stone-200 transition-colors hover:text-white">Mortgage Estimator</Link></li>
              <li><Link href="/project-finder" className="text-stone-200 transition-colors hover:text-white">Project Finder</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/registration" className="text-stone-200 transition-colors hover:text-white">Registration Steps</Link></li>
              <li><Link href="/winner-roadmap" className="text-stone-200 transition-colors hover:text-white">After Winning</Link></li>
              <a href="#" className="block text-stone-200 transition-colors hover:text-white">FAQ</a>
              <a href="#" className="block text-stone-200 transition-colors hover:text-white">Contact</a>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">Legal</h4>
            <ul className="space-y-2 text-sm">
              <a href="#" className="block text-stone-200 transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="block text-stone-200 transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="block text-stone-200 transition-colors hover:text-white">Disclaimer</a>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-center text-sm leading-6 text-stone-300">
            <strong>Disclaimer:</strong> HomeEase provides general information only. It does not constitute legal, financial, or professional advice. Consult professionals before making decisions.
          </p>
          <p className="mt-4 text-center text-sm text-stone-400">
            © {currentYear} HomeEase. Not affiliated with Israeli government agencies.
          </p>
        </div>
      </div>
    </footer>
  )
}
