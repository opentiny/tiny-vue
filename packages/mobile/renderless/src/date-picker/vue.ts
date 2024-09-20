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
  getBoundary,
  clearDisplayValue,
  showPickerAndLockScroll,
  hookMounted,
  getMonthEndDay,
  getDisplayValue,
  getRanges,
  onConfirm,
  onCancel,
  getOriginColumns,
  getColumns,
  updateInnerValue,
  formatValue,
  onChange,
  updateColumnValue
} from './index'
import { DATE } from '../common'
import type {
  IDatePickerApi,
  IDatePickerProps,
  IDatePickerRenderlessParamUtils,
  IDatePickerState,
  ISharedRenderlessParamHooks
} from '@/types'

export const api = [
  'state',
  'clearDisplayValue',
  'showPickerAndLockScroll',
  'hookMounted',
  'onConfirm',
  'onCancel',
  'onChange'
]

const setWatchFn = ({ api, watch, props, state, emit }) => {
  watch(
    () => props.minDate,
    () => api.updateInnerValue(),
    {
      lazy: true
    }
  )
  watch(
    () => props.visible,
    (value) => (state.visible = value),
    { lazy: true }
  )
  watch(
    () => props.maxDate,
    () => api.updateInnerValue(),
    {
      lazy: true
    }
  )
  watch(
    () => props.modelValue,
    (value) => {
      if (value) {
        const val = api.formatValue(new Date(value))
        if (val.valueOf() !== state.innerValue.valueOf()) {
          state.innerValue = val
        }
        state.displayValue = api.getDisplayValue()
      }
    },
    {
      immediate: true
    }
  )
  watch(
    () => state.columns,
    () => api.updateColumnValue(),
    {
      lazy: true
    }
  )
  watch(
    () => state.innerValue,
    (value) => emit('input', value),
    {
      lazy: true
    }
  )
}

export const renderless = (
  props: IDatePickerProps,
  { computed, onMounted, reactive, watch }: ISharedRenderlessParamHooks,
  { constants, emit, nextTick, refs, parent }: IDatePickerRenderlessParamUtils
): IDatePickerApi => {
  const api: IDatePickerApi = {
    formatValue: formatValue(props),
    getMonthEndDay: getMonthEndDay(constants),
    hookMounted: hookMounted({ constants, parent, refs, nextTick })
  }

  const state: IDatePickerState = reactive({
    visible: false,
    innerValue: formatValue(props)(props.modelValue),
    ranges: computed(() => api.getRanges()),
    originColumns: computed(() => api.getOriginColumns()),
    columns: computed(() => api.getColumns()),
    displayValue: '',
    isReadonly: false,
    clearable: props.clearable
  })

  Object.assign(api, {
    state,
    getOriginColumns: getOriginColumns(state),
    onCancel: onCancel({ emit, state }),
    getColumns: getColumns({ props, state }),
    clearDisplayValue: clearDisplayValue(state),
    getDisplayValue: getDisplayValue({ constants, DATE, props, state }),
    showPickerAndLockScroll: showPickerAndLockScroll({ constants, state }),
    updateColumnValue: updateColumnValue({ constants, nextTick, props, refs, state })
  })

  api.getBoundary = getBoundary({ api, constants, props })
  api.updateInnerValue = updateInnerValue({ api, constants, props, refs, state })
  api.getRanges = getRanges({ api, constants, props, state })

  setWatchFn({ api, watch, props, state, emit })

  onMounted(() => {
    api.updateColumnValue()

    nextTick(() => {
      api.updateInnerValue()
    })
  })

  return Object.assign(api, {
    onConfirm: onConfirm({ api, emit, state }),
    onChange: onChange({ api, emit, refs, nextTick })
  })
}
