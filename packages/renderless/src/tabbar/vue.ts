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

import { setActiveItem, onChange, getChildrens, getItems, beforeDestroy, initPage } from './index'
import { on } from '../common/deps/dom'

export const api = ['state', 'onChange', 'getChildrens']

export const renderless = (
  props,
  { computed, onMounted, reactive, watch, onBeforeUnmount },
  { vm, emit, nextTick, childrenHandler }
) => {
  const api = {}
  const state = reactive({
    height: null,
    children: [],
    fit: computed(() => (props.safeAreaInsetBottom ? props.safeAreaInsetBottom : props.fixed)),
    activeItem: false,
    showIndex: 0,
    showNumber: computed(() => (props.showNumber > 0 ? props.showNumber : -1)),
    tabbarWidth: null
  })

  Object.assign(api, {
    state,
    onChange: onChange({ emit, props }),
    parent: computed(() => api.getParent()),
    setActiveItem: setActiveItem({ props, state }),
    getChildrens: getChildrens({ childrenHandler, api }),
    getItems: getItems(state),
    beforeDestroy: beforeDestroy(api),
    initPage: initPage({ state, vm })
  })

  onMounted(() => {
    on(window, 'resize', api.initPage)

    state.tabbarWidth = vm.$refs && vm.$refs.tabbar.offsetWidth
    if (props.placeholder && props.fixed) {
      nextTick(() => {
        state.height = vm.$refs.tabbar.getBoundingClientRect().height
      })
    }
  })

  vm.$on('updateItems', api.getItems)
  vm.$on('activeItem', api.onChange)
  vm.$on('showIndex', () => {
    state.showIndex++
  })

  watch(
    () => props.modelValue,
    () => {
      setTimeout(() => {
        api.setActiveItem()
      }, 100)
    },
    { immediate: true }
  )

  watch(() => state.children, api.setActiveItem, { immediate: true })

  onBeforeUnmount(api.beforeDestroy)

  return api
}
