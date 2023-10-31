export const handelNodeClick = ({ state, dispatch }) => (node) => {
  dispatch('Menu', 'node-clicked', node)
  if (node.disabled) return

  state.showNodes = !state.showNodes
  state.activeNodeId = node.id
  dispatch('Menu', 'node-changed', node)
}
