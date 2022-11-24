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
import { setCellValue } from '@opentiny/vue-renderless/grid/utils'

export function handleActivedCheckCell({ actived, column, editConfig, row }) {
  return (
    actived.row !== row ||
    (editConfig.mode === 'cell' ? actived.column !== column : false)
  )
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

    _vm.clostTooltip()
    _vm.clearActived(event)

    type = 'edit-actived'
    column.renderHeight = cell.offsetHeight

    actived.args = params
    actived.row = row
    actived.column = column

    if (editConfig.mode === 'row') {
      tableColumn.forEach((column) => _vm._getColumnModel(row, column))
    } else {
      _vm._getColumnModel(row, column)
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

export function handleActivedTryActive({
  _vm,
  actived,
  cell,
  column,
  editor,
  event,
  isActiveCell,
  params,
  row
}) {
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
