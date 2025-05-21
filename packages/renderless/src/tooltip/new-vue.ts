import { handlePopEvent, handleRefEvent, toggleShow } from './new-index'
import { userPopper, useTimer } from '@opentiny/vue-hooks'
import { guid } from '@opentiny/utils'

export const api = ['state', 'handlePopEvent', 'handleRefEvent']

export const renderless = (
  props,
  { watch, toRefs, toRef, reactive, onBeforeUnmount, onDeactivated, onMounted, onUnmounted, inject },
  { vm, emit, slots, nextTick, parent }
) => {
  const api = {} as any
  const popperVmRef = {}
  const { showPopper, updatePopper, popperElm, referenceElm, doDestroy, popperJS } = userPopper({
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

  const state = reactive({
    showPopper,
    popperElm,
    referenceElm,
    tooltipId: guid('tiny-tooltip-', 4),
    showContent: inject('showContent', null),
    tipsMaxWidth: inject('tips-max-width', null)
  })
  state.showPopper = false // 初始为false

  const { start: delayShow, clear: cancelDelayShow } = useTimer(() => api.toggleShow(true), toRef(props, 'openDelay'))
  const { start: delayHide, clear: cancelDelayHide } = useTimer(() => api.toggleShow(false), toRef(props, 'closeDelay'))
  const { start: delayHideAfter } = useTimer(() => api.toggleShow(false), toRef(props, 'hideAfter'))

  Object.assign(api, {
    state,
    delayShow,
    cancelDelayShow,
    delayHide,
    cancelDelayHide,
    delayHideAfter,
    handlePopEvent: handlePopEvent({ props, api }),
    handleRefEvent: handleRefEvent({ props, api }),
    toggleShow: toggleShow({ state, props, emit, api })
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
      state.showPopper = true
    }
  })

  vm.$on('tooltip-update', updatePopper())

  onUnmounted(() => {})

  return api
}
