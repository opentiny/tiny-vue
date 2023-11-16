import { cloneDeep } from '../chart-core/deps/utils'

export const filterInput = ({ state }) => (val) => {
  state.filterValue = val
}

export const setIsCurrent = ({ props, vm, state }) => (data, node) => {
  if (props.onlyCheckChildren && node.children) return

  const nodeId = node.id

  if (state.filterValue && state.filterData.length) {
    getIsCurrent(vm, { children: state.filterData }, nodeId)
    state.activedKeys = nodeId
  } else {
    getIsCurrent(vm, { children: data }, nodeId)
    state.filterCheckedId = null
  }

  state.activedNodeId = nodeId

  if (props.onlyCheckChildren) {
    state.currentPaths = findPaths(data, nodeId)
  }
}

const getIsCurrent = (vm, node, nodeId) => {
  if (!node.children) return

  for (let i = 0; i < node.children.length; i++) {
    const isCurrentNode = node.children[i].id === nodeId

    vm.$set(node.children[i], 'isCurrent', isCurrentNode)
    getIsCurrent(vm, node.children[i], nodeId)
  }
}

export const filterNodes = ({ state, api, nextTick }) => (label) => {
  if (label !== '') {
    state.filterData = filterTree(cloneDeep(state.data), label)
  } else {
    state.filterData = []

    if (state.activedKeys) {
      api.getActivedKeysPath(state.activedKeys)
      nextTick(() => {
        api.setIsCurrent(state.data, { id: state.activedKeys })
      })
    }
  }
}

export const getExpandedKeysPath = ({ state }) => (keys) => {
  const paths = []
  const len = keys.length

  for (let i = 0; i < len; i++) {
    if (!paths.includes(keys[i])) {
      paths.push(...findPaths(state.data, keys[i]))
    }
  }

  state.expandedKeysPath = paths
}

export const getActivedKeysPath = ({ state }) => (key) => {
  if (key !== null && key !== undefined) {
    state.activedKeysPath = findPaths(state.data, key) || []
  }
}

export const setNodeHidden = ({ props, vm, state }) => (nodeId) => {
  if (state.filterValue && state.filterData.length) {
    hiddenNode(vm, state.filterData, nodeId)
  }
  if (props.expandAll && !state.filterValue) {
    hiddenNode(vm, state.data, nodeId)
  }
}

export const setAllNodeVisible = ({ vm, state }) => () => {
  setNodeVisible(vm, state.data)
}

const setNodeVisible = (vm, nodes) => {
  if (!nodes) return
  for (let i = 0; i < nodes.length; i++) {
    vm.$set(nodes[i], 'visible', true)
    if (nodes[i].children) {
      setNodeVisible(vm, nodes[i].children)
    }
  }
}

const existChildren = (node) => node.children && node.children.length

const filterTree = (nodes, label) => {
  const result = []

  for (const node of nodes) {
    if (existChildren(node)) {
      node.children = filterTree(node.children, label)
    }

    if (node.label.includes(label) || existChildren(node)) {
      node.visible = true
      result.push(node)
    }
  }
  return result
}

const hiddenNode = (vm, nodes, nodeId) => {
  if (!nodes) return
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === nodeId) {
      vm.$set(nodes[i], 'visible', false)
    }
    if (nodes[i].children) {
      hiddenNode(vm, nodes[i].children, nodeId)
    }
  }
}

const findPaths = (nodes, nodeId) => {
  for (let i in nodes) {
    if (nodes[i].id === nodeId) {
      return [nodes[i].id]
    }
    if (nodes[i].children) {
      let res = findPaths(nodes[i].children, nodeId)

      if (res) {
        return res.concat(nodes[i].id)
      }
    }
  }
}
