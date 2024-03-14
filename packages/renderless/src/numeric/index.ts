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

import type {
  INumericProps,
  INumericState,
  INumericRenderlessParamUtils,
  INumericRenderlessParams,
  INumericGetEmitValueParams,
  INumericUnitPrecision
} from '@/types'
import type { BigIntDecimal } from '../common/bigInt'
import { formatNumber, roundFixed } from '../common/decimal'
import { getMiniDecimal, lessEquals, equalsDecimal } from '../common/bigInt'
import { isNumber, isNull } from '../common/type'
import { MOUSEDELTA } from '../common'
import { on, off } from '../common/deps/dom'

export const initService = (
  service: INumericRenderlessParamUtils['service']
): {
  getUnitPrecision: Function
  getNumberFormat: Function
} => {
  const { utils = {} } = service || {}
  const noopFn = () => null

  return {
    getUnitPrecision: utils.getUnitPrecision || noopFn,
    getNumberFormat: utils.getNumberFormat || noopFn
  }
}

export const getDecimal =
  (props: INumericProps) =>
  (value: number): BigIntDecimal =>
    getMiniDecimal(value, props.plugin)

export const watchValue =
  ({ api, props, state, nextTick }: Pick<INumericRenderlessParams, 'api' | 'state' | 'nextTick' | 'props'>) =>
  (value: number): void => {
    if (value === state.currentValue) {
      return
    }
    api.setCurrentValue(value, props.changeCompat)
    nextTick(() => {
      api.dispatchDisplayedValue()
    })
  }

export const toPrecision =
  (state: INumericState) =>
  ({ num, precision }: { num: number; precision: number }) => {
    if (precision === undefined) {
      precision = state.numPrecision
    }

    return parseFloat(Math.round(num * 10 ** precision) / 10 ** precision)
  }

export const getPrecision =
  () =>
  (value: number): number => {
    if (value === undefined) {
      return 0
    }

    const valueString = value.toString()
    const dotPosition = valueString.indexOf('.')
    let precision = 0

    if (dotPosition !== -1) {
      precision = valueString.length - dotPosition - 1
    }

    return precision
  }

export const internalIncrease =
  ({ api, state }: Pick<INumericRenderlessParams, 'api' | 'state'>) =>
  ({ val, step }: { val: number; step: number }): string => {
    const decimal = api.getDecimal(val)

    if (decimal.isNaN() && val !== undefined) {
      return state.currentValue
    }

    return decimal.add(step).toString()
  }

export const internalDecrease =
  ({ api, state }: Pick<INumericRenderlessParams, 'api' | 'state'>) =>
  ({ val, step }: { val: number; step: number }): string | number => {
    const decimal = api.getDecimal(val)

    if (decimal.isNaN() && val !== undefined) {
      return state.currentValue
    }

    return decimal.add(`-${step}`).toString()
  }

export const increase =
  ({ api, props, state }: Pick<INumericRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    if (state.inputDisabled || state.maxDisabled) {
      return
    }

    // 处理高精度情况
    const userInput = props.stringMode ? state.userInput : Number(state.userInput)

    const value = (props.mouseWheel ? state.displayValue : userInput) || 0

    if (value.toString().includes('e')) {
      return
    }

    let newVal = api.internalIncrease({ val: value, step: props.step })

    if (!props.circulate || !isFinite(props.max) || !isFinite(props.min)) {
      api.setCurrentValue(newVal)
      return
    }

    if (!lessEquals(newVal, props.max) || lessEquals(newVal, props.min)) {
      newVal = props.min
    }

    api.setCurrentValue(newVal)
  }

export const decrease =
  ({ api, props, state }: Pick<INumericRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    if (state.inputDisabled || state.minDisabled) {
      return
    }

    // 处理高精度情况
    const userInput = props.stringMode ? state.userInput : Number(state.userInput)

    const value = (props.mouseWheel ? state.displayValue : userInput) || 0

    if (value.toString().includes('e')) {
      return
    }

    let newVal = api.internalDecrease({ val: value, step: props.step })

    if (!props.circulate || !isFinite(props.max) || !isFinite(props.min)) {
      api.setCurrentValue(newVal)
      return
    }

    if (!lessEquals(props.min, newVal) || lessEquals(props.max, newVal)) {
      newVal = props.max
    }

    api.setCurrentValue(newVal)
  }

export const handleBlur =
  ({
    constants,
    dispatch,
    emit,
    props,
    state,
    api
  }: Pick<INumericRenderlessParams, 'constants' | 'dispatch' | 'emit' | 'props' | 'state' | 'api'>) =>
  (event: FocusEvent): void => {
    state.inputStatus = false
    api.setCurrentValue(event.target.value)
    emit('blur', event)

    if (props.validateEvent) {
      dispatch(constants.COMPONENT_NAME, constants.EVENT_NAME.blur, [state.displayValue])
    }
  }

export const handleFocus =
  ({ emit, state, props, api, vm }: Pick<INumericRenderlessParams, 'emit' | 'state' | 'props' | 'api' | 'vm'>) =>
  (event: FocusEvent): void => {
    if (props.disabled) {
      vm.$refs.input.blur()
    }

    state.inputStatus = true

    const currentValue = api.getDecimal(state.currentValue)

    if (!currentValue.isNaN() && !isNull(state.currentValue)) {
      const fractionLen = (currentValue.toString().split('.')[1] || '').length

      if (fractionLen < state.format.fraction && props.holdZero) {
        state.currentValue = formatNumber(state.currentValue, {
          fraction: state.format.fraction
        })
        state.userInput = state.currentValue
        state.lastInput = state.currentValue
      }
    }

    emit('focus', event)
  }

export const focus = (vm: INumericRenderlessParams['vm']) => (): void => {
  vm.$refs.input.focus()
}

const getEmitValue = (
  args: INumericGetEmitValueParams
): { newVal: number | string | undefined; emitValue: number | string | undefined } => {
  let { newVal, emitValue, allowEmpty, defaultVal, bigNew, oldVal } = args
  let { max, min, api, props, format, plugin, stringMode } = args
  if (!newVal && newVal !== 0) {
    emitValue = allowEmpty ? undefined : defaultVal
  } else if (bigNew.isNaN()) {
    emitValue = oldVal
  } else {
    if (isFinite(max) && lessEquals(max, newVal)) {
      newVal = max
    }

    if (isFinite(min) && lessEquals(newVal, min)) {
      newVal = min
    }

    emitValue = api.getDecimal(newVal).toString()

    if (props.modelTruncation) {
      emitValue = roundFixed(emitValue, format.fraction, format.rounding, plugin)
    }

    if (!props.holdZero) {
      emitValue = api.getDecimal(emitValue).toString()
    }

    if (!stringMode) {
      emitValue = Number(emitValue)
    }
  }

  return { newVal, emitValue }
}

export const setCurrentValue =
  ({
    api,
    constants,
    dispatch,
    emit,
    props,
    state
  }: Pick<INumericRenderlessParams, 'api' | 'constants' | 'dispatch' | 'emit' | 'props' | 'state'>) =>
  (newVal: number, emitChangeFlag: boolean = true): void => {
    const { max, min, allowEmpty, validateEvent, stringMode, plugin } = props
    const { format } = state
    const oldVal = state.currentValue
    const bigNew = api.getDecimal(newVal)
    const defaultVal = isFinite(min) ? min : 0

    let emitValue = bigNew.toString()

    if (equalsDecimal(state.currentValue, newVal)) {
      state.userInput = state.currentValue
      return
    }

    let args = { newVal, emitValue, allowEmpty, defaultVal, bigNew, oldVal }

    Object.assign(args, { max, min, api, props, format, plugin, stringMode })

    let ret = getEmitValue(args)

    newVal = ret.newVal
    emitValue = ret.emitValue

    state.userInput = emitValue
    state.lastInput = emitValue

    if (emitValue !== oldVal) {
      emit('update:modelValue', emitValue)
      if (emitChangeFlag) {
        emit('change', emitValue, oldVal)
      }

      state.currentValue = emitValue
      state.userInput = emitValue

      if (validateEvent && oldVal === '') {
        dispatch(constants.COMPONENT_NAME, constants.EVENT_NAME.blur, [state.currentValue])
      }

      if (validateEvent) {
        dispatch(constants.COMPONENT_NAME, constants.EVENT_NAME.change, [state.currentValue])
      }
    }
  }

export const handleInput =
  ({ state, api, emit, props }: Pick<INumericRenderlessParams, 'state' | 'api' | 'emit' | 'props'>) =>
  (event: InputEvent): void => {
    const { fraction } = state.format
    const emitError = () => {
      if (state.pasting) {
        emit('paste-error', event.target.value)
      }
    }
    let value = event.target.value.replace(/^-+/, '-')

    if (value !== '-' && api.getDecimal(value).isNaN()) {
      emitError()

      if (!(value === '' && props.allowEmpty)) {
        value = !value.includes('e') ? state.lastInput : value
      }
    } else {
      value = value
        .split('.')
        .map((a, i) => {
          if (i && a.length > fraction) {
            emitError()
          }

          return i && state.strictInput && typeof fraction === 'number' ? a.substr(0, fraction) : a
        })
        .join('.')
    }

    event.target.value = isNull(value) ? '' : value
    state.lastInput = value
    state.userInput = value
  }

export const handleInputChange =
  ({ api, state, props }: Pick<INumericRenderlessParams, 'api' | 'state' | 'props'>) =>
  (event: Event): void => {
    const value = event.target?.value === '-' ? 0 : event.target?.value
    if (props.stepStrictly) {
      const previousValue = Number((props.mouseWheel ? state.displayValue : props.modelValue) || 0)
      if (Math.abs(previousValue - value) % Number(props.step) === 0) return api.setCurrentValue(value)
      const step = Number(props.step)
      const difference = value - previousValue
      const sign = difference >= 0 ? 1 : -1
      return api.setCurrentValue(sign * Math.round(Math.abs(difference) / step) * step + previousValue)
    }
    api.setCurrentValue(value)
  }

export const select = (vm: INumericRenderlessParams['vm']) => () => vm.$refs.input.select()

export const mounted =
  ({ constants, parent, props, state }: Pick<INumericRenderlessParams, 'constants' | 'parent' | 'props' | 'state'>) =>
  (): void => {
    if (props.shape === 'filter') {
      state.controls = false
    }

    if (isNumber(state.currentValue) && state.currentValue < (props.min as number)) {
      state.currentValue = props.min as number
      state.lastInput = props.min as number
      state.userInput = props.min as number
    }
    if (isNumber(state.currentValue) && state.currentValue > (props.max as number)) {
      state.currentValue = props.max as number
      state.lastInput = props.max as number
      state.userInput = props.max as number
    }

    const innerInput = parent.$el.querySelector('input')

    innerInput.setAttribute(constants.KEY, constants.VALUE)
    innerInput.setAttribute(constants.MAX, props.max)
    innerInput.setAttribute(constants.MIN, props.min)
    innerInput.setAttribute(constants.VALUENOW, state.currentValue)
    innerInput.setAttribute(constants.DISABLED, state.inputDisabled)

    state.onPase = () => {
      state.pasting = true
      setTimeout(() => (state.pasting = false))
    }

    on(innerInput, 'paste', state.onPase)
  }

export const unmounted =
  ({ parent, state }: Pick<INumericRenderlessParams, 'parent' | 'state'>) =>
  (): void => {
    const innerInput = parent.$el.querySelector('input')

    off(innerInput, 'paste', state.onPase)
  }

export const updated =
  ({ constants, parent, state }: Pick<INumericRenderlessParams, 'constants' | 'parent' | 'state'>) =>
  (): void => {
    const innerInput = parent.$el.querySelector('input')

    innerInput && innerInput.setAttribute(constants.VALUENOW, state.currentValue)
  }

export const displayValue =
  ({ props, state, api }: Pick<INumericRenderlessParams, 'props' | 'state' | 'api'>) =>
  (): string | number => {
    const { currentValue, inputStatus, userInput } = state

    if (props.shape === 'filter' && props.filter) {
      api.filterValue()
    }

    if (inputStatus) {
      return userInput
    }

    if (props.allowEmpty && currentValue === '') {
      return ''
    }

    return formatNumber(currentValue, state.format)
  }

export const getNumPecision =
  ({ api, props }: Pick<INumericRenderlessParams, 'api' | 'props'>) =>
  (): number => {
    const stepPrecision = api.getPrecision(props.step)

    if (props.precision !== undefined) {
      return props.precision
    } else {
      return Math.max(api.getPrecision(props.modelValue), stepPrecision)
    }
  }

export const mouseEvent =
  ({ api, props, state }: Pick<INumericRenderlessParams, 'api' | 'props' | 'state'>) =>
  (event: MouseEvent): void | boolean => {
    if (props.mouseWheel && state.inputStatus) {
      let delta = 0

      if (event.wheelDelta) {
        delta = event.wheelDelta / MOUSEDELTA
      }

      delta > 0 ? api.increase() : api.decrease()

      return false
    }
  }

export const getUnitPrecision = ({
  service,
  props
}: Pick<INumericRenderlessParams, 'service' | 'props'>): INumericUnitPrecision => {
  let fraction, rounding
  const { format = {}, precision, unit } = props
  const defaultFmt = {
    groupSeparator: '',
    decimalSeparator: '.',
    zeroize: props.holdZero
  }

  const { getUnitPrecision, getNumberFormat } = service
  const serFra = getUnitPrecision(unit) || {}
  const serFmt = getNumberFormat() || {}

  fraction = isNumber(precision) ? precision : isNumber(format.fraction) ? format.fraction : serFra.fraction
  rounding = isNumber(format.rounding) ? format.rounding : serFra.rounding

  return { ...defaultFmt, fraction, rounding, ...serFmt, ...format }
}

export const dispatchDisplayedValue =
  ({ state, api, dispatch }: Pick<INumericRenderlessParams, 'state' | 'api' | 'dispatch'>) =>
  (): void => {
    if (state.isDisplayOnly) {
      dispatch('FormItem', 'displayed-value-changed', { type: 'numeric', val: api.getDisplayedValue() })
    }
  }

export const getDisplayedValue =
  ({ state, props }: Pick<INumericRenderlessParams, 'state' | 'props'>) =>
  (): string => {
    return state.displayValue || state.displayValue === 0 ? state.displayValue + ' ' + (props.unit || '') : '-'
  }

export const getDisplayOnlyText =
  ({ parent, state, props }: Pick<INumericRenderlessParams, 'parent' | 'state' | 'props'>) =>
  (): string | number => {
    const showEmptyValue = props.showEmptyValue || (parent.tinyForm || {}).showEmptyValue

    if (showEmptyValue) {
      return state.displayValue
    } else {
      if (state.displayValue || state.displayValue === 0) {
        return state.displayValue
      } else {
        return '-'
      }
    }
  }

export const filterValue =
  ({ state }: Pick<INumericRenderlessParams, 'state'>) =>
  (): number | string => {
    return (state.radioVal || '') + state.lastInput
  }

export const handleClear =
  ({ state, emit }: Pick<INumericRenderlessParams, 'state' | 'emit'>) =>
  () => {
    state.currentValue = ''
    state.userInput = ''
    state.lastInput = ''
    state.radioVal = ''

    emit('clear')
  }

export const handleChange =
  ({ state, emit }: Pick<INumericRenderlessParams, 'state' | 'emit'>) =>
  () => {
    emit('filter-change', state.radioVal)
  }
