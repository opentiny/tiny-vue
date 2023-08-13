import type { Ref } from '@vue/composition-api'
import type Color from './utils/color'

export const onConfirm = (hex: Ref<string>, triggerBg: Ref<string>, res: Ref<string>, emit, isShow: Ref<boolean>) => {
  return () => {
    hex.value = res.value
    triggerBg.value = res.value
    emit('confirm', res.value)
    isShow.value = false
  }
}

export const onCancel = (res: Ref<string>, triggerBg: Ref<string>, emit, isShow: Ref<boolean>) => {
  return () => {
    res.value = triggerBg.value
    if (isShow.value){
      emit('cancel')
    }
    isShow.value = false
  }
}
export const onColorUpdate = (color: Color, res: Ref<string>) => {
  res.value = color.getHex()
}

export const onHSVUpdate = (color: Color, res: Ref<string>, hex: Ref<string>) => {
  return {
    onHueUpdate: (hue: number) => {
      color.set({ h: hue })
      onColorUpdate(color, res)
      hex.value = color.getHex()
    },
    onSVUpdate: ({ s, v }: { s: number; v: number }) => {
      color.set({ s, v })
      onColorUpdate(color, res)
    }
  }
}

export const onAlphaUpdate = (color: Color, res: Ref<string>) => {
  return {
    update: (alpha: number) => {
      color.set({ a: alpha })
      onColorUpdate(color, res)
    }
  }
}
