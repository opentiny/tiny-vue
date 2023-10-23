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

import { guid } from '../common/string'
import {
  IDropdownState,
  IDropdownApi,
  IDropdownProps,
  IDropdownRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'
import {
  watchVisible,
  watchFocusing,
  show,
  hide,
  handleClick,
  handleTriggerKeyDown,
  handleItemKeyDown,
  resetTabindex,
  removeTabindex,
  initAria,
  initEvent,
  handleMenuItemClick,
  handleMainButtonClick,
  triggerElmFocus,
  initDomOperation,
  mounted,
  beforeDistory,
  clickOutside
} from './index'

export const api = ['state', 'handleMainButtonClick', 'hide', 'show', 'initDomOperation', 'handleClick', 'clickOutside']

export const renderless = (
  props: IDropdownProps,
  { reactive, watch, provide, onMounted }: ISharedRenderlessParamHooks,
  { emit, parent, broadcast, vm, nextTick, mode, designConfig }: IDropdownRenderlessParamUtils
): IDropdownApi => {
  const api = {} as IDropdownApi
  const state: IDropdownState = reactive({
    visible: false,
    timeout: null,
    focusing: false,
    menuItems: [],
    menuItemsArray: [],
    triggerElm: null,
    dropdownElm: null,
    listId: `dropdown-menu-${guid()}`,
    showIcon: props.showIcon,
    showSelfIcon: props.showSelfIcon,
    designConfig
  })

  provide('dropdownVm', vm)

  Object.assign(api, {
    state,
    watchVisible: watchVisible({ broadcast, emit, nextTick }),
    watchFocusing: watchFocusing(parent),
    show: show({ props, state }),
    hide: hide({ api, props, state }),
    mounted: mounted({ api, vm, state, broadcast }),
    handleClick: handleClick({ api, props, state, emit }),
    handleTriggerKeyDown: handleTriggerKeyDown({ api, state }),
    handleItemKeyDown: handleItemKeyDown({ api, props, state }),
    resetTabindex: resetTabindex(api),
    removeTabindex: removeTabindex(state),
    initAria: initAria({ state, props }),
    initEvent: initEvent({ api, props, state, vm, mode }),
    handleMenuItemClick: handleMenuItemClick({ props, state, emit }),
    handleMainButtonClick: handleMainButtonClick({ api, emit }),
    triggerElmFocus: triggerElmFocus(state),
    initDomOperation: initDomOperation({ api, state, vm }),
    beforeDistory: beforeDistory({ api, state }),
    clickOutside: clickOutside({ state, props, api })
  })

  watch(() => state.visible, api.watchVisible)
  watch(() => state.focusing, api.watchFocusing)

  onMounted(api.mounted)

  return api
}
