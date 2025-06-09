/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3366ff',
        'primary-dark': '#254eda',
        'secondary-text': '#666',
        'light-gray-bg': '#f9f9f9',
        'footer-bg': '#1e2433',
        'footer-text': '#b0b0b0',
        'brand-red': '#ff3a3a',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      height: {
        '125': '31.25rem', 
      },
      maxHeight: {
        '125': '31.25rem',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
    },
  },
  plugins: [],
}