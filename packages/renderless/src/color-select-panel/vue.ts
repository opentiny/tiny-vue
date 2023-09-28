import {IColorSelectPanelRef as Ref} from '@/types';
import Color, { normalizeHexColor } from './utils/color'
import { onConfirm, onCancel, onHSVUpdate, onAlphaUpdate, handleHistoryClick, handlePredefineClick, diff } from '.'

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
  const stack:Ref<Set<string>> = context.ref(
    new Set(
      history?.value ?? []
    )
  )
  const predefineStack: Ref<Set<string>> = context.ref(
    new Set(
      predefine?.value ?? []
    )
  )
  const enableHistory:Ref<boolean> = context.ref(history?.value);
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
    predefineStack
  })
  context.watch(predefine, (newPredefine: string[])=>{
    diff(newPredefine, predefineStack.value)
    .map(({fn, arg}) => {
      predefineStack.value[fn](arg)
    });
  }, {deep: true})
  context.watch(history, (newHistory:string[]) => {
    diff(newHistory, stack.value)
    .map(({fn, arg}) => {
      stack.value[fn](arg)
    });
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
    onConfirm: onConfirm(hex, triggerBg, res, emit, stack, enableHistory.value),
    onCancel: onCancel(res, triggerBg, emit, isShow, hex, color),
    onAlphaUpdate: update,
    onHistoryClick: handleHistoryClick(hex, res, color),
    onPredefineColorClick: handlePredefineClick(hex,res,color),
    cursor,
    alpha: props.alpha
  }
  return api
}
