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

import type { ICascaderNodeRenderlessParams, ICascaderPanelNode } from '@/types'

export const comptCheckPath =
  ({ api, parent, state }: Pick<ICascaderNodeRenderlessParams, 'api' | 'parent' | 'state'>) =>
  (): boolean => {
    if (!state.config.checkStrictly) {
      return false
    }

    return parent.state.checkedNodePaths.some((checkedPath) => api.isInPath(checkedPath))
  }

export const handleExpand =
  ({ api, parent, props, state }: Pick<ICascaderNodeRenderlessParams, 'api' | 'parent' | 'props' | 'state'>) =>
  (): void => {
    const { multiple, checkStrictly } = state.config

    if ((!checkStrictly && state.isDisabled) || props.node.loading) {
      return
    }

    if (state.config.lazy && !props.node.loaded) {
      parent.lazyLoad(props.node, () => {
        if (!state.isLeaf) {
          api.handleExpand()
        }

        if (multiple && state.isLeaf) {
          const checked = state.isLeaf ? props.node.checked : false
          api.handleMultiCheckChange(Boolean(checked))
        } else {
          parent.handleExpand(props.node)
        }
      })
    } else {
      parent.handleExpand(props.node)
    }
  }

export const handleCheckChange =
  ({ api, parent, dispatch, state }: Pick<ICascaderNodeRenderlessParams, 'api' | 'parent' | 'dispatch' | 'state'>) =>
  () => {
    parent.handleCheckChange(state.value)
    api.handleExpand()
    dispatch('TinyCascaderPanel', 'close', false)
  }

export const handleMultiCheckChange =
  ({ parent, props }: Pick<ICascaderNodeRenderlessParams, 'parent' | 'props'>) =>
  (checked: boolean): void => {
    props.node.doCheck(checked)
    parent.calculateMultiCheckedValue()
  }

export const isInPath =
  (props: ICascaderNodeRenderlessParams['props']) =>
  (pathNodes: ICascaderPanelNode[]): boolean => {
    const selectedPathNode = pathNodes[props.node.level - 1] || {}
    return selectedPathNode.uid === props.node.uid
  }

// mobile-first 模板调用，只处理单选和父子关联
export const handleNodeClick =
  ({ state, api }: Pick<ICascaderNodeRenderlessParams, 'api' | 'state'>) =>
  () => {
    if (!state.isDisabled) {
      if (state.isLeaf) {
        api.handleCheckChange()
      } else {
        api.handleExpand()
      }
    }
  }
