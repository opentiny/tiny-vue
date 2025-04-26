import { setCellValue } from '../../../utils/utils'

export function handleActivedCheckCell({ actived, column, editConfig, row }) {
  return actived.row !== row || (editConfig.mode === 'cell' ? actived.column !== column : false)
}

export function handleActivedCanActive({ editConfig, params }) {
  return !editConfig?.activeMethod || editConfig.activeMethod(params)
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
