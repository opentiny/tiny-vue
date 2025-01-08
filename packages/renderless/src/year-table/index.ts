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

import { toDate } from '../common/date'
import { arrayFindIndex, coerceTruthyValueToArray, arrayFind } from '../date-table'
import { DATEPICKER } from '../common'

export const getIsDefault =
  ({ props }) =>
  (year) => {
    const { defaultValue } = props

    return Array.isArray(defaultValue)
      ? defaultValue.some((v) => v && v.getFullYear() === year)
      : defaultValue && defaultValue.getFullYear() === year
  }

export const getIsDisabled =
  ({ props }) =>
  (year) => {
    return props.selectionMode.startsWith('year') && typeof props.disabledDate === 'function'
      ? props.disabledDate(new Date(year, 0, 1, 0))
      : false
  }

export const getIsCurrent =
  ({ props }) =>
  (year) => {
    const execDate = typeof props.value === 'object' ? props.value : toDate(props.value)

    return arrayFindIndex(coerceTruthyValueToArray(execDate), (date) => date.getFullYear() === year) >= 0
  }

export const clearDate = (date) => {
  return new Date(date.getFullYear(), date.getMonth())
}

export const getMonthTimestamp = (time) => {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime()
  }

  if (time instanceof Date) {
    return clearDate(time).getTime()
  }

  return NaN
}

export const getRows =
  ({ props, state, vm }) =>
  () => {
    const { tableRows } = state
    const { minDate, maxDate, disabledDate, startYear, selectionMode } = props
    const selectedDate = []
    const now = new Date().getFullYear()

    for (let i = 0; i < 3; i++) {
      const row = tableRows[i]

      for (let j = 0; j < 4; j++) {
        let cell = row[j]

        if (!cell) {
          cell = {
            type: DATEPICKER.Normal,
            row: i,
            column: j,
            inRange: false,
            start: false,
            end: false
          }
        }

        const year = startYear + (cell.row * 4 + cell.column)
        const isToday = year === now

        cell.text = year
        cell.type = isToday ? DATEPICKER.Today : DATEPICKER.Normal
        if (props.selectionMode.startsWith('year')) {
          cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(year, 0, 1, 0))
        }

        if (selectionMode === DATEPICKER.YearRange) {
          const minYear = typeof minDate === 'object' && minDate ? minDate.getFullYear() : minDate
          const maxYear = typeof maxDate === 'object' && maxDate ? maxDate.getFullYear() : maxDate
          cell.start = minYear === year
          cell.end = maxYear === year
          cell.inRange = (year > minYear && year < maxYear) || [minYear, maxYear].includes(year)
          cell.selected = arrayFind(
            selectedDate,
            (item) => (typeof item === 'object' ? item.getFullYear() : item) === year
          )
        }

        vm.$set(row, j, cell)
      }
    }

    return tableRows
  }

export const markRange =
  ({ props, state }) =>
  (min, max) => {
    const rows = state.rows
    const [minDate, maxDate] = [min, max].sort((a, b) => (a && a < b ? -1 : 1))
    const minYear = typeof minDate === 'object' && minDate ? minDate.getFullYear() : minDate
    const maxYear = typeof maxDate === 'object' && maxDate ? maxDate.getFullYear() : maxDate

    if (props.selectionMode === DATEPICKER.YearRange) {
      for (let i = 0, len = rows.length; i < len; i++) {
        const row = rows[i]

        for (let j = 0, l = row.length; j < l; j++) {
          const cell = row[j]
          const year = cell.text
          cell.start = minYear && minYear === year
          cell.end = maxYear && maxYear === year
          cell.inRange = (year > minYear && year < maxYear) || cell.start || cell.end
          cell.selected = cell.inRange
        }
      }
    }
  }

export const watchDate =
  ({ api, props }) =>
  (value, oldvalue) => {
    if (value !== oldvalue) {
      api.markRange(props.minDate, props.maxDate)
    }
  }

export const handleYearTableClick =
  ({ emit, props }) =>
  (event) => {
    const target = event.target
    const { selectionMode } = props

    if (target.tagName === 'A') {
      if (target.hasAttribute('aria-disabled')) {
        return
      }

      const year = Number(target.textContent || target.innerText)

      if (selectionMode === DATEPICKER.Years) {
        const years = Array.isArray(props.value) ? props.value.map((v) => v.getFullYear()) : []

        const index = years.indexOf(year)

        if (index === -1) {
          years.push(year)
        } else {
          years.splice(index, 1)
        }

        emit('pick', years.slice())
      } else if (selectionMode === DATEPICKER.YearRange) {
        let { minDate, maxDate } = props

        if (props.rangeState.selecting) {
          props.rangeState.selecting = false

          if (year < minDate) {
            maxDate = minDate
            minDate = year
          } else {
            maxDate = year
          }
        } else {
          props.rangeState.selecting = true
          minDate = year
          maxDate = null
        }

        emit('pick', { minDate, maxDate })
      } else {
        emit('pick', year)
      }
    }
  }

const getTarget = (evt) => {
  let target = evt.target
  const tagName = target.tagName

  if (tagName === 'A') {
    target = target.parentNode.parentNode
  }

  if (tagName === 'DIV') {
    target = target.parentNode
  }

  if (tagName !== 'TD') {
    return
  }

  return target
}

export const handleMouseMove =
  ({ emit, props, state }) =>
  (event) => {
    const { selectionMode, startYear, rangeState, minDate, maxDate } = props

    if (selectionMode !== DATEPICKER.YearRange || !rangeState.selecting) {
      return
    }

    const target = getTarget(event)

    if (!target) {
      return
    }

    const row = target.parentNode.rowIndex
    const column = target.cellIndex

    if (state.rows[row][column].disabled || minDate === maxDate) {
      return
    }

    if (row !== state.lastRow || column !== state.lastColumn) {
      state.lastColumn = column
      state.lastRow = row

      const year = startYear + row * 4 + column

      emit('changerange', {
        minDate,
        maxDate,
        rangeState: {
          selecting: true,
          endDate: year
        }
      })
    }
  }
