import emulate from '../common/deps/touch-emulator'
import { useRect as _useRect } from '../common/deps/useRect'
import {
  touchStart,
  touchMove,
  touchEnd,
  setCanvasBgColor,
  submit,
  cancel,
  rewrite,
  mounted,
  beforeUnmount,
  setPlaceholder,
  toggleFullscreen,
  initCanvas,
  tranformImage,
  redraw,
  getSignatureImage
} from './index'

emulate()

export const api = [
  'state',
  'touchStart',
  'touchMove',
  'touchEnd',
  'rewrite',
  'submit',
  'toggleFullscreen',
  'initCanvas',
  'cancel',
  'tranformImage',
  'redraw',
  'getSignatureImage'
]

export const renderless = (
  props,
  { unref, reactive, onMounted, onBeforeUnmount, watch, markRaw },
  { emit, vm, nextTick, t, useBreakpoint },
  { Modal }
) => {
  const { current } = useBreakpoint()

  const state = reactive({
    width: 0,
    height: 0,
    ctx: null,
    isBeginWrite: false,
    isFullscreen: false,
    current,
    canvasRect: null,
    isDrawing: false,
    paths: markRaw([]),
    resizeObserver: null,
    value: props.value,
    lastRedrawDate: 0
  })

  watch(
    () => props.value,
    (newValue) => {
      if (newValue) {
        state.value = newValue
      }
    }
  )

  const useRect = _useRect(unref)

  const api = {
    state,
    touchMove: touchMove({ emit, state }),
    touchEnd: touchEnd({ emit, state }),
    setCanvasBgColor: setCanvasBgColor({ props, state }),
    setPlaceholder: setPlaceholder({ props, state }),
    getSignatureImage: getSignatureImage({ props, vm, Modal, t })
  }

  Object.assign(api, {
    touchStart: touchStart({ emit, props, state, vm, api, useRect }),
    rewrite: rewrite({ api, emit, state }),
    mounted: mounted({ state, api, vm, nextTick, markRaw }),
    onBeforeUnmount: beforeUnmount({ state, vm }),
    initCanvas: initCanvas({ props, state, vm }),
    toggleFullscreen: toggleFullscreen({ api, nextTick, state }),
    cancel: cancel({ api, emit }),
    redraw: redraw({ props, state, nextTick }),
    tranformImage: tranformImage({ api, vm, props, nextTick }),
    submit: submit({ emit, api })
  })

  onMounted(() => api.mounted())
  onBeforeUnmount(() => api.onBeforeUnmount())

  return api
}
