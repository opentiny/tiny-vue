import type { ISharedRenderlessParamHooks, IMindMapProps } from '@/types'
import { importData, initEvent } from '.'

export const api = ['exportData']
export const renderless = (
  props: IMindMapProps,
  { getCurrentInstance, onMounted, onUnmounted, watch }: ISharedRenderlessParamHooks,

  { emit },
  {
    MindElixir
  }: {
    MindElixir
  }
) => {
  const api: Record<string, any> = {}
  let destoryListener: (() => void) | null = null
  onMounted(() => {
    const instance = getCurrentInstance()
    if (!instance) {
      throw new Error(
        'Can not find instance. Please open Issue: https://github.com/opentiny/tiny-vue/issues/new/choose'
      )
    }
    const mindmap: HTMLElement = instance.refs.mindmap as HTMLElement
    const render = new MindElixir({
      contextMenu: false,
      toolBar: false,
      nodeMenu: false,
      ...(props.options ?? {}),
      el: mindmap
    })
    destoryListener = initEvent(render, emit)
    emit('create', render)

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          emit('import:before', { render, data: props.modelValue })
          importData(render, props.modelValue)
          emit('import:after', { render, data: props.modelValue })
        } else {
          const root = MindElixir.new('root')
          render.init(root)
        }
      },
      { deep: true, immediate: true }
    )
  })
  onUnmounted(() => {
    destoryListener?.()
  })
  return api
}
