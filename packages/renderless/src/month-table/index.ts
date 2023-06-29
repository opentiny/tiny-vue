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
import { hasClass } from '../common/deps/dom'
import { range as rangeDate, getDayCountOfMonth, nextDate } from '../common/deps/date-util'
import { arrayFindIndex, coerceTruthyValueToArray, arrayFind } from '../date-table'
import { DATEPICKER } from '../common'

export const datesInMonth = (year, month) => {
  const numOfDays = getDayCountOfMonth(year, month)
  const firstDay = new Date(year, month, 1)

  return rangeDate(numOfDays).map((n) => nextDate(firstDay, n))
}

export const clearDate = (date) => new Date(date.getFullYear(), date.getMonth())

export const getMonthTimestamp = (time) => {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime()
  } else if (time instanceof Date) {
    return clearDate(time).getTime()
  }

  return NaN
}

export const getRows = ({ props, state, vm }) => () => {
  const tableRows = state.tableRows
  const disabledDate = state.disabledDate
  const selectedDate = []
  const now = getMonthTimestamp(new Date())
  const { date, minDate, maxDate } = props

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

      cell.type = DATEPICKER.Normal

      const index = i * 4 + j
      const time = new Date(date.getFullYear(), index).getTime()

      cell.start = minDate && time === getMonthTimestamp(minDate)
      cell.end = maxDate && time === getMonthTimestamp(maxDate)
      cell.inRange = time >= getMonthTimestamp(minDate) && time <= getMonthTimestamp(maxDate)

      const isToday = time === now

      if (isToday) {
        cell.type = DATEPICKER.Today
      }

      cell.text = index

      let cellDate = new Date(time)

      cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate)
      cell.selected = arrayFind(selectedDate, (selectDate) => selectDate.getTime() === cellDate.getTime())

      vm.$set(row, j, cell)
    }
  }

  return tableRows
}

export const markRange = ({ props, state }) => (minDate, maxDate) => {
  minDate = getMonthTimestamp(minDate)
  maxDate = getMonthTimestamp(maxDate)
  if (minDate > maxDate) {
    [minDate, maxDate] = [maxDate, minDate]
  }
  const rows = state.rows

  for (let i = 0, len = rows.length; i < len; i++) {
    const row = rows[i]

    for (let j = 0, l = row.length; j < l; j++) {
      const cell = row[j]
      const index = i * 4 + j
      const time = new Date(props.date.getFullYear(), index).getTime()

      cell.start = minDate && time === minDate
      cell.end = maxDate && time === maxDate
      cell.inRange = minDate && time >= minDate && time <= maxDate
    }
  }
}

export const watchDate = ({ api, props }) => (value, oldvalue) => {
  if (getMonthTimestamp(value) !== getMonthTimestamp(oldvalue)) {
    api.markRange(props.minDate, props.maxDate)
  }
}

const getTarget = (event) => {
  let target = event.target

  if (target.tagName === 'A') {
    target = target.parentNode.parentNode
  }

  if (target.tagName === 'DIV') {
    target = target.parentNode
  }

  if (target.tagName !== 'TD') {
    return
  }

  return target
}

export const handleMouseMove = ({ api, emit, props, state }) => (event) => {
  if (!props.rangeState.selecting) {
    return
  }

  const target = getTarget(event)

  if (!target) {
    return
  }

  const row = target.parentNode.rowIndex
  const colu = target.cellIndex

  if (state.rows[row][colu].disabled) {
    return
  }

  if (row !== state.lastRow || colu !== state.lastColumn) {
    state.lastColumn = colu
    state.lastRow = row

    emit('changerange', {
      maxDate: props.maxDate,
      minDate: props.minDate,
      rangeState: {
        selecting: true,
        endDate: api.getMonthOfCell(row * 4 + colu)
      }
    })
  }
}

export const handleMonthTableClick = ({ api, emit, props }) => (event) => {
  const target = getTarget(event)

  if (!target) {
    return
  }

  if (hasClass(target, 'disabled')) {
    return
  }

  const column = target.cellIndex
  const row = target.parentNode.rowIndex
  const month = row * 4 + column
  const newDate = api.getMonthOfCell(month)

  if (props.selectionMode === DATEPICKER.Range) {
    if (props.rangeState.selecting) {
      if (newDate < props.minDate) {
        emit('pick', { minDate: newDate, maxDate: props.minDate })
      } else {
        emit('pick', { minDate: props.minDate, maxDate: newDate })
      }

      props.rangeState.selecting = false
    } else {
      emit('pick', { minDate: newDate, maxDate: null })
      props.rangeState.selecting = true
    }
  } else {
    emit('pick', month)
  }
}

export const cellMatchesDate = (props) => (cell, date) => {
  const value = new Date(date)

  return props.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth()
}

export const getCellStyle = ({ api, props }) => (cell) => {
  const style = {}
  const year = props.date.getFullYear()
  const today = new Date()
  const month = cell.text

  const defaultValue = props.defaultValue ? (Array.isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue]) : []

  style.disabled = typeof props.disabledDate === 'function' ? datesInMonth(year, month).every(props.disabledDate) : false

  const execDate = typeof props.value === 'object' ? props.value : toDate(props.value)

  style.current = arrayFindIndex(coerceTruthyValueToArray(execDate), (date) => date.getFullYear() === year && date.getMonth() === month) >= 0

  style.today = today.getFullYear() === year && today.getMonth() === month
  style.default = defaultValue.some((date) => api.cellMatchesDate(cell, date))

  if (cell.inRange) {
    style[DATEPICKER.InRange] = true

    if (cell.start) {
      style[DATEPICKER.StartDate] = true
    }

    if (cell.end) {
      style[DATEPICKER.EndDate] = true
    }
  }

  return style
}

export const getMonthOfCell = (props) => (month) => new Date(props.date.getFullYear(), month, 1)
