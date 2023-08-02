export interface breakPoint {
  'xs': number
  'sm': number
  'md': number
  'lg': number
  'xl': number
  '2xl': number
}
export type TextDirection = 'rtl' | 'lrt'
export interface Tag {
  enable: boolean
  name: string
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
