import type { IColorSelectPanelRef } from '@/types'
import type { Color } from './utils/color'

export const updateModelValue = (val, emit) => {
  emit('update:modelValue', val)
}

export const toggleVisible = (isShow: IColorSelectPanelRef<boolean>) => {
  return (val) => {
    isShow.value = val
  }
}

export const useEvent = (state, emit, changeVisible, color: Color) => {
  const onConfirm = (val) => {
    color.fromString(val)
    updateModelValue(val, emit)
    emit('confirm', val)
    changeVisible(false)
  }
  const onCancel = () => {
    changeVisible(false)
    emit('cancel')
  }
  return {
    onConfirm,
    onCancel
  }
}
