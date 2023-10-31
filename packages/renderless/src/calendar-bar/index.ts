import { lastMonth, nextMonth } from '../common/calendar/calendar'
import { getDirection } from '../common/deps/touch'

const normalConfig = (config, state) => {
  let { disabled, holiday, workday, mark } = config || {}
  const weekFirst = getWeekFirst(state, { config })

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
  const { pad0, isCurrent, holiday, workday, mark, type } = args
  const { currentDate, isToday, disabled, dayOfWeek } = args

  const dateStr = `${year}-${pad0(month)}-${pad0(date)}`
  const d = new Date(dateStr)
  const isCurMon = isCurrent(year, month)
  const isSat = d.getDay() === dayOfWeek - 1
  const isSun = d.getDay() === 0

  let isWorkday, isHoliday

  if (isSat || isSun) {
    isHoliday = holiday(d)
    isWorkday = !isHoliday
  } else {
    isWorkday = workday(d)
    isHoliday = !isWorkday
  }

  const markMsg = mark(d)
  const marked = !!markMsg

  const day = { dateStr, marked, markMsg, isWorkday, isHoliday, isSat, isSun, isCurMon }

  day.isCur = isCurMon && date === currentDate && type === 'cur'
  day.isToday = isToday(year, month, date)
  day.disabled = disabled(d)
  day.dateArr = [year, month, date]
  day.type = type

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

const setDayRow = ({ calendarDays, state }) =>
  calendarDays.map((day, i) => {
    day.row = Math.floor(i / state.dayOfWeek)

    if (day.isCur) {
      state.activeRow = day.row
      state.activeDate = day.dateStr
    }
  })

const pad0 = (str, n = 2) => String(str).padStart(n, '0')

const getDate = (state, type, date) => {
  let resDate = new Date()

  if (type === 'last') {
    const { year, month } = lastMonth(state.currentYear, state.currentMonth)
    resDate = new Date(`${year}-${month}-01`)
  } else if (type === 'next') {
    const { year, month } = nextMonth(state.currentYear, state.currentMonth)
    resDate = new Date(`${year}-${month}-01`)
  } else {
    resDate = normalDate(date)
  }

  return resDate
}

export const getCalendarDays =
  (state) =>
  (date, config, type = 'cur') => {
    date = getDate(state, type, date)

    let { weekFirst, disabled, holiday, workday, mark } = normalConfig(config, state)
    const { todayFullYear, todayMonth, todayDate, currentFullYear, currentMonth, currentDate } = splitDate(date)
    const isToday = (year, month, date) => year === todayFullYear && month === todayMonth && date === todayDate
    const isCurrent = (year, month) => year === currentFullYear && month === currentMonth
    const february = (currentFullYear % 4 === 0 && currentFullYear % 100 !== 0) || currentFullYear % 400 === 0 ? 29 : 28
    const monthDays = [-1, 31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const f = (arr) => arr[0]
    const l = (arr) => arr[arr.length - 1]
    const { dayOfWeek } = state
    const args = { pad0, isCurrent, currentFullYear, currentMonth, holiday, workday, mark, type }

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

    setCalendarDays(state, type, calendarDays)

    if (type !== 'cur') return

    setDayRow({ calendarDays, state })

    if (!equalArr(state.weekDays, weekDays)) {
      state.weekDays = weekDays
    }

    state.currentYear = currentFullYear
    state.currentMonth = currentMonth
    state.currentDate = currentDate
    state.cascaderCurrent = [currentFullYear, currentMonth]
  }

const setCalendarDays = (state, type, calendarDays) => {
  if (type === 'last') {
    state.lastCalendarDays = calendarDays
  } else if (type === 'next') {
    state.nextCalendarDays = calendarDays
  } else {
    state.calendarDays = calendarDays
  }
}

export const getPrevWeek =
  ({ props, emit, state, api }) =>
  () => {
    let newPrevDate = new Date(state.weekDates[0].dateStr)
    newPrevDate.setDate(newPrevDate.getDate() - 7)
    state.weekDates = api.getAllDatesOfCurrWeek(new Date(newPrevDate))

    setActiveDate(state, props, emit)
  }

export const getNextWeek =
  ({ props, emit, state, api }) =>
  () => {
    let newNextDate = new Date(state.weekDates[6].dateStr)
    newNextDate.setDate(newNextDate.getDate() + 7)
    state.weekDates = api.getAllDatesOfCurrWeek(new Date(newNextDate))

    setActiveDate(state, props, emit)
  }

const setActiveDate = (state, props, emit) => {
  state.weekDates.forEach((day) => (day.isCur = false))

  const day = new Date(props.modelValue).getDay()
  const dayIdx = state.weekDays.indexOf(day)
  const curDate = state.weekDates[dayIdx]

  curDate.isCur = true

  emit('update:modelValue', curDate.dateStr)
  state.activeDate = curDate.dateStr
  state.currentDate = curDate.dateArr[2]
  state.activeRow = curDate.row
}

export const getAllDatesOfCurrWeek =
  ({ state, props }) =>
  (date) => {
    const weekFirst = getWeekFirst(state, props)
    const weekDates = []
    let weekDate = new Date(date)
    const calDate = weekDate.getDate() - weekDate.getDay() + weekFirst
    const weekFirstDate = calDate > weekDate.getDate() ? calDate - 7 : calDate

    weekDate.setDate(weekFirstDate)

    const threeMonthDays = [...state.calendarDays, ...state.lastCalendarDays, ...state.nextCalendarDays]
    const len = threeMonthDays.length

    for (let i = 0; i < 7; i++) {
      const date = formatDate(new Date(weekDate))
      let findDate = false

      for (let j = 0; j < len; j++) {
        if (threeMonthDays[j].dateStr === date) {
          threeMonthDays[j].type = 'cur'
          weekDates.push(threeMonthDays[j])
          findDate = true
          break
        }
      }

      if (!findDate) {
        const newDate = new Date(weekDate)
        weekDates.push({ dateStr: date, dateArr: [newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()] })
      }

      weekDate.setDate(weekDate.getDate() + 1)
    }

    return weekDates
  }

export const getWeekOfDate =
  ({ api }) =>
  (type, date) => {
    const aWeekTimestamp = 7 * 24 * 60 * 60 * 1000
    let nextDate = +new Date(date)
    if (type === 'prev') {
      nextDate = +new Date(date) - aWeekTimestamp
    } else {
      nextDate = +new Date(date) + aWeekTimestamp
    }

    return api.getAllDatesOfCurrWeek(new Date(nextDate))
  }

export const showWeekChange =
  ({ state }) =>
  (value) => {
    if (value) {
      state.weekDates = state.calendarDays.filter((day) => day.row === state.activeRow)
    } else {
      state.calendarDays.forEach((date) => {
        if (state.activeDate === date.dateStr) {
          date.isCur = true
        } else {
          date.isCur = false
        }
      })
    }
  }

const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.getFullYear() + '-' + pad0(newDate.getMonth() + 1) + '-' + pad0(newDate.getDate())
}

export const computedCurrentRow = (state) => () => {
  const { calendarDays } = state

  if (Array.isArray(calendarDays) && calendarDays.length) {
    const currentDay = calendarDays.find((day) => day.isCur)

    if (currentDay) {
      return currentDay.row
    }
  }

  return null
}

export const computedData = (state) => () => {
  if (state.showWeek) {
    return [state.prevWeekDates, state.weekDates, state.nextWeekDates]
  } else {
    return [state.lastCalendarDays, state.calendarDays, state.nextCalendarDays]
  }
}

export const computedFilteredCalendarDays = (state) => () => {
  const { calendarDays, currentRow, visibleRows } = state

  if (Array.isArray(calendarDays) && calendarDays.length && currentRow !== null) {
    const rows = [...visibleRows, currentRow]

    return calendarDays.filter((day) => ~rows.indexOf(day.row))
  }

  return []
}

export const handleDraggerClick = (state, emit) => () => {
  if (state.dragging) return

  state.showWeek = !state.showWeek

  emit('expand', !state.showWeek)
}

export const handleClickDay =
  ({ api, emit, props, state }) =>
  (day) => {
    if (day.isCur || day.disabled) return
    if (typeof day.dateStr === 'string') {
      const isCurrent = day.dateArr[0] === +state.currentYear && day.dateArr[1] === +state.currentMonth

      if (!isCurrent) {
        api.getCalendarDays(day.dateStr, props.config, 'cur')
        api.getCalendarDays(day.dateStr, props.config, 'last')
        api.getCalendarDays(day.dateStr, props.config, 'next')
      }

      const showCalendarDays = [...state.calendarDays, ...state.weekDates]
      showCalendarDays.forEach((date) => (date.isCur = day.dateStr === date.dateStr))

      state.activeDate = day.dateStr
      state.currentDate = day.dateArr[2]
      state.activeRow = day.row

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
  const len = state.dragging ? state.calendarDaysCopy.length : calendarDays.length
  const { calendarDays, dayOfWeek } = state
  const total = Math.floor(len / dayOfWeek)

  return total
}

const dragStart = ({ state, clientX, clientY, vm }) => {
  state.showRows = 0
  state.calendarDaysCopy = state.calendarDays.slice(0)
  state.calendarPanelHeight = vm.$refs.calendarPanel.offsetHeight
  state.dragPosStart = state.dragPos = { clientX, clientY }
}

const dragEnd = ({ state, vm, clientY, emit }) => {
  const dy = clientY - state.dragPosStart.clientY

  if (dy === 0) return

  state.dragPosStart = state.dragPos = {}

  if (state.showWeek) {
    if (state.showRows >= 2) {
      state.showWeek = false
    }
  } else {
    if (state.showRows <= 5) {
      state.showWeek = true
    }
  }
  emit('expand', !state.showWeek)

  state.weekDates = state.copyWeekDates
  state.calendarDays = state.calendarDaysCopy
  vm.$refs.calendarPanel.style.height = 'auto'
  state.showRows = 0
}

const dragMove = ({ state, vm, clientX, clientY }) => {
  const { dragPos: lastPos, itemHeight } = state
  const totalRows = 6

  if (lastPos.clientY === undefined || lastPos.clientX === undefined) {
    state.dragging = false
    return
  }

  const minH = itemHeight
  const maxH = itemHeight * totalRows

  state.dragPos = { clientX, clientY }
  state.calendarPanelHeight += clientY - lastPos.clientY

  let h = state.calendarPanelHeight

  h = h < minH ? minH : h > maxH ? maxH : h
  state.showRows = Math.floor(h / itemHeight)
  vm.$refs.calendarPanel.style.height = `${h}px`

  if (state.showWeek) {
    if (state.showRows === 1) {
      state.weekDates = [...state.copyWeekDates]
    }
    if (state.showRows === 2) {
      state.weekDates = [...state.prevWeekDates, ...state.copyWeekDates]
    }
    if (state.showRows === 3) {
      state.weekDates = [...state.prevWeekDates, ...state.copyWeekDates, ...state.nextWeekDates]
    }
  } else {
    getShowedCalendarDays(state)
  }
}

const getShowedCalendarDays = (state) => {
  if (state.showRows === 0) return
  state.calendarDays = state.calendarDaysCopy.slice(0, state.showRows * 7)
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
  ({ api, state, vm, emit }) =>
  (e) => {
    setTimeout(() => (state.dragging = false))

    document.removeEventListener('mouseup', api.handleMouseup)
    document.removeEventListener('mousemove', api.throttledHandleMousemove)

    dragEnd({ state, vm, clientY: e.clientY, emit })
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
  ({ state, vm, emit }) =>
  (e) => {
    const { clientY } = e.changedTouches[0]

    state.touching = false

    dragEnd({ state, vm, clientY, emit })
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
    const dateStr = getDateStr(state, val[0], val[1])

    api.getCalendarDays(dateStr, props.config, 'cur')
    api.getCalendarDays(dateStr, props.config, 'last')
    api.getCalendarDays(dateStr, props.config, 'next')
    emit('update:modelValue', dateStr)
    state.weekDates = state.calendarDays.filter((day) => day.row === state.activeRow)
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

export const touchmove =
  ({ state }) =>
  (event) => {
    const touch = event.touches[0]

    state.deltaPos.Y = touch.clientY - state.startPos.Y
    state.deltaPos.X = touch.clientX - state.startPos.X
    state.offsetPos.Y = Math.abs(state.deltaPos.Y)
    state.offsetPos.X = Math.abs(state.deltaPos.X)
    state.direction = getDirection(state.offsetPos.X, state.offsetPos.Y)

    if (state.direction === 'vertical') return

    state.delta = state.deltaPos.X
  }

export const touchstart =
  ({ state }) =>
  (event) => {
    event.stopPropagation()
    resetTouchStatus(state)

    state.duration = 300
    state.moving = true
    state.touchTime = Date.now()
    state.startPos.X = event.touches[0].clientX
    state.startPos.Y = event.touches[0].clientY
  }

export const touchend =
  ({ state, api, vm }) =>
  () => {
    const weekPanel = vm.$refs.weekPanel
    const width = weekPanel && weekPanel.offsetWidth
    const speed = state.delta / (Date.now() - state.touchTime)
    const isShouldMove = Math.abs(speed) > 0.3 || Math.abs(state.delta) > +(width / 3).toFixed(2)

    if (isShouldMove) {
      const delta = state.delta
      state.duration = 300
      state.delta = delta > 0 ? width : -width

      setTimeout(() => {
        if (state.showWeek) {
          delta > 0 ? api.getPrevWeek() : api.getNextWeek()
          if (
            state.weekDates[3].dateArr[0] !== +state.currentYear ||
            state.weekDates[3].dateArr[1] !== +state.currentMonth
          ) {
            api.updateCalendarDays(delta)
          }
        } else {
          api.updateCalendarDays(delta)
        }

        state.duration = 0
        state.delta = 0
      }, 300)
    } else {
      state.delta = 0
    }

    state.moving = false
  }

export const updateCalendarDays =
  ({ props, state, api, emit }) =>
  (delta) => {
    let { year, month } =
      delta > 0 ? lastMonth(state.currentYear, state.currentMonth) : nextMonth(state.currentYear, state.currentMonth)

    const dateStr = getDateStr(state, year, month)

    api.getCalendarDays(dateStr, props.config, 'cur')
    api.getCalendarDays(dateStr, props.config, 'last')
    api.getCalendarDays(dateStr, props.config, 'next')
    !state.showWeek && emit('update:modelValue', dateStr)
  }

function getDateStr(state, year, month) {
  const { currentDate } = state
  let dateStr = `${year}-${pad0(month)}-${pad0(currentDate)}`
  const numberCurrentDate = Number(currentDate)
  const { currentFullYear: curYear, currentMonth: curMonth, currentDate: curDate } = splitDate(new Date(dateStr))

  if (curYear !== year || curMonth !== month || curDate !== numberCurrentDate) {
    dateStr = `${year}-${pad0(month)}-01`
  }

  return dateStr
}

function getWeekFirst(state, props) {
  let weekFirst = props.config.weekFirst || 0
  const minWeekFirst = 0
  const maxWeekFirst = state.dayOfWeek - 1

  weekFirst =
    typeof weekFirst === 'number' && weekFirst >= minWeekFirst && weekFirst <= maxWeekFirst
      ? Math.round(weekFirst)
      : minWeekFirst

  return weekFirst
}

function resetTouchStatus(state) {
  state.direction = ''
  state.delta = 0
  state.deltaPos.X = 0
  state.deltaPos.Y = 0
  state.offsetPos.X = 0
  state.offsetPos.Y = 0
}
