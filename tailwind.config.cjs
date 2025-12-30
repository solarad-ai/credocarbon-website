/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 30px rgba(52, 211, 153, 0.6)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}