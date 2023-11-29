import { format } from '../common/date'

const getFormatTime = (time) => {
  return ('0' + time).slice(-2)
}

const getDaysByMonth = (year, month) => {
  return new Date(year, month, 0).getDate()
}

const isSameDay = (day1, day2) => {
  const theDay1 = new Date(day1)
  const theDay2 = new Date(day2)

  return (
    theDay1.getFullYear() === theDay2.getFullYear() &&
    theDay1.getMonth() === theDay2.getMonth() &&
    theDay1.getDate() === theDay2.getDate()
  )
}

export const getDateStr = (year, month, day = '01', seperator = '/') => {
  const arr = [year, month, day]
  return arr.join(seperator)
}

export const getCurrentDate =
  ({ api, props }) =>
  (dateValue) => {
    const today = new Date()
    const theDate = new Date(dateValue)
    const year = theDate.getFullYear()
    const month = theDate.getMonth() + 1
    const day = theDate.getDate()
    const yearMonth = getDateStr(year, month)

    const startWeek = new Date(year, month - 1, 1).getDay()
    const index = startWeek + day - 1
    const { disabledDate } = props.pickerOptions || {}

    return {
      value: api.formatDate(theDate),
      yearMonth,
      index,
      day,
      year,
      month,
      isStartDay: false,
      isEndDay: false,
      disabled: typeof disabledDate === 'function' && !!disabledDate(theDate),
      isToday: isSameDay(today, theDate)
    }
  }

export const formatDate =
  ({ props, constants }) =>
  (date, dateFormat) => {
    const { YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE
    const defaultFormet = [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props.type) ? 'yyyy/MM/01' : 'yyyy/MM/dd'
    return format(date, dateFormat === undefined ? defaultFormet : dateFormat)
  }

const getDateFromStr = (dateStr, direction = 'top') => {
  const arr = dateStr.split('/').map((item) => +item)
  const yarr = arr[0]
  const month = direction == 'top' ? arr[1] - 1 : arr[1]
  return new Date(yarr, month, 1)
}

export const loadingDate =
  ({ state, api }) =>
  (direction) => {
    const list = Object.keys(state.dateList)

    const value = direction === 'top' ? list[0] : list[list.length - 1]

    const date = getDateFromStr(value, direction)

    api.initPanel({ dateValue: date, direction })

    setTimeout(() => {
      state.loading = false
    }, 100)
  }

export const initPanel =
  ({ state, api }) =>
  ({ dateValue, direction, isInit }) => {
    const currentDate = dateValue || (Array.isArray(state.date) ? state.date[0] : state.date) || new Date()

    let month = currentDate.getMonth() + 1
    let year = direction === 'top' ? currentDate.getFullYear() - state.yearNum : currentDate.getFullYear()

    if (isInit) {
      // init component
      year -= Math.floor(state.yearNum / 2)
    }

    let date = new Date(year, month - 1, 1) // 加载日历的起始日期
    const dateList = {}

    Array.from({ length: 12 * state.yearNum }).map(() => {
      const startWeek = date.getDay()
      dateList[getDateStr(year, month)] = Array.from({ length: startWeek }).map(() => ({}))
      const days = getDaysByMonth(year, month)

      Array.from({ length: days }).map((v, index) => {
        const day = index + 1
        const dayInfo = api.getCurrentDate(new Date(year, month - 1, day))

        dateList[getDateStr(year, month)].push(dayInfo)
      })

      month++

      if (month > 12) {
        year++
        month = 1
      }

      date = new Date(year, month - 1, 1)
    })

    state.dateList =
      direction === 'top' ? Object.assign({}, dateList, state.dateList) : Object.assign({}, state.dateList, dateList)
  }

export const getWeeksByMonth =
  ({ state }) =>
  (yearMonth) => {
    const length = state.dateList[yearMonth].length
    return Math.ceil(length / 7)
  }

export const getDaysByWeek =
  ({ state, api }) =>
  (yearMonth, week) => {
    const length = state.dateList[yearMonth].length
    const weeks = api.getWeeksByMonth(yearMonth)

    return week === weeks ? length % 7 : 7
  }

export const getDate =
  ({ state }) =>
  ({ date, yearMonth, index }) => {
    let currentDate

    if (date) {
      const theDate = new Date(date)
      const key = getDateStr(theDate.getFullYear(), theDate.getMonth + 1)

      currentDate = state.dateList[key].filter((item) => item.day === theDate.getDate()).shift()
    } else {
      currentDate = state.dateList[yearMonth][index]
    }

    return currentDate || {}
  }

export const getSelectedPosition =
  ({ state, api }) =>
  (dateFormat) => {
    const { selected } = state
    const length = selected.length

    if (!length) {
      return ''
    }

    const index = selected.indexOf(api.formatDate(dateFormat))

    return index === 0 ? 'start' : index === length - 1 ? 'end' : index > -1 ? 'inner' : ''
  }

export const watchVisible =
  ({ emit, api, state }) =>
  (bool) => {
    if (bool) {
      api.watchModelValue()
      const currentDate = (Array.isArray(state.date) ? state.date[0] : state.date) || new Date()
      setTimeout(() => api.scrollToCurrentDate({ date: currentDate }), 300)
    }

    emit('update:visible', bool)
  }

export const scrollToCurrentDate =
  ({ state, vm, nextTick }) =>
  ({ date, value }) => {
    const { isYearMonthPanel, computedYears, months } = state
    let field
    let list
    let year
    let month
    let index = -1

    if (date) {
      year = date.getFullYear()
      month = date.getMonth() + 1
    }

    if (isYearMonthPanel) {
      field = 'year'
      value = value || `${year}`
      list = computedYears
    } else {
      field = 'yearMonth'
      value = value || getDateStr(year, month)
      list = months
    }

    list.some((item, i) => {
      if (item[field] === value) {
        index = i
        return true
      }
      return false
    })

    nextTick(() => {
      index !== -1 && vm.$refs.recycleScroller.scrollToItem(index)
    })
  }

export const watchModelValue =
  ({ props, state, constants }) =>
  () => {
    const { DATE, DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE
    const { modelValue, type } = props
    if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
      state.date = modelValue && modelValue.length ? modelValue.map((date) => new Date(date)) : []
    }

    if ([DATE, DATE_TIME, YEAR_MONTH].includes(type)) {
      state.date = modelValue ? new Date(modelValue) : ''
    }

    if ([DATE_TIME_RANGE, DATE_TIME].includes(type)) {
      // sync date to time
      const length = type === DATE_TIME ? 1 : 2
      Array.from({ length }).forEach((v, index) => {
        const date = type === DATE_TIME ? state.date : state.date[index]
        if (date) {
          state.timeList[index] = [
            getFormatTime(date.getHours()),
            getFormatTime(date.getMinutes()),
            getFormatTime(date.getSeconds())
          ]
        }
      })
    }
  }

export const selectOption =
  ({ emit, state, props, constants }) =>
  ({ value, index }) => {
    const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE
    const { type } = props
    const { dateList, years } = state
    const current = [YEAR_MONTH_RANGE, YEAR_MONTH].includes(type) ? years[value][index] : dateList[value][index]

    if (!current || current.disabled) {
      return
    }

    if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
      if (state.date.length > 1) {
        state.date = []
      }

      state.date.push(new Date(current.value))

      if (state.date.length === 2) {
        state.date.sort((a, b) => a.getTime() - b.getTime())
      }
    } else {
      state.date = new Date(current.value)

      emit('click', current)
    }
  }

export const confirm =
  ({ emit, state, props, api, constants }) =>
  () => {
    const { DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE } = constants.TYPE
    const { date, timeList } = state
    const { type } = props

    if ([DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
      // sync time to date
      const length = type === DATE_TIME ? 1 : 2
      Array.from({ length }).forEach((v, index) => {
        let thisDate = type === DATE_TIME ? date : date[index]
        if (thisDate) {
          const currentDate = api.getCurrentDate(thisDate)
          const time = timeList[index]

          thisDate = new Date(currentDate.year, currentDate.month - 1, currentDate.day, time[0], time[1], time[2])

          if (type === DATE_TIME) {
            state.date = thisDate
          } else {
            state.date[index] = thisDate
          }
        }
      })
    }

    emit('confirm', state.date)
    emit('update:visible', false)
    emit('update:modelValue', state.date)
  }

export const timeConfirm =
  ({ emit, state }) =>
  (value) => {
    state.timeVisible = false
    state.timeList[state.showTimeIndex] = value

    emit('time-confirm', value)
  }

export const timeToggle =
  ({ state }) =>
  (index) => {
    state.showTimeIndex = index
    state.time = state.timeList[index]
    state.timeVisible = true
  }

export const selectedComputed =
  ({ state, props, constants, api }) =>
  () => {
    const { type } = props
    const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE } = constants.TYPE

    if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
      if (state.date && state.date.length) {
        if (state.date.length === 1) {
          return [api.formatDate(state.date[0])]
        }

        const list = []
        let date1 = state.date[0].getTime()
        let date2 = state.date[1].getTime()

        while (date1 <= date2) {
          const date = new Date(date1)
          list.push(api.formatDate(date))

          if (type === YEAR_MONTH_RANGE) {
            date1 = api.getOffsetMonth(date, 1).getTime()
          } else {
            date1 += 3600 * 24 * 1000
          }
        }

        return list
      }

      return []
    }

    return state.date ? [api.formatDate(state.date)] : []
  }

export const scrollStart =
  ({ state, api, props }) =>
  () => {
    if (state.loading || !props.visible || !state.ready) {
      return
    }

    state.loading = true
    const value = state.isYearMonthPanel ? state.computedYears[1].year : state.months[1].yearMonth

    state.isYearMonthPanel ? api.loadYearMonth('top') : api.loadingDate('top')
    api.scrollToCurrentDate({ value })
  }

export const scrollEnd =
  ({ state, api }) =>
  () => {
    if (state.loading) {
      return
    }

    state.loading = true
    state.isYearMonthPanel ? api.loadYearMonth('down') : api.loadingDate('down')
  }
