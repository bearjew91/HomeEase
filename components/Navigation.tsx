'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/LocaleProvider'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navigation() {
  const t = useT()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/eligibility',        label: t<string>('nav.eligibility') },
    { href: '/registration',       label: t<string>('nav.registration') },
    { href: '/budget-calculator',  label: t<string>('nav.budget') },
    { href: '/project-finder',     label: t<string>('nav.projects') },
    { href: '/winner-roadmap',     label: t<string>('nav.roadmap') },
  ]

  return (
    <div className="nav-shell">
      <nav className="relative z-10 px-3 py-3 md:px-6">
        <div className="shell glass-panel rounded-2xl md:rounded-full px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-[var(--foreground)] transition-opacity hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(154,52,18,0.08)] text-sm font-bold text-[var(--brand-deep)]">
                HE
              </span>
              <span>
                <span className="block text-lg font-semibold leading-none">{t('common.brand')}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                  {t('common.tagline')}
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-1 text-sm text-[var(--ink-soft)]">
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
              <LocaleSwitcher />
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <LocaleSwitcher />
              <button
                onClick={() => setOpen(v => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[rgba(154,52,18,0.08)]"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {open ? (
                    <>
                      <line x1="6" y1="6" x2="18" y2="18" />
                      <line x1="6" y1="18" x2="18" y2="6" />
                    </>
                  ) : (
                    <>
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="17" x2="20" y2="17" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="mt-4 border-t border-[var(--line)] pt-4 lg:hidden">
              <ul className="flex flex-col gap-1 text-sm text-[var(--ink-soft)]">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-[rgba(154,52,18,0.08)] hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
