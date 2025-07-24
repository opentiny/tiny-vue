import type { IColorSelectPanelHueProps, ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import type { Color } from '../utils/color'
import { draggable } from '../utils/use-drag'
import { initDom, initState, useEvent } from '.'

export const api = ['state', 'onSvReady', 'bar', 'thumb', 'wrapper']

export const renderless = (
  props: IColorSelectPanelHueProps<Color>,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils
) => {
  const { onMounted } = hooks
  const { emit } = utils
  const { thumb, bar, wrapper } = initDom(hooks)
  const state = initState(props, hooks)
  const { onSvReady, onDrag, update } = useEvent({ thumb, bar, wrapper }, state, props, utils)
  const api = {
    state,
    onSvReady,
    bar,
    thumb,
    wrapper
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
  return api
}
