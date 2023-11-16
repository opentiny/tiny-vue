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
  dragEvent,
  handleEvent,
  mousedownEvent,
  toggleZoomEvent,
  revert,
  maximize,
  getBox,
  handleGlobalKeydownEvent,
  close,
  updateStyle,
  addMsgQueue,
  removeMsgQueue,
  computedIsMsg,
  watchValue,
  created,
  mounted,
  beforeUnmouted,
  selfClickEvent,
  updateZindex,
  closeEvent,
  confirmEvent,
  cancelEvent,
  open,
  resetDragStyle,
  computedBoxStyle,
  handleHashChange
} from './index'
import type { IModalApi, IModalProps, IModalRenderlessParamUtils, ISharedRenderlessParamHooks } from '@/types'

export const api = [
  'state',
  'dragEvent',
  'mousedownEvent',
  'toggleZoomEvent',
  'revert',
  'maximize',
  'getBox',
  'close',
  'updateStyle',
  'selfClickEvent',
  'updateZindex',
  'closeEvent',
  'confirmEvent',
  'cancelEvent',
  'open',
  'beforeUnmouted',
  'resetDragStyle'
]

export const renderless = (
  props: IModalProps,
  { computed, onMounted, onBeforeUnmount, reactive, watch }: ISharedRenderlessParamHooks,
  { vm, emit, emitter, nextTick, broadcast, vm: parent }: IModalRenderlessParamUtils,
  { isMobileFirstMode }
) => {
  const api = {} as IModalApi
  const state = reactive({
    emitter: emitter(),
    visible: false,
    contentVisible: false,
    cumsumZindex: 0,
    modalTop: 0,
    modalZindex: 0,
    zoomLocat: null,
    isMsg: computed(() => api.computedIsMsg(props)),
    prevEvent: null,
    options: [],
    theme: props.tiny_theme,
    boxStyle: computed(() => api.computedBoxStyle())
  })

  Object.assign(api, {
    state,
    broadcast,
    computedIsMsg: computedIsMsg(),
    updateStyle: updateStyle({ nextTick, props }),
    getBox: getBox({ vm }),
    watchValue: watchValue(api),
    created: created({ api, props, state }),
    mounted: mounted({ api, parent, props, isMobileFirstMode }),
    beforeUnmouted: beforeUnmouted({ api, parent, isMobileFirstMode }),
    selfClickEvent: selfClickEvent({ api, parent, props }),
    updateZindex: updateZindex({ state, props }),
    handleEvent: handleEvent({ api, emit, parent, props, isMobileFirstMode }),
    closeEvent: closeEvent(api),
    confirmEvent: confirmEvent({ api, state }),
    cancelEvent: cancelEvent(api),
    open: open({ api, emit, nextTick, parent, props, state, isMobileFirstMode }),
    addMsgQueue: addMsgQueue({ api, parent }),
    removeMsgQueue: removeMsgQueue({ api, parent }),
    close: close({ emit, parent, props, state }),
    handleGlobalKeydownEvent: handleGlobalKeydownEvent(api),
    handleHashChange: handleHashChange(api),
    maximize: maximize({ api, nextTick, props, state, isMobileFirstMode }),
    revert: revert({ api, nextTick, state, isMobileFirstMode }),
    toggleZoomEvent: toggleZoomEvent({ api, emit, parent, state, isMobileFirstMode }),
    mousedownEvent: mousedownEvent({ api, nextTick, props, state, emit, isMobileFirstMode }),
    dragEvent: dragEvent({ api, emit, parent, props, state }),
    resetDragStyle: resetDragStyle(api),
    computedBoxStyle: computedBoxStyle({ props, isMobileFirstMode })
  })

  watch(() => props.modelValue, api.watchValue)

  api.created()

  onMounted(api.mounted)
  onBeforeUnmount(api.beforeUnmouted)

  return api
}
