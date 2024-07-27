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

import { toDate, getDateWithNewTimezone, getStrTimezone, getLocalTimezone } from '../common/date'
import { isNumber, isDate } from '../common/type'
import userPopper from '../common/deps/vue-popper'
import { DATEPICKER } from '../common'
import { formatDate, parseDate, isDateObject, getWeekNumber, prevDate, nextDate } from '../common/deps/date-util'
import { extend } from '../common/object'
import globalTimezone from './timezone'

const iso8601Reg = /^\d{4}-\d{2}-\d{2}(.)\d{2}:\d{2}:\d{2}(.+)$/

export const getPanel =
  ({
    DatePanel,
    DateRangePanel,
    MonthRangePanel,
    YearRangePanel,
    TimePanel,
    TimeRangePanel,
    QuarterPanel,
    TimeSelect
  }) =>
  (type) => {
    if (type === DATEPICKER.DateRange || type === DATEPICKER.DateTimeRange) {
      return DateRangePanel
    } else if (type === DATEPICKER.MonthRange) {
      return MonthRangePanel
    } else if (type === DATEPICKER.YearRange) {
      return YearRangePanel
    } else if (type === DATEPICKER.TimeRange) {
      return TimeRangePanel
    } else if (type === DATEPICKER.Time) {
      return TimePanel
    } else if (type === DATEPICKER.TimeSelect) {
      return TimeSelect
    } else if (type === DATEPICKER.Quarter) {
      return QuarterPanel
    }

    return DatePanel
  }

export const watchMobileVisible =
  ({ api, props, state, nextTick }) =>
  ([dateMobileVisible, timeMobileVisible]) => {
    if (dateMobileVisible || timeMobileVisible) {
      state.valueOnOpen = Array.isArray(props.modelValue) ? [...props.modelValue] : props.modelValue
    } else {
      nextTick(() => {
        api.emitChange(props.modelValue)
      })
    }
  }

export const watchPickerVisible =
  ({ api, vm, dispatch, emit, props, state, nextTick }) =>
  (value) => {
    if (props.readonly || state.pickerDisabled || state.isMobileMode) return

    if (value) {
      api.showPicker()

      state.valueOnOpen = Array.isArray(props.modelValue) ? [...props.modelValue] : props.modelValue
    } else {
      api.hidePicker()
      nextTick(() => {
        api.emitChange(props.modelValue)
      })
      state.userInput = null

      if (props.validateEvent) {
        dispatch('FormItem', 'form.blur')
      }

      if (props.changeOnConfirm && !valueEquals(props.modelValue, state.oldValue)) {
        emit('update:modelValue', state.oldValue)
      }

      emit('blur', vm)
      api.blur()
    }
  }

export const getValueEmpty = (props) => () => {
  const modelValue = props.modelValue

  if (Array.isArray(modelValue)) {
    for (let i = 0, len = modelValue.length; i < len; i++) {
      if (modelValue[i]) {
        return false
      }
    }
  } else {
    if (modelValue) {
      return false
    }
  }

  return true
}

export const getMode =
  ({ state }) =>
  () => {
    if (state.type === DATEPICKER.Week) {
      return DATEPICKER.Week
    } else if (state.type === DATEPICKER.Month) {
      return DATEPICKER.Month
    } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(state.type)) {
      return state.type
    } else if (state.type === DATEPICKER.Dates) {
      return DATEPICKER.Dates
    }

    return DATEPICKER.Day
  }

export const formatAsFormatAndType =
  ({ api }) =>
  (value, customFormat, type, formatObj) => {
    if (!value) return null

    const formatter = (api.typeValueResolveMap()[type] || api.typeValueResolveMap().default).formatter
    const format = customFormat || DATEPICKER.DateFormats[type]

    return formatter(value, format, formatObj)
  }

export const displayValue =
  ({ api, props, state }) =>
  () => {
    const formatObj = {
      rangeSeparator: props.rangeSeparator
    }

    const formattedValue = api.formatAsFormatAndType(state.parsedValue, state.format, state.type, formatObj)
    if (Array.isArray(state.userInput)) {
      return [
        state.userInput[0] || (formattedValue && formattedValue[0]) || '',
        state.userInput[1] || (formattedValue && formattedValue[1]) || ''
      ]
    } else if (state.userInput !== null) {
      return state.userInput
    } else if (formattedValue) {
      return [DATEPICKER.Dates, DATEPICKER.Years].includes(state.type) ? formattedValue.join(', ') : formattedValue
    }

    return ''
  }

export const parseAsFormatAndType =
  ({ api }) =>
  (value, customFormat, type, rangeSeparator = '-') => {
    if (!value) {
      return null
    }

    const parser = (api.typeValueResolveMap()[type] || api.typeValueResolveMap().default).parser
    const format = customFormat || DATEPICKER.DateFormats[type]

    return parser(value, format, rangeSeparator)
  }

export const parsedValue =
  ({ api, props, state, t }) =>
  () => {
    if (!props.modelValue) {
      return props.modelValue
    }
    if (state.type === DATEPICKER.TimeSelect) {
      return props.modelValue
    }

    const valueIsDateObject =
      isDateObject(props.modelValue) || (Array.isArray(props.modelValue) && props.modelValue.every(isDateObject))

    const { from, to, isServiceTimezone, timezoneOffset } = state.timezone

    if (valueIsDateObject && !isServiceTimezone) {
      return props.modelValue
    }

    if (state.valueFormat) {
      let date = props.modelValue

      if (isServiceTimezone) {
        if (Array.isArray(date)) {
          date = [].concat(date).map((item) => {
            return isDate(item) ? formatDate(item, state.valueFormat, t) : item
          })
        } else {
          if (state.valueFormat !== DATEPICKER.TimesTamp) {
            date = formatDate(date, state.valueFormat, t)
          }
        }
      }
      const result = api.parseAsFormatAndType(date, state.valueFormat, state.type, props.rangeSeparator)
      if (Array.isArray(result)) {
        return result.map((date) => getDateWithNewTimezone(date, from, to, timezoneOffset))
      }

      return getDateWithNewTimezone(result || props.modelValue, from, to, timezoneOffset)
    }

    const trans = (value) => (typeof value === 'string' || isNumber(value) ? toDate(value) : value)
    const values = []
      .concat(props.modelValue)
      .map((val) => getDateWithNewTimezone(trans(val), from, to, timezoneOffset))
    return values.length > 1 ? values : values[0]
  }

export const getTimezone =
  ({ props, utils }) =>
  () => {
    const { dbTimezone, timezone, isutc8, type = 'date', iso8601, timezoneOffset } = props
    const setting = utils.getDateFormat && utils.getDateFormat()
    const { DbTimezone, Timezone, TimezoneOffset } = setting || {}
    const cur = getLocalTimezone()
    const isTzNumber = (z) => typeof z === 'number' && z >= -12 && z <= 12

    if (!~type.indexOf('datetime')) {
      return { from: cur, to: cur }
    }

    let serveTimezone = isTzNumber(dbTimezone) ? dbTimezone : isTzNumber(DbTimezone) ? DbTimezone : cur
    let clientTimezone = isTzNumber(timezone) ? timezone : isTzNumber(Timezone) ? Timezone : cur
    let clientTimezoneOffset = isNumber(timezoneOffset) ? timezoneOffset : isNumber(TimezoneOffset) ? TimezoneOffset : 0
    const value = props.modelValue
    const str = (Array.isArray(value) ? value[0] : value) || ''
    const match = typeof str === 'string' && str.match(/(-|\+)(\d{2}):?(\d{2})$/)

    if ((iso8601 || setting) && match) {
      serveTimezone = getStrTimezone(str)
    }

    return {
      from: serveTimezone,
      to: isutc8 ? 8 : clientTimezone,
      isServiceTimezone: !!setting,
      timezoneOffset: clientTimezoneOffset
    }
  }

const nullOrString = (value) => {
  const arr = Array.isArray(value) ? value : [value]
  return arr.every((val) => (!val && !isNumber(val)) || typeof val === 'string')
}

export const getValueFormat = ({ props, utils }) => {
  const { valueFormat, iso8601, modelValue: value, type = 'date' } = props
  const setting = utils.getDateFormat && utils.getDateFormat()
  let suffix = ''
  let separator = ' '

  if (!valueFormat && ~type.indexOf('datetime') && (iso8601 || setting) && nullOrString(value)) {
    const str = (Array.isArray(value) ? value[0] : value) || ''
    const match = str.match(iso8601Reg)

    if (match && match.length === 3) {
      suffix = match[2] || ''
      separator = match[1]
    }

    return `yyyy-MM-dd${separator}HH:mm:ss${suffix}`
  }

  return valueFormat
}

export const dateFormatter =
  ({ t }) =>
  (value, format) => {
    if (format === DATEPICKER.TimesTamp) {
      return value.getTime()
    }
    return formatDate(value, format, t)
  }

export const dateParser =
  ({ t, props }) =>
  (text, format) => {
    if (format === DATEPICKER.TimesTamp) {
      return new Date(Number(text))
    }
    const value = props.autoFormat ? formatText({ text, format }) : text
    return parseDate(value, format, t)
  }

export const rangeFormatter = (api) => (value, format) => {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0]
    const end = value[1]

    if (start && end) {
      return [api.dateFormatter(start, format), api.dateFormatter(end, format)]
    }
  }

  return ''
}

export const rangeParser = (api) => (array, format, separator) => {
  if (!Array.isArray(array)) {
    array = array.split(separator)
  }

  if (array.length === 2) {
    const range1 = array[0]
    const range2 = array[1]

    return [api.dateParser(range1, format), api.dateParser(range2, format)]
  }

  return []
}

export const getWeekData = (value) => {
  const valueday = new Date(value).getDay()
  let newDate = new Date(value)

  if (valueday >= 2) {
    newDate.setTime(new Date(value).getTime() - (valueday - 1) * 86400000)
  } else if (valueday === 0) {
    newDate.setTime(new Date(value).getTime() + (valueday + 1) * 86400000)
  }

  return newDate
}

const getDefaultOfTypeValueResolveMap = () => ({
  formatter(value) {
    return value ? String(value) : ''
  },
  parser(text) {
    return text === undefined || text === '' ? null : text
  }
})

const getWeekOfTypeValueResolveMap = ({ t, props, api }) => ({
  formatter(value, format, formatObj) {
    const weekDate = getWeekData(value)
    let week = getWeekNumber(weekDate)
    let month = weekDate.getMonth()
    const trueDate = new Date(weekDate)
    const { rangeSeparator = '-', type = 'format' } = formatObj

    if (week === 1 && month === 11) {
      trueDate.setHours(0, 0, 0, 0)
      trueDate.setDate(trueDate.getDate() + 3 - ((trueDate.getDay() + 6) % 7))
    }
    let date
    if (type === 'format' && !/W/.test(format)) {
      const { start, end } = getWeekRange(value, format, t, props.pickerOptions)
      date = `${start} ${rangeSeparator} ${end}`
    } else {
      date = formatDate(trueDate, format, t)
      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week)
    }

    return date
  },
  parser(text, format) {
    return api.typeValueResolveMap().date.parser(text, format)
  }
})

const getWeekRange = (value, format, t, pickerOptions) => {
  const firstDayOfWeek = pickerOptions && pickerOptions.firstDayOfWeek ? pickerOptions.firstDayOfWeek : 7
  const dayOffset = (value.getDay() - firstDayOfWeek + 7) % 7

  const startDate = prevDate(value, dayOffset)
  const endDate = nextDate(startDate, 6)
  const start = formatDate(startDate, format, t)
  const end = formatDate(endDate, format, t)

  return {
    start,
    end
  }
}

const getNumberOfTypeValueResolveMap = () => ({
  formatter(value) {
    return value ? String(value) : ''
  },
  parser(text) {
    let result = Number(text)

    return !isNaN(text) ? result : null
  }
})

const getDatesOfTypeValueResolveMap = (api) => ({
  formatter(value, format) {
    return value.map((date) => api.dateFormatter(date, format))
  },
  parser(value, format) {
    return (typeof value === 'string' ? value.split(', ') : value).map((date) =>
      date instanceof Date ? date : api.dateParser(date, format)
    )
  }
})

export const typeValueResolveMap =
  ({ api, props, t }) =>
  () => ({
    default: getDefaultOfTypeValueResolveMap(),
    week: getWeekOfTypeValueResolveMap({ t, props, api }),
    date: { formatter: api.dateFormatter, parser: api.dateParser },
    datetime: { formatter: api.dateFormatter, parser: api.dateParser },
    daterange: { formatter: api.rangeFormatter, parser: api.rangeParser },
    monthrange: { formatter: api.rangeFormatter, parser: api.rangeParser },
    datetimerange: { formatter: api.rangeFormatter, parser: api.rangeParser },
    timerange: { formatter: api.rangeFormatter, parser: api.rangeParser },
    time: { formatter: api.dateFormatter, parser: api.dateParser },
    month: { formatter: api.dateFormatter, parser: api.dateParser },
    year: { formatter: api.dateFormatter, parser: api.dateParser },
    years: getDatesOfTypeValueResolveMap(api),
    yearrange: getDatesOfTypeValueResolveMap(api),
    number: getNumberOfTypeValueResolveMap(),
    dates: getDatesOfTypeValueResolveMap(api),
    quarter: {
      formatter: (value) => `${value.getFullYear()}-Q${DATEPICKER.MonthQuarterMap[value.getMonth()]}`,
      parser: api.dateParser
    }
  })

export const firstInputId =
  ({ props, state }) =>
  () => {
    const obj = {}
    let id

    if (state.ranged) {
      id = props.id && props.id[0]
    } else {
      id = props.id
    }

    if (id) {
      obj.id = id
    }

    return obj
  }

export const secondInputId =
  ({ props, state }) =>
  () => {
    const obj = {}
    let id

    if (state.ranged) {
      id = props.id && props.id[1]
    }

    if (id) {
      obj.id = id
    }

    return obj
  }

export const focus =
  ({ api, props, vm }) =>
  () =>
    !props.isRange ? vm.$refs.reference.querySelector('input').focus() : api.handleFocus()

export const blur = (state) => () => state.refInput.forEach((input) => input.blur())

export const parseValue =
  ({ api, props, state }) =>
  (value) => {
    const isParsed = isDateObject(value) || (Array.isArray(value) && value.every(isDateObject))

    if (state.valueFormat && !isParsed) {
      return api.parseAsFormatAndType(value, state.valueFormat, state.type, props.rangeSeparator) || value
    }

    return value
  }

export const formatToValue =
  ({ api, state }) =>
  (date) => {
    const isFormattable = isDateObject(date) || (Array.isArray(date) && date.every(isDateObject))

    if (state.valueFormat && isFormattable) {
      return api.formatAsFormatAndType(date, state.valueFormat, state.type, {
        type: 'value-format'
      })
    }

    return date
  }

export const parseString =
  ({ api, state }) =>
  (value) => {
    const type = Array.isArray(value) ? state.type : state.type.replace(DATEPICKER.Range, '')
    return api.parseAsFormatAndType(value, state.format, type)
  }

export const formatToString =
  ({ api, state }) =>
  (value) => {
    const type = Array.isArray(value) ? state.type : state.type.replace(DATEPICKER.Range, '')
    return api.formatAsFormatAndType(value, state.format, type)
  }

export const handleMouseEnter =
  ({ props, state }) =>
  () => {
    if (props.readonly || state.pickerDisabled) {
      return
    }

    if (!state.valueIsEmpty && props.clearable) {
      state.showClose = true
    }
  }

// 这个是 input 组件的 input 事件，应该只有一个 event 参数，input 组件的具体值从 event.target.value 中获取。
export const handleInput =
  ({ state, props, api }) =>
  (val, event) => {
    // 兼容tiny-input传参不同导致的报错问题
    event = val.target ? val : event
    if (props.autoFormat) {
      const value = api.formatInputValue({ event, prevValue: state.displayValue })
      state.userInput = value
    } else {
      const val = event.target.value
      state.userInput = val
    }
  }

export const formatInputValue =
  ({ props, state }) =>
  ({ event, prevValue = '' }) => {
    const val = event.target.value
    const inputData = event.data
    const format = state.type === 'time-select' ? 'HH:mm' : props.format || DATEPICKER.DateFormats[state.type]
    if (inputData && inputData.charCodeAt() >= 48 && inputData.charCodeAt() <= 57) {
      return formatText({ event, format, text: prevValue, needSelectionStart: true })
    } else {
      return val
    }
  }

const getSelectionStart = ({ value, format, regx, event }) => {
  const formatMatchArr = format.match(regx)
  let selectionStart = getSelectionStartIndex(event)
  let I = 0

  if (value !== '') {
    const match = value.match(/[0-9]/g)
    I = match === null ? 0 : match.length

    for (let i = 0; i < formatMatchArr.length; i++) {
      I -= Math.max(formatMatchArr[i].length, 2)
    }

    I = I >= 0 ? 1 : 0
    I === 1 && selectionStart >= value.length && (selectionStart = value.length - 1)
  }

  return { selectionStart, I }
}

// 获取有效的日期格式 2020 --> 2020-01-01
const getEffectiveDateString = (formatStr) => {
  // 需要一个有序的格式化顺序，月份、日期最小值应该是从1开始，如果是0则会显示上个月或者上一天的日期，会造成输入和预期不符的bug
  const serializationList = [{ 'MM': '01' }, { 'M': '1' }, { 'dd': '01' }, { 'd': '1' }]
  let result = formatStr
  serializationList.forEach((item) => {
    const itemKey = Object.keys(item)[0]
    if (result.includes(itemKey)) {
      result = result.replace(itemKey, item[itemKey])
    }
  })
  return result
}

const getNum = (value, format, regx) => {
  let len = value.length
  let formatStr = ''
  if (format && regx) {
    const formatMatchArr = format.match(regx)
    formatStr = formatMatchArr.join('')
    len = Math.max(len, formatStr.length)
  }

  const num = { str: '', arr: [] }
  for (let i = 0; i < len; i++) {
    // 填补字符串
    let fillStr = '0'
    if (formatStr && len > value.length) {
      const validStr = getEffectiveDateString(formatStr)
      if (/[0-9]/.test(validStr[i])) {
        fillStr = validStr[i]
      }
    }

    const char = value.charAt(i) ? value.charAt(i) : fillStr

    if (/[0-9]/.test(char)) {
      num.str += char
    } else {
      num.arr[i] = 1
    }
  }

  return num
}

const getSelectionStartIndex = (event) => {
  const inputElem = event.target
  return inputElem.selectionStart - (event.data ? event.data.length : 0)
}

const moveStart = (inputElem, moveStartIndex) => {
  if (inputElem.setSelectionRange) {
    inputElem.focus()
    setTimeout(() => {
      inputElem.setSelectionRange(moveStartIndex, moveStartIndex)
    }, 0)
  }
}

export const formatText = ({ event, text, format, needSelectionStart = false }) => {
  if (!format) return text
  let cursorOffset = 0
  let value = ''
  let regx = /yyyy|yyy|yy|y|MM|M|dd|d|HH|hh|H|h|mm|m|ss|s|WW|W|w/g
  let startIndex = 0
  let { numStr, selectionStart } = getNumAndSelectionStart({
    value: text,
    format,
    regx,
    event,
    needSelectionStart
  })

  let matchResult = regx.exec(format)
  while (numStr.str !== '' && matchResult !== null) {
    let subStr
    let newNum
    let subLen
    const endIndex = matchResult.index
    if (startIndex >= 0) {
      value += format.substring(startIndex, endIndex)
    }

    selectionStart >= startIndex + cursorOffset &&
      selectionStart <= endIndex + cursorOffset &&
      (selectionStart = selectionStart + endIndex - startIndex)

    startIndex = regx.lastIndex
    subLen = startIndex - endIndex

    subStr = numStr.str.substring(0, subLen)

    const firstMatchChar = matchResult[0].charAt(0)
    const firstChar = parseInt(subStr.charAt(0), 10)

    if (numStr.str.length > 1) {
      const secondChar = numStr.str.charAt(1)
      newNum = 10 * firstChar + parseInt(secondChar, 10)
    } else {
      newNum = firstChar
    }
    if (
      numStr.arr[endIndex + 1] ||
      (firstMatchChar === 'M' && newNum > 12) ||
      (firstMatchChar === 'd' && newNum > 31) ||
      (['H', 'h'].includes(firstMatchChar) && newNum > 23) ||
      ('ms'.includes(firstMatchChar) && newNum > 59)
    ) {
      subStr = matchResult[0].length === 2 ? '0' + firstChar : firstChar
      selectionStart++
    } else {
      if (subLen === 1) {
        subStr = String(newNum)
        subLen++
        cursorOffset++
      }
    }

    value += subStr
    numStr.str = numStr.str.substring(subLen)
    matchResult = regx.exec(format)
  }

  const { value: val, selectionStart: cursorPos } = checkFormat({
    value,
    format,
    startIndex,
    selectionStart,
    regx,
    needSelectionStart
  })
  value = val
  selectionStart = cursorPos

  needSelectionStart && moveStart(event.target, selectionStart)

  return value
}

const getNumAndSelectionStart = ({ value, format, regx, event, needSelectionStart }) => {
  if (needSelectionStart) {
    let { selectionStart, I } = getSelectionStart({ value, format, regx, event })
    let valueStr

    if (event.data) {
      valueStr = value.substring(0, selectionStart) + event.data + value.substring(selectionStart + I)
      selectionStart++
    } else {
      valueStr = value
    }

    const numStr = getNum(valueStr)

    return { numStr, selectionStart }
  } else {
    const numStr = getNum(value, format, regx)
    return { numStr }
  }
}

const checkFormat = ({ value, format, startIndex, selectionStart, regx, needSelectionStart }) => {
  if (
    (!needSelectionStart && regx.lastIndex === 0) ||
    (needSelectionStart && regx.lastIndex === 0 && selectionStart >= startIndex)
  ) {
    const subFormat = `(?<=${format.substring(0, startIndex)})(\\s*\\S*\\s*)+`
    const pattern = new RegExp(subFormat, 'g')

    const res = format.match(pattern)

    if (res) {
      value += res[0]
      selectionStart = value.length
    }
  }
  return { value, selectionStart }
}

export const handleChange =
  ({ api, state }) =>
  () => {
    if (state.userInput) {
      const value = api.parseString(state.displayValue)
      if (value) {
        state.picker.state.value = value

        if (api.isValidValue(value)) {
          api.emitInput(value)
          state.userInput = null
        }
      }
    }

    if (state.userInput === '') {
      api.emitInput(null)
      api.emitChange(null)
      state.userInput = null
    }
  }

export const handleStartInput =
  ({ state, props, api }) =>
  (event) => {
    const value = props.autoFormat
      ? api.formatInputValue({ event, prevValue: state.displayValue[0] })
      : event.target.value

    if (state.userInput) {
      state.userInput = [value, state.userInput[1]]
    } else {
      state.userInput = [value, null]
    }
  }

export const handleEndInput =
  ({ state, props, api }) =>
  (event) => {
    const value = props.autoFormat
      ? api.formatInputValue({ event, prevValue: state.displayValue[1] })
      : event.target.value

    if (state.userInput) {
      state.userInput = [state.userInput[0], value]
    } else {
      state.userInput = [null, value]
    }
  }

export const handleStartChange =
  ({ api, state }) =>
  () => {
    const value = api.parseString(state.userInput && state.userInput[0])
    if (value) {
      let newValue

      if (state.displayValue[1]) {
        state.userInput = [api.formatToString(value), state.displayValue[1]]
        newValue = [value, state.picker.state.value && state.picker.state.value[1]]
        state.startStatus = true
      } else {
        let now = new Date()

        if (now.getTime() < value.getTime()) {
          state.userInput = [api.formatToString(value), api.formatToString(value)]
          newValue = [value, value]
        } else {
          state.userInput = [api.formatToString(value), '']
          newValue = [value, '']
        }
      }

      if (api.isValidValue(newValue)) {
        state.picker.state.value = newValue
        state.historyUserInput = [value, state.picker.state.value && state.picker.state.value[1]]
        state.historyUserValue = newValue
        api.emitInput(newValue)
        state.userInput = null
      } else {
        if (state.startStatus) {
          state.picker.state.value = state.historyUserValue ? state.historyUserValue : state.historyValue
          api.emitInput(state.historyUserValue ? state.historyUserValue : state.historyValue)
          state.userInput = state.historyUserInput ? state.historyUserInput : state.historyInput
        } else {
          state.picker.state.value = newValue
        }
      }
    }
  }

export const handleEndChange =
  ({ api, state }) =>
  () => {
    const value = api.parseString(state.userInput && state.userInput[1])

    if (value) {
      let newValue

      if (state.displayValue[0]) {
        state.userInput = [state.displayValue[0], api.formatToString(value)]
        newValue = [state.picker.state.value && state.picker.state.value[0], value]
        state.endStatus = true
      } else {
        let now = new Date()

        if (now.getTime() < value.getTime()) {
          state.userInput = [api.formatToString(now), api.formatToString(value)]
          newValue = [now, value]
        } else {
          state.userInput = [api.formatToString(value), api.formatToString(value)]
          newValue = [value, value]
        }
      }

      if (api.isValidValue(newValue)) {
        state.historyValue = newValue
        state.historyInput = [state.displayValue[0], api.formatToString(value)]
        state.picker.state.value = newValue
        api.emitInput(newValue)

        state.userInput = null
      } else {
        if (state.endStatus) {
          state.picker.state.value = state.historyValue
          api.emitInput(state.historyValue)
          state.userInput = state.historyInput
        } else {
          state.picker.state.value = state.historyValue
          state.userInput = state.historyInput
        }
      }
    }
  }

export const handleClickIcon =
  ({ api, props, state }) =>
  (event) => {
    if (props.readonly || state.pickerDisabled) {
      return
    }

    if (state.showClose) {
      state.valueOnOpen = props.modelValue
      event.stopPropagation()
      api.emitInput(null)
      api.emitChange(null)
      state.showClose = false

      if (state.picker && typeof state.picker.handleClear === 'function') {
        state.picker.handleClear()
      }
    } else {
      state.pickerVisible = !state.pickerVisible
    }
  }

export const handleClose =
  ({ api, props, state }) =>
  () => {
    if (!state.pickerVisible) {
      return
    }

    state.pickerVisible = false

    if (state.type === DATEPICKER.Dates) {
      const oldValue =
        api.parseAsFormatAndType(state.valueOnOpen, state.valueFormat, state.type, props.rangeSeparator) ||
        state.valueOnOpen

      api.emitInput(oldValue, true)
    }
  }

export const handleFocus =
  ({ emit, vm, state, api }) =>
  () => {
    const type = state.type

    if (DATEPICKER.TriggerTypes.includes(type)) {
      if (state.isMobileMode && state.isDateMobileComponent) {
        api.dateMobileToggle(true)
      } else if (state.isMobileMode && state.isTimeMobileComponent) {
        api.timeMobileToggle(true)
      } else {
        state.pickerVisible = true
      }
    }

    emit('focus', vm.$refs.reference)
  }

export const handleKeydown =
  ({ api, state }) =>
  (event) => {
    const keyCode = event.keyCode

    // ESC
    if (keyCode === 27) {
      state.pickerVisible = false
      event.stopPropagation()
      return
    }

    // Tab
    if (keyCode === 9) {
      if (!state.ranged) {
        api.handleChange()
        state.pickerVisible = state.picker.state.visible = false
        api.blur()
        event.stopPropagation()
      } else {
        setTimeout(() => {
          if (!state.refInput.includes(document.activeElement)) {
            state.pickerVisible = false
            api.blur()
            event.stopPropagation()
          }
        }, 0)
      }

      return
    }

    // Enter
    if (keyCode === 13) {
      if (state.userInput === '' || api.isValidValue(api.parseString(state.displayValue))) {
        api.handleChange()
        state.pickerVisible = state.picker.state.visible = false
        api.blur()
      }

      event.stopPropagation()

      return
    }

    if (state.userInput) {
      event.stopPropagation()
      return
    }

    if (state.picker && state.picker.handleKeydown) {
      state.picker.handleKeydown(event)
    }
  }

export const hidePicker =
  ({ destroyPopper, state }) =>
  () => {
    if (state.picker) {
      state.picker.resetView && state.picker.resetView()
      state.pickerVisible = state.picker.visible = state.picker.state.visible = false
      destroyPopper()
    }
  }

export const showPicker =
  ({ api, nextTick, updatePopper, state }) =>
  () => {
    if (state.$isServer) {
      return
    }

    if (!state.picker) {
      api.mountPicker()
    }

    state.pickerVisible = state.picker.state.visible = true
    state.picker.state.value = state.parsedValue
    state.picker.resetView && state.picker.resetView()

    nextTick(() => {
      updatePopper(state.picker.$el)
      state.picker.adjustSpinners && state.picker.adjustSpinners()
    })
  }

export const handlePick =
  ({ state, api }) =>
  (date = '', visible = false) => {
    if (!state.picker) return

    state.userInput = null
    state.pickerVisible = state.picker.state.visible = visible

    api.emitInput(date, visible)

    state.date = date
    state.picker.resetView && state.picker.resetView()
  }

export const handleSelectRange = (state) => (start, end, pos) => {
  if (state.refInput.length === 0) {
    return
  }

  const adjust = (value, start, end) => {
    if (value) {
      const valueReg = /(\d+):(\d+):(\d+)(\s+.+)?/

      if (valueReg.test(value)) {
        const matched = valueReg.exec(value)
        const hourLength = matched[1].length
        const minuteLength = matched[2].length
        const secondLength = matched[3].length

        if (start === 0) {
          end = hourLength
        } else if (start === 3) {
          start = hourLength + 1
          end = hourLength + minuteLength + 1
        } else {
          start = hourLength + minuteLength + 2
          end = hourLength + minuteLength + secondLength + 2
        }
      }
    }

    return { start, end }
  }

  if (!pos || pos === 'min') {
    const value = state.refInput[0].value
    const res = adjust(value, start, end)

    state.refInput[0].setSelectionRange(res.start, res.end)
    state.refInput[0].focus()
  } else if (pos === 'max') {
    const value = state.refInput[1].value
    const res = adjust(value, start, end)

    state.refInput[1].setSelectionRange(res.start, res.end)
    state.refInput[1].focus()
  }
}

export const mountPicker =
  ({ api, props, state, vm, updatePopper }) =>
  () => {
    state.picker = vm.$refs.picker
    state.picker.state.defaultValue = props.defaultValue
    state.picker.state.defaultTime = props.defaultTime
    state.picker.state.popperClass = props.popperClass
    state.picker.state.popperAppendToBody = props.popperAppendToBody
    state.picker.state.fnUpdatePopper = updatePopper
    state.picker.state.currentInstans = state.picker
    state.picker.state.timezone = state.timezone
    state.picker.state.timezoneData = state.timezoneData
    state.picker.state.showTimezone = props.showTimezone || state.timezone.isServiceTimezone
    state.picker.state.width = state.reference.getBoundingClientRect().width
    state.picker.state.timefmt = props.timeFormat || ''
    state.picker.state.showTime = state.type === DATEPICKER.DateTime || state.type === DATEPICKER.DateTimeRange
    state.picker.state.selectionMode = state.selectionMode
    state.picker.state.defaultTimezone = props.defaultTimezone
    state.picker.state.unlinkPanels = props.unlinkPanels
    state.picker.state.emitDbTime = api.emitDbTime
    state.picker.state.arrowControl = state.arrowControl || props.timeArrowControl || props.arrowControl || false

    api.updateOptions()
    state.picker.resetView && state.picker.resetView()
  }

export const updateOptions =
  ({ api, props, state }) =>
  () => {
    if (!state.picker) {
      return
    }

    const options = props.pickerOptions

    if (options && options.selectableRange) {
      let ranges = options.selectableRange
      const parser = api.typeValueResolveMap().datetimerange.parser
      const format = DATEPICKER.DateFormats.timerange

      ranges = Array.isArray(ranges) ? ranges : [ranges]

      state.picker.state.selectableRange = ranges.map((range) => parser(range, format, props.rangeSeparator))
    }

    for (const option in options) {
      if (option in options && option !== DATEPICKER.SelectbaleRange) {
        state.picker.state[option] = options[option]
      }
    }

    if (props.format) {
      state.picker.state.format = props.format
    }
  }

export const valueEquals = (left, right) => {
  const dateEquals = (a, b) => {
    const bIsDate = b instanceof Date
    const aIsDate = a instanceof Date

    if (aIsDate && bIsDate) {
      return a.getTime() === b.getTime()
    }

    if (!aIsDate && !bIsDate) {
      return a === b
    }

    return false
  }

  const aIsArray = Array.isArray(left)
  const bIsArray = Array.isArray(right)

  if (aIsArray && bIsArray) {
    if (left.length !== right.length) {
      return false
    }

    return left.every((item, index) => dateEquals(item, right[index]))
  }

  if (!aIsArray && !bIsArray) {
    return dateEquals(left, right)
  }

  return false
}

export const emitChange =
  ({ api, dispatch, emit, props, state }) =>
  (val) => {
    if (!valueEquals(val, state.valueOnOpen)) {
      emit('change', val)

      state.valueOnOpen = val

      if (props.validateEvent) {
        dispatch('FormItem', 'form.change', val)
      }

      api.emitDbTime(props.value)
    }
  }

export const emitInput =
  ({ api, emit, props, state }) =>
  (val, visible = false) => {
    let value = val
    const { from, to, timezoneOffset } = state.timezone

    if (props.type === 'datetime') {
      value = getDateWithNewTimezone(value, to, from, -timezoneOffset)
    } else if (props.type === 'datetimerange' && Array.isArray(value)) {
      value = value.map((val) => getDateWithNewTimezone(val, to, from, -timezoneOffset))
    }

    const formatted = api.formatToValue(value) || val
    if (!valueEquals(props.modelValue, formatted)) {
      emit('update:modelValue', formatted)
    }

    if (!visible && !valueEquals(state.oldValue, formatted)) {
      state.oldValue = formatted
    }
  }

export const isValidValue =
  ({ api, state }) =>
  (value) => {
    if (!state.picker) {
      api.mountPicker()
    }

    if (state.picker.isValidValue) {
      return value && state.picker.isValidValue(value)
    }

    return true
  }

export const watchIsRange =
  ({ api, state, TimePanel, TimeRangePanel }) =>
  (value) => {
    state.type = value ? DATEPICKER.TimeRange : DATEPICKER.Time
    state.panel = value ? TimeRangePanel : TimePanel
    api.mountPicker()
  }

export const getType =
  ({ parent, props }) =>
  () => {
    if (parent.componentName === DATEPICKER.DatePicker) {
      return props.type
    } else if (parent.componentName === DATEPICKER.TimePicker) {
      return props.isRange ? DATEPICKER.TimeRange : DATEPICKER.Time
    }

    return DATEPICKER.TimeSelect
  }

export const watchModelValue =
  ({ api, props, state, dispatch }) =>
  (value, oldValue) => {
    state.historyInput = state.displayValue
    if (state.picker) {
      state.historyValue = [
        state.picker.state.value && state.picker.state.value[0],
        api.parseString(state.historyInput && state.historyInput[1])
      ]
    }

    if (props.changeCompat) {
      api.emitChange(props.modelValue)
    }

    if (!valueEquals(value, oldValue) && !state.pickerVisible && props.validateEvent) {
      dispatch('FormItem', 'form.change', value)
    }
  }

export const computedFormat =
  ({ props, utils }) =>
  () => {
    let { type, format } = props

    if (!format && utils.getDateFormat) {
      const config = utils.getDateFormat() || {}

      if (~['date', 'dates', 'daterange'].indexOf(type)) {
        format = config.DateFormat
      }

      if (~['datetime', 'datetimerange'].indexOf(type)) {
        format = config.DateTimeFormat
      }
    }

    return format
  }

export const computedTriggerClass =
  ({ props, state }) =>
  () => {
    return (
      props.suffixIcon ||
      props.prefixIcon ||
      (state.type.includes(DATEPICKER.Time) ? DATEPICKER.IconTime : DATEPICKER.IconDate)
    )
  }

export const computedHaveTrigger =
  ({ props }) =>
  () => {
    return typeof props.showTrigger !== 'undefined' ? props.showTrigger : DATEPICKER.TriggerTypes.includes(props.type)
  }

export const initPopper = ({ props, hooks, vnode }) => {
  const { reactive, watch, toRefs, onBeforeUnmount, onDeactivated } = hooks
  // tiny提示： vnode就是第3参，名字有误导性
  const { emit, vm, slots, nextTick } = vnode
  const placementMap = DATEPICKER.PlacementMap

  return userPopper({
    reactive,
    watch,
    emit,
    props: {
      ...props,
      popperOptions: Object.assign({ boundariesPadding: 0, gpuAcceleration: false }, props.popperOptions),
      visibleArrow: true,
      offset: 0,
      boundariesPadding: 5,
      arrowOffset: 35,
      placement: placementMap[props.align] || placementMap.left
    },
    toRefs,
    vm,
    slots,
    nextTick,
    onBeforeUnmount,
    onDeactivated
  })
}

export const emitDbTime =
  ({ emit, state, t }) =>
  (date) => {
    const { isServiceTimezone, from } = state.timezone

    // 防止死循环，此处必须判断
    if (isServiceTimezone && !valueEquals(date, state.dbTime)) {
      let hasDate = false
      const dbTime = [].concat(date).map((item) => {
        if (isDate(item)) {
          hasDate = true
          let currentDate = getDateWithNewTimezone(item, getLocalTimezone(), from)

          if (state.valueFormat) {
            currentDate = formatDate(currentDate, state.valueFormat, t)
          }

          return currentDate
        }

        return item
      })

      state.dbTime = dbTime.length > 1 ? dbTime : dbTime[0]

      hasDate && emit('input', state.dbTime)
    }
  }

export const initGlobalTimezone =
  ({ api, state, props }) =>
  () => {
    const { isServiceTimezone } = state.timezone

    // Date 类型要特色处理
    if (isServiceTimezone) {
      state.timezoneData = globalTimezone
    } else if (props.showTimezone) {
      state.timezoneData = props.timezoneData ? extend(true, {}, props.timezoneData) : globalTimezone
    }

    api.emitDbTime(props.value)
  }

export const handleEnterDisplayOnlyContent =
  ({ state, t }) =>
  ($event) => {
    const target = $event.target
    if (target && target.scrollWidth > target.offsetWidth) {
      state.displayOnlyTooltip = state.displayValue.join(` ${t('ui.datepicker.to')} `)
    }
  }

export const handleEnterPickerlabel =
  ({ state, props }) =>
  ($event) => {
    const target = $event.target
    if (target && target.scrollWidth > target.offsetWidth) {
      state.labelTooltip = props.label
    }
  }

export const setInputPaddingLeft =
  ({ props, state, vm, nextTick }) =>
  () => {
    const ml = 12
    const mr = 8

    if (props.label && !state.ranged && vm.$refs.label && vm.$refs.reference) {
      nextTick(() => {
        vm.$refs.reference.querySelector('input').style.paddingLeft = vm.$refs.label.offsetWidth + ml + mr + 'px'
      })
    }
  }
