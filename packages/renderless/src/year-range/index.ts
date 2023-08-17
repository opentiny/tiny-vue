import { isDate, nextYear, nextMonth } from '../common/deps/date-util'
import { DATEPICKER } from '../common'

export const calcDefaultValue = (value) => {
  if (Array.isArray(value)) {
    return [new Date(value[0]), new Date(value[1])]
  } else if (value) {
    return [new Date(value), nextMonth(new Date(value))]
  }

  return [new Date(), nextMonth(new Date())]
}

export const watchValue =
  ({ state }) =>
  (data) => {
    if (!data) {
      state.minDate = null
      state.maxDate = null
    } else if (Array.isArray(data)) {
      if (isDate(data[1])) {
        state.maxDate = new Date(data[1])
      } else {
        state.maxDate = null
      }

      if (isDate(data[0])) {
        state.minDate = new Date(data[0])
      } else {
        state.minDate = null
      }

      if (!state.minDate) {
        state.leftDate = calcDefaultValue(state.defaultValue)[0]
        state.rightDate = nextYear(state.leftDate)
      } else {
        state.leftDate = state.minDate

        if (state.maxDate && state.unlinkPanels) {
          const minDateYear = state.minDate.getFullYear()
          const maxDateYear = state.maxDate.getFullYear()

          state.rightDate = maxDateYear === minDateYear ? nextYear(state.maxDate) : state.maxDate
        } else {
          state.rightDate = nextYear(state.leftDate)
        }
      }
    }
  }

export const handleClear =
  ({ emit, state }) =>
  () => {
    state.maxDate = null
    state.minDate = null

    state.leftDate = calcDefaultValue(state.defaultValue)[0]
    state.rightDate = nextYear(state.leftDate)

    emit('pick', null)
  }

export const handleChangeRange = (state) => (val) => {
  state.rangeState = val.rangeState
  state.minDate = val.minDate
  state.maxDate = val.maxDate
}

export const watchDefaultValue =
  ({ state }) =>
  (data) => {
    if (!Array.isArray(state.value)) {
      const [left, right] = calcDefaultValue(data)

      state.leftDate = left

      state.rightDate =
        data && data[1] && left.getFullYear() !== right.getFullYear() && state.unlinkPanels
          ? right
          : nextYear(state.leftDate)
    }
  }

export const handleRangePick =
  ({ api, state }) =>
  (val, close = true) => {
    const maxDate = val.maxDate
    const minDate = val.minDate

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

export const handleShortcutClick = (api) => (shortcutEvent) => {
  if (shortcutEvent.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        api.doPick(start, end)
      }
    }

    shortcutEvent.onClick(choose)
  }
}

export const doPick = (emit) => (begin, end) => {
  emit('pick', [begin, end], false)
}

export const leftPrevYear = (state) => () => {
  state.leftStartYear = state.leftStartYear - DATEPICKER.PanelYearNum * 2
}

export const rightNextYear = (state) => () => {
  state.leftStartYear = state.leftStartYear + DATEPICKER.PanelYearNum * 2
}

export const handleConfirm =
  ({ api, emit, state }) =>
  (show = false) => {
    const { minDate, maxDate } = state

    api.isValidValue([minDate, maxDate]) && emit('pick', [new Date(minDate, 0, 2), new Date(maxDate, 0, 2)], show)
  }

export const isValidValue = (state) => (data) => {
  return (
    data &&
    Array.isArray(data) &&
    data[1] &&
    data[0] &&
    isDate(data[1]) &&
    isDate(data[0]) &&
    data[0] <= data[1] &&
    (typeof state.disabledDate === 'function' ? !state.disabledDate(data[1]) && !state.disabledDate(data[0]) : true)
  )
}

export const resetView = (state) => () => {
  state.maxDate = state.value && isDate(state.value[0]) ? new Date(state.value[1]) : null
  state.minDate = state.value && isDate(state.value[0]) ? new Date(state.value[0]) : null
}
