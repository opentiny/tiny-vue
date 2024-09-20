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

import {
  mountedHandler,
  beforeUnmountHandler,
  handlerModelValue,
  onTouchstart,
  onTouchmove,
  onTouchend,
  onScroll,
  initPullRefresh,
  clearPullRefresh
} from './index'

export const api = ['state']

export const renderless = (props, { watch, onMounted, reactive, onBeforeUnmount }, { t, refs, emit, nextTick }) => {
  const api = {}
  const state = reactive({
    pullDownReplaces: '',
    refreshStyle: {},
    translate3d: 0,
    draggposition: 0,
    pullUpLoading: false,
    pullDownLoading: false,
    loosingText: '',
    successText: '',
    failedText: '',
    noMoreText: t('ui.pullRefresh.noMore'),
    pullUpLoadingText: props.pullUpLoadingText,
    pullDownLoadingText: props.pullDownLoadingText,
    pullUp: null,
    pullDown: null,
    hasMore: true,
    successDuration: props.successDuration,
    animationDuration: props.animationDuration,
    disabledPullDown: props.disabledPullDown,
    disabledPullUp: props.disabledPullUp,
    pullUpDistance: typeof props.pullUpDistance === 'string' ? Number(props.pullUpDistance) : props.pullUpDistance,
    timer: null
  })

  Object.assign(api, {
    state,
    onTouchstart: onTouchstart(state),
    onTouchmove: onTouchmove({ state, refs }),
    onTouchend: onTouchend({ api, props, state, emit, refs }),
    onScroll: onScroll({ state, emit, refs }),
    mountedHandler: mountedHandler({ api, refs }),
    beforeUnmountHandler: beforeUnmountHandler({ api, refs }),
    handlerModelValue: handlerModelValue({ api, state }),
    initPullRefresh: initPullRefresh({ t, props, state }),
    clearPullRefresh: clearPullRefresh(state)
  })

  watch(
    () => props.hasMore,
    (value: boolean) => {
      state.hasMore = value
    },
    { immediate: true }
  )

  watch(
    () => props.modelValue,
    (value) => {
      if (!value) {
        api.clearPullRefresh()
      }
    }
  )

  onMounted(() => {
    api.mountedHandler({ api, refs, state })
    api.initPullRefresh({ t, props, state })
  })
  onBeforeUnmount(api.beforeUnmountHandler)

  return api
}
