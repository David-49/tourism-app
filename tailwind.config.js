const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        sans: ['azo-sans-web', 'sans-serif'],
      },
      colors: {
        blue: {
          light: '#daf2fc',
          default: '#00ABEB',
        },
        redRestaurant: '#d61822',
        purpleEntertainment: '#7c4086',
        greenHiking: '#85ac1d',
        orangeLodging: '#f29420',
        bgFooter: '#F9DB02',
      },
      borderRadius: {
        100: '100%',
        corner: '50px',
      },
      zIndex: {
        '-20': '-20',
        '-10': '-10',
        '-5': '-5',
        '-3': '-3',
      },
      backgroundImage: (theme) => ({
        texture: "url('/src/assets/images/bg-texture.svg')",
      }),
      width: {
        giga: '3000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
