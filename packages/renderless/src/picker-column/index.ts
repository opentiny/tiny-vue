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

import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

export const computedWrapperStyle = (state) => () => {
  const wrapperStyle = {
    transform: `translate3d(0, ${state.offset + state.baseOffset}px, 0)`,
    transitionDuration: `${state.duration}ms`,
    transitionProperty: state.duration ? 'all' : 'none',
    lineHeight: `${state.itemHeight}px`
  }

  return wrapperStyle
}

export const computedBaseOffset = ({ state, props }) => () => (state.itemHeight * (props.visibleItemCount - 1)) / 2

export const onClickItem = ({ api, state }) => (index) => {
  if (state.moving) {
    return
  }

  state.duration = state.defaultDuration
  api.setIndex(index, true)
}

export const setIndex = ({ api, state, emit }) => (index, emitChange) => {
  index = api.adjustIndex(index) || 0

  const offset = -index * state.itemHeight

  const trigger = () => {
    if (index !== state.currentIndex) {
      state.currentIndex = index

      if (emitChange) {
        emit('change', index)
      }
    }
  }

  if (state.moving && offset !== state.offset) {
    state.transitionEndTrigger = trigger
  }

  trigger()
  state.offset = offset
}

const range = (num, min, max) => Math.min(Math.max(num, min), max)

const isOptionDisabled = (option) => option !== null && typeof option === 'object' && option.disabled

export const adjustIndex = (state) => (index) => {
  index = range(index, 0, state.count)

  for (let i = index; i < state.count; i++) {
    if (!isOptionDisabled(state.columnsItem.values[i])) {
      return i
    }
  }

  for (let i = index - 1; i >= 0; i--) {
    if (!isOptionDisabled(state.columnsItem.values[i])) {
      return i
    }
  }
}

export const onTouchstart = ({ refs, state }) => (event) => {
  state.direction = ''
  state.deltaX = 0
  state.deltaY = 0
  state.offsetX = 0
  state.offsetY = 0
  state.startX = event.touches[0].clientX
  state.startY = event.touches[0].clientY

  if (state.moving) {
    const style = window.getComputedStyle(refs.track)
    const transform = style.transform || style.webkitTransform
    const translateY = Number(transform.slice(7, transform.length - 1).split(', ')[5])

    state.offset = Math.min(0, translateY - state.baseOffset)
    state.startOffset = state.offset
  } else {
    state.startOffset = state.offset
  }

  state.duration = 0
  state.transitionEndTrigger = null
  state.touchStartTime = Date.now()
  state.momentumOffset = state.startOffset
}

const getDirection = (x, y) => {
  const MIN_DISTANCE = 10

  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }

  return ''
}

export const onTouchmove = ({ state }) => (event) => {
  const touch = event.touches[0]

  state.deltaX = touch.clientX - state.startX
  state.deltaY = touch.clientY - state.startY
  state.offsetX = Math.abs(state.deltaX)
  state.offsetY = Math.abs(state.deltaY)
  state.direction = state.direction || getDirection(state.offsetX, state.offsetY)

  if (state.direction === 'vertical') {
    state.moving = true
  }

  state.offset = range(state.startOffset + state.deltaY, -(state.count * state.itemHeight), state.itemHeight)

  const now = Date.now()

  if (now - state.touchStartTime > state.momentumLimitTime) {
    state.touchStartTime = now
    state.momentumOffset = state.offset
  }
}

export const onTouchend = ({ api, state }) => () => {
  const distance = state.offset - state.momentumOffset
  const duration = Date.now() - state.touchStartTime
  const allowMomentum = duration < state.momentumLimitTime && Math.abs(distance) > state.momentumLimitDistance

  if (allowMomentum) {
    api.momentum(distance, duration)
    return
  }

  const index = range(Math.round(-state.offset / state.itemHeight), 0, state.count - 1)

  state.duration = state.defaultDuration
  api.setIndex(index, true)

  setTimeout(() => {
    state.moving = false
  }, 0)
}

export const mountedHandler = ({ api, refs, state }) => () => {
  const track = refs.track

  on(track, 'touchstart', api.onTouchstart)
  on(track, 'touchmove', api.onTouchmove)
  on(track, 'touchend', api.onTouchend)

  state.clumnsWrapHeight = state.itemHeight * state.visibleItemCount

  state.maskStyle = {
    backgroundSize: `100% ${(state.clumnsWrapHeight - state.itemHeight) / 2}px`
  }
}

export const beforeUnmountHandler = ({ api, refs }) => () => {
  const track = refs.track

  off(track, 'touchstart', api.onTouchstart)
  off(track, 'touchmove', api.onTouchmove)
  off(track, 'touchend', api.onTouchend)
}

export const momentum = ({ api, state, props }) => (distance, duration) => {
  const speed = Math.abs(distance / duration)

  distance = state.offset + (speed / 0.002) * (distance < 0 ? -1 : 1)

  const index = range(Math.round(-distance / state.itemHeight), 0, state.count - 1)

  state.duration = Number(props.swipeDuration)
  api.setIndex(index, true)
}

export const onTransitionEnd = (state) => () => {
  state.moving = false
  state.duration = 0

  if (state.transitionEndTrigger) {
    state.transitionEndTrigger()
    state.transitionEndTrigger = null
  }
}

export const setValue = ({ api, state }) => (value) => {
  const { columnsItem } = state
  const values = columnsItem.values

  for (let i = 0; i < values.length; i++) {
    if (api.getOptionText(values[i]) === value) {
      return api.setIndex(i)
    }
  }
}

export const getOptionText = ({ state, props }) => (option) => {
  if (option !== null && typeof option === 'object' && props.valueKey in option) {
    return option[state.valueKey]
  }

  return option
}

export const getValue = (state) => () => state.columnsItem.values[state.currentIndex]

let deepAssign

const assignKey = (to, from, key) => {
  const { hasOwnProperty } = Object.prototype
  const val = from[key]

  if (val === undefined || val === null) {
    return
  }

  if (!hasOwnProperty.call(to, key) || typeof val !== 'object') {
    to[key] = val
  } else {
    to[key] = deepAssign(Object(to[key]), from[key])
  }
}

deepAssign = (to, from) => {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key)
  })

  return to
}

export const deepClone = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item))
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj)
  }

  return obj
}

export const setOptions = ({ api, state, props }) => (options) => {
  if (JSON.stringify(options) !== JSON.stringify(state.columnsItem.values)) {
    state.columnsItem.values = deepClone(options)
    api.setIndex(props.defaultIndex)
  }
}
