import type { IColorSelectPanelRef as Ref } from '@/types'
import Color from './utils/color'
import { onConfirm, onCancel, onHSVUpdate, onAlphaUpdate, handleHistoryClick, handlePredefineClick } from '.'

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
  'onPredefineColorClick'
]

export const renderless = (props, context, { emit }) => {
  const { modelValue, visible, history, predefine } = context.toRefs(props)
  const hex = context.ref(modelValue?.value ?? 'transparent')
  const res = context.ref(modelValue?.value ?? 'transparent')
  const pre = context.ref(res.value)
  const triggerBg = context.ref(modelValue?.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const stack: Ref<string[]> = context.ref([...(history?.value ?? [])])
  const predefineStack: Ref<string[]> = context.ref([...(predefine?.value ?? [])])
  const enableHistory = history?.value
  const enablePredefineColor = predefine?.value
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const color: Ref<Color> = context.ref(new Color(hex.value, props.alpha))
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
    pre.value = res.value
    hex.value = newValue
    res.value = newValue
    color.value.reset(newValue)
    state.color.reset(newValue)
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
    onConfirm: onConfirm(hex, pre, res, emit, stack, enableHistory, color),
    onCancel: onCancel(res, pre, emit, isShow, hex, color),
    onAlphaUpdate: update,
    onHistoryClick: handleHistoryClick(hex, res, color, emit),
    onPredefineColorClick: handlePredefineClick(hex, res, color, emit),
    cursor
  }
  return api
}
