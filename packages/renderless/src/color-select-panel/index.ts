import { IColorSelectPanelRef } from '@/types'
import Color from './utils/color'

export const onConfirm = (
  hex: IColorSelectPanelRef<string>,
  pre: IColorSelectPanelRef<string>,
  res: IColorSelectPanelRef<string>,
  emit,
  stack: IColorSelectPanelRef<string[]>,
  enableHistory: boolean,
  color: IColorSelectPanelRef<Color>
) => {
  return () => {
    pre.value = hex.value
    hex.value = res.value
    if (enableHistory) {
      const itemIdx = Math.max(
        stack.value.indexOf(res.value),
        stack.value.indexOf(res.value.toLowerCase()),
        stack.value.indexOf(res.value.toUpperCase())
      )
      if (itemIdx !== -1) {
        stack.value.splice(itemIdx, 1)
      }
      stack.value.unshift(res.value)
    }
    color.value.setPrevH(color.value.get('h'))
    emit('confirm', res.value)
  }
}

export const onCancel = (
  res: IColorSelectPanelRef<string>,
  pre: IColorSelectPanelRef<string>,
  emit,
  isShow: IColorSelectPanelRef<boolean>,
  hex: IColorSelectPanelRef<string>,
  color: IColorSelectPanelRef<Color>
) => {
  return () => {
    if (isShow.value) {
      res.value = pre.value
      hex.value = pre.value
      const tmpColor = new Color(pre.value)
      color.value.set({
        ...tmpColor.getHSV(),
        h: color.value.get('preH')
      })
      emit('cancel', color)
    }
  }
}
export const onColorUpdate = (color: IColorSelectPanelRef<Color>, res: IColorSelectPanelRef<string>) => {
  res.value = color.value.getHex()
}

export const onHSVUpdate = (
  color: IColorSelectPanelRef<Color>,
  res: IColorSelectPanelRef<string>,
  hex: IColorSelectPanelRef<string>,
  emit
) => {
  return {
    onHueUpdate: (hue: number) => {
      color.value.set({ h: hue })
      onColorUpdate(color, res)
      hex.value = color.value.getHex()
      emit('hue-update', hue)
    },
    onSVUpdate: ({ s, v }: { s: number; v: number }) => {
      hex.value = color.value.getHex()
      onColorUpdate(color, res)
      emit('sv-update', { s, v })
    }
  }
}

export const onAlphaUpdate = (color: IColorSelectPanelRef<Color>, res: IColorSelectPanelRef<string>) => {
  return {
    update: (alpha: number) => {
      color.value.set({ a: alpha })
      onColorUpdate(color, res)
    }
  }
}

export const handleHistoryClick = (
  hex: IColorSelectPanelRef<string>,
  res: IColorSelectPanelRef<string>,
  color: IColorSelectPanelRef<Color>,
  emit
) => {
  return (history: string) => {
    hex.value = history
    res.value = history
    const tmpColor = new Color(history)
    color.value.set({
      ...tmpColor.getHSV(),
    })
    emit('color-update', color)
  }
}

export const handlePredefineClick = (
  hex: IColorSelectPanelRef<string>,
  res: IColorSelectPanelRef<string>,
  color: IColorSelectPanelRef<Color>,
  emit
) => {
  return (selectedColor: string) => {
    hex.value = selectedColor
    res.value = selectedColor
    const tmpColor = new Color(selectedColor)
    color.value.set({
      ...tmpColor.getHSV(),
    })
    emit('color-update', color)
  }
}
