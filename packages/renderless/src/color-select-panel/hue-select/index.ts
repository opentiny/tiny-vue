import type {
  ColorPanelContext,
  IColorSelectPanelHueProps,
  IColorSelectPanelRef,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils,
  UseColorPointsRet
} from '@/types'
import { Color } from '../utils/color'
import { getClientXY } from '../utils/getClientXY'
import { useContext } from '../utils/context'
import { ColorPoint } from '../utils/color-points'

interface DomInit {
  thumb: IColorSelectPanelRef<HTMLElement | undefined>
  bar: IColorSelectPanelRef<HTMLElement | undefined>
  wrapper: IColorSelectPanelRef<HTMLElement | undefined>
}

export const useOnClickBar = (
  { addPoint, setActivePoint, getActviePoint }: UseColorPointsRet,
  { bar }: DomInit,
  getLeft: (barEl: HTMLElement, event: MouseEvent) => number
) => {
  return (event: MouseEvent) => {
    const activePoint = getActviePoint().value
    const color = new Color({
      enableAlpha: activePoint.color.enableAlpha,
      format: activePoint.color.format,
      value: activePoint.color.value
    })
    const left = getLeft(bar.value!, event)
    const colorPoint = new ColorPoint(color, left)
    addPoint(colorPoint)
    setActivePoint(colorPoint)
  }
}

export const initState = (props: IColorSelectPanelHueProps<Color>, hooks: ISharedRenderlessParamHooks) => {
  const { reactive, ref, computed } = hooks
  const ctx = useContext(hooks)
  const hueValue = computed(() => props.color.get('hue'))
  const thumbLeft = ref(0)
  const state = reactive({ hueValue, thumbLeft, ctx })
  return state
}

export const initDom = ({ ref }: ISharedRenderlessParamHooks): DomInit => {
  return {
    thumb: ref<HTMLElement>(),
    bar: ref<HTMLElement>(),
    wrapper: ref<HTMLElement>()
  }
}

export const useEvent = (
  { thumb, bar }: DomInit,
  state: ReturnType<typeof initState>,
  props: IColorSelectPanelHueProps<Color>,
  { emit }: ISharedRenderlessParamUtils,
  ctx: ColorPanelContext
) => {
  const onSvReady = (update) => {
    emit('svReady', update)
  }
  const getThumbTop = () => {
    if (!thumb.value) {
      return 0
    }
    const hue = ctx.activeColor.value.color.get('hue')
    if (!bar.value) {
      return 0
    }
    return (hue * (bar.value.offsetWidth - thumb.value.offsetWidth / 2)) / 360
  }
  const update = () => {
    state.thumbLeft = getThumbTop()
    if (ctx.colorMode.value !== 'linear-gradient') {
      ctx.activeColor.value.cursorLeft = state.thumbLeft
    }
  }
  const getLeft = (barEl: HTMLElement, event: MouseEvent | TouchEvent) => {
    if (!thumb.value) {
      return 0
    }
    const rect = barEl?.getBoundingClientRect()
    const { clientX } = getClientXY(event)
    let left = clientX - rect.left
    left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)
    left = Math.max(thumb.value.offsetWidth / 2, left)
    return left
  }
  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!bar.value || !thumb.value) {
      return
    }
    const el = bar.value
    if (!el) {
      return
    }
    const left = getLeft(el, event)
    const rect = el?.getBoundingClientRect()
    const hue = Math.round(((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth)) * 360)
    state.thumbLeft = left
    emit('hueUpdate', hue)
    ctx.activeColor.value.color.set('hue', hue)
  }
  return { update, onDrag, onSvReady, getLeft, getThumbTop }
}
