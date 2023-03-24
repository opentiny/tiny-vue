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

export const getMonthEndDay = (constants) => (year, month) => constants.MonthDay - new Date(year, month - 1, constants.MonthDay).getDate()

export const getTrueValue = (value) => {
  if (!value) {
    return 0
  }

  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1)
    } else {
      return 0
    }
  }

  return parseInt(value, 10)
}

export const getBoundary = ({ api, constants, props }) => ({ type, value: val }) => {
  const boundary = props[`${type}${constants.CapDate}`]
  const year = boundary.getFullYear()
  let month = 1
  let date = 1
  let hour = 0
  let minute = 0

  if (type === constants.Max) {
    month = constants.TotalMonth
    date = api.getMonthEndDay(val.getFullYear(), val.getMonth() + 1)
    hour = constants.Hours
    minute = constants.Minutes
  }

  if (val.getFullYear() === year) {
    month = boundary.getMonth() + 1
    if (val.getMonth() + 1 === month) {
      date = boundary.getDate()
      if (val.getDate() === date) {
        hour = boundary.getHours()
        if (val.getHours() === hour) {
          minute = boundary.getMinutes()
        }
      }
    }
  }

  return {
    [`${type}${constants.CapYear}`]: year,
    [`${type}${constants.CapMonth}`]: month,
    [`${type}${constants.CapDate}`]: date,
    [`${type}${constants.CapHour}`]: hour,
    [`${type}${constants.CapMinute}`]: minute
  }
}

export const updateInnerValue = ({ api, constants, props, refs, state }) => () => {
  const indexes = refs.picker && refs.picker.getIndexes()

  const getValue = (index) => {
    const { values } = state.originColumns[index]
    return getTrueValue(values[indexes[index]])
  }

  const year = getValue(0)
  const month = getValue(1)
  const maxDate = api.getMonthEndDay(year, month)

  let date
  if (props.type === constants.YearMonth) {
    date = 1
  } else {
    date = getValue(2)
  }

  date = date > maxDate ? maxDate : date

  let hour = 0
  let minute = 0

  if (props.type === constants.DateTime) {
    hour = getValue(3)
    minute = getValue(4)
  }

  const value = new Date(year, month - 1, date, hour, minute)

  state.innerValue = api.formatValue(value)
}

export const formatValue = (props) => (value) => {
  if (!Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    value = props.minDate
  }

  value = Math.max(value, props.minDate.getTime())
  value = Math.min(value, props.maxDate.getTime())

  return new Date(value)
}

export const onChange = ({ api, emit, refs, nextTick }) => () => {
  api.updateInnerValue()

  nextTick(() => {
    nextTick(() => {
      emit('change', refs.picker)
      document.body.style.overflow = ''
    })
  })
}

export const padZero = (num, targetLength = 2) => {
  let str = String(num)

  while (str.length < targetLength) {
    str = '0' + str
  }

  return str
}

export const updateColumnValue = ({ constants, nextTick, props, refs, state }) => () => {
  const value = state.innerValue
  const { formatter } = props

  let values = [formatter('year', `${value.getFullYear()}`), formatter('month', padZero(value.getMonth() + 1)), formatter('day', padZero(value.getDate()))]

  if (props.type === constants.DateTime) {
    values.push(formatter('hour', padZero(value.getHours())), formatter('minute', padZero(value.getMinutes())))
  }

  if (props.type === constants.YearMonth) {
    values = values.slice(0, 2)
  }

  nextTick(() => {
    refs.picker.setValues(values)
  })
}

export const getRanges = ({ api, constants, props, state }) => () => {
  const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = api.getBoundary({
    type: constants.Max,
    value: state.innerValue
  })

  const { minYear, minDate, minMonth, minHour, minMinute } = api.getBoundary({
    type: constants.Min,
    value: state.innerValue
  })

  const result = [
    {
      type: constants.Year,
      range: [minYear, maxYear]
    },
    {
      type: 'month',
      range: [minMonth, maxMonth]
    },
    {
      type: constants.Day,
      range: [minDate, maxDate]
    },
    {
      type: constants.Hour,
      range: [minHour, maxHour]
    },
    {
      type: constants.Minute,
      range: [minMinute, maxMinute]
    }
  ]

  if (props.type === constants.Date) {
    result.splice(3, 2)
  }
  if (props.type === constants.YearMonth) {
    result.splice(2, 3)
  }
  return result
}

export function times(n, iteratee) {
  let index = -1
  const result = Array(n)

  while (++index < n) {
    result[index] = iteratee(index)
  }

  return result
}

export const getOrigiCol = (state) => () =>
  state.ranges.map(({ type, range: rangeArr }) => {
    let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => {
      const value = padZero(rangeArr[0] + index)
      return value
    })

    return {
      type,
      values
    }
  })

export const getColumns = ({ props, state }) => () =>
  state.originColumns.map((column) => ({
    values: column.values.map((value) => props.formatter(column.type, value))
  }))

export const onConfirm = ({ api, emit, state }) => () => {
  state.visible = false
  emit('confirm', state.innerValue)
  emit('update:modelValue', state.innerValue)
  emit('update:visible', state.visible)
  document.body.style.overflow = ''
  state.displayValue = api.getDisplayValue()
  state.clearable = false
}

export const onCancel = ({ emit, state }) => () => {
  state.visible = false
  emit('cancel')
  emit('update:visible', state.visible)
  document.body.style.overflow = ''
}

export const getDisplayValue = ({ constants, DATE, props, state }) => () => {
  const format = function (value, fmt) {
    const o = {
      'M+': value.getMonth() + 1,
      'd+': value.getDate(),
      'h+': value.getHours(),
      'm+': value.getMinutes(),
      's+': value.getSeconds(),
      'q+': Math.floor((value.getMonth() + 3) / 3),
      'S': value.getMilliseconds()
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, String(value.getFullYear()).substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length))
      }
    }
    return fmt
  }

  return format(state.innerValue, props.type === constants.DateTime ? DATE.Datetime : DATE.Date)
}

export const hookMounted = ({ constants, parent, refs, nextTick }) => () => {
  nextTick(() => {
    parent.$emit(constants.HookMounted, refs.refrence.$el)
  })
}

export const showPickerAndlockSrcoll = ({ constants, state }) => () => {
  state.visible = true
  document.body.style.overflow = constants.Hidden
  state.isReadonly = true
}

export const clearDisplayValue = (state) => () => {
  state.displayValue = ''
  state.clearable = true
}
