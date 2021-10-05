module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#F1F1F2',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
