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

import debounce from '../common/deps/debounce'
import {
  computedShowEmptyText,
  closeMenu,
  setChildren,
  getChildren,
  computedTreeItemArray,
  computedIsEmpty,
  watchDefaultCheckedKeys,
  watchDefaultExpandedKeys,
  watchData,
  watchCheckboxItems,
  watchCheckStrictly,
  created,
  mounted,
  updated,
  filter,
  getNode,
  remove,
  append,
  getNodeKey,
  getNodePath,
  getHalfCheckedNodes,
  getHalfCheckedKeys,
  getCheckedNodes,
  getCheckedKeys,
  getCurrentNode,
  getCurrentKey,
  setCheckedNodes,
  setCheckedKeys,
  setChecked,
  setCurrentNode,
  setCurrentKey,
  insertBefore,
  insertAfter,
  handleNodeExpand,
  updateKeyChildren,
  initTabIndex,
  handleKeydown,
  setCurrentRadio,
  expandAllNodes,
  dragStart,
  dragOver,
  dragEnd,
  clearCurrentStore,
  initIsCurrent,
  beforeUnmount,
  wrapMounted,
  switchToggle,
  initTreeStore,
  getSameDataIndex,
  loopGetTreeData,
  cancelDelete,
  deleteAction,
  deleteConfirm,
  openEdit,
  saveNode,
  addNode,
  editNode,
  closeEdit,
  saveEdit,
  setAddDisabledKeys,
  setEditDisabledKeys,
  setDeleteDisabledKeys,
  initPlainNodeStore,
  handleCheckPlainNode,
  handleClickPlainNode,
  setCheckedByNodeKey,
  computedFlattenedTreeData
} from './index'
import { random } from '../common/string'

export const api = [
  'state',
  'closeMenu',
  'filter',
  'getNodeKey',
  'getNodePath',
  'getCheckedNodes',
  'getCheckedKeys',
  'getCurrentNode',
  'getCurrentKey',
  'setCheckedNodes',
  'setCheckedKeys',
  'setChecked',
  'getHalfCheckedNodes',
  'getHalfCheckedKeys',
  'setCurrentNode',
  'setCurrentKey',
  'getNode',
  'remove',
  'append',
  'insertBefore',
  'insertAfter',
  'handleNodeExpand',
  'updateKeyChildren',
  'initTabIndex',
  'handleKeydown',
  'setCurrentRadio',
  'expandAllNodes',
  'clearCurrentStore',
  'switchToggle',
  'initTreeStore',
  'getSameDataIndex',
  'loopGetTreeData',
  'cancelDelete',
  'deleteAction',
  'deleteConfirm',
  'openEdit',
  'saveNode',
  'addNode',
  'editNode',
  'closeEdit',
  'saveEdit',
  'setAddDisabledKeys',
  'setEditDisabledKeys',
  'setDeleteDisabledKeys',
  'handleCheckPlainNode',
  'handleClickPlainNode',
  'setCheckedByNodeKey',
  'computedFlattenedTreeData',
  'updateFlattenedTreeData'
]

const initState = ({ reactive, emitter, props, computed, api }) => {
  const state = reactive({
    flattenedTreeData: [],
    loaded: !props.lazy,
    checkEasily: false,
    root: null,
    store: null,
    treeItems: null,
    currentNode: null,
    checkboxItems: [],
    isEmpty: computed(() => api.computedIsEmpty(props, state)),
    emitter: emitter(),
    expandIcon: props.expandIcon,
    shrinkIcon: props.shrinkIcon,
    expandIconColor: props.expandIconColor,
    shrinkIconColor: props.shrinkIconColor,
    dragState: { showDropIndicator: false, draggingNode: null, dropNode: null, allowDrop: true },
    currentRadio: { value: null },
    children: computed({
      get: () => api.getChildren(props, state),
      set: (data) => api.setChildren(data)
    }),
    treeItemArray: computed(() => api.computedTreeItemArray(props, state)),
    showEmptyText: computed(() => api.computedShowEmptyText(props, state)),
    currentStore: { flag: false, node: null },
    action: {
      deleteDisabled: [],
      editDisabled: [],
      addDisabled: [],
      show: false,
      node: null,
      data: [],
      label: '',
      type: '',
      isLeaf: false,
      isSaveChildNode: false,
      referenceElm: null,
      popoverVisible: false
    },
    treeEdit: {
      addData: [],
      deleteData: [],
      editData: []
    },
    newNodeId: Math.floor(random() * 10000),
    plainNodeStore: {},
    allNodeKeys: []
  })

  return state
}

const initApi = ({ state, dispatch, broadcast, props, vm, constants, t, emit, api }) => {
  const callFlattened =
    (func: (...psa: any[]) => (...psb: any[]) => any, ...psa) =>
    (...params: any[]) => {
      try {
        return func(...psa)(...params)
      } finally {
        state.flattenedTreeData = computedFlattenedTreeData()(props, state)
      }
    }
  return {
    state,
    dispatch,
    broadcast,
    setChildren: setChildren(props),
    getChildren: getChildren(),
    computedTreeItemArray: computedTreeItemArray(),
    computedIsEmpty: computedIsEmpty(),
    watchDefaultCheckedKeys: watchDefaultCheckedKeys(state),
    watchData: watchData({ state }),
    watchCheckboxItems: watchCheckboxItems(),
    watchCheckStrictly: watchCheckStrictly(state),
    updated: updated({ vm, state }),
    filter: filter({ props, state, api }),
    getNodeKey: getNodeKey(props),
    getNodePath: getNodePath({ props, state }),
    getCheckedNodes: getCheckedNodes(state),
    getCheckedKeys: getCheckedKeys(state),
    getCurrentNode: getCurrentNode(state),
    setCheckedNodes: setCheckedNodes({ props, state }),
    setCheckedKeys: setCheckedKeys({ props, state, api }),
    setChecked: setChecked(state),
    getHalfCheckedNodes: getHalfCheckedNodes(state),
    getHalfCheckedKeys: getHalfCheckedKeys(state),
    setCurrentNode: setCurrentNode({ props, state }),
    setCurrentKey: setCurrentKey({ props, state }),
    getNode: getNode(state),
    remove: callFlattened(remove, state),
    append: callFlattened(append, state),
    insertBefore: callFlattened(insertBefore, state),
    insertAfter: callFlattened(insertAfter, state),
    updateKeyChildren: callFlattened(updateKeyChildren, { props, state }),
    initTabIndex: initTabIndex({ vm, state }),
    handleKeydown: handleKeydown({ vm, state }),
    computedShowEmptyText: computedShowEmptyText({ constants, t }),
    setCurrentRadio: setCurrentRadio({ props, state }),
    expandAllNodes: expandAllNodes({ state }),
    dragStart: callFlattened(dragStart, { props, state, emit }),
    dragOver: callFlattened(dragOver, { props, state, emit, vm }),
    dragEnd: callFlattened(dragEnd, { state, emit }),
    clearCurrentStore: clearCurrentStore(state),
    initIsCurrent: debounce(20, initIsCurrent({ props, state })),
    setCheckedByNodeKey: setCheckedByNodeKey({ props, state }),
    computedFlattenedTreeData: computedFlattenedTreeData()
  }
}

const initWatcher = ({ watch, props, api, state, isVue2 }) => {
  watch(() => props.defaultCheckedKeys, api.watchDefaultCheckedKeys)

  watch(() => props.defaultExpandedKeys, api.watchDefaultExpandedKeys)

  watch(() => props.defaultExpandedKeysHighlight, api.initIsCurrent)

  watch(() => props.data, api.watchData, { deep: !isVue2 })

  watch(() => props.checkboxItems, api.watchCheckboxItems)

  watch(() => props.checkStrictly, api.watchCheckStrictly)

  watch(() => props.defaultCheckedKeys, api.setCurrentRadio, { immediate: true })

  watch(
    () => props.deleteDisabledKeys,
    (value) => (state.action.deleteDisabled = value || []),
    { immediate: true }
  )
  watch(
    () => props.editDisabledKeys,
    (value) => (state.action.editDisabled = value || []),
    { immediate: true }
  )
  watch(
    () => props.addDisabledKeys,
    (value) => (state.action.addDisabled = value || []),
    { immediate: true }
  )

  watch(
    () => state.flattenedTreeData.filter((n) => n.expanded).length,
    (v, oldV) => {
      if (oldV?.length && v?.filter((n) => n.expanded) === oldV?.filter((n) => n.expanded)) return
    },
    { deep: true }
  )
}

export const renderless = (
  props,
  { computed, onMounted, onUpdated, reactive, watch, provide, onBeforeUnmount, ref },
  { vm, t, emit, constants, broadcast, dispatch, service, emitter, nextTick },
  { isVue2 }
) => {
  const api = {}
  const state = initState({ reactive, emitter, props, computed, api })
  const scrollRef = ref(null)
  provide('parentEmitter', state.emitter)

  Object.assign(api, initApi({ state, dispatch, broadcast, props, vm, constants, t, emit, api }), {
    closeMenu: closeMenu(state),
    mounted: mounted({ api, vm }),
    created: created({ api, props, state }),
    getCurrentKey: getCurrentKey({ api, props }),
    handleNodeExpand: handleNodeExpand(emit),
    beforeUnmount: beforeUnmount({ api, vm, state }),
    wrapMounted: wrapMounted({ api, props, service }),
    initTreeStore: initTreeStore({ api, props, state, emit }),
    deleteAction: deleteAction({ state, api, emit }),
    deleteConfirm: deleteConfirm({ state, props, api }),
    getSameDataIndex,
    loopGetTreeData,
    scrollRef,
    cancelDelete: cancelDelete({ state }),
    openEdit: openEdit({ props, state, api, emit }),
    saveNode: saveNode({ state, emit, api }),
    addNode: addNode({ api, props, state }),
    editNode: editNode({ state }),
    closeEdit: closeEdit({ props, state, api, emit }),
    saveEdit: saveEdit({ props, state, emit }),
    setAddDisabledKeys: setAddDisabledKeys({ state }),
    setEditDisabledKeys: setEditDisabledKeys({ state }),
    setDeleteDisabledKeys: setDeleteDisabledKeys({ state }),
    watchDefaultExpandedKeys: watchDefaultExpandedKeys({ state, api, nextTick }),
    switchToggle: switchToggle({ state }),
    initPlainNodeStore: initPlainNodeStore({ props, state }),
    handleCheckPlainNode: handleCheckPlainNode({ props, emit }),
    handleClickPlainNode: handleClickPlainNode(emit),
    updateFlattenedTreeData: (data, node, vm) => {
      state.flattenedTreeData = api.computedFlattenedTreeData(props, state)
    }
  })
  api.created()
  state.flattenedTreeData = api.computedFlattenedTreeData(props, state)
  initWatcher({ watch, props, api, state, isVue2 })

  onMounted(() => {
    api.wrapMounted()
  })

  onUpdated(api.updated)

  onBeforeUnmount(api.beforeUnmount)

  return api
}
