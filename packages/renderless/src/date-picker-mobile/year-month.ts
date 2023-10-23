import { getDateStr } from './index'

export const initYearMonthPanel = ({ state, props }) => ({ dateValue, direction, isInit }) => {
  const years = []
  const currentDate = dateValue || (Array.isArray(state.date) ? state.date[0] : state.date) || new Date()
  let year = direction === 'top' ? currentDate.getFullYear() - state.yearNum : currentDate.getFullYear()
  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth() + 1
  const { disabledDate } = props.pickerOptions || {}

  if (isInit) {
    // init component
    year -= Math.floor(state.yearNum / 2)
  }

  Array.from({ length: state.yearNum }).map((item, index) => {
    const currentYear = year + index + 1
    years[currentYear] = Array.from({ length: 12 }).map((v, index2) => {
      const month = index2 + 1
      return {
        value: getDateStr(currentYear, month),
        year: currentYear,
        month: month,
        disabled: typeof disabledDate === 'function' && !!disabledDate(new Date(currentYear, month - 1, 1)),
        isToday: thisYear === currentYear && thisMonth === month
      }
    })
  })

  state.years = direction === 'top' ? Object.assign({}, years, state.years) : Object.assign({}, state.years, years)
}

export const loadYearMonth = ({ state, api }) => (direction) => {
  const list = Object.keys(state.years)
  let date

  if (direction === 'top') {
    date = new Date(list[0], 0, 1)
  } else {
    date = new Date(list[list.length - 1], 0, 1)
  }

  api.initYearMonthPanel({ dateValue: date, direction })

  setTimeout(() => {
    state.loading = false
  }, 100)
}

// 获取偏移量月份
export const getOffsetMonth = () => (date, offset) => {
  const theDate = new Date(date)
  let year = theDate.getFullYear()
  let month = theDate.getMonth()
  let day = theDate.getDate()

  return new Date(year, month + offset, day)
}
