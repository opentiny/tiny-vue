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
  beforeDistory
} from './index'

export const api = ['state', 'handleMainButtonClick', 'hide', 'show', 'initDomOperation', 'handleClick']

export const renderless = (
  props,
  { reactive, watch, provide, onMounted },
  { emit, parent, broadcast, vm, nextTick, designConfig }
) => {
  const api = {}
  const state = reactive({
    visible: false,
    timeout: null,
    focusing: false,
    menuItems: null,
    menuItemsArray: null,
    triggerElm: null,
    dropdownElm: null,
    listId: `dropdown-menu-${guid()}`,
    designConfig
  })

  provide('dropdown', vm)

  Object.assign(api, {
    state,
    watchVisible: watchVisible({ broadcast, emit, nextTick }),
    watchFocusing: watchFocusing({ parent }),
    show: show({ props, state }),
    hide: hide({ api, props, state }),
    mounted: mounted({ api, vm }),
    handleClick: handleClick({ api, props, state, emit }),
    handleTriggerKeyDown: handleTriggerKeyDown({ api, state }),
    handleItemKeyDown: handleItemKeyDown({ api, props, state }),
    resetTabindex: resetTabindex({ api }),
    removeTabindex: removeTabindex({ state }),
    initAria: initAria({ state, props }),
    initEvent: initEvent({ api, props, state, vm }),
    handleMenuItemClick: handleMenuItemClick({ props, state, emit }),
    handleMainButtonClick: handleMainButtonClick({ api, emit }),
    triggerElmFocus: triggerElmFocus({ state }),
    initDomOperation: initDomOperation({ api, state, vm }),
    beforeDistory: beforeDistory({ api, state })
  })

  watch(() => state.visible, api.watchVisible)
  watch(() => state.focusing, api.watchFocusing)

  onMounted(api.mounted)

  return api
}
