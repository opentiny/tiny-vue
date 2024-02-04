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

import { copyArray } from '../common/object'
import { lastMonth, nextMonth, getCalendar, transformArray, parseDate } from '../common/calendar/calendar'

export const computedCalendar =
  ({ state }) =>
  () => {
    const calendar = getCalendar(state.activeYear, state.activeMonth)
    const result = []

    if (calendar) {
      const { last, current, next } = calendar

      if (last && calendar.last.end >= calendar.last.start) {
        for (let i = last.start; i <= last.end; i++) {
          result.push({ value: i, isLast: true })
        }
      }
      /* istanbul ignore else */
      if (current) {
        for (let i = current.start; i <= current.end; i++) {
          result.push({ value: i })
        }
      }

      if (next.end >= next.start) {
        for (let i = next.start; i <= next.end; i++) {
          result.push({ value: i, isNext: true })
        }
      }
    }

    return transformArray(result)
  }

export const computedEventList =
  ({ props, state }) =>
  () => {
    let result = []

    if (props.events && props.events.length) {
      result = props.events.filter((item) => {
        const { year, month } = parseDate(item.time)

        return Number(state.activeYear) === year && Number(state.activeMonth) === month
      })
    }

    return result
  }

export const toggeModel = (state) => (mode) => {
  const isYearOrMonth = /^(year|month)$/.test(mode)

  state.displayMode = isYearOrMonth ? mode : state.displayMode === 'year' ? 'month' : 'year'
}

/**
 * 选中月份
 * @private
 * @param {Number} month - 月份
 */
export const selectMonth = (state) => (month) => {
  if (month && typeof month === 'number' && month <= 12) {
    state.activeMonth = month
  }
}

/**
 * 选中日
 * @public
 * @param {Number} day
 */
export const selectDay = (state) => (day) => {
  if (day && day.value) {
    if (day.isLast) {
      const { year, month } = lastMonth(state.activeYear, state.activeMonth)

      state.activeMonth = month
      state.activeYear = year
    }

    if (day.isNext) {
      const { year, month } = nextMonth(state.activeYear, state.activeMonth)

      state.activeMonth = month
      state.activeYear = year
    }

    state.selectedTip = `You selected date: ${state.activeYear}-${state.activeMonth}-${day.value}`

    state.selectedDate = Number(new Date(`${state.activeYear}/${state.activeMonth}/${day.value}`))
  }
}

/**
 * 获取指定日期的事件
 * @private
 * @param {Number} day
 * @returns {Array}
 */
export const getEventByDay = (state) => (day) => {
  let events = []

  if (state.eventList && state.eventList.length) {
    events = copyArray(state.eventList)
      .filter(({ time }) => {
        const date = new Date(time)

        return (
          date.getDate() === day &&
          date.getFullYear() === Number(state.activeYear) &&
          date.getMonth() + 1 === Number(state.activeMonth)
        )
      })
      .map((event) => {
        event.parseTime = parseDate(event.time)
        return event
      })
  }

  return events
}

/**
 * 获取指定月份的事件
 * @private
 * @param {Number} month
 * @returns {Array}
 */
export const getEventByMonth =
  ({ props, state }) =>
  (month) => {
    let events = []

    if (props.events) {
      events = copyArray(props.events)
        .filter(({ time }) => {
          const date = new Date(time)

          return date.getFullYear() === Number(state.activeYear) && date.getMonth() + 1 === month
        })
        .map((event) => {
          event.parseTime = parseDate(event.time)
          return event
        })
    }

    return events
  }

/**
 * 获取时间戳
 * @private
 * @param {Number} day
 * @returns {Number}
 */
export const getTime = (state) => (day) => Number(new Date(`${state.activeYear}/${state.activeMonth}/${day}`))

/**
 * 获取年列表（今年上下10年）
 * @private
 * @returns {Array}
 */
export const getYearList = () => () => {
  const date = new Date()
  const year = date.getFullYear()
  const yesrs = []

  for (let i = year - 10; i < year + 10; i++) {
    yesrs.push(i)
  }

  return yesrs
}

/**
 * 是否是今天
 * @private
 * @param {Number} day
 * @returns {Boolean}
 */
export const isToday = (state) => (day) => {
  const date = new Date()
  let year = Number(state.activeYear)
  let month = Number(state.activeMonth)

  if (day.isLast) {
    const lastDate = lastMonth(state.activeYear, state.activeMonth)

    year = lastDate.year
    month = lastDate.month
  }

  if (day.isNext) {
    const nextDate = nextMonth(state.activeYear, state.activeMonth)

    year = nextDate.year
    month = nextDate.month
  }

  return date.getDate() === day.value && date.getFullYear() === year && date.getMonth() + 1 === month
}

/**
 * 是否是当月
 * @private
 * @param {Number} month
 * @returns {Boolean}
 */
export const isThisMonth = (state) => (month) => {
  const date = new Date()
  const year = Number(state.activeYear)

  return date.getMonth() + 1 === month && date.getFullYear() === year
}

/**
 * 生成月份（3*4数组）
 * @private
 * @param {Number} month
 * @returns {Boolean}
 */
export const genMonths = () => {
  const result = []
  let index = 1

  for (let i = 0; i < 3; i++) {
    result[i] = []

    for (let j = 0; j < 4; j++) {
      result[i][j] = index++
    }
  }

  return result
}

/**
 * 选中当前日期
 * @private
 * @returns {Number}
 */
export const toToday = (state) => () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()

  state.activeMonth = month
  state.activeYear = year

  state.selectedTip = `You selected date: ${year}-${month}-${day}`
  state.selectedDate = Number(new Date(`${year}/${month}/${day}`))
}

/**
 * 获取当前日期
 * @private
 * @returns {Number}
 */
export const getCurrentDate = () => {
  const day = new Date().getDate()
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()

  return Number(new Date(`${year}/${month}/${day}`))
}
