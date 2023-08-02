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
  toggleItem,
  updateOffset,
  clickOutside,
  getScroller,
  useVuePopper,
  mounted,
  handleMenuItemClick,
  handleMouseenter,
  handleMouseleave
} from './index'

export const api = [
  'state',
  'toggleItem',
  'updateOffset',
  'clickOutside',
  'doDestroy',
  'handleMouseenter',
  'handleMouseleave'
]

export const renderless = (props, hooks, instance) => {
  const api = {}
  const { reactive, provide, onMounted } = hooks
  const { nextTick, mode, vm, parent, dispatch, emit, refs } = instance
  const state = reactive({
    offset: 0,
    scroller: null,
    children: [],
    size: '',
    showPopper: false,
    label: '',
    showContent: false,
    selected: false,
    selectedIndex: -1
  })

  provide('dropdownMenu', vm)
  provide('multiStage', props.multiStage)

  if (mode === 'mobile') {
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
    updateOffset: updateOffset({ props, state, refs }),
    mounted: mounted({ api, parent, state }),
    handleMouseenter: handleMouseenter({ emit }),
    handleMouseleave: handleMouseleave({ emit }),
    handleMenuItemClick: handleMenuItemClick({ dispatch, state })
  })

  onMounted(api.mounted)

  return api
}
