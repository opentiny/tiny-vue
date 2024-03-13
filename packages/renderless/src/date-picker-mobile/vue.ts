import {
  initPanel,
  formatDate,
  getCurrentDate,
  getSelectedPosition,
  getWeeksByMonth,
  getDaysByWeek,
  getDate,
  watchVisible,
  scrollToCurrentDate,
  watchModelValue,
  selectOption,
  timeToggle,
  timeConfirm,
  selectedComputed,
  loadingDate,
  scrollStart,
  scrollEnd,
  clear,
  close,
  confirm
} from './index'
import { initYearMonthPanel, getOffsetMonth, loadYearMonth } from './year-month'

export const api = [
  'state',
  'getDate',
  'getWeeksByMonth',
  'getDaysByWeek',
  'getSelectedPosition',
  'selectOption',
  'confirm',
  'timeToggle',
  'timeConfirm',
  'scrollStart',
  'scrollEnd',
  'loadingDate',
  'clear',
  'close',
  'formatDate'
]

export const renderless = (props, { computed, reactive, watch, onMounted }, { emit, vm, nextTick, constants }) => {
  const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE
  const api = {}
  const state = reactive({
    scrollerHeight: window.innerHeight || 1000,
    toggle: false,
    date: null,
    loading: false,
    ready: false,
    dateList: {},
    timeVisible: false,
    showTimeIndex: 0,
    time: ['00', '00', '00'],
    timeList: [
      ['00', '00', '00'],
      ['00', '00', '00']
    ],
    years: [],
    isYearMonthPanel: computed(() => [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props.type)),
    yearNum: computed(() => ([YEAR_MONTH, YEAR_MONTH_RANGE].includes(props.type) ? 40 : 10)),
    itemSize: computed(() => ([YEAR_MONTH, YEAR_MONTH_RANGE].includes(props.type) ? 150 : 300)),
    buffer: 200,
    selected: computed(() => api.selectedComputed()),
    months: computed(() => Object.keys(state.dateList).map((item) => ({ id: item, yearMonth: item }))),
    btnDisabled: computed(
      () =>
        [DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(props.type) && state.date && state.date.length === 1
    ),
    computedYears: computed(() => Object.keys(state.years).map((item) => ({ id: item, year: item })))
  })

  Object.assign(api, {
    state,
    initPanel: initPanel({ state, api }),
    initYearMonthPanel: initYearMonthPanel({ state, props }),
    getCurrentDate: getCurrentDate({ api, props }),
    getWeeksByMonth: getWeeksByMonth({ state }),
    getDate: getDate({ state }),
    getDaysByWeek: getDaysByWeek({ state, api }),
    getSelectedPosition: getSelectedPosition({ state, api }),
    confirm: confirm({ state, emit, props, api, constants }),
    timeConfirm: timeConfirm({ state, emit }),
    scrollStart: scrollStart({ state, api, props, constants }),
    scrollEnd: scrollEnd({ state, api, props, constants }),
    selectOption: selectOption({ state, emit, props, constants }),
    timeToggle: timeToggle({ state }),
    watchVisible: watchVisible({ emit, api, state }),
    scrollToCurrentDate: scrollToCurrentDate({ state, vm, nextTick }),
    watchModelValue: watchModelValue({ props, state, constants }),
    selectedComputed: selectedComputed({ props, state, constants, api }),
    loadingDate: loadingDate({ state, api }),
    loadYearMonth: loadYearMonth({ state, api }),
    getOffsetMonth: getOffsetMonth(),
    formatDate: formatDate({ props, constants }),
    clear: clear({ state, emit, api }),
    close: close({ emit, vm })
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  onMounted(() => {
    state.isYearMonthPanel ? api.initYearMonthPanel({ isInit: true }) : api.initPanel({ isInit: true })
    props.visible &&
      api.scrollToCurrentDate({ date: (Array.isArray(state.date) ? state.date[0] : state.date) || new Date() })
    nextTick(() => {
      state.ready = true
    })
  })

  return api
}
