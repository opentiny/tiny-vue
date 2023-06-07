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
import { range, nextDate, getDayCountOfYear } from '../common/deps/date-util'
import { arrayFindIndex, coerceTruthyValueToArray, arrayFind } from '../date-table'
import { DATEPICKER } from '../common'

const datesInYear = (year) => {
  const numOfDays = getDayCountOfYear(year)
  const firstDay = new Date(year, 0, 1)

  return range(numOfDays).map((n) => nextDate(firstDay, n))
}

export const getCellStyle = ({ props }) => (cell) => {
  const { defaultValue } = props
  const year = cell.text
  const style = {}
  const today = new Date()

  style.disabled = typeof props.disabledDate === 'function' ? datesInYear(year).every(props.disabledDate) : false

  const execDate = typeof props.value === 'object' ? props.value : toDate(props.value)

  style.current = arrayFindIndex(coerceTruthyValueToArray(execDate), (date) => date.getFullYear() === year) >= 0
  style.today = today.getFullYear() === year
  style.default = Array.isArray(defaultValue)
    ? defaultValue.some((v) => v && v.getFullYear() === year)
    : defaultValue && defaultValue.getFullYear() === year

  if (cell.inRange) {
    style[DATEPICKER.InRange] = true
  }

  if (cell.start) {
    style[DATEPICKER.StartDate] = true
  }

  if (cell.end) {
    style[DATEPICKER.EndDate] = true
  }

  return style
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

export const getRows = ({ props, state, vm }) => () => {
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
      cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(year, 0, 1))

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

export const markRange = ({ props, state }) => (min, max) => {
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

export const watchDate = ({ api, props }) => (value, oldvalue) => {
  if (value !== oldvalue) {
    api.markRange(props.minDate, props.maxDate)
  }
}

export const handleYearTableClick = ({ emit, props }) => (event) => {
  const target = event.target
  const { selectionMode } = props

  if (target.tagName === 'A') {
    if (hasClass(target.parentNode.parentNode, 'disabled')) {
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

export const handleMouseMove = ({ emit, props, state }) => (event) => {
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

