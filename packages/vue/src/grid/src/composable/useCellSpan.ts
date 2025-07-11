import { hooks } from '@opentiny/vue-common'
import { isVirtualRow } from '../table/src/strategy'
import { getRowid } from '@opentiny/vue-renderless/grid/utils'

export const useCellSpan = (bodyVm, bodyProps) => {
  const $table = bodyVm.$parent
  const normalRows = hooks.shallowRef({})
  const footerRows = hooks.shallowRef({})

  hooks.watch(
    [
      () => $table.visibleColumn,
      () => bodyProps.tableData,
      () => $table.isColumnWidthAssigned,
      () => $table.columnStore.resizeList
    ],
    ([visibleColumn, tableData, isColumnWidthAssigned]) => {
      if (!Array.isArray(tableData) || !isColumnWidthAssigned) {
        return
      }

      const { tableNode } = bodyProps
      const { hasVirtualRow, treeConfig, treeOrdered, scrollYLoad, scrollYStore, afterFullData, columnStore } = $table
      const { hideMethod } = treeConfig || {}
      const isOrdered = treeConfig ? !!treeOrdered : false
      const seqCount = { value: 0 }
      const startIndex = scrollYStore.startIndex
      const { leftList, rightList } = columnStore

      const normalState = {}
      const normalTable = []

      for (let $rowIndex = 0; $rowIndex < tableData.length; $rowIndex++) {
        const row = tableData[$rowIndex]
        const rowLevel = tableNode[$rowIndex].level
        const rowIndex = $table.getRowIndex(row)
        let virtualRow = false

        if (hasVirtualRow) {
          virtualRow = isVirtualRow(row)
        }

        const isSkipRowRender = (hideMethod && hideMethod(row, rowLevel)) || virtualRow

        if (!isSkipRowRender) {
          seqCount.value = seqCount.value + 1
        }

        let seq = isOrdered ? seqCount.value : $rowIndex + 1

        if (scrollYLoad) {
          seq += startIndex
        }

        if (hasVirtualRow) {
          if (virtualRow) {
            // 分组行列合并的详细计算逻辑在useRowGroup.ts
            continue
          } else {
            seq = afterFullData.indexOf(row) + 1
          }
        }

        const params = { $table, data: tableData, row, $rowIndex, rowIndex, level: rowLevel, $seq: '', seq }

        stateNormalCell(normalState, normalTable, params, $table)
      }

      if (leftList.length > 0) {
        adjustColspan(normalTable, leftList.length - 1, true)
      }

      if (rightList.length > 0) {
        adjustColspan(normalTable, visibleColumn.indexOf(rightList[0]) - 1, false)
      }

      normalRows.value = normalState
    }
  )

  hooks.watch(
    [
      () => $table.visibleColumn,
      () => bodyProps.footerData,
      () => $table.isColumnWidthAssigned,
      () => $table.columnStore.resizeList
    ],
    ([visibleColumn, footerData, isColumnWidthAssigned]) => {
      if (!Array.isArray(footerData) || !isColumnWidthAssigned) {
        return
      }

      const { columnStore } = $table
      const { leftList, rightList } = columnStore

      const footerState = {}
      const footerTable = []

      for (let $rowIndex = 0; $rowIndex < footerData.length; $rowIndex++) {
        const params = { $table, $rowIndex, data: footerData }
        stateFooterCell(footerState, footerTable, params, $table)
      }

      if (leftList.length > 0) {
        adjustColspan(footerTable, leftList.length - 1, true)
      }

      if (rightList.length > 0) {
        adjustColspan(footerTable, visibleColumn.indexOf(rightList[0]) - 1, false)
      }

      footerRows.value = footerState
    }
  )

  return { normalRows, footerRows }
}

const stateNormalCell = (state, table, params, $table) => {
  const { rowSpan, spanMethod, visibleColumn } = $table
  const rowId = getRowid($table, params.row)
  const rowState = {}
  const rowAttrs = []

  for (let $columnIndex = 0; $columnIndex < visibleColumn.length; $columnIndex++) {
    const column = visibleColumn[$columnIndex]
    const columnIndex = $table.getColumnIndex(column)
    const attrs = { rowspan: 1, colspan: 1, visible: true, _stickyClass: '', _stickyStyle: null }

    params = { ...params, column, $columnIndex, columnIndex }

    if (spanMethod || rowSpan) {
      doSpan({ attrs, params, rowSpan, spanMethod })
    }

    rowState[column.id] = { attrs, params }
    rowAttrs.push({ attrs, params })
  }

  state[rowId] = rowState
  table.push(rowAttrs)
}

const stateFooterCell = (state, table, params, $table) => {
  const { footerSpanMethod, visibleColumn } = $table
  const rowState = {}
  const rowAttrs = []

  for (let $columnIndex = 0; $columnIndex < visibleColumn.length; $columnIndex++) {
    const column = visibleColumn[$columnIndex]
    const columnIndex = $table.getColumnIndex(column)
    const attrs = { rowspan: 1, colspan: 1, visible: true }

    params = { ...params, column, $columnIndex, columnIndex }

    if (footerSpanMethod) {
      const { rowspan = 1, colspan = 1 } = footerSpanMethod(params) || {}

      attrs.rowspan = rowspan
      attrs.colspan = colspan
      attrs.visible = rowspan > 0 && colspan > 0
    }

    rowState[column.id] = { attrs, params }
    rowAttrs.push({ attrs, params })
  }

  state[params.$rowIndex] = rowState
  table.push(rowAttrs)
}

const doSpan = ({ attrs, params, rowSpan, spanMethod }) => {
  const { rowspan = 1, colspan = 1 } = (spanMethod ? spanMethod(params) : rowSpanMethod(rowSpan, params)) || {}

  attrs.rowspan = rowspan
  attrs.colspan = colspan
  attrs.visible = rowspan > 0 && colspan > 0
}

const rowSpanMethod = (rowSpan, { row, $rowIndex, column, data }) => {
  const fields = []

  if (column.visible && rowSpan) {
    rowSpan.forEach((item) => fields.push(item.field))

    const cellVal = row[column.property]

    if (cellVal && fields.includes(column.property)) {
      const prevSiblingRow = data[$rowIndex - 1]
      let nextSiblingRow = data[$rowIndex + 1]

      if (prevSiblingRow?.[column.property] === cellVal) {
        return { rowspan: 0, colspan: 0 }
      } else {
        let rowspanCount = 1

        while (nextSiblingRow?.[column.property] === cellVal) {
          nextSiblingRow = data[++rowspanCount + $rowIndex]
        }

        if (rowspanCount > 1) {
          return { rowspan: rowspanCount, colspan: 1 }
        }
      }
    }
  }
}

const adjustColspan = (table, pos, isLeft) => {
  if (pos < 0) {
    return
  }

  for (let i = 0; i < table.length; i++) {
    const row = table[i]

    for (let j = 0; j <= pos && j < row.length; j++) {
      const { attrs } = row[j]
      const oldColspan = attrs.colspan
      let k, posCol

      const shouldAdjustColspan = oldColspan > 1 && (k = j + oldColspan - 1) > pos
      if (shouldAdjustColspan) {
        attrs.colspan = pos - j + 1

        if (isLeft) {
          attrs._stickyClass = 'fixed-left-last__column'
        }
        posCol = row[pos + 1]
        if (posCol) {
          posCol.attrs.colspan = k - pos

          if (posCol.attrs.rowspan < 1) {
            posCol.attrs.rowspan = attrs.rowspan
          }

          posCol.attrs.visible = true
        }
      }
    }

    if (!isLeft) {
      const rightCols = row.slice(pos + 1).reverse()
      let right = 0

      for (let j = 0; j < rightCols.length; j++) {
        const { attrs, params } = rightCols[j]

        if (attrs.visible) {
          attrs._stickyStyle = { right: `${right}px` }
          right += params.column.renderWidth
        }
      }
    }
  }
}
