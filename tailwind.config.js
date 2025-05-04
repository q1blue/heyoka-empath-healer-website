/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3fa',
          100: '#e9e4f4',
          200: '#d2c9e9',
          300: '#b9abde',
          400: '#9d8ac7',
          500: '#8c70b8',
          600: '#7c5ba4',
          700: '#674a88',
          800: '#56406f',
          900: '#48395c',
        },
        secondary: {
          50: '#f2f9f9',
          100: '#e6f2f2',
          200: '#c5e5e3',
          300: '#a4d7d4',
          400: '#7db9b6',
          500: '#57a09c',
          600: '#3d827f',
          700: '#376d69',
          800: '#305857',
          900: '#2b4847',
        },
        accent: {
          50: '#fef8f3',
          100: '#fdf0e6',
          200: '#fbe0cc',
          300: '#f7c9a6',
          400: '#f39f76',
          500: '#ec7f4b',
          600: '#e2622a',
          700: '#bc4b1f',
          800: '#963f1e',
          900: '#7a361d',
        },
        neutral: {
          50: '#fbfaf8',
          100: '#f6f2ef',
          200: '#e8d5c4',
          300: '#dec0a7',
          400: '#c6aa8a',
          500: '#b39672',
          600: '#9c7e5c',
          700: '#81684c',
          800: '#6c5741',
          900: '#5b4a38',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};