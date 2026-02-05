import type {
  ColorSelectPanelExtends,
  IColorSelectPanelProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'
import { initApi, initState, initWatch, parseCustomRGBA } from './index'
import { userPopper } from '@opentiny/vue-hooks'

export const api = [
  'state',
  'open',
  'close',
  'resetColor',
  'onConfirm',
  'onCancel',
  'submitValue',
  'clear',
  'onHueReady',
  'onSvReady',
  'onAlphaReady',
  'onPredefineColorClick',
  'onHistoryClick',
  'onClickOutside',
  'doDestroy'
]

export const renderless = (
  props: IColorSelectPanelProps,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils,
  ext: ColorSelectPanelExtends
) => {
  const apiObj: any = {}

  // 从父组件color-picker获取实例（使用any类型避免TS类型错误）
  const pickerVm = hooks.inject('pickerVm') as any
  console.log('[color-select-panel] injected pickerVm:', pickerVm)

  // 初始化popper
  const popper = userPopper({
    emit: utils.emit,
    nextTick: utils.nextTick,
    onBeforeUnmount: hooks.onBeforeUnmount,
    onDeactivated: hooks.onDeactivated,
    onMounted: hooks.onMounted,
    props,
    reactive: hooks.reactive,
    vm: utils.vm,
    parent: utils.parent,
    popperVmRef: utils.vm,
    slots: utils.slots,
    toRefs: hooks.toRefs,
    watch: hooks.watch
  })

  const state = initState(props, hooks, utils, ext)

  // 将popper相关状态添加到state（参照select-dropdown的initState）
  const { showPopper, currentPlacement, popperElm, referenceElm } = popper
  Object.assign(state, {
    showPopper,
    currentPlacement,
    popperElm,
    referenceElm
  })

  const {
    open,
    close,
    resetColor,
    onConfirm,
    onCancel,
    submitValue,
    clear,
    onHueReady,
    onSvReady,
    onAlphaReady,
    onPredefineColorClick,
    onHistoryClick,
    onClickOutside
  } = initApi(props, state, utils, hooks, ext)

  Object.assign(apiObj, {
    state,
    open,
    close,
    resetColor,
    onConfirm,
    onCancel,
    submitValue,
    clear,
    onHueReady,
    onSvReady,
    onAlphaReady,
    onPredefineColorClick,
    onHistoryClick,
    onClickOutside,
    doDestroy: popper.doDestroy
  })

  initWatch(state, props, hooks, utils)

  // 关键：watch pickerVm.state.isShow来同步showPopper（参照select-dropdown watch selectVm.state.visible）
  // 并在显示时确保referenceElm已设置
  hooks.watch(
    () => pickerVm?.state?.isShow,
    (val) => {
      console.log('[color-select-panel] pickerVm.state.isShow changed to:', val)

      if (val && pickerVm?.$refs?.reference) {
        console.log('[color-select-panel] updating referenceElm:', pickerVm.$refs.reference)
        // 直接更新popper的ref，确保userPopper内部状态同步
        popper.referenceElm.value = pickerVm.$refs.reference
        state.referenceElm = pickerVm.$refs.reference
      }

      // 同步visible状态
      state.showPicker = val
      // 同步showPopper以触发userPopper
      state.showPopper = val
      console.log('[color-select-panel] set showPopper to:', val)
    }
  )

  hooks.onMounted(() => {
    // 确保popperElm被正确初始化
    if (!popper.popperElm.value) {
      const el = utils.vm.$refs.popper || utils.vm.$el
      console.log('[color-select-panel] manually initializing popperElm:', el)
      popper.popperElm.value = el
    }
  })

  // 设置referenceElm（参照select-dropdown）
  hooks.watch(
    () => pickerVm,
    () => {
      utils.nextTick(() => {
        state.referenceElm = pickerVm.$refs.reference
      })
    },
    { immediate: true }
  )

  hooks.onMounted(() => {
    if (props.modelValue) {
      state.input = state.currentColor
      const result = parseCustomRGBA(state.currentColor, state.currentFormat) || [0, 0, 0, 0]
      state.hexInput4 = Math.ceil(Number(result[0]))
      state.hexInput5 = result[1]
      state.hexInput6 = result[2]
      state.hexInput7 = `${(Number(result[3]) || 1) * 100}%`
    }
  })

  hooks.onBeforeUnmount(() => {
    popper.destroyPopper('remove')
    state.popperElm = null
    state.referenceElm = null
  })

  return apiObj
}
