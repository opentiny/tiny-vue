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
  getTitle
} from './index'

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
  'getTitle'
]

export const renderless = (props, { watch, reactive, onMounted }, { t, service, refs, emit }) => {
  service = service || { base: {} }
  service = { getMenuDataSync: props.getMenuDataSync || service.base.getMenuDataSync }

  const state = reactive({
    data: [],
    filterText: ''
  })

  Object.assign(api, {
    t,
    state,
    check: check(emit),
    filterNode: filterNode(),
    nodeDrop: nodeDrop(emit),
    nodeClick: nodeClick(emit),
    nodeExpand: nodeExpand(emit),
    nodeDragEnd: nodeDragEnd(emit),
    checkChange: checkChange(emit),
    nodeCollapse: nodeCollapse(emit),
    nodeDragOver: nodeDragOver(emit),
    nodeDragStart: nodeDragStart(emit),
    nodeDragEnter: nodeDragEnter(emit),
    currentChange: currentChange(emit),
    watchFilterText: watchFilterText(refs),
    getTitle: getTitle(props),
    setMenuKey: setMenuKey(api),
    initData: initData({ state, props, service, api })
  })

  watch(
    () => props.data,
    (value) => (state.data = value),
    { immediate: true }
  )

  watch(() => state.filterText, api.watchFilterText, { deep: true })

  onMounted(api.initData)

  return api
}
