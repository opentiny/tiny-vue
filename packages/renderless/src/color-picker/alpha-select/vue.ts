import type { Ref } from '@vue/composition-api'
import Color from '../utils/color'
import { draggable } from '../utils/use-drag'
import { onDrag, updateThumb } from '.'

export const api = ['state', 'color', 'slider', 'alphaWrapper', 'alphaThumb']

export const renderless = (props, context, { emit }) => {
  const hex = props.color
  const color = new Color(hex, props.alpha)
  const [rr, gg, bb] = color.getRGB()
  const r = context.ref(rr)
  const g = context.ref(gg)
  const b = context.ref(bb)
  const slider: Ref<HTMLElement> = context.ref()
  const alphaWrapper: Ref<HTMLElement> = context.ref()
  const alphaThumb: Ref<HTMLElement> = context.ref()
  const alpha = context.ref(color.get('a'))
  context.watch(() => props.color, (hex: string) => {
    color.reset(hex)
    const [rr, gg, bb] = color.getRGB()
    r.value = rr
    g.value = gg
    b.value = bb
  })
  context.watch(alpha, (newAlpha) => {
    updateThumb(newAlpha, alphaThumb.value, alphaWrapper.value)
    emit('alpha-update', alpha.value)
  })
  const background = context.computed(() => {
    return `linear-gradient(to right, rgba(${r.value}, ${g.value}, ${b.value}, 0) 0%, rgba(${r.value}, ${g.value}, ${b.value}, 1) 100%)`
  })
  const state = context.reactive({
    background,
    hex
  })
  const api = {
    state,
    color: props.color,
    slider,
    alphaWrapper,
    alphaThumb,
  }
  context.onMounted(() => {
    updateThumb(alpha.value, alphaThumb.value, slider.value)
    draggable(slider.value, {
      drag(event) {
        onDrag(event as MouseEvent, slider, alphaThumb, alpha)
      }
    })
  })
  return api
}
