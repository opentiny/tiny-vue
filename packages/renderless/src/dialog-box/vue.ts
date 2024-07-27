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
  useMouseEventDown,
  useMouseEventUp,
  mounted,
  unMounted,
  updatePopper,
  handleDrag,
  showScrollbar,
  hideScrollbar,
  toggleFullScreen
} from './index'
import usePopup from '../common/deps/vue-popup'
import type {
  IDialogBoxApi,
  IDialogBoxProps,
  IDialogBoxRenderlessParamUtils,
  IDialogBoxRenderlessParams,
  IDialogBoxState,
  IDialogBoxMergeStateParam,
  ISharedRenderlessParamHooks,
  IDialogBoxInitApiParam,
  IDialogBoxInitWatchParam
} from '@/types'

export const api = [
  'afterEnter',
  'afterLeave',
  'handleClose',
  'handleWrapperClick',
  'useMouseEventDown',
  'useMouseEventUp',
  'handleCancel',
  'handleConfirm',
  'handleDrag',
  'toggleFullScreen',
  'state'
]

const initState = ({
  reactive,
  computed,
  api,
  emitter,
  props,
  useBreakpoint
}: Pick<IDialogBoxRenderlessParams, 'reactive' | 'computed' | 'api' | 'emitter' | 'props'>): IDialogBoxState => {
  const { current } = useBreakpoint()
  const state: IDialogBoxState = reactive({
    emitter: emitter(),
    key: 0,
    x: null,
    y: null,
    top: null,
    left: null,
    max: null,
    move: false,
    closed: false,
    dragable: false,
    isFull: props.fullscreen,
    style: computed(() => api.computedStyle()),
    animationName: computed(() => api.computedAnimationName()),
    current,
    dragStyle: null
  })

  return state
}

const mergeState = ({ reactive, state, toRefs, usePopups }: IDialogBoxMergeStateParam): IDialogBoxState => {
  // 由于 usePopups返回的值已经是 toRefs过了，所以这里可以直接解构
  const { opened, rendered } = usePopups

  const merge = reactive({
    opened,
    rendered,
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
  designConfig,
  vm
}: IDialogBoxInitApiParam): void => {
  const { open, close } = usePopups
  Object.assign(api, {
    state,
    open,
    close,
    broadcast,
    handleCancel: handleCancel({ api, emit }),
    handleConfirm: handleConfirm({ api, emit }),
    updatePopper: updatePopper({ api, constants }),
    handleWrapperClick: handleWrapperClick({ api, props, state }),
    useMouseEventDown: useMouseEventDown({ state }),
    useMouseEventUp: useMouseEventUp({ state }),
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
    computedStyle: computedStyle({ state, props, designConfig }),
    mounted: mounted({ api, parent, props }),
    unMounted: unMounted({ api, parent, props }),
    computedAnimationName: computedAnimationName({ constants, props }),
    afterEnter: afterEnter(emit),
    afterLeave: afterLeave(emit),
    hideScrollbar: hideScrollbar(lockScrollClass),
    showScrollbar: showScrollbar(lockScrollClass),
    handleDrag: handleDrag({ parent, props, state, emit, vm }),
    // tiny 新增
    toggleFullScreen: toggleFullScreen({ state, emit, nextTick, vm })
  })
}

const initWatch = ({ watch, state, api, props }: IDialogBoxInitWatchParam) => {
  watch(() => props.visible, api.watchVisible)

  watch(
    () => props.fullscreen,
    (value: boolean) => {
      state.isFull = value
    }
  )
}

export const renderless = (
  props: IDialogBoxProps,
  { computed, onBeforeUnmount, onMounted, toRefs, reactive, watch }: ISharedRenderlessParamHooks,
  {
    vm,
    emitter,
    parent,
    emit,
    constants,
    nextTick,
    mode,
    broadcast,
    designConfig,
    useBreakpoint
  }: IDialogBoxRenderlessParamUtils
): IDialogBoxApi => {
  const api = {} as IDialogBoxApi
  const lockScrollClass = constants.SCROLL_LOCK_CLASS(mode)
  let state = initState({ reactive, computed, api, emitter, props, useBreakpoint })
  const usePopups = usePopup({
    api,
    nextTick,
    onBeforeUnmount,
    onMounted,
    props,
    reactive,
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
    broadcast,
    designConfig
  })

  state = mergeState({ reactive, state, toRefs, usePopups })

  initWatch({ watch, state, api, props })

  onMounted(api.mounted)
  onBeforeUnmount(api.unMounted)

  return api
}
