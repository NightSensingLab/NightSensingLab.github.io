/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6ff',
          100: '#dde8ff',
          200: '#b8cfff',
          300: '#8eb5ff',
          400: '#5c92ff',
          500: '#306eff',
          600: '#194feb',
          700: '#153fbd',
          800: '#133596',
          900: '#112d79'
        }
      }
    }
  },
  plugins: []
}

