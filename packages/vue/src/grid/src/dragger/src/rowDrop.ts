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
import GlobalConfig from '../../config'
import { isVue2 } from '@opentiny/vue-common'

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

export const createHandlerOnEnd = ({ _vm, refresh }) => {
  return (event) => {
    const insertRecords = _vm.getInsertRecords()
    // 包含新增数据的表格不可再拖动行顺序
    if (insertRecords.length) {
      return false
    }
    const options = { children: 'children' }
    const targetTrElem = event.item
    const { parentNode: wrapperElem, previousElementSibling: prevTrElem } = targetTrElem
    // 这里优先使用用户通过props传递过来的表格数据，所以拖拽后会改变原始数据
    const tableTreeData = _vm.data || _vm.tableData
    const selfRow = _vm.getRowNode(targetTrElem).item
    const selfNode = findTree(tableTreeData, (row) => row === selfRow, options)
    const isScrollYLoad = _vm.scrollYLoad
    if (!isScrollYLoad) {
      if (prevTrElem) {
        // 移动到节点
        const prevRow = _vm.getRowNode(prevTrElem).item
        const prevNode = findTree(tableTreeData, (row) => row === prevRow, options)
        if (findTree(selfRow[options.children], (row) => prevRow === row, options)) {
          // 错误的移动
          const oldTrElem = wrapperElem.children[event.oldIndex]
          wrapperElem.insertBefore(targetTrElem, oldTrElem)

          return Modal.message({
            message: GlobalConfig.i18n('ui.grid.error.dargSelf'),
            status: 'error'
          })
        }

        const currRow = selfNode.items.splice(selfNode.index, 1)[0]
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
        const currRow = selfNode.items.splice(selfNode.index, 1)[0]
        tableTreeData.unshift(currRow)
        _vm.tableFullData = [].concat(tableTreeData)
      }
    }

    handleIfScrollYLoadTruthy({ isScrollYLoad, _vm, selfRow, prevTrElem, targetTrElem })
    // 如果变动了树层级，需要刷新数据
    _vm.$emit('row-drop-end', event, _vm, _vm.scrollYLoad ? tableTreeData : _vm.tableFullData)
    // 因为vue2劫持了数组方法，所以在data通过splice改变数组时（数组长度不变）会触发更新，但是vue3是浅层响应，所以需要通过传递数据让表格更新
    refresh && _vm.data && !isVue2 && _vm.refreshData(_vm.data)
  }
}

export const getSortColumns = (columns) => {
  const left = []
  const right = []
  const center = []

  columns.forEach((col) => {
    const fixed = col.fixed

    if (fixed === 'left') {
      left.push(col)
    } else if (fixed === 'right') {
      right.push(col)
    } else {
      center.push(col)
    }
  })

  return left.concat(center).concat(right)
}

export const onEndEvent = ({ event, _this }) => {
  const { item, newIndex, oldIndex } = event
  let { fullColumn, tableColumn } = _this.getTableColumn()
  const sortVisibleCols = getSortColumns(tableColumn)
  let targetThElem = item
  let wrapperElem = targetThElem.parentNode
  let newColumn = sortVisibleCols[newIndex]

  if (newColumn.fixed) {
    // 错误的移动
    if (newIndex > oldIndex) {
      for (let i = newIndex; i >= oldIndex; i--) {
        wrapperElem.insertBefore(targetThElem, wrapperElem.children[i])
      }
    } else {
      for (let i = newIndex; i <= oldIndex; i++) {
        wrapperElem.insertBefore(targetThElem, wrapperElem.children[i])
      }

      wrapperElem.insertBefore(wrapperElem.children[oldIndex], targetThElem)
    }

    return Modal.message({
      message: GlobalConfig.i18n('ui.grid.error.dargFixed'),
      status: 'error'
    })
  }
  // 转换真实索引
  let oldColumnIndex = _this.getColumnIndex(sortVisibleCols[oldIndex])
  let newColumnIndex = _this.getColumnIndex(sortVisibleCols[newIndex])
  // 移动到目标列
  let currCol = fullColumn.splice(oldColumnIndex, 1)[0]

  fullColumn.splice(newColumnIndex, 0, currCol)
  _this.loadColumn(fullColumn)
  _this.$emit('column-drop-end', event, _this)

  _this.isDragHeaderSorting && _this.$grid.toolBarVm && _this.$grid.toolBarVm.updateSetting()
}
