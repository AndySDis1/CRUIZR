cookout
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cruizr: {
          bg: '#050507',
          text: '#FAFAFA',
          professional: '#6BA4FF',
          social: '#27E1C1',
          dating: '#FF6B9A',
          sexual: '#E33E3E',
          neutral: '#94A3B8',
        },
        realm: {
          professional: '#6BA4FF',
          social: '#27E1C1',
          dating: '#FF6B9A',
          sexual: '#E33E3E',
          neutral: '#94A3B8',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};