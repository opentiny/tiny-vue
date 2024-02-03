import type { IColorSelectPanelRef } from '@/types'

export const calcLeftByAlpha = (wrapper: HTMLElement, thumb: HTMLElement, alpha: number) => {
  return Math.round((alpha * (wrapper.offsetWidth - thumb.offsetWidth / 2)) / 100)
}

export const updateThumb = (alpha: number, thumb: HTMLElement, wrapper: HTMLElement) => {
  thumb.style.left = `${calcLeftByAlpha(wrapper, thumb, alpha)}px`
}

export const onDrag = (
  event: MouseEvent,
  bar: IColorSelectPanelRef<HTMLElement>,
  thumb: IColorSelectPanelRef<HTMLElement>,
  alpha: IColorSelectPanelRef<number>
) => {
  const rect = bar.value.getBoundingClientRect()
  const { clientX } = event
  let left = clientX - rect.left
  left = Math.max(thumb.value.offsetWidth / 2, left)
  left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)
  alpha.value = Math.round(((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth)) * 100)
}
