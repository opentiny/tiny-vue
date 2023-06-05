export interface breakPoint {
  'xs': number
  'sm': number
  'md': number
  'lg': number
  'xl': number
  '2xl': number
}

export interface ConfigProviderProps {
  breakPoints: breakPoint
  direction: 'rtl' | 'ltr'
  globalPrefix?: string
  tag: {
    enable?: boolean
    name?: string
  }
}
