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

export const initPullRefresh = ({ t, props, state }) => () => {
  const defaultOption = {
    pullingUpText: t('ui.pullRefresh.pullingUp'),
    pullingDownText: t('ui.pullRefresh.pullingDown'),
    pullUpDisabled: false,
    pullDownDisabled: false,
    headHeight: 50,
    footHeight: 50
  }

  state.pullUp = { ...defaultOption, ...props.pullUp }
  state.pullDown = { ...defaultOption, ...props.pullDown }
  state.refreshStyle = {
    paddingTop: state.pullDown.headHeight + 'px',
    paddingBottom: state.pullUp.footHeight + 'px'
  }
  state.loosingText = props.loosingText ?? t('ui.pullRefresh.loosing')
  state.successText = props.successText ?? t('ui.pullRefresh.success')
  state.failedText = props.failedText ?? t('ui.pullRefresh.failed')
}

export const onTouchstart = (state) => (event) => {
  state.draggposition = event.touches[0].clientY
}

export const onTouchmove = ({ props, state }) => (event) => {
  if (event.touches[0].clientY < state.draggposition) {
    // 上拉刷新
    if (!state.pullUp.pullUpDisabled) {
      // 没有更多了
      if (props.hasMore) {
        state.translate3d = (event.touches[0].clientY - state.draggposition) / 2
        state.pullUpReplaces = Math.abs(state.translate3d) > state.pullUp.footHeight ? state.loosingText : state.pullUp.pullingUpText
        state.pullDownReplaces = ''
      }
    }
  } else {
    // 下拉刷新
    if (!state.pullDown.pullDownDisabled) {
      state.translate3d = (event.touches[0].clientY - state.draggposition) / 2
      state.pullDownReplaces = Math.abs(state.translate3d) > state.pullDown.headHeight ? state.loosingText : state.pullDown.pullingDownText
      state.pullUpReplaces = ''
    }
  }

  state.animationDuration = 0
  state.pullUpLoading = false
  state.pullDownLoading = false
}

export const onTouchend = ({ api, props, state }) => () => {
  state.animationDuration = props.animationDuration

  // 上拉/下拉超过指定的高度触发刷新
  if (Math.abs(state.translate3d) >= state.pullDown.headHeight || Math.abs(state.translate3d) >= state.pullUp.footHeight) {
    if (state.translate3d >= 0) {
      // 下拉刷新
      state.translate3d = state.pullDown.headHeight
      const { handler } = state.pullDown
      const pullDownPromise = handler && handler()
      state.pullDownLoading = true
      if (pullDownPromise?.then) {
        pullDownPromise.then(
          () => {
            api.handlerModelValue('down', 'success')
          },
          (e) => {
            console.log(e)
            api.handlerModelValue('down', 'failed')
          }
        )
        return
      }
      console.error(new Error('handler down is not promise'))
    } else {
      // 上拉刷新
      state.translate3d = -state.pullUp.footHeight
      const { handler } = state.pullUp
      const pullUpPromise = handler && handler()
      state.pullUpLoading = true

      if (pullUpPromise?.then) {
        pullUpPromise.then(
          () => {
            api.handlerModelValue('up', 'success')
          },
          (e) => {
            console.log(e)
            api.handlerModelValue('up', 'failed')
          }
        )
        return
      }
      console.error(new Error('handler up is not promise'))
    }
    api.clearPullRefresh()
  } else {
    // 上拉/下拉未超过指定的高度，不触发刷新，回弹
    state.pullUpLoading = false
    state.pullDownLoading = false
    api.clearPullRefresh()
  }
}

export const mountedHandler = ({ api, refs }) => () => {
  const track = refs.track

  on(track, 'touchstart', api.onTouchstart)
  on(track, 'touchmove', api.onTouchmove)
  on(track, 'touchend', api.onTouchend)
}

export const beforeUnmountHandler = ({ api, refs }) => () => {
  const track = refs.track

  off(track, 'touchstart', api.onTouchstart)
  off(track, 'touchmove', api.onTouchmove)
  off(track, 'touchend', api.onTouchend)
}

export const handlerModelValue = ({ api, state }) => (value, result) => {
  state.pullUpLoading = false
  state.pullDownLoading = false

  if (value === 'down') {
    state.pullDownReplaces = state[`${result}Text`]
  } else {
    state.pullUpReplaces = state[`${result}Text`]
  }
  setTimeout(() => {
    api.clearPullRefresh()
  }, state.successDuration)
}

export const clearPullRefresh = (state) => () => {
  state.translate3d = 0
  state.pullUpReplaces = ''
  state.pullDownReplaces = ''
}
