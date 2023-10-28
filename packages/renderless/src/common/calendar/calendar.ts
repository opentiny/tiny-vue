import { isLeapYear } from '../date'

/**
 * 获取指定年月的总天数
 * @method
 * @param {Number} year - 年
 * @param {Number} month - 月
 * @returns {Number} - 总天数
 */
export const getDays = (year, month) => {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
}

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
  year = +year
  month = +month

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
  year = +year
  month = +month

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
    const next = nextMonth(year, month)
    const lastDays = getDays(last.year, last.month)

    let remainDays = 0
    const totalDays = days + firstWeek + 7 - lastWeek - 1

    // 补齐日期不足6行的（日期固定为6行）
    if (totalDays / 7 < 6 && totalDays / 7 >= 5) {
      remainDays = 6 * 7 - totalDays
    }

    return {
      last: {
        year: last.year,
        month: last.month,
        start: lastDays - (firstWeek - 1),
        end: lastDays
      },
      current: {
        year: year,
        month: month,
        start: 1,
        end: days
      },
      next: {
        year: next.year,
        month: next.month,
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
