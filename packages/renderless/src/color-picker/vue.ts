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
  const hex = context.ref(modelValue?.value ?? 'transparent')
  const res = context.ref(modelValue?.value ?? 'transparent')
  const triggerBg = context.ref(modelValue?.value ?? 'transparent')
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const color = new Color(hex.value)
  context.watch(modelValue, (newValue) => {
    hex.value = newValue
    res.value = newValue
    color.reset(hex.value)
  })
  context.watch(visible, (visible) => {
    isShow.value = visible
  })
  const state = context.reactive({
    isShow,
    hex,
    color,
    triggerBg,
    defaultValue: modelValue,
    res
  })
  const onConfirm = () => {
    hex.value = res.value
    triggerBg.value = hex.value
    changeVisible(false)
    emit('confirm', res.value)
  }
  const onCancel = () => {
    hex.value = state.triggerBg
    res.value = state.triggerBg
    changeVisible(false)
    emit('cancel')
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
