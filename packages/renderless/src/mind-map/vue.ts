import type { ISharedRenderlessParamHooks, IMindMapProps } from '@/types'

const importData = (instance, data: Object) => {
  instance.init(data)
}
const initEvent = (render, emit) => {
  const onOperation = (info) => {
    emit('operation', { render, info })
  }
  const onSelectNode = (nodeObj, e?: MouseEvent) => {
    emit('selectNode', { render, nodeObj, e })
  }
  const selectNewNode = (nodeObj) => {
    emit('selectNewNode', { render, nodeObj })
  }
  const onSelectNodes = (nodeObj) => {
    emit('selectNodes', { render, nodeObj })
  }
  const unselectNode = () => {
    emit('unselectNode', { render })
  }
  const unselectNodes = () => {
    emit('unselectNodes', { render })
  }
  const expandNode = (nodeObj) => {
    emit('expandNode', { render, nodeObj })
  }
  render.bus.addListener('operation', onOperation)
  render.bus.addListener('selectNode', onSelectNode)
  render.bus.addListener('selectNewNode', selectNewNode)
  render.bus.addListener('selectNodes', onSelectNodes)
  render.bus.addListener('unselectNode', unselectNode)
  render.bus.addListener('unselectNodes', unselectNodes)
  render.bus.addListener('expandNode', expandNode)
  return () => {
    render.bus.removeListener('operation', onOperation)
    render.bus.removeListener('selectNode', onSelectNode)
    render.bus.removeListener('selectNewNode', selectNewNode)
    render.bus.removeListener('selectNodes', onSelectNodes)
    render.bus.removeListener('unselectNode', unselectNode)
    render.bus.removeListener('unselectNodes', unselectNodes)
    render.bus.removeListener('expandNode', expandNode)
  }
}
export const api = []
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
