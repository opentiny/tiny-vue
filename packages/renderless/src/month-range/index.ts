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
  DATEPICKER,
  isDate1 as isDate,
  toDate1,
  modifyDate,
  formatDate,
  modifyWithTimeString,
  prevYear,
  nextYear,
  nextMonth1 as nextMonth
} from '@opentiny/utils'

export const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])]
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))]
  }

  return [new Date(), nextMonth(new Date())]
}

export const watchValue =
  ({ state }) =>
  (val) => {
    if (!val) {
      state.maxDate = null
      state.minDate = null
    } else if (Array.isArray(val)) {
      if (isDate(val[0])) {
        state.minDate = new Date(val[0])
      } else {
        state.minDate = null
      }

      if (isDate(val[1])) {
        state.maxDate = new Date(val[1])
      } else {
        state.maxDate = null
      }

      if (state.minDate) {
        state.leftDate = state.minDate

        if (state.maxDate && state.unlinkPanels) {
          const maxDateYear = state.maxDate.getFullYear()
          const minDateYear = state.minDate.getFullYear()

          state.rightDate = maxDateYear === minDateYear ? nextYear(state.maxDate) : state.maxDate
        } else {
          state.rightDate = nextYear(state.leftDate)
        }
      } else {
        state.leftDate = calcDefaultValue(state.defaultValue)[0]
        state.rightDate = nextYear(state.leftDate)
      }
    }
  }

export const watchDefaultValue =
  ({ state }) =>
  (value) => {
    if (!Array.isArray(state.value)) {
      const [left, right] = calcDefaultValue(value)

      state.leftDate = left

      state.rightDate =
        value && value[1] && left.getFullYear() !== right.getFullYear() && state.unlinkPanels
          ? right
          : nextYear(state.leftDate)
    }
  }

export const handleClear =
  ({ emit, state }) =>
  () => {
    state.minDate = null
    state.maxDate = null
    state.leftDate = calcDefaultValue(state.defaultValue)[0]
    state.rightDate = nextYear(state.leftDate)

    emit('pick', null)
  }

export const handleChangeRange = (state) => (val) => {
  state.minDate = val.minDate
  state.maxDate = val.maxDate
  state.rangeState = val.rangeState
}

export const handleRangePick =
  ({ api, state, props, t }) =>
  (val, close = true) => {
    if (props.readonly) {
      return
    }
    const defaultTime = state.defaultTime || []
    const max = modifyWithTimeString(val.maxDate, defaultTime[1], t)
    const min = modifyWithTimeString(val.minDate, defaultTime[0], t)

    if (state.minDate === min && state.maxDate === max) {
      return
    }

    if (state.onPick) {
      state.onPick(val)
    }

    state.minDate = min
    state.maxDate = max

    setTimeout(() => {
      state.minDate = min
      state.maxDate = max
    }, 10)

    if (!close) {
      return
    }

    api.handleConfirm()
  }

export const handleShortcutClick = (state, api, props) => (shortcutObj) => {
  if (shortcutObj.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        // 面板直接使用快捷选项
        if (props.shortcuts?.length) {
          state.value = [start, end]
          state.leftDate = start
          state.rightDate = end
          api.handleRangePick({ minDate: start, maxDate: end })
        } else {
          api.doPick(start, end)
        }
      }
    }

    shortcutObj.onClick(choose)
  }
}

export const doPick = (emit) => (begin, end) => {
  emit('pick', [begin, end], false)
}

export const leftPrevYear = (state) => () => {
  state.leftDate = prevYear(state.leftDate)

  if (!state.unlinkPanels) {
    state.rightDate = prevYear(state.rightDate)
  }
}

export const rightNextYear = (state) => () => {
  if (!state.unlinkPanels) {
    state.leftDate = nextYear(state.leftDate)
  }

  state.rightDate = nextYear(state.rightDate)
}

export const leftNextYear = (state) => () => (state.leftDate = nextYear(state.leftDate))

export const rightPrevYear = (state) => () => (state.rightDate = prevYear(state.rightDate))

export const handleConfirm =
  ({ api, emit, state, props, t }) =>
  (visible = false) => {
    if (api.isValidValue([state.minDate, state.maxDate])) {
      emit('pick', [state.minDate, state.maxDate], visible)
      const defaultFormat = DATEPICKER.DateFormats.monthrange
      const start = formatDate(state.minDate, props.format || defaultFormat, t)
      const end = formatDate(state.maxDate, props.format || defaultFormat, t)
      emit('update:modelValue', [start, end])
      emit('select-change', [start, end])
    }
  }

export const isValidValue = (state) => (value) =>
  Array.isArray(value) &&
  value &&
  value[1] &&
  value[0] &&
  isDate(value[1]) &&
  isDate(value[0]) &&
  value[0].getTime() <= value[1].getTime() &&
  (typeof state.disabledDate === 'function' ? !state.disabledDate(value[1]) && !state.disabledDate(value[0]) : true)

export const resetView = (state) => () => {
  state.minDate = state.value && isDate(state.value[0]) ? new Date(state.value[0]) : null
  state.maxDate = state.value && isDate(state.value[0]) ? new Date(state.value[1]) : null
}

export const watchModelValue =
  ({ state }) =>
  (val) => {
    const newVal = toDate1(val?.[0])
    const newVal1 = toDate1(val?.[1])
    if (newVal && newVal1) {
      const start = modifyDate(newVal, newVal.getFullYear(), newVal.getMonth() + 1, newVal.getUTCDate())
      const end = modifyDate(newVal1, newVal1.getFullYear(), newVal1.getMonth() + 1, newVal1.getUTCDate())
      state.value = [start, end]
      state.minDate = start
      state.maxDate = end
      state.leftDate = start
      state.rightDate = end
    }
  }
