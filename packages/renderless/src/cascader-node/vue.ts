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

import type {
  ICascaderNodeApi,
  ICascaderNodeProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils,
  ICascaderNodeRenderlessParams,
  ICascaderNodeState
} from '@/types'
import {
  comptCheckPath,
  handleExpand,
  isInPath,
  handleCheckChange,
  handleMultiCheckChange,
  handleNodeClick
} from './index'

export const api = ['state', 'handleMultiCheckChange', 'handleCheckChange', 'handleExpand', 'handleNodeClick']

export const renderless = (
  props: ICascaderNodeProps,
  { computed, reactive, inject }: ISharedRenderlessParamHooks,
  { dispatch }: ISharedRenderlessParamUtils
): ICascaderNodeApi => {
  const parent = inject('panel') as ICascaderNodeRenderlessParams['parent']
  const api = {} as ICascaderNodeApi
  const state = reactive({
    config: computed(() => parent.state.config),
    isLeaf: computed(() => props.node.isLeaf),
    isDisabled: computed(() => props.node.isDisabled),
    checkedValue: computed(() => parent.state.checkedValue),
    isChecked: computed(() => props.node.isSameNode(state.checkedValue)),
    inActivePath: computed(() => api.isInPath(parent.state.activePath)),
    inCheckedPath: computed(() => api.comptCheckPath()),
    value: computed(() => props.node.getValueByOption()),
    nodeLabel: computed(() => {
      return parent.state.renderLabelFn
        ? parent.state.renderLabelFn({ node: props.node, data: props.node.data })
        : props.node.label
    })
  }) as ICascaderNodeState

  Object.assign(api, {
    state,
    isInPath: isInPath(props),
    handleExpand: handleExpand({ api, props, parent, state }),
    comptCheckPath: comptCheckPath({ api, parent, state }),
    handleCheckChange: handleCheckChange({ api, parent, dispatch, state }),
    handleMultiCheckChange: handleMultiCheckChange({ parent, props }),
    handleNodeClick: handleNodeClick({ state, api })
  })

  return api
}
