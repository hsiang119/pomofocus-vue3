
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
        background: '#06a4ed',
        primary: '#2dbdff',
        secondary: '#F6FAFB',
        accent: '#F37F15',
        black: '#040F15'
      },
      maxWidth: {
        '1200': '1200px'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        '.flex-center': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.nav-item': {
          'padding': '10px 20px',
          'background-color': theme('colors.primary'),
          'border': 'none',
          'border-radius': '5px',
          'color': theme('colors.sencondary'),
          'font-size': '16px',
          'box-shadow': '0 2px 5px rgba(0,0,0, 0.2)',
          'cursor:': 'pointer',
        }
      };
      addUtilities(newUtilities);
    }),
    
  ],
}

