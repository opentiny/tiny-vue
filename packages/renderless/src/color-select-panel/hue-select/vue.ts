import type { IColorSelectPanelHueProps, ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import type { Color } from '../utils/color'
import { draggable } from '../utils/use-drag'
import { initDom, initState, useEvent, useOnClickBar } from '.'
import { useContext } from '../utils/context'
import { useColorPoints } from '../utils/color-points'

export const api = ['state', 'onSvReady', 'bar', 'thumb', 'wrapper', 'onClickBar']

export const renderless = (
  props: IColorSelectPanelHueProps<Color>,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils
) => {
  const { onMounted, watch } = hooks
  const { emit } = utils
  const { thumb, bar, wrapper } = initDom(hooks)
  const state = initState(props, hooks)
  const ctx = useContext(hooks)
  const { onSvReady, onDrag, update, getLeft, getThumbTop } = useEvent(
    { thumb, bar, wrapper },
    state,
    props,
    utils,
    ctx
  )
  const { addPoint, setActivePoint, ...rest } = useColorPoints(
    { wrapper: bar, points: [ctx.activeColor.value] },
    hooks,
    ctx
  )
  const onClickBar = useOnClickBar({ addPoint, setActivePoint, ...rest }, { bar, thumb, wrapper }, getLeft)
  const api = {
    state,
    onSvReady,
    bar,
    thumb,
    wrapper,
    onClickBar
  }
  onMounted(() => {
    if (!bar.value || !thumb.value) {
      return
    }
    const dragConfig = {
      drag: (event: MouseEvent | TouchEvent) => {
        onDrag(event)
      },
      end: (event: MouseEvent | TouchEvent) => {
        onDrag(event)
      }
    }
    draggable(bar.value, dragConfig)
    draggable(thumb.value, dragConfig)
    emit('hueReady', update)
    update()
  })
  watch(
    () => ctx.activeColor.value.color,
    () => {
      state.thumbLeft = getThumbTop()
    },
    { immediate: true, deep: true }
  )
  return api
}
