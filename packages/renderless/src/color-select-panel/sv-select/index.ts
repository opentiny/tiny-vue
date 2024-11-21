import type {
  IColorSelectPanelRef,
  IColorSelectPanelSVProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'
import type { Color } from '../utils/color'
import { getClientXY } from '../utils/getClientXY'

type State = ReturnType<typeof initState>

export const initState = (
  props: IColorSelectPanelSVProps<Color>,
  { ref, computed, reactive }: ISharedRenderlessParamHooks
) => {
  const cursorTop = ref(0)
  const cursorLeft = ref(0)
  const bg = ref('hsl(0, 100%, 50%)')
  const colorValue = computed(() => {
    const hue = props.color.get('hue')
    const value = props.color.get('value')
    return { hue, value }
  })
  const state = reactive({
    colorValue,
    bg,
    cursorLeft,
    cursorTop
  })
  return state
}

export const useUpdate = (
  state: State,
  props: IColorSelectPanelSVProps<Color>,
  wrapper: IColorSelectPanelRef<HTMLElement | undefined>
) => {
  return () => {
    const el = wrapper.value
    if (!el) {
      return
    }
    const sat = props.color.get('sat')
    const value = props.color.get('value')
    const { clientWidth: width, clientHeight: height } = el

    state.cursorLeft = (sat * width) / 100
    state.cursorTop = ((100 - value) * height) / 100
    state.bg = `hsl(${props.color.get('hue')}, 100%, 50%)`
  }
}

export const useDrag = (
  state: State,
  wrapper: IColorSelectPanelRef<HTMLElement | undefined>,
  props: IColorSelectPanelSVProps<Color>,
  { emit }: ISharedRenderlessParamUtils
) => {
  return (event: MouseEvent | TouchEvent) => {
    const el = wrapper.value!
    const rect = el.getBoundingClientRect()
    const { clientX, clientY } = getClientXY(event)
    let left = clientX - rect.left
    let top = clientY - rect.top
    left = Math.max(0, left)
    left = Math.min(left, rect.width)

    top = Math.max(0, top)
    top = Math.min(top, rect.height)

    state.cursorLeft = Math.max(left, 0)
    state.cursorTop = Math.max(top, 0)

    const s = (left / rect.width) * 100
    const v = 100 - (top / rect.height) * 100

    emit('svUpdate', { s, v })

    props.color.set({
      sat: s,
      value: v
    })
  }
}

export const initWatch = (state: State, update: () => void, { watch }: ISharedRenderlessParamHooks) => {
  watch(
    () => state.colorValue.value,
    () => update(),
    { deep: true }
  )
}
