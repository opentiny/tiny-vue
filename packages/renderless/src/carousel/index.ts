import throttle from '../common/deps/throttle'
import { getDirection } from '../common/deps/touch'
import { POSITION } from '../common'
import emulate from '../common/deps/touch-emulator'

// 鼠标进入幻灯片事件
export const handleMouseEnter =
  ({ api, state }) =>
  () => {
    state.hover = true
    api.pauseTimer()
  }

export const handleMouseLeave =
  ({ api, state }) =>
  () => {
    state.hover = false
    api.startTimer()
  }

export const itemInStage =
  (state) =>
  ({ item, index }) => {
    const length = state.items.length
    const arr = state.items

    if (
      (index === length - 1 && item.inStage && arr[0].active) ||
      (item.inStage && arr[index + 1] && arr[index + 1].active)
    ) {
      return POSITION.Left
    } else if (
      (index === 0 && item.inStage && arr[length - 1].active) ||
      (item.inStage && arr[index - 1] && arr[index - 1].active)
    ) {
      return POSITION.Right
    }

    return false
  }

export const handleButtonEnter =
  ({ api, state }) =>
  (arrow) => {
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

// 播放幻灯片
export const playSlides =
  ({ api, props, state }) =>
  () => {
    let newIndex
    let oldIndex = state.activeIndex

    if (state.activeIndex < state.items.length - 1) {
      newIndex = state.activeIndex + 1
    } else if (props.loop) {
      newIndex = 0
    }

    api.canActive(newIndex, oldIndex).then((result) => {
      if (result) {
        state.activeIndex = newIndex
      }
    })
  }

// 暂停计时器
export const pauseTimer = (state) => () => clearInterval(state.timer)

// 启动计时器
export const startTimer =
  ({ api, props, state }) =>
  () => {
    if (props.interval <= 0 || !props.autoplay) {
      return
    }

    state.timer = setInterval(api.playSlides, props.interval)
  }

export const setActiveItem =
  ({ api, props, state }) =>
  (index) => {
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
    let newIndex

    if (index < 0) {
      newIndex = props.loop ? length - 1 : 0
    } else if (index >= length) {
      newIndex = props.loop ? 0 : length - 1
    } else {
      newIndex = index
    }

    const nextProcess = () => {
      state.activeIndex = newIndex

      if (oldIndex === state.activeIndex) {
        api.resetItemPosition(oldIndex)
      }
    }

    if (newIndex === oldIndex) {
      nextProcess()
    } else {
      api.canActive(newIndex, oldIndex).then((result) => {
        if (result) {
          nextProcess()
        }
      })
    }
  }
export const canActive = (props) => (newIndex, oldIndex) => {
  return new Promise((resolve) => {
    if (typeof props.beforeSwipe === 'function') {
      resolve(props.beforeSwipe(newIndex, oldIndex))
    } else {
      resolve(true)
    }
  }).then((result) => result !== false)
}

export const prev =
  ({ api, state }) =>
  () =>
    api.setActiveItem(state.activeIndex - 1)

export const next =
  ({ api, state }) =>
  () =>
    api.setActiveItem(state.activeIndex + 1)

export const handleIndicatorClick =
  ({ api, state }) =>
  (index) => {
    api.canActive(index, state.activeIndex).then((result) => {
      if (result) {
        state.activeIndex = index
      }
    })
  }

export const handleIndicatorHover =
  ({ api, props, state }) =>
  (index) => {
    if (props.trigger === 'hover' && index !== state.activeIndex) {
      api.canActive(index, state.activeIndex).then((result) => {
        if (result) {
          state.activeIndex = index
        }
      })
    }
  }

export const watchItems =
  ({ props, api }) =>
  (value) => {
    if (value.length) {
      api.setActiveItem(props.initialIndex)
    }
  }

export const watchActiveIndex =
  ({ emit, api }) =>
  ({ value, oldValue }) => {
    api.resetItemPosition(oldValue)
    emit('change', value, oldValue)
  }

export const watchAutoplay = (api) => (value) => (value ? api.startTimer() : api.pauseTimer())

export const throttledArrowClick = (api) => throttle(300, true, (index) => api.setActiveItem(index))

export const throttledIndicatorHover = (api) => throttle(300, (index) => api.handleIndicatorHover(index))

export const computedHasLabel = (items) => items.some((item) => item.label.toString().length > 0)

export const computedStyle =
  ({ props }) =>
  () => {
    if (props.height) {
      return { 'height': props.height }
    } else {
      // 低版本浏览器兼容（chrome 58 不支持 aspect-ratio属性）
      if (CSS.supports('aspect-ratio', 'auto')) {
        return { 'aspect-ratio': props.aspectRatio.replace(':', ' / ') }
      } else {
        const ratio = props.aspectRatio.split(':')
        const paddingTop = ((ratio[1] / ratio[0]) * 100).toFixed(2) + '%'

        return { 'width': '100%', 'height': 0, 'padding-top': paddingTop }
      }
    }
  }

export const onComplete =
  ({ api, count, emit, props, state }) =>
  (total) => {
    if (count++ === total) {
      state.completed = true

      if (props.initialIndex < state.items.length && props.initialIndex >= 0) {
        api.canActive(props.initialIndex, state.activeIndex).then((result) => {
          if (result) {
            state.activeIndex = props.initialIndex
          }
        })
      }

      emit('complete')
    }
  }

export const touchstart =
  ({ props, state, api }) =>
  (event) => {
    if (state.items.length <= 1 || ~state.noTouchNode.indexOf(event.target.nodeName)) return

    if (!props.swipeable) {
      event.preventDefault()
      event.stopPropagation()
    }

    resetTouchStatus(state)
    api.pauseTimer()
    state.itemsTranslate = state.items.map((item) => item.state.translate)

    state.moving = true
    state.touchTime = Date.now()
    state.startPos.X = event.touches[0].clientX
    state.startPos.Y = event.touches[0].clientY
  }

export const touchmove =
  ({ props, state, vm }) =>
  (event) => {
    if (state.items.length <= 1 || ~state.noTouchNode.indexOf(event.target.nodeName)) return

    const touch = event.touches[0]
    const itemsLen = state.items.length
    const carousel = vm.$refs.carousel

    state.deltaPos.X = touch.clientX - state.startPos.X
    state.deltaPos.Y = touch.clientY - state.startPos.Y
    state.offsetPos.X = Math.abs(state.deltaPos.X)
    state.offsetPos.Y = Math.abs(state.deltaPos.Y)
    state.direction = state.direction || getDirection(state.offsetPos.X, state.offsetPos.Y)
    state.isCorrectDirection = state.direction === props.type

    if (!state.isCorrectDirection) return

    state.size = state.direction === 'horizontal' ? carousel.offsetWidth : carousel.offsetHeight

    const nextIndex = state.activeIndex === itemsLen - 1 ? 0 : state.activeIndex + 1
    const prevIndex = state.activeIndex === 0 ? itemsLen - 1 : state.activeIndex - 1

    state.delta = state.direction === 'horizontal' ? state.deltaPos.X : state.deltaPos.Y

    state.moveDisable =
      !props.loop &&
      ((state.activeIndex === 0 && state.delta > 0) ||
        (state.activeIndex === state.items.length - 1 && state.delta < 0))

    if (state.moveDisable) return

    state.items[state.activeIndex].setDelta(state.delta)
    state.items[nextIndex].setDelta(state.delta)

    if (itemsLen > 2) {
      state.items[prevIndex].setDelta(state.delta)
    }
  }

export const touchend =
  ({ state, api }) =>
  (event) => {
    if (state.moveDisable || state.items.length <= 1 || ~state.noTouchNode.indexOf(event.target.nodeName)) return
    const speed = state.delta / (Date.now() - state.touchTime)
    const isShouldMove = Math.abs(speed) > 0.3 || Math.abs(state.delta) > +(state.size / 2).toFixed(2)
    state.moving = false
    state.itemsTranslate.forEach((item, index) => {
      state.items[index].setDelta(0)
    })
    if (isShouldMove && state.isCorrectDirection) {
      state.delta < 0 ? api.next() : api.prev()
    } else if (Math.abs(state.delta) > 1) {
      state.items.forEach((item) => {
        item.resetAnimatingMf()
      })
    }
    api.startTimer()
  }

function resetTouchStatus(state) {
  state.direction = ''
  state.delta = 0
  state.deltaPos.X = 0
  state.deltaPos.Y = 0
  state.offsetPos.X = 0
  state.offsetPos.Y = 0
}

export const simulateTouch =
  ({ props, vm }) =>
  () => {
    if (props.swipeable && vm.$refs.carousel) {
      emulate()
      vm.$refs.carousel.setAttribute('data-tiny-touch-simulate-container', '')
    }
  }

export const computedHasButtons =
  ({ props, state, mode }) =>
  () => {
    if (props.lite) {
      return false
    } else if (mode === 'mobile-first') {
      return props.arrow !== 'never' && state.items.length > 1
    } else if (mode === 'pc') {
      return props.arrow !== 'never'
    }
  }

export const computedHasIndicators =
  ({ props, state, mode }) =>
  () => {
    if (props.lite) {
      return false
    } else if (mode === 'mobile-first') {
      return props.indicatorPosition !== 'none' && state.items.length > 1
    } else if (mode === 'pc') {
      return props.indicatorPosition !== 'none'
    }
  }
