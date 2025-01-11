/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { PropType } from 'vue'
import type { ExtractPropTypes, ComputedRef, CSSProperties } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type {
  getMarkList,
  getActiveButtonValue,
  handleSlotInputFocus,
  handleSlotInputBlur,
  handleSlotInput,
  updateSlotValue
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  TIP_HEIGHT: 22,
  BUTTON_SIZE: 28,
  HALF_BAR_HEIGHT: 2,
  PC_TIP_CLS: 'tiny-slider__tips',
  PC_SLIDER_CLS: 'tiny-slider',
  PC_RANGE_CLS: 'tiny-slider__range',
  PC_BUTTON_CLS: 'tiny-slider__handle',
  PC_LABEL_CLS: 'tiny-slider__mark-label',
  PC_LEFT_SVG_CLS: 'tiny-slider-left-svg',
  PC_RIGHT_SVG_CLS: 'tiny-slider-right-svg',
  MOBILE_TIP_CLS: 'tiny-mobile-slider__tips',
  MOBILE_SLIDER_CLS: 'tiny-mobile-slider',
  MOBILE_RANGE_CLS: 'tiny-mobile-slider__range',
  MOBILE_BUTTON_CLS: 'tiny-mobile-slider__handle',
  MOBILE_LEFT_SVG_CLS: 'tiny-mobile-slider-left-svg',
  MOBILE_RIGHT_SVG_CLS: 'tiny-mobile-slider-right-svg',
  Mode: 'pc',
  tipCls(mode) {
    return mode === this.Mode ? this.PC_TIP_CLS : this.MOBILE_TIP_CLS
  },
  sliderCls(mode) {
    return mode === this.Mode ? this.PC_SLIDER_CLS : this.MOBILE_SLIDER_CLS
  },
  rangeCls(mode) {
    return mode === this.Mode ? this.PC_RANGE_CLS : this.MOBILE_RANGE_CLS
  },
  buttonCls(mode) {
    return mode === this.Mode ? this.PC_BUTTON_CLS : this.MOBILE_BUTTON_CLS
  },
  leftSvgCls(mode) {
    return mode === this.Mode ? this.PC_LEFT_SVG_CLS : this.MOBILE_LEFT_SVG_CLS
  },
  rightSvgCls(mode) {
    return mode === this.Mode ? this.PC_RIGHT_SVG_CLS : this.MOBILE_RIGHT_SVG_CLS
  },
  TIP_CLS(mode) {
    return mode === this.Mode ? this.PC_TIP_CLS : this.MOBILE_TIP_CLS
  },
  SLIDER_CLS(mode) {
    return mode === this.Mode ? this.PC_SLIDER_CLS : this.MOBILE_SLIDER_CLS
  },
  RANGE_CLS(mode) {
    return mode === this.Mode ? this.PC_RANGE_CLS : this.MOBILE_RANGE_CLS
  },
  BUTTON_CLS(mode) {
    return mode === this.Mode ? this.PC_BUTTON_CLS : this.MOBILE_BUTTON_CLS
  }
}

export const sliderProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  formatTooltip: Function,
  disabled: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '300px'
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  numPages: {
    type: Number,
    default: 1
  },
  range: {
    type: Boolean,
    default: false
  },
  showInput: {
    type: Boolean,
    default: false
  },
  showTip: {
    type: Boolean,
    default: true
  },
  step: {
    type: Number,
    default: 1
  },
  vertical: {
    type: Boolean,
    default: false
  },
  unit: {
    type: String,
    default: '%'
  },
  showSteps: {
    type: Boolean,
    default: false
  },
  showLabel: {
    type: Boolean,
    default: false
  },
  changeCompat: {
    type: Boolean,
    default: false
  },
  // tiny 新增属性
  marks: {
    type: Object as PropType<Record<number, string>>
  }
}

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
  inputOnChange: () => void
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
