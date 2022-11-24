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
import { formatNumber, recoverNumber } from '@opentiny/vue-renderless/common/decimal'
import { toDate, getDateWithNewTimezone } from '@opentiny/vue-renderless/common/date'
import { isPlainObject, isDate, isNull } from '@opentiny/vue-renderless/common/type'
import { formatDate } from '@opentiny/vue-renderless/common/deps/date-util'
import { isNumber } from '@opentiny/vue-renderless/common/type'

export const getNumberFormat = (config) => {
  const groupSize = 3
  let groupSeparator = ','
  let decimalSeparator = '.'

  if (isPlainObject(config)) {
    return config
  }

  if (typeof config === 'string') {
    const match = config.match(/\d{2}([^\d]?)\d{3}([^\d]?)\d{2}/)

    if (match && match.length === 3) {
      groupSeparator = match[1]
      decimalSeparator = match[2]
    }
  }

  return {
    groupSeparator,
    groupSize,
    decimalSeparator
  }
}

export const getDateFormat = (config) => {
  const { DateFormat = 'yyyy-MM-dd', TimeFormat = 'HH:mm:ss' } = config

  return {
    DateFormat,
    DateTimeFormat: `${DateFormat} ${TimeFormat}`,
    TimeFormat
  }
}

const TZRE = /(-|\+)(\d{2}):?(\d{2})$/

export const getStrTimezone = (value) => {
  const localTimeZone = 0 - new Date().getTimezoneOffset() / 60
  const match = typeof value === 'string' && value.match(TZRE)

  if (match) {
    const minoffset = Number(match[2]) + Number(match[3]) / 60
    value = minoffset * `${match[1]}1`
  }

  if (isNumber(value) && value >= -12 && value <= 12) {
    return value
  }

  return localTimeZone
}

const getOptionFormatConfig = (opt) => () => opt

const setOptionFormatConfig = (opt) => (obj) => Object.assign(opt, obj)

const getOptionNumberFormat = (opt) => () => opt.NumberFormat

const getOptionDateFormat = (opt) => () => ({
  DateTimeFormat: opt.DateTimeFormat,
  TimeFormat: opt.TimeFormat,
  Timezone: opt.Timezone,
  DateFormat: opt.DateFormat,
  DbTimezone: opt.DbTimezone
})

/**
 *
 * @param {Date|String} value 日期或日期字符串
 * @param {String} format 格式化模式
 * @returns {String}
 */
const formatOptionDate = (opt, t) => (value, format, convert) => {
  if (isNull(value)) {
    return value
  }

  let date = isDate(value) ? value : toDate(value)
  let dbtimezone = opt.DbTimezone
  let includeTz = value.match && value.match(TZRE)
  const convers = format === false || convert === false

  if (includeTz) {
    dbtimezone = getStrTimezone(value)
    date = toDate(value.replace('T', ' ').slice(0, -5))
  }

  if (!convers) {
    date = this.getDateWithNewTimezone(date, dbtimezone, opt.Timezone)
  }

  return isDate(date) ? formatDate(date, format || opt.DateFormat, t) : null
}

/**
 *
 * @param {Number} value 数字
 * @param {Object} format 格式化选项
 * @returns {String}
 */
const formatOptionNumber = (opt) => (value, format) => formatNumber(value, { ...opt.NumberFormat, ...format })

/**
 *
 * @param {String} value 格式化后的字符串
 * @param {Object} format 格式化选项
 * @returns {Number}
 */
const recoverOptionNumber = (opt) => (value, format) => recoverNumber(value, { ...opt.NumberFormat, ...format })

/**
 *
 * @param {Date} value Date
 * @param {Number} from
 * @param {Number} to
 * @returns {String}
 */
const getOptionDateWithNewTimezone = (opt) => (value, from, to) => {
  from = from === 0 ? from : from || opt.DbTimezone
  to = to === 0 ? to : to || opt.Timezone

  return getDateWithNewTimezone(value, from, to)
}

export default (t) => (config) => {
  const opt = {
    ...getDateFormat(config),
    NumberFormat: getNumberFormat(config.NumberFormat),
    DbTimezone: getStrTimezone(config.DbTimezone),
    Timezone: getStrTimezone(config.Timezone)
  }

  return {
    getFormatConfig: getOptionFormatConfig(opt),
    setFormatConfig: setOptionFormatConfig(opt),
    getNumberFormat: getOptionNumberFormat(opt),
    getDateFormat: getOptionDateFormat(opt),
    formatDate: formatOptionDate(opt, t),
    formatNumber: formatOptionNumber(opt),
    recoverNumber: recoverOptionNumber(opt),
    getDateWithNewTimezone: getOptionDateWithNewTimezone(opt)
  }
}
