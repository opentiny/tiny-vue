import type { Ref } from '@vue/composition-api'
import { draggable } from '../utils/use-drag'
import Color from '../utils/color'
import {
  calcBrightness,
  calcSaturation,
  updatePosition,
  getThumbTop,
  resetCursor,
} from './index'

export const api = ['state', 'cursor', 'wrapper', 'bar', 'thumb']
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
  context.watch(() => props.color, (newColor) => {
    color.reset(newColor)
    resetCursor(color.get('s'), color.get('v'), wrapper, cursor, thumb, color, h)
  })
  context.onMounted(() => {
    const thumbTop = getThumbTop(wrapper.value, thumb.value, h.value)
    thumb.value.style.top = `${thumbTop}px`
    resetCursor(
      color.get('s'),
      color.get('v'),
      wrapper,
      cursor,
      thumb,
      color,
      h
    )
    draggable(wrapper.value, {
      drag(event) {
        const rect = wrapper.value.getBoundingClientRect()
        const { x, y } = updatePosition(event, rect, cursor)
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
