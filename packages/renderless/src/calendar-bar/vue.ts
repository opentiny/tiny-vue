import {
  getCalendarDays,
  computedData,
  computedCurrentRow,
  computedFilteredCalendarDays,
  handleDraggerClick,
  handleClickDay,
  calcCalendarItemHeight,
  computedTotalRows,
  handleDraggerMousedown,
  handleMouseup,
  handleMousemove,
  handleDraggerTouchstart,
  handleDraggerTouchend,
  handleDraggerTouchmove,
  setCascaderVisible,
  handleCascaderChange,
  computeCascaderOptions,
  getAllDatesOfCurrWeek,
  updateCalendarDays,
  showWeekChange,
  getWeekOfDate,
  getPrevWeek,
  getNextWeek,
  i18nYearMonth,
  touchstart,
  touchmove,
  touchend
} from './index'
import throttle from '../common/deps/throttle'

export const api = [
  'state',
  'handleDraggerClick',
  'handleClickDay',
  'handleDraggerMousedown',
  'handleDraggerTouchstart',
  'handleDraggerTouchend',
  'throttledHandleDraggerTouchmove',
  'setCascaderVisible',
  'handleCascaderChange',
  'i18nYearMonth',
  'touchstart',
  'touchmove',
  'touchend'
]

const initWatch = ({ watch, api, state, emit }) => {
  watch(
    () => state.weekDates,
    (value, oldValue) => {
      if (state.dragging || state.touching) return
      state.prevWeekDates = api.getWeekOfDate('prev', state.weekDates[3].dateStr)
      state.nextWeekDates = api.getWeekOfDate('next', state.weekDates[3].dateStr)
      state.copyWeekDates = state.weekDates.slice(0)
      emit('week-change', value, oldValue)
    },
    { deep: true }
  )

  watch(
    () => state.showWeek,
    (value) => {
      api.showWeekChange(value)
    }
  )
}

export const renderless = (props, { reactive, computed, onBeforeMount, onMounted, watch }, { emit, vm, t }) => {
  const state = reactive({
    minSize2: 'min-width: 3rem; min-height: 2rem',
    minSize3: 'min-width: 3rem; min-height: 3rem',
    dayOfWeek: 7,
    showRows: 0,
    weekDays: [],
    prevWeekDates: [],
    weekDates: [],
    nextWeekDates: [],
    lastCalendarDays: [],
    calendarDays: [],
    nextCalendarDays: [],
    threeMonthDays: [],
    copyWeekDates: [],
    calendarDaysCopy: [],
    currentYear: '',
    currentMonth: '',
    data: computed(() => api.computedData()),
    currentRow: computed(() => api.computedCurrentRow()),
    filteredCalendarDays: computed(() => api.computedFilteredCalendarDays()),
    visibleRows: [],
    itemHeight: 0,
    totalRows: computed(() => api.computedTotalRows()),
    showWeek: true,
    dragging: false,
    touching: false,
    delta: 0,
    duration: 300,
    offsetPos: {
      X: 0,
      Y: 0
    },
    deltaPos: {
      X: 0,
      Y: 0
    },
    startPos: {
      X: 0,
      Y: 0
    },
    activeRow: 0,
    activeDate: '',
    cascaderCurrent: [],
    cascaderOptions: computed(() => api.computeCascaderOptions()),
    cascaderVisible: false
  })

  const api = {
    state,
    touchstart: touchstart({ state }),
    touchmove: touchmove({ state }),
    getCalendarDays: getCalendarDays(state),
    computedData: computedData(state),
    computedCurrentRow: computedCurrentRow(state),
    computedFilteredCalendarDays: computedFilteredCalendarDays(state),
    handleDraggerClick: handleDraggerClick(state, emit),
    calcCalendarItemHeight: calcCalendarItemHeight({ state, vm }),
    computedTotalRows: computedTotalRows(state),
    throttledHandleMousemove: throttle(20, handleMousemove({ state, vm })),
    handleDraggerTouchstart: handleDraggerTouchstart({ state, vm }),
    handleDraggerTouchend: handleDraggerTouchend({ state, vm, emit }),
    throttledHandleDraggerTouchmove: throttle(20, handleDraggerTouchmove({ state, vm })),
    setCascaderVisible: setCascaderVisible(state),
    computeCascaderOptions: computeCascaderOptions(t),
    i18nYearMonth: i18nYearMonth({ state, t })
  }

  Object.assign(api, {
    getPrevWeek: getPrevWeek({ props, emit, api, state }),
    getNextWeek: getNextWeek({ props, emit, api, state }),
    showWeekChange: showWeekChange({ props, state }),
    updateCalendarDays: updateCalendarDays({ props, state, api, emit }),
    getAllDatesOfCurrWeek: getAllDatesOfCurrWeek({ state, props }),
    getWeekOfDate: getWeekOfDate({ api }),
    touchend: touchend({ props, state, api, vm, emit }),
    handleClickDay: handleClickDay({ api, emit, props, state }),
    handleDraggerMousedown: handleDraggerMousedown({ api, state, vm }),
    handleMouseup: handleMouseup({ api, state, vm, emit }),
    handleCascaderChange: handleCascaderChange({ api, emit, props, state })
  })

  initWatch({ watch, api, state, emit })

  onBeforeMount(() => {
    api.getCalendarDays(props.modelValue, props.config, 'cur')
    api.getCalendarDays(props.modelValue, props.config, 'last')
    api.getCalendarDays(props.modelValue, props.config, 'next')
    state.weekDates = api.getAllDatesOfCurrWeek(props.modelValue || new Date())
  })

  onMounted(() => {
    api.calcCalendarItemHeight()
  })

  return api
}
