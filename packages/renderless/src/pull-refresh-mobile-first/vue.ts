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
  mountedHandler,
  beforeUnmountHandler,
  watchModelValue,
  onTouchstart,
  onTouchmove,
  onTouchend,
  isTouchable,
  ease,
  setStatus,
  getStatusText,
  showSuccessTip,
  checkPosition,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  watchModelValueChange,
  watchStatusChange,
  parseHeaderHeight,
  checkSelfSimulate
} from './index'
import { getScrollParent } from '../common/deps/dom'
import { useTouch } from '../common/deps/useTouch'
import { useEventListener } from '../common/deps/useEventListener'
import emulate from '../common/deps/touch-emulator'

emulate()
export const api = ['state', 'constants', 'onTouchStart', 'onTouchEnd', 'getStatusText']

export const renderless = (
  props,
  { ref, unref, toRef, isRef, reactive, computed, watch, onMounted, onUnmounted, onActivated, onDeactivated },
  { vm, emit, constants, t, nextTick, slots },
  { Loading }
) => {
  const api = {}
  const state = reactive({
    replaces: '',
    styleObj: {},
    translate3d: 0,
    draggposition: 0,
    value: props.modelValue,
    checkStatus: false,
    headHeight: props.headHeight,
    pullingText: props.pullingText,
    loosingText: props.loosingText,
    successText: props.successText,
    successDuration: props.successDuration,
    animationDuration: props.animationDuration,
    disabled: computed(() => props.disabled),

    /* mf state */
    reachTop: false,
    scrollParent: null,
    scrollTrack: null,
    status: constants.STATUS.NORMAL,
    distance: 0,
    duration: 0,
    headerHeight: ''
  })

  const touchState = {}

  Object.assign(api, {
    state,
    constants,
    onTouchstart: onTouchstart({ state }),
    onTouchmove: onTouchmove({ vm, state }),
    onTouchend: onTouchend({ emit, props, state }),
    mountedHandler: mountedHandler({ api, vm, state }),
    beforeUnmountHandler: beforeUnmountHandler({ api, vm }),
    useTouch: useTouch(ref),
    useEventListener: useEventListener({
      unref,
      isRef,
      watch,
      nextTick,
      onMounted,
      onUnmounted,
      onActivated,
      onDeactivated
    }),
    isTouchable: isTouchable({ props, state, constants }),
    ease: ease({ state, props }),
    setStatus: setStatus({ emit, props, state, constants }),
    getStatusText: getStatusText({ props, state, t, constants }),
    showSuccessTip: showSuccessTip({ api, props, state, constants }),
    checkPosition: checkPosition({ state, touchState }),
    onTouchStart: onTouchStart(api),
    onTouchMove: onTouchMove({ api, state, touchState }),
    onTouchEnd: onTouchEnd({ api, emit, nextTick, state, props, touchState, constants }),
    watchModelValueChange: watchModelValueChange({ api, slots, state, props }),
    watchStatusChange: watchStatusChange({ api, state, props, Loading, vm, constants, slots }),
    parseHeaderHeight: parseHeaderHeight({ state, props, constants }),
    checkSelfSimulate: checkSelfSimulate({ state, props })
  })

  watch(
    () => props.modelValue,
    (value) => api.watchModelValueChange(value)
  )

  watch(
    () => state.status,
    (value, oldValue) => api.watchStatusChange(value, oldValue)
  )

  watch(
    () => props.headHeight,
    () => api.parseHeaderHeight(),
    { immediate: true }
  )

  Object.assign(touchState, api.useTouch())
  state.stopHandle = api.useEventListener('touchmove', api.onTouchMove, { target: toRef(state, 'scrollTrack') })

  onMounted(() => {
    state.scrollParent = getScrollParent(vm.$refs.root)
    state.scrollTrack = vm.$refs.track
  })

  onUnmounted(() => {
    typeof state.stopHandle === 'function' && state.stopHandle()
    state.scrollParent = null
    state.scrollTrack = null
  })

  return api
}
