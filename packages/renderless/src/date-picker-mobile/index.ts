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

export const getCurrentDate = () => (dateValue) => {
  const today = new Date()
  const theDate = new Date(dateValue)
  const year = theDate.getFullYear()
  const month = theDate.getMonth() + 1
  const day = theDate.getDate()
  const yearMonth = year + '/' + month
  const startWeek = new Date(year, month - 1, 1).getDay()
  const index = startWeek + day - 1

  return {
    date: yearMonth + '/' + day,
    yearMonth,
    index,
    day,
    year,
    month,
    isStartDay: false,
    isEndDay: false,
    isToday: isSameDay(today, theDate)
  }
}

export const getFormatDate = (date, yearUnit = '/', monthUnit = '/', dayUnit = '') => {
  const theDate = new Date(date)

  return theDate.getFullYear() + yearUnit + (theDate.getMonth() + 1) + monthUnit + theDate.getDate() + dayUnit
}

export const loadingDate =
  ({ state, api }) =>
  (direction) => {
    const list = Object.keys(state.dateList)
    let date
    if (direction === 'top') {
      const yearMonth = list[0].split('/').map((item) => +item)
      const year = yearMonth[1] === 1 ? yearMonth[0] - 1 : yearMonth[0]
      const month = yearMonth[1] === 1 ? 11 : yearMonth[1] - 1

      date = new Date(year, month, 1)
    } else {
      const yearMonth = list[list.length - 1].split('/').map((item) => +item)

      date = new Date(yearMonth[0], yearMonth[1] - 2, 1)
    }

    api.initPanel(date, direction, 2)

    setTimeout(() => {
      state.loading = false
    }, 300)
  }

export const initPanel =
  ({ state, api }) =>
  (dateValue, direction, yearNum = 1) => {
    const currentDate = dateValue || (Array.isArray(state.date) ? state.date[1] : state.date) || new Date()

    let month = currentDate.getMonth() + 1
    let year = direction === 'top' ? currentDate.getFullYear() - 1 : currentDate.getFullYear()

    if (yearNum === 1 && !direction) {
      // init component
      if (month <= 6) {
        year -= 1
        month += 6
      } else {
        month -= 6
      }
    }

    let date = new Date(year, month - 1, 1) // 加载日历的起始日期
    const dateList = {}

    Array.from({ length: 12 * yearNum }).map(() => {
      const startWeek = date.getDay()
      dateList[year + '/' + month] = Array.from({ length: startWeek }).map(() => ({}))
      const days = getDaysByMonth(year, month)

      Array.from({ length: days }).map((v, index) => {
        const day = index + 1
        const dayInfo = api.getCurrentDate(new Date(year, month - 1, day))

        dateList[year + '/' + month].push(dayInfo)
      })

      month++

      if (month > 12) {
        year++
        month = 1
      }

      date = new Date(year, month - 1, 1)
    })

    state.dateList = dateList
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

      currentDate = state.dateList[`${theDate.getFullYear()}/${theDate.getMonth + 1}`]
        .filter((item) => item.day === theDate.getDate())
        .shift()
    } else {
      currentDate = state.dateList[yearMonth][index]
    }

    return currentDate || {}
  }

export const getSelectedPosition =
  ({ state }) =>
  (dateFormat) => {
    const { selected } = state

    if (!selected.length) {
      return ''
    }

    const index = selected.map((item) => getFormatDate(item)).indexOf(dateFormat)
    const length = selected.length

    return index === 0 ? 'start' : index === length - 1 ? 'end' : index > -1 ? 'inner' : ''
  }

export const watchVisible =
  ({ emit, api, nextTick, vm }) =>
  (bool) => {
    if (bool) {
      api.watchModelValue()

      nextTick(() => {
        const refBody = vm.$refs.datePickerBody

        if (refBody.scrollHeight && !refBody.scrollTop) {
          refBody.scrollTop = refBody.scrollHeight / 2
        }
      })
    }

    emit('update:visible', bool)
  }

export const watchModelValue =
  ({ props, state }) =>
  () => {
    const { modelValue, type } = props
    if (['daterange', 'datetimerange'].includes(type)) {
      state.date = modelValue && modelValue.length ? modelValue.map((date) => new Date(date)) : []
    }

    if (['datetime', 'date'].includes(type)) {
      state.date = modelValue ? new Date(modelValue) : new Date()
    }

    if (['datetimerange', 'datetime'].includes(type)) {
      // sync date to time
      const length = type === 'datetime' ? 1 : 2
      Array.from({ length }).forEach((v, index) => {
        const date = type === 'datetime' ? state.date : state.date[index]
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
  ({ emit, state, props }) =>
  ({ yearMonth, index }) => {
    const { type } = props
    const currentDateInfo = state.dateList[yearMonth][index]

    if (!currentDateInfo) {
      return
    }

    if (['daterange', 'datetimerange'].includes(type)) {
      if (state.date.length > 1) {
        state.date = []
      }

      state.date.push(new Date(currentDateInfo.date))

      if (state.date.length === 2) {
        state.date.sort((a, b) => a.getTime() - b.getTime())
      }
    } else {
      state.date = new Date(currentDateInfo.date)

      emit('click', currentDateInfo)
    }
  }

export const confirm =
  ({ emit, state, props, api }) =>
  () => {
    const { date, timeList } = state
    const { type } = props

    if (['daterange', 'datetimerange', 'datetime'].includes(type)) {
      // sync time to date
      const length = type === 'datetime' ? 1 : 2
      Array.from({ length }).forEach((v, index) => {
        let thisDate = type === 'datetime' ? date : date[index]
        if (thisDate) {
          const currentDate = api.getCurrentDate(thisDate)
          const time = timeList[index]

          thisDate = new Date(currentDate.year, currentDate.month - 1, currentDate.day, time[0], time[1], time[2])

          if (type === 'datetime') {
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
  ({ state, props }) =>
  () => {
    if (['daterange', 'datetimerange'].includes(props.type)) {
      if (state.date && state.date.length) {
        if (state.date.length === 1) {
          return [state.date[0]]
        }

        const list = []
        let date1 = state.date[0].getTime()
        let date2 = state.date[1].getTime()

        while (date1 <= date2) {
          list.push(new Date(date1))
          date1 += 3600 * 24 * 1000
        }

        return list
      } else {
        return []
      }
    } else {
      return state.date ? [getFormatDate(state.date)] : []
    }
  }

export const scrollLoadHandler =
  ({ state, vm, api }) =>
  () => {
    const refBody = vm.$refs.datePickerBody

    if (refBody.scrollHeight && refBody.scrollTop < 50 && !state.loading) {
      state.loading = true
      api.loadingDate('top')
    } else if (
      refBody.scrollHeight &&
      refBody.scrollHeight - refBody.offsetHeight - refBody.scrollTop < 10 &&
      !state.loading
    ) {
      state.loading = true
      api.loadingDate('down')
      refBody.scrollTop = 50
    }
  }
