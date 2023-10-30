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

import { merge } from '../../object'
import { markNodeData, NODE_KEY } from './util'
import { indexOf } from '../../array'
import { hasOwn, typeOf } from '../../type'

const defaultChildrenKey = 'children'
const defaultIsLeafKey = 'isLeaf'

const getPropertyFromData = (node, prop) => {
  const props = node.store.props
  const dataData = node.data || {}
  const config = props[prop]

  if (typeOf(config) === 'string') {
    return dataData[config]
  } else if (typeOf(config) === 'function') {
    return config(dataData, node)
  } else if (typeof config === 'undefined') {
    const dataProp = dataData[prop]
    return dataProp === undefined ? '' : dataProp
  }
}

export const getChildState = (node) => {
  let all = true
  let none = true
  let allWithoutDisable = true

  for (let i = 0, len = node.length; i < len; i++) {
    const { checked, disabled, indeterminate } = node[i]

    if (checked !== true || indeterminate) {
      all = false

      if (!disabled) {
        allWithoutDisable = false
      }
    }

    if (checked !== false || indeterminate) {
      none = false
    }
  }

  const half = !all && !none

  return { all, none, allWithoutDisable, half }
}

const reInitChecked = (node) => {
  const childNodes = node.childNodes

  if (childNodes.length === 0) {
    return
  }

  const { all, none, half } = getChildState(childNodes)

  if (all) {
    Object.assign(node, { checked: true, indeterminate: false })
  } else if (half) {
    Object.assign(node, { checked: false, indeterminate: true })
  } else if (none) {
    Object.assign(node, { checked: false, indeterminate: false })
  }

  const parent = node.parent

  if (!parent || parent.level === 0) {
    return
  }

  !node.store.checkStrictly && reInitChecked(parent)
}

let nodeIdSeed = 0

export default class Node {
  constructor(options) {
    this.init(options)

    const store = this.store

    if (!store) {
      throw new Error('[TINY-Tree][Node]store is required!')
    }

    store.registerNode(this)

    const props = store.props

    if (props && typeof props.isLeaf !== 'undefined') {
      const isLeaf = getPropertyFromData(this, defaultIsLeafKey)

      if (typeof isLeaf === 'boolean') {
        this.isLeafByUser = isLeaf
      }
    }

    this.initExpandState()

    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data)
    }

    if (!this.data) {
      return
    }

    this.expandByDefaultKeys()

    const { key, lazy, currentNodeKey } = store

    if (key && currentNodeKey !== undefined && this.key === currentNodeKey) {
      store.currentNode = this
      store.currentNode.isCurrent = true
    }

    lazy && store._initDefaultCheckedNode(this)

    this.updateLeafState()
  }

  initExpandState() {
    const { store, data, level } = this

    if (store.lazy !== true && data) {
      this.setData(data)

      if (store.defaultExpandAll) {
        this.expanded = true
        this.updateMethod(this, 'expanded')
      }
    } else if (level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand()
    }
  }

  init(options) {
    this.id = nodeIdSeed++
    this.checked = false
    this.indeterminate = false
    this.expanded = false
    this.visible = true
    this.isCurrent = false
    this.text = null
    this.data = null
    this.parent = null
    this.updateMethod = () => {}

    Object.keys(options).forEach((key) => {
      if (hasOwn.call(options, key)) {
        this[key] = options[key]
      }
    })
    const isLeafKey = this.store?.props?.isLeaf || defaultIsLeafKey
    this.isLeaf = !!(this.data && this.data[isLeafKey])
    this.loaded = false
    this.loading = false
    this.childNodes = []
    this.level = this.parent ? this.parent.level + 1 : 0
  }

  expandByDefaultKeys() {
    const { defaultExpandedKeys, key, autoExpandParent } = this.store

    if (key && defaultExpandedKeys && ~defaultExpandedKeys.indexOf(this.key)) {
      this.expand(null, autoExpandParent)
    }
  }

  setData(data) {
    if (!Array.isArray(data)) {
      markNodeData(this, data)
    }

    this.data = data
    this.childNodes = []
    let children

    if (this.level === 0 && Array.isArray(this.data)) {
      children = this.data
    } else {
      children = getPropertyFromData(this, defaultChildrenKey) || []
    }

    for (let i = 0, len = children.length; i < len; i++) {
      const data = children[i]

      this.insertChild({ data })
    }
  }

  get key() {
    const { store, data } = this
    const nodeKey = store.key

    if (data) {
      return data[nodeKey]
    }

    return null
  }

  get label() {
    return getPropertyFromData(this, 'label')
  }

  get disabled() {
    return getPropertyFromData(this, 'disabled')
  }

  get nextSibling() {
    const parent = this.parent

    if (parent) {
      const childNodes = parent.childNodes
      const index = childNodes.indexOf(this)

      if (~index) {
        return childNodes[index + 1]
      }
    }

    return null
  }

  get previousSibling() {
    const parent = this.parent

    if (parent) {
      const childNodes = parent.childNodes
      const index = childNodes.indexOf(this)

      if (~index) {
        return index > 0 ? childNodes[index - 1] : null
      }
    }

    return null
  }

  remove() {
    const parent = this.parent

    parent && parent.removeChild(this)
  }

  contains(target, deep = true) {
    const walkTree = (parent) => {
      const children = parent.childNodes || []
      let isContain = false

      for (let i = 0, len = children.length; i < len; i++) {
        const child = children[i]

        if (child === target || (deep && walkTree(child))) {
          isContain = true
          break
        }
      }

      return isContain
    }

    return walkTree(this)
  }

  insertChild(child, index, batch) {
    if (!child) {
      throw new Error('[TINY-Tree] insertChild error: child is required.')
    }

    const insertNode = ({ arr, index, item }) => {
      if (typeof index === 'undefined' || index < 0) {
        arr.push(item)
      } else {
        arr.splice(index, 0, item)
      }
    }

    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true)

        if (!~children.indexOf(child.data)) {
          insertNode({ arr: children, index, item: child.data })
        }
      }

      merge(child, { parent: this, store: this.store })

      child = new Node(child)
    }

    child.level = this.level + 1

    insertNode({ arr: this.childNodes, index, item: child })

    this.updateLeafState()
  }

  insertBefore(child, beforeNode) {
    let index

    if (beforeNode) {
      index = this.childNodes.indexOf(beforeNode)
    }

    this.insertChild(child, index)
  }

  insertAfter(child, afterNode) {
    let index

    if (afterNode) {
      index = this.childNodes.indexOf(afterNode)
      if (~index) {
        index += 1
      }
    }

    this.insertChild(child, index)
  }

  removeChild(child) {
    const children = this.getChildren() || []
    let index = children.indexOf(child.data)

    if (~index) {
      children.splice(index, 1)
    }

    index = this.childNodes.indexOf(child)

    if (~index) {
      this.store && this.store.deregisterNode(child)
      child.parent = null
      this.childNodes.splice(index, 1)
    }

    this.updateLeafState()
  }

  removeChildByData(data) {
    let removeNode = null

    for (let i = 0, len = this.childNodes.length; i < len; i++) {
      const child = this.childNodes[i]

      if (child.data === data) {
        removeNode = child
        break
      }
    }

    removeNode && this.removeChild(removeNode)
  }

  expand(callback, expandParent) {
    const expandNodes = () => {
      if (expandParent) {
        let parentNode = this.parent

        while (parentNode.level > 0) {
          parentNode.expanded = true
          parentNode.updateMethod(parentNode, 'expanded')
          parentNode = parentNode.parent
        }
      }

      this.expanded = true
      this.updateMethod(this, 'expanded')
      callback && callback()
    }

    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (Array.isArray(data)) {
          if (this.checked) {
            this.setChecked(true, true)
          } else if (!this.store.checkStrictly) {
            reInitChecked(this)
          }
          expandNodes()
        }
      })
    } else {
      expandNodes()
    }
  }

  doCreateChildren(array, defaultProps = {}) {
    array.forEach((data) => {
      this.insertChild(merge({ data }, defaultProps), undefined, true)
    })
  }

  collapse() {
    this.expanded = false
    this.updateMethod(this, 'expanded')
  }

  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded
  }

  updateLeafState() {
    const { store, loaded, isLeafByUser } = this
    const lazy = store.lazy

    if (lazy === true && loaded !== true && typeof isLeafByUser !== 'undefined') {
      this.isLeaf = isLeafByUser
      return
    }

    const childs = this.childNodes

    if (!lazy || (lazy === true && loaded === true)) {
      this.isLeaf = !childs || childs.length === 0
      return
    }

    this.isLeaf = false
  }

  getChildren(forceInit = false) {
    const { level, data } = this

    if (level === 0) {
      return data
    }

    if (!data) {
      return null
    }

    const props = this.store.props
    let childrenKey = defaultChildrenKey

    if (props) {
      childrenKey = props.children || defaultChildrenKey
    }

    if (data[childrenKey] === undefined) {
      data[childrenKey] = null
    }

    if (forceInit && !data[childrenKey]) {
      data[childrenKey] = []
    }

    return data[childrenKey]
  }

  setChecked(value, isDeepChecked, recursion, passValue, checkEasily) {
    this.checked = value === true
    this.indeterminate = value === 'half'

    const { checkStrictly, checkDescendants } = this.store

    if (checkStrictly && !checkEasily) {
      return
    }

    let ret = this.setCheckedInner({
      checkDescendants,
      value,
      isDeepChecked,
      passValue,
      checkEasily
    })
    let returnFlag = ret.returnFlag
    passValue = ret.passValue
    value = ret.value

    if (returnFlag || (checkStrictly && checkEasily)) {
      return
    }

    const parentNode = this.parent
    if (!parentNode || parentNode.level === 0) {
      return
    }

    if (!recursion) {
      reInitChecked(parentNode)
    }
  }

  setCheckedInner({ checkDescendants, value, isDeepChecked, passValue, checkEasily }) {
    let returnFlag = false

    if (this.shouldLoadData() && !checkDescendants) {
      return { value, passValue, returnFlag }
    }

    const { all, allWithoutDisable } = getChildState(this.childNodes)

    if (!this.isLeaf && !all && allWithoutDisable && !checkEasily) {
      this.checked = false
      value = false
    }

    const batchSetChecked = () => {
      if (isDeepChecked) {
        const childNodes = this.childNodes

        for (let i = 0, len = childNodes.length; i < len; i++) {
          const childNode = childNodes[i]

          passValue = passValue || value !== false

          const isCheck = childNode.disabled ? childNode.checked : passValue

          childNode.setChecked(isCheck, isDeepChecked, true, passValue, checkEasily)
        }

        const { half, all } = getChildState(childNodes)

        if (!all && !checkEasily) {
          this.checked = all
          this.indeterminate = half
        }
      }
    }

    if (this.shouldLoadData()) {
      const afterLoad = () => {
        batchSetChecked()
        reInitChecked(this)
      }

      this.loadData(afterLoad, { checked: value !== false })

      returnFlag = true
    } else {
      batchSetChecked()
    }

    return { value, passValue, returnFlag }
  }

  updateChildren() {
    const children = this.getChildren() || []
    const oldChildren = this.childNodes.map((child) => child.data)
    const newChildrenMap = {}
    const newChildren = []

    children.forEach((item, index) => {
      const key = item[NODE_KEY]
      const isNodeExists = !!key && indexOf(oldChildren, key, (item, data) => item[NODE_KEY] === data) >= 0

      if (isNodeExists) {
        newChildrenMap[key] = { index, data: item }
      } else {
        newChildren.push({ index, data: item })
      }
    })

    if (!this.store.lazy) {
      oldChildren.forEach((item) => {
        if (!newChildrenMap[item[NODE_KEY]]) {
          this.removeChildByData(item)
        }
      })
    }

    newChildren.forEach(({ data, index }) => {
      this.insertChild({ data }, index)
    })

    this.updateLeafState()
  }

  loadData(callback, defaultProps = {}) {
    const { lazy, load } = this.store

    if (lazy === true && load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
      this.loading = true

      this.store.load(this, (children) => {
        this.loading = false
        this.loaded = true
        this.childNodes = []

        this.doCreateChildren(children, defaultProps)
        this.updateLeafState()

        callback && callback.call(this, children)
        typeof this.store.afterLoad === 'function' && this.store.afterLoad({ data: children })
      })
    } else {
      callback && callback.call(this)
    }
  }

  getPathData(key) {
    const nodes = [key ? this.data[key] : this.data]
    let parentNode = this.parent

    while (parentNode && parentNode.parent) {
      nodes.unshift(key ? parentNode.data[key] : parentNode.data)
      parentNode = parentNode.parent
    }

    return nodes
  }

  getPathText(key, separator = ',') {
    return (this.getPathData(key) || []).join(separator)
  }
}
