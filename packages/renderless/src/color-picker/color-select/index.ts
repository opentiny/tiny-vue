import type { Ref } from '@vue/composition-api'
import type Color from '../utils/color'

export const setPosition = (el: HTMLElement, x: number, y: number) => {
  el.style.top = `${y}px`
  el.style.left = `${x}px`
}
export const getXBySaturation = (s: number, width: number) => (s * width) / 100
export const getYByLight = (l: number, height: number) => ((100 - l) * height) / 100
export const updatePosition = (event: MouseEvent | TouchEvent, rect: DOMRect, cursor: Ref<HTMLElement>) => {
  let x = (event as MouseEvent).clientX - rect.left
  let y = (event as MouseEvent).clientY - rect.top
  x = Math.max(0, x)
  x = Math.min(x, rect.width)
  y = Math.max(0, y)
  y = Math.min(y, rect.height)

  setPosition(cursor.value, x - 1 / 2 * cursor.value.offsetWidth, y - 1 / 2 * cursor.value.offsetWidth)
  return { x, y }
}
export const calcSaturation = (x: number, width: number) => (x / width)
export const calcBrightness = (y: number, height: number) => 100 - (y / height) * 100
export const getThumbTop = (wrapper: HTMLElement, thumb: HTMLElement, hue: number) => {
  return Math.round(
    (hue * (wrapper.offsetHeight - thumb.offsetHeight / 2)) / 360
  )
}

export const resetCursor = (s: number, v: number, wrapper: Ref<HTMLElement>, cursor: Ref<HTMLElement>, thumb: Ref<HTMLElement>, color: Color, h: Ref<number>) => {
  const { width, height } = wrapper.value.getBoundingClientRect()
  const x = getXBySaturation(s, width) - 1 / 2 * cursor.value.offsetWidth
  const y = getYByLight(v, height) - 1 / 2 * cursor.value.offsetWidth
  setPosition(cursor.value, x < 0 ? 0 : x, y < 0 ? 0 : y)
  const thummbTop = getThumbTop(wrapper.value, thumb.value, color.get('h'))
  thumb.value.style.top = `${thummbTop}px`
  h.value = color.get('h')
}
