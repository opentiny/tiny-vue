export const initEvent = (render, emit) => {
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
