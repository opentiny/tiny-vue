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
  const { modelValue, visible } = context.toRefs(props)
  const hex = context.ref(modelValue.value ?? 'transparent')
  const res = context.ref(modelValue.value ?? 'transparent')
  const triggerBg = context.ref(modelValue.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
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
    res
  })
  context.watch(modelValue, (newValue) => {
    hex.value = newValue
    res.value = newValue
    triggerBg.value = newValue
    color.reset(hex.value)
  })
  context.watch(visible, (visible) => {
    isShow.value = visible
  })

  const { onHueUpdate, onSVUpdate } = onHSVUpdate(color, res, hex)
  const { update } = onAlphaUpdate(color, res)
  const api = {
    state,
    changeVisible,
    onHueUpdate,
    onSVUpdate,
    onConfirm: onConfirm(hex, triggerBg, res, emit, isShow),
    onCancel: onCancel(res, triggerBg, emit, isShow, hex, color),
    onAlphaUpdate: update,
    cursor
  }
  return api
}
