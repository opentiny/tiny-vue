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
  visibleHandle,
  watchVisible,
  formatCascade,
  format,
  getDataType,
  change,
  setColumnValue,
  setValues,
  getColumnValue,
  confirm,
  cancel,
  getColumnIndex,
  getValues,
  getIndexes,
  setIndexes,
  setColumnIndex,
  getColumnValues,
  setColumnValues,
  onChange,
  onCascadeChange,
  emitEvent,
  getColumn,
  getChildrenComponent
} from './index'

export const api = [
  'state',
  'visibleHandle',
  'watchVisible',
  'change',
  'setValues',
  'getColumnValue',
  'confirm',
  'cancel',
  'getColumnIndex',
  'getValues',
  'getIndexes',
  'setIndexes',
  'setColumnIndex',
  'getColumnValues',
  'setColumnValues',
  'onChange',
  'onCascadeChange',
  'emitEvent',
  'getColumn',
  'setColumnValue'
]

const initState = ({ reactive, computed, props, api }) => {
  const state = reactive({
    columns: props.columns,
    toggle: false,
    itemHeight: Number(props.itemHeight),
    defaultIndex: props.defaultIndex,
    visibleItemCount: props.visibleItemCount,
    clumnsWrapHeight: null,
    formattedColumns: [],
    dataType: computed(() => api.getDataType())
  })

  return state
}

const initApi = ({ api, props, state, emit, childrenPickerRefs }) => {
  Object.assign(api, {
    state,
    getColumn: getColumn(childrenPickerRefs),
    getValues: getValues(childrenPickerRefs),
    getIndexes: getIndexes(childrenPickerRefs),
    getDataType: getDataType(state),
    visibleHandle: visibleHandle(emit),
    formatCascade: formatCascade({ state, props }),
    getColumnValues: getColumnValues(childrenPickerRefs),
    setColumnValues: setColumnValues(childrenPickerRefs),
    emitEvent: emitEvent({ api, state, emit }),
    change: change(api),
    onChange: onChange({ api, state, emit }),
    cancel: cancel({ api, emit }),
    confirm: confirm({ api, childrenPickerRefs }),
    format: format({ state, api }),
    setValues: setValues(api),
    setIndexes: setIndexes(api),
    watchVisible: watchVisible(emit),
    setColumnIndex: setColumnIndex(api),
    getColumnValue: getColumnValue(api),
    getColumnIndex: getColumnIndex(api),
    setColumnValue: setColumnValue(api),
    onCascadeChange: onCascadeChange({ api, state, props })
  })
}

const initWatch = ({ watch, props, state, api }) => {
  watch(
    () => props.visible,
    (value) => {
      api.watchVisible({ state, value })
    }
  )

  watch(
    () => props.columns,
    (value) => {
      state.columns = value
      api.format()
    }
  )
}

export const renderless = (props, { computed, onMounted, reactive, watch }, { emit, nextTick, vm, constants }) => {
  const api = {}
  const childrenPickerRefs = { childrenPicker: null }
  const state = initState({ reactive, computed, props, api })

  initApi({ api, props, state, emit, childrenPickerRefs })

  initWatch({ watch, props, state, api })

  onMounted(() => {
    nextTick(() => {
      childrenPickerRefs.childrenPicker = getChildrenComponent({ state, vm, constants })
    })

    api.format()
    state.clumnsWrapHeight = state.itemHeight * state.visibleItemCount
  })

  return api
}
