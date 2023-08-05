import type { Ref } from '@vue/composition-api'
import Color from './utils/color'

export const api = [
  'state',
  'changeVisible',
  'cursor',
  'onColorUpdate',
  'onHueUpdate',
  'onSVUpdate',
  'onConfirm',
  'onCancel'
]

export const renderless = (
  props,
  context,
  { emit }
) => {
  const { modelValue, visible } = context.toRefs(props)
  const hex = context.ref(modelValue.value)
  const res = context.ref(modelValue.value)
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const color = new Color(hex.value)
  const state = context.reactive({
    isShow,
    hex,
    color,
    triggerBg: context.unref(modelValue),
    defaultValue: context.unref(modelValue),
    res
  })
  const onConfirm = () => {
    hex.value = res.value
    state.triggerBg = hex.value
    changeVisible(false)
    emit('onConfirm', res.value)
  }
  const onCancel = () => {
    hex.value = state.triggerBg
    res.value = state.triggerBg
    changeVisible(false)
  }
  const onColorUpdate = () => {
    res.value = color.getHex()
  }
  const onHueUpdate = (hue: number) => {
    color.set({ h: hue })
    onColorUpdate()
  }
  const onSVUpdate = ({ s, v }: { s: number; v: number }) => {
    color.set({ s, v })
    onColorUpdate()
  }
  const api = {
    state,
    changeVisible,
    onHueUpdate,
    onSVUpdate,
    onConfirm,
    onCancel,
    cursor,
  }
  return api
}
