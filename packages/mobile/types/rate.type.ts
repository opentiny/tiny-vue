import type { ExtractPropTypes } from 'vue'
import type { rateProps, $constants } from '@/rate/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  computedActiveClass,
  computedActiveColor,
  computedClassMap,
  computedClasses,
  computedColorMap,
  computedDecimalStyle,
  computedText,
  computedVoidClass,
  getIconStyle,
  getTextStyle,
  handelKey,
  resetCurrentValue,
  selectValue,
  setCurrentValue,
  showDecimalIcon
} from 'src/rate'

export interface IRateState {
  pointerAtLeftHalf: boolean
  colorMap: ReturnType<typeof computedColorMap>
  classMap: ReturnType<typeof computedClassMap>
  text: ReturnType<typeof computedText>
  activeClass: string
  activeColor: string
  classes: ReturnType<typeof computedClasses>
  decimalIconClass: string
  voidClass: ReturnType<typeof computedVoidClass>
  decimalStyle: ReturnType<typeof computedDecimalStyle>
  hoverIndex: number
  currentValue: number
  mouseTarget: null | HTMLElement
}

export type IRateProps = ExtractPropTypes<typeof rateProps>

export type IRateConstants = typeof $constants

export type IRateRenderlessParams = ISharedRenderlessFunctionParams<IRateConstants> & {
  api: IRateApi
  state: IRateState
  props: IRateProps
}

export interface IRateApi {
  state: IRateState
  computedText: typeof computedText
  computedClasses: typeof computedClasses
  computedClassMap: typeof computedClassMap
  computedColorMap: typeof computedColorMap
  computedVoidClass: typeof computedVoidClass
  computedDecimalStyle: typeof computedDecimalStyle
  getTextStyle: ReturnType<typeof getTextStyle>
  handelKey: ReturnType<typeof handelKey>
  computedActiveColor: ReturnType<typeof computedActiveColor>
  computedActiveClass: ReturnType<typeof computedActiveClass>
  showDecimalIcon: ReturnType<typeof showDecimalIcon>
  getIconStyle: ReturnType<typeof getIconStyle>
  selectValue: ReturnType<typeof selectValue>
  resetCurrentValue: ReturnType<typeof resetCurrentValue>
  setCurrentValue: ReturnType<typeof setCurrentValue>
}

export type IRateRenderlessParamUtils = ISharedRenderlessParamUtils<IRateConstants>
