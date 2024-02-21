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
import { getCell } from '@opentiny/vue-renderless/grid/utils'

export function findLeft(params) {
  let { checkColumn, columnIndex, isLeft, rowIndex, tableData } = params
  let { targetColumn, targetColumnIndex, targetRow, targetRowIndex, visibleColumn } = params

  if (!isLeft) {
    return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
  }

  for (let index = columnIndex - 1; index >= 0; index--) {
    if (checkColumn(visibleColumn[index])) {
      targetColumnIndex = index
      targetColumn = visibleColumn[index]
      break
    }
  }

  if (targetColumn || rowIndex <= 0) {
    return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
  }

  targetRowIndex = rowIndex - 1
  targetRow = tableData[targetRowIndex]

  for (let index = visibleColumn.length - 1; index >= 0; index--) {
    if (checkColumn(visibleColumn[index])) {
      targetColumnIndex = index
      targetColumn = visibleColumn[index]
      break
    }
  }

  return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
}

export function findRight(params) {
  let { checkColumn, columnIndex, isLeft, rowIndex, tableData } = params
  let { targetColumn, targetColumnIndex, targetRow, targetRowIndex, visibleColumn } = params

  if (isLeft) {
    return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
  }

  for (let index = columnIndex + 1; index < visibleColumn.length; index++) {
    if (checkColumn(visibleColumn[index])) {
      targetColumnIndex = index
      targetColumn = visibleColumn[index]
      break
    }
  }

  if (targetColumn || rowIndex >= tableData.length - 1) {
    return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
  }

  targetRowIndex = rowIndex + 1
  targetRow = tableData[targetRowIndex]

  for (let index = 0; index < visibleColumn.length; index++) {
    if (checkColumn(visibleColumn[index])) {
      targetColumnIndex = index
      targetColumn = visibleColumn[index]
      break
    }
  }

  return { targetColumn, targetColumnIndex, targetRow, targetRowIndex }
}

export function processTarget(args1) {
  let { _vm, args, edit, editConfig, event, isLeft, params, rowIndex } = args1
  let { targetColumn, targetColumnIndex, targetRow, targetRowIndex } = args1

  if (targetColumn) {
    if (targetRow) {
      params.rowIndex = targetRowIndex
      params.row = targetRow
    } else {
      params.rowIndex = rowIndex
    }

    params.columnIndex = targetColumnIndex
    params.column = targetColumn

    getCell(_vm, params).then((resCell) => {
      params.cell = resCell

      if (editConfig) {
        if (editConfig.trigger === 'click' || editConfig.trigger === 'dblclick') {
          if (editConfig.mode === 'row' || edit) {
            _vm.handleActived(params, event)
          } else {
            _vm.handleSelected(params, event)
            _vm.scrollToRow(params.row, params.column, false, {
              isLeftArrow: isLeft,
              isRightArrow: !isLeft,
              from: args.column
            })
          }
        }
      }
    })
  }
}
