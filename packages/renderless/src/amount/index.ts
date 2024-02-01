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

import { on, off } from '../common/deps/dom'
import { formatNumber } from '../common/decimal'
import { getMiniDecimal, equalsDecimal } from '../common/bigInt'
import { isNumber } from '../common/type'

export const initService = (service) => {
  const { utils = {} } = service || {}
  const noopFn = () => null

  return {
    getCurrencyPrecision: utils.getCurrencyPrecision || noopFn,
    getNumberFormat: utils.getNumberFormat || noopFn
  }
}

export const getDecimal = (props) => (value) => getMiniDecimal(value, props.plugin)

export const closePopper = (state) => () => {
  state.visible = false
}

export const popInput =
  ({ editorState, props, state, api }) =>
  (value) => {
    value = api.onInputPreprocess(value)

    const { fraction, groupSeparator } = state.format

    value = value.replace(/^-+/, '-')

    const groups = value.split(groupSeparator).map((val) => val.trim())

    value = groups.join('')

    if (value !== '-' && api.getDecimal(value).isNaN()) {
      value = editorState.lastInput
    } else {
      value = value
        .split('.')
        .map((a, i) => (i && props.strictInput && typeof fraction === 'number' ? a.substr(0, fraction) : a))
        .join('.')
    }

    editorState.lastInput = value
    editorState.amount = value
  }

export const toggleVisible =
  ({ api, props, state, editorState }) =>
  () => {
    if (props.disabled || !props.popUp) {
      return
    }

    state.lock = true
    state.visible = !state.visible

    if (state.visible) {
      const { date, currency } = state

      Object.assign(editorState, {
        amount: state.amount,
        date,
        currency
      })

      api.addOutSideEvent(state.visible)
    }
  }

export const innerFormat =
  ({ state, props }) =>
  (value) => {
    const { fraction, zeroize, rounding } = state.format
    const { modelTruncation } = props
    const fractionLen = (value.split('.')[1] || '').length

    if (value === '-') {
      return 0
    }

    if (!modelTruncation && fractionLen > fraction) {
      return value
    }

    return formatNumber(value, {
      fraction,
      zeroize,
      groupSeparator: '',
      decimalSeparator: '.',
      rounding
    })
  }

export const save =
  ({ api, state, editorState }) =>
  () => {
    const { amount, date, currency } = editorState

    Object.assign(state, { amount, date, currency })

    api.closePopper()

    let num = api.innerFormat(String(state.amount))

    state.amount = isNaN(num) ? 0 : num

    if (!equalsDecimal(state.lastInput, state.amount) || state.lastCurrency !== currency || state.lastDate !== date) {
      api.emitChange()
    }

    state.lastInput = state.amount
    state.lastCurrency = currency
    state.lastDate = date

    api.initText()
  }

export const reset =
  ({ state, editorState }) =>
  () => {
    const { amount, date, currency } = state
    Object.assign(editorState, { amount, date, currency })
  }

export const emitChange =
  ({ emit, state }) =>
  () => {
    const { date, currency } = state
    const emitAmount = Number(state.amount)

    emit('update:modelValue', emitAmount)
    emit('update:currency', currency)
    emit('update:date', date)
    emit('change', { amount: emitAmount, date, currency })
  }

export const inputFocus =
  ({ state, props }) =>
  () => {
    let amount = String(state.amount)

    state.isFocus = true
    state.lock = false

    const { fraction } = state.format
    const fractionLen = (amount.split('.')[1] || '').length

    if (fractionLen < fraction && props.holdZero) {
      amount = formatNumber(amount, { fraction })
    }

    state.amountText = amount
  }

export const inputBlur =
  ({ api, state, props }) =>
  () => {
    if (state.amountText !== '') {
      let amount = api.innerFormat(String(state.amountText))

      if (isNaN(amount)) {
        state.amount = ''
      }

      state.amount = props.holdZero ? amount : api.getDecimal(amount).toString()
    }

    state.isFocus = false
    state.amountText = formatNumber(state.amount, state.format)

    if (!equalsDecimal(state.lastInput, state.amount)) {
      api.emitChange()
    }

    state.lastInput = state.amount
  }

export const handelClick =
  ({ api, refs }) =>
  (e) => {
    const contains = refs.root.contains(e.target)

    if (!contains) {
      api.closePopper()
    }
  }

export const addOutSideEvent = (api) => (visible) => {
  if (visible) {
    on(document, 'click', api.handelClick)
  } else {
    off(document, 'click', api.handelClick)
  }
}

export const initText =
  ({ state }) =>
  () => {
    let amount = String(state.amount)

    state.amountText = amount ? (state.isFocus ? amount : formatNumber(state.amount, state.format)) : ''
  }

export const onInputPreprocess = (props) => (value) => {
  const inputElem = event.target

  if (value) {
    const i = value.lastIndexOf('-')

    if ((i === 0 && !props.negative) || i > 0) {
      const tmpArr = value.split('')

      tmpArr.splice(i, 1)

      inputElem.value = value = tmpArr.join('')
      inputElem.selectionStart = inputElem.selectionEnd = i
    }
  }

  return value
}

export const onInput =
  ({ state, props, api }) =>
  (value) => {
    value = api.onInputPreprocess(value)

    const { fraction, groupSeparator } = state.format

    value = event.target.value.replace(/^-+/, '-')

    const groups = value.split(groupSeparator).map((val) => val.trim())

    value = groups.join('')

    if (value !== '-' && api.getDecimal(value).isNaN()) {
      value = state.lastInput
    } else {
      value = value
        .split('.')
        .map((a, i) => (i && props.strictInput && typeof fraction === 'number' ? a.substr(0, fraction) : a))
        .join('.')
    }

    event.target.value = value
    state.amount = value
    state.amountText = value
  }

export const getPrecision = ({ service, props, currency }) => {
  const { format = {}, rounding: r, digits, type } = props
  let fraction
  let rounding = format.rounding

  const { getCurrencyPrecision, getNumberFormat } = service
  const serFra = getCurrencyPrecision(type, currency) || {}
  const serFmt = getNumberFormat() || {}

  const defaultFmt = {
    groupSeparator: ',',
    groupSize: 3,
    decimalSeparator: '.',
    zeroize: props.holdZero
  }

  fraction = isNumber(format.fraction) ? format.fraction : isNumber(serFra.fraction) ? serFra.fraction : digits

  if (r === false) {
    rounding = 0
  } else {
    rounding = isNumber(rounding) ? rounding : isNumber(serFra.rounding) ? serFra.rounding : 5
  }

  return { ...defaultFmt, fraction, rounding, ...serFmt, ...format }
}

export const getAmountText =
  ({ state, props }) =>
  () =>
    props.hideCurrency
      ? typeof state.amountText === 'string'
        ? state.amountText.replace(state.currency, '')
        : state.amountText
      : state.amountText

export const watchModelValue =
  ({ api, state }) =>
  () => {
    let value = api.initAmount()

    state.amount = value
    state.lastInput = value

    api.initText()
  }

export const watchCurrency =
  ({ api, state, editorState }) =>
  (value) => {
    state.currency = value
    editorState.currency = value
    state.lastCurrency = value

    api.initText()
  }

export const initAmount = (props) => () => {
  let value = props.modelValue

  value = value === null || isNaN(Number(value)) ? '' : value

  if (!props.negative && value && Number(value) < 0) {
    value -= 0
    value = Math.abs(value)
  }

  return value
}
