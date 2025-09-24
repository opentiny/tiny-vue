import type {
  ColorPanelContext,
  IColorPoint,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils,
  LinearGradientState
} from '@/types'
import { ColorPoint } from '../utils/color-points'
import { getClientXY } from '../utils/getClientXY'
import { Color } from '../utils/color'
import { draggable } from '../utils/use-drag'
import { isNullOrEmpty } from '@opentiny/utils'

export const LINEAR_GRADIENT_BAR = 'linearGradientBar'
export const THUMB = 'thumb'

export const useLinearGradient = (
  state: LinearGradientState,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils,
  context: ColorPanelContext
) => {
  const { vm } = utils
  const { nextTick } = hooks
  const activePoint = context.activeColor
  const addPoint = (point: ColorPoint) => {
    context.colorPoints.value.push(point)
  }
  const getPos = (event: MouseEvent | TouchEvent) => {
    if (!vm) {
      return 0
    }
    const el = vm.$refs[LINEAR_GRADIENT_BAR] as HTMLElement
    const rect = el.getBoundingClientRect()
    const { clientX } = getClientXY(event)
    return Math.min(Math.max(clientX - rect.left, 0), rect.width)
  }
  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!vm) {
      return 0
    }
    activePoint.value.cursorLeft = getPos(event)
  }
  const getActivePoint = () => {
    return activePoint
  }
  const onClickBar = (event: MouseEvent | TouchEvent) => {
    const active = getActivePoint()
    const newPoint = new ColorPoint(
      new Color({
        enableAlpha: active.value.color.enableAlpha,
        format: active.value.color.format,
        value: active.value.color.value
      }),
      active.value.cursorLeft
    )
    const left = getPos(event)
    newPoint.cursorLeft = left
    addPoint(newPoint)
    setActivePoint(newPoint)
    nextTick(() => {
      const lastColorPointElement = (vm.$refs[THUMB] as HTMLElement[]).at(-1)
      if (!lastColorPointElement) {
        return
      }
      draggable(lastColorPointElement, {
        drag(event) {
          onDrag(event)
        },
        end(event) {
          onDrag(event)
        }
      })
    })
  }
  const setActivePoint = (point: IColorPoint) => {
    activePoint.value = point
  }
  const onThumbMouseDown = (event: MouseEvent | TouchEvent, point: IColorPoint) => {
    setActivePoint(point)
    const el = event.target as HTMLElement
    draggable(el, {
      drag(event) {
        onDrag(event)
      },
      end(event) {
        onDrag(event)
      }
    })
  }
  const getRelativePos = (points: IColorPoint) => {
    const bar = vm.$refs[LINEAR_GRADIENT_BAR] as HTMLElement
    if (!bar) {
      return 0
    }
    const rect = bar.getBoundingClientRect()
    return Number.parseInt(((points.cursorLeft / rect.width) * 100).toFixed(0))
  }
  const toString = () => {
    const colors = context.colorPoints.value
      .map((point) => {
        return [point.color.value, getRelativePos(point)] as const
      })
      .sort((a, b) => a[1] - b[1])
      .map(([colorValue, pos]) => {
        return [colorValue, `${pos}%`].join(' ')
      })
      .join(',')
    return `linear-gradient(${context.deg.value}deg, ${colors})`
  }
  hooks.watchEffect(() => {
    if (isNullOrEmpty(context.deg.value)) {
      return
    }
    context.linearGardientValue.value = toString()
    state.linearGradientBarBackground = toString().replace(`${context.deg.value}deg`, '90deg')
  })
  hooks.onMounted(() => {
    const elements = vm.$refs[THUMB] as HTMLElement[]
    if (!elements || !elements.length) {
      return
    }
    elements.forEach((el) => {
      draggable(el, {
        drag(event) {
          onDrag(event)
        },
        end(event) {
          onDrag(event)
        }
      })
    })
    context.bar.value = vm.$refs[LINEAR_GRADIENT_BAR]
  })
  return { onClickBar, onThumbMouseDown, toString }
}

export const initState = (hooks: ISharedRenderlessParamHooks): LinearGradientState => {
  const { ref, reactive } = hooks
  const linearGradientBarBackground = ref('')
  const state = reactive({ linearGradientBarBackground })
  return state
}
