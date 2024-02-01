import type { IColorSelectPanelRef as Ref } from '@/types'
import { draggable } from '../utils/use-drag'
import { getThumbTop, resetCursor, updateThumb, updateCursor } from './index'
import type Color from '../utils/color'

export const api = ['state', 'cursor', 'wrapper', 'bar', 'thumb']
export const renderless = (props, context, { emit, expose }) => {
  const cursor: Ref<HTMLElement> = context.ref()
  const wrapper: Ref<HTMLElement> = context.ref()
  const thumb: Ref<HTMLElement> = context.ref()
  const bar: Ref<HTMLElement> = context.ref()
  const color: Color = props.color
  const h = context.ref(color.get('h'))

  const background: string = `hsl(${h.value}deg, 100%, 50%)`
  const state = context.reactive({
    background
  })

  const api = { state, cursor, wrapper, bar, thumb }
  context.watch(
    () => props,
    () => {
      h.value = color.get('h')
      resetCursor(color.get('s'), color.get('v'), wrapper, cursor, thumb, color, h)
    },
    { deep: true }
  )
  context.watch(h, (newHue: string) => {
    state.background = `hsl(${newHue}deg, 100%, 50%)`
  })
  context.onMounted(() => {
    const update = {
      thumb: updateThumb(bar, thumb, h, emit),
      cursor: updateCursor(wrapper, cursor, emit)
    }
    const thumbTop = getThumbTop(wrapper.value, thumb.value, h.value)
    thumb.value.style.top = `${thumbTop}px`
    resetCursor(color.get('s'), color.get('v'), wrapper, cursor, thumb, color, h)
    draggable(wrapper.value, {
      drag(event) {
        update.cursor(color, event as MouseEvent)
      },
      start(event) {
        update.cursor(color, event as MouseEvent)
      }
    })
    draggable(bar.value, {
      drag(event) {
        update.thumb(event as MouseEvent)
      },
      start(event) {
        update.thumb(event as MouseEvent)
      }
    })
  })
  return api
}
