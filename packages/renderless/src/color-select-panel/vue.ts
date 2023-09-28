import {IColorSelectPanelRef as Ref} from '@/types';
import Color, { normalizeHexColor } from './utils/color'
import { onConfirm, onCancel, onHSVUpdate, onAlphaUpdate, handleHistoryClick } from '.'

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
  'alpha'
]

export const renderless = (
  props,
  context,
  { emit }
) => {
  const { modelValue, visible, history } = context.toRefs(props)
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
    stack
  })
  context.watch(history, (newHistory:string[]) => {
    if (newHistory.length < stack.value.size){
      console.log(newHistory.length ,stack.value.size)
      for (const item of stack.value.values()){
        if (!newHistory.includes(item)){
          stack.value.delete(item);
        }
      }
    } else {
      for(let i=0;i<newHistory.length;i++){
        stack.value.add(newHistory[i]);
      }
    }
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
    onHistoryClick: handleHistoryClick(hex, res, color, triggerBg),
    cursor,
    alpha: props.alpha
  }
  return api
}
