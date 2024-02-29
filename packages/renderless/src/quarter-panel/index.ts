import { modifyDate, nextYear, prevYear } from '../common/deps/date-util'
import { DATEPICKER } from '../common'

const getTarget = (event) => {
  let target = event.target
  const tagName = target.tagName

  if (tagName === 'A') {
    target = target.parentNode.parentNode
  }

  if (tagName === 'DIV') {
    target = target.parentNode
  }

  if (target.tagName !== 'TD') {
    return
  }

  return target
}

export const handleQuarterTableClick =
  ({ state, emit }) =>
  (event) => {
    const target = getTarget(event)
    const currentDate = new Date(state.date.getFullYear(), DATEPICKER.QuarterMap[target.cellIndex], 1)
    state.value = currentDate
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

export const getCellStyle =
  ({ api, props, state }) =>
  (cell) => {
    const year = state.date.getFullYear()
    const quarter = cell.text.slice(1) - 1

    const style = {}
    style.current =
      state.value && state.value.getFullYear() === year && state.value.getMonth() === DATEPICKER.QuarterMap[quarter]

    return style
  }
