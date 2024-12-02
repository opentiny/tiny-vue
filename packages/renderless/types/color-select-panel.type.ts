export interface IColorSelectPanelRef<T> {
  value: T
}
export interface IColorSelectPanelProps {
  visible: boolean
  alpha: boolean
  history: string[]
  predefine: string[]
  format: ('hsl' | 'hsv' | 'hex' | 'rgb')[]
  modelValue: string
  enableHistory: boolean
  enablePredefineColor: boolean
}

export interface IColorSelectPanelAlphProps<C> {
  color: C
}

export interface IColorSelectPanelSVProps<C> {
  color: C
}

export interface IColorSelectPanelHueProps<C> {
  color: C
}

export interface IColorSelectPanelAlphaPanel<C> {
  color: C
}
