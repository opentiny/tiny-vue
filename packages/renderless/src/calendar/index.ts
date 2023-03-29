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

import { isLeapYear } from '@opentiny/vue-renderless/common/date'
import { copyArray } from '@opentiny/vue-renderless/common/object'

/**
 * 获取指定年月的总天数
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @returns {Number} - 总天数
 */
export const getDays = (year, month) => [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]

/**
 * 根据日期获取星期
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @param {Number} month - 日
 * @returns {Number} - 星期
 */
export const getWeek = (year, month, day) => new Date(`${year}/${month}/${day}`).getDay()

/**
 * 上月日期
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @returns {Object} - 年月
 */
export const lastMonth = (year, month) => {
  // 年月转换成整型
  year = Number(year)
  month = Number(month)

  if (month === 1) {
    year--
    month = 12
  } else {
    month--
  }

  return { year, month }
}

/**
 * 下月日期
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @returns {Object} - 年月
 */
export const nextMonth = (year, month) => {
  // 年月转换成整型
  year = Number(year)
  month = Number(month)

  if (month === 12) {
    year++
    month = 1
  } else {
    month++
  }

  return { year, month }
}

/**
 * 获取日历数据
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @returns {Object} - 日历
 */
export const getCalendar = (year, month) => {
  if (year && month && month <= 12) {
    const days = getDays(year, month)
    const firstWeek = getWeek(year, month, 1)
    const lastWeek = getWeek(year, month, days)
    const last = lastMonth(year, month)
    const lastDays = getDays(last.year, last.month)

    let remainDays = 0
    const totalDays = days + firstWeek + 7 - lastWeek - 1

    // 补齐日期不足6行的（日期固定为6行）
    if (totalDays / 7 < 6 && totalDays / 7 >= 5) {
      remainDays = 6 * 7 - totalDays
    }

    return {
      last: {
        start: lastDays - (firstWeek - 1),
        end: lastDays
      },
      current: {
        start: 1,
        end: days
      },
      next: {
        start: 1,
        end: 7 - lastWeek - 1 + remainDays
      }
    }
  }
}

/**
 * 将一维数组转换成 7*N 的二维数组
 * @method
 * @param {Array} array - 一维数据
 * @returns {Array} - 7*N 日历数据
 */
export const transformArray = (array) => {
  const result = []
  let index = 0

  if (array && array.length) {
    const length = array.length / 7

    for (let i = 0; i < length; i++) {
      result[i] = []

      for (let j = 0; j < 7; j++) {
        result[i][j] = array[index++]
      }
    }
  }

  return result
}

/**
 * 时间转换成年月日时分秒
 * @method
 * @param {Number | String} time - 时间戳或标准的日期字符
 * @returns {Object} - 年月日时分秒
 */
export const parseDate = (time) => {
  /* istanbul ignore next */
  const date = new Date(time && typeof time === 'number' ? time : 0)

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

export const computedCalendar = ({ state }) => () => {
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

export const computedEventList = ({ props, state }) => () => {
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

        return date.getDate() === day && date.getFullYear() === Number(state.activeYear) && date.getMonth() + 1 === Number(state.activeMonth)
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
export const getEventByMonth = ({ props, state }) => (month) => {
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
