import { DATEPICKER } from '../common'
import {
  handleQuarterTableClick,
  showYearPicker,
  handleYearPick,
  cusPrevYear,
  cusNextYear,
  getYearLabel,
  getCellStyle
} from './index'

export const api = [
  'state',
  'handleQuarterTableClick',
  'showYearPicker',
  'handleYearPick',
  'cusPrevYear',
  'cusNextYear',
  'getCellStyle'
]

export const renderless = (props, { reactive, computed }, { emit, t }) => {
  const api = {}

  const state = reactive({
    date: new Date(),
    visible: false,
    currentView: DATEPICKER.Quarter,
    yearLabel: computed(() => api.getYearLabel()),
    startYear: Math.floor(new Date().getFullYear() / 10) * 10,
    rows: [{ text: 'Q1' }, { text: 'Q2' }, { text: 'Q3' }, { text: 'Q4' }]
  })

  Object.assign(api, {
    state,
    handleQuarterTableClick: handleQuarterTableClick({ state, emit }),
    showYearPicker: showYearPicker({ state }),
    handleYearPick: handleYearPick({ state }),
    cusPrevYear: cusPrevYear({ state }),
    cusNextYear: cusNextYear({ state }),
    getYearLabel: getYearLabel({ state, t }),
    getCellStyle: getCellStyle({ api, props, state })
  })

  return api
}
