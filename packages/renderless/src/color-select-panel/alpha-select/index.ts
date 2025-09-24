import type {
  ColorPanelContext,
  IColorSelectPanelAlphProps,
  IColorSelectPanelRef,
  ISharedRenderlessParamHooks
} from '@/types'
import type { Color } from '../utils/color'
import { getClientXY } from '../utils/getClientXY'
import { useContext } from '../utils/context'

type State = ReturnType<typeof initState>

export const initState = (hooks: ISharedRenderlessParamHooks) => {
  const { ref, reactive } = hooks
  const ctx = useContext(hooks)
  const background = ref(ctx.activeColor.value.color.value)
  const left = ref(0)
  const state = reactive({ background, left, activeColor: ctx.activeColor })
  return state
}

export const useEvent = (
  state: State,
  slider: IColorSelectPanelRef<HTMLElement | undefined>,
  alphaWrapper: IColorSelectPanelRef<HTMLElement | undefined>,
  alphaThumb: IColorSelectPanelRef<HTMLElement | undefined>,
  props: IColorSelectPanelAlphProps<Color>,
  ctx: ColorPanelContext
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
    ctx.activeColor.value.color.set('alpha', alpha)
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
    const alpha = ctx.activeColor.value.color.get('alpha')
    return (alpha * (el.offsetWidth - thumb.offsetWidth / 2)) / 100
  }
  const getBackground = () => {
    if (ctx.activeColor && ctx.activeColor.value) {
      const { r, g, b } = ctx.activeColor.value.color.toRgb()
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
  { watch }: ISharedRenderlessParamHooks,
  ctx: ColorPanelContext
) => {
  watch(
    () => ctx.activeColor.value.color,
    () => {
      update()
    },
    { deep: true }
  )
  watch(
    () => ctx.activeColor,
    () => update(),
    { deep: true }
  )
}
