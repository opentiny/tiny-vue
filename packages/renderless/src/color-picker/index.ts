import {IColorPickerRef} from '@/types';
import type Color from './utils/color'

export const onConfirm = (
  hex: IColorPickerRef<string>, triggerBg: IColorPickerRef<string>,
  res: IColorPickerRef<string>, emit, isShow: IColorPickerRef<boolean>
) => {
  return () => {
    hex.value = res.value
    triggerBg.value = res.value
    emit('confirm', res.value)
    isShow.value = false
  }
}

export const onCancel = (
  res: IColorPickerRef<string>, triggerBg: IColorPickerRef<string>, emit, isShow: IColorPickerRef<boolean>
) => {
  return () => {
    res.value = triggerBg.value
    if (isShow.value){
      emit('cancel')
    }
    isShow.value = false
  }
}
export const onColorUpdate = (color: Color, res: IColorPickerRef<string>) => {
  res.value = color.getHex()
}

export const onHSVUpdate = (color: Color, res: IColorPickerRef<string>, hex: IColorPickerRef<string>) => {
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

export const onAlphaUpdate = (color: Color, res: IColorPickerRef<string>) => {
  return {
    update: (alpha: number) => {
      color.set({ a: alpha })
      onColorUpdate(color, res)
    }
  }
}
