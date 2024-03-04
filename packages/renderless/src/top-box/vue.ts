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
  handleAfterLeave,
  bindEvent,
  unBindEvent,
  destroy,
  watchClosed,
  getTypeClass,
  getOffsetStyle,
  getZindex
} from './index'

export const api = ['state', 'handleAfterLeave', 'clearTimer', 'startTimer', 'close', 'getZindex']

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, reactive, watch },
  { vm, parent, constants }
) => {
  const api = {}
  const state = reactive({
    timer: null,
    message: '',
    type: 'info',
    iconClass: '',
    onClose: null,
    closed: false,
    center: false,
    buttons: null,
    duration: 3000,
    visible: false,
    customClass: '',
    showClose: false,
    verticalOffset: 20,
    dangerouslyUseHTMLString: false,
    typeClass: computed(() => api.getTypeClass()),
    positionStyle: computed(() => api.getOffsetStyle())
  })

  Object.assign(api, {
    state,
    getZindex,
    close: close(state),
    destroy: destroy(parent),
    clearTimer: clearTimer(state),
    getOffsetStyle: getOffsetStyle({ state }),
    getTypeClass: getTypeClass({ constants, state }),
    bindEvent: bindEvent({ api, state }),
    startTimer: startTimer({ api, state }),
    unBindEvent: unBindEvent({ api, state }),
    handleAfterLeave: handleAfterLeave(api),
    watchClosed: watchClosed({ api, state })
  })

  watch(() => state.closed, api.watchClosed, { immediate: true })

  onMounted(() => {
    props.emitter.emit('TopBoxMounted', vm)
    api.bindEvent()
  })

  onBeforeUnmount(api.unBindEvent)

  return api
}
