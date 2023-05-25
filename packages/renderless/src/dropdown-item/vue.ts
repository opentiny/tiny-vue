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
  computedGetIcon
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
  'handleClick'
]

const initState = ({ reactive, computed, api, props, parent, dropdownMenu }) => {
  const state = reactive({
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
    children: [],
    textField: dropdownMenu?.textField || props.textField,
    popperClass: dropdownMenu?.popperClass || '',
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
    computedGetIcon: computedGetIcon({ constants, designConfig })
  })
}

export const renderless = (
  props,
  { computed, reactive, watch, inject },
  { parent, emit, vm, dispatch, mode, constants, designConfig }
) => {
  const api = {}
  const dropdownMenu = inject('dropdownMenu', null)

  if (mode === 'mobile') {
    dropdownMenu.state.children = [...dropdownMenu.state.children, vm]
  }
  parent = parent.$parent

  const state = initState({ reactive, computed, api, props, parent, dropdownMenu })

  initApi({ api, state, emit, props, parent, dispatch, vm, constants, designConfig })

  watch(() => state.showPopup, api.bindScroll)

  return api
}
