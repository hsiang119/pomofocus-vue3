
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

/*eslint-env node*/
module.exports = {
  jit: true,
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74b9ff',
        secondary: '',
        accent: '',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.flex-center': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}

