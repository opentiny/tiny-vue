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

import { isDate, modifyWithTimeString, prevYear, nextYear, nextMonth } from '@opentiny/vue-renderless/common/deps/date-util'

export const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])]
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))]
  }

  return [new Date(), nextMonth(new Date())]
}

export const watchValue = ({ state }) => (value) => {
  if (!value) {
    state.maxDate = null
    state.minDate = null
  } else if (Array.isArray(value)) {
    if (isDate(value[0])) {
      state.minDate = new Date(value[0])
    } else {
      state.minDate = null
    }

    if (isDate(value[1])) {
      state.maxDate = new Date(value[1])
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

export const watchDefaultValue = ({ state }) => (value) => {
  if (!Array.isArray(state.value)) {
    const [left, right] = calcDefaultValue(value)

    state.leftDate = left

    state.rightDate = value && value[1] && left.getFullYear() !== right.getFullYear() && state.unlinkPanels ? right : nextYear(state.leftDate)
  }
}

export const handleClear = ({ emit, state }) => () => {
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

export const handleRangePick = ({ api, state, t }) => (val, close = true) => {
  const defaultTime = state.defaultTime || []
  const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1], t)
  const minDate = modifyWithTimeString(val.minDate, defaultTime[0], t)

  if (state.minDate === minDate && state.maxDate === maxDate) {
    return
  }

  if (state.onPick) {
    state.onPick(val)
  }

  state.minDate = minDate
  state.maxDate = maxDate

  setTimeout(() => {
    state.minDate = minDate
    state.maxDate = maxDate
  }, 10)

  if (!close) {
    return
  }

  api.handleConfirm()
}

export const handleShortcutClick = (api) => (shortcut) => {
  if (shortcut.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        api.doPick(start, end)
      }
    }

    shortcut.onClick(choose)
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

export const handleConfirm = ({ api, emit, state }) => (visible = false) => {
  if (api.isValidValue([state.minDate, state.maxDate])) {
    emit('pick', [state.minDate, state.maxDate], visible)
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
