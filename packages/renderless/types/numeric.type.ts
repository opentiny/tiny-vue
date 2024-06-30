import type { ExtractPropTypes } from 'vue'
import type { BigIntDecimal } from '../src/common/bigInt'
import type { numericProps, $constants } from '@/numeric/src'
import type {
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
  initService,
  getDisplayOnlyText,
  filterValue,
  handleClear,
  handleChange
} from '../src/numeric'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type INumericProps = ExtractPropTypes<typeof numericProps>

export type INumericConstants = typeof $constants

export interface INumericState {
  radioVal: string
  currentValue: number | string
  userInput: number | string
  lastInput: number | string
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
  getDisplayOnlyText: ReturnType<typeof getDisplayOnlyText>
  filterValue: ReturnType<typeof filterValue>
  handleClear: ReturnType<typeof handleClear>
  handleChange: ReturnType<typeof handleChange>
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
  extends Pick<INumericRenderlessParams, 'constants' | 'reactive' | 'computed' | 'props' | 'api' | 'parent'> {
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
