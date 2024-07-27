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

import { hasOwn, isNull } from '../../type'
import { getNodeKey } from './util'
import Node from './node'

export default class TreeStore {
  constructor(options) {
    this.currentNode = null
    this.currentNodeKey = null

    for (let option in options) {
      if (hasOwn.call(options, option)) {
        this[option] = options[option]
      }
    }

    this.nodesMap = {}

    this.root = new Node({ data: this.data, store: this })

    if (this.lazy && this.load) {
      this.load(this.root, (data) => {
        this.root.doCreateChildren(data)
        this._initDefaultCheckedNodes()
        typeof this.afterLoad === 'function' && this.afterLoad({ data, init: true })
      })
    } else {
      this._initDefaultCheckedNodes()
    }
  }

  getMappingData(data) {
    const props = this.props || {}
    const mapping = {}

    for (let key in props) {
      if (hasOwn.call(props, key)) {
        mapping[key] = data[props[key]]
      }
    }

    return { ...data, ...mapping }
  }

  filter(value) {
    const { lazy, filterNodeMethod, getMappingData } = this

    const walkTree = (node) => {
      const childNodes = node.root ? node.root.childNodes : node.childNodes

      childNodes.forEach((child) => {
        // 筛选时需要添加mapping字段，但是不能修改用户的数据
        const mappingData = getMappingData.call(this, child.data)
        child.visible = filterNodeMethod.call(child, value, mappingData, child)

        walkTree(child)
      })

      if (!node.visible && childNodes.length) {
        let allHidden = !childNodes.some(({ visible }) => visible)

        if (node.root) {
          node.root.visible = allHidden === false
        } else {
          node.visible = allHidden === false
        }
      }

      if (!value) {
        return
      }
      if (node.visible && !node.isLeaf && !lazy) {
        node.expand()
      }
    }

    walkTree(this)
  }

  setData(newVal) {
    if (newVal !== this.root.data) {
      this.root.setData(newVal)
      this._initDefaultCheckedNodes()
    } else {
      this.root.updateChildren()
    }
  }

  getNode(data) {
    if (data instanceof Node) {
      return data
    }

    const nodeKey = typeof data !== 'object' ? data : getNodeKey(this.key, data)

    return this.nodesMap[nodeKey] || null
  }

  insertBefore(data, insertData) {
    const refNode = this.getNode(insertData)
    refNode.parent.insertBefore({ data }, refNode)
  }

  insertAfter(data, insertData) {
    const refNode = this.getNode(insertData)
    refNode.parent.insertAfter({ data }, refNode)
  }

  remove(data, isSaveChildNode, isNode) {
    const treeNode = isNode ? data : this.getNode(data)

    if (treeNode && treeNode.parent) {
      if (treeNode === this.currentNode) {
        this.currentNode = null
      }

      if (isSaveChildNode && treeNode.childNodes) {
        treeNode.childNodes.forEach((child) => {
          treeNode.parent.insertChild({ data: child.data })
        })
      }

      treeNode.parent.removeChild(treeNode)
    }
  }

  append(data, parentData, index) {
    const parentNode = parentData ? this.getNode(parentData) : this.root

    if (parentNode) {
      const child = parentNode.insertChild({ data }, index)
      data._isNewNode && this.registerNode(child)
    }
  }

  setDefaultCheckedKey(newValue) {
    if (newValue !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newValue
      this._initDefaultCheckedNodes()
    }
  }

  _initDefaultCheckedNodes() {
    const defaultCheckedKeys = this.defaultCheckedKeys || []
    const nodesMap = this.nodesMap

    defaultCheckedKeys.forEach((checkedKey) => {
      const node = nodesMap[checkedKey]

      node && node.setChecked(true, !this.checkStrictly)
    })
  }

  _initDefaultCheckedNode(node) {
    const defaultCheckedKeys = this.defaultCheckedKeys || []

    ~defaultCheckedKeys.indexOf(node.key) && node.setChecked(true, !this.checkStrictly)
  }

  getCheckedKeys(leafOnly = false) {
    return this.getCheckedNodes(leafOnly).map((node) => (node || {})[this.key])
  }

  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((node) => (node || {})[this.key])
  }

  deregisterNode(node) {
    const key = this.key
    if (!key || !node || !node.data) {
      return
    }

    node.childNodes.forEach((child) => {
      this.deregisterNode(child)
    })

    delete this.nodesMap[node.key]
  }

  registerNode(node) {
    const key = this.key
    if (!key || !node || !node.data) {
      return
    }

    const nodeKey = node.key
    if (nodeKey !== undefined) {
      this.nodesMap[nodeKey] = node
    }
  }

  getCheckedNodes(leafOnly = false, includeHalfChecked = false, isNode = false) {
    const checkedNodes = []

    const walkTree = (node) => {
      const childNodes = node.root ? node.root.childNodes : node.childNodes

      childNodes.forEach((child) => {
        const { checked, indeterminate, isLeaf, data } = child

        if ((checked || (includeHalfChecked && indeterminate)) && (!leafOnly || (leafOnly && isLeaf))) {
          checkedNodes.push(isNode ? child : data)
        }

        walkTree(child)
      })
    }

    walkTree(this)

    return checkedNodes
  }

  getHalfCheckedNodes() {
    const nodes = []

    const walkTree = (node) => {
      const childNodes = node.root ? node.root.childNodes : node.childNodes

      childNodes.forEach((child) => {
        const { indeterminate, data } = child

        indeterminate && nodes.push(data)

        walkTree(child)
      })
    }

    walkTree(this)

    return nodes
  }

  _getAllNodes() {
    const allNodes = []
    const nodesMap = this.nodesMap

    Object.keys(nodesMap).forEach((nodeKey) => {
      hasOwn.call(nodesMap, nodeKey) && allNodes.push(nodesMap[nodeKey])
    })

    return allNodes
  }

  updateChildren(key, data) {
    const node = this.nodesMap[key]
    if (!node) {
      return
    }

    const childNodes = node.childNodes

    for (let i = childNodes.length - 1; i >= 0; i--) {
      this.remove(childNodes[i].data)
    }

    for (let i = 0, len = data.length; i < len; i++) {
      const child = data[i]
      this.append(child, node.data)
    }
  }

  _setCheckedKeys(key, leafOnly = false, checkedKeys = {}) {
    const nodes = this._getAllNodes().sort((prevNode, nextNode) => nextNode.level - prevNode.level)
    const cache = Object.create(null)
    const keys = Object.keys(checkedKeys)

    nodes.forEach((node) => {
      node.setChecked(false, false)
    })

    for (let i = 0, len = nodes.length; i < len; i++) {
      const node = nodes[i]
      const nodeKey = node.data[key].toString()
      let checked = ~keys.indexOf(nodeKey)

      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false)
        }
      } else {
        let parentNode = node.parent

        while (parentNode && parentNode.level > 0) {
          cache[parentNode.data[key]] = true
          parentNode = parentNode.parent
        }

        if (node.isLeaf || this.checkStrictly) {
          node.setChecked(true, false)
        } else if (leafOnly) {
          node.setChecked(false, false)

          const walkTree = (node) => {
            const childNodes = node.childNodes

            childNodes.forEach((child) => {
              !child.isLeaf && child.setChecked(false, false)

              walkTree(child)
            })
          }

          walkTree(node)
        } else {
          node.setChecked(true, true)
        }
      }
    }
  }

  setDefaultExpandedKeys(keys) {
    keys = keys || []
    this.defaultExpandedKeys = keys

    keys.forEach((key) => {
      const node = this.getNode(key)
      node && node.expand(null, this.autoExpandParent)
    })
  }

  setCheckedKeys(keys, leafOnly = false) {
    this.defaultCheckedKeys = keys
    const checkedKeys = {}

    keys.forEach((key) => {
      checkedKeys[key] = true
    })

    this._setCheckedKeys(this.key, leafOnly, checkedKeys)
  }

  setCheckedNodes(array, leafOnly = false) {
    const key = this.key
    const checkedKeys = {}

    array.forEach((item) => {
      checkedKeys[(item || {})[key]] = true
    })

    this._setCheckedKeys(key, leafOnly, checkedKeys)
  }

  setChecked(data, checked, deep) {
    const node = this.getNode(data)

    node && node.setChecked(!!checked, deep)
  }

  setCurrentNode(currentNode) {
    const prevNode = this.currentNode

    if (prevNode) {
      prevNode.isCurrent = false
    }

    this.currentNode = currentNode

    if (currentNode) {
      this.currentNode.isCurrent = true
    }
  }

  getCurrentNode() {
    return this.currentNode
  }

  setCurrentNodeKey(key) {
    if (isNull(key)) {
      this.currentNode && (this.currentNode.isCurrent = false)
      this.currentNode = null

      return
    }

    const node = this.getNode(key)

    node && this.setCurrentNode(node)
  }

  setUserCurrentNode(node) {
    const key = node[this.key]
    const currNode = this.nodesMap[key]

    this.setCurrentNode(currNode)
  }

  getData(data) {
    return (this.getNode(data) || {}).data
  }

  getAllData() {
    const children = this.props.children
    const walkTree = (nodes) => {
      return nodes.map((node) => {
        return { ...node.data, [children]: walkTree(node.childNodes) }
      })
    }

    return walkTree(this.root.childNodes)
  }
}
