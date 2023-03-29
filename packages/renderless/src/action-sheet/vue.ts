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

import { setSheetStyle, initScrollMenu, visibleHandle, watchVisible, menuHandle } from './index'

export const api = ['state', 'setSheetStyle', 'initScrollMenu', 'visibleHandle', 'menuHandle']

export const renderless = (props, { reactive, watch }, { emit, nextTick, refs }, { BScroll }) => {
  const api = {}
  const state = reactive({
    toggle: false,
    active: null,
    sheetMaskStyle: {},
    sheetContentStyle: {},
    scroll: null,
  })

  watch(() => props.visible,
    (value) => {
      if (value) {
        api.setSheetStyle({ state, props })
        api.initScrollMenu({ state, nextTick, refs, BScroll })
      }
      api.watchVisible(value)
    },
  )

  Object.assign(api, {
    state,
    setSheetStyle: setSheetStyle({ state, props }),
    initScrollMenu: initScrollMenu({ state, nextTick, refs, BScroll }),
    visibleHandle: visibleHandle({ emit, state }),
    watchVisible: watchVisible({ emit, props, state }),
    menuHandle: menuHandle({ state, emit }),
  })

  return api
}
