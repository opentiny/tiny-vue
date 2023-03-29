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

import {
  isIP6,
  isIP4,
  ipValidator,
  getCursorPosition,
  getValue,
  setValue,
  focus,
  select,
  inputEvent,
  change,
  blur,
  keyup,
  keydown,
  getHeightOfSize
} from './index'
import { KEY_CODE } from '@opentiny/vue-renderless/common'

export const api = ['state', 'focus', 'inputEvent', 'blur', 'keyup', 'keydown', 'change', 'select']

const initState = ({ reactive, computed, handleValue, parent, props }) => {
  const state = reactive({
    ...handleValue.state,
    active: false,
    isSelected: false,

    filterKeyCodes: [KEY_CODE.AtMark, KEY_CODE.Backspace, KEY_CODE.ArrowLeft, KEY_CODE.ArrowRight, KEY_CODE.Tab, KEY_CODE.Delete],

    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    heightStyle: computed(() => getHeightOfSize(props.size)),
    lineHeightStyle: computed(() => getHeightOfSize(props.size, 'line-height')),
    allHeightStyle: computed(() => `${state.heightStyle}${state.lineHeightStyle}`)
  })

  return state
}

const initApi = ({ state, api, dispatch, handleValue, emit, broadcast, parent, componentName, props, eventName }) => {
  Object.assign(api, {
    ...handleValue.api,
    state,
    dispatch,
    broadcast,
    getCursorPosition,
    focus: focus({ emit, props, parent, state }),
    select: select({ emit, props, parent, state }),
    blur: blur({
      api,
      componentName,
      emit,
      eventName: eventName.blur,
      props,
      state
    }),
    keyup: keyup({ api, props, parent }),
    change: change({ api, emit }),
    keydown: keydown({ api, props, state }),
    inputEvent: inputEvent({ api, emit, props, componentName, eventName: eventName.change })
  })
}

export const useHandleValue = ({ componentName, dispatch, eventName, props, reactive, toRefs, watch }) => {
  const state = reactive({
    address: [],
    isDel: false
  })

  const api = {
    isIP6,
    isIP4
  }

  api.getValue = getValue({ api, props, state })
  api.setValue = setValue({ api, props, state })
  api.ipValidator = ipValidator({ api, props })

  watch(
    () => props.modelValue,
    (value) => {
      if (!state.isDel) {
        api.setValue(value)
        dispatch(componentName, eventName, [value])
      }
    },
    { immediate: true }
  )

  return {
    state: toRefs(state),
    api
  }
}

export const renderless = (props, { reactive, toRefs, watch, inject, computed }, { $prefix, emit, parent, broadcast, dispatch }) => {
  const api = {}
  const componentName = 'FormItem'
  const eventName = {
    change: 'form.change',
    blur: 'form.blur'
  }

  parent.tinyForm = parent.tinyForm || inject('form', null)

  const handleValue = useHandleValue({
    componentName,
    dispatch,
    eventName: eventName.change,
    props,
    reactive,
    toRefs,
    watch
  })

  const state = initState({ reactive, computed, handleValue, parent, props })

  initApi({
    api,
    state,
    handleValue,
    dispatch,
    broadcast,
    emit,
    props,
    parent,
    componentName,
    eventName
  })

  return api
}
