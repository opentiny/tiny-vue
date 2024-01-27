import {
  close,
  watchVisible,
  watchToggle,
  confirm,
  mousedown,
  mouseup,
  mousemove,
  addDragEvent,
  removeDragEvent,
  showScrollbar,
  hideScrollbar,
  watchVisibleNotImmediate
} from './index'
import type {
  IDrawerProps,
  IDrawerState,
  IDrawerApi,
  ISharedRenderlessParamUtils,
  ISharedRenderlessFunctionParams,
  IDrawerCT
} from '@/types'

export const api = ['state', 'close', 'confirm']

export const renderless = (
  props: IDrawerProps,
  { reactive, watch, onMounted, onBeforeUnmount, computed }: ISharedRenderlessFunctionParams<null>,
  { emit, vm, mode, constants }: ISharedRenderlessParamUtils<IDrawerCT>
) => {
  const lockScrollClass = constants.SCROLL_LOCK_CLASS(mode)

  const api: Partial<IDrawerApi> = {}
  const state = reactive<IDrawerState>({
    toggle: false,
    width: 0,
    dragEvent: { x: 0, isDrag: false, offsetWidth: 0 },
    computedWidth: computed(() => (state.width ? state.width + 'px' : props.width))
  })

  Object.assign(api, {
    state,
    confirm: confirm({ state, emit }),
    close: close({ emit, state }),
    mousedown: mousedown({ state, vm }),
    mousemove: mousemove({ state, props }),
    mouseup: mouseup({ state }),
    addDragEvent: addDragEvent({ api: api as IDrawerApi, vm }),
    removeDragEvent: removeDragEvent({ api: api as IDrawerApi, vm }),
    watchVisible: watchVisible({ state }),
    watchToggle: watchToggle({ emit }),
    showScrollbar: showScrollbar(lockScrollClass),
    hideScrollbar: hideScrollbar(lockScrollClass),
    watchVisibleNotImmediate: watchVisibleNotImmediate({ api: api as IDrawerApi, props })
  })

  onMounted(() => {
    props.dragable && (api as IDrawerApi).addDragEvent()
    if (props.lockScroll && props.visible) {
      ;(api as IDrawerApi).showScrollbar()
    }
  })

  onBeforeUnmount(() => {
    props.dragable && (api as IDrawerApi).removeDragEvent()
    props.lockScroll && (api as IDrawerApi).hideScrollbar()
  })

  watch(() => props.visible, (api as IDrawerApi).watchVisible, { immediate: true })
  watch(() => state.toggle, (api as IDrawerApi).watchToggle)
  watch(
    () => props.width,
    () => (state.width = 0)
  )

  return api
}
