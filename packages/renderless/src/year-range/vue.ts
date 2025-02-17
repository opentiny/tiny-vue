import {
  handleChangeRange,
  resetView,
  rightPrevYear,
  rightNextYear,
  isValidValue,
  handleConfirm,
  leftPrevYear,
  leftNextYear,
  watchValue,
  handleShortcutClick,
  watchDefaultValue,
  handleRangePick,
  handleClear,
  doPick,
  watchModelValue
} from './index'
import { DATEPICKER, nextYear } from '@opentiny/utils'

export const api = [
  'state',
  'rightPrevYear',
  'rightNextYear',
  'handleRangePick',
  'handleShortcutClick',
  'handleChangeRange',
  'leftPrevYear',
  'leftNextYear',
  'watchModelValue'
]

const initState = ({ reactive, computed, api, props, t }) => {
  const initStartYear = Math.floor(new Date().getFullYear() / 10) * 10

  const state = reactive({
    selectionMode: DATEPICKER.YearRange,
    popperClass: props.popperClass || '',
    value: props.modelValue || [],
    defaultValue: null,
    defaultTime: null,
    minDate: '',
    maxDate: '',
    leftDate: new Date(),
    rightDate: nextYear(new Date()),
    rangeState: { startDate: null, endDate: null, selecting: false, row: null, column: null },
    shortcuts: props.shortcuts || [],
    visible: '',
    disabledDate: props.disabledDate || null,
    format: props.format || '',
    arrowControl: false,
    unlinkPanels: props.unlinkPanels || false,
    leftStartYear: initStartYear,
    rightStartYear: initStartYear + DATEPICKER.PanelYearNum,
    enableYearArrow: computed(
      () => props.unlinkPanels && state.rightStartYear > state.leftStartYear + DATEPICKER.PanelYearNum
    ),

    btnDisabled: computed(
      () => !(state.minDate && state.maxDate && !state.selecting && api.isValidValue([state.minDate, state.maxDate]))
    ),

    leftLabel: computed(
      () =>
        `${state.leftStartYear} ${t('ui.datepicker.year')} - ${state.leftStartYear + DATEPICKER.PanelYearNum - 1} ${t(
          'ui.datepicker.year'
        )}`
    ),
    rightLabel: computed(
      () =>
        `${state.rightStartYear} ${t('ui.datepicker.year')} - ${state.rightStartYear + DATEPICKER.PanelYearNum - 1} ${t(
          'ui.datepicker.year'
        )}`
    )
  })

  return state
}

export const renderless = (props, { computed, reactive, watch }, { t, emit: $emit }) => {
  const emit = props.emitter ? props.emitter.emit : $emit
  const api = {}
  const state = initState({ reactive, computed, api, props, t })

  Object.assign(api, {
    state,
    doPick: doPick(emit),
    resetView: resetView(state),
    watchValue: watchValue({ state }),
    isValidValue: isValidValue(state),
    leftPrevYear: leftPrevYear(state, api),
    leftNextYear: leftNextYear(state),
    rightPrevYear: rightPrevYear(state),
    rightNextYear: rightNextYear(state, api),
    handleClear: handleClear({ emit, state }),
    handleChangeRange: handleChangeRange(state, props),
    handleShortcutClick: handleShortcutClick(state, api, props),
    watchDefaultValue: watchDefaultValue({ state }),
    handleConfirm: handleConfirm({ api, emit, state, props, t }),
    handleRangePick: handleRangePick({ api, state, props, t }),
    watchModelValue: watchModelValue({ state })
  })

  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
  watch(() => state.value, api.watchValue)
  watch(() => state.defaultValue, api.watchDefaultValue)

  return api
}
