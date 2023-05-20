import { on, off } from '../common/deps/dom'
import {
  initPanel,
  getFormatDate,
  getCurrentDate,
  getSelectedPosition,
  getWeeksByMonth,
  getDaysByWeek,
  getDate,
  watchVisible,
  watchModelValue,
  selectOption,
  timeToggle,
  timeConfirm,
  selectedComputed,
  scrollLoadHandler,
  loadingDate,
  confirm
} from './index'

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
  'getFormatDate'
]

export const renderless = (
  props,
  { computed, reactive, watch, onMounted, onBeforeUnmount },
  { emit, vm, nextTick }
) => {
  const api = {}
  const state = reactive({
    toggle: false,
    date: null,
    loading: false,
    dateList: {},
    timeVisible: false,
    showTimeIndex: 0,
    time: ['00', '00', '00'],
    timeList: [
      ['00', '00', '00'],
      ['00', '00', '00']
    ],
    selected: computed(() => api.selectedComputed()),
    months: computed(() => Object.keys(state.dateList)),
    btnDisabled: computed(
      () => ['daterange', 'datetimerange'].includes(props.type) && state.date && state.date.length === 1
    )
  })

  Object.assign(api, {
    state,
    initPanel: initPanel({ state, api }),
    getCurrentDate: getCurrentDate(),
    getWeeksByMonth: getWeeksByMonth({ state }),
    getDate: getDate({ state }),
    getDaysByWeek: getDaysByWeek({ state, api }),
    getSelectedPosition: getSelectedPosition({ state }),
    confirm: confirm({ state, emit, props, api }),
    timeConfirm: timeConfirm({ state, emit }),
    selectOption: selectOption({ state, emit, props }),
    timeToggle: timeToggle({ state }),
    watchVisible: watchVisible({ emit, api, nextTick, vm }),
    watchModelValue: watchModelValue({ props, state }),
    selectedComputed: selectedComputed({ props, state }),
    scrollLoadHandler: scrollLoadHandler({ state, vm, api }),
    loadingDate: loadingDate({ state, api }),
    getFormatDate
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  onMounted(() => {
    api.initPanel()
    on(vm.$refs.datePickerBody, 'scroll', api.scrollLoadHandler)
  })

  onBeforeUnmount(() => {
    off(vm.$refs.datePickerBody, 'scroll', api.scrollLoadHandler)
  })

  return api
}
