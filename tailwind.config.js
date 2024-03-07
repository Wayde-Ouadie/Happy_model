/** @type {import('tailwindcss').Config} */

const colors = require('./lib/identity/colors.js');
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1EB1F7'
        }
      }
    ],
  },
  theme: {
    comtainer: {
      center: true
    },
    fontSize: {
      "xxs": ".6875rem",
      "xs": ".8rem",
      "sm": ".89rem",
      "tiny": "0.94rem",
      "base": "1rem",
      "lg": "1.09rem",
      "2lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.45rem",
      "5xl": "2.75rem",
      "6xl": "3.4rem",
      "7xl": "4rem",
      "8xl": "5rem",
    },
    colors,
    screens: {
      'xxs': '390px',
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1600px',
      '4xl': '2100px'
    },
    extend: {
      fontFamily: {
        'sans': ['Exo', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(1fr, auto))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      }
    }
  },
  variants: {
    extend: {},
  },
}
