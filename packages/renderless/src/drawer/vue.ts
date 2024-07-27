import {
  close,
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
  open
} from './index'
import type {
  IDrawerProps,
  IDrawerState,
  IDrawerApi,
  IDrawerRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@/types'

export const api = ['state', 'close', 'confirm', 'handleClose', 'open']

export const renderless = (
  props: IDrawerProps,
  { reactive, watch, onMounted, onBeforeUnmount, computed }: ISharedRenderlessParamHooks,
  { emit, vm, mode, constants, designConfig }: IDrawerRenderlessParamUtils
) => {
  const lockScrollClass = constants.SCROLL_LOCK_CLASS(mode)

  const api = {} as IDrawerApi
  const state: IDrawerState = reactive({
    visible: false,
    width: 0,
    height: 0,
    dragEvent: { x: 0, y: 0, isDrag: false, offsetWidth: 0, offsetHeight: 0 },
    computedWidth: computed(() => api.computedWidth()),
    btnOrderReversed: vm.theme === 'saas' || designConfig?.state?.btnOrderReversed
  })

  Object.assign(api, {
    state,
    open: open({ state, emit, vm }),
    confirm: confirm({ api }),
    close: close({ api }),
    handleClose: handleClose({ emit, props, state }),
    mousedown: mousedown({ state, vm }),
    mousemove: mousemove({ state, props }),
    mouseup: mouseup({ state }),
    addDragEvent: addDragEvent({ api: api as IDrawerApi, vm }),
    removeDragEvent: removeDragEvent({ api: api as IDrawerApi, vm }),
    watchVisible: watchVisible({ state, api }),
    showScrollbar: showScrollbar(lockScrollClass),
    hideScrollbar: hideScrollbar(lockScrollClass),
    computedWidth: computedWidth({ state, designConfig, props, constants })
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
  watch(
    () => props.width,
    () => (state.width = 0)
  )

  return api
}
