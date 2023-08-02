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
  setSelectData,
  initService,
  openDialog,
  setDefaultSearch,
  closeDialog,
  resetDeptState,
  getDisplay,
  searchMethod,
  getCurrentList,
  getDeptList,
  selectChange,
  searchChange,
  confirm,
  cancel,
  doConfirm,
  setDeptState
} from './index'

export const api = [
  'select',
  'state',
  'deptState',
  'openDialog',
  'getCurrentList',
  'confirm',
  'searchMethod',
  'searchChange',
  'selectChange',
  'closeDialog',
  'cancel'
]

const initState = ({ reactive, computed, parent, props, inject, lastDeptState }) => {
  const state = reactive({
    lastDeptState,
    lastLabels: [],
    labels: [],
    display: '',
    open: false,
    loading: false,
    searchValue: '',
    searchOptions: [],
    current: '',
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: props.disabled,
    autoSelect: props.autoSelect,
    hrapprover: inject('hrapprover', null)
  })

  return state
}

const initApi = ({ api, state, deptState, emit, $service, props }) => {
  Object.assign(api, {
    state,
    deptState,
    closeDialog: closeDialog(emit),
    resetDeptState: resetDeptState(deptState),
    fetchDept: $service.fetchDept,
    fetchDeptList: $service.fetchDeptList,
    fetchDeptByValue: $service.fetchDeptByValue,
    setSelectData: setSelectData({ deptState, state }),
    cancel: cancel({ emit, state, deptState }),
    doConfirm: doConfirm({ emit, props, state, deptState }),
    searchChange: searchChange(api),
    searchMethod: searchMethod({ api, state }),
    openDialog: openDialog({ api, emit, props, state }),
    selectChange: selectChange({ api, emit, state, deptState }),
    setDefaultSearch: setDefaultSearch({ api, state }),
    getCurrentList: getCurrentList({ api, deptState }),
    confirm: confirm({ api, props, state }),
    getDeptList: getDeptList({ api, deptState, state }),
    getDisplay: getDisplay({ api, deptState, state }),
    setDeptState: setDeptState({ api, state, deptState })
  })
}

export const renderless = (props, { onBeforeUnmount, reactive, watch, inject, computed }, { service, emit, parent }) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const api = {}
  const $service = initService({ props, service })
  const deptLevels = ['company', 'dept1', 'dept2', 'dept3', 'dept4', 'dept5', 'dept6', 'dept7', 'dept8']
  const deptState = deptLevels.map((title) => reactive({ title, options: [], value: '', disable: true }))
  const lastDeptState = deptLevels.map((title) => reactive({ title, options: [], value: '', disable: true }))
  const state = initState({ reactive, computed, parent, props, inject, lastDeptState })

  initApi({ api, state, deptState, emit, $service, props })

  watch(() => props.modelValue, api.getDisplay, { immediate: true })

  onBeforeUnmount(() => {
    state.open = false
  })

  return api
}
