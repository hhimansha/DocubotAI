/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#29B6F6',
        'grey': 'rgb(40, 40, 40)',
        'grey-mid': '#343432',
        'grey-light': '#edeff1',
      },
      textColor: {
        'primary': '#29B6F6',
      },
      screens: {
        'xs': {'max': '412px'}
      },
      width: {
        '242': '242px',
        'mid' : '500px',
        'fit': '1280px',
        'wide': '1800px',
      },
    },
   
  },
  plugins: [],
}
