import { getRowid } from '@opentiny/vue-renderless/grid/utils'

const isContented = (array) => Array.isArray(array) && array.length > 0

let nid = 0

const structure = ({ array, stack, tiled, map, customMappings, getID, childrenKey, sizeKey }) => {
  if (!Array.isArray(array)) {
    return
  }

  const level = stack.length
  const nodes = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]

    const node = {
      id: getID(item) || ++nid,
      payload: item,
      path: [...stack, item],
      level,
      parentNode: level > 0 ? map.get(stack[stack.length - 1]) : undefined,
      childNodes: undefined,
      space: { originDistance: 0, size: item[sizeKey] || 36 },
      mappings: customMappings ? Object.assign({}, customMappings({ payload: item, viewIndex: tiled.length })) : {}
    }

    tiled.push(node)
    map.set(item, node)
    nodes.push(node)

    if (childrenKey) {
      stack.push(item)
      node.childNodes = structure({
        array: item[childrenKey],
        stack,
        tiled,
        map,
        customMappings,
        getID,
        childrenKey,
        sizeKey
      })
      stack.pop()
    }
  }

  return nodes
}

const makeTile = ({ list, getID, childrenKey, sizeKey, customMappings }) => {
  const tiled = []
  const map = new WeakMap()

  if (isContented(list)) {
    structure({
      array: list,
      stack: [],
      tiled,
      map,
      customMappings,
      getID,
      childrenKey,
      sizeKey
    })
  }

  return { tiled, map }
}

const getAncestors = (node, map) =>
  node.parentNode ? node.path.slice(0, node.path.length - 1).map((row) => map.get(row)) : []

const isExpand = (node, isRowExpand) => isRowExpand(node.payload)

const isParentExpand = (node, isRowExpand, map) => getAncestors(node, map).every((p) => isExpand(p, isRowExpand))

const makeGraph = ({ isRowExpand, tileInfo }) => {
  const { tiled, map } = tileInfo
  const graphed = []
  let scrollSize = 0

  for (let i = 0; i < tiled.length; i++) {
    const node = tiled[i]

    if (!node.parentNode || isParentExpand(node, isRowExpand, map)) {
      node.space.originDistance = scrollSize
      scrollSize += node.space.size
      graphed.push(node)
    }
  }

  return { graphed, scrollSize }
}

export const buildRenderGraph = ($table) => {
  tileFullData($table)
  graphFullData($table)
}

export const tileFullData = ($table) => {
  const { treeConfig, rowGroup, groupFullData, afterFullData } = $table

  // @ts-expect-error
  const tileInfo = makeTile({
    list: !treeConfig && rowGroup?.field ? groupFullData : afterFullData,
    getID: (row) => getRowid($table, row),
    childrenKey: treeConfig ? treeConfig.children : undefined
  })

  $table._tileInfo = tileInfo
}

export const graphFullData = ($table) => {
  const { treeConfig, treeExpandeds, _tileInfo } = $table

  if (_tileInfo) {
    const graphInfo = makeGraph({
      isRowExpand: (row) => (treeConfig ? treeExpandeds.includes(row) : true),
      tileInfo: $table._tileInfo
    })

    $table._graphInfo = graphInfo
  }
}
