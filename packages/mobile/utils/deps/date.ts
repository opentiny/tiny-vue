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

import { DATEPICKER } from '../index'
import { isNull, isDate } from '../type'

const fecha = {}
const digitsReg = ['\\d\\d?', '\\d{3}', '\\d{4}']
const twoDigits = digitsReg[0]
const threeDigits = digitsReg[1]
const fourDigits = digitsReg[2]
const word = '[^\\s]+'
const literal = /\[([^]*?)\]/gm
const noop = () => undefined
const formats = {
  shortDate: 'M/D/yy',
  mediumDate: 'MMM d, yyyy',
  longDate: 'MMMM d, yyyy',
  fullDate: 'dddd, MMMM d, yyyy',
  default: 'ddd MMM dd yyyy HH:mm:ss',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
}

const shorten = (arr, sLen) => {
  let newArr = []

  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen))
  }

  return newArr
}

const monthUpdate = (arrName) => (date, value, i18n) => {
  const index = i18n[arrName].indexOf(value.charAt(0).toUpperCase() + value.substr(1).toLowerCase())

  if (~index) {
    date.month = index
  }
}

const pad = (val, len) => {
  val = String(val)
  len = len || 2

  while (val.length < len) {
    val = '0' + val
  }

  return val
}

const regexEscape = (str) => str.replace(/[|\\{()[^$+*?.-]/g, '\\$&')

const fullTimeReg = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g
const dayNames = DATEPICKER.fullWeeks
const monthNames = DATEPICKER.fullMonths
const monthNamesShort = shorten(monthNames, 3)
const dayNamesShort = shorten(dayNames, 3)
const parts = ['th', 'st', 'nd', 'rd']

fecha.i18n = {
  dayNames,
  monthNames,
  dayNamesShort,
  monthNamesShort,
  amPm: ['am', 'pm'],
  doFn: (D) => D + parts[D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10]
}

const formatFlags = {
  D: (dateObj) => dateObj.getDay(),
  DD: (dateObj) => pad(dateObj.getDay()),
  Do: (dateObj, i18n) => i18n.doFn(dateObj.getDate()),
  d: (dateObj) => dateObj.getDate(),
  dd: (dateObj) => pad(dateObj.getDate()),
  ddd: (dateObj, i18n) => i18n.dayNamesShort[dateObj.getDay()],
  dddd: (dateObj, i18n) => i18n.dayNames[dateObj.getDay()],
  M: (dateObj) => dateObj.getMonth() + 1,
  MM: (dateObj) => pad(dateObj.getMonth() + 1),
  MMM: (dateObj, i18n) => i18n.monthNamesShort[dateObj.getMonth()],
  MMMM: (dateObj, i18n) => i18n.monthNames[dateObj.getMonth()],
  yy: (dateObj) => pad(String(dateObj.getFullYear()), 4).substr(2),
  yyyy: (dateObj) => pad(dateObj.getFullYear(), 4),
  h: (dateObj) => dateObj.getHours() % 12 || 12,
  hh: (dateObj) => pad(dateObj.getHours() % 12 || 12),
  H: (dateObj) => dateObj.getHours(),
  HH: (dateObj) => pad(dateObj.getHours()),
  m: (dateObj) => dateObj.getMinutes(),
  mm: (dateObj) => pad(dateObj.getMinutes()),
  s: (dateObj) => dateObj.getSeconds(),
  ss: (dateObj) => pad(dateObj.getSeconds()),
  S: (dateObj) => Math.round(dateObj.getMilliseconds() / 100),
  SS: (dateObj) => pad(Math.round(dateObj.getMilliseconds() / 10), 2),
  SSS: (dateObj) => pad(dateObj.getMilliseconds(), 3),
  a: (dateObj, i18n) => (dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1]),
  A: (dateObj, i18n) => (dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase()),
  ZZ: (dateObj) => {
    const offset = dateObj.getTimezoneOffset()
    return (offset > 0 ? '-' : '+') + pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4)
  }
}

const parseFlags = {
  d: [
    twoDigits,
    (date, value) => {
      date.day = value
    }
  ],
  Do: [
    twoDigits + word,
    (date, value) => {
      date.day = parseInt(value, 10)
    }
  ],
  M: [
    twoDigits,
    (date, value) => {
      date.month = value - 1
    }
  ],
  yy: [
    twoDigits,
    (date, value) => {
      const now = new Date()
      const cent = Number(String(now.getFullYear()).substr(0, 2))
      date.year = String(value > 68 ? cent - 1 : cent) + value
    }
  ],
  h: [
    twoDigits,
    (date, value) => {
      date.hour = value
    }
  ],
  m: [
    twoDigits,
    (date, value) => {
      date.minute = value
    }
  ],
  s: [
    twoDigits,
    (date, value) => {
      date.second = value
    }
  ],
  yyyy: [
    fourDigits,
    (date, value) => {
      date.year = value
    }
  ],
  S: [
    '\\d',
    (date, value) => {
      date.millisecond = value * 100
    }
  ],
  SS: [
    '\\d{2}',
    (date, value) => {
      date.millisecond = value * 10
    }
  ],
  SSS: [
    threeDigits,
    (date, value) => {
      date.millisecond = value
    }
  ],
  D: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [
    word,
    (date, value, i18n) => {
      const val = value.toLowerCase()
      if (val === i18n.amPm[0]) {
        date.isPm = false
      } else if (val === i18n.amPm[1]) {
        date.isPm = true
      }
    }
  ],
  ZZ: [
    '[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z',
    (date, value) => {
      let parts = String(value).match(/([+-]|\d\d)/gi)
      let minutes

      if (parts) {
        minutes = Number(parts[1] * 60) + parseInt(parts[2], 10)
        date.timezoneOffset = parts[0] === '+' ? minutes : -minutes
      }
    }
  ]
}

const fmts = ['A', 'DD', 'dd', 'mm', 'hh', 'MM', 'ss', 'hh', 'H', 'HH']

fecha.masks = formats
parseFlags.dddd = parseFlags.ddd

fmts.forEach((name) => {
  if (name === 'MM') {
    parseFlags[name] = parseFlags[name.substr(0, 1)]
  } else {
    parseFlags[name] = parseFlags[name.substr(0, 1).toLowerCase()]
  }
})

fecha.format = (dateObj, mask, i18nSettings) => {
  const i18n = i18nSettings || fecha.i18n

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj)
  }

  if (!isDate(dateObj) || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format')
  }

  mask = fecha.masks[mask] || mask || fecha.masks.default

  let literals = []

  mask = mask.replace(literal, ($0, $1) => {
    literals.push($1)
    return '@@@'
  })

  mask = mask.replace(fullTimeReg, ($0) =>
    $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1)
  )

  return mask.replace(/@@@/g, () => literals.shift())
}

const getNewFormat = (format, parseInfo) => {
  let literals = []

  let newFormat = regexEscape(format).replace(fullTimeReg, ($0) => {
    if (parseFlags[$0]) {
      const info = parseFlags[$0]
      parseInfo.push(info[1])

      return '(' + info[0] + ')'
    }

    return $0
  })

  newFormat = newFormat.replace(/@@@/g, () => literals.shift())

  return newFormat
}

const getDate = (dateInfo) => {
  let date
  const today = new Date()

  if (!isNull(dateInfo.timezoneOffset)) {
    dateInfo.minute = Number(dateInfo.minute || 0) - Number(dateInfo.timezoneOffset)

    const { year, month, day, hour, minute, second, millisecond } = dateInfo

    date = new Date(
      Date.UTC(year || today.getFullYear(), month || 0, day || 1, hour || 0, minute || 0, second || 0, millisecond || 0)
    )
  } else {
    const { year, month, day, hour, minute, second, millisecond } = dateInfo

    date = new Date(
      year || today.getFullYear(),
      month || 0,
      day || 1,
      hour || 0,
      minute || 0,
      second || 0,
      millisecond || 0
    )
  }
  return date
}

fecha.parse = (dateStr, format, i18nSettings) => {
  const i18n = i18nSettings || fecha.i18n

  if (typeof format !== 'string') {
    throw new TypeError('Invalid format in fecha.parse')
  }

  format = fecha.masks[format] || format

  if (dateStr.length > 1000) {
    return null
  }

  let dateInfo = {}
  let parseInfo = []
  let literals = []

  format = format.replace(literal, ($0, $1) => {
    literals.push($1)
    return '@@@'
  })

  const newFormat = getNewFormat(format, parseInfo)
  const matches = dateStr.match(new RegExp(newFormat, 'i'))

  if (!matches) {
    return null
  }

  for (let i = 1, len = matches.length; i < len; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n)
  }

  if (dateInfo.isPm === true && !isNull(dateInfo.hour) && Number(dateInfo.hour) !== 12) {
    dateInfo.hour = Number(dateInfo.hour) + 12
  } else if (dateInfo.isPm === false && Number(dateInfo.hour) === 12) {
    dateInfo.hour = 0
  }

  return getDate(dateInfo)
}

export default fecha
