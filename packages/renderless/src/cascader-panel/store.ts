/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import Node from './node'
import { valueEquals, coerceTruthyValueToArray as toArray } from './index'

const flatNodes = (data, leafOnly) =>
  data.reduce((prev, node) => {
    if (node.isLeaf) {
      prev.push(node)
    } else {
      !leafOnly && prev.push(node)
      prev = prev.concat(flatNodes(node.children, leafOnly))
    }

    return prev
  }, [])

export default class Store {
  constructor(data, config) {
    this.config = config
    this.initNodes(data)
  }

  getNodes() {
    return this.nodes
  }

  initNodes(data) {
    data = toArray(data)

    this.nodes = data.map((nodeData) => new Node(nodeData, this.config))
    this.flattedNodes = this.getFlattedNodes(false, false)
    this.leafNodes = this.getFlattedNodes(true, false)
  }

  appendNode(nodeData, parentNode) {
    const { config, nodes } = this
    const node = new Node(nodeData, config, parentNode)
    const children = parentNode ? parentNode.children : nodes

    children.push(node)
  }

  appendNodes(nodeDataList, parentNode) {
    nodeDataList = toArray(nodeDataList)
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode))
  }

  getFlattedNodes(leafOnly, cached = true) {
    const { leafNodes, flattedNodes } = this
    const cachedNodes = leafOnly ? leafNodes : flattedNodes
    return cached ? cachedNodes : flatNodes(this.nodes, leafOnly)
  }

  getNodeByValue(value) {
    if (value) {
      const lazy = !this.config.lazy
      const nodes = this.getFlattedNodes(false, lazy).filter((node) => valueEquals(node.path, value) || node.value === value)

      return nodes && nodes.length ? nodes[0] : null
    }

    return null
  }
}
