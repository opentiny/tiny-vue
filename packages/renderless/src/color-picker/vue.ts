import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import type { Ref } from 'vue'
import { toggleVisible, useEvent } from './index'

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
    predefineStack
  })
  ctx.watch(props, () => {
    hex.value = props.modelValue
  })
  ctx.watch(hex, () => {
    emit('update:modelValue', hex.value)
  })
  const changeVisible = toggleVisible(isShow)
  const { onConfirm, onCancel } = useEvent(hex, emit, changeVisible)
  const api = {
    state,
    changeVisible,
    onConfirm,
    onCancel
  }
  return api
}
