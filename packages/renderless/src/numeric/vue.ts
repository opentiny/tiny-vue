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

import type {
  INumericApi,
  INumericProps,
  INumericState,
  ISharedRenderlessParamHooks,
  INumericRenderlessParamUtils,
  INumericRenderlessParams,
  INumericInitStateParams
} from '@/types'
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
  getDisplayedValue,
  getDisplayOnlyText,
  filterValue,
  handleClear,
  handleChange
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
  'select',
  'handleClear',
  'handleChange'
]

const initState = ({
  reactive,
  computed,
  props,
  api,
  $service,
  constants,
  parent
}: INumericInitStateParams): INumericState => {
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

    filterMenu: constants.FILTER_OPTION,
    filterValue: computed(() => api.filterValue()),

    handleClear: computed(() => api.handleClear()),
    handleChange: computed(() => api.handleClear()),
    isDisplayOnly: computed(() => props.displayOnly || (parent.tinyForm || {}).displayOnly),
    displayOnlyText: computed(() => api.getDisplayOnlyText()),
    controls: props.controls
  })
  return state
}

const initApi = ({
  api,
  props,
  state,
  parent,
  vm,
  emit,
  dispatch,
  constants,
  nextTick
}: Pick<
  INumericRenderlessParams,
  'api' | 'props' | 'state' | 'parent' | 'vm' | 'emit' | 'dispatch' | 'constants' | 'nextTick'
>): void => {
  Object.assign(api, {
    state,
    focus: focus(vm),
    select: select(vm),
    getPrecision: getPrecision(),
    toPrecision: toPrecision(state),
    updated: updated({ constants, parent, state }),
    mounted: mounted({ constants, parent, props, state }),
    unmounted: unmounted({ parent, state }),
    getDecimal: getDecimal(props),
    handleFocus: handleFocus({ emit, state, props, api, vm }),
    decrease: decrease({ api, props, state }),
    increase: increase({ api, props, state }),
    handleInput: handleInput({ state, api, emit, props }),
    getNumPecision: getNumPecision({ api, props }),
    displayValue: displayValue({ props, state, api }),
    internalDecrease: internalDecrease({ api, state }),
    internalIncrease: internalIncrease({ api, state }),
    handleInputChange: handleInputChange({ api, state, props }),
    mouseEvent: mouseEvent({ api, props, state }),
    handleBlur: handleBlur({ constants, dispatch, emit, props, state, api }),
    watchValue: watchValue({ api, props, state, nextTick }),
    setCurrentValue: setCurrentValue({ api, constants, dispatch, emit, props, state }),
    dispatchDisplayedValue: dispatchDisplayedValue({ api, state, dispatch }),
    getDisplayedValue: getDisplayedValue({ state, props }),
    getDisplayOnlyText: getDisplayOnlyText({ parent, props, state }),
    filterValue: filterValue({ state }),
    handleClear: handleClear({ state, emit }),
    handleChange: handleChange({ state, emit })
  })

  api.getDecimal(0)
}

const initWatch = ({
  state,
  watch,
  props,
  api
}: Pick<INumericRenderlessParams, 'state' | 'watch' | 'props' | 'api'>): void => {
  watch(
    () => [props.max, props.min],
    ([curMax, curMin]) => {
      if (curMax < curMin) {
        throw new Error('[Numeric]: The maximum value should not be less than to the minimum value')
      }
    },
    { immediate: true }
  )

  watch(() => props.modelValue, api.watchValue, { immediate: true })

  watch(() => state.isDisplayOnly, api.dispatchDisplayedValue)
}

export const renderless = (
  props: INumericProps,
  { computed, onMounted, onUpdated, onUnmounted, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { parent, emit, vm, constants, dispatch, service, nextTick }: INumericRenderlessParamUtils
): INumericApi => {
  const api = {} as INumericApi
  const $service = initService(service)
  const state = initState({ reactive, computed, props, api, constants, $service, parent })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ api, props, state, parent, vm, emit, dispatch, constants, nextTick })
  initWatch({ state, watch, props, api })

  onMounted(() => {
    api.dispatchDisplayedValue()
    api.mounted()
  })
  onUpdated(api.updated)
  onUnmounted(api.unmounted)

  return api
}
