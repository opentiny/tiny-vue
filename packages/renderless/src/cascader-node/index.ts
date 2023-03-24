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

export const comptCheckPath = ({ api, parent, state }) => () => {
  if (!state.config.checkStrictly) {
    return false
  }

  return parent.state.checkedNodePaths.some((checkedPath) => api.isInPath(checkedPath))
}

export const handleExpand = ({ api, parent, props, state }) => () => {
  const { multiple, checkStrictly } = state.config

  if ((!checkStrictly && state.isDisabled) || props.node.loading) {
    return
  }

  if (state.config.lazy && !props.node.loaded) {
    parent.lazyLoad(props.node, () => {
      if (!state.isLeaf) {
        api.handleExpand()
      }

      if (multiple) {
        const checked = state.isLeaf ? props.node.checked : false
        api.handleMultiCheckChange(checked)
      }
    })
  } else {
    parent.handleExpand(props.node)
  }
}

export const handleCheckChange = ({ api, parent, dispatch, state }) => () => {
  parent.handleCheckChange(state.value)
  api.handleExpand()
  dispatch('TinyCascaderPanel', 'close', false)
}

export const handleMultiCheckChange = ({ parent, props }) => (checked) => {
  props.node.doCheck(checked)
  parent.calculateMultiCheckedValue()
}

export const isInPath = (props) => (pathNodes) => {
  const selectedPathNode = pathNodes[props.node.level - 1] || {}
  return selectedPathNode.uid === props.node.uid
}
