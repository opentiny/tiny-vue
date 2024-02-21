import type { IColorSelectPanelRef as Ref } from '@/types'
import Color from './utils/color'
import { onConfirm, onCancel, onHueUpdate, onSVUpdate, onColorUpdate } from './index'

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
  const pre = context.ref(modelValue.value ?? 'transparent')
  const triggerBg = context.ref(pre.value ?? 'transparent')
  const tmpColor = new Color(triggerBg.value ?? 'transparent')
  const hex = context.ref(modelValue.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const stack: Ref<string[]> = context.ref([...(history?.value ?? [])])
  const predefineStack: Ref<string[]> = context.ref([...(predefine?.value ?? [])])
  const state = context.reactive({
    isShow,
    hex,
    triggerBg,
    defaultValue: modelValue,
    stack,
    predefineStack,
    size: size ?? ''
  })
  const api = {
    state,
    changeVisible,
    onCancel: onCancel(tmpColor, triggerBg, isShow, pre, emit),
    onConfirm: onConfirm(triggerBg, pre, hex, isShow, emit),
    onHueUpdate: onHueUpdate(tmpColor, triggerBg),
    onSVUpdate: onSVUpdate(tmpColor, triggerBg),
    onColorUpdate: onColorUpdate(triggerBg)
  }
  context.watch(
    predefine,
    (newPredefine: string[]) => {
      predefineStack.value = [...newPredefine]
    },
    { deep: true }
  )
  context.watch(
    history,
    (newHistory: string[]) => {
      stack.value = [...newHistory]
    },
    { deep: true }
  )
  context.watch(modelValue, (newValue) => {
    pre.value = newValue
    hex.value = newValue
    state.hex = newValue
    state.triggerBg = newValue
  })
  context.watch(visible, (visible) => {
    isShow.value = visible
  })
  return api
}
