
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
      strokeDashoffset: {
        0: '0',
        100: '100',
      },
      colors: {
        background: '#06a4ed',
        primary: "#06b6d4",
        secondary: '#F6FAFB',
        accent: '#F37F15',
        black: '#040F15'
      },
      maxWidth: {
        '1200': '1200px',
        '1000': '1000px',
        '600': '600px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in both',
				fadeDownIn: 'fadeDownIn 0.5s ease-in both',
				fadeLeftIn: 'fadeLeftIn 0.5s ease-in both',
        letterMove: 'letterMove 3s infinite alternate ease-in-out'
      },
      keyframes: {
        fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeDownIn: {
					'0%': { opacity: '0', transform: 'translateY(100px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeLeftIn: {
					'0%': { opacity: '0', transform: 'translateX(-100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
        letterMove: {
          from: { letterSpacing: '-2rem', filter: 'blur(20px)' },
          to: { letterSpacing: '1rem', filter: 'blur(0)' },
        }
      },
      zIndex: {
				'-1': '-1',
			},
      borderRadius: {
        default: '10px'
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

