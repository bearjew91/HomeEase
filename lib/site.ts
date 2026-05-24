// Resolves the canonical site URL for metadata, sitemap, OG, and JSON-LD.
// Order of precedence:
//   1. NEXT_PUBLIC_SITE_URL — set this in Vercel once a custom domain is live.
//   2. VERCEL_PROJECT_PRODUCTION_URL — the project's prod *.vercel.app URL.
//   3. VERCEL_URL — current deployment URL (previews, branch deploys).
//   4. http://localhost:3000 — local dev fallback.

function withProtocol(host: string): string {
  if (host.startsWith('http://') || host.startsWith('https://')) return host
  return `https://${host}`
}

export const SITE_URL: string = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return withProtocol(explicit).replace(/\/$/, '')
  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (prod) return withProtocol(prod)
  const preview = process.env.VERCEL_URL
  if (preview) return withProtocol(preview)
  return 'http://localhost:3000'
})()

export const SITE_NAME = 'HomeEase'

export function absoluteUrl(path: string): string {
  const trimmed = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${trimmed}`
}

export const ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'monthly' as const },
  { path: '/eligibility', priority: 0.9, changefreq: 'monthly' as const },
  { path: '/registration', priority: 0.85, changefreq: 'monthly' as const },
  { path: '/budget-calculator', priority: 0.95, changefreq: 'monthly' as const },
  { path: '/project-finder', priority: 0.8, changefreq: 'weekly' as const },
  { path: '/winner-roadmap', priority: 0.8, changefreq: 'monthly' as const },
] as const
