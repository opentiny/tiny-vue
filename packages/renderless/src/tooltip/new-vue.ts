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

import { handlePopEvent, handleRefEvent, toggleShow } from './new-index'
import { userPopper, useTimer } from '@opentiny/vue-hooks'

export const api = ['state', 'handlePopEvent', 'handleRefEvent']

export const renderless = (
  props,
  { watch, toRefs, toRef, reactive, onBeforeUnmount, onDeactivated, onMounted, onUnmounted, inject },
  { vm, emit, slots, nextTick, parent }
) => {
  const api = {} as any

  const { showPopper, updatePopper, popperElm, referenceElm, doDestroy, popperJS } = userPopper({
    emit,
    props,
    nextTick,
    toRefs,
    reactive,
    parent: parent.$parent,
    vm,
    slots,
    onBeforeUnmount,
    onDeactivated,
    watch
  } as any)

  const state = reactive({
    showPopper,
    popperElm,
    referenceElm,
    showContent: inject('showContent', null),
    tipsMaxWidth: inject('tips-max-width', null)
  })

  const { start: delayShow, clear: cancelDelayShow } = useTimer(() => api.toggleShow(true), toRef(props, 'openDelay'))
  const { start: delayHide, clear: cancelDelayHide } = useTimer(() => api.toggleShow(false), toRef(props, 'closeDelay'))

  Object.assign(api, {
    state,
    delayShow,
    cancelDelayShow,
    delayHide,
    cancelDelayHide,
    handlePopEvent: handlePopEvent({ props, api }),
    handleRefEvent: handleRefEvent({ props, api }),
    toggleShow: toggleShow({ state, props, emit })
  })

  onMounted(() => {})

  vm.$on('tooltip-update', updatePopper())

  onUnmounted(() => {})

  return api
}
