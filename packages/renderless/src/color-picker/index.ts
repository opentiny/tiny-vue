import type { IColorSelectPanelRef } from '@/types'

const updateModelValue = (val, emit) => {
  emit('update:modelValue', val)
}

export const toggleVisible = (isShow: IColorSelectPanelRef<boolean>) => {
  return (val) => {
    isShow.value = val
  }
}

export const useEvent = (hex, emit, changeVisible) => {
  const onConfirm = (val) => {
    hex.value = val
    updateModelValue(val, emit)
    emit('confirm', val)
    changeVisible(false)
  }
  const onCancel = (color: IColorSelectPanelRef<string>) => {
    hex.value = color.value.hex
    changeVisible(false)
    emit('cancel')
  }
  return {
    onConfirm,
    onCancel
  }
}
