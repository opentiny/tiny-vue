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

import { modifyTime } from '@opentiny/vue-renderless/common/deps/date-util'
import { DATEPICKER } from '@opentiny/vue-renderless/common'

export const getArrowHourList = (state) => () => {
  const hours = state.hours

  return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined]
}

export const getArrowMinuteList = (state) => () => {
  const minutes = state.minutes

  return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined]
}

export const getArrowSecondList = (state) => () => {
  const seconds = state.seconds

  return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined]
}

export const increase = (api) => () => api.scrollDown(1)

export const decrease = (api) => () => api.scrollDown(-1)

export const modifyDateField = ({ emit, props, state }) => (type, value) => {
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

export const handleClick = (api) => (type, { value, disabled }) => {
  if (!disabled) {
    api.modifyDateField(type, value)
    api.emitSelectRange(type)
    api.adjustSpinner(type, value)
  }
}

export const emitSelectRange = ({ emit, state }) => (type) => {
  if (type === 'hours') {
    emit('select-range', 0, 2)
  } else if (type === 'minutes') {
    emit('select-range', 3, 5)
  } else if (type === 'seconds') {
    emit('select-range', 6, 8)
  }

  state.currentScrollbar = type
}

export const bindScrollEvent = ({ api, refs }) => () => {
  const bindFuntion = (type) => {
    refs[type].$refs.wrap.onscroll = (e) => {
      api.handleScroll(type, e)
    }
  }

  bindFuntion('hours')
  bindFuntion('minutes')
  bindFuntion('seconds')
}

export const handleScroll = ({ api, refs }) => (type) => {
  const value = Math.min(
    Math.round((refs[type].$refs.wrap.scrollTop - (api.scrollBarHeight(type) * 0.5 - 10) / api.typeItemHeight(type) + 3) / api.typeItemHeight(type)),
    type === 'hours' ? 23 : 59
  )

  api.modifyDateField(type, value)
}

export const adjustSpinners = ({ api, state }) => () => {
  api.adjustSpinner('hours', state.hours)
  api.adjustSpinner('minutes', state.minutes)
  api.adjustSpinner('seconds', state.seconds)
}

export const adjustCurrentSpinner = ({ api, state }) => (type) => {
  api.adjustSpinner(type, state[type])
}

export const adjustSpinner = ({ api, props, refs }) => (type, value) => {
  if (props.arrowControl) {
    return
  }

  const el = refs[type].$refs.wrap

  if (el) {
    el.scrollTop = Math.max(0, value * api.typeItemHeight(type))
  }
}

export const scrollDown = ({ api, state }) => (step) => {
  if (!state.currentScrollbar) {
    api.emitSelectRange('hours')
  }

  const label = state.currentScrollbar
  const hoursArr = state.hoursList
  let now = state[label]

  if (state.currentScrollbar === 'hours') {
    let total = Math.abs(step)

    step = step > 0 ? 1 : -1

    let length = hoursArr.length

    while (length-- && total) {
      now = (now + step + hoursArr.length) % hoursArr.length

      if (!hoursArr[now]) {
        total--
      }
    }

    if (hoursArr[now]) {
      return
    }
  } else {
    now = (now + step + 60) % 60
  }

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

export const typeItemHeight = ({ refs }) => (type) => refs[type].$el.querySelector(DATEPICKER.Qurtyli).offsetHeight

export const scrollBarHeight = (refs) => (type) => refs[type].$el.offsetHeight
