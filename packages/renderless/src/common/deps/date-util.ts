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

import fecha from '@opentiny/vue-renderless/common/deps/date'
import { isNull } from '@opentiny/vue-renderless/common/type'
import { isLeapYear } from '@opentiny/vue-renderless/common/date'
import { DATEPICKER } from '@opentiny/vue-renderless/common'

const weeks = DATEPICKER.Weeks
const months = DATEPICKER.MonhtList
const defaultYMD = DATEPICKER.DateFormats.date
const defaultHMS = DATEPICKER.DateFormats.time

const newArray = (start, end) => {
  let res = []

  for (let i = start; i <= end; i++) {
    res.push(i)
  }

  return res
}

export const getI18nSettings = (t) => ({
  dayNamesShort: weeks.map((week) => t(`ui.datepicker.weeks.${week}`)),
  dayNames: weeks.map((week) => t(`ui.datepicker.weeks.${week}`)),
  monthNamesShort: months.map((month) => t(`ui.datepicker.months.${month}`)),
  monthNames: months.map((month, index) => t(`ui.datepicker.month${index + 1}`)),
  amPm: ['am', 'pm']
})

export const isDate = function (date) {
  if (isNull(date)) {
    return false
  }
  if (isNaN(new Date(date).getTime())) {
    return false
  }
  if (Array.isArray(date)) {
    return false
  }

  return true
}

export const toDate = (date) => (isDate(date) ? new Date(date) : null)

export const isDateObject = (val) => val instanceof Date

export const formatDate = (date, format, t) => {
  date = toDate(date)
  if (!date) {
    return ''
  }

  return fecha.format(date, format || defaultYMD, getI18nSettings(t))
}

export const parseDate = (string, format, t) => fecha.parse(string, format || defaultYMD, getI18nSettings(t))

export const getDayCountOfMonth = (year, month) => {
  if (~[3, 5, 8, 10].indexOf(month)) {
    return 30
  }

  if (month === 1) {
    return isLeapYear(year) ? 29 : 28
  }

  return 31
}

export const getDayCountOfYear = (year) => (isLeapYear(year) ? 366 : 365)

export const getFirstDayOfMonth = (date) => {
  const temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}

export const prevDate = (date, amount = 1) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount)

export const nextDate = (date, amount = 1) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)

export const getStartDateOfMonth = (year, month) => {
  const res = new Date(year, month, 1)
  const day = res.getDay()

  return day === 0 ? prevDate(res, 7) : prevDate(res, day)
}

export const getWeekNumber = (src) => {
  if (!isDate(src)) {
    return null
  }

  const date = new Date(src.getTime())

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7))

  const week1 = new Date(date.getFullYear(), 0, 4)

  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
}

export const getRangeHours = (ranges = []) => {
  const hours = []
  let disHours = []

  ranges.forEach((range) => {
    const value = range.map((date) => date.getHours())
    disHours = disHours.concat(newArray(value[0], value[1]))
  })

  let isDisabled

  if (disHours.length) {
    isDisabled = (i) => !~disHours.indexOf(i)
  } else {
    isDisabled = () => false
  }

  for (let i = 0; i < 24; i++) {
    hours[i] = isDisabled(i)
  }

  return hours
}

const setRangeData = (arr, start, end, value) => {
  for (let i = start; i < end; i++) {
    arr[i] = value
  }
}

export const range = (length) => Array.apply(null, { length }).map((_, n) => n)

export const getMonthDays = (date) => {
  const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const days = temp.getDate()

  return range(days).map((_, index) => index + 1)
}

export const getPrevMonthLastDays = (date, amount) => {
  if (amount <= 0) {
    return []
  }

  const timeValue = new Date(date.getTime())
  timeValue.setDate(0)
  const lastDay = timeValue.getDate()

  return range(amount).map((_, index) => lastDay - (amount - index - 1))
}

export const getRangeMinutes = (ranges, hour) => {
  const sixty = 60
  const minutes = new Array(sixty)

  if (ranges.length > 0) {
    ranges.forEach((range) => {
      const [startDate, endDate] = range
      const startHour = startDate.getHours()
      const startMinute = startDate.getMinutes()
      const endHour = endDate.getHours()
      const endMinute = endDate.getMinutes()
      const equealStartHour = startHour === hour

      if (equealStartHour && endHour !== hour) {
        setRangeData(minutes, startMinute, sixty, true)
      } else if (equealStartHour && endHour === hour) {
        setRangeData(minutes, startMinute, endMinute + 1, true)
      } else if (!equealStartHour && endHour === hour) {
        setRangeData(minutes, 0, endMinute + 1, true)
      } else if (startHour < hour && endHour > hour) {
        setRangeData(minutes, 0, sixty, true)
      }
    })
  } else {
    setRangeData(minutes, 0, sixty, true)
  }

  return minutes
}

export const modifyDate = (date, y, m, d) => {
  date = toDate(date)

  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

export const modifyTime = (date, h, m, s) => {
  date = toDate(date)

  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds())
}

export const modifyWithTimeString = (date, time, t) => {
  if (isNull(date) || !time) {
    return date
  }

  time = parseDate(time, defaultHMS, t)
  return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds())
}

export const clearTime = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

export const clearMilliseconds = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0)

export const limitTimeRange = (date, ranges, format = defaultHMS) => {
  if (ranges.length === 0) {
    return date
  }

  const normalizeDate = (date) => fecha.parse(fecha.format(date, format), format)

  const ndate = normalizeDate(date)
  const nranges = ranges.map((range) => range.map(normalizeDate))

  if (nranges.some((nrange) => ndate >= nrange[0] && ndate <= nrange[1])) {
    return date
  }

  let minDate = nranges[0][0]
  let maxDate = minDate

  nranges.forEach((nrange) => {
    let minTempDate = (minDate = new Date(Math.min(nrange[0], minDate)))
    maxDate = new Date(Math.max(nrange[1], minTempDate))
  })

  const ret = ndate < minDate ? minDate : maxDate
  return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate())
}

export const timeWithinRange = (date, selectableRange, format) => {
  const limitedDate = limitTimeRange(date, selectableRange, format)
  return limitedDate.getTime() === date.getTime()
}

export const changeYearMonthAndClampDate = (date, year, month) => {
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

export const nextMonth = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const isLast = month === 11

  return isLast ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, month + 1)
}

export const prevMonth = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const isFirst = month === 0

  return isFirst ? changeYearMonthAndClampDate(date, year - 1, 11) : changeYearMonthAndClampDate(date, year, month - 1)
}

export const nextYear = (date, next = 1) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  return changeYearMonthAndClampDate(date, year + next, month)
}

export const prevYear = (date, prev = 1) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  return changeYearMonthAndClampDate(date, year - prev, month)
}

export const extractTimeFormat = (dateFormat) => dateFormat.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '').trim()

export const extractDateFormat = (dateFormat) =>
  dateFormat
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim()

export const validateRangeInOneMonth = (startDate, endDate) => startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()
