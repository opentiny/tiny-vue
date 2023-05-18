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

import { mapTree } from '../grid/static'
import { copyArray } from '../common/object'

export const dialogTitle = ({ constants, props, t }) => () => props.title || t(constants.DIALOG_TITLE)

export const showDialog = (state) => () => (state.boxVisibility = true)

export const hideDialog = ({ api, state, vm, props }) => () => {
  if (!props.keepSelectedNodes) {
    state.currentCheckNode.forEach((item) => {
      const isNode = state.listItem.filter((data) => data.id === item.id)

      if (isNode.length) {
        vm.$refs.tree.setChecked(item, true, true)

        if (item.disabled !== undefined) {
          item.disabled = false
        }
      } else {
        vm.$refs.tree.setChecked(item, false, true)
      }
    })

    state.getNodeValue = copyArray(state.listItem)

    if (state.getNodeValue.length === props.maxItem) {
      api.disabledTreeNode(state.getNodeValue, true)
    } else if (state.getNodeValue.length < props.maxItem) {
      api.disabledTreeNode(state.getNodeValue, false)
    }

    state.currentCheckNode = []
  }

  state.boxVisibility = false
}

export const sureNodevalue = (state) => () => {
  state.listItem = state.getNodeValue.slice()
  state.currentCheckNode = []
  state.boxVisibility = false
}

export const filterNode = () => (value, data) => data.label.includes(value)

export const getValue = ({ api, props, state }) => (value) => {
  if (!props.keepSelectedNodes) {
    state.currentCheckNode.push(value)
  }

  let index = -1

  state.getNodeValue.forEach((data, indexx) => {
    if (data.id === value.id) {
      index = indexx
    }
  })

  index !== -1 ? state.getNodeValue.splice(index, 1) : state.getNodeValue.push(value)

  if (state.getNodeValue.length === props.maxItem) {
    api.disabledTreeNode(state.getNodeValue, true)
  } else if (state.getNodeValue.length < props.maxItem) {
    api.disabledTreeNode(state.getNodeValue, false)
  }
}

export const disabledTreeNode = (state) => (arr, isDisabled) => {
  state.datas.forEach((item) => {
    if (!item.children) {
      const index = arr.filter((data) => data.id === item.id)

      if (!index.length) {
        item.disabled = isDisabled
      }
    } else {
      item.children.forEach((item) => {
        const index = arr.filter((data) => data.id === item.id)

        if (!index.length) {
          item.disabled = isDisabled
        }
      })
    }
  })
}

export const initData = ({ state, props, service, api }) => () => {
  let data = props.data

  if (!data && typeof service.getMenuDataSync === 'function') {
    const menuData = service.getMenuDataSync()
    data = api.setMenuKey({ newData: [], menuData })
  }

  state.datas = mapTree(data || [], (item) => ({ ...item, disabled: false }))
}

export const disabledParentNode = (state) => () => {
  state.datas.forEach((item) => {
    if (item.children) {
      item.disabled = true
    }
  })
}

export const initService = ({ props, service }) => {
  const $service = service || { base: {} }

  return {
    getMenuDataSync: props.getMenuDataSync || $service.base.getMenuDataSync
  }
}
