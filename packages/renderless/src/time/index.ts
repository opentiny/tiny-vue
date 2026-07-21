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

import { limitTimeRange, formatDate, clearMilliseconds, timeWithinRange } from '@opentiny/utils'

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
        api.adjustPosition()
      })
    } else {
      state.needInitAdjust = true
    }
  }

export const adjustPosition =
  ({ vm, state }) =>
  () => {
    const panel = vm.$el
    if (!panel) return

    // 获取父容器(date-picker 的输入框)的位置
    // time-panel 是绝对定位,相对于最近的定位祖先元素
    const parentElement = panel.parentElement
    if (!parentElement) return

    const parentRect = parentElement.getBoundingClientRect()
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth

    // 获取面板宽度(用于计算是否会超出)
    const panelWidth = panel.offsetWidth || 240 // 默认宽度

    // 基于父容器位置判断:如果从父容器左侧开始放置面板会超出右边界
    const wouldOverflowRight = parentRect.left + panelWidth > viewportWidth
    // 基于父容器位置判断:如果从父容器右侧开始放置面板会超出左边界
    const wouldOverflowLeft = parentRect.right - panelWidth < 0

    // 根据预测的超出情况调整定位
    if (wouldOverflowRight && !wouldOverflowLeft) {
      // 右侧会超出,使用右对齐
      state.alignDirection = 'right'
    } else if (wouldOverflowLeft && !wouldOverflowRight) {
      // 左侧会超出,使用左对齐
      state.alignDirection = 'left'
    } else {
      // 不超出,使用默认定位
      state.alignDirection = ''
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
