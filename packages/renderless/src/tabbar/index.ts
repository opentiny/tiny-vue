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

import { off } from '../common/deps/dom'

export const setActiveItem =
  ({ props, state }) =>
  () => {
    state.children.forEach((item, index) => {
      item.state ? (item.state.index = index) : (item.index = index)

      item.state && (item.state.active = (item.name || index) === props.modelValue)
    })
  }

export const onChange =
  ({ emit, props }) =>
  (active) => {
    if (active !== props.modelValue) {
      emit('update:modelValue', active)
      emit('change', active)
    }
  }

export const getChildrens =
  ({ childrenHandler, api }) =>
  () => {
    const $children = []

    childrenHandler(({ options, vm }) => {
      options.componentName === 'TabbarItem' && $children.push(vm)
    })
    api.setActiveItem()

    return $children
  }

export const getItems = (state) => (item) => {
  if (state.showIndex >= state.showNumber) {
    item.state.showVm = false
  }
  state.children.push(item)

  if (state.showNumber) {
    item.getTabbarItemsWidth(state.tabbarWidth, state.showNumber)
  } else if (state.children.length >= 5) {
    item.getTabbarItemsWidth(state.tabbarWidth, 5)
  } else {
    item.getTabbarItemsWidth(state.tabbarWidth, state.children.length)
  }
}

export const initPage =
  ({ vm, state }) =>
  () => {
    state.tabbarWidth = vm.$refs.tabbar && vm.$refs.tabbar.offsetWidth
    state.children.forEach((item) => {
      if (state.showNumber) {
        item.getTabbarItemsWidth(state.tabbarWidth, state.showNumber)
      } else if (state.children.length >= 5) {
        item.getTabbarItemsWidth(state.tabbarWidth, 5)
      } else {
        item.getTabbarItemsWidth(state.tabbarWidth, state.children.length)
      }
    })
  }

export const beforeDestroy = (api) => () => {
  off(window, 'resize', api.initPage)
}
