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

import { toggleItem, updateOffset, clickOutside, getScroller, useVuePopper } from './index'

export const api = ['state', 'toggleItem', 'updateOffset', 'clickOutside', 'doDestroy']

export const renderless = (props, hooks, instance) => {
  const api = {}
  const { reactive, provide } = hooks
  const { refs, nextTick, mode, vm } = instance
  const state = reactive({
    offset: 0,
    scroller: null,
    children: [],
    size: '',
    showPopper: false
  })

  if (mode === 'mobile') {
    provide('dropdownMenu', vm)
    nextTick(() => {
      state.scroller = getScroller(refs.menu)
    })
  } else {
    useVuePopper({ api, hooks, props, instance, state })
  }

  Object.assign(api, {
    state,
    toggleItem: toggleItem(state),
    clickOutside: clickOutside({ props, refs, state }),
    updateOffset: updateOffset({ props, state, refs })
  })

  return api
}
