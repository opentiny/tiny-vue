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
  getOffsetDay,
  getWeeks,
  getRows,
  handleClick,
  watchMinDate,
  watchMaxDate,
  cellMatchesDate,
  getCellClasses,
  getDateOfCell,
  isWeekActive,
  markRange,
  handleMouseMove,
  getCellRangeClasses,
  getCell
} from './index'
import { getStartDateOfMonth } from '../common/deps/date-util'

export const api = ['state', 'getCellClasses', 'isWeekActive', 'handleMouseMove', 'handleClick']

const initState = ({ reactive, computed, api, props }) => {
  const state = reactive({
    tableRows: [[], [], [], [], [], []],
    lastRow: null,
    lastColumn: null,
    constWeeks: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    rows: computed(() => api.getRows()),
    weeks: computed(() => api.getWeeks()),
    month: computed(() => props.date.getMonth()),
    offsetDay: computed(() => api.getOffsetDay()),
    year: computed(() => props.date.getFullYear()),
    startDate: computed(() => getStartDateOfMonth(state.year, state.month)),
    date: props.value
  })

  return state
}

const initApi = ({ api, state, props, emit, t, vm }) => {
  Object.assign(api, {
    t,
    state,
    getOffsetDay: getOffsetDay(props),
    getWeeks: getWeeks({ props, state }),
    markRange: markRange({ props, state }),
    cellMatchesDate: cellMatchesDate(state),
    getDateOfCell: getDateOfCell({ props, state }),
    getCell: getCell({ state, props }),
    isWeekActive: isWeekActive({ props, state }),
    watchMaxDate: watchMaxDate({ api, props }),
    watchMinDate: watchMinDate({ api, props }),
    handleMouseMove: handleMouseMove({ api, emit, props, state }),
    getRows: getRows({ api, props, state, t, vm }),
    handleClick: handleClick({ api, emit, props, state }),
    getCellClasses: getCellClasses({ api, props, state }),
    getCellRangeClasses: getCellRangeClasses({ props })
  })
}

const initWatch = ({ watch, props, api }) => {
  watch(
    () => props.rangeState,
    (value) => api.markRange(props.minDate, value.endDate),
    { deep: true }
  )

  watch(() => props.minDate, api.watchMinDate)

  watch(() => props.maxDate, api.watchMaxDate)
}

export const renderless = (props, { computed, reactive, watch }, { t, vm, emit }) => {
  const api = {}
  const state = initState({ reactive, computed, api, props })

  initApi({ api, state, props, emit, t, vm })

  initWatch({ watch, props, api })

  return api
}
