import type {
  IColorSelectPanelHueProps,
  IColorSelectPanelRef,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'
import type { Color } from '../utils/color'
import { getClientXY } from '../utils/getClientXY'

interface DomInit {
  thumb: IColorSelectPanelRef<HTMLElement | undefined>
  bar: IColorSelectPanelRef<HTMLElement | undefined>
  wrapper: IColorSelectPanelRef<HTMLElement | undefined>
}

export const initState = (
  props: IColorSelectPanelHueProps<Color>,
  { reactive, ref, computed }: ISharedRenderlessParamHooks
) => {
  const hueValue = computed(() => props.color.get('hue'))
  const thumbLeft = ref(0)
  const state = reactive({ hueValue, thumbLeft })
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
  { emit }: ISharedRenderlessParamUtils
) => {
  const onSvReady = (update) => {
    emit('svReady', update)
  }
  const getThumbTop = () => {
    if (!thumb.value) {
      return 0
    }
    const hue = props.color.get('hue')
    if (!bar.value) {
      return 0
    }
    return (hue * (bar.value.offsetWidth - thumb.value.offsetWidth / 2)) / 360
  }
  const update = () => {
    state.thumbLeft = getThumbTop()
  }
  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!bar.value || !thumb.value) {
      return
    }
    const el = bar.value
    if (!el) {
      return
    }
    const rect = el?.getBoundingClientRect()
    const { clientX } = getClientXY(event)
    let left = clientX - rect.left
    left = Math.min(left, rect.width - thumb.value.offsetWidth / 2)
    left = Math.max(thumb.value.offsetWidth / 2, left)
    const hue = Math.round(((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth)) * 360)
    state.thumbLeft = left
    emit('hueUpdate', hue)
    props.color.set('hue', hue)
  }
  return { update, onDrag, onSvReady }
}
