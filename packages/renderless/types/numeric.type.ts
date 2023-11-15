import type { ExtractPropTypes } from 'vue'
import { BigIntDecimal } from '../src/common/bigInt'
import { numericProps, $constants } from '@/numeric/src'
import {
  focus,
  select,
  getPrecision,
  toPrecision,
  updated,
  mounted,
  unmounted,
  getDecimal,
  handleFocus,
  decrease,
  increase,
  handleInput,
  getNumPecision,
  displayValue,
  internalDecrease,
  internalIncrease,
  handleInputChange,
  mouseEvent,
  handleBlur,
  watchValue,
  setCurrentValue,
  dispatchDisplayedValue,
  getDisplayedValue,
  initService,
  getDisplayOnlyText
} from '../src/numeric'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type INumericProps = ExtractPropTypes<typeof numericProps>

export type INumericConstants = typeof $constants

export interface INumericState {
  currentValue: number
  userInput: number
  lastInput: number
  inputStatus: boolean
  decimal: BigIntDecimal
  strictInput: boolean
  inputSize: INumericSize
  formSize: string
  formDisabled: boolean
  inputDisabled: boolean
  displayValue: number | string
  numPrecision: number
  minDisabled: boolean
  maxDisabled: boolean
  controlsAtRight: boolean
  format: INumericUnitPrecision
  isDisplayOnly: boolean
}

export interface INumericApi {
  focus: ReturnType<typeof focus>
  select: ReturnType<typeof select>
  getPrecision: ReturnType<typeof getPrecision>
  toPrecision: ReturnType<typeof toPrecision>
  updated: ReturnType<typeof updated>
  mounted: ReturnType<typeof mounted>
  unmounted: ReturnType<typeof unmounted>
  getDecimal: ReturnType<typeof getDecimal>
  handleFocus: ReturnType<typeof handleFocus>
  decrease: ReturnType<typeof decrease>
  increase: ReturnType<typeof increase>
  handleInput: ReturnType<typeof handleInput>
  getNumPecision: ReturnType<typeof getNumPecision>
  displayValue: ReturnType<typeof displayValue>
  internalDecrease: ReturnType<typeof internalDecrease>
  internalIncrease: ReturnType<typeof internalIncrease>
  handleInputChange: ReturnType<typeof handleInputChange>
  mouseEvent: ReturnType<typeof mouseEvent>
  handleBlur: ReturnType<typeof handleBlur>
  watchValue: ReturnType<typeof watchValue>
  setCurrentValue: ReturnType<typeof setCurrentValue>
  dispatchDisplayedValue: ReturnType<typeof dispatchDisplayedValue>
  getDisplayedValue: ReturnType<typeof getDisplayedValue>
  getDisplayOnlyText: ReturnType<typeof getDisplayOnlyText>
}

export type INumericRenderlessParams = ISharedRenderlessFunctionParams<INumericConstants> & {
  api: INumericApi
  state: INumericState
  props: INumericProps
}

export type INumericRenderlessParamUtils = ISharedRenderlessParamUtils<INumericConstants>

export type INumericSize = 'medium' | 'small' | 'mini'

export interface INumericUnitPrecision {
  decimalSeparator: string
  groupSeparator: string
  fraction?: string
  rounding?: string
  zeroize: boolean
}

export interface INumericInitStateParams
  extends Pick<INumericRenderlessParams, 'reactive' | 'computed' | 'props' | 'api' | 'parent'> {
  $service: ReturnType<typeof initService>
}

export interface INumericGetEmitValueParams {
  newVal: number
  emitValue: number | string | undefined
  allowEmpty: boolean
  defaultVal: number
  bigNew: BigIntDecimal
  oldVal: number
  max: number
  min: number
  api: INumericApi
  props: INumericProps
  format: INumericState['format']
  plugin: INumericProps['plugin']
  stringMode: boolean
}
