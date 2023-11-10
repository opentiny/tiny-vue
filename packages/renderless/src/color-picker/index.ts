import { IColorPickerRef, IColorSelectPanelRef } from '@/types'
import type Color from './utils/color'

export const onConfirm = (
  hex: IColorSelectPanelRef<string>,
  triggerBg: IColorSelectPanelRef<string>,
  res: IColorSelectPanelRef<string>,
  emit,
  isShow: IColorSelectPanelRef<boolean>,
  prev: IColorPickerRef<string>
) => {
  return (color: string) => {
    prev.value = res.value;
    res.value =  color
    hex.value = res.value
    triggerBg.value = res.value
    emit('confirm', res.value)
    isShow.value = false
  }
}

export const onCancel = (
  res: IColorSelectPanelRef<string>,
  triggerBg: IColorSelectPanelRef<string>,
  emit,
  isShow: IColorSelectPanelRef<boolean>,
  hex: IColorSelectPanelRef<string>,
  color: Color, prev: IColorPickerRef<string>
) => {
  return () => {
    if (isShow.value) {
      res.value = prev.value;
      hex.value = prev.value;
      triggerBg.value = prev.value;
      color.reset(hex.value)
      emit('cancel')
    }
    isShow.value = false
  }
}
export const onColorUpdate = (color: Color, res: IColorSelectPanelRef<string>, triggerBg: IColorPickerRef<string>) => {
  res.value = color.getHex()
  triggerBg.value = color.getHex();
}

export const onHSVUpdate = (color: Color, res: IColorSelectPanelRef<string>, hex: IColorSelectPanelRef<string>, triggerBg: IColorSelectPanelRef<string>) => {
  return {
    onHueUpdate: (hue: number) => {
      color.set({ h: hue })
      onColorUpdate(color, res, triggerBg)
      hex.value = color.getHex()
    },
    onSVUpdate: ({ s, v }: { s: number; v: number }) => {
      color.set({ h: color.get('h'), s, v })
      onColorUpdate(color, res, triggerBg)
      hex.value = color.getHex();
    }
  }
}

export const onAlphaUpdate = (color: Color, res: IColorSelectPanelRef<string>, triggerBg: IColorSelectPanelRef<string>) => {
  return {
    update: (alpha: number) => {
      color.set({ a: alpha })
      onColorUpdate(color, res, triggerBg)
    }
  }
}
