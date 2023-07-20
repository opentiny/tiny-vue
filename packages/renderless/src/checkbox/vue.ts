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
  addToStore,
  removeFromStore,
  handleChange,
  computedGetModelGet,
  computedGetModelSet,
  computedIsChecked,
  computedIsGroup,
  computedStore,
  computedIsLimitDisabled,
  computedIsDisabled,
  computedIsDisplayOnly,
  computedIsGroupDisplayOnly,
  computedFormItemSize,
  computedCheckboxSize,
  mounted,
  toggleEvent,
  dispatchDisplayedValue,
  getDisplayedValue,
  computedIsShowText,
  computedShowText
} from './index'

export const api = ['state', 'handleChange', 'computedStore']

const initState = ({ reactive, computed, parent, api, inject, props }) => {
  const state = reactive({
    size: props.size || inject('size', null),
    vertical: inject('vertical', null),
    focus: false,
    selfModel: false,
    isLimitExceeded: false,
    store: computed(() => api.computedStore()),
    isGroup: computed(() => api.computedIsGroup()),
    isChecked: computed(() => api.computedIsChecked()),
    isDisabled: computed(() => api.computedIsDisabled()),
    checkboxSize: computed(() => api.computedCheckboxSize()),
    isLimitDisabled: computed(() => api.computedIsLimitDisabled()),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    formDisplayOnly: computed(() => (parent.tinyForm || {}).displayOnly),
    isDisplayOnly: computed(() => api.computedIsDisplayOnly()),
    isGroupDisplayOnly: computed(() => api.computedIsGroupDisplayOnly()),
    model: computed({
      get: () => api.computedGetModelGet(),
      set: (value) => api.computedGetModelSet(value)
    }),
    showText: computed(() => api.computedShowText()),
    isShowText: computed(() => api.computedIsShowText())
  })

  return state
}

const initApi = ({ vm, api, state, dispatch, props, parent, constants, formItemSize, emit, nextTick }) => {
  Object.assign(api, {
    state,
    addToStore: addToStore({ state, props }),
    removeFromStore: removeFromStore({ state, props }),
    computedStore: computedStore({ state, props }),
    computedFormItemSize: computedFormItemSize(props),
    computedIsChecked: computedIsChecked({ state, props }),
    computedIsLimitDisabled: computedIsLimitDisabled(state),
    computedIsDisabled: computedIsDisabled({ state, props }),
    computedIsDisplayOnly: computedIsDisplayOnly({ state, props }),
    computedIsGroupDisplayOnly: computedIsGroupDisplayOnly({ state }),
    computedGetModelGet: computedGetModelGet({ state, props }),
    computedIsGroup: computedIsGroup({ state, parent, constants }),
    computedCheckboxSize: computedCheckboxSize({ state, props, formItemSize }),
    computedGetModelSet: computedGetModelSet({ state, dispatch, emit, constants }),
    mounted: mounted({ emit, props, api, parent }),
    handleChange: handleChange({ state, props, emit, nextTick, dispatch, constants }),
    dispatchDisplayedValue: dispatchDisplayedValue({ state, api, dispatch }),
    getDisplayedValue: getDisplayedValue({ state, props, vm }),
    computedIsShowText: computedIsShowText({ props }),
    computedShowText: computedShowText({ props }),
  })
}

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, watch, inject },
  { vm, parent, emit, constants, nextTick, dispatch }
) => {
  const api = { dispatch }
  const formItemSize = computed(() => api.computedFormItemSize())
  const state = initState({ reactive, computed, parent, api, inject, props })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ vm, api, state, dispatch, props, parent, constants, formItemSize, emit, nextTick })

  watch(
    () => props.modelValue,
    (value) => props.validateEvent && api.dispatch(constants.FORM_ITEM, constants.FORM_CHANGE, value)
  )

  watch(() => state.isDisplayOnly, api.dispatchDisplayedValue)

  watch(
    () => props.checked,
    (value) => {
      value ? api.addToStore() : api.removeFromStore()
    }
  )

  onBeforeUnmount(() => {
    toggleEvent({ parent, props, type: 'remove' })
  })

  onMounted(() => {
    dispatch('Tooltip', 'tooltip-update')
    toggleEvent({ parent, props, type: 'add' })
    api.dispatchDisplayedValue()
    api.mounted()
  })

  return api
}
