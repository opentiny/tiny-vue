const normalConfig = (config, state) => {
  let { weekFirst, disabled, holiday, workday, mark } = config || {}
  const minWeekFirst = 0
  const maxWeekFirst = state.dayOfWeek - 1

  weekFirst =
    typeof weekFirst === 'number' && weekFirst >= minWeekFirst && weekFirst <= maxWeekFirst
      ? Math.round(weekFirst)
      : minWeekFirst

  disabled = typeof disabled === 'function' ? disabled : () => false
  // 对当前月份内的周六周日进行判断，如果返回false则作为工作日
  holiday = typeof holiday === 'function' ? holiday : () => true
  // 对当前月份内的非周六周日进行判断，如果返回false则作为假期
  workday = typeof workday === 'function' ? workday : () => true
  // 对所有日期进行标记判断，返回的非空字符串代表标记内容
  mark = typeof mark === 'function' ? mark : () => ''

  return { weekFirst, disabled, holiday, workday, mark }
}

const normalDate = (date) => {
  date = !date ? new Date() : !(date instanceof Date) ? new Date(date) : date
  date = date.toString() === 'Invalid Date' ? new Date() : date

  return date
}

const splitDate = (date) => {
  const today = new Date()
  const todayFullYear = today.getFullYear()
  const todayMonth = today.getMonth() + 1
  const todayDate = today.getDate()

  const currentFullYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1
  const currentDate = date.getDate()

  return { todayFullYear, todayMonth, todayDate, currentFullYear, currentMonth, currentDate }
}

const getBuildDay = (args) => (year, month, date) => {
  const { pad0, isCurrent, currentFullYear, currentMonth, holiday, workday, mark } = args
  const { currentDate, isToday, disabled, dayOfWeek } = args

  const dateStr = `${year}-${pad0(month)}-${pad0(date)}`
  const d = new Date(dateStr)
  const isCurMon = isCurrent(year, month)
  const isSat = d.getDay() === dayOfWeek - 1
  const isSun = d.getDay() === 0

  let isWorkday, isHoliday

  if (year === currentFullYear && month === currentMonth) {
    if (isSat || isSun) {
      isHoliday = holiday(d)
      isWorkday = !isHoliday
    } else {
      isWorkday = workday(d)
      isHoliday = !isWorkday
    }
  }

  const markMsg = mark(d)
  const marked = !!markMsg

  const day = { dateStr, marked, markMsg, isWorkday, isHoliday, isSat, isSun, isCurMon }

  day.isCur = isCurMon && date === currentDate
  day.isToday = isToday(year, month, date)
  day.disabled = disabled(d)
  day.dateArr = [year, month, date]

  return day
}

const getPadCalendarDays =
  ({ calendarDays, buildDay }) =>
  (flag, count, cur) => {
    const sign = flag === 's' ? -1 : 1

    Array.from({ length: count }).map((v, i) => {
      const d = new Date(cur.getTime() + (i + 1) * sign * 86400000)
      const year = d.getFullYear()
      const month = d.getMonth() + 1
      const date = d.getDate()

      calendarDays[flag === 's' ? 'unshift' : 'push'](buildDay(year, month, date))
    })
  }

const equalArr = (arr1, arr2) => Array.isArray(arr1) && Array.isArray(arr2) && arr1.join(',') === arr2.join(',')

const setDayRow = ({ calendarDays, state }) => calendarDays.map((day, i) => (day.row = Math.floor(i / state.dayOfWeek)))

const pad0 = (str, n = 2) => String(str).padStart(n, '0')

export const getCalendarDays = (state) => (date, config) => {
  date = normalDate(date)

  let { weekFirst, disabled, holiday, workday, mark } = normalConfig(config, state)
  const { todayFullYear, todayMonth, todayDate, currentFullYear, currentMonth, currentDate } = splitDate(date)
  const isToday = (year, month, date) => year === todayFullYear && month === todayMonth && date === todayDate
  const isCurrent = (year, month) => year === currentFullYear && month === currentMonth
  const february = (currentFullYear % 4 === 0 && currentFullYear % 100 !== 0) || currentFullYear % 400 === 0 ? 29 : 28
  const monthDays = [-1, 31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const f = (arr) => arr[0]
  const l = (arr) => arr[arr.length - 1]
  const { dayOfWeek } = state
  const args = { pad0, isCurrent, currentFullYear, currentMonth, holiday, workday, mark }

  Object.assign(args, { currentDate, isToday, disabled, dayOfWeek })

  const buildDay = getBuildDay(args)

  const calendarDays = Array.from({ length: monthDays[currentMonth] }).map((v, i) =>
    buildDay(currentFullYear, currentMonth, i + 1)
  )

  const weekDays = Array.from({ length: dayOfWeek }).map((v, i) => (weekFirst + i) % dayOfWeek)

  const monthDaysFirst = new Date(f(calendarDays).dateStr).getDay()
  const monthDaysLast = new Date(l(calendarDays).dateStr).getDay()
  const padCalendarDays = getPadCalendarDays({ calendarDays, buildDay })

  let count = monthDaysFirst !== f(weekDays) ? weekDays.indexOf(monthDaysFirst) : dayOfWeek

  padCalendarDays('s', count, new Date(f(calendarDays).dateStr))

  count = monthDaysLast !== l(weekDays) ? dayOfWeek - 1 - weekDays.indexOf(monthDaysLast) : dayOfWeek

  padCalendarDays('e', count, new Date(l(calendarDays).dateStr))

  setDayRow({ calendarDays, state })

  if (!equalArr(state.weekDays, weekDays)) {
    state.weekDays = weekDays
  }

  state.calendarDays = calendarDays
  state.currentYear = `${currentFullYear}`
  state.currentMonth = `${currentMonth}`
  state.currentDate = `${currentDate}`
  state.cascaderCurrent = [currentFullYear, currentMonth]
}

const setStackRows = (state) => {
  const { calendarDays } = state

  if (Array.isArray(calendarDays) && calendarDays.length) {
    const currentDay = calendarDays.find((day) => day.isCur)
    const allRows = [...new Set(calendarDays.map((day) => day.row))]
    const index = allRows.indexOf(currentDay.row)
    const stackRows = allRows
      .slice(index + 1)
      .reverse()
      .concat(allRows.slice(0, index))

    state.stackRows = stackRows
  }
}

export const computedCurrentRow = (state) => () => {
  const { calendarDays } = state

  setStackRows(state)

  if (Array.isArray(calendarDays) && calendarDays.length) {
    const currentDay = calendarDays.find((day) => day.isCur)

    if (currentDay) {
      return currentDay.row
    }
  }

  return null
}

export const computedFilteredCalendarDays = (state) => () => {
  const { calendarDays, currentRow, visibleRows } = state

  if (Array.isArray(calendarDays) && calendarDays.length && currentRow !== null) {
    const rows = [...visibleRows, currentRow]

    return calendarDays.filter((day) => ~rows.indexOf(day.row))
  }

  return []
}

const clearVisibleRows = (state) => (state.visibleRows = [])

const fillVisibleRows = (state) => (state.visibleRows = [...new Set((state.calendarDays || []).map((day) => day.row))])

export const handleDraggerClick = (state) => () => {
  const { visibleRows } = state

  if (state.dragging) return

  if (Array.isArray(visibleRows) && visibleRows.length) {
    clearVisibleRows(state)
  } else {
    fillVisibleRows(state)
  }
}

export const handleClickDay =
  ({ api, emit, props }) =>
  (day) => {
    if (day.isCur || day.disabled) return

    if (typeof day.dateStr === 'string') {
      api.getCalendarDays(day.dateStr, props.config)

      emit('update:modelValue', day.dateStr)
    }
  }

export const calcCalendarItemHeight =
  ({ state, vm }) =>
  () => {
    const calendarPanel = vm.$refs.calendarPanel

    if (calendarPanel && calendarPanel.childNodes instanceof NodeList && calendarPanel.childNodes.length > 1) {
      setTimeout(() => {
        state.itemHeight = calendarPanel.childNodes[1].offsetHeight
      })
    }
  }

export const computedTotalRows = (state) => () => {
  const { calendarDays, dayOfWeek } = state
  const total = Math.floor(calendarDays.length / dayOfWeek)

  return total
}

const dragStart = ({ state, vm, clientX, clientY }) => {
  state.dragPosStart = state.dragPos = { clientX, clientY }
  state.calendarPanelHeight = vm.$refs.calendarPanel.offsetHeight
  state.stackRowsCopy = state.stackRows.slice(0)
}

const dragEnd = ({ state, vm, clientY }) => {
  const dy = clientY - state.dragPosStart.clientY

  state.dragPosStart = state.dragPos = {}
  vm.$refs.calendarPanel.style.height = 'auto'

  if (dy > 0) {
    fillVisibleRows(state)
  } else if (dy < 0) {
    clearVisibleRows(state)
  }
}

const dragMove = ({ state, vm, clientX, clientY }) => {
  const { dragPos: lastPos, itemHeight, totalRows, stackRowsCopy, currentRow } = state
  const minH = itemHeight
  const maxH = itemHeight * totalRows

  state.dragPos = { clientX, clientY }
  state.calendarPanelHeight += clientY - lastPos.clientY

  let h = state.calendarPanelHeight

  h = h < minH ? minH : h > maxH ? maxH : h

  const showRows = Math.floor(h / itemHeight)

  vm.$refs.calendarPanel.style.height = `${h}px`
  state.visibleRows = stackRowsCopy.slice(0).concat(currentRow).reverse().slice(0, showRows)
}

export const handleDraggerMousedown =
  ({ api, state, vm }) =>
  (e) => {
    const { clientX, clientY } = e

    dragStart({ state, vm, clientX, clientY })

    document.addEventListener('mouseup', api.handleMouseup)
    document.addEventListener('mousemove', api.throttledHandleMousemove)
  }

export const handleMouseup =
  ({ api, state, vm }) =>
  (e) => {
    setTimeout(() => (state.dragging = false))

    document.removeEventListener('mouseup', api.handleMouseup)
    document.removeEventListener('mousemove', api.throttledHandleMousemove)

    dragEnd({ state, vm, clientY: e.clientY })
  }

export const handleMousemove =
  ({ state, vm }) =>
  (e) => {
    state.dragging = true

    const { clientX, clientY } = e

    dragMove({ state, vm, clientX, clientY })
  }

export const handleDraggerTouchstart =
  ({ state, vm }) =>
  (e) => {
    const { clientX, clientY } = e.changedTouches[0]

    state.touching = true

    dragStart({ state, vm, clientX, clientY })
  }

export const handleDraggerTouchend =
  ({ state, vm }) =>
  (e) => {
    const { clientY } = e.changedTouches[0]

    state.touching = false

    dragEnd({ state, vm, clientY })
  }

export const handleDraggerTouchmove =
  ({ state, vm }) =>
  (e) => {
    const { clientX, clientY } = e.changedTouches[0]

    dragMove({ state, vm, clientX, clientY })
  }

export const setCascaderVisible = (state) => (value) => (state.cascaderVisible = !!value)

export const handleCascaderChange =
  ({ api, emit, props, state }) =>
  (val) => {
    const { currentDate } = state
    let dateStr = `${val[0]}-${pad0(val[1])}-${pad0(currentDate)}`
    const numberCurrentDate = Number(currentDate)
    const { currentFullYear: curYear, currentMonth: curMonth, currentDate: curDate } = splitDate(new Date(dateStr))

    if (curYear !== val[0] || curMonth !== val[1] || curDate !== numberCurrentDate) {
      dateStr = `${val[0]}-${pad0(val[1])}-01`
    }

    api.getCalendarDays(dateStr, props.config)

    emit('update:modelValue', dateStr)
  }

export const computeCascaderOptions = (t) => () => [
  {
    range: [2000, 2050],
    optionMethod: (i) => ({ id: i, label: t('ui.calendarBar.year').replace('%s', String(i)) })
  },
  { range: [1, 12], optionMethod: (i) => ({ id: i, label: t(`ui.calendarBar.month.${i}`) }) }
]

export const i18nYearMonth =
  ({ state, t }) =>
  () => {
    const { currentYear, currentMonth } = state
    let template = t('ui.calendarBar.yearMonth')
    const monthAbbr = t(`ui.calendarBar.monthAbbr.${currentMonth}`)

    template = template.replace('%y', currentYear)
    template = template.replace('%m', monthAbbr)

    return template
  }
