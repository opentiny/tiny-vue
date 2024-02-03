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
  computedWrapperStyle,
  computedBaseOffset,
  onClickItem,
  setIndex,
  adjustIndex,
  mountedHandler,
  momentum,
  onTransitionEnd,
  getOptionText,
  setValue,
  getValue,
  setOptions,
  deepClone,
  beforeUnmountHandler,
  onTouchstart,
  onTouchmove,
  onTouchend
} from './index'

export const api = ['state', 'onClickItem', 'onTransitionEnd', 'setValue', 'getValue', 'setOptions', 'setIndex']

const initState = ({ reactive, computed, props, api }) => {
  const state = reactive({
    columnsItem: props.columnsItem,
    columnsItemArr: props.columnsItem.values,
    currentIndex: props.defaultIndex,
    itemHeight: props.itemHeight,
    visibleItemCount: props.visibleItemCount,
    offset: 0,
    duration: 0,
    startOffset: 0,
    moving: false,
    defaultDuration: 200,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    touchStartTime: null,
    momentumOffset: 0,
    direction: '',
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    count: props.columnsItem.values.length,
    transitionEndTrigger: null,
    clumnsWrapHeight: null,
    maskStyle: null,
    wrapperStyle: computed(() => api.computedWrapperStyle()),
    baseOffset: computed(() => api.computedBaseOffset())
  })

  return state
}

const initApi = ({ api, props, state, vm, emit }) => {
  Object.assign(api, {
    state,
    getValue: getValue(state),
    adjustIndex: adjustIndex(state),
    onTouchmove: onTouchmove({ state }),
    onTouchstart: onTouchstart({ state }),
    getOptionText: getOptionText({ state, props }),
    onTransitionEnd: onTransitionEnd(state),
    computedBaseOffset: computedBaseOffset({ state, props }),
    computedWrapperStyle: computedWrapperStyle(state),
    setValue: setValue({ api, state }),
    onTouchend: onTouchend({ api, state }),
    setOptions: setOptions({ api, state, props }),
    momentum: momentum({ api, state, props }),
    setIndex: setIndex({ api, state, emit }),
    onClickItem: onClickItem({ api, state }),
    mountedHandler: mountedHandler({ api, state, vm }),
    beforeUnmountHandler: beforeUnmountHandler({ api, vm })
  })
}

const initWatch = ({ watch, props, state, api }) => {
  watch(() => props.defaultIndex, api.setIndex, { immediate: true })

  watch(
    () => props.columnsItem,
    (value) => {
      state.columnsItem = value
    },
    { immediate: true }
  )

  watch(
    () => props.columnsItem.values,
    (value) => {
      state.count = value.length
    },
    { immediate: true }
  )
}

export const renderless = (props, { computed, onMounted, reactive, watch, onBeforeUnmount }, { emit, vm }) => {
  const api = {}
  const state = initState({ reactive, computed, props, api })

  initApi({ api, props, state, vm, emit })

  api.setIndex(state.currentIndex)
  state.columnsItem = deepClone(props.columnsItem)

  initWatch({ watch, props, state, api })

  onMounted(api.mountedHandler)
  onBeforeUnmount(api.beforeUnmountHandler)

  return api
}
