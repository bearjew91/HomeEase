import type { Config } from "tailwindcss"

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#7c2d12',
          DEFAULT: '#9a3412',
          soft: '#f3dfc2',
        },
        ink: {
          soft: '#6b5b4d',
          DEFAULT: '#1f2937',
        },
        surface: {
          DEFAULT: 'rgba(255, 251, 245, 0.78)',
          strong: '#fffaf2',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
