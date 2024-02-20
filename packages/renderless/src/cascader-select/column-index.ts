const DEFAULT_DURATION = 200

// 触发惯性滑动条件:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
// 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
const INERTIA_TIME = 300
const INERTIA_DISTANCE = 15

export const preventDefault = (event, isStopPropagation) => {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
}

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export const pxCheck = (value) => {
  return isNaN(Number(value)) ? String(value) : `${value}px`
}

// 惯性滚动结束
export const stopMomentum =
  ({ state, api }) =>
  () => {
    state.moving = false
    state.touchTime = 0
    api.setChooseValue()
  }

export const setRollerStyle =
  ({ state }) =>
  (index) => {
    return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`
  }

export const onTouchStart =
  ({ state, props, touch, vm }) =>
  (event) => {
    touch.start(event)
    if (state.moving) {
      const dom = vm.$refs.roller

      const { transform } = window.getComputedStyle(dom)
      if (props.threeDimensional) {
        const circle = Math.floor(parseInt(state.touchDeg) / 360)
        const cos = +transform.split(', ')[5]
        const sin = +transform.split(', ')[6] < 0 ? 180 : 0
        const endDeg = circle * 360 + (Math.acos(cos) / Math.PI) * 180 + sin

        state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props.optionHeight)
      } else {
        state.scrollDistance = +transform.slice(7, transform.length - 1).split(', ')[5]
      }
    }

    preventDefault(event, true)

    state.touchParams.startY = touch.deltaY.value
    state.touchParams.startTime = Date.now()
    state.transformY = state.scrollDistance
  }

export const onTouchMove =
  ({ state, api, touch }) =>
  (event) => {
    touch.move(event)
    if (touch.isVertical()) {
      state.moving = true
      preventDefault(event, true)
    }
    state.touchParams.lastY = touch.deltaY.value
    let move = state.touchParams.lastY - state.touchParams.startY
    api.setMove(move)
  }

export const onTouchEnd =
  ({ state, props, api, touch }) =>
  () => {
    state.touchParams.lastY = touch.deltaY.value
    state.touchParams.lastTime = Date.now()
    let move = state.touchParams.lastY - state.touchParams.startY

    let moveTime = state.touchParams.lastTime - state.touchParams.startTime

    if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
      // 惯性滚动
      const distance = api.momentum(move, moveTime)
      api.setMove(distance, 'end', +props.swipeDuration)
      return
    } else {
      api.setMove(move, 'end')
    }

    setTimeout(() => {
      touch.reset()
      state.moving = false
    }, 0)
  }

// 惯性滚动 距离
export const momentum = (distance, duration) => {
  // 惯性滚动的速度
  const speed = Math.abs(distance / duration)
  // 惯性滚动的距离
  distance = (speed / 0.003) * (distance < 0 ? -1 : 1)
  return distance
}

export const isHidden =
  ({ state }) =>
  (index) => {
    if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
      return true
    } else {
      return false
    }
  }

export const setTransform =
  ({ state }) =>
  (type, deg, translateY = 0, time = DEFAULT_DURATION) => {
    if (type === 'end') {
      state.touchTime = time
    } else {
      state.touchTime = 0
    }
    state.touchDeg = deg
    state.scrollDistance = translateY
  }

export const setMove =
  ({ state, props, api }) =>
  (move, type, time) => {
    const { optionHeight } = props
    let updateMove = move + state.transformY

    if (type === 'end') {
      // 限定滚动距离
      if (updateMove > 0) {
        updateMove = 0
      }
      if (updateMove < -(props.column.length - 1) * +optionHeight) {
        updateMove = -(props.column.length - 1) * +optionHeight
      }

      // 设置滚动距离为 +optionHeight 的倍数值
      let endMove = Math.round(updateMove / +optionHeight) * +optionHeight
      let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`

      api.setTransform(type, deg, endMove, time)

      state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1
    } else {
      let deg = 0
      let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation

      // picker 滚动的最大角度
      const maxDeg = (props.column.length + 1) * state.rotation
      const minDeg = 0

      deg = clamp(currentDeg, minDeg, maxDeg)

      if (minDeg < deg && deg < maxDeg) {
        api.setTransform(null, deg + 'deg', updateMove, undefined)
        state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1
      }
    }
  }

export const setChooseValue =
  ({ props, state, emit }) =>
  () => {
    emit('change', props.column[state.currIndex - 1])
  }

export const modifyStatus =
  ({ state, props, api }) =>
  (type) => {
    const { column } = props
    let index = column.findIndex((columnItem) => columnItem[props.fieldNames.value] === props.value)

    state.currIndex = index === -1 ? 1 : index + 1
    let move = index === -1 ? 0 : index * +props.optionHeight
    type && api.setChooseValue()
    api.setMove(-move)
  }

export const OptionStyle =
  ({ state }) =>
  (option, column, offset) => {
    const currentIndex = state.currIndex - 1
    return option === column[currentIndex + offset] || option === column[currentIndex - offset]
  }
