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
import { findTree, eachTree, toNumber } from '@opentiny/vue-renderless/grid/static/'
import { error, warn } from '../../../tools'

export function onGroupHeader({ _vm, isGroup, headerProps }) {
  if (isGroup) {
    eachTree(
      _vm.collectColumn,
      (column) => {
        if (column.children && column.children.length) {
          column.visible = !!findTree(
            column.children,
            (subColumn) => (subColumn.children && subColumn.children.length ? 0 : subColumn.visible),
            headerProps
          )
        }
      },
      headerProps
    )
  }
}

export function reassignNotFixed({ centerList, column }) {
  if (!column.fixed) {
    centerList.push(column)
  }
}

export function reassignFixedRight({ column, columnIndex, isColspan, rightEndIndex, rightList }) {
  if (column.fixed === 'right') {
    if (!isColspan) {
      if (rightEndIndex === null) {
        rightEndIndex = columnIndex
      }

      if (columnIndex - rightEndIndex !== 0) {
        isColspan = true
      } else {
        rightEndIndex++
      }
    }

    rightList.push(column)
  }

  return { isColspan, rightEndIndex }
}

export function reassignFixedLeft({ column, columnIndex, isColspan, leftList, leftStartIndex, letIndex }) {
  if (column.fixed === 'left') {
    if (leftStartIndex === null) {
      leftStartIndex = letIndex
    }

    if (!isColspan) {
      if (columnIndex - letIndex !== 0) {
        isColspan = true
      } else {
        letIndex++
      }
    }

    leftList.push(column)
  }

  return { leftStartIndex, letIndex, isColspan }
}

export function showGroupFixedError({ isColspan, isGroup, leftStartIndex, rightEndIndex, visibleColumn }) {
  if (isGroup && (isColspan || leftStartIndex || (rightEndIndex !== null && rightEndIndex !== visibleColumn.length))) {
    error('ui.grid.error.groupFixed')
  }
}

export function onScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableColumn, visibleColumn }) {
  if (scrollXLoad) {
    if (_vm.resizable || visibleColumn.some((column) => column.resizable)) {
      warn('ui.grid.error.notResizable')
    }

    Object.assign(scrollXStore, {
      startIndex: 0,
      visibleIndex: 0,
      renderSize: toNumber(scrollX.rSize),
      offsetSize: toNumber(scrollX.oSize)
    })

    tableColumn = visibleColumn.slice(scrollXStore.startIndex, scrollXStore.startIndex + scrollXStore.renderSize)
  }

  return tableColumn
}
