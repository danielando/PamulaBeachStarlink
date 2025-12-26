/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f1',
          100: '#ffe6df',
          200: '#fdd0c2',
          500: '#f46938', // Main Discovery Parks Orange
          600: '#e04f1f',
          700: '#bd3a15',
          900: '#7c2610',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
