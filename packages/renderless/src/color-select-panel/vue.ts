import {IColorSelectPanelRef as Ref} from '@/types';
import Color from './utils/color'
import {
  onConfirm,
  onCancel,
  onHSVUpdate,
  onAlphaUpdate,
  handleHistoryClick,
  handlePredefineClick,
} from '.'

export const api = [
  'state',
  'changeVisible',
  'cursor',
  'onColorUpdate',
  'onHueUpdate',
  'onSVUpdate',
  'onConfirm',
  'onCancel',
  'onAlphaUpdate',
  'onHistoryClick',
  'onPredefineColorClick',
  'alpha'
]

export const renderless = (
  props,
  context,
  { emit }
) => {
  const { modelValue, visible, history, predefine } = context.toRefs(props)
  const hex = context.ref(modelValue?.value ?? 'transparent')
  const res = context.ref(modelValue?.value ?? 'transparent')
  const triggerBg = context.ref(modelValue?.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const stack:Ref<string[]> = context.ref(
    [...(history?.value ?? [])]
  )
  const predefineStack: Ref<string[]> = context.ref(
    [...(predefine?.value ?? [])]
  )
  const enableHistory = history?.value;
  const enablePredefineColor = predefine?.value;
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const color = new Color(hex.value, props.alpha)
  const state = context.reactive({
    isShow,
    hex,
    color,
    triggerBg,
    defaultValue: modelValue,
    res,
    stack,
    predefineStack,
    enableHistory,
    enablePredefineColor
  })
  context.watch(predefine, (newPredefine: string[])=>{
    predefineStack.value = [...newPredefine];
  }, {deep: true})
  context.watch(history, (newHistory:string[]) => {
    stack.value = [...newHistory]
  }, {deep: true})
  context.watch(modelValue, (newValue) => {
    hex.value = newValue
    res.value = newValue
    triggerBg.value = newValue
    color.reset(hex.value)
  })
  context.watch(visible, (visible) => {
    isShow.value = visible
  })
  const { onHueUpdate, onSVUpdate } = onHSVUpdate(color, res, hex, emit)
  const { update } = onAlphaUpdate(color, res)
  const api = {
    state,
    changeVisible,
    onHueUpdate,
    onSVUpdate,
    onConfirm: onConfirm(hex, triggerBg, res, emit, stack, enableHistory),
    onCancel: onCancel(res, triggerBg, emit, isShow, hex, color),
    onAlphaUpdate: update,
    onHistoryClick: handleHistoryClick(hex, res, color),
    onPredefineColorClick: handlePredefineClick(hex,res,color),
    cursor,
    alpha: props.alpha
  }
  return api
}
