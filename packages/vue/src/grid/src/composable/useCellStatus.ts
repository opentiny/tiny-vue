import { getRowid } from '@opentiny/vue-renderless/grid/utils'

const isCellDirty = ($table, row, column) => {
  const { editConfig } = $table
  const { showStatus = false, relationFields = true } = editConfig || {}
  // 关联字段配置为true，或者配置包含当前字段时，支持脏数据检查
  const canChange =
    relationFields === true || (Array.isArray(relationFields) && relationFields.includes(column.property))

  let isDirty

  // 冻结表格方案：主表的固定隐藏列不进行脏数据检查。改为粘性布局后：主表的所有列都应去掉此限制。
  if (editConfig && showStatus && column.property && (column.editor || (relationFields && canChange))) {
    isDirty = $table.hasRowChange(row, column.property)
  }

  return isDirty
}

export const getCellKey = ($table, row, column) => {
  const rowid = getRowid($table, row)
  return `${rowid}-${column.id}`
}

const updateCellStatus = ($table, row, column) => {
  const cellKey = getCellKey($table, row, column)
  const isDirty = isCellDirty($table, row, column)
  const map = $table.cellStatus

  if (map.has(cellKey)) {
    map.get(cellKey).isDirty = isDirty
  } else {
    map.set(cellKey, { isDirty })
  }
}

export const updateRowStatus = ($table, row) => {
  $table.tableFullColumn.forEach((column) => updateCellStatus($table, row, column))
}

export const getCellStatus = ($table, row, column) => {
  const cellKey = getCellKey($table, row, column)
  const map = $table.cellStatus

  if (map.has(cellKey)) {
    return map.get(cellKey)
  } else {
    return { isDirty: false }
  }
}
