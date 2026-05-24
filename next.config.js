/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mortgage-estimator',
        destination: '/budget-calculator',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
