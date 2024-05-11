/* eslint-disable no-unused-expressions */
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

import { modifyTime } from '../common/deps/date-util'
import { DATEPICKER } from '../common'

export const getArrowHourList = (state) => () => {
  const hours = state.hours
  const step = state.step.hours

  return [hours - step >= 0 ? hours - step : undefined, hours, hours + step <= 23 ? hours + step : undefined]
}

export const getArrowMinuteList = (state) => () => {
  const minutes = state.minutes
  const step = state.step.minutes

  return [minutes - step >= 0 ? minutes - step : undefined, minutes, minutes + step <= 59 ? minutes + step : undefined]
}

export const getArrowSecondList = (state) => () => {
  const seconds = state.seconds
  const step = state.step.seconds

  return [seconds - step >= 0 ? seconds - step : undefined, seconds, seconds + step <= 59 ? seconds + step : undefined]
}

export const increase =
  ({ api, state }) =>
  () =>
    api.scrollDown(state.step[state.currentScrollbar])

export const decrease =
  ({ api, state }) =>
  () =>
    api.scrollDown(-state.step[state.currentScrollbar])

export const modifyDateField =
  ({ emit, props, state }) =>
  (type, value) => {
    if (state[type] === value) {
      return
    }
    switch (type) {
      case 'hours':
        emit('change', modifyTime(props.date, value, state.minutes, state.seconds))
        break
      case 'minutes':
        emit('change', modifyTime(props.date, state.hours, value, state.seconds))
        break
      case 'seconds':
        emit('change', modifyTime(props.date, state.hours, state.minutes, value))
        break
      default:
        break
    }
  }

export const handleClick =
  (api) =>
  (type, { value, disabled }) => {
    if (!disabled) {
      api.modifyDateField(type, value)
      api.emitSelectRange(type)
      api.adjustSpinner(type, value)
    }
  }

export const emitSelectRange =
  ({ emit, state }) =>
  (type) => {
    if (type === 'hours') {
      emit('select-range', 0, 2)
    } else if (type === 'minutes') {
      emit('select-range', 3, 5)
    } else if (type === 'seconds') {
      emit('select-range', 6, 8)
    }

    state.currentScrollbar = type
  }

export const bindScrollEvent =
  ({ api, vm }) =>
  () => {
    const bindFuntion = (type) => {
      vm.$refs[type].$refs.wrap.onscroll = (e) => {
        api.handleScroll(type, e)
      }
    }

    bindFuntion('hours')
    bindFuntion('minutes')
    bindFuntion('seconds')
  }

export const handleScroll =
  ({ api, vm, state }) =>
  (type) => {
    let value = Math.round(
      (vm.$refs[type].$refs.wrap.scrollTop - (api.scrollBarHeight(type) * 0.5 - 10) / api.typeItemHeight(type) + 3) /
        api.typeItemHeight(type)
    )

    const step = state.step[type]
    const limitVal = { hours: 23, minutes: 59, seconds: 59 }
    Object.keys(limitVal).forEach((key) => (limitVal[key] = Math.floor(limitVal[key] / step) * step))

    value = api.selectDateScroll(type, Math.min(value * step, limitVal[type]))

    api.modifyDateField(type, value)
  }
export const selectDateScroll =
  ({ state, props }) =>
  (type, value) => {
    if (Object.keys(props.endDate).length !== 0) {
      // 选择时间范围开始时间滚动逻辑
      const endHours = props.endDate.getHours()
      const endMinutes = props.endDate.getMinutes()
      const endSeconds = props.endDate.getSeconds()
      if (type === 'hours') {
        value = value > endHours ? state.hours : value
      } else if (type === 'minutes') {
        value = state.hours === endHours && value > endMinutes ? state.minutes : value
      } else {
        value = state.hours === endHours && state.minutes === endMinutes && value > endSeconds ? state.seconds : value
      }
    } else if (Object.keys(props.startDate).length !== 0) {
      // 选择时间范围结束时间滚动逻辑
      const startHours = props.startDate.getHours()
      const startMinutes = props.startDate.getMinutes()
      const startSeconds = props.startDate.getSeconds()
      if (type === 'hours') {
        value = value < startHours ? state.hours : value
      } else if (type === 'minutes') {
        value = state.hours === startHours && value < startMinutes ? state.minutes : value
      } else {
        value =
          state.hours === startHours && state.minutes === startMinutes && value < startSeconds ? state.seconds : value
      }
    } else if (state.selectableRange.length > 0) {
      // 固定时间范围滚动逻辑
      const [startRange, endRange] = state.selectableRange[0]
      const startRangeHours = startRange.getHours()
      const endRangeHours = endRange.getHours()
      const startRangeMinutes = startRange.getMinutes()
      const endRangeMinutes = endRange.getMinutes()
      const startRangeSeconds = startRange.getSeconds()
      const endRangeSeconds = endRange.getSeconds()
      if (type === 'hours') {
        value = value < startRangeHours || value > endRangeHours ? state.hours : value
      } else if (type === 'minutes') {
        if (state.hours === startRangeHours) {
          value = value < startRangeMinutes ? startRangeMinutes : value
        } else if (state.hours === endRangeHours) {
          value = value > endRangeMinutes ? endRangeMinutes : value
        }
      } else {
        if (state.hours === startRangeHours && state.minutes === startRangeMinutes) {
          value = value < startRangeSeconds ? startRangeSeconds : value
        } else if (state.hours === endRangeHours && state.minutes === endRangeMinutes) {
          value = value > endRangeSeconds ? endRangeSeconds : value
        }
        value = startRangeSeconds === 0 && value < 1 ? 0 : value
      }
    }
    return value
  }

export const adjustSpinners =
  ({ api, state, vm }) =>
  (type) => {
    if (type) {
      const year = vm.date.getFullYear()
      const month = vm.date.getUTCMonth() + 1
      const day = vm.date.getDate()
      if (type === 'min' && vm.endDate instanceof Date) {
        state.selectableRange = [[new Date(`${year}-${month}-${day} 00:00:00`), vm.endDate]]
      } else if (type === 'max' && vm.startDate instanceof Date) {
        state.selectableRange = [[vm.startDate, new Date(`${year}-${month}-${day} 23:59:59`)]]
      }
    }
    api.adjustSpinner('hours', state.hours)
    api.adjustSpinner('minutes', state.minutes)
    api.adjustSpinner('seconds', state.seconds)
  }

export const adjustCurrentSpinner =
  ({ api, state }) =>
  (type) => {
    api.adjustSpinner(type, state[type])
  }

export const adjustSpinner =
  ({ api, props, vm, state }) =>
  (type, value) => {
    if (props.arrowControl) {
      return
    }

    const el = vm.$refs[type].$refs.wrap

    if (el) {
      el.scrollTop = Math.max(0, (value / state.step[type]) * api.typeItemHeight(type))
    }
  }

export const scrollDown =
  ({ api, state }) =>
  (step) => {
    if (!state.currentScrollbar) {
      api.emitSelectRange('hours')
    }

    const label = state.currentScrollbar
    const hoursArr = state.hoursList
    let now = state[label]
    let diabledHour

    const find = (arr, value, key) => arr.find((item) => item[key] === value)

    if (state.currentScrollbar === 'hours') {
      let total = Math.abs(step)

      let length = hoursArr.length

      while (length-- && total) {
        now = (now + step + hoursArr.length * total) % (hoursArr.length * total)
        diabledHour = find(hoursArr, now, 'hour')
        if (diabledHour && diabledHour.disabled) {
          continue
        }
        60

        total -= total
      }

      if (diabledHour && diabledHour.disabled) {
        return
      }
    } else {
      now = (now + step + 60) % 60
    }

    now = Math.round(now / state.step[label]) * state.step[label]

    api.modifyDateField(label, now)
    api.adjustSpinner(label, now)
  }

export const amPm = (props) => (hour) => {
  let shouldShowAmPm = props.amPmMode.toLowerCase() === 'a'

  if (!shouldShowAmPm) {
    return ''
  }

  let isCapital = props.amPmMode === 'A'
  let content = hour < 12 ? ' am' : ' pm'

  if (isCapital) {
    content = content.toUpperCase()
  }

  return content
}

export const typeItemHeight =
  ({ vm }) =>
  (type) =>
    vm.$refs[type].$el.querySelector(DATEPICKER.Qurtyli).offsetHeight

export const scrollBarHeight = (vm) => (type) => vm.$refs[type].$el.offsetHeight
