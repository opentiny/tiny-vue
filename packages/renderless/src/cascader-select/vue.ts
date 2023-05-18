import {
  init,
  handleTouchstart,
  handleTouchend,
  handleTouchmove,
  watchActionSheetVisible,
  calcSelector,
  close,
  confirm,
  styleOpt,
  statusOpt,
  computedConfirmDisabled,
  parseType
} from './index'
import throttle from '../common/deps/throttle'

export const api = [
  'state',
  'handleTouchstart',
  'handleTouchend',
  'throttledHandleTouchmove',
  'close',
  'confirm',
  'styleOpt',
  'statusOpt'
]

export const renderless = (props, { reactive, computed, onBeforeMount, watch }, { emit, vm }) => {
  const state = reactive({
    actionSheetVisible: false,
    visibleOptionCount: 5,
    selectorCount: 1,
    selector0: {},
    selector1: {},
    selector2: {},
    confirmDisabled: computed(() => api.computedConfirmDisabled())
  })

  const api = {
    state,
    styleOpt,
    statusOpt,
    handleTouchstart: handleTouchstart(state),
    handleTouchend: handleTouchend(state),
    watchActionSheetVisible: watchActionSheetVisible({ emit, state, vm }),
    close: close(state),
    computedConfirmDisabled: computedConfirmDisabled(state),
    parseType: parseType(props)
  }

  Object.assign(api, {
    init: init({ api, props, state }),
    throttledHandleTouchmove: throttle(20, handleTouchmove({ api, props, state })),
    calcSelector: calcSelector(api),
    confirm: confirm({ api, emit, props, state, vm })
  })

  onBeforeMount(() => {
    api.init()
  })

  watch(
    () => props.visible,
    (value) => (state.actionSheetVisible = value)
  )

  watch(
    () => props.modelValue,
    (value) => api.init(value)
  )

  watch(
    () => state.actionSheetVisible,
    (value) => api.watchActionSheetVisible(value)
  )

  return api
}
