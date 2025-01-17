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
import type { ExtractPropTypes } from 'vue'
import type { BigIntDecimal } from '@mobile-root/utils/bigInt'
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
  dispatchDisplayedValue,
  getDisplayedValue,
  initService,
  getDisplayOnlyText,
  filterValue,
  handleClear,
  handleChange
} from './renderless'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  MAX: 'aria-valuemax',
  MIN: 'aria-valuemin',
  VALUENOW: 'aria-valuenow',
  DISABLED: 'aria-disabled',
  KEY: 'role',
  VALUE: 'spinbutton',
  EVENT_NAME: {
    blur: 'form.blur',
    change: 'form.change'
  },
  COMPONENT_NAME: 'FormItem',
  FILTER_OPTION: [
    'ui.numeric.equalTo',
    'ui.numeric.notEqualTo',
    'ui.numeric.moreThan',
    'ui.numeric.moreThanOrEqualTo',
    'ui.numeric.lessThan',
    'ui.numeric.lessThanOrEqualTo',
    'ui.numeric.empty',
    'ui.numeric.nonEmpty'
  ]
}

export const numericProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  allowEmpty: {
    type: Boolean,
    default: false
  },
  circulate: Boolean,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: ''
  },
  disabled: Boolean,
  format: [Object, String],
  hideUnit: {
    type: Boolean,
    default: false
  },
  holdZero: {
    type: Boolean,
    default: true
  },
  label: String,
  max: {
    type: [Number, String],
    default: Infinity
  },
  min: {
    type: [Number, String],
    default: -Infinity
  },
  modelTruncation: {
    type: Boolean,
    default: true
  },
  modelValue: [Number, String, undefined],
  mouseWheel: Boolean,
  name: String,
  placeholder: String,
  plugin: Function,
  precision: {
    type: Number,
    validator(val) {
      return val >= 0 && val === parseInt(val, 10)
    }
  },
  size: String,
  step: {
    type: [Number, String],
    default: 1
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  strictInput: {
    type: Boolean,
    default: false
  },
  stringMode: Boolean,
  tabindex: {
    type: String,
    default: '1'
  },
  theme: {
    type: String,
    default: ''
  },
  unit: String,
  unitCenter: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showLeft: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  tip: String,
  shape: String,
  clearable: {
    type: Boolean,
    default: true
  },
  filter: {
    type: Boolean,
    default: true
  },
  blank: {
    type: Boolean,
    default: true
  },
  changeCompat: {
    type: Boolean,
    default: false
  }
}

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
  dispatchDisplayedValue: ReturnType<typeof dispatchDisplayedValue>
  getDisplayedValue: ReturnType<typeof getDisplayedValue>
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
