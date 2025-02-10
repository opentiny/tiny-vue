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
  getMinVisibleDate,
  watchValue,
  resetView,
  isValidValue,
  handleConfirm,
  rightPrevMonth,
  rightPrevYear,
  leftNextMonth,
  leftNextYear,
  rightNextMonth,
  rightNextYear,
  leftPrevMonth,
  leftPrevYear,
  handleMaxTimeClose,
  handleMaxTimePick,
  handleMinTimeClose,
  handleMinTimePick,
  handleShortcutClick,
  handleRangePick,
  handleTimeChange,
  handleTimeInput,
  handleDateChange,
  handleDateInput,
  handleChangeRange,
  watchDefault,
  handleClear,
  getMaxVisibleDate,
  watchMaxTimePickerVisible,
  watchMinTimePickerVisible,
  watchMaxDate,
  watchMinDate,
  getMinVisibleTime,
  getEnableMonthArrow,
  getMaxVisibleTime,
  doPick,
  setTimeFormat,
  computerBtnDisabled,
  computerLabel,
  computerEnableYearArrow,
  watchPickerVisible,
  watchModelValue
} from './index'
import { nextMonth1, extractDateFormat, extractTimeFormat } from '@opentiny/utils'

export const api = [
  'state',
  'handleShortcutClick',
  'handleConfirm',
  'handleClear',
  'handleChangeRange',
  'rightNextMonth',
  'rightNextYear',
  'rightPrevMonth',
  'rightPrevYear',
  'handleRangePick',
  'leftNextMonth',
  'leftNextYear',
  'leftPrevMonth',
  'leftPrevYear',
  'handleMaxTimePick',
  'handleDateInput',
  'handleMinTimePick',
  'handleTimeChange',
  'handleTimeInput',
  'handleMinTimeClose',
  'handleDateChange',
  'handleMaxTimeClose',
  'isValidValue',
  'watchModelValue'
]

const initState = ({ reactive, computed, api, constants, designConfig, props }) => {
  const state = reactive({
    popperElm: null,
    popperClass: props.popperClass || '',
    value: props.modelValue || [],
    defaultValue: null,
    defaultTime: null,
    minDate: '',
    maxDate: '',
    shortcutType: '',
    shortcutText: '',
    singleSelect: false,
    minRangeDate: constants.startDate,
    maxRangeDate: constants.endDate,
    leftDate: new Date(),
    rightDate: nextMonth1(new Date()),
    rangeState: { endDate: null, selecting: false, row: null, column: null },
    showTime: props.type === 'datetimerange' || false,
    format: props.format || '',
    arrowControl: false,
    unlinkPanels: props.unlinkPanels || false,
    firstDayOfWeek: 7,
    minTimePickerVisible: false,
    maxTimePickerVisible: false,
    shortcuts: props.shortcuts || '',
    visible: '',
    disabledDate: props.disabledDate || null,
    cellClassName: '',
    dateUserInput: { min: null, max: null },
    timeUserInput: { min: null, max: null },
    btnDisabled: computed(() => api.computerBtnDisabled()),
    leftLabel: computed(() => api.computerLabel('leftDate')),
    rightLabel: computed(() => api.computerLabel('rightDate')),
    leftYear: computed(() => state.leftDate.getFullYear()),
    leftMonth: computed(() => state.leftDate.getMonth()),
    leftMonthDate: computed(() => state.leftDate.getDate()),
    rightYear: computed(() => state.rightDate.getFullYear()),
    rightMonth: computed(() => state.rightDate.getMonth()),
    rightMonthDate: computed(() => state.rightDate.getDate()),
    minVisibleDate: computed(() => api.getMinVisibleDate()),
    maxVisibleDate: computed(() => api.getMaxVisibleDate()),
    minVisibleTime: computed(() => api.getMinVisibleTime()),
    maxVisibleTime: computed(() => api.getMaxVisibleTime()),
    timeFormat: computed(() => (state.format ? extractTimeFormat(state.format) : 'HH:mm:ss')),
    dateFormat: computed(() => (state.format ? extractDateFormat(state.format) : 'yyyy-MM-dd')),
    enableMonthArrow: computed(() => api.getEnableMonthArrow()),
    enableYearArrow: computed(() => api.computerEnableYearArrow()),
    // tiny 新增
    confirmButtonProps: {
      plain: true,
      type: 'default',
      ...designConfig?.state?.confirmButtonProps
    }
  })

  return state
}

const initWatch = ({ watch, state, api, props }) => {
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
  watch(() => state.minDate, api.watchMinDate)
  watch(() => state.maxDate, api.watchMaxDate)
  watch(() => state.minTimePickerVisible, api.watchMinTimePickerVisible)
  watch(() => state.maxTimePickerVisible, api.watchMaxTimePickerVisible)
  watch(() => state.value, api.watchValue)
  watch(() => state.defaultValue, api.watchDefault)
  watch(() => state.showTime, api.setTimeFormat)
  watch(() => state.visible, api.watchPickerVisible)
}

const initApi = ({ api, state, t, vm, nextTick, emit, constants, props }) => {
  Object.assign(api, {
    t,
    state,
    computerLabel: computerLabel({ state, t }),
    resetView: resetView({ state }),
    watchMaxDate: watchMaxDate({ state, vm }),
    handleChangeRange: handleChangeRange(state, props),
    handleMaxTimeClose: handleMaxTimeClose(state),
    handleMinTimeClose: handleMinTimeClose(state),
    isValidValue: isValidValue({ state }),
    leftNextYear: leftNextYear({ state }),
    getEnableMonthArrow: getEnableMonthArrow(state),
    leftNextMonth: leftNextMonth({ state }),
    rightPrevYear: rightPrevYear({ state }),
    rightPrevMonth: rightPrevMonth({ state }),
    rightNextMonth: rightNextMonth({ state }),
    leftPrevYear: leftPrevYear({ state }),
    handleMaxTimePick: handleMaxTimePick({ state }),
    handleMinTimePick: handleMinTimePick({ state }),
    getMaxVisibleTime: getMaxVisibleTime({ state, t }),
    getMinVisibleTime: getMinVisibleTime({ state, t }),
    getMaxVisibleDate: getMaxVisibleDate({ state, t }),
    getMinVisibleDate: getMinVisibleDate({ state, t }),
    rightNextYear: rightNextYear({ state }),
    leftPrevMonth: leftPrevMonth({ state }),
    handleDateChange: handleDateChange({ state, t }),
    handleTimeChange: handleTimeChange({ state, t, vm }),
    watchMinDate: watchMinDate({ state, t, vm }),
    handleTimeInput: handleTimeInput({ state, t }),
    watchMaxTimePickerVisible: watchMaxTimePickerVisible({ nextTick, state, vm }),
    watchMinTimePickerVisible: watchMinTimePickerVisible({ nextTick, state, vm }),
    handleDateInput: handleDateInput({ state, t }),
    doPick: doPick(emit),
    watchValue: watchValue({ state }),
    watchDefault: watchDefault({ state }),
    handleClear: handleClear({ emit, state }),
    setTimeFormat: setTimeFormat({ nextTick, vm, state }),
    handleConfirm: handleConfirm({ api, emit, state, props, t }),
    handleRangePick: handleRangePick({ api, state, props, t }),
    handleShortcutClick: handleShortcutClick(state, api, props),
    computerBtnDisabled: computerBtnDisabled({ state, api }),
    computerEnableYearArrow: computerEnableYearArrow(state),
    watchPickerVisible: watchPickerVisible({ state, constants }),
    watchModelValue: watchModelValue({ state, api })
  })
}

export const renderless = (
  props,
  { computed, reactive, watch, nextTick },
  { t, emit: $emit, vm, constants, designConfig }
) => {
  const api = {}
  const emit = props.emitter ? props.emitter.emit : $emit
  const state = initState({ reactive, computed, api, constants, designConfig, props })

  initApi({ api, state, t, vm, nextTick, emit, constants, props })
  initWatch({ watch, state, api, props })

  return api
}
