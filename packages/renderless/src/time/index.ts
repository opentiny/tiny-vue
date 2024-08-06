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

import { limitTimeRange, formatDate, clearMilliseconds, timeWithinRange } from '../common/deps/date-util'

export const watchValue =
  ({ api, nextTick, state }) =>
  (value) => {
    let date

    if (value instanceof Date) {
      date = limitTimeRange(value, state.selectableRange, state.format)
    } else if (!value) {
      date = state.defaultValue ? new Date(state.defaultValue) : new Date()
    }

    state.date = date

    if (state.visible && state.needInitAdjust) {
      nextTick(() => api.adjustSpinners())

      state.needInitAdjust = false
    }
  }

export const watchVisible =
  ({ nextTick, vm, state, api }) =>
  (value) => {
    if (value) {
      nextTick(() => {
        state.oldValue = state.value
        vm.$refs.spinner.emitSelectRange('hours')
        api.adjustSpinners()
      })
    } else {
      state.needInitAdjust = true
    }
  }

export const handleCancel =
  ({ state, emit }) =>
  () => {
    emit('pick', state.oldValue, false)
  }

export const handleChange =
  ({ api, state, emit }) =>
  (date) => {
    if (state.visible) {
      state.date = clearMilliseconds(date)

      if (api.isValidValue(state.date)) {
        emit('pick', state.date, true)
      }
    }
  }

export const setSelectionRange =
  ({ state, emit }) =>
  (start, end) => {
    emit('select-range', start, end)
    state.selectionRange = [start, end]
  }

export const handleConfirm =
  ({ state, emit }) =>
  (visible = false, first = null) => {
    if (first) {
      return
    }

    const date = clearMilliseconds(limitTimeRange(state.date, state.selectableRange, state.format))

    emit('pick', date, visible, first)
  }

export const handleKeydown =
  ({ api, vm }) =>
  (event) => {
    const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 }
    const keyCode = event.keyCode

    if (keyCode === 37 || keyCode === 39) {
      const key = mapping[keyCode]

      api.changeSelectionRange(key)

      event.preventDefault()
      return
    }

    // Up or Down
    if (keyCode === 38 || keyCode === 40) {
      const key = mapping[keyCode]

      vm.$refs.spinner.scrollDown(key)

      event.preventDefault()
    }
  }

export const isValidValue =
  ({ state }) =>
  (date) =>
    timeWithinRange(date, state.selectableRange, state.format)

export const adjustSpinners = (vm) => () => vm.$refs.spinner.adjustSpinners()

export const changeSelectionRange =
  ({ vm, state }) =>
  (step) => {
    const list = [0, 3].concat(state.showSeconds ? [6] : [])
    const mapping = ['hours', 'minutes'].concat(state.showSeconds ? ['seconds'] : [])
    const index = list.indexOf(state.selectionRange[0])
    const next = (index + step + list.length) % list.length

    vm.$refs.spinner.emitSelectRange(mapping[next])
  }

export const displayValue =
  ({ state, t }) =>
  () => {
    const formattedValue = formatDate(state.value, state.format, t)

    return formattedValue
  }
