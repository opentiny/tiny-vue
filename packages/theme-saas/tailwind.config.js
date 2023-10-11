const lineClamp = require('./plugins/line-clamp.js')

const plugin = require('tailwindcss/plugin')

const designToken = require('./theme/theme.json')

const { loadColor, loadLayout } = require('./plugins/loadTheme.js')

const customColors = loadColor(designToken)

const layoutToken = loadLayout(designToken)

module.exports = {
  content: ['./src/**/*.{css,less}'],
  theme: {
    colors: customColors,
    boxShadow: layoutToken.boxShadow,
    spacing: layoutToken.spacing,
    lineHeight: layoutToken.lineHeight,
    fontSize: layoutToken.fontSize,
    borderRadius: layoutToken.borderRadius,
    borderWidth: layoutToken.borderWidth,
    opacity: layoutToken.opacity,
    extend: {
      keyframes: {
        leftMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'loading-dash': {
          '0%': {
            'stroke-dasharray': '1, 200',
            'stroke-dashoffset': '0'
          },
          '50%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-40px'
          },
          '100%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-120px'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    lineClamp,
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      addUtilities({
        '.scrollbar-size-0::-webkit-scrollbar': {
          'width': 0,
          'height': 0
        },
        '.tiny-loading-path': {
          'animation': 'loading-dash 1.5s ease-in-out infinite',
          'stroke-dasharray': '90, 150',
          'stroke-dashoffset': 0,
          'stroke-linecap': 'round'
        }
      })
      matchUtilities(
        {
          'gap': (value) => ({
            'grid-row-gap': value,
            'grid-column-gap': value
          })
        },
        { values: theme('gap') }
      )
      matchUtilities(
        {
          'gap-y': (value) => ({
            'grid-row-gap': value
          })
        },
        { values: theme('gap') }
      )
      matchUtilities(
        {
          'gap-x': (value) => ({
            'grid-column-gap': value
          })
        },
        { values: theme('gap') }
      )
      matchUtilities(
        {
          'shadow': (value) => ({
            'box-shadow': value
          })
        },
        { values: theme('boxShadow') }
      )
    })
  ],
  corePlugins: {
    preflight: true
  }
}
