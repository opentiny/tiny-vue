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

import sf from '../common/deps/fullscreen/screenfull'
import {
  exit,
  enter,
  toggle,
  request,
  getState,
  shadeClick,
  keypressCallback,
  fullScreenCallback,
  onChangeFullscreen,
  computeWrapperStyle
} from './index'

export const api = [
  'state',
  'exit',
  'enter',
  'toggle',
  'request',
  'getState',
  'shadeClick',
  'keypressCallback',
  'fullScreenCallback',
  'onChangeFullscreen'
]

export const renderless = (props, { reactive, computed, watch }, { vm, emit }) => {
  const api = {}

  const state = reactive({
    isFullscreen: false,
    isEnabled: false,
    support: computed(() => state.isEnabled),
    // 如果不支持浏览器全屏，改用网页全屏
    isPageOnly: computed(() => props.pageOnly || !sf.isEnabled),
    wrapperStyle: computed(() => api.computeWrapperStyle())
  })

  Object.assign(api, {
    state,
    getState: getState(state),
    enter: enter(api),
    exit: exit({ state, api, sf, props }),
    toggle: toggle({ state, api }),
    keypressCallback: keypressCallback(api),
    shadeClick: shadeClick({ props, vm, api }),
    request: request({ props, state, vm, sf, api }),
    fullScreenCallback: fullScreenCallback({ state, sf, api }),
    computeWrapperStyle: computeWrapperStyle({ props, state }),
    onChangeFullscreen: onChangeFullscreen({ props, state, vm, emit })
  })

  watch(
    () => props.fullscreen,
    (value) => {
      if (value !== state.isFullscreen) {
        value ? api.request() : api.exit()
      }
    },
    { lazy: true }
  )

  state.isEnabled = sf.isEnabled

  return api
}
