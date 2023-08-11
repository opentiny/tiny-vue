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

export const computedWidth =
  ({ props }) =>
  () => {
    if (typeof props.width === 'number' || !Number.isNaN(Number(props.width))) {
      return props.width + 'px'
    }

    return props.width
  }

export const watchValue =
  ({ api, props, state }) =>
  (newValue) => {
    newValue = newValue.toString()

    if (state.type === 'textarea') {
      state.textAreaValue = api.jointText(newValue, props.separtor)
    } else {
      state.text && (state.text.value = newValue)
    }
  }

export const mounted =
  ({ props, refs, state }) =>
  () => {
    state.text = refs.text
    state.popup = refs.popup
    state.text.value = props.modelValue.toString()
  }

export const onFocus =
  ({ api, emit, props, nextTick, state }) =>
  () => {
    state.type = 'textarea'

    nextTick(() => {
      state.popup.focus()
      state.text.placeholder && (state.popup.placeholder = state.text.placeholder)
      state.textAreaValue = api.jointText(state.text.value, props.separtor)

      emit('popup', true)
    })
  }

export const onBlur =
  ({ api, emit, props, state }) =>
  () => {
    state.type = 'input'
    state.text.value = api.separteText(state.textAreaValue, props.separtor)

    emit('popup', false)
  }

export const onInput =
  ({ api, emit, props }) =>
  (event) => {
    const value = api.separteText(event.target.value, props.separtor)
    emit('update:modelValue', value)
  }

export const separteText = (str, separtor) => str.replace(/\n/g, separtor)

export const jointText = (str, separtor) => {
  if (separtor === ']') {
    separtor = '\\' + separtor
  }
  return str.replace(new RegExp(`[${separtor}]`, 'g'), '\n')
}
