
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
      backgroundColor: {
        'custom-gray': '#1c1c1c' 
      },
      backgroundSize: {
        '0-3': '0 3px',
        'transparent': 'transparent',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)',
        'under-background': 'linear-gradient(45deg, #081b29, "#0ef")',
      },
      contrast: {
        20: '20',
      },
      strokeDashoffset: {
        0: '0',
        100: '100',
      },
      colors: {
        background: '#06a4ed',
        primary: "#06b6d4",
        secondary: '#F6FAFB',
        accent: '#F37F15',
        black: '#040F15',
        light: '#45f3ff'
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
        letterMove: 'letterMove 2.5s infinite alternate ease-in-out',
        animate: 'animate 6s linear infinite'
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
          'from': { letterSpacing: '-0.5rem', filter: 'blur(20px)' },
          'to': { letterSpacing: '0.5rem', filter: 'blur(0)' },
        },
        animate: {
          '0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
        }
      },
      borderRadius: {
        default: '10px'
      },
      boxShadow: {
        'burger' : '0px 2px 5px rgba(255,101,47,.2)',
        'activeButton': '0 0 5px #45f3ff',
        'neon': `inset 0 0 .5em #0ef, 0 0 .5em #0ef`,
        'custom-cyan': '0 0 25px #0ef',
      },
      transitionDelay: {
        '400': '400ms',
        '550': '550ms',
        '600': '600ms',
        '650': '650ms',
        '1100': '1100ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '1900': '1900ms',
        '2000': '2000ms',
        '2100': '2100ms',
        '2200': '2200ms',
        '2300': '2300ms',
        '2400': '2400ms',
        '2500': '2500ms',
        '2600': '2600ms',
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, addVariant }) => {
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
        },
        'underline-trigger': {
          'background': 'linear-gradient(90deg, #ff3c41, #fc0, #0ebeff)',
          'backgroundSize': '0 3px',
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': '0 100%',
          'cursor': 'pointer',
          'transiiton': '1s all'
        },
        'underline-trigger-hover': {
          'backgroundSize': '100% 3px'
        } 
      };
      addUtilities(newUtilities);
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
    
  ],
}

