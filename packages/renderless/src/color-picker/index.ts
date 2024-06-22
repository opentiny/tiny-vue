import type { IColorPickerRef as Ref } from '@/types'
import type Color from './utils/color'

export const onCancel = (tmpColor: Color, triggerBg: Ref<string>, isShow: Ref<boolean>, pre: Ref<string>, emit) => {
  return (color: Ref<Color>) => {
    tmpColor.reset(color.value.getHex())
    triggerBg.value = pre.value
    isShow.value = false
    emit('cancel')
    emit('update:modelValue', pre.value)
  }
}

export const onConfirm = (triggerBg: Ref<string>, pre: Ref<string>, hex: Ref<string>, isShow: Ref<boolean>, emit) => {
  return (color: string) => {
    pre.value = triggerBg.value
    triggerBg.value = color
    hex.value = color
    isShow.value = false
    emit('confirm', color)
    emit('update:modelValue', color)
  }
}

export const onHueUpdate = (tmpColor: Color, triggerBg: Ref<string>, emit) => {
  return (h: number) => {
    triggerBg.value = tmpColor.getHex()
    tmpColor.set({ h })
    emit('update:modelValue', triggerBg.value)
  }
}

export const onSVUpdate = (tmpColor: Color, triggerBg: Ref<string>, emit) => {
  return ({ s, v }) => {
    triggerBg.value = tmpColor.getHex()
    tmpColor.set({ s, v })
    emit('update:modelValue', triggerBg.value)
  }
}

export const onColorUpdate = (triggerBg: Ref<string>) => {
  return (color: Ref<Color>) => {
    triggerBg.value = color.value.getHex()
  }
}
