const primary = '#151F30';
const secondary = '#151F30';
const accent = '#2F80ED';
const grey = '#75797E';

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor: {
        primary,
        secondary,
        accent,
      },
      fontFamily: {
        primary: ['Syne', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      textColor: {
        accent,
        primary,
        grey,
      },
      borderColor: {
        accent,
        primary,
      },
      container: {
        paddingRight: '0.9375rem',
        paddingLeft: '0.9375rem',
      },
    },
  },
  plugins: [],
};
