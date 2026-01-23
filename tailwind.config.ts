import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core void/dark colors
        void: {
          DEFAULT: '#030304',
          deep: '#050506',
          surface: '#0a0a0c',
        },
        // Flesh & organic tones from artwork
        flesh: {
          pale: '#e8d5c4',
          warm: '#c9a68a',
          shadow: '#8b6b5a',
        },
        // Cellular/organic colors
        cellular: {
          blue: '#4a7cb8',
          purple: '#6b4a8b',
          cyan: '#5aa8b8',
        },
        // Bruise/trauma tones
        bruise: {
          deep: '#2a1a3a',
          purple: '#4a2a5a',
          dark: '#1a0b2e',
        },
        // Burn/void accent
        burn: {
          orange: '#c45a30',
          red: '#8b2a1a',
        },
        // Legacy primary colors (kept for compatibility)
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          cyan: '#5aa8b8',
          purple: '#6b4a8b',
          blue: '#4a7cb8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-organic': 'linear-gradient(145deg, rgba(107, 74, 139, 0.1) 0%, rgba(74, 124, 184, 0.05) 100%)',
        'gradient-void': 'linear-gradient(180deg, #030304 0%, #050506 50%, #0a0a0c 100%)',
      },
      animation: {
        'organic-float': 'organic-float 8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'cellular-breathe': 'cellular-breathe 20s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'emerge': 'emerge 0.8s cubic-bezier(0.4, 0, 0.1, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dissolve': 'dissolve 0.6s cubic-bezier(0.4, 0, 0.1, 1) forwards',
      },
      keyframes: {
        'organic-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-0.5deg)' },
          '75%': { transform: 'translateY(-8px) rotate(0.3deg)' },
        },
        'cellular-breathe': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.6' },
          '33%': { transform: 'scale(1.1) translate(5%, -3%)', opacity: '0.8' },
          '66%': { transform: 'scale(0.95) translate(-3%, 5%)', opacity: '0.5' },
        },
        'emerge': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        },
        'dissolve': {
          '0%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
          '100%': { clipPath: 'inset(0 0 100% 0)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.1, 1)',
        'breathe': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
      boxShadow: {
        'void': '0 8px 32px rgba(0, 0, 0, 0.8)',
        'glow-purple': '0 0 40px rgba(107, 74, 139, 0.3)',
        'glow-cellular': '0 0 60px rgba(74, 124, 184, 0.2)',
        'inset-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
