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

import { clearMilliseconds, timeWithinRange, limitTimeRange, modifyDate } from '../common/deps/date-util'

export const minTimeOfDay =
  ({ MIN_TIME }) =>
  (date) =>
    modifyDate(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate())

export const maxTimeOfDay =
  ({ MAX_TIME }) =>
  (date) =>
    modifyDate(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate())

export const advanceTime = (api) => (date, amount) =>
  new Date(Math.min(date.getTime() + amount, api.maxTimeOfDay(date).getTime()))

export const compuAmPmMode = (state) => () => {
  if ((state.format || '').includes('A')) {
    return 'A'
  }
  if ((state.format || '').includes('a')) {
    return 'a'
  }
  return ''
}

export const watchValue =
  ({ api, state }) =>
  (value) => {
    if (Array.isArray(value)) {
      if (value[0]) {
        state.minDate = new Date(value[0])
      } else {
        state.minDate = value[1] ? new Date(api.minTimeOfDay(new Date(value[1])).getTime()) : new Date()
      }

      if (value[1]) {
        state.maxDate = new Date(value[1])
      } else {
        state.maxDate = value[0]
          ? api.advanceTime(new Date(value[0]), 60 * 60 * 1000)
          : api.advanceTime(new Date(), 60 * 60 * 1000)
      }
    } else {
      if (Array.isArray(state.defaultValue)) {
        state.minDate = new Date(state.defaultValue[0])
        state.maxDate = new Date(state.defaultValue[1])
      } else if (state.defaultValue) {
        state.minDate = new Date(state.defaultValue)
        state.maxDate = api.advanceTime(new Date(state.defaultValue), 60 * 60 * 1000)
      } else {
        state.minDate = new Date()
        state.maxDate = api.advanceTime(new Date(), 60 * 60 * 1000)
      }
    }
  }

export const adjustSpinners =
  ({ vm }) =>
  () => {
    if (vm.$refs.minSpinner) {
      vm.$refs.minSpinner.adjustSpinners()
      vm.$refs.maxSpinner.adjustSpinners()
    }
  }

const setMaxMinData = (state) => {
  if (Array.isArray(state.oldValue)) {
    state.oldValue[0] && (state.minDate = clearMilliseconds(state.oldValue[0]))
    state.oldValue[1] && (state.maxDate = clearMilliseconds(state.oldValue[1]))
  }
}

export const watchVisible =
  ({ nextTick, api, state }) =>
  (value) => {
    if (value) {
      state.oldValue = state.value

      nextTick(() => {
        setMaxMinData(state)
        api.adjustSpinners()
      })
    }
  }

export const handleClear = (emit) => () => emit('pick', null)

export const handleCancel =
  ({ emit, api, state }) =>
  () => {
    state.visible = false

    emit('pick', state.oldValue)

    setMaxMinData(state)
    api.adjustSpinners()
  }

export const handleMinChange =
  ({ api, state }) =>
  (date) => {
    state.minDate = clearMilliseconds(date)
    api.handleChange()
  }

export const handleMaxChange =
  ({ api, state }) =>
  (date) => {
    state.maxDate = clearMilliseconds(date)
    api.handleChange()
  }

export const handleChange =
  ({ api, emit, vm, state }) =>
  () => {
    if (!vm.$refs.minSpinner || !vm.$refs.maxSpinner) return
    if (api.isValidValue([state.minDate, state.maxDate])) {
      vm.$refs.minSpinner.state.selectableRange = [[api.minTimeOfDay(state.minDate), state.maxDate]]
      vm.$refs.maxSpinner.state.selectableRange = [[state.minDate, api.maxTimeOfDay(state.maxDate)]]

      emit('pick', [state.minDate, state.maxDate], state.visible)
    }
  }

export const setMinSelectionRange =
  ({ emit, state }) =>
  (start, end) => {
    emit('select-range', start, end, 'min')
    state.selectionRange = [start, end]
  }

export const setMaxSelectionRange =
  ({ emit, state }) =>
  (start, end) => {
    emit('select-range', start, end, 'max')
    state.selectionRange = [start + state.offset, end + state.offset]
  }

export const handleConfirm =
  ({ emit, vm, state }) =>
  (visible = false) => {
    const minSelectableRange = vm.$refs.minSpinner.state.selectableRange
    const maxSelectableRange = vm.$refs.maxSpinner.state.selectableRange

    state.minDate = limitTimeRange(state.minDate, minSelectableRange, state.format)
    state.maxDate = limitTimeRange(state.maxDate, maxSelectableRange, state.format)

    emit('pick', [state.minDate, state.maxDate], visible)
  }

export const changeSelectionRange =
  ({ vm, state }) =>
  (step) => {
    const list = state.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11]
    const mapping = ['hours', 'minutes'].concat(state.showSeconds ? ['seconds'] : [])
    const index = list.indexOf(state.selectionRange[0])
    const next = (index + step + list.length) % list.length
    const half = list.length / 2

    if (next < half) {
      vm.$refs.minSpinner.emitSelectRange(mapping[next])
    } else {
      vm.$refs.maxSpinner.emitSelectRange(mapping[next - half])
    }
  }

export const isValidValue =
  ({ vm, state }) =>
  (date) =>
    Array.isArray(date) &&
    timeWithinRange(state.minDate, vm.$refs.minSpinner.state.selectableRange) &&
    timeWithinRange(state.maxDate, vm.$refs.maxSpinner.state.selectableRange)

export const handleKeydown =
  ({ api, state }) =>
  (event) => {
    const keyCode = event.keyCode
    const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 }

    // Left or Right
    if (keyCode === 37 || keyCode === 39) {
      const step = mapping[keyCode]

      api.changeSelectionRange(step)
      event.preventDefault()
      return
    }

    // Up or Down
    if (keyCode === 38 || keyCode === 40) {
      const step = mapping[keyCode]

      state.spinner.scrollDown(step)
      event.preventDefault()
    }
  }
