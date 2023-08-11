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

import { copyArray } from '../common/object'
import { getFlatData } from '../transfer'

export const showFilterData = (data, sign) => {
  const getChild = (data, sign) =>
    data.filter((node) => {
      if (node.children && node.children.length > 0) {
        node.children = getChild(node.children, sign)
      }

      return node[sign]
    })

  return getChild(data, sign)
}

export const getFilterData =
  ({ api, props, state, Table, Tree }) =>
  () => {
    if (state.renderType === Table) {
      let tableData = []

      if (props.filterMethod) {
        tableData = props.data.filter((item) => props.filterMethod(state.query, item))
      } else {
        tableData = props.data
      }

      state.pagerTotal = tableData

      if (props.showPager) {
        const pageSize = state.sizes || 10
        const totalPageCount = Math.ceil(tableData.length / pageSize)

        if (state.internalPage > totalPageCount) {
          api.handlePageChange(totalPageCount)
        }

        if (totalPageCount > 0 && state.internalPage === 0) {
          state.internalPage = 1
        }

        if (totalPageCount > 0 && state.currentPage === 0) {
          state.currentPage = 1
        }

        return tableData.slice((state.internalPage - 1) * pageSize, pageSize * state.internalPage)
      } else {
        return tableData
      }
    } else if (state.renderType === Tree) {
      return showFilterData(api.getFilterTreeData(copyArray(props.data)), 'visible')
    } else {
      return props.data.filter((item) => {
        if (typeof props.filterMethod === 'function') {
          return props.filterMethod(state.query, item)
        } else {
          const label = item[state.labelProp] || item[state.keyProp].toString()

          return label.toLowerCase().includes(state.query.toLowerCase())
        }
      })
    }
  }

export const getCheckableData =
  ({ api, state, Tree }) =>
  () => {
    if (state.renderType === Tree) {
      return api.getTreeCheckableData(state.filteredData)
    } else {
      return state.filteredData.filter((item) => !item[state.disabledProp])
    }
  }

export const getCheckedSummary =
  ({ props, state, Tree }) =>
  () => {
    const checkedLength = state.checked.length
    let dataLength = 0

    if (state.renderType === Tree) {
      dataLength = getFlatData(copyArray(props.data)).length
    } else {
      dataLength = props.data.length
    }

    const { noChecked, hasChecked } = props.format

    if (noChecked && hasChecked) {
      return checkedLength > 0
        ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
        : noChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength)
    } else {
      return `${checkedLength} / ${dataLength}`
    }
  }

export const getDeteminate = (state) => () =>
  state.checked.length > 0 && state.checked.length < state.checkableData.length

export const watchChecked =
  ({ api, emit, state }) =>
  ({ value, oldvalue }) => {
    api.updateAllChecked()

    if (state.checkChangeByUser) {
      const movedKeys = value.concat(oldvalue).filter((v) => !value.includes(v) || !oldvalue.includes(v))

      emit('checked-change', value, movedKeys)
    } else {
      emit('checked-change', value)

      state.checkChangeByUser = true
    }
  }

export const watchData =
  ({ api, props, state, Tree }) =>
  (value) => {
    state.pagerTotal = value

    const checked = []

    if (state.renderType === Tree && !props.treeOp.checkStrictly) {
      state.checked = api.getStrictData(state.filteredData).keys
    } else {
      const filteredDataKeys = state.filteredData.map((item) => item[state.keyProp])

      state.checked.forEach((item) => {
        if (filteredDataKeys.includes(item)) {
          checked.push(item)
        }
      })

      state.checkChangeByUser = false
      state.checked = checked
    }
  }

export const watchDefaultCheckded =
  ({ api, props, state, Tree }) =>
  ({ value, oldvalue }) => {
    if (oldvalue && value.length === oldvalue.length && value.every((item) => oldvalue.includes(item))) {
      return
    }

    if (state.renderType === Tree && !props.treeOp.checkStrictly) {
      if (!state.render) {
        return
      }

      state.render.defaultCheckedKeys = state.checked = api.getStrictData(state.filteredData).keys
    } else {
      const checked = []
      const checkableDataKeys = state.checkableData.map((item) => item[state.keyProp])

      value.forEach((item) => {
        if (checkableDataKeys.includes(item)) {
          checked.push(item)
        }
      })

      state.checkChangeByUser = false
      state.checked = checked
    }
  }

export const updateAllChecked =
  ({ state, Table, Tree }) =>
  () => {
    const checkableDataKeys = state.checkableData.map((item) => item[state.keyProp])

    state.allChecked =
      checkableDataKeys &&
      checkableDataKeys.length > 0 &&
      checkableDataKeys.every((item) => state.checked.includes(item))

    if (state.renderType === Table || state.renderType === Tree) {
      state.render.data = state.filteredData

      if (state.renderType === Tree) {
        state.render.defaultCheckedKeys = state.checked
      } else {
        const pageCheckedKeys = []

        state.filteredData.forEach((data) => {
          state.checked.includes(data[state.keyProp]) && pageCheckedKeys.push(data[state.keyProp])
        })

        state.render.defaultChecked = pageCheckedKeys
      }
    }
  }

export const handleAllCheckedChange =
  ({ state, Table, Tree, vm }) =>
  (value) => {
    state.checked = value ? state.checkableData.map((item) => item[state.keyProp]) : []

    if (state.renderType === Table) {
      state.render.defaultChecked = state.checked
    } else if (state.renderType === Tree) {
      state.checked.length !== 0
        ? (state.render.defaultCheckedKeys = state.checked)
        : vm.$refs.plugin.setCheckedKeys(state.checked)
    }
  }

export const clearQuery = (state) => () => {
  if (state.inputIcon === 'circle-close') {
    state.query = ''
  }
}

export const checkedEvent = (state) => (value, disabled) => {
  if (disabled) {
    return
  }

  const index = state.checked.indexOf(value)
  let tmpArray = [...state.checked]

  if (~index) {
    tmpArray.splice(index, 1)
    state.checked = tmpArray
  } else {
    tmpArray.push(value)
    state.checked = tmpArray
  }
}

export const setPosition =
  ({ parent, state }) =>
  (trend, event) => {
    event.stopPropagation()
    event.preventDefault()

    const checkedKey = []
    const uncheckedKey = []

    state.filteredData.forEach((item) => {
      if (~state.checked.indexOf(item[state.keyProp])) {
        checkedKey.push(item[state.keyProp])
      } else {
        uncheckedKey.push(item[state.keyProp])
      }
    })

    const result = trend === 'up' ? [...checkedKey, ...uncheckedKey] : [...uncheckedKey, ...checkedKey]
    parent.$parent.$emit('update:modelValue', result)
  }

export const selectChange = (state) => (keys) => (state.checked = keys)

export const handlePageChange = (state) => (currentPage) => {
  state.pageChangeData = true
  state.internalPage = currentPage
  state.currentPage = currentPage
}

export const getFilterTreeData =
  ({ props, state }) =>
  (data) => {
    const getChild = (data, query) => {
      data.forEach((node) => {
        const label = node[state.labelProp]

        if (typeof props.treeOp.filterNodeMethod === 'function') {
          const result = props.treeOp.filterNodeMethod(state.query, node)

          if (typeof result !== 'boolean') {
            node.visible = true
          } else {
            node.visible = result
          }
        } else {
          node.visible = label.toLowerCase().includes(query.toLowerCase())
        }

        if (node.children && node.children.length > 0) {
          getChild(node.children, query)
        }

        if (!node.visible && node.children && node.children.length) {
          let allHidden = true

          allHidden = !node.children.some((child) => child.visible)
          node.visible = allHidden === false
        }
      })
    }

    getChild(data, state.query)

    return data
  }

export const getTreeCheckableData = (state) => (data) => {
  const nodes = []

  const getChild = (data) => {
    data.forEach((node) => {
      !node[state.disabledProp] && nodes.push(node)
      if (node.children && node.children.length > 0) {
        getChild(node.children)
      }
    })
  }

  getChild(data)

  return nodes
}

export const getStrictData =
  ({ props, state }) =>
  (data) => {
    const keys = []

    const strictData = (data, isStrict) => {
      data.forEach((node) => {
        if (props.defaultChecked.includes(node[state.keyProp])) {
          node.isCheckable = true
          keys.push(node[state.keyProp])
        } else {
          node.isCheckable = isStrict
          isStrict && keys.push(node[state.keyProp])
        }

        if (node.children && node.children.length > 0) {
          strictData(node.children, node.isCheckable)
        }
      })
    }

    strictData(data, false)

    return { data, keys }
  }

export const sizesChange = (state) => (sizes) => (state.sizes = sizes)

export const setExpandCache = (state) => (node, expand) => {
  const { expanded, keyProp } = state
  const index = state.expanded.indexOf(node[keyProp])

  if (expand) {
    index === -1 && expanded.push(node[keyProp])
  } else {
    index !== -1 && expanded.splice(index, 1)
  }
}
