import Link from 'next/link'

export default function Navigation() {
  const links = [
    { href: '/eligibility', label: 'Eligibility' },
    { href: '/registration', label: 'Registration' },
    { href: '/budget-calculator', label: 'Budget' },
    { href: '/mortgage-estimator', label: 'Mortgage' },
    { href: '/project-finder', label: 'Projects' },
    { href: '/winner-roadmap', label: 'Roadmap' },
  ]

  return (
    <nav className="sticky top-0 z-40 px-3 py-3 md:px-6">
      <div className="shell glass-panel rounded-full px-5 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3 text-[var(--foreground)] transition-opacity hover:opacity-80">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(154,52,18,0.08)] text-sm font-bold text-[var(--brand-deep)]">
              HE
            </span>
            <span>
              <span className="block text-lg font-semibold leading-none">HomeEase</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Housing Lottery Planning
              </span>
            </span>
          </Link>

          <ul className="flex flex-wrap items-center gap-2 text-sm text-[var(--ink-soft)]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full px-4 py-2.5 transition-colors hover:bg-[rgba(154,52,18,0.08)] hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
