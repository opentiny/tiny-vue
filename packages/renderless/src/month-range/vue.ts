/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import {
  resetView,
  isValidValue,
  handleConfirm,
  rightPrevYear,
  leftNextYear,
  rightNextYear,
  leftPrevYear,
  handleClear,
  watchValue,
  watchDefaultValue,
  handleChangeRange,
  handleRangePick,
  handleShortcutClick,
  doPick
} from './index'
import { nextYear } from '@opentiny/vue-renderless/common/deps/date-util'

export const api = ['state', 'rightNextYear', 'rightPrevYear', 'handleRangePick', 'handleShortcutClick', 'handleChangeRange', 'leftPrevYear', 'leftNextYear']

const initState = ({ reactive, computed, api, t }) => {
  const state = reactive({
    popperClass: '',
    value: [],
    defaultValue: null,
    defaultTime: null,
    minDate: '',
    maxDate: '',
    leftDate: new Date(),
    rightDate: nextYear(new Date()),
    rangeState: { endDate: null, selecting: false, row: null, column: null },
    shortcuts: '',
    visible: '',
    disabledDate: '',
    format: '',
    arrowControl: false,
    unlinkPanels: false,

    btnDisabled: computed(() => !(state.minDate && state.maxDate && !state.selecting && api.isValidValue([state.minDate, state.maxDate]))),

    leftLabel: computed(() => state.leftDate.getFullYear() + ' ' + t('ui.datepicker.year')),
    rightLabel: computed(() => state.rightDate.getFullYear() + ' ' + t('ui.datepicker.year')),
    leftYear: computed(() => state.leftDate.getFullYear()),

    rightYear: computed(() =>
      state.rightDate.getFullYear() === state.leftDate.getFullYear() ? state.leftDate.getFullYear() + 1 : state.rightDate.getFullYear()
    ),

    enableYearArrow: computed(() => state.unlinkPanels && state.rightYear > state.leftYear + 1)
  })

  return state
}

export const renderless = (props, { computed, reactive, watch }, { t, emit: $emit }) => {
  const api = {}
  const emit = props.emitter ? props.emitter.emit : $emit
  const state = initState({ reactive, computed, api, t })

  Object.assign(api, {
    state,
    resetView: resetView(state),
    handleChangeRange: handleChangeRange(state),
    isValidValue: isValidValue(state),
    leftNextYear: leftNextYear(state),
    leftPrevYear: leftPrevYear(state),
    doPick: doPick(emit),
    rightNextYear: rightNextYear(state),
    rightPrevYear: rightPrevYear(state),
    watchValue: watchValue({ state }),
    handleClear: handleClear({ emit, state }),
    watchDefaultValue: watchDefaultValue({ state }),
    handleConfirm: handleConfirm({ api, emit, state }),
    handleRangePick: handleRangePick({ api, state, t }),
    handleShortcutClick: handleShortcutClick(api)
  })

  watch(() => state.value, api.watchValue)
  watch(() => state.defaultValue, api.watchDefaultValue)

  return api
}
