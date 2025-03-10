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
import { setCellValue } from '@opentiny/vue-renderless/grid/utils'

export function handleActivedCheckCell({ actived, column, editConfig, row }) {
  return actived.row !== row || (editConfig.mode === 'cell' ? actived.column !== column : false)
}

export function handleActivedCanActive({ editConfig, params }) {
  return !editConfig.activeMethod || editConfig.activeMethod(params)
}

export function handleActivedDoActive({
  _vm,
  actived,
  canActive,
  cell,
  column,
  editConfig,
  event,
  params,
  row,
  tableColumn,
  type
}) {
  if (canActive) {
    if (_vm.keyboardConfig || _vm.mouseConfig) {
      _vm.clearCopyed(event)
      _vm.clearChecked()
      _vm.clearSelected(event)
    }

    _vm.closeTooltip()
    _vm.clearActived(event)

    type = 'edit-actived'
    column.renderHeight = cell.offsetHeight

    actived.args = params
    actived.row = row
    actived.column = column

    if (editConfig.mode === 'row') {
      tableColumn.forEach((column) => _vm.getColumnModel(row, column))
    } else {
      _vm.getColumnModel(row, column)
    }

    _vm.$nextTick(() => {
      _vm.handleFocus(params, event)
    })
  }

  return type
}

export function handleActivedClearActive({ _vm, canActive, event }) {
  if (!canActive) {
    _vm.clearActived(event)
  }
}

export function handleActivedTryActive({ _vm, actived, cell, column, editor, event, isActiveCell, params, row }) {
  if (editor && cell && !isActiveCell) {
    let { column: oldColumn } = actived

    if (oldColumn !== column) {
      let { model: oldModel } = oldColumn

      if (oldModel.update) {
        setCellValue(row, oldColumn, oldModel.value)
      }

      _vm.clearValidate()
    }

    column.renderHeight = cell.offsetHeight
    actived.args = params
    actived.column = column

    setTimeout(() => {
      _vm.handleFocus(params, event)
    })
  }
}
