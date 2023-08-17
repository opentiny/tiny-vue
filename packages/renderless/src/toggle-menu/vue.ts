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
  computedPlaceholder,
  hideNodeText,
  filterNode,
  searchNodeText,
  nodeClick,
  nodeExpand,
  nodeCollapse,
  nodeDragEnd,
  nodeDragEnter,
  nodeDragLeave,
  nodeDragOver,
  nodeDragStart,
  nodeDrop,
  clickA
} from './index'
import { setMenuKey } from '../tree-menu'

export const api = [
  'state',
  'setMenuKey',
  'initData',
  'hideNodeText',
  'filterNode',
  'searchNodeText',
  'nodeClick',
  'nodeExpand',
  'nodeCollapse',
  'nodeDragEnd',
  'nodeDragEnter',
  'nodeDragLeave',
  'nodeDragOver',
  'nodeDragStart',
  'nodeDrop',
  'clickA'
]

export const renderless = (
  props,
  { reactive, watch, computed, onMounted },
  { t, service, nextTick, constants, emit, refs }
) => {
  const api = {}

  const state = reactive({
    datas: [],
    toggleIcon: true,
    showNode: true,
    filterText: '',
    placeholder: computed(() => api.computedPlaceholder())
  })

  service = service || { base: {} }
  service = {
    getMenuDataSync: props.getMenuDataSync || service.base.getMenuDataSync, // deprecated v3.4.0废弃, v3.16.0移除；移除原因：如果是同步数据则和:data功能重复
    getMenuDataAsync: props.getMenuDataAsync
  }

  Object.assign(api, {
    state,
    clickA,
    nodeDrop: nodeDrop(emit),
    filterNode: filterNode(props),
    nodeClick: nodeClick(emit),
    nodeExpand: nodeExpand(emit),
    nodeDragEnd: nodeDragEnd(emit),
    hideNodeText: hideNodeText(state),
    nodeDragOver: nodeDragOver(emit),
    nodeCollapse: nodeCollapse(emit),
    nodeDragStart: nodeDragStart(emit),
    nodeDragLeave: nodeDragLeave(emit),
    nodeDragEnter: nodeDragEnter(emit),
    searchNodeText: searchNodeText({ state, refs, nextTick }),
    computedPlaceholder: computedPlaceholder({ constants, props, t }),
    setMenuKey: setMenuKey(api),
    initData: initData({ state, props, service, api })
  })

  watch(
    () => state.filterText,
    (value) => {
      if (props.automaticFiltering) {
        nextTick(() => refs.tree.filter(value))
      }
    }
  )

  onMounted(api.initData)

  return api
}
