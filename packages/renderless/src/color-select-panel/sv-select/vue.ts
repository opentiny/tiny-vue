import type {
  IColorSelectPanelRef,
  IColorSelectPanelSVProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'
import type { Color } from '../utils/color'
import { draggable } from '../utils/use-drag'
import { initState, initWatch, useDrag, useUpdate } from './index'

export const api = ['state', 'wrapper', 'cursor']
export const renderless = (
  props: IColorSelectPanelSVProps<Color>,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils
) => {
  const state = initState(props, hooks)
  const { ref, onMounted } = hooks
  const { emit } = utils
  const wrapper: IColorSelectPanelRef<HTMLElement | undefined> = ref()

  const update = useUpdate(state, props, wrapper)

  const onDrag = useDrag(state, wrapper, props, utils)

  initWatch(state, update, hooks)

  onMounted(() => {
    const drag = {
      drag: (event: MouseEvent | TouchEvent) => {
        onDrag(event)
      },
      end: (event: MouseEvent | TouchEvent) => {
        onDrag(event)
      }
    }
    draggable(wrapper.value!, drag)
    update()
    emit('ready', update)
  })
  const api = { state, wrapper }
  return api
}
