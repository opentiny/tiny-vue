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

import { formatDate } from '../common/deps/date-util'
import {
  getFirstDayOfMonth,
  getDayCountOfMonth,
  getWeekNumber,
  prevDate,
  nextDate,
  isDate,
  clearTime
} from '../common/deps/date-util'
import { DATEPICKER } from '../common'

const formatJudg = ({ day, offset, j, i, cell, count, dateCountOfLastMonth }) => {
  const nodfpm = day + offset <= 0 ? 7 + day + offset : day + offset

  if (j + i * 7 >= nodfpm) {
    cell.text = count++
  } else {
    cell.text = dateCountOfLastMonth - (nodfpm - (j % 7)) + 1 + i * 7
    cell.type = DATEPICKER.PreMonth
  }

  return { count }
}

export const getOffsetDay = (props) => () => {
  const week = props.firstDayOfWeek
  return week > 3 ? 7 - week : -week
}

export const getWeeks =
  ({ props, state }) =>
  () => {
    const week = props.firstDayOfWeek
    return state.constWeeks.concat(state.constWeeks).slice(week, week + 7)
  }

export const getDateTimestamp = (time) => {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearTime(new Date(time)).getTime()
  } else if (time instanceof Date) {
    return clearTime(time).getTime()
  }

  return NaN
}

// tiny 新增： api参数多余，优化掉
const getSelected = (props, cell, format, t, cellDate, selectedDate) => {
  let selected = cell.selected

  if (props.selectionMode === 'dates') {
    selected = arrayFind(selectedDate, (date) => formatDate(date, format, t) === formatDate(cellDate, format, t))
  } else {
    selected = arrayFind(selectedDate, (date) => date.getTime() === cellDate.getTime())
  }

  return selected
}

export const getCell =
  ({ state, props }) =>
  (row, i, j) => {
    const now = getDateTimestamp(new Date())
    let cell = row[props.showWeekNumber ? j + 1 : j]

    if (!cell) {
      cell = { row: i, column: j, inRange: false, start: false, end: false, type: DATEPICKER.Normal }
    }

    cell.type = DATEPICKER.Normal

    const index = i * 7 + j
    const time = nextDate(state.startDate, index - state.offsetDay).getTime()

    cell.inRange = time >= getDateTimestamp(props.minDate) && time <= getDateTimestamp(props.maxDate)
    cell.start = props.minDate && time === getDateTimestamp(props.minDate)
    cell.end = props.maxDate && time === getDateTimestamp(props.maxDate)

    // isToday
    time === now && (cell.type = DATEPICKER.Today)

    return { cell, cellDate: new Date(time) }
  }

const doCount = ({ i, day, offset, j, cell, count, dateCountOfLastMonth, dateCountOfMonth }) => {
  if (i >= 0 && i <= 1) {
    const ret = formatJudg({ day, offset, j, i, cell, count, dateCountOfLastMonth })
    count = ret.count
  } else {
    if (count <= dateCountOfMonth) {
      cell.text = count++
    } else {
      cell.text = count++ - dateCountOfMonth
      cell.type = DATEPICKER.NextMonth
    }
  }

  return count
}

/**
 * 获取日期表格二维数组，用于渲染日期表格。
 *
 * 返回值的格式如下：
 * [
 *   [
 *     {
 *       text: 1,
 *       selected: true,
 *       ... // 每个数组项的类型为 IDateTableRow
 *     }
 *   ],
 *   ...
 * ]
 */
export const getRows =
  ({ api, props, state, t, vm }) =>
  () => {
    const date = new Date(state.year, state.month, 1)
    let day = getFirstDayOfMonth(date)
    const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth())
    const dateCountOfLastMonth = getDayCountOfMonth(
      date.getFullYear(),
      date.getMonth() === 0 ? 11 : date.getMonth() - 1
    )

    day = day === 0 ? 7 : day

    const offset = state.offsetDay
    const rows = state.tableRows
    const startDate = state.startDate
    const disabledDate = props.disabledDate
    const cellClassName = props.cellClassName
    const selectedDate = props.selectionMode === DATEPICKER.Dates ? coerceTruthyValueToArray(props.value) : []
    let count = 1

    const isFunction = props.formatWeeks instanceof Function

    const arr = []

    // 日期表格行，从0开始，共6行，[0, 5]
    for (let i = 0; i < 6; i++) {
      const row = rows[i]

      // 周次
      if (props.showWeekNumber) {
        row[0] = {
          type: DATEPICKER.Week,
          text: getWeekNumber(nextDate(startDate, i * 7 + 1))
        }
      }

      // Date 格式的日期表格
      arr[i] = []

      // 日期表格列，从0开始，共7列，[0, 6]。星期日为0，星期一为1，依此类推。
      for (let j = 0; j < 7; j++) {
        // 设置日期单元格的 row / column / inRange / start / end / type
        const { cell, cellDate } = api.getCell(row, i, j, DATEPICKER.Normal, props)

        // 设置日期单元格的 text / type
        count = doCount({ i, day, offset, j, cell, count, dateCountOfLastMonth, dateCountOfMonth })

        cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate)
        cell.selected = getSelected(props, cell, DATEPICKER.DateFormats.date, t, cellDate, selectedDate)
        cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate)

        // 更新日期表格的行数据，执行了这行代码，rows 中才会有数据
        vm.$set(row, props.showWeekNumber ? j + 1 : j, cell)

        arr[i].push(cellDate)
      }

      // 选择周
      if (props.selectionMode === DATEPICKER.Week) {
        const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6]
        const isWeekActive = api.isWeekActive(row[start + 1])

        Object.assign(row[start], { inRange: isWeekActive, start: isWeekActive })
        Object.assign(row[end], { inRange: isWeekActive, end: isWeekActive })
      }
    }

    // 周次的逻辑
    const res = []

    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i][0].getFullYear() + '/' + (arr[i][0].getMonth() + 1) + '/' + arr[i][0].getDate())
    }
    if (props.showWeekNumber && isFunction) {
      for (let i = 0; i < 6; i++) {
        let val = getWeekNumber(nextDate(startDate, i * 7 + 1))

        rows[i][0].text = props.formatWeeks(val, res)
      }
    }
    return rows
  }

export const arrayFindIndex = (arr, pred) => {
  for (let i = 0, len = arr.length; i !== len; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }

  return -1
}

export const arrayFind = (arr, pred) => {
  const idx = arrayFindIndex(arr, pred)
  return ~idx ? arr[idx] : undefined
}

export const coerceTruthyValueToArray = (val) => (Array.isArray(val) ? val : val ? [val] : [])

export const watchMinDate =
  ({ api, props }) =>
  (value, oldvalue) => {
    if (getDateTimestamp(value) !== getDateTimestamp(oldvalue)) {
      api.markRange(props.minDate, props.maxDate)
    }
  }

export const watchMaxDate =
  ({ api, props }) =>
  (value, oldvalue) => {
    if (getDateTimestamp(value) !== getDateTimestamp(oldvalue)) {
      api.markRange(props.minDate, props.maxDate)
    }
  }

export const cellMatchesDate = (state) => (cell, date) => {
  const value = new Date(date)

  return state.year === value.getFullYear() && state.month === value.getMonth() && Number(cell.text) === value.getDate()
}

export const getCellRangeClasses =
  ({ props }) =>
  (cell, classes) => {
    if (cell.type === DATEPICKER.Normal || cell.type === DATEPICKER.Today || props.selectionMode === DATEPICKER.Week) {
      classes.push(DATEPICKER.InRange)

      if (cell.start) {
        classes.push(DATEPICKER.StartDate)
      }

      if (cell.end) {
        classes.push(DATEPICKER.EndDate)
      }
    }
  }

export const getCellClasses =
  ({ api, props, state }) =>
  (cell) => {
    let classes = []
    const selectionMode = props.selectionMode

    const defaultValue = props.defaultValue
      ? Array.isArray(props.defaultValue)
        ? props.defaultValue
        : [props.defaultValue]
      : []

    if ((cell.type === DATEPICKER.Normal || cell.type === DATEPICKER.Today) && !cell.disabled) {
      classes.push(DATEPICKER.Aviailable)

      if (cell.type === DATEPICKER.Today) {
        classes.push(DATEPICKER.Today)
      }
    } else {
      classes.push(cell.type)
    }

    if (cell.type === DATEPICKER.Normal && defaultValue.some((date) => api.cellMatchesDate(cell, date))) {
      classes.push(DATEPICKER.Default)
    }

    if (
      selectionMode === DATEPICKER.Day &&
      ~[DATEPICKER.Normal, DATEPICKER.Today].indexOf(cell.type) &&
      api.cellMatchesDate(cell, props.value || state.date)
    ) {
      classes.push(DATEPICKER.Current)
    }

    if (cell.inRange) {
      api.getCellRangeClasses(cell, classes)
    }

    if (cell.disabled) {
      classes.push(DATEPICKER.Disabled)
    }

    if (cell.selected) {
      classes.push(DATEPICKER.Selected)
    }

    if (cell.customClass) {
      classes.push(cell.customClass)
    }

    return classes.join(' ')
  }

export const getDateOfCell =
  ({ props, state }) =>
  (row, column) => {
    const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - state.offsetDay

    return nextDate(state.startDate, offsetFromStart)
  }

export const isWeekActive =
  ({ props, state }) =>
  (cell) => {
    if (props.selectionMode !== DATEPICKER.Week) {
      return false
    }

    const newDate = new Date(state.year, state.month, 1)
    const year = newDate.getFullYear()
    const month = newDate.getMonth()

    if (cell.type === DATEPICKER.PreMonth) {
      newDate.setMonth(month === 0 ? 11 : month - 1)
      newDate.setFullYear(month === 0 ? year - 1 : year)
    }

    if (cell.type === DATEPICKER.NextMonth) {
      newDate.setMonth(month === 11 ? 0 : month + 1)
      newDate.setFullYear(month === 11 ? year + 1 : year)
    }

    newDate.setDate(parseInt(cell.text, 10))

    if (isDate(props.value)) {
      const dayOffset = ((props.value.getDay() - props.firstDayOfWeek + 7) % 7) - 1
      const weekDate = prevDate(props.value, dayOffset)

      return weekDate.getTime() === newDate.getTime()
    }

    return false
  }

export const markRange =
  ({ props, state }) =>
  (minDate, maxDate) => {
    const minDateTimestamp = getDateTimestamp(minDate)
    const maxDateTimestamp = getDateTimestamp(maxDate) || minDateTimestamp

    minDate = Math.min(minDateTimestamp, maxDateTimestamp)
    maxDate = Math.max(minDateTimestamp, maxDateTimestamp)

    const startDate = state.startDate
    const rows = state.rows

    for (let i = 0, k = rows.length; i < k; i++) {
      const row = rows[i]

      for (let j = 0, l = row.length; j < l; j++) {
        if (props.showWeekNumber && j === 0) continue

        const cell = row[j]
        const index = i * 7 + j + (props.showWeekNumber ? -1 : 0)
        const time = nextDate(startDate, index - state.offsetDay).getTime()

        cell.inRange = minDate && time >= minDate && time <= maxDate
        cell.start = minDate && time === minDate
        cell.end = maxDate && time === maxDate
      }
    }
  }

export const handleMouseMove =
  ({ api, emit, props, state }) =>
  (event) => {
    if (!props.rangeState.selecting) {
      return
    }

    let targetEl = event.target

    if (targetEl.tagName === 'SPAN') {
      targetEl = targetEl.parentNode.parentNode
    }

    if (targetEl.tagName === 'DIV') {
      targetEl = targetEl.parentNode
    }

    if (targetEl.tagName !== 'TD') {
      return
    }

    const row = targetEl.parentNode.rowIndex - 1
    const column = targetEl.cellIndex

    if (state.rows[row][column].disabled) {
      return
    }

    if (row !== state.lastRow || column !== state.lastColumn) {
      state.lastRow = row
      state.lastColumn = column

      emit('changerange', {
        minDate: props.minDate,
        maxDate: props.maxDate,
        rangeState: {
          selecting: true,
          endDate: api.getDateOfCell(row, column)
        }
      })
    }
  }

const getTarget = (event) => {
  let target = event.target

  if (target.tagName === 'SPAN') {
    target = target.parentNode.parentNode
  }

  if (target.tagName === 'DIV') {
    target = target.parentNode
  }

  return target
}

export const handleClick =
  ({ api, emit, props, state }) =>
  (event) => {
    let target = getTarget(event)

    if (target.tagName !== 'TD') {
      return
    }

    const row = target.parentNode.rowIndex - 1
    const column = props.selectionMode === DATEPICKER.Week ? 1 : target.cellIndex
    const cell = state.rows[row][column]

    if (cell.disabled || cell.type === DATEPICKER.Week) {
      return
    }

    const newDate = api.getDateOfCell(row, column)

    if (props.selectionMode === DATEPICKER.Range) {
      if (!props.rangeState.selecting) {
        props.rangeState.selecting = true
        emit('pick', { minDate: newDate, maxDate: null })
      } else {
        if (newDate >= props.minDate) {
          emit('pick', { minDate: props.minDate, maxDate: newDate })
        } else {
          emit('pick', { minDate: newDate, maxDate: props.minDate })
        }

        props.rangeState.selecting = false
      }
    } else if (props.selectionMode === DATEPICKER.Day) {
      emit('pick', newDate)
    } else if (props.selectionMode === DATEPICKER.Week) {
      const weekNumber = getWeekNumber(newDate)
      const value = newDate.getFullYear() + 'w' + weekNumber

      emit('pick', {
        year: newDate.getFullYear(),
        week: weekNumber,
        value,
        date: newDate
      })
    } else if (props.selectionMode === DATEPICKER.Dates) {
      const value = props.value || []

      const newValue = cell.selected
        ? removeFromArray(value, (date) => date.getTime() === newDate.getTime())
        : [...value, newDate]

      emit('pick', newValue)
    }
  }

export const removeFromArray = (arr, pred) => {
  const idx = typeof pred === 'function' ? arrayFindIndex(arr, pred) : arr.indexOf(pred)

  return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr
}

export const getCssToken =
  ({ api }) =>
  (cell, prexfix = '') => {
    const cssStr = api.getCellClasses(cell) || ''

    return cssStr.split(' ').map((className) => prexfix + className)
  }
