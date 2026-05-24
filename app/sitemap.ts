import type { MetadataRoute } from 'next'
import { ROUTES, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(r => ({
    url: `${SITE_URL}${r.path === '/' ? '' : r.path}`,
    lastModified,
    changeFrequency: r.changefreq,
    priority: r.priority,
  }))
}
