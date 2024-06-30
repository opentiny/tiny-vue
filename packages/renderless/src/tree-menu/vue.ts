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
  initData,
  setMenuKey,
  filterNode,
  watchFilterText,
  nodeDragStart,
  nodeDragEnter,
  nodeDragOver,
  nodeDragEnd,
  nodeDrop,
  nodeExpand,
  nodeCollapse,
  nodeClick,
  checkChange,
  check,
  currentChange,
  getTitle,
  collapseChange,
  collapseMenu,
  expandMenu,
  setCurrentKey,
  getCurrentKey,
  setCurrentNode,
  getCurrentNode,
  handleToggleMenu,
  computedTreeStyle
} from './index'
import type {
  ISharedRenderlessParamUtils,
  ISharedRenderlessFunctionParams,
  ITreeMenuProps,
  ITreeMenuState,
  ITreeMenuApi
} from '@/types'

export const api = [
  'state',
  't',
  'initData',
  'setMenuKey',
  'filterNode',
  'nodeDragStart',
  'nodeDragEnter',
  'nodeDragOver',
  'nodeDragEnd',
  'nodeDrop',
  'nodeExpand',
  'nodeCollapse',
  'nodeClick',
  'checkChange',
  'check',
  'currentChange',
  'getTitle',
  'collapseChange',
  'collapseMenu',
  'expandMenu',
  'setCurrentKey',
  'getCurrentKey',
  'setCurrentNode',
  'getCurrentNode',
  'handleToggleMenu'
]

export const renderless = (
  props: ITreeMenuProps,
  { computed, watch, reactive, onMounted }: ISharedRenderlessFunctionParams,
  { t, service, emit, vm }: ISharedRenderlessParamUtils
) => {
  service = service || { base: {} }
  service = { getMenuDataSync: props.getMenuDataSync || service.base.getMenuDataSync }
  const api: Partial<ITreeMenuApi> = {}
  const state = reactive<ITreeMenuState>({
    data: [],
    filterText: '',
    isExpand: false,
    isCollapsed: false,
    nodeKey: null,
    currentKey: [],
    treeStyle: computed(() => api.computedTreeStyle()),
    defaultExpandedKeys: computed(() =>
      props.defaultExpandedKeys && props.defaultExpandedKeys.length ? props.defaultExpandedKeys : state.currentKey
    ),
    clearable: computed(() => props.clearable)
  })

  Object.assign(api, {
    t,
    state,
    check: check(emit),
    filterNode: filterNode(props),
    nodeDrop: nodeDrop(emit),
    nodeClick: nodeClick({ emit, props, state }),
    nodeExpand: nodeExpand(emit),
    nodeDragEnd: nodeDragEnd(emit),
    checkChange: checkChange(emit),
    nodeCollapse: nodeCollapse(emit),
    nodeDragOver: nodeDragOver(emit),
    nodeDragStart: nodeDragStart(emit),
    nodeDragEnter: nodeDragEnter(emit),
    currentChange: currentChange(emit),
    watchFilterText: watchFilterText({ vm }),
    getTitle: getTitle(props),
    setMenuKey: setMenuKey(api as ITreeMenuApi),
    initData: initData({ state, props, service, api: api as ITreeMenuApi }),
    collapseChange: collapseChange({ state, props, emit }),
    collapseMenu: collapseMenu({ state, props, api }),
    expandMenu: expandMenu({ state, props, api: api as ITreeMenuApi }),
    setCurrentKey: setCurrentKey({ vm }),
    getCurrentKey: getCurrentKey({ vm }),
    setCurrentNode: setCurrentNode({ vm }),
    getCurrentNode: getCurrentNode({ vm }),
    handleToggleMenu: handleToggleMenu({ state, vm }),
    computedTreeStyle: computedTreeStyle({ props })
  })

  watch(
    () => props.data,
    (value) => (state.data = value),
    { immediate: true }
  )

  watch(() => state.filterText, (api as ITreeMenuApi).watchFilterText, { deep: true })

  onMounted((api as ITreeMenuApi).initData)

  return api as ITreeMenuApi
}
