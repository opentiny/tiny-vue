import { handlePopEvent, handleRefEvent, toggleShow } from './new-index'
import { userPopper, useTimer } from '@opentiny/vue-hooks'
import { guid } from '@opentiny/utils'

export const api = [
  'state',
  'handlePopEvent',
  'handleRefEvent',
  'show',
  'hide',
  'updatePopper',
  'setExpectedState',
  'debounceClose',
  'handleClosePopper'
]

export const renderless = (
  props,
  { ref, watch, toRefs, toRef, reactive, onBeforeUnmount, onDeactivated, onMounted, onUnmounted, inject },
  { vm, emit, slots, nextTick, parent }
) => {
  const api = {} as any
  const popperVmRef = {}
  const { showPopper, updatePopper, popperElm, referenceElm, currentPlacement } = userPopper({
    emit,
    props,
    nextTick,
    toRefs,
    reactive,
    parent: parent.$parent,
    vm,
    slots,
    onBeforeUnmount,
    onDeactivated,
    watch,
    popperVmRef
  } as any)

  showPopper.value = false // 初始为false
  const state = reactive({
    showPopper,
    popperElm,
    referenceElm,
    // 适配以前用法
    currentPlacement,
    tooltipId: guid('tiny-tooltip-', 4),
    showContent: inject('showContent', null),
    tipsMaxWidth: inject('tips-max-width', null)
  })

  const useTimerFn = useTimer({ onUnmounted, ref })
  const toggleShowFn = toggleShow({ state, props, emit, api })
  const { start: delayShow, clear: cancelDelayShow } = useTimerFn(() => toggleShowFn(true), toRef(props, 'openDelay'))
  const { start: delayHide, clear: cancelDelayHide } = useTimerFn(() => toggleShowFn(false), toRef(props, 'closeDelay'))
  const { start: delayHideAfter } = useTimerFn(() => toggleShowFn(false), toRef(props, 'hideAfter'))

  Object.assign(api, {
    state,
    delayShow,
    cancelDelayShow,
    delayHide,
    cancelDelayHide,
    delayHideAfter,
    handlePopEvent: handlePopEvent({ props, api }),
    handleRefEvent: handleRefEvent({ props, api }),
    // 适配以前用法
    show: delayShow,
    hide: delayHide,
    updatePopper,
    setExpectedState: () => {},
    debounceClose: delayHide,
    handleClosePopper: delayHide
  })
  watch(
    () => props.modelValue,
    (val) => {
      if (props.manual) {
        val ? delayShow() : delayHide()
      }
    }
  )
  onMounted(() => {
    state.popperElm = vm.$refs.popperRef
    state.referenceElm = vm.$refs.referenceRef
    // 初始显示
    if (props.manual && props.modelValue) {
      nextTick(() => (state.showPopper = true))
    }
  })

  // 历史遗留
  vm.$on('tooltip-update', (el?: HTMLElement) => {
    if (el) state.popperElm = el
    if (props.modelValue) updatePopper()
  })
  onUnmounted(() => vm.$off('tooltip-update'))

  return api
}
