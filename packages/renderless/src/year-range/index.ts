import { DATEPICKER, formatDate, isDate1 as isDate, nextYear, nextMonth1 as nextMonth } from '@opentiny/utils'

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
  ({ api, state, props }) =>
  (val, close = true) => {
    if (props.readonly) {
      return
    }
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

export const handleShortcutClick = (state, api, props) => (shortcutEvent) => {
  if (shortcutEvent.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        // 面板直接使用快捷选项
        if (props.shortcuts?.length) {
          state.value = [start, end]
          state.leftStartYear = Math.floor(start.getFullYear() / 10) * 10
          state.rightStartYear = state.leftStartYear + DATEPICKER.PanelYearNum
          state.leftDate = start
          state.rightDate = end
          api.handleRangePick({
            minDate: isDate(start) ? start.getFullYear() : start,
            maxDate: isDate(end) ? end.getFullYear() : end
          })
        } else {
          api.doPick(start, end)
        }
      }
    }

    shortcutEvent.onClick(choose)
  }
}

export const doPick = (emit) => (begin, end) => {
  emit('pick', [begin, end], false)
}

export const leftPrevYear = (state, api) => () => {
  state.leftStartYear = state.leftStartYear - DATEPICKER.PanelYearNum
  if (!state.unlinkPanels) {
    api.rightPrevYear()
  }
}
export const leftNextYear = (state) => () => {
  state.leftStartYear = state.leftStartYear + DATEPICKER.PanelYearNum
}

export const rightPrevYear = (state) => () => {
  state.rightStartYear = state.rightStartYear - DATEPICKER.PanelYearNum
}

export const rightNextYear = (state, api) => () => {
  state.rightStartYear = state.rightStartYear + DATEPICKER.PanelYearNum
  if (!state.unlinkPanels) {
    api.leftNextYear()
  }
}

export const handleConfirm =
  ({ api, emit, state, t }) =>
  (show = false) => {
    const { minDate, maxDate } = state
    const newMin = minDate ? new Date(minDate, 0, 2) : null
    const newMax = maxDate ? new Date(maxDate, 0, 2) : null
    if (api.isValidValue([newMin, newMax])) {
      emit('pick', [newMin, newMax], show)
      const defaultFormat = DATEPICKER.DateFormats.year
      const start = formatDate(newMin, defaultFormat, t)
      const end = formatDate(newMax, defaultFormat, t)
      emit('update:modelValue', [start, end])
      emit('select-change', [start, end])
    }
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

export const watchModelValue =
  ({ state }) =>
  (val) => {
    if (val?.length === 2) {
      const start = new Date(val[0], 0, 2)
      const end = new Date(val[1], 0, 2)
      state.value = [start, end]
      state.minDate = start
      state.maxDate = end
      state.leftDate = start
      state.rightDate = end
    }
  }
