import type { Ref } from '@vue/composition-api'
import { draggable } from '../utils/use-drag'
import Color from '../utils/color'

export const api = ['state', 'cursor', 'wrapper', 'bar', 'thumb']
const setPosition = (el: HTMLElement, x: number, y: number) => {
  el.style.top = `${y}px`
  el.style.left = `${x}px`
}
export const getXBySaturation = (s: number, width: number) => (s * width) / 100
export const getYByLight = (l: number, height: number) => ((100 - l) * height) / 100
export const renderless = (props, context, { emit }) => {
  const cursor: Ref<HTMLElement> = context.ref()
  const wrapper: Ref<HTMLElement> = context.ref()
  const thumb: Ref<HTMLElement> = context.ref()
  const bar: Ref<HTMLElement> = context.ref()
  const color = new Color(props.color)
  const h = context.ref(color.get('h'))

  const background = context.computed(() => {
    return `hsl(${h.value}deg, 100%, 50%)`
  })
  const state = context.reactive({
    background
  })
  const api = { state, cursor, wrapper, bar, thumb }
  const updatePosition = (event: MouseEvent | TouchEvent, rect: DOMRect) => {
    let x = (event as MouseEvent).clientX - rect.left
    let y = (event as MouseEvent).clientY - rect.top
    x = Math.max(0, x)
    x = Math.min(x, rect.width)
    y = Math.max(0, y)
    y = Math.min(y, rect.height)

    setPosition(cursor.value, x - 1 / 2 * cursor.value.offsetWidth, y - 1 / 2 * cursor.value.offsetWidth)
    return { x, y }
  }

  const calcSaturation = (x: number, width: number) => (x / width)
  const calcBrightness = (y: number, height: number) => 100 - (y / height) * 100
  const getThumbTop = (wrapper: HTMLElement, thumb: HTMLElement, hue: number) => {
    return Math.round(
      (hue * (wrapper.offsetHeight - thumb.offsetHeight / 2)) / 360
    )
  }
  const resetCursor = (s: number, v: number) => {
    const { width, height } = wrapper.value.getBoundingClientRect()
    const x = getXBySaturation(s, width) - 1 / 2 * cursor.value.offsetWidth
    const y = getYByLight(v, height) - 1 / 2 * cursor.value.offsetWidth
    setPosition(cursor.value, x < 0 ? 0 : x, y < 0 ? 0 : y)
    const thummbTop = getThumbTop(wrapper.value, thumb.value, color.get('h'))
    thumb.value.style.top = `${thummbTop}px`
    h.value = color.get('h')
  }
  context.watch(() => props.color, (newColor) => {
    color.reset(newColor)
    resetCursor(color.get('s'), color.get('v'))
  })
  context.onMounted(() => {
    const thumbTop = getThumbTop(wrapper.value, thumb.value, h.value)
    thumb.value.style.top = `${thumbTop}px`
    resetCursor(
      color.get('s'),
      color.get('v')
    )
    draggable(wrapper.value, {
      drag(event) {
        const rect = wrapper.value.getBoundingClientRect()
        const { x, y } = updatePosition(event, rect)
        color.set({
          s: calcSaturation(x, rect.width) * 100,
          v: calcBrightness(y, rect.height)
        })
        emit('sv-update', {
          s: color.get('s'),
          v: color.get('v')
        })
      },
    })
    draggable(bar.value, {
      drag(event) {
        const e = event as MouseEvent
        const rect = bar.value.getBoundingClientRect()
        let top = e.clientY - rect.top
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2)
        top = Math.max(thumb.value.offsetHeight / 2, top)
        thumb.value.style.top = `${top}px`
        h.value = Math.round(
          ((top - thumb.value.offsetHeight / 2) /
          (rect.height - thumb.value.offsetHeight)) *
          360
        )
        emit('hue-update', h.value)
      }
    })
  })
  return api
}
