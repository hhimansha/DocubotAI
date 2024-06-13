/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#29B6F6',
        'surface': '#121212',
        'light-base': '#262626',
        'grey-light': '#edeff1',
      },
      textColor: {
        'primary': '#29B6F6',
      },
      borderColor: {
        'light-base': '#262626',
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
