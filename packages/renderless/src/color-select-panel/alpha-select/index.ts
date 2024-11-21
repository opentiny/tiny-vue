import type { IColorSelectPanelAlphProps, IColorSelectPanelRef, ISharedRenderlessParamHooks } from '@/types'
import type { Color } from '../utils/color'
import { getClientXY } from '../utils/getClientXY'

type State = ReturnType<typeof initState>

export const initState = ({ ref, reactive }: ISharedRenderlessParamHooks) => {
  const background = ref('')
  const left = ref(0)
  const state = reactive({ background, left })
  return state
}

export const useEvent = (
  state: State,
  slider: IColorSelectPanelRef<HTMLElement | undefined>,
  alphaWrapper: IColorSelectPanelRef<HTMLElement | undefined>,
  alphaThumb: IColorSelectPanelRef<HTMLElement | undefined>,
  props: IColorSelectPanelAlphProps<Color>
) => {
  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!slider.value || !alphaThumb.value) {
      return
    }
    const el = alphaWrapper.value!
    const rect = el.getBoundingClientRect()
    const { clientX } = getClientXY(event)
    let left = clientX - rect.left
    left = Math.max(alphaThumb.value.offsetWidth / 2, left)
    left = Math.min(left, rect.width - alphaThumb.value.offsetWidth / 2)
    const alpha = Math.round(
      ((left - alphaThumb.value.offsetWidth / 2) / (rect.width - alphaThumb.value.offsetWidth)) * 100
    )
    props.color.set('alpha', alpha)
  }
  const onClick = (event: MouseEvent | TouchEvent) => {
    if (event.target !== alphaThumb.value) {
      onDrag(event)
    }
  }
  const getLeft = () => {
    const thumb = alphaThumb.value
    if (!thumb) {
      return 0
    }
    const el = alphaWrapper.value
    if (!el) {
      return 0
    }
    const alpha = props.color.get('alpha')
    return (alpha * (el.offsetWidth - thumb.offsetWidth / 2)) / 100
  }
  const getBackground = () => {
    if (props.color && props.color.value) {
      const { r, g, b } = props.color.toRgb()
      return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`
    }
    return ''
  }
  const update = () => {
    state.left = getLeft()
    state.background = getBackground()
  }
  return { onDrag, onClick, update }
}

export const initWatch = (
  props: IColorSelectPanelAlphProps<Color>,
  update: () => void,
  { watch }: ISharedRenderlessParamHooks
) => {
  watch(
    () => props.color.get('alpha'),
    () => update(),
    { deep: true }
  )
  watch(
    () => props.color,
    () => update(),
    { deep: true }
  )
}
