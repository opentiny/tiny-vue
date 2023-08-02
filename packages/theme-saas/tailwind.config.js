const lineClamp = require('./plugins/line-clamp.js')

const plugin = require('tailwindcss/plugin')

const prefix = '--tiny-'

const defaultTheme = require('tailwindcss/defaultTheme')

const tokens = {}

const setToken = (name, token) => {
  if (token?.constructor !== Object) return

  let obj = {}
  for (let key in token) {
    let string = key.includes('.5') ? parseInt(key) + '_5' : key
    obj[key] = `var(${prefix + name}-${string}, ${token[key]})`
  }

  return obj
}

const hexToRgb = (hex) => {
  const reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/
  if (!reg.test(hex)) return

  hex = hex.replace(/#/g, '').toLowerCase()
  let len = hex.length
  if (len === 3) {
    let t = ''
    for (let i = 0; i < len; i++) {
      t += hex.slice(i, i + 1).concat(hex.slice(i, i + 1))
    }
    hex = t
  }

  const rgbs = []
  for (let i = 0; i < 6; i += 2) {
    let s = hex.slice(i, i + 2)
    rgbs.push(parseInt(s, 16))
  }

  return rgbs.join(',')
}

const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: {
    0: '#FFFFFF',
    50: '#F5F6F8',
    100: '#E8EBEF',
    200: '#B5BBC1',
    300: '#8D959E',
    400: '#78828D',
    500: '#5C6976',
    600: '#46515D',
    700: '#333D48',
    800: '#232C36',
    900: '#161E26',
    1000: '#000000'
  },
  brand: {
    50: '#D0E7FF',
    100: '#B9DBFF',
    200: '#8BC3FF',
    300: '#5CACFF',
    400: '#2E94FF',
    500: '#007DFF',
    600: '#0072E8',
    700: '#0067D1',
    800: '#005BBA',
    900: '#0050A3'
  },
  red: {
    50: '#F9F2F2',
    100: '#F3DADA',
    200: '#F0BDBD',
    300: '#F09596',
    400: '#F46465',
    500: '#EB171F',
    600: '#B2161B',
    700: '#841316',
    800: '#570C0D',
    900: '#350506'
  },
  rose: {
    50: '#F9F2F3',
    100: '#F3DADA',
    200: '#EFBCC5',
    300: '#EF93A7',
    400: '#F46087',
    500: '#E61866',
    600: '#AD184D',
    700: '#811439',
    800: '#540D24',
    900: '#330614'
  },
  pink: {
    50: '#F9F1F7',
    100: '#F2D8EC',
    200: '#EFB9E3',
    300: '#EE8DDB',
    400: '#F14FD8',
    500: '#D41DBC',
    600: '#9F1C8D',
    700: '#751868',
    800: '#4C0F43',
    900: '#2E0728'
  },
  green: {
    5: '#EEF6EB',
    100: '#BCEDAC',
    200: '#97DA7E',
    300: '#71C14C',
    400: '#4FA700',
    500: '#478625',
    600: '#376422',
    700: '#2A4A1C',
    800: '#1A2F12',
    900: '#0F1B0A'
  },
  mint: {
    50: '#ECF6F1',
    100: '#AFEDCE',
    200: '#82DBB1',
    300: '#50C291',
    400: '#00A874',
    500: '#278661',
    600: '#236549',
    700: '#1D4A37',
    800: '#1B2B21',
    900: '#0B1B13'
  },
  cyan: {
    50: '#EFF4F6',
    100: '#C6E5EC',
    200: '#87D5E5',
    300: '#54BCCE',
    400: '#00A2B5',
    500: '#2A8290',
    600: '#26616B',
    700: '#1F484F',
    800: '#152E32',
    900: '#0C1A1C'
  },
  blue: {
    50: '#F4F3F9',
    100: '#DBDFF2',
    200: '#BFC8EE',
    300: '#99ABED',
    400: '#6D8FF0',
    500: '#2070F3',
    600: '#1F55B5',
    700: '#1B3F86',
    800: '#112857',
    900: '#081635'
  },
  indigo: {
    50: '#F3F3F9',
    100: '#DFDEF2',
    200: '#C9C5EE',
    300: '#ADA6ED',
    400: '#9185F0',
    500: '#745EF7',
    600: '#5531EB',
    700: '#3F21B5',
    800: '#281675',
    900: '#160B48'
  },
  purple: {
    50: '#F6F2F9',
    100: '#E7DBF2',
    200: '#D8C0EE',
    300: '#C99CED',
    400: '#BD72F0',
    500: '#B62BF7',
    600: '#8A21BC',
    700: '#651B8B',
    800: '#41125A',
    900: '#260937'
  },
  orange: {
    50: '#FDF1EF',
    100: '#FCD8CE',
    200: '#FABAAA',
    300: '#FC916E',
    400: '#F36900',
    500: '#C45613',
    600: '#944114',
    700: '#6E3011',
    800: '#471E0B',
    900: '#2B1005'
  },
  yellow: {
    50: '#FDF2E5',
    100: '#FCDBAA',
    200: '#FDC000',
    300: '#DAA61B',
    400: '#B98C1D',
    500: '#96711B',
    600: '#715516',
    700: '#543F0F',
    800: '#362807',
    900: '#201603'
  }
}

const customColors = {
  brand: {
    DEFAULT: `var(${prefix}color-brand, ${colors.brand['700']})`,
    focus: `var(${prefix}color-brand-focus, ${colors.brand['700']})`,
    active: `var(${prefix}color-brand-active, ${colors.brand['800']})`,
    disabled: `var(${prefix}color-brand-disabled, rgba(${hexToRgb(colors.brand['700'])},0.3))`,
    hover: {
      DEFAULT: `var(${prefix}color-brand-hover, ${colors.brand['600']})`,
      subtle: `var(${prefix}color-brand-hover-subtle, rgba(${hexToRgb(colors.brand['700'])},0.1))`,
      subtler: `var(${prefix}color-brand-hover-subtler, rgba(${hexToRgb(colors.brand['700'])},0.05))`
    }
  },
  bg: {
    1: `var(${prefix}color-bg-1, ${colors.white})`,
    2: `var(${prefix}color-bg-2, ${colors.gray['50']})`,
    3: `var(${prefix}color-bg-3, rgba(${hexToRgb(colors.gray['900'])},0.1))`,
    4: `var(${prefix}color-bg-4, rgba(${hexToRgb(colors.gray['900'])},0.05))`,
    5: `var(${prefix}color-bg-5, rgba(${hexToRgb(colors.gray['50'])},0.75))`,
    6: `var(${prefix}color-bg-6, rgba(${hexToRgb(colors.gray['50'])},0.5))`,
    7: `var(${prefix}color-bg-7, rgba(${hexToRgb(colors.gray['1000'])},0.5))`
  },
  text: {
    primary: `var(${prefix}color-text-primary, ${colors.gray['900']})`,
    secondary: `var(${prefix}color-text-secondary, ${colors.gray['500']})`,
    placeholder: `var(${prefix}color-text-placeholder, ${colors.gray['300']})`,
    disabled: `var(${prefix}color-text-disabled, rgba(${hexToRgb(colors.gray['900'])},0.3))`,
    inverse: `var(${prefix}color-text-inverse, ${colors.white})`
  },
  link: {
    DEFAULT: `var(${prefix}color-link, ${colors.brand['700']})`,
    hover: `var(${prefix}color-link-hover, ${colors.brand['600']})`,
    focus: `var(${prefix}color-link-focus, ${colors.brand['700']})`,
    active: `var(${prefix}color-link-active, ${colors.brand['800']})`
  },
  icon: {
    primary: `var(${prefix}color-icon-primary, ${colors.gray['700']})`,
    secondary: `var(${prefix}color-icon-secondary, ${colors.gray['500']})`,
    placeholder: `var(${prefix}color-icon-placeholder, ${colors.gray['300']})`,
    disabled: `var(${prefix}color-icon-disabled, rgba(${hexToRgb(colors.gray['700'])},0.3))`,
    inverse: `var(${prefix}color-icon-inverse, ${colors.white})`,
    hover: `var(${prefix}color-icon-hover, ${colors.brand['600']})`,
    focus: `var(${prefix}color-icon-focus, ${colors.brand['700']})`,
    active: `var(${prefix}color-icon-active, ${colors.brand['800']})`,
    tertiary: `var(${prefix}color-icon-tertiary, ${colors.gray['300']})`
  },
  border: {
    DEFAULT: `var(${prefix}color-border, rgba(${hexToRgb(colors.gray['900'])},0.2))`,
    hover: `var(${prefix}color-border-hover, ${colors.gray['900']})`,
    focus: `var(${prefix}color-border-focus, ${colors.brand['700']})`,
    disabled: `var(${prefix}color-border-disabled, rgba(${hexToRgb(colors.gray['900'])},0.1))`,
    separator: `var(${prefix}color-border-separator, ${colors.gray['100']})`
  },
  error: {
    DEFAULT: `var(${prefix}color-error, ${colors.red['500']})`,
    hover: `var(${prefix}color-error-hover, ${colors.red['400']})`,
    active: `var(${prefix}color-error-active, ${colors.red['600']})`,
    disabled: `var(${prefix}color-error-disabled, rgba(${hexToRgb(colors.red['500'])},0.3))`,
    subtle: `var(${prefix}color-error-subtle, rgba(${hexToRgb(colors.red['500'])},0.5))`,
    subtler: `var(${prefix}color-error-subtler, rgba(${hexToRgb(colors.red['500'])},0.1))`
  },
  warning: {
    DEFAULT: `var(${prefix}color-warning, ${colors.yellow['200']})`,
    hover: `var(${prefix}color-warning-hover, ${colors.yellow['300']})`,
    active: `var(${prefix}color-warning-active, ${colors.yellow['400']})`,
    disabled: `var(${prefix}color-warning-disabled, rgba(${hexToRgb(colors.yellow['200'])},0.3))`,
    subtle: `var(${prefix}color-warning-subtle, rgba(${hexToRgb(colors.yellow['300'])},0.5))`,
    subtler: `var(${prefix}color-warning-subtler, rgba(${hexToRgb(colors.yellow['300'])},0.1))`,
    bold: `var(${prefix}color-warning-bold, ${colors.yellow['300']})`
  },
  alert: {
    DEFAULT: `var(${prefix}color-alert, ${colors.orange['400']})`,
    hover: `var(${prefix}color-alert-hover, ${colors.orange['300']})`,
    active: `var(${prefix}color-alert-active, ${colors.orange['500']})`,
    disabled: `var(${prefix}color-alert-disabled, rgba(${hexToRgb(colors.orange['400'])},0.3))`,
    subtle: `var(${prefix}color-alert-subtle, rgba(${hexToRgb(colors.orange['400'])},0.5))`,
    subtler: `var(${prefix}color-alert-subtler, rgba(${hexToRgb(colors.orange['400'])},0.1))`
  },
  success: {
    DEFAULT: `var(${prefix}color-success, ${colors.mint['400']})`,
    hover: `var(${prefix}color-success-hover, ${colors.mint['300']})`,
    active: `var(${prefix}color-success-active, ${colors.mint['500']})`,
    disabled: `var(${prefix}color-success-disabled, rgba(${hexToRgb(colors.mint['400'])},0.3))`,
    subtle: `var(${prefix}color-success-subtle, rgba(${hexToRgb(colors.mint['400'])},0.5))`,
    subtler: `var(${prefix}color-success-subtler, rgba(${hexToRgb(colors.mint['400'])},0.1))`
  },
  info: {
    secondary: {
      DEFAULT: `var(${prefix}color-info-secondary, ${colors.brand['300']})`,
      hover: `var(${prefix}color-info-secondary-hover, ${colors.brand['200']})`,
      active: `var(${prefix}color-info-secondary-active, ${colors.brand['400']})`,
      disabled: `var(${prefix}color-info-secondary-disabled, rgba(${hexToRgb(colors.brand['300'])},0.3))`,
      subtle: `var(${prefix}color-info-secondary-subtle, rgba(${hexToRgb(colors.brand['300'])},0.1))`
    },
    primary: {
      DEFAULT: `var(${prefix}color-info-primary, ${colors.blue['500']})`,
      subtle: `var(${prefix}color-info-primary-subtle, rgba(${hexToRgb(colors.blue['500'])},0.5))`,
      subtler: `var(${prefix}color-info-primary-subtler, rgba(${hexToRgb(colors.blue['500'])},0.1))`
    }
  },
  none: {
    DEFAULT: `var(${prefix}color-none, ${colors.gray['300']})`,
    hover: `var(${prefix}color-none-hover, ${colors.gray['200']})`,
    active: `var(${prefix}color-none-active, ${colors.gray['400']})`,
    disabled: `var(${prefix}color-none-disabled, rgba(${hexToRgb(colors.gray['300'])},0.3))`,
    subtle: `var(${prefix}color-none-subtle, rgba(${hexToRgb(colors.gray['300'])},0.1))`
  },
  fill: {
    primary: `var(${prefix}color-fill-primary, ${colors.gray['900']})`,
    secondary: `var(${prefix}color-fill-secondary, ${colors.gray['400']})`
  },
  chart: {
    5: `var(${prefix}color-chart-5, ${colors.cyan['400']})`,
    11: `var(${prefix}color-chart-11, ${colors.indigo['500']})`,
    17: `var(${prefix}color-chart-17, ${colors.pink['300']})`,
    '5-subtle': `var(${prefix}color-chart-5-subtle, rgba(${hexToRgb(colors.cyan['400'])},0.5))`,
    '5-subtler': `var(${prefix}color-chart-5-subtler, rgba(${hexToRgb(colors.cyan['400'])},0.1))`,
    '11-subtle': `var(${prefix}color-chart-11-subtle, rgba(${hexToRgb(colors.indigo['500'])},0.5))`,
    '11-subtler': `var(${prefix}color-chart-11-subtler, rgba(${hexToRgb(colors.indigo['500'])},0.1))`,
    '17-subtle': `var(${prefix}color-chart-17-subtle, rgba(${hexToRgb(colors.pink['300'])},0.5))`,
    '17-subtler': `var(${prefix}color-chart-17-subtler, rgba(${hexToRgb(colors.pink['300'])},0.1))`
  }
}

module.exports = {
  content: ['./src/**/*.{css,less}'],
  theme: {
    colors: () => {
      colors.color = customColors
      return colors
    },
    boxShadow: {
      sm: `var(${prefix}boxShadow-sm, 0 1px 6px 0 rgba(0, 0, 0, 0.08))`,
      DEFAULT: `var(${prefix}boxShadow, 0 4px 12px 0 rgba(0, 0, 0, 0.08))`,
      md: `var(${prefix}boxShadow-md, 0 4px 12px 0 rgba(0, 0, 0, 0.16))`,
      lg: `var(${prefix}boxShadow-lg, 0 8px 24px 0 rgba(0, 0, 0, 0.16))`,
      xl: `var(${prefix}boxShadow-xl, 0 16px 48px 0 rgba(0, 0, 0, 0.16))`,
      'r-sm': `var(${prefix}boxShadow-r-sm, 1px 0 6px 0 rgba(0, 0, 0, 0.08))`,
      't-sm': `var(${prefix}boxShadow-t-sm, 0 -1px 6px 0 rgba(0, 0, 0, 0.08))`,
      l: `var(${prefix}boxShadow-l, -2px 0 12px 0 rgba(0, 0, 0, 0.08))`
    },
    spacing: () => {
      tokens.spacing = setToken('spacing', defaultTheme.spacing)
      tokens.spacing['4.5'] = `var(${prefix}spacing-4_5, 1.125rem)`
      tokens.spacing['18'] = `var(${prefix}spacing-18, 4.5rem)`
      tokens.spacing['54'] = `var(${prefix}spacing-54, 13.5rem)`
      tokens.spacing['112'] = `var(${prefix}spacing-112, 28rem)`
      tokens.spacing['144'] = `var(${prefix}spacing-144, 36rem)`
      return tokens.spacing
    },
    lineHeight: () => {
      tokens.lineHeight = setToken('line-height', defaultTheme.lineHeight)
      tokens.lineHeight['5.5'] = `var(${prefix}line-height-5_5, 1.375rem)`
      tokens.lineHeight['6.5'] = `var(${prefix}line-height-6_5, 1.625rem)`
      return tokens.lineHeight
    },
    fontSize: {
      '2xs': `var(${prefix}fontSize-2xs, 0.625rem)`,
      xs: `var(${prefix}fontSize-xs, 0.75rem)`,
      sm: `var(${prefix}fontSize-sm, 0.875rem)`,
      base: `var(${prefix}fontSize-base, 1rem)`,
      lg: `var(${prefix}fontSize-lg, 1.125rem)`,
      xl: `var(${prefix}fontSize-, 1.25rem)`,
      '2xl': `var(${prefix}fontSize-2xs, 1.5rem)`,
      '3xl': `var(${prefix}fontSize-3xl, 1.875rem)`,
      '4xl': `var(${prefix}fontSize-4xl, 2.25rem)`,
      '5xl': `var(${prefix}fontSize-5xl, 3rem)`,
      '6xl': `var(${prefix}fontSize-6xl, 3.75rem)`
    },
    borderRadius: () => {
      tokens.borderRadius = setToken('borderRadius', defaultTheme.borderRadius)
      return tokens.borderRadius
    },
    borderWidth: () => {
      tokens.borderWidth = setToken('borderWidth', defaultTheme.borderWidth)
      tokens.borderWidth['0.5'] = `var(${prefix}borderWidth-0_5, 0.5px)`
      return tokens.borderWidth
    },
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
    plugin(function ({ addUtilities }) {
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
    })
  ],
  corePlugins: {
    preflight: true
  }
}
