import type { ColorPanelContext, IColor, IColorPoint, IColorSelectPanelRef, ISharedRenderlessParamHooks } from '@/types'
import { draggable } from './use-drag'
import { getClientXY } from './getClientXY'

export interface UseColorPoints {
  points: IColorPoint[]
  wrapper: IColorSelectPanelRef<HTMLElement | undefined>
}

export class ColorPoint implements IColorPoint {
  constructor(
    public color: IColor,
    public cursorLeft: number
  ) {}
}

export const useColorPoints = (props: UseColorPoints, hooks: ISharedRenderlessParamHooks, ctx: ColorPanelContext) => {
  const { ref, watch, readonly } = hooks
  const points = ctx.colorPoints
  const actviePoint = ctx.activeColor
  const deg = ref(45)
  const linearGradientValue = ref('')
  const addPoint = (point: ColorPoint) => {
    points.value.push(point)
  }
  const removePoint = (point: IColorPoint) => {
    points.value = points.value.filter((curPoint) => curPoint !== point)
  }
  const updateDeg = (_deg: number) => {
    deg.value = _deg
  }
  const onDrag = (wrapper: IColorSelectPanelRef<HTMLElement | undefined>, event: MouseEvent | TouchEvent) => {
    const wrapperEl = wrapper.value
    if (!wrapperEl) {
      return
    }
    const rect = wrapperEl.getBoundingClientRect()
    const { clientX } = getClientXY(event)
    actviePoint.value.cursorLeft = Math.min(Math.max(clientX - rect.left, 0), rect.width)
  }
  const onClick = (element: Element, point: IColorPoint) => {
    const el = element as HTMLElement
    actviePoint.value = point
    draggable(el, {
      drag(event) {
        onDrag(props.wrapper, event)
      },
      end(event) {
        onDrag(props.wrapper, event)
      }
    })
  }
  const getRelativePos = (wrapper: IColorSelectPanelRef<HTMLElement | undefined>, point: IColorPoint) => {
    const wrapperEl = wrapper.value!
    const rect = wrapperEl.getBoundingClientRect()
    return ((point.cursorLeft / rect.width) * 100).toFixed(0)
  }
  const setActivePoint = (point: IColorPoint) => {
    actviePoint.value = point
  }
  const getActviePoint = () => actviePoint
  const toString = () => {
    // TODO: 更新linearGradientValue
    // TODO: 创建一个linear-gradient的sv
    // linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
    const colroString = points.value.map((point) =>
      [point.color.value, `${getRelativePos(props.wrapper, point)}%`].join(' ')
    )
    linearGradientValue.value = `linear-gradient(${deg.value}deg, ${colroString.join(',')})`
  }
  watch(deg, toString, { deep: true })
  watch(
    actviePoint,
    () => {
      if (!props.wrapper.value) {
        return
      }
      toString()
    },
    { deep: true }
  )
  return {
    onClick,
    linearGradientValue: readonly(linearGradientValue),
    updateDeg,
    removePoint,
    addPoint,
    setActivePoint,
    getActviePoint,
    onDrag
  }
}
