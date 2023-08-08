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
import { isNull } from '../common/type'

export const addToStore = ({ state, props }) => () => {
  if (Array.isArray(state.model) && !state.model.includes(props.label)) {
    state.model.push(props.label)
  } else {
    state.model = props.trueLabel || true
  }
}

export const removeFromStore = ({ state, props }) => () => {
  if (Array.isArray(state.model)) {
    const index = state.model.indexOf(props.label)
    index !== -1 && state.model.splice(index, 1)
  } else {
    state.model = props.falseLabel !== undefined && props.falseLabel
  }
}

export const handleChange = ({ state, props, emit, nextTick, dispatch, constants }) => (event) => {
  if (state.isLimitExceeded) {
    return
  }

  let moduleValue
  const { trueLabel, falseLabel } = props

  if (event.target.checked) {
    moduleValue = trueLabel === undefined ? true : trueLabel
  } else {
    moduleValue = falseLabel === undefined ? false : falseLabel
  }

  emit('change', moduleValue, event)

  nextTick(() => {
    state.isGroup && dispatch(constants.CHECKBOX_GROUP, 'change', [state.checkboxGroup.modelValue])
  })
}

// prettier-ignore
export const computedGetModelGet = ({ state, props }) => () => {
  const model = state.isGroup
    ? state.store
    : props.modelValue !== undefined
      ? props.modelValue
      : state.selfModel

  return isNull(model) ? [] : model
}

export const computedGetModelSet = ({ state, dispatch, emit, constants }) => (value) => {
  if (state.isGroup) {
    state.isLimitExceeded = false

    state.checkboxGroup.min !== undefined && value.length < state.checkboxGroup.min && (state.isLimitExceeded = true)

    state.checkboxGroup.max !== undefined && value.length > state.checkboxGroup.max && (state.isLimitExceeded = true)

    state.isLimitExceeded === false && dispatch(constants.CHECKBOX_GROUP, 'update:modelValue', [value])
  } else {
    emit('update:modelValue', value)
    state.selfModel = value
  }
}

export const computedIsChecked = ({ state, props }) => () => {
  if (typeof state.model === 'boolean') {
    return state.model
  } else if (Array.isArray(state.model)) {
    return state.model.includes(props.label)
  } else if (!isNull(state.model)) {
    return state.model === props.trueLabel
  }
}

export const computedIsGroup = ({ state, parent, constants }) => () => {
  let parentObj = parent.$parent

  while (parentObj) {
    if (parentObj.$options.componentName !== constants.CHECKBOX_GROUP) {
      parentObj = parentObj.$parent
    } else {
      state.checkboxGroup = parentObj
      return true
    }
  }

  return false
}

export const computedStore = ({ state, props }) => () =>
  (state.checkboxGroup ? state.checkboxGroup.modelValue : props.modelValue)

export const computedIsLimitDisabled = (state) => () => {
  const { max, min } = state.checkboxGroup

  return (
    (!!(max || min) && state.model.length >= max && !state.isChecked) || (state.model.length <= min && state.isChecked)
  )
}

export const computedIsDisabled = ({ state, props }) => () =>
  (state.isGroup
    ? (state.checkboxGroup.disabled ||
      state.checkboxGroup.displayOnly ||
      props.disabled ||
      props.displayOnly ||
      state.isLimitDisabled)
    : props.disabled) || state.formDisabled

export const computedFormItemSize = (props) => () => (props.formItem || {}).formItemSize

export const computedCheckboxSize = ({ state, props, formItemSize }) => () => {
  const tempCheckboxSize = props.size || formItemSize.value

  return state.isGroup ? (state.checkboxGroup.state.checkboxGroupSize || tempCheckboxSize) : tempCheckboxSize
}

export const mounted = ({ props, emit, api, parent }) => () => {
  props.checked && api.addToStore()

  props.indeterminate && parent.$el.setAttribute('aria-controls', props.controls)

  emit('complete', true)
}

export const toggleEvent = ({ parent, props, type }) => {
  const inputEl = parent.$el

  for (let ev in props.events) {
    inputEl[type + 'EventListener'](ev, props.events[ev])
  }
}

export const dispatchDisplayedValue = ({ state, api, dispatch }) => () => {
  if (state.isDisplayOnly) {
    dispatch('FormItem', 'displayed-value-changed', {
      type: 'checkbox',
      val: api.getDisplayedValue()
    })
  }
}

export const getDisplayedValue = ({ vm, state, props }) => () => {
  if (state.isChecked) {
    return (vm.$refs.label && vm.$refs.label.innerText) || props.text || props.label
  } else {
    return ''
  }
}

export const computedIsDisplayOnly = ({ state, props }) => () => props.displayOnly || state.formDisplayOnly

export const computedIsGroupDisplayOnly = ({ state }) => () =>
  state.isGroup && (state.checkboxGroup.displayOnly || state.formDisplayOnly)

export const computedIsShowText = ({ props }) => () => props.text || props.label || !isNull(props.text) || !isNull(props.label)

export const computedShowText = ({ props }) => () => {
  if (props.text || !isNull(props.text)) {
    return props.text
  } else {
    return props.label
  }
}
