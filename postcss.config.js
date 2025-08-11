// postcss.config.js
export default { // <-- THIS IS THE FIX
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};