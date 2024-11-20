/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3152BB',
          dark: '#2483C3',
        },
        accent: {
          DEFAULT: '#222222',
        }
      },
      animation: {
        'ripple': 'ripple 3s ease-in-out infinite',
        'ripple-delayed': 'ripple-delayed 3s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1.1)', opacity: 0.2 },
          '50%': { transform: 'scale(1.15)', opacity: 0.1 },
          '100%': { transform: 'scale(1.2)', opacity: 0 },
        },
        'ripple-delayed': {
          '0%': { transform: 'scale(1.1)', opacity: 0.3 },
          '50%': { transform: 'scale(1.2)', opacity: 0.2 },
          '100%': { transform: 'scale(1.3)', opacity: 0 },
        },
      }
    },
  },
  plugins: [],
}