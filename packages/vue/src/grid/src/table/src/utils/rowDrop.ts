/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
    let insertRecords = _vm.getInsertRecords()
    // 包含新增数据的表格不可再拖动行顺序
    if (insertRecords.length) return false
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
