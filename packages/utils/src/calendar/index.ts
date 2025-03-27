import { isLeapYear } from '../date'

/**
 * 获取指定年月的总天数
 * @method
 * @param {Number} year - 年份
 * @param {Number} month - 月份（1-12）
 * @returns {Number} - 该月总天数
 */
export const getDays = (year: number, month: number): number => {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
}

/**
 * 根据日期获取星期几
 * @method
 * @param {Number} year - 年份
 * @param {Number} month - 月份（1-12）
 * @param {Number} day - 日期
 * @returns {Number} - 星期几（0-6，0表示星期日）
 */
export const getWeek = (year: number, month: number, day: number): number =>
  new Date(`${year}/${month}/${day}`).getDay()

/**
 * 获取上一个月的年份和月份
 * @method
 * @param {Number} year - 当前年份
 * @param {Number} month - 当前月份（1-12）
 * @returns {Object} - 包含上个月年份和月份的对象
 */
export const lastMonth = (year: number, month: number): { year: number; month: number } => {
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
 * 获取下一个月的年份和月份
 * @method
 * @param {Number} year - 当前年份
 * @param {Number} month - 当前月份（1-12）
 * @returns {Object} - 包含下个月年份和月份的对象
 */
export const nextMonth = (year: number, month: number): { year: number; month: number } => {
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
 * 日历数据接口定义
 */
interface CalendarData {
  last: {
    year: number
    month: number
    start: number
    end: number
  }
  current: {
    year: number
    month: number
    start: number
    end: number
  }
  next: {
    year: number
    month: number
    start: number
    end: number
  }
}

/**
 * 获取日历数据（包含上月、当月和下月的日期信息）
 * @method
 * @param {Number} year - 年份
 * @param {Number} month - 月份（1-12）
 * @returns {CalendarData | undefined} - 日历数据对象，包含上月、当月和下月的日期信息
 */
export const getCalendar = (year: number, month: number): CalendarData | undefined => {
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
        year,
        month,
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
 * 将一维数组转换成 7*N 的二维数组（用于日历表格展示）
 * @method
 * @param {Array<T>} array - 一维数据数组
 * @returns {Array<Array<T>>} - 转换后的7列二维数组
 */
export const transformArray = <T>(array: T[]): T[][] => {
  const result: T[][] = []
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
 * 日期解析结果接口
 */
interface ParsedDate {
  year: number
  month: number
  day: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * 时间转换成年月日时分秒对象
 * @method
 * @param {number | string} time - 时间戳或标准的日期字符串
 * @returns {ParsedDate} - 包含年月日时分秒的对象
 */
export const parseDate = (time: number | string): ParsedDate => {
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
