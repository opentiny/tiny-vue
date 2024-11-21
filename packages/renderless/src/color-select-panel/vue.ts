import type { IColorSelectPanelProps, ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import { initApi, initState, initWatch } from './index'
import { onMounted } from 'vue'

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
  'onClickOutside'
]

export const renderless = (
  props: IColorSelectPanelProps,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils
) => {
  const state = initState(props, hooks)

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
  } = initApi(props, state, utils)

  const api = {
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
    onClickOutside
  }
  initWatch(state, props, hooks, utils)
  onMounted(() => {
    if (props.modelValue) {
      state.input = state.currentColor
    }
  })
  return api
}
