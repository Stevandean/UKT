/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black : '#080D18',
        darkBlue : '#141A28',
        navy : '#1B2537',
        purple : '#6464F6',
        green : '#42C6A3',
        yellow : '#E49F2F',
        red : '#CA3030',
        gray : '#585884'
      },
      fontFamily : {
        'lato' : ['Lato', 'sans-serif'],
        'bebas' : ['Bebas Neue', 'sans-serif'],
        'oswald' : ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}