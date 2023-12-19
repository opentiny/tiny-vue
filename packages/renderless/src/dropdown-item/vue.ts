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

import type {
  IDropdownItemState,
  IDropdownItemApi,
  IDropdownItemProps,
  IDropdownItemRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  IDropdownMenuVm
} from '@/types'
import {
  tagClick,
  confirm,
  clickOutside,
  getOptionStyle,
  reset,
  getTitle,
  bindScroll,
  toggle,
  onScroll,
  open,
  opened,
  close,
  closed,
  clickItem,
  clickWrapper,
  getItemStyle,
  handleClick,
  computedGetIcon,
  getTip
} from './index'

export const api = [
  'state',
  'confirm',
  'clickOutside',
  'getOptionStyle',
  'reset',
  'tagClick',
  'clickItem',
  'clickWrapper',
  'toggle',
  'open',
  'opened',
  'close',
  'closed',
  'handleClick',
  'getTip'
]

const initState = ({ reactive, computed, api, props, parent, dropdownMenuVm }) => {
  const state: IDropdownItemState = reactive({
    sort: props.modelValue,
    transition: true,
    getTitle: false,
    showWrapper: false,
    showPopup: false,
    duration: parent.duration,
    overlay: computed(() => parent.overlay),
    offset: computed(() => parent.state.offset),
    direction: computed(() => parent.direction),
    displayTitle: computed(() => api.getTitle()),
    itemStyle: computed(() => api.getItemStyle()),
    activeColor: computed(() => parent.activeColor),
    closeOnClickOverlay: computed(() => parent.closeOnClickOverlay),
    textField: dropdownMenuVm?.textField || props.textField,
    popperClass: dropdownMenuVm?.popperClass || '',
    getIcon: computed(() => api.computedGetIcon())
  })

  return state
}

const initApi = ({ api, state, emit, props, parent, dispatch, vm, constants, designConfig }) => {
  Object.assign(api, {
    state,
    open: open(emit),
    opened: opened(emit),
    close: close(emit),
    getTitle: getTitle(props),
    onScroll: onScroll(parent),
    reset: reset({ emit, props }),
    closed: closed({ emit, state }),
    clickWrapper: clickWrapper(parent),
    clickOutside: clickOutside(parent),
    tagClick: tagClick({ emit, props }),
    getOptionStyle: getOptionStyle(state),
    toggle: toggle({ parent, props, state }),
    clickItem: clickItem({ emit, props, state }),
    getItemStyle: getItemStyle({ parent, state }),
    bindScroll: bindScroll({ api, parent }),
    confirm: confirm({ emit, props, state }),
    handleClick: handleClick({ props, dispatch, vm, emit }),
    computedGetIcon: computedGetIcon({ constants, designConfig }),
    getTip: getTip({ props, vm })
  })
}

export const renderless = (
  props: IDropdownItemProps,
  { computed, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { parent, emit, vm, dispatch, mode, constants, designConfig }: IDropdownItemRenderlessParamUtils
): IDropdownItemApi => {
  const api = {} as IDropdownItemApi
  const dropdownMenuVm = inject('dropdownMenuVm', null) as IDropdownMenuVm

  if (mode === 'mobile' && dropdownMenuVm) {
    dropdownMenuVm.state.children = [...dropdownMenuVm.state.children, vm]
  }
  parent = parent.$parent

  const state: IDropdownItemState = initState({ reactive, computed, api, props, parent, dropdownMenuVm })

  initApi({ api, state, emit, props, parent, dispatch, vm, constants, designConfig })

  watch(() => state.showPopup, api.bindScroll)

  return api
}
