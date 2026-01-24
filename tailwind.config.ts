import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core monochromatic
        black: '#0a0a0a',
        gray: {
          900: '#141414',
          800: '#1a1a1a',
          700: '#242424',
          600: '#333333',
          500: '#555555',
          400: '#777777',
          300: '#999999',
          200: '#bbbbbb',
          100: '#dddddd',
        },
        white: '#f5f5f5',
        // Flesh tones
        flesh: {
          pale: '#d4c4b5',
          warm: '#b8a090',
          shadow: '#8b7b6b',
        },
        // Accent (rarely used)
        blood: '#6b2020',
        wound: '#4a1818',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        headline: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        drift: 'drift 30s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(2%, -1%) scale(1.02)', opacity: '0.4' },
          '50%': { transform: 'translate(-1%, 2%) scale(0.98)', opacity: '0.35' },
          '75%': { transform: 'translate(1%, -2%) scale(1.01)', opacity: '0.25' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
