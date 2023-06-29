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

import { KEY_CODE, IPTHRESHOLD } from '../common'

export const isIP6 = (str) => /^IPv6$/i.test(str)

export const isIP4 = (str) => /^IPv4$/i.test(str)

export const ipValidator = ({ props, api }) => (value) => {
  let result = true

  if (props.type) {
    /* istanbul ignore else */
    if (api.isIP6(props.type)) {
      result = typeof value === 'string'
    } else if (api.isIP4(props.type)) {
      result = /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/.test(value)
    }
  }

  return result
}

export const getCursorPosition = (el) => {
  let cursorPos = 0
  let selectRange = null
  /* istanbul ignore if */
  if (document.selection) {
    selectRange = document.selection.createRange()
    selectRange.moveStart('character', -el.value.length)
    cursorPos = selectRange.text.length
  }
  /* istanbul ignore if */
  if (el.selectionStart || el.selectionStart === '0') {
    cursorPos = el.selectionStart
  }

  return cursorPos
}

export const getValue = ({ api, props, state }) => () => {
  const valueArr = []
  let result = ''

  if (api.isIP6(props.type)) {
    result = state.address[0].value || ''
  } else {
    state.address.forEach((item) => {
      if (api.isIP4(props.type) && item.value) {
        item.value = item.value.replace(/\D/g, '')
      }

      item.value && valueArr.push(item.value)
    })

    result = state.address.filter((item) => item.value).length === 4 ? valueArr.join('.') : ''
  }

  return result
}

export const setValue = ({ api, props, state }) => (value) => {
  if (value) {
    /* istanbul ignore else */
    if (api.ipValidator(value)) {
      if (api.isIP6(props.type)) {
        state.address = [{ value }]
      } else {
        state.address = value.split('.').map((item) => ({ value: item }))
      }
    }
  } else {
    state.address = api.isIP6(props.type) ? [{ value: '' }] : [{ value: '' }, { value: '' }, { value: '' }, { value: '' }]
  }
}

const activeEvent = ({ emit, parent, state, index, event, type }) => {
  const target = event && event.target ? event.target : parent.$el.querySelectorAll('input')[index || 0]

  type === 'focus' && (state.active = true)

  if (!event) {
    if (target && !state.isSelected) {
      state.isSelected = true
      target[type]()

      setTimeout(() => {
        state.isSelected = false
      }, 10)

      emit(type, target.value, index)
    }
  } else {
    !state.isSelected && emit(type, target.value, index)
  }
}

export const focus = ({ emit, parent, state }) => ({ index, event }) => {
  activeEvent({ emit, parent, state, index, event, type: 'focus' })
}

export const select = ({ emit, parent, state }) => ({ index, event }) => {
  activeEvent({ emit, parent, state, index, event, type: 'select' })
}

export const inputEvent = ({ api, componentName, emit, eventName, props }) => ({ item, index }) => {
  const val = item.value.trim()
  let value = ''

  if (api.isIP4(props.type)) {
    if (!index && api.ipValidator(val)) {
      api.setValue(val)
    } else if (isNaN(val) || val < IPTHRESHOLD.Min || val > IPTHRESHOLD.Max) {
      item.value = ''
    }
  } else {
    item.value = val.replace(/[\u4E00-\u9FA5]/g, '')
  }

  value = api.getValue()

  emit('update:modelValue', value, index)
  api.dispatch(componentName, eventName, [value])
}

export const change = ({ api, emit }) => () => {
  const value = api.getValue()
  emit('change', value)
}

export const blur = ({ api, componentName, emit, eventName, props, state }) => ({ item, index }) => {
  state.active = false
  state.isDel = false

  if (api.isIP4(props.type)) {
    item.value = item.value.replace(/\D/g, '')
  }

  emit('blur', item.value, index)
  api.dispatch(componentName, eventName, [item.value])
}

export const keyup = ({ api, props }) => ({ item, index, event }) => {
  const { keyCode } = event
  const value = item.value.trim()
  const nextIndex = index + 1

  if (api.isIP4(props.type)) {
    if (isNaN(item.value)) {
      item.value = item.value.replace(/\D/g, '')
      return false
    }

    if ([KEY_CODE.Tab, KEY_CODE.Space, KEY_CODE.NumpadDecimal, KEY_CODE.NumpadComma].includes(keyCode) && value) {
      api.select({ index: nextIndex })
      return false
    }

    /* istanbul ignore next */
    if ((value === '0' || value > IPTHRESHOLD.NonNumeric || value.length === 3) && !isNaN(event.key)) {
      api.focus({ index: nextIndex })
      api.select({ index: nextIndex })

      return false
    }
  }
}

const checkError1 = ({ Tab, Space, NumpadDecimal, NumpadComma, keyCode, value }) =>
  [Tab, Space, NumpadDecimal, NumpadComma].includes(keyCode) && value

// NEXT 屏蔽选中时，替换值大于255
const checkError2 = (newValue) => newValue && (isNaN(newValue) || newValue > IPTHRESHOLD.Max)

// NEXT 当内容为"0"时，屏蔽输入
const checkError3 = ({ isfilterKeyCodes, isSelected, value }) => !isfilterKeyCodes && !isSelected && value === '0'

// NEXT 当内容加输入的数字大于255时，屏蔽输入
const checkError4 = ({ isfilterKeyCodes, isSelected, value, key }) => !isfilterKeyCodes && !isSelected && value + key > IPTHRESHOLD.Max

// NEXT 屏蔽非数字键
const checkError5 = ({ key, isfilterKeyCodes, value, ctrlKey, keyCode, KeyV }) => isNaN(key) && !isfilterKeyCodes && !(!value && ctrlKey && keyCode === KeyV)

const isError = ({ key, value, isSelected, isfilterKeyCodes, ctrlKey, keyCode, newValue }) => {
  const { Tab, Space, NumpadDecimal, NumpadComma, KeyV } = KEY_CODE

  return (
    checkError1({ Tab, Space, NumpadDecimal, NumpadComma, keyCode, value }) ||
    checkError2(newValue) ||
    checkError3({ isfilterKeyCodes, isSelected, value }) ||
    checkError4({ isfilterKeyCodes, isSelected, value, key }) ||
    checkError5({ key, isfilterKeyCodes, value, ctrlKey, keyCode, KeyV })
  )
}

export const keydown = ({ api, props, state }) => ({ item, index, event }) => {
  const { target, key, keyCode, ctrlKey } = event
  const value = item.value
  const selectionStart = target.selectionStart
  const selectionEnd = target.selectionEnd
  const isSelected = selectionStart !== selectionEnd
  const cursorPosition = api.getCursorPosition(target)
  const isfilterKeyCodes = state.filterKeyCodes.includes(keyCode)
  const nextIndex = index + 1
  const lastIndex = index - 1
  const newValue = isSelected && !isfilterKeyCodes && value.substr(0, selectionStart) + key + value.substr(selectionEnd)

  if (api.isIP4(props.type)) {
    state.isDel = keyCode === KEY_CODE.Backspace || keyCode === KEY_CODE.Delete

    if (keyCode === KEY_CODE.Backspace && cursorPosition === 0 && !selectionEnd) {
      api.focus({ index: lastIndex })

      return false
    }

    if (keyCode === KEY_CODE.ArrowLeft && cursorPosition === 0) {
      api.focus({ index: lastIndex })
      event.preventDefault()

      return false
    }

    // NEXT 光标在最后位置时，按右方向键跳到下一个输入框
    if (keyCode === KEY_CODE.ArrowRight && cursorPosition === value.length) {
      api.focus({ index: nextIndex })
      event.preventDefault()

      return false
    }

    if (
      isError({
        key,
        value,
        isSelected,
        isfilterKeyCodes,
        ctrlKey,
        keyCode,
        newValue
      })
    ) {
      event.preventDefault()
      return false
    }
  }
}

export const getHeightOfSize = (size, isLineHeight = 'height') => {
  const sizeMap = {
    medium: '42px',
    small: '36px',
    mini: '24px'
  }

  const sizePX = sizeMap[size]

  return sizePX ? isLineHeight + ':' + sizePX + ';' : ''
}
