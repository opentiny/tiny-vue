import {IColorSelectPanelRef} from '@/types';
import type Color from './utils/color'

export const onConfirm = (
  hex: IColorSelectPanelRef<string>, triggerBg: IColorSelectPanelRef<string>,
  res: IColorSelectPanelRef<string>, emit, stack: IColorSelectPanelRef<Set<string>>,
  enableHistory: boolean
) => {
  return () => {
    hex.value = res.value;
    triggerBg.value = res.value;
    if (enableHistory){
      stack.value.add(res.value);
    }
    emit('confirm', res.value)
  }
}

export const onCancel = (
  res: IColorSelectPanelRef<string>, triggerBg: IColorSelectPanelRef<string>, emit, isShow: IColorSelectPanelRef<boolean>,
  hex: IColorSelectPanelRef<string>, color: Color
) => {
  return () => {
    if (isShow.value){
      res.value = triggerBg.value
      hex.value = triggerBg.value
      color.reset(hex.value)
      emit('cancel')
    }
  }
}
export const onColorUpdate = (color: Color, res: IColorSelectPanelRef<string>) => {
  res.value = color.getHex()
}

export const onHSVUpdate = (
  color: Color, res: IColorSelectPanelRef<string>, hex: IColorSelectPanelRef<string>, emit
) => {
  return {
    onHueUpdate: (hue: number) => {
      color.set({ h:  hue })
      onColorUpdate(color, res)
      hex.value = color.getHex();
      emit('hue-update', hue)
    },
    onSVUpdate: ({ s, v }: { s: number; v: number }) => {
      color.set({ s, v })
      onColorUpdate(color, res)
      emit('sv-update', {s,v})
    }
  }
}

export const onAlphaUpdate = (color: Color, res: IColorSelectPanelRef<string>) => {
  return {
    update: (alpha: number) => {
      color.set({ a: alpha })
      onColorUpdate(color, res)
    }
  }
}

export const handleHistoryClick = (
  hex:IColorSelectPanelRef<string>, res:IColorSelectPanelRef<string>,
  color:Color
  )=>{
  return (history: string)=>{
    hex.value = history;
    res.value = history;
    color.reset(history);
  }
}
