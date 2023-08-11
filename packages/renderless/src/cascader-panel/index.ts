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

import { isNull } from '../common/type'
import { isEqual } from '../common/object'
import { isEmpty } from '../cascader'
import { KEY_CODE, CASCADER } from '../common'

export const watchCheckedValue =
  ({ api, emit, props, state }) =>
  (value) => {
    if (!isEqual(value, props.modelValue)) {
      state.checkStrictly && api.calculateCheckedNodePaths()

      emit('update:modelValue', value)
      emit('change', value)
    }
  }

export const initStore =
  ({ api, props, state, Store }) =>
  () => {
    if (state.config.lazy && isEmpty(props.options)) {
      api.lazyLoad()
    } else {
      state.store = new Store(props.options, state.config)
      state.menus = [state.store.getNodes()]

      api.syncMenuState()
    }
  }

export const syncCheckedValue =
  ({ api, props, state }) =>
  () => {
    if (!isEqual(props.modelValue, state.checkedValue)) {
      state.checkedValue = props.modelValue
      api.syncMenuState()
    }
  }

export const syncMenuState =
  ({ api, nextTick, state }) =>
  () => {
    api.syncActivePath()

    state.multiple && api.syncMultiCheckState()
    state.checkStrictly && api.calculateCheckedNodePaths()

    nextTick(() => api.scrollIntoView)
  }

export const syncMultiCheckState =
  ({ api, state }) =>
  () => {
    const nodes = api.getFlattedNodes(state.leafOnly)

    nodes.forEach((node) => {
      node.syncCheckState(state.checkedValue)
    })
  }

export const syncActivePath =
  ({ api, state }) =>
  () => {
    if (!isEmpty(state.activePath)) {
      const nodes = state.activePath.map((node) => api.getNodeByValue(node.getValue()))

      if (isNull(nodes[0])) {
        state.activePath = []
      } else {
        api.expandNodes(nodes)
      }
    } else if (!isEmpty(state.checkedValue)) {
      const value = state.multiple ? state.checkedValue[0] : state.checkedValue
      const checkedNode = api.getNodeByValue(value) || {}
      const nodes = (checkedNode.pathNodes || []).slice(0, -1)

      api.expandNodes(nodes)
    } else {
      state.activePath = []
      state.menus = [state.store.getNodes()]
    }
  }

export const expandNodes = (api) => (nodes) => nodes.forEach((node) => api.handleExpand(node, true))

export const coerceTruthyValueToArray = (val) => {
  if (Array.isArray(val)) {
    return val
  } else if (val) {
    return [val]
  }

  return []
}

export const calculateCheckedNodePaths =
  ({ api, state }) =>
  () => {
    const checkedValues = state.multiple ? coerceTruthyValueToArray(state.checkedValue) : [state.checkedValue]

    state.checkedNodePaths = checkedValues.map((v) => {
      const checkedNode = api.getNodeByValue(v)
      return checkedNode ? checkedNode.pathNodes : []
    })
  }

export const focusNode = (api) => (el) => {
  if (!el) {
    return
  }

  el.focus()
  !api.isLeaf(el) && el.click()
}

export const getMenuIndex = () => (el) => {
  if (!el) {
    return
  }

  const pieces = el.id.split('-')
  return Number(pieces[pieces.length - 2])
}

export const checkNode = (api) => (el) => {
  if (!el) {
    return
  }

  const input = el.querySelector('input')

  if (input) {
    input.click()
  } else if (api.isLeaf(el)) {
    el.click()
  }
}

export const handleKeyDown =
  ({ api, emit, menus }) =>
  (event) => {
    const { target, keyCode } = event

    if (keyCode === KEY_CODE.ArrowUp) {
      const prev = api.getSibling(target, -1)
      focusNode(prev)
    } else if (keyCode === KEY_CODE.ArrowDown) {
      const next = api.getSibling(target, 1)
      focusNode(next)
    } else if (keyCode === KEY_CODE.ArrowLeft) {
      const preMenu = menus[getMenuIndex(target) - 1]

      if (preMenu) {
        const expandedNode = preMenu.$el.querySelector(CASCADER.CascaderNodeExpand)
        focusNode(expandedNode)
      }
    } else if (keyCode === KEY_CODE.ArrowRight) {
      const nextMenu = menus[getMenuIndex(target) + 1]

      if (nextMenu) {
        const firstNode = nextMenu.$el.querySelector(CASCADER.CascaderNodeTab)
        focusNode(firstNode)
      }
    } else if (keyCode === KEY_CODE.Enter) {
      checkNode(target)
    } else if (~[KEY_CODE.Escape, KEY_CODE.Tab].indexOf(keyCode)) {
      emit('close')
    }
  }

export const handleExpand =
  ({ emit, state }) =>
  (node, silent) => {
    const { level } = node
    const path = state.activePath.slice(0, level - 1)
    const menus = state.menus.slice(0, level)

    if (!node.isLeaf) {
      path.push(node)
      menus.push(node.children)
    }

    state.activePath = path
    state.menus = menus

    if (!silent) {
      const pathValues = path.map((node) => node.getValue())

      emit('active-item-change', pathValues)
      emit('expand-change', pathValues)
    }
  }

export const handleCheckChange = (state) => (value) => {
  state.checkedValue = value
}

export const lazyLoad =
  ({ api, $parent, state, Store }) =>
  (node, onFullfiled) => {
    if (!node) {
      node = node || { root: true, level: 0 }
      state.store = new Store([], state.config)
      state.menus = [state.store.getNodes()]
    }

    node.loading = true

    const afterLoad = (dataList) => {
      const parent = node.root ? null : node
      dataList && dataList.length && state.store.appendNodes(dataList, parent)

      node.loading = false
      node.loaded = true

      if (Array.isArray(state.checkedValue)) {
        const nodeValue = state.checkedValue[state.loadCount++]
        const valueKey = state.config.value
        const leafKey = state.config.leaf

        if (Array.isArray(dataList) && dataList.filter((item) => item[valueKey] === nodeValue).length > 0) {
          const checkedNode = state.store.getNodeByValue(nodeValue)

          if (!checkedNode.data[leafKey]) {
            api.lazyLoad(checkedNode, () => {
              api.handleExpand(checkedNode)
            })
          }

          if ($parent.computePresentText && state.loadCount === state.checkedValue.length) {
            $parent.computePresentText()
          }
        }
      }

      onFullfiled && onFullfiled(dataList)
    }

    state.config.lazyLoad(node, afterLoad)
  }

export const calculateMultiCheckedValue =
  ({ api, state }) =>
  () => {
    state.checkedValue = api.getCheckedNodes(state.leafOnly).map((node) => node.getValueByOption())
  }

export const scrollIntoView =
  ({ menus }) =>
  () => {
    menus.forEach((menu) => {
      const menuElement = menu.$el

      if (menuElement) {
        const container = menuElement.querySelector(CASCADER.ScrollWrap)
        const activeNode =
          menuElement.querySelector(CASCADER.CascaderActice) || menuElement.querySelector(CASCADER.ActivePath)

        scrollIntoView(container, activeNode)
      }
    })
  }

export const getNodeByValue = (state) => (val) => state.store.getNodeByValue(val)

export const getFlattedNodes = (state) => (leafOnly) => {
  const cached = !state.config.lazy
  return state.store.getFlattedNodes(leafOnly, cached)
}

export const getCheckedNodes =
  ({ api, state }) =>
  (leafOnly, cascaderCheckedValue) => {
    const isCascaderChecked = (str, checkedValue) => {
      let flag = true

      if (!state.multiple || !checkedValue) {
        return flag
      }

      flag = false

      if (!Array.isArray(checkedValue)) {
        return flag
      }
      for (let i = 0; i < checkedValue.length; i++) {
        if (Array.isArray(checkedValue[i]) && checkedValue[i].length) {
          flag = checkedValue[i][checkedValue[i].length - 1] === str
        }

        if (flag) {
          break
        }
      }
      return flag
    }

    if (state.multiple) {
      const nodes = api.getFlattedNodes(leafOnly)
      return nodes.filter((node) => node.checked && isCascaderChecked(node.value, cascaderCheckedValue))
    }

    return isEmpty(state.checkedValue) ? [] : [api.getNodeByValue(state.checkedValue)]
  }

export const clearCheckedNodes =
  ({ api, state }) =>
  () => {
    const { multiple, emitPath } = state.config

    if (multiple) {
      api
        .getCheckedNodes(state.leafOnly)
        .filter((node) => !node.isDisabled)
        .forEach((node) => node.doCheck(false))

      api.calculateMultiCheckedValue()
    } else {
      state.checkedValue = emitPath ? [] : null
    }
  }

export const isLeaf = () => (el) => !el.getAttribute('data-owns')

export const getSibling = (el, distance) => {
  const { parentNode } = el

  if (parentNode) {
    const siblings = parentNode.querySelectorAll(CASCADER.CascaderNodeTab)
    const index = Array.prototype.indexOf.call(siblings, el)

    return siblings[index + distance] || null
  }

  return null
}

export const valueEquals = (a, b) => {
  if (a === b) {
    return true
  }
  if (!Array.isArray(b)) {
    return false
  }
  if (!Array.isArray(a)) {
    return false
  }
  if (a.length !== b.length) {
    return false
  }

  for (let i = 0, len = a.length; i !== len; ++i) {
    if (a[i] !== b[i]) {
      return false
    }
  }

  return true
}
