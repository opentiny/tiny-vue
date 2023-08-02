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

import { isEqual } from '../common/object'
import { capitalize } from '../common/string'
import { isNull } from '../common/type'

let uid = 0

export default class Node {
  constructor(data, config, parentNode) {
    Object.assign(this, { data, config, uid: uid++ })

    this.parent = parentNode || null
    this.level = !this.parent ? 1 : this.parent.level + 1

    this.initState()
    this.initChildren()
  }

  initState() {
    const { value, label } = this.config

    this.value = this.data[value]
    this.label = this.data[label]
    this.pathNodes = this.calculatePathNodes()
    this.path = this.pathNodes.map((node) => node.value)
    this.pathLabels = this.pathNodes.map((node) => node.label)

    // lazy load
    Object.assign(this, { loading: false, loaded: false })
  }

  initChildren() {
    const { config } = this
    const childrenKey = config.children
    const childrenData = this.data[childrenKey]

    this.hasChildren = Array.isArray(childrenData)
    this.children = (childrenData || []).map((child) => new Node(child, config, this))
  }

  get isLeaf() {
    const { data, loaded, hasChildren, children, config } = this
    const { lazy, leaf } = config

    if (lazy) {
      const leafValue = data[leaf]
      const isLeaf = !isNull(leafValue) ? leafValue : loaded ? !children.length : false

      this.hasChildren = !isLeaf

      return isLeaf
    }

    return !hasChildren
  }

  get isDisabled() {
    const { data, parent, config } = this
    const { checkStrictly, disabled } = config
    const disabledKey = disabled

    return data[disabledKey] || (!checkStrictly && parent && parent.isDisabled)
  }

  calculatePathNodes() {
    const nodes = [this]
    let parentNode = this.parent

    while (parentNode) {
      nodes.unshift(parentNode)
      parentNode = parentNode.parent
    }

    return nodes
  }

  getValue() {
    return this.value
  }

  getPath() {
    return this.path
  }

  getValueByOption() {
    return this.config.emitPath ? this.getPath() : this.getValue()
  }

  getText(allLevels, separator) {
    return allLevels ? this.pathLabels.join(separator) : this.label
  }

  isSameNode(checkedValue) {
    const value = this.getValueByOption()
    const isMultiple = this.config.multiple && Array.isArray(checkedValue)

    return isMultiple ? checkedValue.some((val) => isEqual(val, value)) : isEqual(checkedValue, value)
  }

  emit(eventName, ...args) {
    const { parent } = this
    const handlerName = `onChild${capitalize(eventName)}`

    if (parent) {
      parent[handlerName] && parent[handlerName](...args)
      parent.emit(eventName, ...args)
    }
  }

  broadcast(eventName, ...args) {
    const handlerName = `onParent${capitalize(eventName)}`

    this.children.forEach((child) => {
      if (child) {
        child.broadcast(eventName, ...args)
        child[handlerName] && child[handlerName](...args)
      }
    })
  }

  onParentCheck(checked) {
    !this.isDisabled && this.setCheckState(checked)
  }

  onChildCheck() {
    const { children } = this
    const validChildren = children.filter((child) => !child.isDisabled)
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false

    this.setCheckState(checked)
  }

  syncCheckState(checkedValue) {
    const value = this.getValueByOption()
    const checked = this.isSameNode(checkedValue, value)

    this.doCheck(checked)
  }

  setCheckState(checked) {
    const totalNum = this.children.length

    const checkedNum = this.children.reduce((prevChild, nextChild) => {
      const num = nextChild.checked ? 1 : nextChild.indeterminate ? 0.5 : 0
      return prevChild + num
    }, 0)

    this.checked = checked
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0
  }

  doCheck(isChecked) {
    if (this.checked !== isChecked) {
      if (this.config.checkStrictly) {
        this.checked = isChecked
      } else {
        this.broadcast('check', isChecked)
        this.setCheckState(isChecked)
        this.emit('check')
      }
    }
  }
}
