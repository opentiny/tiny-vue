import type { IColorSelectPanelAlphProps, ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@/types'
import type { Color } from '../utils/color'
import { draggable } from '../utils/use-drag'
import { initState, initWatch, useEvent } from '.'

export const api = ['state', 'color', 'slider', 'alphaWrapper', 'alphaThumb', 'onClick']

export const renderless = (
  props: IColorSelectPanelAlphProps<Color>,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils
) => {
  const { onMounted, ref } = hooks
  const { emit } = utils
  const slider = ref<HTMLElement>()
  const alphaWrapper = ref<HTMLElement>()
  const alphaThumb = ref<HTMLElement>()
  const state = initState(hooks)
  const { update, onClick, onDrag } = useEvent(state, slider, alphaWrapper, alphaThumb, props)
  onMounted(() => {
    if (!slider.value || !alphaThumb.value) {
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
    draggable(slider.value, dragConfig)
    draggable(alphaThumb.value, dragConfig)
    update()
    emit('ready', update)
  })

  initWatch(props, update, hooks)

  const api = {
    state,
    slider,
    alphaWrapper,
    alphaThumb,
    onClick
  }
  return api
}
