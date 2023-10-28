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
import { ICascaderPanelConfig, ICascaderPanelData, ICascaderPanelNodePropValue, ICascaderPanelNodeValue } from '@/types'

import { isEqual } from '../common/object'
import { capitalize } from '../common/string'
import { isNull } from '../common/type'

let uid = 0

export default class Node {
  parent: Node | null
  level: number
  data!: ICascaderPanelData
  config!: ICascaderPanelConfig
  uid!: number
  value!: ICascaderPanelNodeValue
  label!: string
  pathNodes!: Node[]
  path!: ICascaderPanelNodeValue[]
  pathLabels!: string[]
  loaded!: boolean
  loading!: boolean
  hasChildren!: boolean
  children!: Node[]

  checked?: boolean
  indeterminate?: boolean
  root?: boolean

  constructor(data: ICascaderPanelData, config: ICascaderPanelConfig, parentNode?: Node | null) {
    Object.assign(this, { data, config, uid: uid++ })

    this.parent = parentNode || null
    this.level = !this.parent ? 1 : this.parent.level + 1

    this.initState()
    this.initChildren()
  }

  initState() {
    const { value, label } = this.config

    this.value = this.data[value] as ICascaderPanelNodeValue
    this.label = String(this.data[label])
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
    this.children = ((childrenData as ICascaderPanelData[]) || []).map((child) => new Node(child, config, this))
  }

  get isLeaf(): boolean {
    const { data, loaded, hasChildren, children, config } = this
    const { lazy, leaf } = config

    if (lazy) {
      const leafValue = data[leaf]
      const isLeaf = !isNull(leafValue) ? leafValue : loaded ? !children.length : false

      this.hasChildren = !isLeaf

      return Boolean(isLeaf)
    }

    return !hasChildren
  }

  /**
   * 当前节点是否被disable
   */
  get isDisabled(): boolean {
    const { data, parent, config } = this
    const { checkStrictly, disabled } = config
    const disabledKey = disabled

    return Boolean(data[disabledKey] || (!checkStrictly && parent && parent.isDisabled))
  }

  calculatePathNodes() {
    const nodes: Node[] = [this]
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

  getValueByOption(): ICascaderPanelNodePropValue {
    return this.config.emitPath ? this.getPath() : this.getValue()
  }

  /**
   *
   * @param allLevels 输入框中是否显示选中值的完整路径
   * @param separator 分割符
   * @returns 选中值的路径
   */
  getText(allLevels: boolean, separator: string) {
    return allLevels ? this.pathLabels.join(separator) : this.label
  }

  isSameNode(checkedValue: ICascaderPanelNodePropValue) {
    const value = this.getValueByOption()
    const isMultiple = this.config.multiple && Array.isArray(checkedValue)

    return isMultiple
      ? checkedValue.some((val) => isEqual(val, value as object))
      : isEqual(checkedValue as object, value as object)
  }

  emit(eventName: string, ...args) {
    const { parent } = this
    const handlerName = `onChild${capitalize(eventName)}`

    if (parent) {
      parent[handlerName] && parent[handlerName](...args)
      parent.emit(eventName, ...args)
    }
  }

  broadcast(eventName: string, ...args) {
    const handlerName = `onParent${capitalize(eventName)}`

    this.children.forEach((child) => {
      if (child) {
        child.broadcast(eventName, ...args)
        child[handlerName] && child[handlerName](...args)
      }
    })
  }

  onParentCheck(checked: boolean) {
    !this.isDisabled && this.setCheckState(checked)
  }

  onChildCheck() {
    const { children } = this
    const validChildren = children.filter((child) => !child.isDisabled)
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false

    this.setCheckState(checked)
  }

  syncCheckState(checkedValue: ICascaderPanelNodePropValue) {
    const value = this.getValueByOption()
    const checked = this.isSameNode(checkedValue)

    this.doCheck(checked)
  }

  setCheckState(checked: boolean) {
    const totalNum = this.children.length

    const checkedNum = this.children.reduce((prevChild, nextChild) => {
      const num = nextChild.checked ? 1 : nextChild.indeterminate ? 0.5 : 0
      return prevChild + num
    }, 0)

    this.checked = checked
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0
  }

  doCheck(isChecked: boolean) {
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
