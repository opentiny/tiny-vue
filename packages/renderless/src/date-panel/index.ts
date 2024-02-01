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

import { getWeekData } from '../picker'
import debounce from '../common/deps/debounce'
import {
  isDate,
  parseDate,
  modifyDate,
  modifyTime,
  clearTime,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  timeWithinRange,
  clearMilliseconds,
  modifyWithTimeString,
  changeYearMonthAndClampDate,
  formatDate,
  extractTimeFormat
} from '../common/deps/date-util'
import { DATEPICKER } from '../common'
import { on, off } from '../common/deps/dom'
import { getDateWithNewTimezone, getLocalTimezone } from '../common/date'
import { fillChar } from '../common/string'

export const getYearLabel =
  ({ state, t }) =>
  () => {
    const { YearI18n, Year, PanelYearNum } = DATEPICKER
    const yearTranslation = t(YearI18n)

    if (state.currentView === Year) {
      const startYear = state.startYear

      if (yearTranslation) {
        return startYear + ' ' + yearTranslation + ' - ' + (startYear + PanelYearNum - 1) + ' ' + yearTranslation
      }

      return startYear + ' - ' + (startYear + PanelYearNum - 1)
    }

    return state.year + ' ' + yearTranslation
  }

export const watchValue =
  ({ api, state }) =>
  (value) => {
    if ([DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode) && state.value) {
      return
    }

    if (isDate(value)) {
      state.date = state.selectionMode === 'week' ? getWeekData(value) : new Date(value)
    } else {
      state.date = api.getDefaultValue()
    }
  }

export const watchDefaultValue =
  ({ state }) =>
  (value) => {
    if (!isDate(state.value)) {
      state.date = value ? new Date(value) : new Date()
    }
  }

export const watchTimePickerVisible =
  ({ nextTick, vm }) =>
  (value) => {
    if (value) {
      nextTick(() => {
        vm.$refs.timepicker.adjustSpinners()
      })
    }
  }

export const watchSelectionMode =
  ({ state }) =>
  (value) => {
    if (value === DATEPICKER.Month) {
      /* istanbul ignore next */
      if (state.currentView !== DATEPICKER.Year || state.currentView !== DATEPICKER.Month) {
        state.currentView = DATEPICKER.Month
      }
    } else if (value === DATEPICKER.Dates) {
      state.currentView = DATEPICKER.Date
    } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(value)) {
      state.currentView = DATEPICKER.Year
    }
  }

export const proxyTimePickerDataProperties =
  ({ vm, state, watch }) =>
  () => {
    const format = (timeFormat) => {
      if (vm.$refs.timepicker) {
        vm.$refs.timepicker.state.format = timeFormat
      }
    }

    const value = (value) => {
      if (vm.$refs.timepicker) {
        vm.$refs.timepicker.state.value = null

        if (value) {
          vm.$refs.timepicker.state.value = value
        }
      }
    }

    const date = (date) => {
      if (vm.$refs.timepicker) {
        vm.$refs.timepicker.state.date = date
      }
    }

    const selectableRange = (selectableRange) => {
      if (vm.$refs.timepicker) {
        vm.$refs.timepicker.state.selectableRange = selectableRange
      }
    }

    watch(() => state.value, value)
    watch(() => state.date, date, { deep: true })
    watch(() => state.selectableRange, selectableRange, { deep: true })

    format(state.timeFormat)
    value(state.value)
    date(state.date)
    selectableRange(state.selectableRange)
  }

export const handleClear =
  ({ api, state, emit }) =>
  () => {
    state.date = api.getDefaultValue()
    emit('pick', null)
  }

export const cusEmit =
  ({ state, emit }) =>
  (value, ...args) => {
    if (!value) {
      emit('pick', value, ...args)
    } else if (Array.isArray(value)) {
      const dates = value.map((date) => (state.showTime ? clearMilliseconds(date) : clearTime(date)))

      emit('pick', dates, ...args)
    } else {
      emit('pick', state.showTime ? clearMilliseconds(value) : clearTime(value), ...args)
    }

    state.userInputDate = null
    state.userInputTime = null
  }

export const showMonthPicker =
  ({ state }) =>
  () =>
    (state.currentView = DATEPICKER.Month)

export const showYearPicker =
  ({ state }) =>
  () =>
    (state.currentView = DATEPICKER.Year)

export const cusPrevMonth =
  ({ state }) =>
  () =>
    (state.date = prevMonth(state.date))

export const cusNextMonth =
  ({ state }) =>
  () =>
    (state.date = nextMonth(state.date))

export const cusPrevYear =
  ({ state }) =>
  () => {
    if (state.currentView === DATEPICKER.Year) {
      state.startYear = state.startYear - DATEPICKER.PanelYearNum
    } else {
      state.date = prevYear(state.date)
    }
  }

export const cusNextYear =
  ({ state }) =>
  () => {
    if (state.currentView === DATEPICKER.Year) {
      state.startYear = state.startYear + DATEPICKER.PanelYearNum
    } else {
      state.date = nextYear(state.date)
    }
  }

export const handleShortcutClick = (api) => (shortcut) => {
  if (shortcut.onClick) {
    const picker = {
      $emit: (type, start, end) => {
        api.doPick(start, end)
      }
    }

    shortcut.onClick(picker)
  }
}

export const doPick = (emit) => (date) => {
  emit('pick', date, false)
}

export const handleTimePick =
  ({ api, state, t }) =>
  (value, visible, first) => {
    if (isDate(value)) {
      const newDate = state.value
        ? modifyTime(state.value, value.getHours(), value.getMinutes(), value.getSeconds())
        : modifyWithTimeString(api.getDefaultValue(), state.defaultTime, t)

      state.date = newDate
      api.cusEmit(state.date, true)
    } else {
      api.cusEmit(value, true)
    }

    if (!first) {
      state.timePickerVisible = visible
    }
  }

export const handleTimePickClose = (state) => () => {
  state.timePickerVisible = false
}

export const handleMonthPick =
  ({ api, state }) =>
  (month) => {
    if (state.selectionMode === DATEPICKER.Month) {
      state.date = modifyDate(state.date, state.year, month, 1)
      api.cusEmit(state.date)
    } else {
      state.date = changeYearMonthAndClampDate(state.date, state.year, month)
      state.currentView = DATEPICKER.Date
    }
  }

export const handleDatePick =
  ({ api, state, t }) =>
  (value) => {
    if (state.selectionMode === DATEPICKER.Day) {
      let newDate = state.value
        ? modifyDate(state.value, value.getFullYear(), value.getMonth(), value.getDate())
        : modifyWithTimeString(value, state.defaultTime, t)

      if (!api.checkDateWithinRange(newDate)) {
        newDate = modifyDate(state.selectableRange[0][0], value.getFullYear(), value.getMonth(), value.getDate())
      }

      state.date = newDate

      api.cusEmit(state.date, state.showTime)
    } else if (state.selectionMode === DATEPICKER.Week) {
      api.cusEmit(value.date)
    } else if (state.selectionMode === DATEPICKER.Dates) {
      api.cusEmit(value, true)
    }
  }

export const handleYearPick =
  ({ api, state }) =>
  (value) => {
    if (state.selectionMode === DATEPICKER.Year) {
      state.date = modifyDate(state.date, value, 0, 2)
      api.cusEmit(state.date)
    } else if ([DATEPICKER.Years].includes(state.selectionMode)) {
      state.date = value.map((year) => new Date(year, 0, 2))

      api.cusEmit(state.date, state.selectionMode === DATEPICKER.YearRange ? value.length < 2 : true)
    } else {
      state.date = changeYearMonthAndClampDate(state.date, value, state.month)
      state.currentView = DATEPICKER.Month
    }
  }

const dateToLocaleStringForIE = (timezone, value) => {
  const localTimezone = getLocalTimezone()
  const offsetTimezone = timezone - localTimezone
  const offsetTime = new Date(value).getTime() + offsetTimezone * 3600000

  return new Date(offsetTime)
}

export const changeToNow =
  ({ api, state }) =>
  () => {
    const now = new Date()
    const timezone = state.timezone
    const isServiceTimezone = timezone.isServiceTimezone
    let disabledDate = !state.disabledDate

    if (isServiceTimezone) {
      const date = getDateWithNewTimezone(now, getLocalTimezone(), timezone.to)

      state.date = date
      disabledDate = disabledDate || !state.disabledDate(date)
    } else {
      disabledDate = disabledDate || !state.disabledDate(now)
    }

    if (disabledDate && api.checkDateWithinRange(now)) {
      if (!isServiceTimezone) {
        if (state.showTimezone && state.selectedTz) {
          state.date = dateToLocaleStringForIE(state.selectedTz.offset, now)
        } else {
          state.date = now
        }
      }

      api.cusEmit(state.date)
      state.emitDbTime(now)
    }
  }

export const confirm =
  ({ api, state, t }) =>
  () => {
    if ([DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode)) {
      api.cusEmit(state.value)
    } else {
      let value = state.value ? state.value : modifyWithTimeString(api.getDefaultValue(), state.defaultTime, t)
      const timezone = state.timezone

      // state.value 为空，保持与 now 的逻辑一样
      if (!state.value && timezone.isServiceTimezone) {
        value = state.date = getDateWithNewTimezone(value, getLocalTimezone(), timezone.to)
      } else {
        state.date = new Date(value)
      }

      api.cusEmit(value)
    }
  }

export const resetView =
  ({ state }) =>
  () => {
    if (state.selectionMode === DATEPICKER.Month) {
      state.currentView = DATEPICKER.Month
    } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(state.selectionMode)) {
      state.currentView = DATEPICKER.Year
    } else {
      state.currentView = DATEPICKER.Date
    }
  }

export const handleEnter = (api) => () => {
  on(document.body, 'keydown', api.handleKeydown)
}

export const handleLeave =
  ({ api, emit }) =>
  () => {
    emit('dodestroy')
    off(document.body, 'keydown', api.handleKeydown)
  }

export const handleKeydown =
  ({ api, state }) =>
  (event) => {
    const keyCode = event.keyCode

    if (state.visible && !state.timePickerVisible) {
      if (DATEPICKER.List.includes(keyCode)) {
        api.handleKeyControl(keyCode)
        event.stopPropagation()
        event.preventDefault()
      }

      if (keyCode === 13 && state.userInputDate === null && state.userInputTime === null) {
        api.cusEmit(state.date, false)
      }
    }
  }

export const handleKeyControl =
  ({ state, emit }) =>
  (keyCode) => {
    const mapping = {
      year: {
        ...DATEPICKER.YearObj,
        offset: (date, step) => date.setFullYear(date.getFullYear() + step)
      },
      month: {
        ...DATEPICKER.YearObj,
        offset: (date, step) => date.setMonth(date.getMonth() + step)
      },
      week: {
        ...DATEPICKER.WeekObj,
        offset: (date, step) => date.setDate(date.getDate() + step * 7)
      },
      day: {
        ...DATEPICKER.DayObj,
        offset: (date, step) => date.setDate(date.getDate() + step)
      }
    }

    const mode = state.selectionMode
    const year = 3.1536e10
    const now = state.date.getTime()
    const newDate = new Date(state.date.getTime())

    while (Math.abs(now - newDate.getTime()) <= year) {
      const map = mapping[mode]
      map.offset(newDate, map[keyCode])

      if (!(typeof state.disabledDate === 'function' && state.disabledDate(newDate))) {
        state.date = newDate
        emit('pick', newDate, true)
        break
      }
    }
  }

export const handleVisibleTimeChange =
  ({ api, vm, state, t }) =>
  (value) => {
    const time = parseDate(value, state.timeFormat, t)

    if (time && api.checkDateWithinRange(time)) {
      state.date = modifyDate(time, state.year, state.month, state.monthDate)
      state.userInputTime = null

      if (vm.$refs.timepicker) {
        vm.$refs.timepicker.state.value = state.date
      }

      state.timePickerVisible = false
      api.cusEmit(state.date, true)
    }
  }

export const handleVisibleDateChange =
  ({ api, state, t }) =>
  (value) => {
    const date = parseDate(value, state.dateFormat, t)

    if (date) {
      if (typeof state.disabledDate === 'function' && state.disabledDate(date)) {
        return
      }

      state.date = modifyTime(date, state.date.getHours(), state.date.getMinutes(), state.date.getSeconds())
      state.userInputDate = null

      api.resetView()
      api.cusEmit(state.date, true)
    }
  }

export const isValidValue =
  ({ api, state }) =>
  (value) =>
    value &&
    !isNaN(value) &&
    (typeof state.disabledDate === 'function' ? !state.disabledDate(value) : true) &&
    api.checkDateWithinRange(value)

export const getDefaultValue = (state) => () => (state.defaultValue ? new Date(state.defaultValue) : new Date())

export const checkDateWithinRange =
  ({ state }) =>
  (date) =>
    state.selectableRange.length > 0 ? timeWithinRange(date, state.selectableRange, state.format || 'HH:mm:ss') : true

export const selectTz =
  ({ emit, state }) =>
  (tz) => {
    if (state.timezone.isServiceTimezone) {
      return
    }

    state.tz = tz.name
    state.selectedTz = tz
    state.showpopup = false
    state.value = dateToLocaleStringForIE(tz.offset, state.date)

    emit('select-change', { tz, date: state.value })
  }

export const searchTz =
  ({ api, state }) =>
  (input) =>
    api.debounceChange(state, input)

export const debounceChange = debounce(500, (state, input) => {
  if (!input) {
    state.showpopup = false
    return
  }

  const tzList = state.renderTzdata.slice()
  let count = 0
  const filterAry = []

  state.renderTzdata = tzList.map((tz) => {
    if (tz.name.toLowerCase().includes(input)) {
      tz.visible = false
      filterAry.push(tz)
      count++
    } else {
      tz.visible = true
    }

    return tz
  })

  if (count === 1) {
    state.tz = filterAry[0].name
    state.showpopup = false
  } else {
    state.showpopup = true
  }
})

export const toggleTz = (state) => () => {
  if (state.timezone.isServiceTimezone) {
    return
  }

  state.renderTzdata =
    state.renderTzdata &&
    state.renderTzdata.map((item) => {
      item.visible = false
      return item
    })

  state.showpopup = true
}

export const handleTzPickClose = (state) => () => (state.showpopup = false)

export const getRenderTz =
  ({ state }) =>
  (value) => {
    if (!state.showTimezone || !value) {
      return
    }

    state.renderTzdata = value[state.lang]

    if (state.renderTzdata) {
      const { isServiceTimezone, to } = state.timezone
      const selectedTz = state.selectedTz || {}
      const defaultTimezone = selectedTz.tz ? selectedTz.tz : state.defaultTimezone
      let findTimezoneKey

      if (to === 0) {
        findTimezoneKey = ''
      } else {
        findTimezoneKey = to > 0 ? '+' : '-'
        findTimezoneKey = findTimezoneKey + fillChar(String(Math.abs(to)), 2) + ':00'
      }

      findTimezoneKey = `(UTC${findTimezoneKey})`

      state.renderTzdata.some((item) => {
        // 切换国际化、defaultTimezone、全局时区默认选中时区的第一个匹配值
        if (
          ~[selectedTz.tz, defaultTimezone].indexOf(item.tz) ||
          (isServiceTimezone && ~item.name.indexOf(findTimezoneKey))
        ) {
          state.selectedTz = item
          state.tz = state.selectedTz.name

          return true
        }

        return false
      }) || (state.selectedTz = undefined)
    }
  }

export const computerVisibleTime =
  ({ state, t }) =>
  () =>
    state.userInputTime !== null
      ? state.userInputTime
      : formatDate(state.value || state.defaultValue, state.timeFormat, t)

export const computerVisibleDate =
  ({ state, t }) =>
  () =>
    state.userInputDate !== null
      ? state.userInputDate
      : formatDate(state.value || state.defaultValue, state.dateFormat, t)

export const computerTimeFormat =
  ({ state }) =>
  () =>
    state.format ? extractTimeFormat(state.timefmt || state.format) : DATEPICKER.DateFormats.timerange

export const watchVisible =
  ({ api, state }) =>
  () => {
    if (state.needChangeTimezoneData) {
      api.getRenderTz(state.timezoneData)
      state.needChangeTimezoneData = false
    }
  }
