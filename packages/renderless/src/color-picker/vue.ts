import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import type { Ref } from 'vue'
import { updateModelValue, toggleVisible, useEvent } from './index'
import { Color } from './utils/color'

export const api = ['state', 'changeVisible', 'onConfirm', 'onCancel', 'onHueUpdate', 'onSVUpdate', 'onColorUpdate']

export const renderless = (props, ctx: ISharedRenderlessParamHooks, { emit }: ISharedRenderlessParamUtils) => {
  const { modelValue, visible, predefine, size, history } = ctx.toRefs(props)
  const isShow = ctx.ref(visible.value)
  const hex = ctx.ref(modelValue.value ?? 'transparent')
  const stack: Ref<string[]> = ctx.ref([...(history?.value ?? [])])
  const predefineStack: Ref<string[]> = ctx.ref([...(predefine?.value ?? [])])
  ctx.watch(
    predefine,
    (newPredefine: string[]) => {
      predefineStack.value = [...newPredefine]
    },
    { deep: true }
  )
  ctx.watch(
    history,
    (newHistory: string[]) => {
      stack.value = [...newHistory]
    },
    { deep: true }
  )
  const state = ctx.reactive({
    isShow,
    hex,
    triggerBg: ctx.ref(modelValue.value),
    size,
    stack,
    predefineStack,
    enablePredefineColor: ctx.computed(() => props.enablePredefineColor),
    enableHistory: ctx.computed(() => props.enableHistory)
  })
  const color = new Color({
    value: props.modelValue,
    format: props.format,
    enableAlpha: props.alpha
  })
  ctx.watch(
    () => [props.alpha, props.format],
    () => {
      color.enableAlpha = props.alpha
      color.format = props.format || color.format
      color.onChange()
      updateModelValue(color.value, emit)
    }
  )
  ctx.watch(
    () => props.modelValue,
    () => {
      color.fromString(props.modelValue)
      const { r, g, b, a } = color.toRgba()
      state.hex = `rgba(${r}, ${g}, ${b}, ${a})`
    }
  )
  const changeVisible = toggleVisible(isShow)
  const { onConfirm, onCancel } = useEvent(state, emit, changeVisible, color)
  const api = {
    state,
    changeVisible,
    onConfirm,
    onCancel
  }
  return api
}
