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

import { formatNumber, roundFixed } from '@opentiny/vue-renderless/common/decimal'
import { getMiniDecimal, lessEquals, equalsDecimal } from '@opentiny/vue-renderless/common/bigInt'
import { isNumber, isNull } from '@opentiny/vue-renderless/common/type'
import { MOUSEDELTA } from '@opentiny/vue-renderless/common'
import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

export const initService = (service) => {
  const { utils = {} } = service || {}
  const noopFn = () => null

  return {
    getUnitPrecision: utils.getUnitPrecision || noopFn,
    getNumberFormat: utils.getNumberFormat || noopFn
  }
}

export const getDecimal = (props) => (value) => getMiniDecimal(value, props.plugin)

export const watchValue = ({ api, state }) => (value) => {
  if (value === state.currentValue) {
    return
  }

  api.setCurrentValue(value)
}

export const toPrecision = (state) => ({ num, precision }) => {
  if (precision === undefined) {
    precision = state.numPrecision
  }

  return parseFloat(Math.round(num * 10 ** precision) / 10 ** precision)
}

export const getPrecision = () => (value) => {
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

export const internalIncrease = ({ api, state }) => ({ val, step }) => {
  const decimal = api.getDecimal(val)

  if (decimal.isNaN() && val !== undefined) {
    return state.currentValue
  }

  return decimal.add(step).toString()
}

export const internalDecrease = ({ api, state }) => ({ val, step }) => {
  const decimal = api.getDecimal(val)

  if (decimal.isNaN() && val !== undefined) {
    return state.currentValue
  }

  return decimal.add(`-${step}`).toString()
}

export const increase = ({ api, props, state }) => () => {
  if (state.inputDisabled || state.maxDisabled) {
    return
  }

  const value = props.modelValue || 0
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

export const decrease = ({ api, props, state }) => () => {
  if (state.inputDisabled || state.minDisabled) {
    return
  }

  const value = props.modelValue || 0
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

export const handleBlur = ({ constants, dispatch, emit, props, state, api }) => (event) => {
  state.inputStatus = false
  api.setCurrentValue(event.target.value)
  emit('blur', event)

  if (props.validateEvent) {
    dispatch(constants.COMPONENT_NAME, constants.EVENT_NAME.blur, [state.displayValue])
  }
}

export const handleFocus = ({ emit, state, props, api }) => (event) => {
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

export const focus = (refs) => () => {
  refs.input.focus()
}

const getEmitValue = (args) => {
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

export const setCurrentValue = ({ api, constants, dispatch, emit, props, state }) => (newVal) => {
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
    emit('change', emitValue, oldVal)

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

export const handleInput = ({ state, api, emit, props }) => (event) => {
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
      value = state.lastInput
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
  api.setCurrentValue(value === '-' ? 0 : value)
}

export const handleInputChange = ({ api }) => (event) => {
  const value = event.target.value

  api.setCurrentValue(value === '-' ? 0 : value)
}

export const select = (refs) => () => refs.input.select()

export const mounted = ({ constants, parent, props, state }) => () => {
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

export const unmounted = ({ parent, state }) => () => {
  const innerInput = parent.$el.querySelector('input')

  off(innerInput, 'paste', state.onPase)
}

export const updated = ({ constants, parent, state }) => () => {
  const innerInput = parent.$el.querySelector('input')

  innerInput && innerInput.setAttribute(constants.VALUENOW, state.currentValue)
}

export const displayValue = ({ props, state }) => () => {
  const { currentValue, inputStatus, userInput } = state

  if (inputStatus) {
    return userInput
  }

  if (props.allowEmpty && currentValue === '') {
    return ''
  }

  return formatNumber(currentValue, state.format)
}

export const getNumPecision = ({ api, props }) => () => {
  const stepPrecision = api.getPrecision(props.step)

  if (props.precision !== undefined) {
    return props.precision
  } else {
    return Math.max(api.getPrecision(props.modelValue), stepPrecision)
  }
}

export const mouseEvent = ({ api, props, state }) => (event) => {
  if (props.mouseWheel && state.inputStatus) {
    let delta = 0

    if (event.wheelDelta) {
      delta = event.wheelDelta / MOUSEDELTA
    }

    delta > 0 ? api.increase() : api.decrease()

    return false
  }
}

export const getUnitPrecision = ({ service, props }) => {
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
