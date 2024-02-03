import {
  handleChangeRange,
  resetView,
  rightNextYear,
  isValidValue,
  handleConfirm,
  leftPrevYear,
  watchValue,
  handleShortcutClick,
  watchDefaultValue,
  handleRangePick,
  handleClear,
  doPick
} from './index'
import { DATEPICKER } from '../common'
import { nextYear } from '../common/deps/date-util'

export const api = [
  'state',
  'rightNextYear',
  'handleRangePick',
  'handleShortcutClick',
  'handleChangeRange',
  'leftPrevYear'
]

const initState = ({ reactive, computed, api, t }) => {
  const state = reactive({
    selectionMode: DATEPICKER.YearRange,
    popperClass: '',
    value: [],
    defaultValue: null,
    defaultTime: null,
    minDate: '',
    maxDate: '',
    leftDate: new Date(),
    rightDate: nextYear(new Date()),
    rangeState: { startDate: null, endDate: null, selecting: false, row: null, column: null },
    shortcuts: '',
    visible: '',
    disabledDate: '',
    format: '',
    arrowControl: false,
    unlinkPanels: false,
    leftStartYear: Math.floor(new Date().getFullYear() / 10) * 10,
    rightStartYear: computed(() => state.leftStartYear + DATEPICKER.PanelYearNum),

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
  const state = initState({ reactive, computed, api, t })

  Object.assign(api, {
    state,
    doPick: doPick(emit),
    resetView: resetView(state),
    watchValue: watchValue({ state }),
    isValidValue: isValidValue(state),
    leftPrevYear: leftPrevYear(state),
    rightNextYear: rightNextYear(state),
    handleClear: handleClear({ emit, state }),
    handleChangeRange: handleChangeRange(state),
    handleShortcutClick: handleShortcutClick(api),
    watchDefaultValue: watchDefaultValue({ state }),
    handleConfirm: handleConfirm({ api, emit, state }),
    handleRangePick: handleRangePick({ api, state, t })
  })

  watch(() => state.value, api.watchValue)
  watch(() => state.defaultValue, api.watchDefaultValue)

  return api
}
