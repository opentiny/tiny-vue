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
  afterEnter,
  afterLeave,
  computedAnimationName,
  computedStyle,
  handleConfirm,
  handleCancel,
  watchVisible,
  hide,
  handleClose,
  handleWrapperClick,
  mounted,
  unMounted,
  updatePopper,
  handleDrag,
  showScrollbar,
  hideScrollbar,
  computedBodyStyle
} from './index'
import usePopup from '../common/deps/vue-popup'

export const api = [
  'afterEnter',
  'afterLeave',
  'handleClose',
  'handleWrapperClick',
  'handleCancel',
  'handleConfirm',
  'handleDrag',
  'state'
]

const initState = ({ reactive, computed, api, emitter, props }) => {
  const state = reactive({
    emitter: emitter(),
    key: 0,
    x: null,
    y: null,
    top: null,
    left: null,
    max: null,
    move: false,
    closed: false,
    dragable: null,
    isFull: props.fullscreen,
    style: computed(() => api.computedStyle()),
    bodyStyle: computed(() => api.computedBodyStyle()),
    animationName: computed(() => api.computedAnimationName())
  })

  return state
}

const mergeState = ({ reactive, state, toRefs, usePopups }) => {
  const { bodyPaddingRight, computedBodyPaddingRight, opened, rendered, withoutHiddenClass } = usePopups

  const merge = reactive({
    bodyPaddingRight,
    computedBodyPaddingRight,
    opened,
    rendered,
    withoutHiddenClass,
    ...toRefs(state)
  })

  return merge
}

const initApi = ({
  emit,
  api,
  state,
  parent,
  props,
  lockScrollClass,
  constants,
  usePopups,
  nextTick,
  broadcast,
  vm
}) => {
  const { open, close, doOpen, doClose } = usePopups
  const { doAfterOpen, doAfterClose, restoreBodyStyle } = usePopups
  Object.assign(api, {
    state,
    open,
    close,
    doOpen,
    doClose,
    doAfterOpen,
    doAfterClose,
    restoreBodyStyle,
    broadcast,
    handleCancel: handleCancel({ api, emit }),
    handleConfirm: handleConfirm({ api, emit }),
    updatePopper: updatePopper({ api, constants }),
    handleWrapperClick: handleWrapperClick({ api, props }),
    hide: hide({ api, emit, state, props }),
    handleClose: handleClose({ api, constants, emit, parent, props }),
    watchVisible: watchVisible({
      api,
      constants,
      emit,
      nextTick,
      parent,
      props,
      vm,
      state
    }),
    computedStyle: computedStyle({ state, props }),
    computedBodyStyle: computedBodyStyle({ props }),
    mounted: mounted({ api, parent, props }),
    unMounted: unMounted({ api, parent, props }),
    computedAnimationName: computedAnimationName({ constants, props }),
    afterEnter: afterEnter(emit),
    afterLeave: afterLeave(emit),
    hideScrollbar: hideScrollbar(lockScrollClass),
    showScrollbar: showScrollbar(lockScrollClass),
    handleDrag: handleDrag({ parent, props, state, emit })
  })
}

const initWatch = ({ watch, state, api, props }) => {
  watch(() => props.visible, api.watchVisible)

  watch(
    () => props.fullscreen,
    (value) => {
      state.isFull = value
    }
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onMounted, toRefs, reactive, watch },
  { vm, emitter, parent, emit, constants, nextTick, mode, broadcast }
) => {
  const api = {}
  const lockScrollClass = constants.scrollLockClass(mode)
  let state = initState({ reactive, computed, api, emitter, props })
  const usePopups = usePopup({
    api,
    nextTick,
    onBeforeUnmount,
    onMounted,
    props,
    reactive,
    state,
    toRefs,
    vm,
    watch
  })

  initApi({
    api,
    state,
    parent,
    props,
    emit,
    constants,
    usePopups,
    lockScrollClass,
    nextTick,
    vm,
    broadcast
  })

  state = mergeState({ reactive, state, toRefs, usePopups })

  initWatch({ watch, state, api, props })

  onMounted(api.mounted)
  onBeforeUnmount(api.unMounted)

  return api
}
