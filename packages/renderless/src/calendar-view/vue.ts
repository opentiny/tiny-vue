import {
  computedCalendar,
  handleEvents,
  selectDay,
  getEventByTime,
  isToday,
  dateIsToday,
  toToday,
  getAllWednesdaysInYear,
  getAllWednesdaysInMonth,
  getAllDatesOfCurrWeek,
  initWeeklyCalendar,
  getDatesOfPreviousWeek,
  getDatesOfNextWeek,
  getPrevWeek,
  getNextWeek,
  goPrevMonth,
  goNextMonth,
  currentDateChange,
  newSchedule,
  handleMouseenter,
  handleMouseleave,
  isSelectedDate,
  isStartOrEndDay,
  getDayBgColor,
  isShowNewSchedule,
  genDayTimes,
  isShowMark,
  computeCascaderOptions,
  handleCascaderChange,
  setCascaderVisible,
  getEventByMonth,
  getEventByDate,
  getWeekOfDate,
  handleDropBtnClick,
  getEventShowTime,
  getCurWeekEvent,
  touchstart,
  touchmove,
  touchend
} from './index'
import throttle from '@opentiny/vue-renderless/common/deps/throttle'

export const api = [
  'state',
  'renderProxy',
  'isToday',
  'dateIsToday',
  'getEventByTime',
  'selectDay',
  'toToday',
  'getPrevWeek',
  'getNextWeek',
  'goPrevMonth',
  'goNextMonth',
  'currentDateChange',
  'newSchedule',
  'handleMouseenter',
  'handleMouseleave',
  'isSelectedDate',
  'isStartOrEndDay',
  'getDayBgColor',
  'isShowNewSchedule',
  'isShowMark',
  'handleCascaderChange',
  'setCascaderVisible',
  'handleDropBtnClick',
  'getEventShowTime',
  'touchstart',
  'touchmove',
  'touchend'
]

const initState = ({ reactive, props, computed, api, images, modesIcon }) => {
  const state = reactive({
    dayStartTime: props._constants.DAY_START_TIME,
    dayEndTime: props._constants.DAY_END_TIME,
    wednesday: props._constants.WEDNESDAY,
    modesIcon,
    images,
    weekDays: [0, 1, 2, 3, 4, 5, 6],
    dayTimes: computed(() => api.genDayTimes()),
    mode: props.mode,
    events: [],
    eventsChangeHash: 0,
    weekDates: [],
    prevWeekDates: [],
    nextWeekDates: [],
    monthEvents: [],
    nextMonthEvents: [],
    prevMonthEvents: [],
    selectedDateEvents: [],
    monthWednesdays: [],
    wholeYearWednesdays: [],
    index: 0,
    delta: 0,
    startPos: {
      X: 0,
      Y: 0
    },
    deltaPos: {
      X: 0,
      Y: 0
    },
    offsetPos: {
      X: 0,
      Y: 0
    },
    curWeekEvents: {},
    scrollStartTime: 0,
    debounceTime: 100,
    touchTime: 0,
    direction: '',
    monthEventsLength: 0,
    activedWeekIndex: -1,
    selectedTip: '',
    selectedDate: '',
    selectedDates: [],
    showYear: false,
    showMonth: false,
    showSelectedDateEvents: false,
    multiSelect: computed(() => props.multiSelect),
    eventTipVisible: false,
    cascaderVisible: false,
    eventTipContent: {},
    activeYear: props.year,
    displayMode: props.mode,
    activeMonth: props.month,
    currentDate: props.year + '-' + props.month,
    cascaderCurrent: [props.year || new Date().getFullYear(), props.month || new Date().getMonth + 1],
    cascaderOptions: computed(() => api.computeCascaderOptions()),
    calendar: computed(() => api.computedCalendar('cur')),
    prevCalendar: computed(() => api.computedCalendar('prev')),
    nextCalendar: computed(() => api.computedCalendar('next'))
  })

  return state
}

const initWatch = ({ watch, props, state, emit, api, nextTick }) => {
  watch(
    () => props.mode,
    () => {
      state.mode = props.mode
    }
  )

  watch(
    () => props.events,
    () => {
      api.handleEvents()
    },
    { deep: true }
  )

  watch(
    () => state.selectedDate,
    () => {
      if (state.mode === 'month') {
        api.getEventByDate(state.selectedDate, state.selectedDateEvents)
      }
      emit('selected-date-change', state.selectedDate)
    },
    { deep: true }
  )

  watch(
    () => state.weekDates,
    (value, oldValue) => {
      state.prevWeekDates = api.getWeekOfDate('prev', state.weekDates[3].value)
      state.nextWeekDates = api.getWeekOfDate('next', state.weekDates[3].value)

      api.getCurWeekEvent()

      emit('week-change', value, oldValue)
    },
    { deep: true }
  )

  watch(
    () => state.eventsChangeHash,
    () => {
      if (state.mode === 'schedule' || state.mode === 'timeline') {
        api.getCurWeekEvent()
      }
    }
  )

  watch(
    () => state.activedWeekIndex,
    () => {
      nextTick(() => {
        state.showSelectedDateEvents = true
      })
    }
  )

  watch(
    () => props.month,
    (val, oldVal) => {
      if (val !== oldVal) {
        state.activeMonth = val
      }
    },
    { immediate: true }
  )

  watch(
    () => props.year,
    (val, oldVal) => {
      if (val !== oldVal) {
        state.activeYear = val
      }
    },
    { immediate: true }
  )

  watch(
    () => state.activeYear,
    (value, oldValue) => {
      if (value !== oldValue) {
        state.currentDate = state.activeYear + '-' + state.activeMonth
        state.cascaderCurrent = [Number(state.activeYear), Number(state.activeMonth)]
        api.getAllDatesOfCurrWeek(state.currentDate + '-' + 4)
        emit('year-change', value, oldValue)
        emit('update:modelValue', value, oldValue) // 兼容以前的写法
        api.handleEvents()
      }
    }
  )

  watch(
    () => state.activeMonth,
    (value, oldValue) => {
      if (value !== oldValue) {
        state.currentDate = state.activeYear + '-' + state.activeMonth
        state.cascaderCurrent = [Number(state.activeYear), Number(state.activeMonth)]
        api.getAllDatesOfCurrWeek(state.currentDate + '-' + 4)
        emit('month-change', value, oldValue)
        api.handleEvents()
      }
    }
  )
}

const initApi = ({ vm, api, state, t, props, emit, nextTick }) => {
  Object.assign(api, {
    state,
    touchstart: touchstart({ state }),
    touchmove: touchmove({ state }),
    touchend: touchend({ state, api, vm }),
    handleEvents: handleEvents({ props, state }),
    computedCalendar: computedCalendar({ props, state }),
    computeCascaderOptions: computeCascaderOptions(t),
    isToday: isToday(state),
    dateIsToday: dateIsToday(),
    selectDay: selectDay({ state, emit }),
    getEventByTime: getEventByTime({ props, state }),
    toToday: toToday({ state, api, nextTick }),
    getAllWednesdaysInYear: getAllWednesdaysInYear({ state }),
    getAllWednesdaysInMonth: getAllWednesdaysInMonth({ state }),
    getAllDatesOfCurrWeek: throttle(50, true, getAllDatesOfCurrWeek({ props, state })),
    initWeeklyCalendar: initWeeklyCalendar({ api, state }),
    getDatesOfPreviousWeek: getDatesOfPreviousWeek({ api, state }),
    getDatesOfNextWeek: getDatesOfNextWeek({ api, state }),
    currentDateChange: currentDateChange({ api, state }),
    newSchedule: newSchedule({ emit }),
    getPrevWeek: throttle(50, true, getPrevWeek({ api, state, emit })),
    getNextWeek: throttle(50, true, getNextWeek({ api, state, emit })),
    goPrevMonth: throttle(50, true, goPrevMonth({ state })),
    goNextMonth: throttle(50, true, goNextMonth({ state })),
    handleMouseenter: handleMouseenter({ vm, state }),
    handleMouseleave: handleMouseleave({ state }),
    isSelectedDate: isSelectedDate({ state }),
    isStartOrEndDay: isStartOrEndDay({ state }),
    getDayBgColor: getDayBgColor({ props }),
    isShowNewSchedule: isShowNewSchedule({ props }),
    genDayTimes: genDayTimes({ props }),
    isShowMark: isShowMark({ props }),
    handleCascaderChange: handleCascaderChange({ state }),
    setCascaderVisible: setCascaderVisible(state),
    getEventByMonth: getEventByMonth({ state }),
    getEventByDate: getEventByDate({ state }),
    getWeekOfDate: getWeekOfDate(),
    getEventShowTime: getEventShowTime({ state }),
    getCurWeekEvent: getCurWeekEvent({ state, api }),
    handleDropBtnClick: handleDropBtnClick({ api, state })
  })
}

export const renderless = (
  props,
  { computed, reactive, watch, onMounted },
  { vm, t, emit, nextTick },
  { images, modesIcon }
) => {
  const api = {}
  const state = initState({ reactive, props, computed, api, images, modesIcon })

  initWatch({ vm, api, watch, props, state, emit, nextTick })
  initApi({ vm, api, state, t, props, emit, nextTick })

  onMounted(() => {
    api.initWeeklyCalendar(`${state.activeYear}-${state.activeMonth}-4`)
    api.handleEvents()
  })

  return api
}
