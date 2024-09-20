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

import { on, off } from '../common/deps/dom'

// 上拉触发事件超时时间
const PULL_UP_TIME_OUT = 300

export const initPullRefresh =
  ({ t, props, state }) =>
  () => {
    const defaultOption = {
      pullingUpText: t('ui.pullRefresh.pullingUp'),
      pullingDownText: t('ui.pullRefresh.pullingDown'),
      pullUpDisabled: false,
      pullDownDisabled: false,
      headHeight: 48
    }

    state.pullUp = { ...defaultOption, ...props.pullUp }
    state.pullDown = { ...defaultOption, ...props.pullDown }
    state.loosingText = props.loosingText ?? t('ui.pullRefresh.loosing')
    state.successText = props.successText ?? t('ui.pullRefresh.success')
    state.failedText = props.failedText ?? t('ui.pullRefresh.failed')
  }

export const onTouchstart = (state) => (event) => {
  state.draggposition = event.touches[0].clientY
}

export const onTouchmove =
  ({ state, refs }) =>
  (event) => {
    if (event.touches[0].clientY > state.draggposition) {
      pullDownTouchMove(state, refs, event)
    }
  }

export const pullDownTouchMove = (state, refs, event) => {
  if (state.disabledPullDown || state.pullDownLoading) {
    return
  }

  if (refs.content.scrollTop <= 0 && window.scrollY <= 0 && event.cancelable) {
    event.preventDefault()

    state.translate3d = (event.touches[0].clientY - state.draggposition) / 2
    state.pullDownReplaces =
      Math.abs(state.translate3d) > state.pullDown.headHeight ? state.loosingText : state.pullDown.pullingDownText
  }
  state.animationDuration = 0
}

export const onTouchend =
  ({ api, props, state, emit, refs }) =>
  (event) => {
    state.animationDuration = props.animationDuration
    if (event.changedTouches[0].clientY < state.draggposition) {
      // 上拉
      pullUpTouchEnd(state, emit, refs)
    } else {
      // 下拉
      pullDownTouchEnd(api, state, emit)
    }
  }

export const pullDownTouchEnd = (api, state, emit) => {
  if (Math.abs(state.translate3d) < state.pullDown.headHeight) {
    state.pullDownLoading = false
    api.clearPullRefresh()
    return
  }

  state.translate3d = state.pullDown.headHeight
  state.pullDownLoading = true
  emit('update:modelValue', true)
  emit('pullDown')
}

export const pullUpTouchEnd = (state, emit, refs) => {
  clearTimeout(state.timer)

  state.timer = setTimeout(() => {
    const footNode = refs.foot

    if (!state.hasMore || !footNode) {
      return
    }

    const contentNode = refs.content
    const bottomDis = footNode.offsetTop + footNode.clientHeight - contentNode.scrollTop - contentNode.clientHeight
    if (bottomDis <= state.pullUpDistance) {
      state.pullUpLoading = true
      emit('update:modelValue', true)
      emit('pullUp')
    }
  }, PULL_UP_TIME_OUT)
}

export const onScroll =
  ({ state, emit, refs }) =>
  () => {
    pullUpTouchEnd(state, emit, refs)
  }

export const mountedHandler =
  ({ api, refs }) =>
  () => {
    const track = refs.track

    on(track, 'touchstart', api.onTouchstart)
    on(track, 'touchmove', api.onTouchmove)
    on(track, 'touchend', api.onTouchend)
    on(track, 'scroll', api.onScroll)
  }

export const beforeUnmountHandler =
  ({ api, refs }) =>
  () => {
    const track = refs.track

    off(track, 'touchstart', api.onTouchstart)
    off(track, 'touchmove', api.onTouchmove)
    off(track, 'touchend', api.onTouchend)
    off(track, 'scroll', api.onScroll)
  }

export const handlerModelValue =
  ({ api, state }) =>
  (value, result) => {
    state.pullUpLoading = false
    state.pullDownLoading = false

    if (value === 'down') {
      state.pullDownReplaces = state[`${result}Text`]
    } else {
      state.pullUpStateText = state[`${result}Text`]
    }
    setTimeout(() => {
      api.clearPullRefresh()
    }, state.successDuration)
  }

export const clearPullRefresh = (state) => () => {
  state.translate3d = 0
  state.pullDownReplaces = ''
  state.pullDownLoading = false
  state.pullUpLoading = false
}
