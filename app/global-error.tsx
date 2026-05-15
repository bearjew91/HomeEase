"use client";
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff8f0' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#b91c1c', marginBottom: '1rem' }}>Application Error</h1>
          <p style={{ color: '#444', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            {error?.message || 'An unexpected error occurred.'}
          </p>
          <button onClick={reset} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem', background: '#b91c1c', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
