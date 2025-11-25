import type {
  ColorSelectPanelExtends,
  IColorSelectPanelProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'
import { initApi, initState, initWatch, parseCustomRGBA } from './index'

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
  utils: ISharedRenderlessParamUtils,
  ext: ColorSelectPanelExtends
) => {
  const state = initState(props, hooks, utils, ext)
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
  return api
}
