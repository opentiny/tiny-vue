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
  const triggerBg = context.ref(modelValue.value ?? 'transparent');
  const hex = context.ref(modelValue.value ?? 'transparent');
  const pre = context.ref(modelValue.value ?? 'transparent');
  const isShow = context.ref(visible?.value ?? false)
  const changeVisible = (state: boolean) => {
    isShow.value = state
  }
  const stack: Ref<string[]> = context.ref(
    [...(history?.value ?? [])]
  )
  const predefineStack: Ref<string[]> = context.ref(
    [...(predefine?.value ?? [])]
  )
  const state = context.reactive({
    isShow,
    hex,
    triggerBg,
    defaultValue: modelValue,
    stack,
    predefineStack,
    size: size ?? ''
  })
  const tmpColor = new Color(modelValue.value ?? 'transparent');
  const api = {
    state,
    changeVisible,
    onCancel: (color: Ref<Color>)=>{
      triggerBg.value = pre.value
      isShow.value = false;
    },
    onConfirm: (hex)=>{
      pre.value = triggerBg.value;
      triggerBg.value = hex;
      isShow.value = false;
    },
    onHueUpdate: (h)=>{
      tmpColor.set({h});
      triggerBg.value = tmpColor.getHex();
    },
    onSVUpdate: ({s,v})=>{
      tmpColor.set({s,v});
      triggerBg.value = tmpColor.getHex();
    },
    onColorUpdate(color: Ref<Color>){
      triggerBg.value = color.value.getHex();
    }
  }
  context.watch(predefine, (newPredefine: string[]) => {
    predefineStack.value = [...newPredefine];
  }, { deep: true })
  context.watch(history, (newHistory: string[]) => {
    stack.value = [...newHistory]
  }, { deep: true })
  context.watch(modelValue, (newValue)=>{
    pre.value = newValue;
    hex.value = newValue
    state.hex = newValue
    state.triggerBg = newValue;
  })
  context.watch(visible, (visible)=>{
    isShow.value = visible;
  })
  return api
}
