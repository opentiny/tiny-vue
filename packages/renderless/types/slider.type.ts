import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { sliderProps, $constants } from '@/slider/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ISliderProps = ExtractPropTypes<typeof sliderProps>

export type ISliderConstants = typeof $constants

export interface ISliderState {
  tipStyle: object
  barStyle: object
  moveStyle: object
  points: object[]
  labels: object[]
  isInit: boolean
  isDrag: boolean
  sliderSize: number
  inputValue: [number, number]
  showTip: boolean
  activeValue: number
  activeIndex: number
  isDouble: boolean
  leftBtnValue: number
  sliderOffset: DOMRect | null
  rightBtnValue: number
  leftBtnStyle: string
  leftBtnPercent: number
  leftBtnShow: true
  rightBtnStyle: string
  rightBtnPercent: number
  rightBtnShow: boolean
  innerTrigger: boolean
  rangeDiff: ComputedRef<number>
  tipValue: ComputedRef<string>
  formDisabled: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
}

export interface ISliderApi {
  state: ISliderState
  hideTip: () => boolean
  formatTipValue: () => string
  setBarStyle: () => object
  changeActiveValue: (value: boolean) => void
  bindResize: () => void
  setButtonStyle: () => void
  calculateValue: (event: Event) => number
  getActiveButtonValue: () => number
  getActiveButtonIndex: (event: Event) => number
  setTipStyle: () => void
  customAfterAppearHook: () => void
  customBeforeAppearHook: () => void
  bindEvent: () => void
  autoSlider: () => void
  unBindEvent: () => void
  displayTip: () => void
  bindKeyDown: () => void
  bindMouseUp: () => void
  bindMouseMove: () => void
  bindMouseDown: () => void
  setActiveButtonValue: (currentValue: number) => void
  initSlider: (inputValue: number | [number, number]) => void
  watchModelValue: () => void
  watchActiveValue: () => void
  getPoints: () => void
  getLabels: () => void
  inputValueChange: () => void
}

export type ISliderRenderlessParams = ISharedRenderlessFunctionParams<ISliderConstants> & {
  state: ISliderState
  props: ISliderProps
  api: ISliderApi
  event: Event
  currentValue: number
}

export type ISliderRenderlessParamUtils = ISharedRenderlessParamUtils<ISliderConstants>
