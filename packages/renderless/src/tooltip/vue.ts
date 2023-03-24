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
  bindEvent,
  show,
  hide,
  handleFocus,
  handleBlur,
  removeFocusing,
  handleShowPopper,
  handleClosePopper,
  setExpectedState,
  destroyed,
  debounceClose,
  watchFocusing,
  bindPopper,
  focusHandler
} from './index'
import userPopper from '@opentiny/vue-renderless/common/deps/vue-popper'
import { guid } from '@opentiny/vue-renderless/common/string'

export const api = [
  'state',
  'bindEvent',
  'hide',
  'show',
  'doDestroy',
  'handleFocus',
  'setExpectedState',
  'debounceClose',
  'handleShowPopper',
  'handleClosePopper',
  'setExpectedState',
  'updatePopper',
  'focusHandler'
]

const initState = ({ reactive, showPopper, popperElm, referenceElm, props }) =>
  reactive({
    showPopper,
    popperElm,
    referenceElm,
    timeout: null,
    focusing: false,
    expectedState: undefined,
    mounted: false,
    tooltipId: guid('tiny-tooltip-', 4),
    tabindex: props.tabindex
  })

export const renderless = (
  props,
  { watch, toRefs, reactive, onBeforeUnmount, onDeactivated, onMounted, onUnmounted },
  { vm, emit, refs, slots, nextTick, parent }
) => {
  const api = {}
  const popperParam = { emit, props, nextTick, toRefs, reactive, parent, refs }

  Object.assign(popperParam, { slots, onBeforeUnmount, onDeactivated, watch })

  const { showPopper, updatePopper, popperElm, referenceElm, doDestroy } = userPopper(popperParam)
  const state = initState({ reactive, showPopper, popperElm, referenceElm, props })

  Object.assign(api, {
    state,
    doDestroy,
    updatePopper,
    show: show({ api, state, props }),
    hide: hide(api),
    destroyed: destroyed({ state, api }),
    bindPopper: bindPopper({ vm, refs, state, nextTick }),
    watchFocusing: watchFocusing(state),
    removeFocusing: removeFocusing(state),
    handleBlur: handleBlur({ api, state }),
    handleFocus: handleFocus({ api, state }),
    debounceClose: debounceClose({ api, props }),
    setExpectedState: setExpectedState({ api, state }),
    handleShowPopper: handleShowPopper({ props, state }),
    handleClosePopper: handleClosePopper({ api, props, state }),
    bindEvent: bindEvent({ api, state, vm }),
    focusHandler: focusHandler({ slots, api })
  })

  watch(() => state.focusing, api.watchFocusing)

  watch(
    () => props.modelValue,
    (val) => nextTick(() => props.manual && (state.showPopper = val))
  )

  onMounted(api.bindPopper)

  vm.$on('tooltip-update', api.bindPopper)

  onUnmounted(api.destroyed)

  return api
}
