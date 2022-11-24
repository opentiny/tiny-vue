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
import { getCell } from '@opentiny/vue-renderless/grid/utils'

export function findLeft(params) {
  let { checkColumn, columnIndex, isLeft, rowIndex, tableData } = params
  let {
    targetColumn,
    targetColumnIndex,
    targetRow,
    targetRowIndex,
    visibleColumn
  } = params

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
  let {
    targetColumn,
    targetColumnIndex,
    targetRow,
    targetRowIndex,
    visibleColumn
  } = params

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
        if (
          editConfig.trigger === 'click' ||
          editConfig.trigger === 'dblclick'
        ) {
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
