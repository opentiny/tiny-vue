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

export const handleChange =
  ({ constants, dispatch, emit, state, nextTick }) =>
  () => {
    nextTick(() => {
      emit('change', state.model)

      state.isGroup && dispatch(constants.RADIO_GROUP, 'handleChange', [state.model])
    })
  }

export const isGroup =
  ({ constants, parent: $parent, state }) =>
  () => {
    let parent = $parent.$parent.$parent

    while (parent) {
      if (parent.$options.componentName !== constants.RADIO_GROUP) {
        parent = parent.$parent
      } else {
        state.radioGroup = parent

        return true
      }
    }

    return false
  }

export const radioSize =
  ({ props, state }) =>
  () =>
    state.isGroup ? state.radioGroup.state.radioGroupSize || props.size : props.size

export const isDisabled =
  ({ props, state }) =>
  () =>
    props.disabled || state.radioGroup.disabled || state.formDisabled

export const isDisplayOnly =
  ({ props }) =>
  () =>
    props.displayOnly

export const tabIndex =
  ({ props, state }) =>
  () =>
    state.isDisabled || (state.isGroup && state.model !== props.label) ? -1 : 0

export const getModel =
  ({ props, state }) =>
  () =>
    state.isGroup ? state.radioGroup.modelValue : props.modelValue

export const setModel =
  ({ constants, dispatch, emit, props, refs, state }) =>
  (val) => {
    if (state.isGroup) {
      dispatch(constants.RADIO_GROUP, 'update:modelValue', [val])
    } else {
      emit('update:modelValue', val)
    }

    refs.radio && (refs.radio.checked = state.model === props.label)
  }

export const toggleEvent = ({ props, refs, type }) => {
  const radioEl = refs.radio

  Object.keys(props.events).forEach((ev) => {
    radioEl[type + 'EventListener'](ev, props.events[ev])
  })
}

export const dispatchDisplayedValue =
  ({ state, dispatch, api }) =>
  () => {
    if (state.isDisplayOnly) {
      dispatch('FormItem', 'displayed-value-changed', {
        type: 'radio',
        val: api.getDisplayedValue()
      })
    }
  }

export const getDisplayedValue =
  ({ vm, state, props }) =>
  () => {
    if (state.model === props.label) {
      return (vm.$refs.label && vm.$refs.label.innerText) || props.text || props.label
    } else {
      return ''
    }
  }
