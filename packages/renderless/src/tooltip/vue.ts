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
  focusHandler,
  observeCallback,
  handleDocumentClick
} from './index'
import userPopper from '../common/deps/vue-popper'
import { guid } from '../common/string'
import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from 'types/shared.type'
import type { ITooltipApi, ITooltipProps, ITooltipState } from 'types/tooltip.type'

export const api = [
  'state',
  'bindEvent',
  'hide',
  'show',
  'doDestroy',
  'handleFocus',
  'debounceClose',
  'handleShowPopper',
  'handleClosePopper',
  'setExpectedState',
  'updatePopper',
  'focusHandler'
]

const initState = ({ reactive, showPopper, popperElm, referenceElm, props, inject, popperJS, currentPlacement }) =>
  reactive({
    popperJS,
    showPopper,
    popperElm,
    referenceElm,
    currentPlacement,
    timeout: null,
    focusing: false,
    expectedState: undefined,
    tooltipId: guid('tiny-tooltip-', 4),
    tabindex: props.tabindex,
    xPlacement: 'bottom',
    showContent: inject('showContent', null),
    tipsMaxWidth: inject('tips-max-width', null)
  })

export const renderless = (
  props: ITooltipProps,
  {
    watch,
    toRefs,
    reactive,
    onBeforeUnmount,
    onDeactivated,
    onMounted,
    onUnmounted,
    inject
  }: ISharedRenderlessParamHooks,
  { vm, emit, slots, nextTick, parent }: ISharedRenderlessParamUtils<never>
) => {
  const api = {} as ITooltipApi

  const popperVmRef = {} as { popper: HTMLElement }
  const popperParam = { emit, props, nextTick, toRefs, reactive, parent: parent.$parent, vm, popperVmRef }

  Object.assign(popperParam, { slots, onBeforeUnmount, onDeactivated, watch })

  const { showPopper, updatePopper, popperElm, referenceElm, doDestroy, popperJS, currentPlacement } = userPopper(
    popperParam as any
  )
  const state: ITooltipState = initState({
    reactive,
    showPopper,
    popperElm,
    referenceElm,
    props,
    inject,
    popperJS,
    currentPlacement
  })

  Object.assign(api, {
    state,
    doDestroy,
    updatePopper,
    show: show({ api, state, props }),
    hide: hide(api),
    destroyed: destroyed({ state, api, vm }),
    bindPopper: bindPopper({ vm, nextTick, popperVmRef }),
    watchFocusing: watchFocusing(state),
    removeFocusing: removeFocusing({ api, state }),
    handleBlur: handleBlur({ api, state }),
    handleFocus: handleFocus({ api, state }),
    debounceClose: debounceClose({ api, props }),
    setExpectedState: setExpectedState({ state }),
    handleShowPopper: handleShowPopper({ props, state }),
    handleClosePopper: handleClosePopper({ api, props, state }),
    bindEvent: bindEvent({ api, state, vm }),
    focusHandler: focusHandler({ slots, api }),
    handleDocumentClick: handleDocumentClick({ props, api, state, popperVmRef }),
    observeCallback: observeCallback({ state, popperVmRef })
  })

  watch(() => state.focusing, api.watchFocusing)

  watch(
    () => props.modelValue,
    (val) => nextTick(() => props.manual && (state.showPopper = val))
  )

  onMounted(() => {
    api.bindPopper()
    if (props.genArrowByHtml) {
      const config = { attributes: true, childList: false, subtree: false }
      api.observer = new MutationObserver(api.observeCallback)
      api.observer.observe(popperVmRef.popper, config)
    }
  })

  vm.$on('tooltip-update', api.bindPopper)

  onUnmounted(() => {
    api.destroyed()
    api.observer && api.observer.disconnect()
  })

  return api
}
