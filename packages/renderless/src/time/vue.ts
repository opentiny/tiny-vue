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
  changeSelectionRange,
  adjustSpinners,
  isValidValue,
  handleKeydown,
  watchValue,
  watchVisible,
  handleCancel,
  handleChange,
  setSelectionRange,
  displayValue,
  handleConfirm
} from './index'
import { compuAmPmMode } from '../time-range'
import { isDate } from '../common/deps/date-util'

export const api = ['state', 'handleChange', 'setSelectionRange', 'handleCancel', 'handleConfirm', 'adjustSpinners']

const initState = ({ reactive, props, computed, api }) => {
  const state = reactive({
    popperClass: '',
    format: 'HH:mm:ss',
    value: '',
    defaultValue: null,
    date: props.value || new Date(),
    oldValue: new Date(),
    selectableRange: [],
    selectionRange: [0, 2],
    disabled: false,
    arrowControl: false,
    visible: false,
    showTimePickerButton: false,
    needInitAdjust: true,
    displayValue: computed(() => api.displayValue()),
    showSeconds: computed(() => (state.format || '').includes('ss')),
    useArrow: computed(() => state.arrowControl || props.timeArrowControl || false),
    amPmMode: computed(() => api.compuAmPmMode())
  })

  return state
}

export const renderless = (
  props,
  { computed, onMounted, reactive, watch, nextTick },
  { t, emit: $emit, vm, designConfig }
) => {
  const api = {}
  const emit = props.emitter ? props.emitter.emit : $emit
  const state = initState({ reactive, props, computed, api })
  state.showTimePickerButton = designConfig?.showTimePickerButton

  Object.assign(api, {
    t,
    state,
    compuAmPmMode: compuAmPmMode(state),
    adjustSpinners: adjustSpinners(vm),
    handleCancel: handleCancel({ state, emit }),
    setSelectionRange: setSelectionRange({ state, emit }),
    watchVisible: watchVisible({ nextTick, vm, state, api }),
    isValidValue: isValidValue({ state }),
    changeSelectionRange: changeSelectionRange({ vm, state }),
    handleConfirm: handleConfirm({ state, emit }),
    handleKeydown: handleKeydown({ api, vm }),
    handleChange: handleChange({ api, emit, state }),
    displayValue: displayValue({ state, t }),
    watchValue: watchValue({ api, nextTick, state })
  })

  watch(() => state.value, api.watchValue)

  watch(
    () => props.show,
    (value) => {
      state.visible = value
    },
    { immediate: true }
  )

  watch(
    () => state.selectableRange,
    (value) => (vm.$refs.spinner.state.selectableRange = value)
  )

  watch(
    () => state.defaultValue,
    (value) => !isDate(state.value) && (state.date = value ? new Date(value) : new Date())
  )

  onMounted(() => {
    api.handleConfirm(true, true)
  })

  watch(() => state.visible, api.watchVisible)

  return api
}
