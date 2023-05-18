import {
  getCalendarDays,
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
  i18nYearMonth
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
  'i18nYearMonth'
]

export const renderless = (props, { reactive, computed, onBeforeMount, onMounted }, { emit, vm, t }) => {
  const state = reactive({
    minSize2: 'min-width: 3rem; min-height: 2rem',
    minSize3: 'min-width: 3rem; min-height: 3rem',
    dayOfWeek: 7,
    weekDays: [],
    calendarDays: [],
    currentYear: '',
    currentMonth: '',
    currentRow: computed(() => api.computedCurrentRow()),
    filteredCalendarDays: computed(() => api.computedFilteredCalendarDays()),
    visibleRows: [],
    itemHeight: 0,
    totalRows: computed(() => api.computedTotalRows()),
    dragging: false,
    touching: false,
    cascaderCurrent: [],
    cascaderOptions: computed(() => api.computeCascaderOptions()),
    cascaderVisible: false
  })

  const api = {
    state,
    getCalendarDays: getCalendarDays(state),
    computedCurrentRow: computedCurrentRow(state),
    computedFilteredCalendarDays: computedFilteredCalendarDays(state),
    handleDraggerClick: handleDraggerClick(state),
    calcCalendarItemHeight: calcCalendarItemHeight({ state, vm }),
    computedTotalRows: computedTotalRows(state),
    throttledHandleMousemove: throttle(20, handleMousemove({ state, vm })),
    handleDraggerTouchstart: handleDraggerTouchstart({ state, vm }),
    handleDraggerTouchend: handleDraggerTouchend({ state, vm }),
    throttledHandleDraggerTouchmove: throttle(20, handleDraggerTouchmove({ state, vm })),
    setCascaderVisible: setCascaderVisible(state),
    computeCascaderOptions: computeCascaderOptions(t),
    i18nYearMonth: i18nYearMonth({ state, t })
  }

  Object.assign(api, {
    handleClickDay: handleClickDay({ api, emit, props }),
    handleDraggerMousedown: handleDraggerMousedown({ api, state, vm }),
    handleMouseup: handleMouseup({ api, state, vm }),
    handleCascaderChange: handleCascaderChange({ api, emit, props, state })
  })

  onBeforeMount(() => {
    api.getCalendarDays(props.modelValue, props.config)
  })

  onMounted(() => {
    api.calcCalendarItemHeight()
  })

  return api
}
