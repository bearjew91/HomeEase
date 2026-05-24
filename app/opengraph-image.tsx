import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HomeEase — Israeli Housing Lottery Planning'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 60%, #b85a2a 100%)',
          color: '#f3dfc2',
          display: 'flex',
          flexDirection: 'column',
          padding: '88px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* House mark */}
        <div
          style={{
            position: 'absolute',
            right: 88,
            top: 88,
            width: 96,
            height: 96,
            background: 'rgba(243, 223, 194, 0.16)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="64" height="64" viewBox="0 0 32 32">
            <path d="M16 6.5 5.5 15.2v10.3h6.7v-6.4h7.6v6.4h6.7V15.2z" fill="#f3dfc2" />
            <rect x="14.4" y="19.1" width="3.2" height="6.4" fill="#7c2d12" />
          </svg>
        </div>

        <div style={{ fontSize: 28, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.85, display: 'flex' }}>
          HomeEase
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            gap: 24,
          }}
        >
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 700, color: '#fff8ec', letterSpacing: '-0.02em', display: 'flex' }}>
            Plan your way through the Israeli housing lottery.
          </div>
          <div style={{ fontSize: 30, opacity: 0.9, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span>Eligibility</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Budget</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Mortgage</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Projects</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
