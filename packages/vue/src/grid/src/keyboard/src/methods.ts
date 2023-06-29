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
import { addClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import { arrayEach, arrayIndexOf, findTree, find } from '@opentiny/vue-renderless/grid/static/'
import { getCellValue, setCellValue, getCell, getRowNodes, getCellNodeIndex } from '@opentiny/vue-renderless/grid/utils'
import { extend } from '@opentiny/vue-renderless/common/object'
import { findLeft, findRight, processTarget } from './utils/moveTabSelected'
import {
  onCellMousedownSelectEditable,
  onCellMousedownSelect,
  onCellMousedownIndexColumn,
  onCellMousedownNotIndexColumn,
  handleCellMousedownEvent
} from './utils/triggerCellMousedownEvent'
import { handleHeaderCellMousedownEvent } from './utils/triggerHeaderCellMousedownEvent'

const removeCellClass = (bodyRef, clazz) =>
  arrayEach(bodyRef.$el.querySelectorAll('.' + clazz), (elem) => removeClass(elem, clazz))

const getCellIndex = ({ cell, elemStore, bodyList }) => {
  let trElem = cell.parentNode
  let cIndex = arrayIndexOf(trElem.children, cell)
  let leftBodyList = (elemStore['left-body-list'] || { children: [] }).children
  let rightBodyList = (elemStore['right-body-list'] || { children: [] }).children
  let rIndex = arrayIndexOf(bodyList, trElem)

  if (rIndex === undefined || rIndex === -1) {
    rIndex = arrayIndexOf(leftBodyList, trElem)
  }

  if (rIndex === undefined || rIndex === -1) {
    rIndex = arrayIndexOf(rightBodyList, trElem)
  }

  return { rIndex, cIndex }
}

const getModify = ({ offsetTop, offsetLeft, cWidth, cHeight }) => {
  let modifyDomStyle = (dom, styleOptions) => dom && Object.assign(dom.style, styleOptions)

  return (top, right, bottom, left) => {
    modifyDomStyle(top, { top: `${offsetTop}px`, left: `${offsetLeft}px`, width: `${cWidth}px` })
    modifyDomStyle(right, { top: `${offsetTop}px`, left: `${offsetLeft + cWidth}px`, height: `${cHeight}px` })
    modifyDomStyle(bottom, { top: `${offsetTop + cHeight}px`, left: `${offsetLeft}px`, width: `${cWidth}px` })
    modifyDomStyle(left, { top: `${offsetTop}px`, left: `${offsetLeft}px`, height: `${cHeight}px` })
  }
}

export default {
  // Tab键移动处理
  moveTabSelected(args, isLeft, event, edit) {
    let { editConfig, hasIndexColumn, tableData, visibleColumn } = this
    let params = { ...args }
    let columnIndex = visibleColumn.indexOf(params.column)
    let rowIndex = tableData.indexOf(params.row)
    let { targetColumn, targetColumnIndex, targetRow, targetRowIndex } = {}

    event.preventDefault()

    let checkColumn = (column) => !hasIndexColumn(column) && (edit ? column.editor : true)

    let args1 = { columnIndex, checkColumn, isLeft, tableData, rowIndex, targetColumn }

    Object.assign(args1, { targetRowIndex, targetColumnIndex, targetRow, visibleColumn })
    // 向左查找
    let ret = findLeft(args1)

    targetColumn = ret.targetColumn
    targetColumnIndex = ret.targetColumnIndex
    targetRow = ret.targetRow
    targetRowIndex = ret.targetRowIndex

    args1 = { checkColumn, columnIndex, isLeft, rowIndex, tableData, targetColumn }

    Object.assign(args1, { targetColumnIndex, targetRow, targetRowIndex, visibleColumn })
    // 向右查找
    ret = findRight(args1)

    targetColumn = ret.targetColumn
    targetColumnIndex = ret.targetColumnIndex
    targetRow = ret.targetRow
    targetRowIndex = ret.targetRowIndex

    args1 = { _vm: this, args, edit, editConfig, event, isLeft, params, rowIndex }

    Object.assign(args1, { targetColumn, targetColumnIndex, targetRow, targetRowIndex })

    processTarget(args1)
  },
  // 当前行方向键移动处理
  moveCurrentRow(isUpArrow, isDwArrow, event) {
    let { afterFullData, currentRow, treeConfig } = this
    let targetRow

    event.preventDefault()

    if (treeConfig) {
      let { index: curIndex, items: neighbors } = findTree(afterFullData, (row) => row === currentRow, treeConfig)

      if (isUpArrow && curIndex > 0) {
        targetRow = neighbors[curIndex - 1]
      } else if (isDwArrow && curIndex < neighbors.length - 1) {
        targetRow = neighbors[curIndex + 1]
      }
    } else {
      let curIndex = afterFullData.indexOf(currentRow)

      if (isUpArrow && curIndex > 0) {
        targetRow = afterFullData[curIndex - 1]
      } else if (isDwArrow && curIndex < afterFullData.length - 1) {
        targetRow = afterFullData[curIndex + 1]
      }
    }

    if (targetRow) {
      this.scrollToRow(targetRow).then(() => this.triggerCurrentRowEvent(event, { $table: this, row: targetRow }))
    }
  },
  // 可编辑方向键移动处理
  moveSelected({ args, isLeftArrow, isUpArrow, isRightArrow, isDownArrow, event }) {
    let { hasIndexColumn, tableColumn: visibleColumn, tableFullData: tableData } = this
    let params = { ...args }
    let column = params.column
    let columnIndex = visibleColumn.indexOf(column)

    event.preventDefault()

    if (isUpArrow && params.rowIndex) {
      params.row = tableData[--params.rowIndex]
    } else if (isDownArrow && params.rowIndex < tableData.length - 1) {
      params.row = tableData[++params.rowIndex]
    } else if (isLeftArrow && columnIndex) {
      for (let pos = columnIndex - 1; pos >= 0; pos--) {
        if (!hasIndexColumn(visibleColumn[pos])) {
          params.columnIndex = pos
          params.column = visibleColumn[pos]
          break
        }
      }
    } else if (isRightArrow) {
      for (let pos = columnIndex + 1; pos < visibleColumn.length; pos++) {
        if (!hasIndexColumn(visibleColumn[pos])) {
          params.columnIndex = pos
          params.column = visibleColumn[pos]
          break
        }
      }
    }

    getCell(this, params).then((resCell) => {
      params.cell = resCell

      this.handleSelected(params, event)
      this.scrollToRow(params.row, params.column, false, {
        isLeftArrow,
        isRightArrow,
        from: column
      })
    })
  },
  // 表头按下事件
  triggerHeaderCellMousedownEvent(event, params) {
    let { $el, elemStore, mouseConfig = {}, tableData } = this
    let headerList = elemStore['main-header-list'].children
    let bodyList = elemStore['main-body-list'].children
    let cell = params.cell
    let column = params.column
    let isIndex = column.type === 'index'
    let startCell = bodyList[0].querySelector(`.${column.id}`)
    let button = event.button
    let isLeftBtn = button === 0

    if (!isLeftBtn || !mouseConfig.checked) {
      return
    }

    if (isIndex) {
      this.handleAllChecked(event)
      this.closeMenu()
      return
    }

    event.preventDefault()
    event.stopPropagation()
    this.clearSelected(event)
    this.clearHeaderChecked()
    this.clearIndexChecked()
    handleHeaderCellMousedownEvent({ $el, _vm: this, bodyList, cell, headerList, startCell })
    this.handleHeaderChecked([[cell]])

    if (!bodyList.length) {
      this.closeMenu()
      return
    }

    let firstTr = bodyList[0]
    let lastTr = bodyList[bodyList.length - 1]
    let firstCell = firstTr.querySelector('.col__index')
    let lastCell = lastTr.querySelector(`.${column.id}`)

    params.rowIndex = 0
    params.row = tableData[0]
    getCell(this, params).then((cellRes) => {
      params.cell = cellRes
      this.handleSelected(params, event)
      let rowNodes = getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(lastTr.querySelector('.col__index')))
      this.handleIndexChecked(rowNodes)
      this.handleChecked(getRowNodes(bodyList, getCellNodeIndex(startCell), getCellNodeIndex(lastCell)))
    })
    this.closeMenu()
  },
  // 单元格按下事件
  triggerCellMousedownEvent(event, params) {
    let { $el, editConfig, editStore, elemStore, mouseConfig = {}, visibleColumn } = this
    let { actived, checked } = editStore
    let { button } = event
    let { cell, column, row } = params
    let isLeftBtn = button === 0
    let args

    if (editConfig && (actived.row !== row || !(editConfig.mode === 'cell' && actived.column === column)) && isLeftBtn && mouseConfig.checked) {
      event.preventDefault()
      event.stopPropagation()

      this.clearHeaderChecked()
      this.clearIndexChecked()

      let isIndex = column.type === 'index'
      let startCellNode = getCellNodeIndex(cell)
      let headerList = elemStore['main-header-list'].children
      let bodyList = elemStore['main-body-list'].children
      let cellFirstElementChild = cell.parentNode.firstElementChild
      let cellLastElementChild = cell.parentNode.lastElementChild
      let colIndex = [...cell.parentNode.children].indexOf(cell)
      let headStart = headerList[0].children[colIndex]
      args = { $el, _vm: this, bodyList, cell, cellFirstElementChild }

      Object.assign(args, { cellLastElementChild, headStart, headerList, isIndex, startCellNode })
      handleCellMousedownEvent(args)
      args = { _vm: this, bodyList, cell, cellLastElementChild }
      Object.assign(args, { event, headerList, isIndex, params, visibleColumn })
      onCellMousedownIndexColumn(args)
      onCellMousedownNotIndexColumn({ _vm: this, cell, column, event, headerList, isIndex, params })

      this.closeFilter()
      this.closeMenu()
    }

    args = { _vm: this, actived, cell, checked, column, editConfig }
    Object.assign(args, { event, isLeftBtn, mouseConfig, params, row })
    onCellMousedownSelectEditable(args)
    onCellMousedownSelect({ _vm: this, editConfig, event, mouseConfig, params })
  },
  // 清除所选中源状态
  _clearSelected(keep) {
    let {
      editStore: { selected },
      elemStore
    } = this

    if (!keep) {
      selected.row = null
      selected.column = null
    }

    let bodyElem = elemStore['main-body-list']
    let headerElem = elemStore['main-header-list']

    if (bodyElem) {
      let elem = bodyElem.querySelector('.col__selected')
      removeClass(elem, 'col__selected')
    }

    if (headerElem) {
      arrayEach(headerElem.querySelectorAll('.col__title-selected'), (elem) => removeClass(elem, 'col__title-selected'))
    }

    return this.$nextTick()
  },
  // 清除所有选中状态
  _clearChecked() {
    let { $refs, editStore, mouseConfig } = this
    let checked = editStore.checked

    if (!mouseConfig || !mouseConfig.checked) {
      return this.$nextTick()
    }

    editStore.checked = extend(true, {}, checked, {
      columns: [],
      rows: [],
      tColumns: [],
      tRows: []
    })

    let tableBody = $refs.tableBody

    tableBody.$refs.checkBorders.style.display = 'none'

    removeCellClass(tableBody, 'col__checked')

    return this.$nextTick()
  },
  _getMouseCheckeds() {
    let { rowNodes = [] } = this.editStore.checked
    let { rows = [], columns = [] } = {}
    let res = {
      rows,
      columns,
      rowNodes
    }

    if (rowNodes && rowNodes.length) {
      res.rows = rowNodes.map((arr) => this.getRowNode(arr[0].parentNode).item)
      res.columns = rowNodes[0].map((col) => this.getColumnNode(col).item)
    }

    return res
  },
  _getMouseSelecteds() {
    let { args, column } = this.editStore.selected

    if (!args || !column) {
      return null
    }

    return extend(true, {}, args)
  },
  // 处理所有选中
  handleChecked(rowNodes) {
    let { cHeight, cWidth, offsetLeft, offsetTop } = {}

    cWidth = cHeight = -2
    offsetTop = offsetLeft = 0

    this.clearChecked()

    arrayEach(rowNodes, (rowNode, rowIndex) => {
      arrayEach(rowNode, (colNode, colIndex) => {
        let firstRow = rowIndex === 0
        let firstCol = colIndex === 0

        if (firstRow) {
          if (firstCol) {
            offsetTop = colNode.offsetTop
            offsetLeft = colNode.offsetLeft
          }

          cWidth += colNode.offsetWidth
        }

        if (firstCol) {
          cHeight += colNode.offsetHeight
        }

        addClass(colNode, 'col__checked')
      })
    })

    let modify = getModify({ offsetTop, offsetLeft, cWidth, cHeight })
    let { tableBody } = this.$refs
    let { checkBorders, checkTop, checkRight, checkBottom, checkLeft } = tableBody.$refs

    modify(checkTop, checkRight, checkBottom, checkLeft)

    checkBorders.style.display = 'block'

    this.editStore.checked.rowNodes = rowNodes
  },
  handleAllChecked(event) {
    let { elemStore, mouseConfig = {}, tableData, visibleColumn } = this

    if (!mouseConfig.checked) {
      return
    }

    event.preventDefault()

    let column = find(visibleColumn, (col) => col.type === 'index') || visibleColumn[0]
    let selectorColumnId = `.${column.id}`
    let headerListElem = elemStore['main-header-list']
    let headerList = headerListElem.children
    let cell = headerListElem.querySelector(selectorColumnId)
    let bodyList = elemStore['main-body-list'].children
    let firstTrElem = bodyList[0]
    let firstCell = firstTrElem.querySelector(selectorColumnId)
    let lastTrElem = bodyList[bodyList.length - 1]
    let params = { $table: this, rowIndex: 0, row: tableData[0] }

    params.column = find(visibleColumn, (col) => col.property)
    params.columnIndex = this.getColumnIndex(params.column)

    getCell(this, params).then((resCell) => {
      params.cell = resCell

      this.handleSelected(params, event)

      this.handleHeaderChecked(getRowNodes(headerList, getCellNodeIndex(cell.nextElementSibling), getCellNodeIndex(cell.parentNode.lastElementChild)))
      this.handleIndexChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(lastTrElem.querySelector(selectorColumnId))))
      this.handleChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell.nextElementSibling), getCellNodeIndex(lastTrElem.lastElementChild)))
    })
  },
  handleIndexChecked(rowNodes) {
    this.clearIndexChecked()

    arrayEach(rowNodes, (rowNode) => {
      arrayEach(rowNode, (colNode) => {
        addClass(colNode, 'col__index-checked')
      })
    })

    this.editStore.indexs.rowNodes = rowNodes
  },
  _clearIndexChecked() {
    let indexCheckeds = this.elemStore['main-body-list'].querySelectorAll('.col__index-checked')
    let eachHandler = (colNode) => removeClass(colNode, 'col__index-checked')

    arrayEach(indexCheckeds, eachHandler)

    return this.$nextTick()
  },
  handleHeaderChecked(rowNodes) {
    this.clearHeaderChecked()

    arrayEach(rowNodes, (rowNode) => {
      arrayEach(rowNode, (colNode) => {
        addClass(colNode, 'col__title-checked')
      })
    })

    this.editStore.titles.rowNodes = rowNodes
  },
  _clearHeaderChecked() {
    let headerElem = this.elemStore['main-header-list']

    if (headerElem) {
      let eachHandler = (colNode) => removeClass(colNode, 'col__title-checked')

      arrayEach(headerElem.querySelectorAll('.col__title-checked'), eachHandler)
    }

    return this.$nextTick()
  },
  // 清空已复制的内容
  _clearCopyed() {
    let { $refs, editStore, keyboardConfig } = this
    let { copyed: editStoreCopyed } = editStore

    if (!keyboardConfig || !keyboardConfig.isCut) return this.$nextTick()

    let { tableBody } = $refs

    editStoreCopyed.cut = false
    editStoreCopyed.rows = []
    editStoreCopyed.columns = []

    tableBody.$refs.copyBorders.style.display = 'none'
    removeCellClass(tableBody, 'col__copyed')

    return this.$nextTick()
  },
  // 处理复制
  handleCopyed(cut) {
    let { editStore, tableColumn, tableData } = this
    let copyed = editStore.copyed
    let rowNodes = editStore.checked.rowNodes
    let { cHeight, cWidth, offsetLeft, offsetTop, rows = [], columns = [] } = {}

    cWidth = cHeight = -3
    offsetTop = offsetLeft = 0

    this.clearCopyed()

    if (!rowNodes) return

    if (rowNodes.length) {
      let firstRows = rowNodes[0]
      let firstCell = firstRows[0]
      let firstRowsLength = firstRows.length
      let { rowIndex, columnIndex } = getCellNodeIndex(firstCell)

      columns = tableColumn.slice(columnIndex, columnIndex + firstRowsLength)
      rows = tableData.slice(rowIndex, rowIndex + rowNodes.length)
    }

    arrayEach(rowNodes, (rowNode, rowIndex) => {
      arrayEach(rowNode, (colNode, colIndex) => {
        let isTop = rowIndex === 0
        let isLeft = colIndex === 0

        if (isTop) {
          if (isLeft) {
            offsetTop = colNode.offsetTop
            offsetLeft = colNode.offsetLeft
          }

          cWidth += colNode.offsetWidth
        }

        if (isLeft) {
          cHeight += colNode.offsetHeight
        }

        addClass(colNode, 'col__copyed')
      })
    })

    let modify = getModify({ offsetTop, offsetLeft, cWidth, cHeight })
    let { tableBody } = this.$refs
    let { copyBorders, copyTop, copyRight, copyBottom, copyLeft } = tableBody.$refs

    modify(copyTop, copyRight, copyBottom, copyLeft)

    copyBorders.style.display = 'block'

    copyed.cut = cut
    copyed.columns = columns
    copyed.rows = rows
    copyed.rowNodes = rowNodes
  },
  // 处理粘贴
  handlePaste() {
    let { editStore, elemStore, tableData, visibleColumn } = this
    let { copyed, selected } = editStore
    let { columns, cut, rows } = copyed

    if (!rows.length || !columns.length || !selected.row || !selected.column) return

    let { columnIndex, rowIndex } = selected.args

    arrayEach(rows, (row, rIndex) => {
      let targetRow = tableData[rowIndex + rIndex]

      if (targetRow) {
        arrayEach(columns, (column, cIndex) => {
          let targetColumn = visibleColumn[columnIndex + cIndex]

          targetColumn && setCellValue(targetRow, targetColumn, getCellValue(row, column))
          cut && setCellValue(row, column, null)
        })
      }
    })

    cut && this.clearCopyed()

    let cell = selected.args.cell
    let bodyList = elemStore['main-body-list'].children
    let { rIndex, cIndex } = getCellIndex({ cell, elemStore, bodyList })
    let maxIndex = bodyList.length - 1
    let curIndex = rIndex + rows.length - 1
    let targetTrElem = bodyList[curIndex > maxIndex ? maxIndex : curIndex]

    maxIndex = targetTrElem.children.length - 1
    curIndex = cIndex + columns.length - 1

    let targetCell = targetTrElem.children[curIndex > maxIndex ? maxIndex : curIndex]
    let targetCellNode = getCellNodeIndex(targetCell)
    let cellNode = getCellNodeIndex(cell)
    let rowNodes = getRowNodes(bodyList, cellNode, targetCellNode)

    this.handleChecked(rowNodes)
  }
}
