import { modifyDate, nextYear, prevYear } from '../common/deps/date-util'
import { DATEPICKER } from '../common'

const QUARTER_MAP = {
  0: 0,
  1: 3,
  2: 6,
  3: 9
}

export const handleQuarterTableClick =
  ({ state, emit }) =>
  (event) => {
    const currentDate = new Date(state.date.getFullYear(), QUARTER_MAP[event.target.cellIndex], 1)
    emit('pick', currentDate)
  }

export const showYearPicker =
  ({ state }) =>
  () =>
    (state.currentView = DATEPICKER.Year)

export const cusPrevYear =
  ({ state }) =>
  () => {
    if (state.currentView === DATEPICKER.Year) {
      state.startYear = state.startYear - DATEPICKER.PanelYearNum
    } else {
      state.date = prevYear(state.date)
    }
  }

export const cusNextYear =
  ({ state }) =>
  () => {
    if (state.currentView === DATEPICKER.Year) {
      state.startYear = state.startYear + DATEPICKER.PanelYearNum
    } else {
      state.date = nextYear(state.date)
    }
  }

export const handleYearPick =
  ({ state }) =>
  (value) => {
    state.currentView = DATEPICKER.Quarter
    state.date = modifyDate(state.date, value, state.date.getMonth(), state.date.getDate())
  }

export const getYearLabel =
  ({ state, t }) =>
  () => {
    return state.date.getFullYear()
  }
