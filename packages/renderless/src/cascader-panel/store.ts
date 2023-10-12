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

import {
  ICascaderPanelConfig,
  ICascaderPanelData,
  ICascaderPanelNode,
  ICascaderPanelNodePropValue
} from '@/types'
import Node from './node'
import { valueEquals, coerceTruthyValueToArray as toArray } from './index'

/**
 * 深度遍历，获得扁平的节点数组
 * @param data 节点树
 * @param leafOnly 是否只包含叶子节点
 * @returns 扁平的节点数组
 */
const flatNodes = (data: ICascaderPanelNode[], leafOnly: boolean) =>
  data.reduce<ICascaderPanelNode[]>((prev, node) => {
    if (node.isLeaf) {
      prev.push(node)
    } else {
      !leafOnly && prev.push(node)
      prev = prev.concat(flatNodes(node.children, leafOnly))
    }

    return prev
  }, [])

export default class Store {
  config: ICascaderPanelConfig
  nodes!: ICascaderPanelNode[]
  flattedNodes!: ICascaderPanelNode[]
  leafNodes!: ICascaderPanelNode[]

  constructor(data: ICascaderPanelData | ICascaderPanelData[], config: ICascaderPanelConfig) {
    this.config = config
    this.initNodes(data)
  }

  getNodes() {
    return this.nodes
  }

  initNodes(data: ICascaderPanelData | ICascaderPanelData[]) {
    data = toArray(data)

    this.nodes = data.map((nodeData) => new Node(nodeData, this.config))
    this.flattedNodes = this.getFlattedNodes(false, false)
    this.leafNodes = this.getFlattedNodes(true, false)
  }

  /**
   * 添加节点到parentNode
   */
  appendNode(nodeData: ICascaderPanelData, parentNode?: ICascaderPanelNode | null) {
    const { config, nodes } = this
    const node = new Node(nodeData, config, parentNode)
    const children = parentNode ? parentNode.children : nodes

    children.push(node)
  }

  /**
   * 添加节点到parentNode
   */
  appendNodes(nodeDataList: ICascaderPanelData[], parentNode?: ICascaderPanelNode | null) {
    nodeDataList = toArray(nodeDataList)
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode))
  }

  /**
   * 获取节点值
   * @param leafOnly 只包含叶子节点
   * @param cached 取缓存（flattedNodes或者leafNodes）中的数据
   * @returns
   */
  getFlattedNodes(leafOnly: boolean, cached: boolean = true) {
    const { leafNodes, flattedNodes } = this
    const cachedNodes = leafOnly ? leafNodes : flattedNodes
    return cached ? cachedNodes : flatNodes(this.nodes, leafOnly)
  }

  /**
   * 通过节点值获取Node节点
   * @param value
   * @returns
   */
  getNodeByValue(value: ICascaderPanelNodePropValue | null) {
    if (value) {
      const lazy = !this.config.lazy
      const nodes = this.getFlattedNodes(false, lazy).filter(
        (node) => valueEquals(node.path, value) || node.value === value
      )

      return nodes && nodes.length ? nodes[0] : null
    }

    return null
  }
}
