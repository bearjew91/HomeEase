"use client";
export default function Error() {
  return (
    <html>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff8f0' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#b91c1c', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#444', fontSize: '1.2rem' }}>
            Sorry, an unexpected error occurred. Please refresh the page or try again later.
          </p>
        </div>
      </body>
    </html>
  );
}
