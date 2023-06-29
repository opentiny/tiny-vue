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

export const api = ['state', 'close', 'confirm']

export const renderless = (props, { reactive, watch, onMounted, onBeforeUnmount, computed }, { emit, vm, mode, constants }) => {
  const lockScrollClass = constants.SCROLL_LOCK_CLASS(mode)

  const api = {}
  const state = reactive({
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
    addDragEvent: addDragEvent({ api, vm }),
    removeDragEvent: removeDragEvent({ api, vm }),
    watchVisible: watchVisible({ state }),
    watchToggle: watchToggle({ emit }),
    showScrollbar: showScrollbar(lockScrollClass),
    hideScrollbar: hideScrollbar(lockScrollClass),
    watchVisibleNotImmediate: watchVisibleNotImmediate({ api, props })
  })

  onMounted(() => {
    props.dragable && api.addDragEvent()
    if (props.lockScroll && props.visible) {
      api.showScrollbar()
    }
  })

  onBeforeUnmount(() => {
    props.dragable && api.removeDragEvent()
    props.lockScroll && api.hideScrollbar()
  })

  watch(() => props.visible, api.watchVisible, { immediate: true })
  watch(() => state.toggle, api.watchToggle)
  watch(
    () => props.width,
    () => (state.width = 0)
  )

  return api
}
