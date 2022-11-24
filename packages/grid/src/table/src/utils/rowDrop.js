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
import { findTree } from '@opentiny/vue-renderless/grid/static/'
import Modal from '@opentiny/vue-modal'
import GlobalConfig from '../../../config'

function handleIfScrollYLoadTruthy({ isScrollYLoad, _vm, selfRow, prevTrElem, targetTrElem }) {
  if (!isScrollYLoad) {
    return
  }

  // 虚拟滚动拖拽处理
  const actIndex = _vm.tableFullData.indexOf(selfRow)

  _vm.tableFullData.splice(actIndex, 1)

  if (prevTrElem) {
    const prevRow = _vm.getRowNode(prevTrElem).item
    const parentIdx = _vm.tableFullData.indexOf(prevRow)
    const sleftIdx = _vm.tableFullData.indexOf(selfRow)

    _vm.tableFullData.splice(parentIdx + (sleftIdx < parentIdx ? 1 : 0), 0, selfRow)
  } else {
    _vm.tableFullData.unshift(selfRow)
  }

  targetTrElem.remove()
}

function createHandlerOnEnd({ _vm, refresh }) {
  return (event) => {
    let options = { children: 'children' }
    let targetTrElem = event.item
    let { parentNode: wrapperElem, previousElementSibling: prevTrElem } = targetTrElem
    let tableTreeData = _vm.data || _vm.tableData
    let selfRow = _vm.getRowNode(targetTrElem).item
    let selfNode = findTree(tableTreeData, (row) => row === selfRow, options)
    let isScrollYLoad = _vm.scrollYLoad

    if (!isScrollYLoad) {
      if (prevTrElem) {
        // 移动到节点
        let prevRow = _vm.getRowNode(prevTrElem).item
        let prevNode = findTree(tableTreeData, (row) => row === prevRow, options)
        if (findTree(selfRow[options.children], (row) => prevRow === row, options)) {
          // 错误的移动
          let oldTrElem = wrapperElem.children[event.oldIndex]
          wrapperElem.insertBefore(targetTrElem, oldTrElem)

          return Modal.message({
            message: GlobalConfig.i18n('ui.grid.error.dargSelf'),
            status: 'error'
          })
        }

        let currRow = selfNode.items.splice(selfNode.index, 1)[0]
        if (_vm.hasTreeExpand(prevRow)) {
          // 移动到当前的子节点
          prevRow[options.children].splice(0, 0, currRow)
        } else {
          // 移动到相邻节点
          prevNode.items.splice(prevNode.index + (selfNode.index < prevNode.index ? 0 : 1), 0, currRow)
          prevNode.items = [].concat(prevNode.items)
        }
      } else {
        // 移动到第一行
        let currRow = selfNode.items.splice(selfNode.index, 1)[0]
        tableTreeData.unshift(currRow)
        _vm.tableFullData = [].concat(tableTreeData)
      }
    }

    handleIfScrollYLoadTruthy({ isScrollYLoad, _vm, selfRow, prevTrElem, targetTrElem })
    // 如果变动了树层级，需要刷新数据
    _vm.$emit('row-drop-end', event, _vm, _vm.scrollYLoad ? tableTreeData : _vm.tableFullData)
    refresh && _vm.data && _vm.refreshData()
  }
}

export { createHandlerOnEnd }
