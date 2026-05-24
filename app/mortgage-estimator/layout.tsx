import type { Metadata } from 'next'
import { buildMetadata, buildBreadcrumb } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export function generateMetadata(): Metadata {
  return buildMetadata('mortgage')
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildBreadcrumb('mortgage')} />
      {children}
    </>
  )
}
