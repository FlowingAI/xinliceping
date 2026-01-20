/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-start': '#0f172a',
        'bg-end': '#1e293b',
        'accent-gold': '#fbbf24',
        'accent-purple': '#a855f7',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
