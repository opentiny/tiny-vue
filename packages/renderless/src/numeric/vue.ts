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
  watchValue,
  toPrecision,
  getPrecision,
  internalIncrease,
  internalDecrease,
  focus,
  decrease,
  handleBlur,
  handleFocus,
  setCurrentValue,
  handleInput,
  handleInputChange,
  select,
  mounted,
  updated,
  increase,
  displayValue,
  getNumPecision,
  mouseEvent,
  getUnitPrecision,
  getDecimal,
  unmounted,
  initService,
  dispatchDisplayedValue,
  getDisplayedValue
} from './index'

export const api = [
  'state',
  'decrease',
  'increase',
  'handleBlur',
  'handleFocus',
  'handleInput',
  'handleInputChange',
  'mouseEvent',
  'focus',
  'select'
]

const initState = ({ reactive, computed, props, api, $service, parent }) => {
  const state = reactive({
    currentValue: props.modelValue,
    userInput: props.modelValue,
    lastInput: props.modelValue,
    inputStatus: false,
    decimal: null,
    strictInput: computed(() => props.strictInput),
    inputSize: computed(() => props.size || state.formSize),
    formSize: computed(() => (parent.tinyForm || {}).size),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    inputDisabled: computed(() => props.disabled || state.formDisabled),
    displayValue: computed(() => api.displayValue()),
    numPrecision: computed(() => api.getNumPecision()),

    minDisabled: computed(() => (!props.circulate && state.currentValue <= props.min) || state.formDisabled),

    maxDisabled: computed(() => (!props.circulate && state.currentValue >= props.max) || state.formDisabled),

    controlsAtRight: computed(() => props.controls && props.controlsPosition === 'right'),

    format: computed(() => getUnitPrecision({ service: $service, props })),

    isDisplayOnly: computed(() => props.displayOnly || (parent.tinyForm || {}).displayOnly)
  })

  return state
}

const initApi = ({ api, props, state, parent, refs, emit, dispatch, constants }) => {
  Object.assign(api, {
    state,
    focus: focus(refs),
    select: select(refs),
    getPrecision: getPrecision(),
    toPrecision: toPrecision(state),
    updated: updated({ constants, parent, props, refs, state }),
    mounted: mounted({ constants, parent, props, refs, state }),
    unmounted: unmounted({ parent, state }),
    getDecimal: getDecimal(props),
    handleFocus: handleFocus({ emit, state, props, api, refs }),
    decrease: decrease({ api, props, state }),
    increase: increase({ api, props, state }),
    handleInput: handleInput({ state, api, emit, props }),
    getNumPecision: getNumPecision({ api, props }),
    displayValue: displayValue({ props, state }),
    internalDecrease: internalDecrease({ api, state }),
    internalIncrease: internalIncrease({ api, state }),
    handleInputChange: handleInputChange({ api }),
    mouseEvent: mouseEvent({ api, props, state }),
    handleBlur: handleBlur({ constants, dispatch, emit, props, state, api }),
    watchValue: watchValue({ api, state }),
    setCurrentValue: setCurrentValue({ api, constants, dispatch, emit, props, state }),
    dispatchDisplayedValue: dispatchDisplayedValue({ api, state, dispatch }),
    getDisplayedValue: getDisplayedValue({ state, props })
  })

  api.getDecimal(0)
}

const initWatch = ({ state, watch, props, api }) => {
  watch(() => props.modelValue, api.watchValue, { immediate: true })

  watch(() => state.isDisplayOnly, api.dispatchDisplayedValue)
}

export const renderless = (
  props,
  { computed, onMounted, onUpdated, onUnmounted, reactive, watch, inject },
  { parent, emit, refs, constants, dispatch, service }
) => {
  const api = {}
  const $service = initService(service)
  const state = initState({ reactive, computed, props, api, $service, parent })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ api, props, state, parent, refs, emit, dispatch, constants })
  initWatch({ state, watch, props, api })

  onMounted(() => {
    api.dispatchDisplayedValue()
    api.mounted()
  })
  onUpdated(api.updated)
  onUnmounted(api.unmounted)

  return api
}
