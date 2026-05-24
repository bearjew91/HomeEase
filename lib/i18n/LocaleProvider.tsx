'use client'

import { createContext, useContext, useCallback } from 'react'
import { messages, type Locale, DEFAULT_LOCALE } from './messages'

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
}

const LocaleCtx = createContext<Ctx>({ locale: DEFAULT_LOCALE, setLocale: () => {} })

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const setLocale = useCallback((next: Locale) => {
    document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`
    // Full reload so the <html lang dir> + server-side dictionary update together.
    window.location.reload()
  }, [])

  return <LocaleCtx.Provider value={{ locale, setLocale }}>{children}</LocaleCtx.Provider>
}

export function useLocale() {
  return useContext(LocaleCtx)
}

// Walk a dot-path through the messages tree.
function lookup(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

function interpolate(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s
  return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`))
}

// Returns a translator function bound to the current locale, with English fallback.
export function useT() {
  const { locale } = useLocale()

  return useCallback(
    function t<T = string>(path: string, vars?: Record<string, string | number>): T {
      const primary = lookup(messages[locale], path)
      const fallback = lookup(messages[DEFAULT_LOCALE], path)
      const raw = (primary ?? fallback) as T

      if (typeof raw === 'string') return interpolate(raw, vars) as T
      return raw
    },
    [locale],
  )
}
