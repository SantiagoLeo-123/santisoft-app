/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          925: '#0d0d0d',
          900: '#121212',
          875: '#18181b',
          850: '#1f1f23',
          825: '#27272a',
          800: '#2a2a2e',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-in': 'slideIn 0.25s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'splash-fade-in': 'splashFadeIn 1.2s ease-out forwards',
        'splash-glow': 'splashGlow 2s ease-in-out forwards',
        'splash-fade-out': 'splashFadeOut 0.6s ease-in forwards',
        'splash-scale': 'splashScale 2s ease-out forwards',
        'home-fade-in': 'homeFadeIn 0.5s ease-out forwards',
        'home-card-in': 'homeCardIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-12px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(220, 38, 38, 0)' },
        },
        splashFadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        splashGlow: {
          '0%': { textShadow: '0 0 0px rgba(220, 38, 38, 0)' },
          '40%': { textShadow: '0 0 30px rgba(220, 38, 38, 0.7)' },
          '100%': { textShadow: '0 0 12px rgba(220, 38, 38, 0.3)' },
        },
        splashFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        splashScale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        homeFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        homeCardIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
