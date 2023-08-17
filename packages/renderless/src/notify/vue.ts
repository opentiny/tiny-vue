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
  clearTimer,
  startTimer,
  close,
  bindEvent,
  unBindEvent,
  click,
  watchClosed,
  getOffsetStyle,
  getPositionSide,
  getZindex
} from './index'

export const api = [
  'state',
  'clearTimer',
  'startTimer',
  'close',
  'bindEvent',
  'unBindEvent',
  'click',
  'watchClosed',
  'getOffsetStyle',
  'getPositionSide',
  'getZindex'
]

export const renderless = (props, { computed, onBeforeUnmount, onMounted, reactive, watch }, { emit }) => {
  const api = {}
  const state = reactive({
    timer: null,
    closed: false,
    visible: true,
    duration: computed(() => props.duration),
    showClose: true,
    verticalOffset: 0,
    position: computed(() => props.position),
    dangerouslyUseHTMLString: false,
    positionStyle: computed(() => api.getOffsetStyle(state)),
    verticalProperty: computed(() => api.getPositionSide(state)),
    customClass: computed(() => props.customClass)
  })

  Object.assign(api, {
    state,
    getZindex,
    getOffsetStyle,
    getPositionSide,
    close: close({ state, props }),
    click: click({ emit, state }),
    clearTimer: clearTimer(state),
    bindEvent: bindEvent({ api, state }),
    unBindEvent: unBindEvent(api),
    startTimer: startTimer({ api, state }),
    watchClosed: watchClosed(state)
  })

  watch(() => state.closed, api.watchClosed, { immediate: true })

  onMounted(api.bindEvent)
  onBeforeUnmount(api.unBindEvent)

  return api
}
