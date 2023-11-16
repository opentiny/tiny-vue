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

import { on, off, getScrollTop, preventDefault } from '../common/deps/dom'

export const onTouchstart =
  ({ state }) =>
  (event) => {
    state.draggposition = event.touches[0].clientY
  }

export const onTouchmove =
  ({ vm, state }) =>
  (event) => {
    if (!state.disabled) {
      if (event.touches[0].clientY < state.draggposition || vm.$refs.track.parentNode.scrollTop > 10) {
        return
      }

      state.replaces = state.pullingText
      state.animationDuration = 0
      state.translate3d = (event.touches[0].clientY - state.draggposition) / 2
      state.styleObj = {
        'transition-duration': '0ms',
        transform: 'translate3d(0px,' + state.translate3d + 'px,0px)'
      }
      state.checkStatus = false

      if (state.translate3d > state.headHeight) {
        state.replaces = state.loosingText
      } else {
        state.replaces = state.pullingText
      }
    }
  }

export const onTouchend =
  ({ emit, props, state }) =>
  () => {
    state.animationDuration = props.animationDuration

    if (state.translate3d >= state.headHeight) {
      state.translate3d = state.headHeight
      state.checkStatus = true
      state.styleObj = {
        'transition-duration': state.animationDuration + 'ms',
        transform: 'translate3d(0px,' + state.translate3d + 'px,0px)'
      }

      emit('update:modelValue', true)
      emit('refresh')
    } else {
      state.styleObj = {
        'transition-duration': state.animationDuration + 'ms'
      }
      state.translate3d = 0
      state.checkStatus = false
      state.replaces = ''
    }
  }

export const mountedHandler =
  ({ api, vm, state }) =>
  () => {
    state.styleObj = { 'transition-duration': state.animationDuration + 'ms' }

    const track = vm.$refs.track

    on(track, 'touchstart', api.onTouchstart)
    on(track, 'touchmove', api.onTouchmove)
    on(track, 'touchend', api.onTouchend)
  }

export const beforeUnmountHandler =
  ({ api, vm }) =>
  () => {
    const track = vm.$refs.track

    off(track, 'touchstart', api.onTouchstart)
    off(track, 'touchmove', api.onTouchmove)
    off(track, 'touchend', api.onTouchend)
  }

export const watchModelValue = ({ value, state }) => {
  if (!value) {
    if (state.successText) {
      state.checkStatus = false
      state.replaces = state.successText

      setTimeout(() => {
        state.translate3d = 0
        state.styleObj = {
          'transition-duration': state.animationDuration + 'ms'
        }
        state.replaces = ''
      }, state.successDuration)
    } else {
      state.translate3d = 0
      state.checkStatus = false
      state.replaces = ''
      state.styleObj = {
        'transition-duration': state.animationDuration + 'ms'
      }
    }
  }
}

export const isTouchable =
  ({ props, state, constants }) =>
  () =>
    ![constants.STATUS.LOADING, constants.STATUS.SUCCESS].includes(state.status) && !props.disabled

export const ease =
  ({ state, props }) =>
  (distance) => {
    const pullDistance = +(props.pullDistance || state.headHeight)

    if (distance > pullDistance) {
      if (distance < pullDistance * 2) {
        distance = pullDistance + (distance - pullDistance) / 2
      } else {
        distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4
      }
    }

    return Math.round(distance)
  }

export const setStatus =
  ({ emit, props, state, constants }) =>
  (distance, isLoading) => {
    const pullDistance = +(props.pullDistance || state.headHeight)
    state.distance = distance

    if (isLoading) {
      state.status = constants.STATUS.LOADING
    } else if (distance === 0) {
      state.status = constants.STATUS.NORMAL
    } else if (distance < pullDistance) {
      state.status = constants.STATUS.PULLING
    } else {
      state.status = constants.STATUS.LOOSING
    }

    emit('change', { status: state.status, distance })
  }

export const getStatusText =
  ({ props, state, t, constants }) =>
  () => {
    const { status } = state

    if (status === constants.STATUS.NORMAL) return ''

    return props[`${status}Text`] || t(status)
  }

export const showSuccessTip =
  ({ api, props, state, constants }) =>
  () => {
    state.status = constants.STATUS.SUCCESS

    setTimeout(() => api.setStatus(0), +props.successDuration)
  }

export const checkPosition =
  ({ state, touchState }) =>
  (event) => {
    state.reachTop = getScrollTop(state.scrollParent) === 0

    if (state.reachTop) {
      state.duration = 0
      touchState.start(event)
    }
  }

export const onTouchStart = (api) => (event) => {
  if (!api.checkSelfSimulate(event)) return

  if (api.isTouchable()) {
    api.checkPosition(event)
  }
}

export const onTouchMove =
  ({ api, state, touchState }) =>
  (event) => {
    if (!api.checkSelfSimulate(event)) return

    if (api.isTouchable()) {
      if (!state.reachTop) {
        api.checkPosition(event)
      }

      const { deltaY } = touchState
      touchState.move(event)

      if (state.reachTop && deltaY.value >= 0 && touchState.isVertical()) {
        preventDefault(event)
        api.setStatus(api.ease(deltaY.value))
      }
    }
  }

export const onTouchEnd =
  ({ api, emit, nextTick, state, props, touchState, constants }) =>
  (event) => {
    if (!api.checkSelfSimulate(event)) return

    if (state.reachTop && touchState.deltaY.value && api.isTouchable()) {
      state.duration = +props.animationDuration

      if (state.status === constants.STATUS.LOOSING) {
        api.setStatus(+state.headHeight, true)
        emit('update:modelValue', true)

        // ensure value change can be watched
        nextTick(() => emit('refresh'))
      } else {
        api.setStatus(0)
      }
    }
  }

export const watchModelValueChange =
  ({ api, slots, state, props }) =>
  (value) => {
    state.duration = +props.animationDuration

    if (value) {
      api.setStatus(+state.headHeight, true)
    } else if (slots.success || props.successText) {
      api.showSuccessTip()
    } else {
      api.setStatus(0, false)
    }
  }

export const watchStatusChange =
  ({ api, state, props, Loading, vm, constants, slots }) =>
  (value, oldValue) => {
    const headEl = vm.$refs.head && vm.$refs.head.$el

    if (headEl && !slots[constants.STATUS.LOADING]) {
      const { LOADING } = constants.STATUS
      const enterLoading = value === LOADING && oldValue !== LOADING
      const exitLoading = value !== LOADING && oldValue === LOADING
      const defLoadingOptions = { 'tiny_mode': props['tiny_mode'], target: headEl, text: api.getStatusText() }

      if (props.loadingOptions) {
        if (props.loadingOptions.enterLoading) {
          if (enterLoading) {
            props.loadingOptions.enterLoading({ ...defLoadingOptions, component: Loading })
          }

          if (exitLoading && props.loadingOptions.exitLoading) {
            props.loadingOptions.exitLoading()
          }
        } else {
          if (enterLoading) {
            if (props.loadingOptions.customClass) defLoadingOptions.customClass = props.loadingOptions.customClass
            if (props.loadingOptions.spinner) defLoadingOptions.spinner = props.loadingOptions.spinner

            state.$loadingInstance = Loading.service(defLoadingOptions)
          }

          if (exitLoading) {
            state.$loadingInstance.close()
          }
        }
      }
    }
  }

export const parseHeaderHeight =
  ({ state, props, constants }) =>
  () => {
    const { headHeight } = props
    const heightRE = /^(\d+)(px|rem)$/
    let stateHeadHeight

    if ((typeof headHeight === 'number' && (headHeight <= 0 || Object.is(headHeight, NaN))) || headHeight === '') {
      stateHeadHeight = constants.DEFAULT_HEAD_HEIGHT
    } else if (typeof headHeight === 'string' && heightRE.test(headHeight)) {
      const matches = heightRE.exec(headHeight)

      if (matches[2] === 'px') {
        stateHeadHeight = Number(matches[1])
      } else if (matches[2] === 'rem') {
        stateHeadHeight = Number(matches[1]) * 16
      }
    } else {
      stateHeadHeight = Number(headHeight)
    }

    state.headHeight = stateHeadHeight
    state.headerHeight = `${stateHeadHeight}px`
  }

export const checkSelfSimulate =
  ({ state, props }) =>
  (event) =>
    props.selfSimulate && event && event.isTinySimulate ? state.scrollTrack && state.scrollTrack === event.target : true
