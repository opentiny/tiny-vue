import { IColorSelectPanelRef as Ref } from '@/types'
import Color from './utils/color'
import { onConfirm, onCancel, onHSVUpdate, onAlphaUpdate } from '.'

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
  'alpha'
]

export const renderless = (props, context, { emit }) => {
  const { modelValue, visible, predefine, size, history } = context.toRefs(props)
  const hex = context.ref(modelValue.value ?? 'transparent')
  const res = context.ref(modelValue.value ?? 'transparent')
  const prev = context.ref(modelValue.value ?? 'transparent')
  const triggerBg = context.ref(modelValue.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const stack: Ref<string[]> = context.ref(
    [...(history?.value ?? [])]
  )
  const predefineStack: Ref<string[]> = context.ref(
    [...(predefine?.value ?? [])]
  )
  const color = new Color(hex.value, props.alpha)
  const state = context.reactive({
    isShow,
    hex,
    color,
    triggerBg,
    defaultValue: modelValue,
    res,
    predefineStack,
    size: size ?? '',
    stack
  })
  context.watch(predefine, (newPredefine: string[]) => {
    predefineStack.value = [...newPredefine];
  }, { deep: true })
  context.watch(history, (newHistory: string[]) => {
    stack.value = [...newHistory]
  }, { deep: true })
  context.watch(modelValue, (newValue) => {
    hex.value = newValue
    res.value = newValue
    triggerBg.value = newValue
    prev.value = newValue;
    color.reset(hex.value)
  })
  context.watch(visible, (visible) => {
    isShow.value = visible
  })

  const { onHueUpdate, onSVUpdate } = onHSVUpdate(color, res, hex, triggerBg)
  const { update } = onAlphaUpdate(color, res, triggerBg)
  const api = {
    state,
    changeVisible,
    onHueUpdate,
    onSVUpdate,
    onConfirm: onConfirm(hex, triggerBg, res, emit, isShow, prev),
    onCancel: onCancel(res, triggerBg, emit, isShow, hex, color, prev),
    onAlphaUpdate: update,
    cursor
  }
  return api
}
