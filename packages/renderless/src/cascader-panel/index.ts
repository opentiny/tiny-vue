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
import scrollIntoViewCommon from '../common/deps/scroll-into-view'
import {
  ICascaderPanelApi,
  ICascaderPanelData,
  ICascaderPanelLazyLoadNode,
  ICascaderPanelNode,
  ICascaderPanelNodePropValue,
  ICascaderPanelNodeValue,
  ICascaderPanelRenderlessParams,
  ICascaderPanelState
} from '@/types'

export const watchCheckedValue =
  ({ api, emit, props, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'emit' | 'props' | 'state'>) =>
  (value: ICascaderPanelNodePropValue | null): void => {
    if (!isEqual(value as Object, props.modelValue as Object)) {
      state.checkStrictly && api.calculateCheckedNodePaths()

      emit('update:modelValue', value)
      emit('change', value)
    }
  }

export const initStore =
  ({ api, props, state, Store }: Pick<ICascaderPanelRenderlessParams, 'api' | 'props' | 'state' | 'Store'>) =>
  (): void => {
    if (state.config.lazy && isEmpty(props.options)) {
      api.lazyLoad()
    } else {
      state.store = new Store(props.options, state.config)
      state.menus = [state.store.getNodes()]

      api.syncMenuState()
    }
  }

export const syncCheckedValue =
  ({ api, props, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    if (!isEqual(props.modelValue as Object, state.checkedValue as Object)) {
      state.checkedValue = props.modelValue
      api.syncMenuState()
    }
  }

export const syncMenuState =
  ({ api, nextTick, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'nextTick' | 'state'>) =>
  (): void => {
    api.syncActivePath()

    state.multiple && api.syncMultiCheckState()
    state.checkStrictly && api.calculateCheckedNodePaths()

    nextTick(() => api.scrollIntoView)
  }

export const syncMultiCheckState =
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    const nodes = api.getFlattedNodes(state.leafOnly)

    nodes.forEach((node) => {
      if (state.checkedValue) {
        node.syncCheckState(state.checkedValue)
      }
    })
  }

export const syncActivePath =
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    if (!isEmpty(state.activePath)) {
      const nodes = state.activePath
        .map((node) => api.getNodeByValue(node.getValue()))
        .filter((node) => node) as ICascaderPanelNode[]

      if (isNull(nodes[0])) {
        state.activePath = []
      } else {
        api.expandNodes(nodes)
      }
    } else if (!isEmpty(state.checkedValue)) {
      const value = state.multiple ? (state.checkedValue as ICascaderPanelNodeValue[])[0] : state.checkedValue
      const checkedNode = api.getNodeByValue(value) || ({} as { pathNodes?: ICascaderPanelNode['pathNodes'] })
      const nodes = (checkedNode.pathNodes || []).slice(0, -1)

      api.expandNodes(nodes)
    } else {
      state.activePath = []
      state.menus = [state.store.getNodes()]
    }
  }

export const expandNodes =
  (api: ICascaderPanelApi) =>
  (nodes: ICascaderPanelNode[]): void =>
    nodes.forEach((node) => api.handleExpand(node, true))

export const coerceTruthyValueToArray = <T>(val: T | T[]): T[] => {
  if (Array.isArray(val)) {
    return val
  } else if (val) {
    return [val]
  }

  return []
}

export const calculateCheckedNodePaths =
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    const checkedValues = state.multiple ? coerceTruthyValueToArray(state.checkedValue) : [state.checkedValue]

    state.checkedNodePaths = checkedValues.map((v) => {
      const checkedNode = api.getNodeByValue(v)
      return checkedNode ? checkedNode.pathNodes : []
    })
  }

export const focusNode =
  (api: ICascaderPanelApi) =>
  (el: HTMLElement | null): void => {
    if (!el) {
      return
    }

    el.focus()
    !api.isLeaf(el) && el.click()
  }

export const getMenuIndex =
  () =>
  (el: Element): number | undefined => {
    if (!el) {
      return
    }

    const pieces = el.id.split('-')
    return Number(pieces[pieces.length - 2])
  }

export const checkNode =
  (api: ICascaderPanelApi) =>
  (el: HTMLElement): void => {
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
  ({ api, emit, menus }: Pick<ICascaderPanelRenderlessParams, 'api' | 'emit' | 'menus'>) =>
  (event: KeyboardEvent): void => {
    const { target, keyCode } = event as KeyboardEvent & { target: HTMLElement }

    if (keyCode === KEY_CODE.ArrowUp) {
      const prev = getSibling(target, -1)
      api.focusNode(prev)
    } else if (keyCode === KEY_CODE.ArrowDown) {
      const next = getSibling(target, 1)
      api.focusNode(next)
    } else if (keyCode === KEY_CODE.ArrowLeft) {
      const preMenu = menus[Number(api.getMenuIndex(target)) - 1]

      if (preMenu) {
        const expandedNode = preMenu.$el.querySelector(CASCADER.CascaderNodeExpand) as HTMLElement
        api.focusNode(expandedNode)
      }
    } else if (keyCode === KEY_CODE.ArrowRight) {
      const nextMenu = menus[Number(api.getMenuIndex(target)) + 1]

      if (nextMenu) {
        const firstNode = nextMenu.$el.querySelector(CASCADER.CascaderNodeTab) as HTMLElement
        api.focusNode(firstNode)
      }
    } else if (keyCode === KEY_CODE.Enter) {
      api.checkNode(target)
    } else if (~[KEY_CODE.Escape, KEY_CODE.Tab].indexOf(keyCode)) {
      emit('close')
    }
  }

export const handleExpand =
  ({ emit, state }: Pick<ICascaderPanelRenderlessParams, 'emit' | 'state'>) =>
  (node: ICascaderPanelNode, silent?: boolean): void => {
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

export const handleCheckChange =
  (state: ICascaderPanelState) =>
  (value: ICascaderPanelNodePropValue): void => {
    state.checkedValue = value
  }

export const lazyLoad =
  ({ api, $parent, state, Store }: Pick<ICascaderPanelRenderlessParams, 'api' | '$parent' | 'state' | 'Store'>) =>
  (currentNode?: ICascaderPanelNode, onFullfiled?: (dataList: ICascaderPanelData[]) => void) => {
    let node = currentNode as ICascaderPanelLazyLoadNode | ICascaderPanelNode

    if (!node) {
      node = node || { root: true, level: 0 }
      state.store = new Store([], state.config)
      state.menus = [state.store.getNodes()]
    }

    node.loading = true

    const afterLoad = (dataList: ICascaderPanelData[]) => {
      const parent = node.root ? null : (node as null | ICascaderPanelNode)
      dataList && dataList.length && state.store.appendNodes(dataList, parent)

      node.loading = false
      node.loaded = true

      if (Array.isArray(state.checkedValue)) {
        const nodeValue = state.checkedValue[state.loadCount++]
        const valueKey = state.config.value
        const leafKey = state.config.leaf

        if (Array.isArray(dataList) && dataList.filter((item) => item[valueKey] === nodeValue).length > 0) {
          const checkedNode = state.store.getNodeByValue(nodeValue)

          if (!checkedNode?.data[leafKey]) {
            api.lazyLoad(checkedNode as ICascaderPanelNode, () => {
              api.handleExpand(checkedNode as ICascaderPanelNode)
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
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (): void => {
    state.checkedValue = api.getCheckedNodes(state.leafOnly).map((node) => node.getValueByOption())
  }

export const scrollIntoView =
  ({ menus }: Pick<ICascaderPanelRenderlessParams, 'menus'>) =>
  (): void => {
    menus.forEach((menu) => {
      const menuElement = menu.$el

      if (menuElement) {
        const container = menuElement.querySelector(CASCADER.ScrollWrap)
        const activeNode =
          menuElement.querySelector(CASCADER.CascaderActice) || menuElement.querySelector(CASCADER.ActivePath)

        scrollIntoViewCommon(container, activeNode)
      }
    })
  }

export const getNodeByValue =
  (state: ICascaderPanelState) =>
  (val: ICascaderPanelNodePropValue | null): ICascaderPanelNode | null =>
    state.store.getNodeByValue(val)

export const getFlattedNodes =
  (state: ICascaderPanelState) =>
  (leafOnly: boolean): ICascaderPanelNode[] => {
    const cached = !state.config.lazy
    return state.store.getFlattedNodes(leafOnly, cached)
  }

export const getCheckedNodes =
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (leafOnly: boolean, cascaderCheckedValue?: ICascaderPanelNodePropValue): ICascaderPanelNode[] => {
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
        if (Array.isArray(checkedValue[i]) ) {
          if (checkedValue[i].length) {
            flag = checkedValue[i][checkedValue[i].length - 1] === str
          }
        } else {
          flag = checkedValue[i] === str
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

    const node = api.getNodeByValue(state.checkedValue)

    return (isEmpty(state.checkedValue) || !node) ? [] : [node]
  }

export const clearCheckedNodes =
  ({ api, state }: Pick<ICascaderPanelRenderlessParams, 'api' | 'state'>) =>
  (): void => {
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

export const isLeaf =
  () =>
  (el: Element): boolean =>
    !el.getAttribute('data-owns')

export const getSibling = (el: Element, distance: number): HTMLElement | null => {
  const { parentNode } = el

  if (parentNode) {
    const siblings = parentNode.querySelectorAll(CASCADER.CascaderNodeTab) as NodeListOf<HTMLElement>
    const index = Array.prototype.indexOf.call(siblings, el)

    return siblings[index + distance] || null
  }

  return null
}

export const valueEquals = (a: ICascaderPanelNodePropValue, b: ICascaderPanelNodePropValue): boolean => {
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
