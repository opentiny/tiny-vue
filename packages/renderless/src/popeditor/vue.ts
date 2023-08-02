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
import userPopper from '../common/deps/vue-popper'
import {
  computedGetTitle,
  computedTreeOp,
  computedModalWidth,
  createSearchForm,
  filterNode,
  getColumns,
  getDisplay,
  getMultiSelectedData,
  getRadioSelectedData,
  handleClear,
  handleConfirm,
  handleOpen,
  handleReset,
  handleCancel,
  handleBeforeClose,
  handleSearch,
  handleSizeChange,
  initDisplay,
  openDialog,
  query,
  selectedGridSelectAll,
  selectedGridSelectChange,
  sourceGridSelectAll,
  sourceGridSelectChange,
  treeCheckChange,
  watchFilterText,
  handleNumberPageChange,
  doSearch,
  doClear,
  doSuggesst,
  closeSuggestPanel,
  getSuggestParam,
  suggestRadioChange,
  updateSuggestWidth,
  handlePager,
  initSearchOption,
  mounted
} from './index'

export const api = [
  'state',
  'handleOpen',
  'openDialog',
  'handleClear',
  'handleConfirm',
  'handleReset',
  'handleSearch',
  'handleCancel',
  'handleBeforeClose',
  'handleSizeChange',
  'selectedGridSelectAll',
  'selectedGridSelectChange',
  'sourceGridSelectAll',
  'sourceGridSelectChange',
  'treeCheckChange',
  'handleNumberPageChange',
  'doSearch',
  'doClear',
  'doSuggesst',
  'closeSuggestPanel',
  'popper',
  'doSuggesstNow',
  'suggestRadioChange'
]

const initState = ({ reactive, computed, props, api, constants, t, parent }) => {
  const state = reactive({
    open: false,
    display: '',
    getTitle: computed(() => api.computedGetTitle({ constants, props, t })),
    readonly: computed(() => !props.suggest && props.readonly),
    modalWidth: computed(() => api.computedModalWidth({ constants, props })),
    conditions: props.conditions,
    activeName: props.showHistory ? constants.ACTIVE_NAME.history : constants.ACTIVE_NAME.source,
    commitValue: Array.isArray(props.modelValue) ? props.modelValue.slice(0) : props.modelValue,
    currentPage: 1,
    baseColumns: computed(() => getColumns({ constants, props })),
    selectedDatas: [],
    selectedValues: [],
    sourceGridDataset: [],
    fullGridData: [],
    historyGridDataset: [],
    filterText: '',
    treeOp: computed(() => api.computedTreeOp(props, state)),

    pagerConfig: reactive({
      currentPage: 1,
      pageSize: 10,
      total: 0,
      layout: 'prev,pager,next',
      ...(props.gridOp.pagerOp || props.pagerOp || {})
    }),

    loading: false,
    treeSelectList: [],
    radioConfig: props.radioConfig,
    searchOp: {},
    cacheStore: {},
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    suggestList: [],
    showSuggestPanel: false,
    inputHover: false,
    search: null,
    closeSuggestPanelInvoker: null
  })

  return state
}

const initApi = ({ api, props, state, parent, refs, emit, popper, constants, vm, nextTick }) => {
  Object.assign(api, {
    state,
    popper,
    computedGetTitle,
    computedModalWidth,
    filterNode: filterNode(),
    query: query({ constants, parent, props, state }),
    watchFilterText: watchFilterText(vm),
    treeCheckChange: treeCheckChange({ constants, state, props }),
    getDisplay: getDisplay({ constants, props, state }),
    createSearchForm: createSearchForm(props),
    handleCancel: handleCancel({ props, state, constants }),
    handleBeforeClose: handleBeforeClose({ props, state, constants }),
    getMultiSelectedData: getMultiSelectedData({ props, state }),
    getRadioSelectedData: getRadioSelectedData({ constants, props, state, vm }),
    selectedGridSelectAll: selectedGridSelectAll({ constants, props, vm, state }),
    selectedGridSelectChange: selectedGridSelectChange({ constants, props, vm, state }),
    handleReset: handleReset({ api, state, props }),
    openDialog: openDialog({ api, emit, props, state }),
    initDisplay: initDisplay({ api, constants, props, state, nextTick }),
    handleSearch: handleSearch({ api, props, state, refs, constants }),
    computedTreeOp: computedTreeOp({ api, constants }),
    handleSizeChange: handleSizeChange({ api, emit, state }),
    handleOpen: handleOpen({ api, constants, props, state }),
    handleClear: handleClear({ constants, emit, props, state }),
    handleConfirm: handleConfirm({ api, constants, emit, props, state }),
    handleNumberPageChange: handleNumberPageChange({ api, emit, state }),
    doSearch: doSearch({ api, state, props }),
    doClear: doClear({ api, state, props }),
    updateSuggestWidth: updateSuggestWidth({ refs }),
    doSuggesstNow: doSuggesst({ api, state, props, popper }),
    doSuggesst: debounce(1000, doSuggesst({ api, state, props, popper })),
    closeSuggestPanel: closeSuggestPanel({ api, state, refs }),
    sourceGridSelectChange: sourceGridSelectChange({ props, state, api }),
    sourceGridSelectAll: sourceGridSelectAll({ props, state, api }),
    getSuggestParam: getSuggestParam({ props, state, api }),
    suggestRadioChange: suggestRadioChange({ api, state }),
    handlePager: handlePager({ api, props, state }),
    initSearchOption: initSearchOption({ api, state }),
    mounted: mounted({ api, props })
  })

  state.search = api.createSearchForm(false)
}

const initWatch = ({ watch, props, api, state, popper }) => {
  watch(
    () => props.gridOp.data,
    (value) => {
      state.fullGridData = value
      api.initDisplay(props.modelValue)
    }
  )

  watch(() => state.fullGridData, api.handlePager)

  watch(() => props.modelValue, api.initDisplay)

  watch(() => state.filterText, api.watchFilterText, { deep: true })

  watch(
    () => state.showSuggestPanel,
    (value) => {
      popper.showPopper.value = value
    },
    { immediate: true }
  )

  watch(() => props.conditions, api.initSearchOption, { deep: true, immediate: true })
}

export const renderless = (
  props,
  { computed, onMounted, reactive, watch, inject, toRefs, onBeforeUnmount, onDeactivated },
  { t, refs, parent, emit, constants, vm, nextTick, slots }
) => {
  const api = {}
  const state = initState({ reactive, computed, props, api, constants, t, parent })
  const popper = userPopper({
    emit,
    refs,
    watch,
    onBeforeUnmount,
    props,
    nextTick,
    toRefs,
    slots,
    reactive,
    onDeactivated
  })

  parent.tinyForm = parent.tinyForm || inject('form', null)

  initApi({ api, props, state, parent, refs, emit, popper, constants, vm, nextTick })
  initWatch({ watch, props, api, state, popper })

  onMounted(api.mounted)
  onBeforeUnmount(api.closeSuggestPanel)

  return api
}
