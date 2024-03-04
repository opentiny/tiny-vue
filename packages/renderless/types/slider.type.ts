import type { ExtractPropTypes, ComputedRef, CSSProperties } from 'vue'
import type { sliderProps, $constants } from '@/slider/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  getMarkList,
  getActiveButtonValue,
  handleSlotInputFocus,
  handleSlotInputBlur,
  handleSlotInput,
  updateSlotValue
} from '../src/slider'

export type ISliderProps = ExtractPropTypes<typeof sliderProps>

export type ISliderConstants = typeof $constants

export interface ISliderState {
  tipStyle: object
  barStyle: CSSProperties
  moveStyle: object
  points: object[]
  labels: object[]
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
  mouseOuterBtn: boolean
  rightBtnStyle: string
  rightBtnPercent: number
  rightBtnShow: boolean
  innerTrigger: boolean
  rangeDiff: ComputedRef<number>
  tipValue: ComputedRef<string>
  formDisabled: ComputedRef<boolean>
  disabled: boolean
  /** 使用这个值作为插槽中输入的值，而不是直接用activeValue，来实现在输入时不会被max min属性计算而改变 */
  slotValue: number | number[] | string
  /** 是否正在输入 */
  isSlotTyping: boolean
  markList: ReturnType<ISliderApi['getMarkList']>
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
  getActiveButtonValue: ReturnType<typeof getActiveButtonValue>
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
  initSlider: (inputValue: number | number[]) => void
  watchModelValue: () => void
  watchActiveValue: () => void
  getPoints: () => void
  getLabels: () => void
  inputValueChange: () => void
  handleSlotInputFocus: ReturnType<typeof handleSlotInputFocus>
  handleSlotInputBlur: ReturnType<typeof handleSlotInputBlur>
  handleSlotInput: ReturnType<typeof handleSlotInput>
  getMarkList: ReturnType<typeof getMarkList>
  updateSlotValue: ReturnType<typeof updateSlotValue>
}

export type ISliderRenderlessParams = ISharedRenderlessFunctionParams<ISliderConstants> & {
  state: ISliderState
  props: ISliderProps
  api: ISliderApi
  event: Event
  currentValue: number
}

export type ISliderRenderlessParamUtils = ISharedRenderlessParamUtils<ISliderConstants>
