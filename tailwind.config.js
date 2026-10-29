/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EF',
        gold: {
          DEFAULT: '#C6A15B',
          light: '#E1C98D',
          dark: '#A37E36',
          pale: '#F4ECD8',
        },
        emerald: {
          DEFAULT: '#123D32',
          dark: '#0B2720',
          light: '#1B5244',
          accent: '#17473A',
        },
        charcoal: {
          DEFAULT: '#252525',
          soft: '#333333',
          deep: '#1A1A1A',
        },
        cream: {
          DEFAULT: '#EFE7D8',
          soft: '#F4EFE6',
        },
        warmgray: {
          DEFAULT: '#77736C',
          light: '#9E9A92',
          dark: '#54514B',
        },
        beige: {
          DEFAULT: '#E5DED1',
          light: '#EEE9DE',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widestluxury: '0.2em',
        ultrawide: '0.28em',
      },
      boxShadow: {
        luxury: '0 10px 35px -5px rgba(18, 61, 50, 0.08)',
        luxurydark: '0 15px 40px -10px rgba(0, 0, 0, 0.45)',
        goldglow: '0 0 25px rgba(198, 161, 91, 0.25)',
      },
    },
  },
  plugins: [],
};

