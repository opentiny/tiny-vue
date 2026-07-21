import {
  close,
  closed,
  watchVisible,
  confirm,
  mousedown,
  mouseup,
  mousemove,
  addDragEvent,
  removeDragEvent,
  showScrollbar,
  hideScrollbar,
  handleClose,
  computedWidth,
  computedHeight,
  open,
  keydown,
  addKeydownEvent,
  removeKeydownEvent,
  watchToggle
} from './index'
import type {
  IDrawerProps,
  IDrawerState,
  IDrawerApi,
  IDrawerRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'

export const api = ['state', 'close', 'closed', 'confirm', 'handleClose', 'open']

export const renderless = (
  props: IDrawerProps,
  { reactive, watch, onMounted, onBeforeUnmount, computed }: ISharedRenderlessParamHooks,
  { emit, vm, mode, parent, constants, designConfig }: IDrawerRenderlessParamUtils
) => {
  const lockScrollClass = constants.SCROLL_LOCK_CLASS(mode)

  const api = {} as IDrawerApi
  const state: IDrawerState = reactive({
    toggle: false,
    visible: false,
    width: 0,
    height: 0,
    dragEvent: { x: 0, y: 0, isDrag: false, offsetWidth: 0, offsetHeight: 0 },
    computedWidth: computed(() => api.computedWidth()),
    computedHeight: computed(() => api.computedHeight())
  })

  Object.assign(api, {
    state,
    open: open({ state, emit, vm }),
    confirm: confirm({ api }),
    close: close({ api }),
    closed: closed({ state, emit }),
    handleClose: handleClose({ emit, props, state }),
    mousedown: mousedown({ state, vm }),
    mousemove: mousemove({ state, props, emit }),
    mouseup: mouseup({ state }),
    keydown: keydown({ api, state, props }),
    addKeydownEvent: addKeydownEvent({ api }),
    removeKeydownEvent: removeKeydownEvent({ api }),
    addDragEvent: addDragEvent({ api, vm }),
    removeDragEvent: removeDragEvent({ api, vm }),
    watchVisible: watchVisible({ state, props, parent, api }),
    showScrollbar: showScrollbar(lockScrollClass),
    hideScrollbar: hideScrollbar(lockScrollClass),
    computedWidth: computedWidth({ state, designConfig, props, constants }),
    computedHeight: computedHeight({ state, designConfig, props, constants }),
    watchToggle: watchToggle({ emit })
  })

  onMounted(() => {
    const el = parent.$el
    if (props.appendToBody && el && el.parentNode !== document.body) {
      document.body.appendChild(el)
    }
    props.dragable && api.addDragEvent()
    api.addKeydownEvent()
    if (props.lockScroll && props.visible) {
      api.showScrollbar()
    }
  })

  onBeforeUnmount(() => {
    props.dragable && api.removeDragEvent()
    api.removeKeydownEvent()
    props.lockScroll && api.hideScrollbar()
    const el = parent.$el
    if (props.appendToBody && el && el.parentNode) {
      el.parentNode.removeChild(el)
    }
  })

  watch(() => props.visible, api.watchVisible, { immediate: true })
  watch(
    () => props.width,
    () => (state.width = 0)
  )
  watch(() => state.toggle, api.watchToggle)

  return api
}
