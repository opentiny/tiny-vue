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

import { handleChange, getValue, setValue, getGroup, getStyle, toggleEvents } from './index'

export const api = ['state', 'handleChange']

export const renderless = (props, { computed, reactive, onMounted, onBeforeUnmount }, { emit, parent, dispatch, constants, nextTick, refs }) => {
  const api = {
    getGroup: getGroup({ constants, parent }),
    toggleEvents: toggleEvents({ refs, props })
  }

  const state = reactive({
    focus: false,
    value: computed({
      get: () => api.getValue(),
      set: (val) => api.setValue(val)
    }),
    radioGroup: computed(() => api.getGroup()),
    activeStyle: computed(() => api.getStyle()),
    size: computed(() => state.radioGroup.state.radioGroupSize),
    isDisabled: computed(() => props.disabled || state.radioGroup.disabled),
    tabIndex: computed(() => (state.isDisabled || (state.radioGroup && state.value !== props.label) ? -1 : 0))
  })
  Object.assign(api, {
    state,
    getValue: getValue(state),
    getStyle: getStyle(state),
    setValue: setValue({ emit, state }),
    handleChange: handleChange({ constants, dispatch, nextTick, state })
  })

  onMounted(api.toggleEvents)

  onBeforeUnmount(() => {
    api.toggleEvents(true)
  })

  return api
}
