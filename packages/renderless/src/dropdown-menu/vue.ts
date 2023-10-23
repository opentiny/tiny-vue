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
  IDropdownVm,
  IDropdownMenuState,
  IDropdownMenuApi,
  IDropdownMenuProps,
  IDropdownMenuRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
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

export const renderless = (
  props: IDropdownMenuProps,
  hooks: ISharedRenderlessParamHooks,
  instance: IDropdownMenuRenderlessParamUtils
): IDropdownMenuApi => {
  const api = {} as IDropdownMenuApi
  const { reactive, provide, onMounted, inject } = hooks
  const { nextTick, mode, vm, parent, dispatch, emit } = instance

  const state: IDropdownMenuState = reactive({
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

  provide('dropdownMenuVm', vm)
  provide('multiStage', props.multiStage)
  const dropdownVm: IDropdownVm = inject('dropdownVm')

  if (mode === 'mobile') {
    nextTick(() => {
      state.scroller = getScroller(vm.$refs.menu as HTMLElement)
    })
  } else {
    useVuePopper({ api, hooks, props, instance, state, dropdownVm })
  }

  Object.assign(api, {
    state,
    toggleItem: toggleItem(state),
    clickOutside: clickOutside({ props, state }),
    updateOffset: updateOffset({ props, state, vm }),
    mounted: mounted({ api, parent, state }),
    handleMouseenter: handleMouseenter(emit),
    handleMouseleave: handleMouseleave(emit),
    handleMenuItemClick: handleMenuItemClick({ dispatch, state })
  })

  onMounted(api.mounted)

  return api
}
