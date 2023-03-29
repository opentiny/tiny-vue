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

import throttle from '@opentiny/vue-renderless/common/deps/throttle'
import { POSITION } from '@opentiny/vue-renderless/common'

export const handleMouseEnter = ({ api, state }) => () => {
  state.hover = true
  api.pauseTimer()
}

export const handleMouseLeave = ({ api, state }) => () => {
  state.hover = false
  api.startTimer()
}

export const itemInStage = (state) => ({ item, index }) => {
  const length = state.items.length
  const arr = state.items

  if ((index === length - 1 && item.inStage && arr[0].active) || (item.inStage && arr[index + 1] && arr[index + 1].active)) {
    return POSITION.Left
  } else if ((index === 0 && item.inStage && arr[length - 1].active) || (item.inStage && arr[index - 1] && arr[index - 1].active)) {
    return POSITION.Right
  }

  return false
}

export const handleButtonEnter = ({ api, state }) => (arrow) => {
  state.items.forEach((item, index) => {
    if (arrow === api.itemInStage({ item, index })) {
      item.hover = true
    }
  })
}

export const handleButtonLeave = (state) => () => {
  state.items.forEach((item) => {
    item.hover = false
  })
}

export const resetItemPosition = (state) => (oldIndex) => {
  if (state.completed) {
    state.items.forEach((item, index) => {
      item.translateItem({ activeIndex: state.activeIndex, index, oldIndex })
    })
  }
}

export const playSlides = ({ props, state }) => () => {
  if (state.activeIndex < state.items.length - 1) {
    state.activeIndex++
  } else if (props.loop) {
    state.activeIndex = 0
  }
}

export const pauseTimer = (state) => () => clearInterval(state.timer)

export const startTimer = ({ api, props, state }) => () => {
  if (props.interval <= 0 || !props.autoplay) {
    return
  }

  state.timer = setInterval(api.playSlides, props.interval)
}

export const setActiveItem = ({ api, props, state }) => (index) => {
  if (typeof index === 'string') {
    const filteredItems = state.items.filter((item) => item.name === index)

    if (filteredItems.length > 0) {
      index = state.items.indexOf(filteredItems[0])
    }
  }

  index = Number(index)

  if (isNaN(index) || index !== Math.floor(index)) {
    return
  }

  const length = state.items.length
  const oldIndex = state.activeIndex

  if (index < 0) {
    state.activeIndex = props.loop ? length - 1 : 0
  } else if (index >= length) {
    state.activeIndex = props.loop ? 0 : length - 1
  } else {
    state.activeIndex = index
  }

  if (oldIndex === state.activeIndex) {
    api.resetItemPosition(oldIndex)
  }
}

export const prev = ({ api, state }) => () => api.setActiveItem(state.activeIndex - 1)

export const next = ({ api, state }) => () => api.setActiveItem(state.activeIndex + 1)

export const handleIndicatorClick = (state) => (index) => {
  state.activeIndex = index
}

export const handleIndicatorHover = ({ props, state }) => (index) => {
  if (props.trigger === 'hover' && index !== state.activeIndex) {
    state.activeIndex = index
  }
}

export const watchItems = ({ props, api }) => (value) => {
  if (value.length) {
    api.setActiveItem(props.initialIndex)
  }
}

export const watchActiveIndex = ({ emit, api }) => ({ value, oldValue }) => {
  api.resetItemPosition(oldValue)
  emit('change', value, oldValue)
}

export const watchAutoplay = (api) => (value) => (value ? api.startTimer() : api.pauseTimer())

export const throttledArrowClick = (api) => throttle(300, true, (index) => api.setActiveItem(index))

export const throttledIndicatorHover = (api) => throttle(300, (index) => api.handleIndicatorHover(index))

export const computedHasLable = (items) => items.some((item) => item.label.toString().length > 0)

export const onComplete = ({ count, emit, props, state }) => (total) => {
  if (count++ === total) {
    state.completed = true

    if (props.initialIndex < state.items.length && props.initialIndex >= 0) {
      state.activeIndex = props.initialIndex
    }

    emit('complete')
  }
}
