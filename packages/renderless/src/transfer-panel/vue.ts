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
  getStrictData,
  sizesChange,
  getTreeCheckableData,
  getFilterTreeData,
  getFilterData,
  getCheckableData,
  checkedEvent,
  watchData,
  getCheckedSummary,
  getDeteminate,
  watchChecked,
  watchDefaultCheckded,
  updateAllChecked,
  handleAllCheckedChange,
  clearQuery,
  setPosition,
  selectChange,
  handlePageChange,
  setExpandCache
} from './index'

export const api = [
  'markRaw',
  'toRaw',
  'state',
  'check',
  'sizesChange',
  'clearQuery',
  'handleAllCheckedChange',
  'checkedEvent',
  'setPosition',
  'selectChange',
  'handlePageChange'
]

const initState = ({ reactive, props, parent, computed, api, slots }) => {
  const state = reactive({
    query: '',
    checked: [],
    allChecked: false,
    inputHover: false,
    internalPage: props.pagerOp.pageVO.currentPage || 1,
    pagerTotal: 0,
    pageChangeData: parent.state.isToLeft,
    currentPage: props.pagerOp.pageVO.currentPage || 1,
    sizes: props.pagerOp && props.pagerOp.pageVO.pageSize,
    render: {},
    checkChangeByUser: true,
    filteredData: computed(() => api.getFilterData()),
    checkableData: computed(() => api.getCheckableData()),
    checkedSummary: computed(() => api.getCheckedSummary()),
    isIndeterminate: computed(() => api.getDeteminate()),
    hasNoMatch: computed(() => state.query.length > 0 && state.filteredData.length === 0),
    inputIcon: computed(() => (state.query.length > 0 && state.inputHover ? 'circle-close' : 'search')),
    labelProp: computed(() => props.props.label || 'label'),
    keyProp: computed(() => props.props.key || 'key'),
    disabledProp: computed(() => props.props.disabled || 'disabled'),
    childrenProp: computed(() => (props.treeOp && props.treeOp.props && props.treeOp.props.childern) || 'children'),
    hasFooter: computed(() => (!!parent.slots['left-footer'] || !!parent.slots['right-footer']) && !!slots.default),
    renderType: computed(() => props.render && props.render.plugin.name),
    expanded: []
  })

  return state
}

const initStateRender = ({ reactive, state, props, api }) =>
  reactive({
    keys: state.keyProp,
    data: [],
    defaultChecked: state.checked,
    defaultExpandedKeys: state.expanded,
    columns: props.columns,
    ...props.treeOp,
    on: {
      'checked-change': (selected, isAll) => {
        api.selectChange(selected, isAll)
      },
      check: (data, { checkedKeys }) => {
        state.checked = checkedKeys
      },
      'node-expand': (node) => api.setExpandCache(node, true),
      'node-collapse': (node) => api.setExpandCache(node, false)
    }
  })

const initWatcher = ({ watch, state, api, props, Table }) => {
  watch(
    () => state.checked,
    (value, oldvalue) => api.watchChecked({ value, oldvalue })
  )

  watch(
    () => props.pagerOp.pageVO.currentPage,
    (value) => {
      state.currentPage = value
    },
    { deep: true, immediate: true }
  )

  watch(() => props.data, api.watchData, { immediate: true })

  watch(() => state.checkableData, api.updateAllChecked)

  watch(
    () => props.defaultChecked,
    (value, oldvalue) => api.watchDefaultCheckded({ value, oldvalue }),
    { immediate: true }
  )

  watch(
    () => props.isToLeft,
    () => {
      if (state.renderType === Table) {
        state.internalPage = 1
        state.currentPage = 1
        state.render.data = state.filteredData
      }
    }
  )
}

export const renderless = (
  props,
  { computed, reactive, watch, toRaw, markRaw },
  { $prefix, t, emit, parent, nextTick, refs, vm, slots }
) => {
  const api = {}
  const Table = $prefix + 'Table'
  const Tree = $prefix + 'Tree'
  const state = initState({ reactive, props, parent, computed, api, slots })

  Object.assign(api, {
    t,
    state,
    toRaw,
    markRaw,
    sizesChange: sizesChange(state),
    setPosition: setPosition({ parent, state }),
    selectChange: selectChange(state),
    handlePageChange: handlePageChange(state),
    clearQuery: clearQuery(state),
    checkedEvent: checkedEvent(state),
    getDeteminate: getDeteminate(state),
    updateAllChecked: updateAllChecked({ state, Table, Tree }),
    handleAllCheckedChange: handleAllCheckedChange({ nextTick, props, state, Table, Tree, vm }),
    getCheckedSummary: getCheckedSummary({ props, state, Tree }),
    getFilterTreeData: getFilterTreeData({ props, state }),
    getTreeCheckableData: getTreeCheckableData(state),
    getStrictData: getStrictData({ props, state }),
    setExpandCache: setExpandCache(state),
    getCheckableData: getCheckableData({ api, state, Tree }),
    getFilterData: getFilterData({ api, parent, props, refs, state, Table, Tree }),
    watchData: watchData({ api, props, state, Tree }),
    watchDefaultCheckded: watchDefaultCheckded({ api, props, state, Tree }),
    watchChecked: watchChecked({ api, emit, state })
  })

  state.render = initStateRender({ reactive, state, props, api })

  initWatcher({ watch, state, api, props, Table })

  return api
}
