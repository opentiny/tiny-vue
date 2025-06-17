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

import { getRowid } from './common'
import { hasClass, getDomNode } from '@opentiny/utils'
import { getActualTarget } from '@opentiny/utils'
import { arrayIndexOf } from '../static'

const ATTR_NAME = 'data-rowid'
const CELL_CLS = '.tiny-grid-cell'
const ROW_CLS = '.tiny-grid-body__row'

export const isPx = (val) => val && /^\d+(px)?$/.test(val)

export const isScale = (val) => val && /^\d+%$/.test(val)

export const updateCellTitle = (event: Event, td: HTMLElement) => {
  const cellEl = td
    ? td.querySelector('.tiny-grid-cell-text') || td.querySelector(CELL_CLS)
    : (event.currentTarget as HTMLElement)?.querySelector(CELL_CLS)
  if (!cellEl) {
    return
  }
  const content = cellEl.innerText

  if (cellEl.getAttribute('title') !== content) {
    cellEl.setAttribute('title', content)
  }
}

export const rowToVisible = ($table, row) => {
  $table.$nextTick(() => {
    const { $refs, scrollYLoad, rowHeight, headerHeight, footerHeight, _tileInfo, _graphInfo } = $table
    const { tableBody: bodyVm } = $refs
    const { $el } = bodyVm
    const { map } = _tileInfo
    const { graphed } = _graphInfo
    const trEl = $el.querySelector(`[${ATTR_NAME}="${getRowid($table, row)}"]`)
    const visibleStart = headerHeight
    const visibleEnd = $el.clientHeight - footerHeight
    const scrollTop = $el.scrollTop

    let position, trHeight
    let flag = false

    if (scrollYLoad) {
      // 如果是虚拟渲染跨行滚动
      position = headerHeight + rowHeight * graphed.indexOf(map.get(row)) - scrollTop
      trHeight = rowHeight
      flag = true
    } else if (trEl) {
      position = trEl.offsetTop - scrollTop
      trHeight = trEl.clientHeight
      flag = true
    }

    if (flag) {
      if (position < visibleStart) {
        $el.scrollTop = scrollTop - (visibleStart - position)
        return
      }

      position += trHeight

      if (position > visibleEnd) {
        $el.scrollTop = scrollTop + (position - visibleEnd)
      }
    }
  })
}

export const colToVisible = ($table, column) => {
  // 固定列始终可见，无需继续处理
  if (column.fixed) {
    return
  }

  $table.$nextTick(() => {
    const { $refs, scrollXLoad, visibleColumn, columnStore } = $table
    const { tableBody: bodyVm } = $refs
    const { $el } = bodyVm
    const { leftList, rightList } = columnStore
    const tdEl = $el.querySelector(`.${column.id}`)
    const visibleStart = leftList.reduce((p, c) => (p += c.renderWidth), 0)
    const visibleEnd = $el.clientWidth - rightList.reduce((p, c) => (p += c.renderWidth), 0)
    const scrollLeft = $el.scrollLeft
    const colWidth = column.renderWidth

    let position
    let flag = false

    if (scrollXLoad) {
      flag = true
      position = -scrollLeft

      for (const col of visibleColumn) {
        if (col === column) break
        position += col.renderWidth
      }
    } else if (tdEl) {
      flag = true
      position = tdEl.offsetLeft - scrollLeft
    }

    if (flag) {
      if (position < visibleStart) {
        $el.scrollLeft = scrollLeft - (visibleStart - position)
        return
      }

      position += colWidth

      if (position > visibleEnd) {
        $el.scrollLeft = scrollLeft + (position - visibleEnd)
      }
    }
  })
}

export const hasDataTag = (el, value) => {
  if (!el || !value) {
    return false
  }

  // 处理遇到 shadowRoot的情况
  if (el.host) {
    el = el.host
  }

  return (' ' + el.getAttribute('data-tag') + ' ').includes(' ' + value + ' ')
}

export const getEventTargetNode = (event, container, queryCls) => {
  let targetEl
  let target = getActualTarget(event)

  while (target && target.nodeType && target !== document) {
    if (queryCls && (hasClass(target, queryCls) || hasDataTag(target, queryCls))) {
      targetEl = target
    } else if (target === container) {
      return {
        flag: queryCls ? !!targetEl : true,
        container,
        targetElem: targetEl
      }
    }

    target = target.parentNode
  }

  return { flag: false }
}

function getNodeOffset(el, container, rest) {
  if (el) {
    const htmlEl = document.querySelector('html')
    const bodyEl = document.body
    const parentEl = el.parentNode

    rest.top += el.offsetTop
    rest.left += el.offsetLeft

    if (parentEl && parentEl !== htmlEl && parentEl !== bodyEl) {
      rest.top -= parentEl.scrollTop
      rest.left -= parentEl.scrollLeft
    }

    if (container && (el === container || el.offsetParent === container) ? 0 : el.offsetParent) {
      return getNodeOffset(el.offsetParent, container, rest)
    }
  }

  return rest
}

/**
 * 获取元素相对于 document 的位置
 */
export const getOffsetPos = (el, container) => getNodeOffset(el, container, { left: 0, top: 0 })

export const getAbsolutePos = (el) => {
  const bounding = el.getBoundingClientRect()
  const { scrollTop, scrollLeft } = getDomNode()

  return {
    top: scrollTop + bounding.top,
    left: scrollLeft + bounding.left
  }
}

/**
 * 获取单元格节点索引
 */
export const getCellNodeIndex = (cell) => {
  const trEl = cell.parentNode
  const columnIndex = arrayIndexOf(trEl.children, cell)
  const rowIndex = arrayIndexOf(trEl.parentNode.children, trEl)

  return { columnIndex, rowIndex }
}

/**
 * 获取选中单元格矩阵范围
 */
export const getRowNodes = (trList, cellNode, targetCellNode) => {
  const startColIndex = cellNode.columnIndex
  const startRowIndex = cellNode.rowIndex
  const targetColIndex = targetCellNode.columnIndex
  const targetRowIndex = targetCellNode.rowIndex
  const rows = []

  for (
    let rowIndex = Math.min(startRowIndex, targetRowIndex), rowLen = Math.max(startRowIndex, targetRowIndex);
    rowIndex <= rowLen;
    rowIndex++
  ) {
    const cells = []
    const trEl = trList[rowIndex]

    for (
      let colIndex = Math.min(startColIndex, targetColIndex), colLen = Math.max(startColIndex, targetColIndex);
      colIndex <= colLen;
      colIndex++
    ) {
      cells.push(trEl.children[colIndex])
    }

    rows.push(cells)
  }

  return rows
}

export const getCellIndexs = (cell) => {
  const trEl = cell.parentNode
  const rowid = trEl.getAttribute(ATTR_NAME)
  const columnIndex = [].indexOf.call(trEl.children, cell)
  const rowIndex = [].indexOf.call(trEl.parentNode.children, trEl)

  return { rowid, rowIndex, columnIndex }
}

export const getCell = ($table, { row, column }) =>
  new Promise((resolve) => {
    $table.$nextTick(() => {
      const bodyElem = $table.$refs[`${column.fixed || 'table'}Body`]

      resolve(
        (bodyElem || $table.$refs.tableBody).$el.querySelector(
          `${ROW_CLS}[${ATTR_NAME}="${getRowid($table, row)}"] .${column.id}`
        )
      )
    })
  })

export { getDomNode }
