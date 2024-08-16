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
  proxyTimePickerDataProperties,
  getRenderTz,
  toggleTz,
  handleTzPickClose,
  debounceChange,
  searchTz,
  selectTz,
  handleYearPick,
  cusPrevYear,
  cusNextYear,
  cusPrevMonth,
  cusNextMonth,
  handleTimePickClose,
  handleMonthPick,
  handleDatePick,
  changeToNow,
  confirm,
  resetView,
  handleKeydown,
  handleLeave,
  handleEnter,
  getYearLabel,
  showYearPicker,
  showMonthPicker,
  handleTimePick,
  checkDateWithinRange,
  cusEmit,
  getDefaultValue,
  isValidValue,
  handleVisibleDateChange,
  handleVisibleTimeChange,
  handleKeyControl,
  handleShortcutClick,
  watchValue,
  watchDefaultValue,
  watchSelectionMode,
  watchTimePickerVisible,
  handleClear,
  doPick,
  computerVisibleTime,
  computerVisibleDate,
  computerTimeFormat,
  watchVisible,
  getDisabledNow,
  getDisabledConfirm,
  getNowTime
} from './index'
import { getWeekNumber, extractDateFormat } from '../common/deps/date-util'
import { DATEPICKER, DATE } from '../common'

export const api = [
  'state',
  'isValidValue',
  'handleTzPickClose',
  'toggleTz',
  'searchTz',
  'selectTz',
  'confirm',
  'cusPrevYear',
  'cusNextYear',
  'cusPrevMonth',
  'cusNextMonth',
  'changeToNow',
  'handleMonthPick',
  'handleYearPick',
  'handleDatePick',
  'showMonthPicker',
  'showYearPicker',
  'handleTimePick',
  'handleEnter',
  'handleVisibleTimeChange',
  'handleVisibleDateChange',
  'handleLeave',
  'handleShortcutClick',
  'handleTimePickClose',
  'getNowTime'
]

const initState = ({ reactive, computed, api, i18n }) => {
  const state = reactive({
    popperClass: '',
    date: new Date(),
    value: '',
    defaultValue: null,
    defaultTime: null,
    showTime: false,
    selectionMode: DATEPICKER.Day,
    shortcuts: '',
    visible: false,
    currentView: DATEPICKER.Date,
    disabledDate: '',
    cellClassName: '',
    selectableRange: [],
    firstDayOfWeek: 7,
    showWeekNumber: false,
    timePickerVisible: false,
    format: '',
    timeFmt: '',
    timezone: {},
    arrowControl: false,
    userInputDate: null,
    userInputTime: null,
    showTimezone: false,
    showpopup: false,
    tz: '',
    selectedTz: null,
    animationName: '',
    startYear: Math.floor(new Date().getFullYear() / 10) * 10,
    disabledNow: computed(() => api.getDisabledNow()),
    disabledConfirm: computed(() => api.getDisabledConfirm()),
    year: computed(() => !Array.isArray(state.date) && state.date.getFullYear()),
    month: computed(() => !Array.isArray(state.date) && state.date.getMonth()),
    week: computed(() => getWeekNumber(state.date)),
    monthDate: computed(() => state.date.getDate()),
    footerVisible: computed(() => state.showTime || [DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode)),
    visibleTime: computed(() => api.computerVisibleTime()),
    visibleDate: computed(() => api.computerVisibleDate()),
    yearLabel: computed(() => api.getYearLabel()),
    timeFormat: computed(() => api.computerTimeFormat()),
    dateFormat: computed(() => (state.format ? extractDateFormat(state.format.replace(state.timefmt, '')) : DATE.Date)),
    lang: computed(() => (i18n ? i18n.locale.replace(/_/g, '-') : 'zh-CN')),
    isShowTz: computed(() => state.showTimezone && state.showTime),
    isShowFooter: computed(() => state.footerVisible && [DATEPICKER.Date, DATEPICKER.Year].includes(state.currentView))
  })

  state.needChangeTimezoneData = true // 控制重新渲染时区列表

  return state
}

const initWatch = ({ watch, state, api, nextTick }) => {
  watch(
    () => state.isShowTz,
    () => {
      setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper())
    }
  )

  watch(
    () => state.isShowFooter,
    () => {
      setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper())
    }
  )

  watch(
    () => state.lang,
    () => (state.needChangeTimezoneData = true)
  )

  watch(() => state.defaultValue, api.watchDefaultValue)

  watch(() => state.value, api.watchValue)

  watch(() => state.timePickerVisible, api.watchTimePickerVisible)

  watch(() => state.selectionMode, api.watchSelectionMode)

  watch(
    () => state.timePickerVisible,
    () => nextTick(api.proxyTimePickerDataProperties)
  )

  watch(() => state.visible, api.watchVisible)
}

const initApi = ({ api, state, t, emit, nextTick, vm, watch, props }) => {
  Object.assign(api, {
    t,
    state,
    debounceChange,
    toggleTz: toggleTz(state),
    watchVisible: watchVisible({ api, state }),
    getRenderTz: getRenderTz({ state }),
    selectTz: selectTz({ emit, state }),
    handleTzPickClose: handleTzPickClose(state),
    getDefaultValue: getDefaultValue(state),
    showYearPicker: showYearPicker({ state }),
    handleTimePickClose: handleTimePickClose(state),
    cusNextMonth: cusNextMonth({ state }),
    cusPrevMonth: cusPrevMonth({ state }),
    resetView: resetView({ state }),
    showMonthPicker: showMonthPicker({ state }),
    cusNextYear: cusNextYear({ state }),
    cusPrevYear: cusPrevYear({ state }),
    watchDefaultValue: watchDefaultValue({ state }),
    getYearLabel: getYearLabel({ state, t }),
    cusEmit: cusEmit({ state, emit }),
    watchTimePickerVisible: watchTimePickerVisible({ nextTick, vm }),
    checkDateWithinRange: checkDateWithinRange({ state }),
    watchSelectionMode: watchSelectionMode({ state }),
    proxyTimePickerDataProperties: proxyTimePickerDataProperties({ vm, state, watch }),
    handleKeyControl: handleKeyControl({ state, emit }),
    doPick: doPick(emit),
    searchTz: searchTz({ api, state }),
    handleEnter: handleEnter(api),
    handleLeave: handleLeave({ api, emit }),
    changeToNow: changeToNow({ api, state, props }),
    isValidValue: isValidValue({ api, state }),
    handleClear: handleClear({ api, state, emit }),
    watchValue: watchValue({ api, state }),
    handleKeydown: handleKeydown({ api, state }),
    confirm: confirm({ api, state, t }),
    handleMonthPick: handleMonthPick({ api, state }),
    handleVisibleDateChange: handleVisibleDateChange({ api, state, t }),
    handleTimePick: handleTimePick({ api, state, t }),
    handleYearPick: handleYearPick({ api, state }),
    handleDatePick: handleDatePick({ api, state, t }),
    computerVisibleTime: computerVisibleTime({ state, t }),
    handleShortcutClick: handleShortcutClick(api),
    computerVisibleDate: computerVisibleDate({ state, t }),
    handleVisibleTimeChange: handleVisibleTimeChange({ api, vm, state, t }),
    computerTimeFormat: computerTimeFormat({ state }),
    getDisabledNow: getDisabledNow({ state }),
    getDisabledConfirm: getDisabledConfirm({ state }),
    getNowTime: getNowTime({ props })
  })
}

export const renderless = (props, { computed, reactive, watch, nextTick }, { t, emit: $emit, vm, i18n }) => {
  const api = {}
  const emit = props.emitter ? props.emitter.emit : $emit
  const state = initState({ reactive, computed, api, i18n })

  initApi({ api, state, t, emit, nextTick, vm, watch, props })
  initWatch({ watch, state, api, nextTick })

  return api
}
