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
    const minoffset = match[2] * 1 + (match[3] * 1) / 60
    value = minoffset * `${match[1]}1`
  }

  if (isNumber(value) && value >= -12 && value <= 12) {
    return value
  }

  return localTimeZone
}

export default function (t) {
  return function (config) {
    const opt = {
      ...getDateFormat(config),
      NumberFormat: getNumberFormat(config.NumberFormat),
      DbTimezone: getStrTimezone(config.DbTimezone),
      Timezone: getStrTimezone(config.Timezone)
    }

    const tools = {
      getFormatConfig() {
        return opt
      },
      setFormatConfig(obj) {
        Object.assign(opt, obj)
      },
      getNumberFormat() {
        return opt.NumberFormat
      },
      getDateFormat() {
        return {
          DateTimeFormat: opt.DateTimeFormat,
          TimeFormat: opt.TimeFormat,
          Timezone: opt.Timezone,
          DateFormat: opt.DateFormat,
          DbTimezone: opt.DbTimezone
        }
      },

      /**
       *
       * @param {Date|String} value 日期或日期字符串
       * @param {String} format 格式化模式
       * @returns {String}
       */
      formatDate(value, format) {
        if (isNull(value)) {
          return value
        }

        let date = isDate(value) ? value : toDate(value)
        let dbtimezone = opt.DbTimezone
        let includeTz = value.match && value.match(TZRE)
        const convers = format === false || arguments[2] === false

        if (includeTz) {
          dbtimezone = getStrTimezone(value)
          date = toDate(value.replace('T', ' ').slice(0, -5))
        }

        if (!convers) {
          date = this.getDateWithNewTimezone(date, dbtimezone, opt.Timezone)
        }

        return isDate(date) ? formatDate(date, format || opt.DateFormat, t) : null
      },

      /**
       *
       * @param {Number} value 数字
       * @param {Object} format 格式化选项
       * @returns {String}
       */
      formatNumber(value, format) {
        return formatNumber(value, { ...opt.NumberFormat, ...format })
      },

      /**
       *
       * @param {String} value 格式化后的字符串
       * @param {Object} format 格式化选项
       * @returns {Number}
       */
      recoverNumber(value, format) {
        return recoverNumber(value, { ...opt.NumberFormat, ...format })
      },

      /**
       *
       * @param {Date} value Date
       * @param {Number} from
       * @param {Number} to
       * @returns {String}
       */
      getDateWithNewTimezone(value, from, to) {
        from = from === 0 ? from : from || opt.DbTimezone
        to = to === 0 ? to : to || opt.Timezone

        return getDateWithNewTimezone(value, from, to)
      }
    }

    return tools
  }
}
