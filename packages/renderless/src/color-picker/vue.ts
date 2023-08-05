import type { Ref } from '@vue/composition-api'
import Color from './utils/color'

export const api = ['state', 'changeVisible', 'cursor', 'onColorUpdate', 'onHueUpdate', 'onSVUpdate']

export const renderless = (
  props,
  context
) => {
  const { modelValue, visible } = context.toRefs(props)
  const hex = context.ref(modelValue.value)
  const isShow = context.ref(visible?.value ?? false)
  const cursor: Ref<HTMLElement> = context.ref()
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const color = new Color(hex.value)
  const state = context.reactive({
    isShow,
    hex,
    color
  })
  const onColorUpdate = () => {
    hex.value = color.getHex()
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
    cursor,
  }
  return api
}
