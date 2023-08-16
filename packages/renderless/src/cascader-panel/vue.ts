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
  initStore,
  checkNode,
  getMenuIndex,
  isLeaf,
  focusNode,
  getCheckedNodes,
  clearCheckedNodes,
  getFlattedNodes,
  getNodeByValue,
  scrollIntoView,
  calculateMultiCheckedValue,
  lazyLoad,
  handleCheckChange,
  handleExpand,
  handleKeyDown,
  calculateCheckedNodePaths,
  expandNodes,
  syncActivePath,
  watchCheckedValue,
  syncCheckedValue,
  syncMenuState,
  syncMultiCheckState
} from './index'
import { merge } from '../common/object'
import { isEmpty } from '../cascader'
import Store from './store.js'

export const api = [
  'state',
  'handleKeyDown',
  'getCheckedNodes',
  'clearCheckedNodes',
  'scrollIntoView',
  'handleExpand',
  'handleCheckChange',
  'getNodeByValue',
  'calculateMultiCheckedValue',
  'lazyLoad',
  'getFlattedNodes'
]

const initDefaultProps = () => ({
  expandTrigger: 'click',
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: () => undefined,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500
})

const initState = ({ reactive, props, computed, parent, slots }) => {
  const DefaultProps = initDefaultProps()

  const state = reactive({
    checkedValue: null,
    checkedNodePaths: [],
    store: [],
    menus: [],
    activePath: [],
    loadCount: 0,
    config: computed(() => merge({ ...DefaultProps }, props.props || {})),
    multiple: computed(() => state.config.multiple),
    checkStrictly: computed(() => state.config.checkStrictly),
    leafOnly: computed(() => !state.checkStrictly),
    isHoverMenu: computed(() => state.config.expandTrigger === 'hover'),
    renderLabelFn: computed(
      () =>
        props.renderLabel ||
        slots.default ||
        (parent.$parent?.$options.componentName === 'TinyCascader' && parent.$parent.$scopedSlots.default)
    )
  })

  return state
}

const initApi = ({ api, state, menus, props, nextTick, parent, emit }) => {
  Object.assign(api, {
    state,
    isLeaf: isLeaf(),
    getMenuIndex: getMenuIndex(),
    getNodeByValue: getNodeByValue(state),
    getFlattedNodes: getFlattedNodes(state),
    handleCheckChange: handleCheckChange(state),
    scrollIntoView: scrollIntoView({ menus }),
    syncActivePath: syncActivePath({ api, state }),
    initStore: initStore({ api, props, state, Store }),
    syncMenuState: syncMenuState({ api, nextTick, state }),
    syncMultiCheckState: syncMultiCheckState({ api, state }),
    calculateCheckedNodePaths: calculateCheckedNodePaths({ api, state }),
    lazyLoad: lazyLoad({ api, $parent: parent, state, Store }),
    syncCheckedValue: syncCheckedValue({ api, props, state }),
    focusNode: focusNode(api),
    checkNode: checkNode(api),
    expandNodes: expandNodes(api),
    handleExpand: handleExpand({ emit, state }),
    getCheckedNodes: getCheckedNodes({ api, state }),
    clearCheckedNodes: clearCheckedNodes({ api, state }),
    calculateMultiCheckedValue: calculateMultiCheckedValue({ api, state }),
    watchCheckedValue: watchCheckedValue({ api, emit, props, state }),
    handleKeyDown: handleKeyDown({ api, emit, menus })
  })
}

const initWatch = ({ watch, state, props, api }) => {
  watch(
    () => props.options,
    () => api.initStore(),
    { deep: true, immediate: true }
  )

  watch(
    () => props.modelValue,
    () => {
      api.syncCheckedValue()
      state.checkStrictly && api.calculateCheckedNodePaths()
    }
  )

  watch(
    () => state.checkedValue,
    (value) => {
      api.watchCheckedValue(value)
    },
    { deep: true }
  )
}

export const renderless = (
  props,
  { computed, onMounted, reactive, watch },
  { nextTick, emit, parent, childrenHandler, slots }
) => {
  const api = {}
  const menus = []
  const state = initState({ reactive, props, computed, parent, slots })

  childrenHandler(({ vm }) => {
    menus.push(vm)
  })

  initApi({ api, state, menus, props, nextTick, parent, emit })

  initWatch({ watch, state, props, api })

  onMounted(() => !isEmpty(props.modelValue) && api.syncCheckedValue())

  return api
}
