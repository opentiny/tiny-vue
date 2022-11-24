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
import { get } from '@opentiny/vue-renderless/grid/static/'

export function mapFetchColumnPromise({ _vm, fetchColumns, tableColumn }) {
  return fetchColumns.map(({ format, columnValues }) => format.async.fetch({ columns: tableColumn, columnValues, $table: _vm }))
}

export function preprocessDataObjectFormat({ columnCount, columnValues, columnValuesMap, fields }) {
  if (columnCount) {
    columnValues.forEach((col) => {
      if (typeof col === 'object') {
        const label = get(col, fields.text || 'label')
        const value = get(col, fields.value || 'value')

        col.label = label
        columnValuesMap[value] = col
      }
    })
  }
}

export function preventDupRender({
  asyncColumnName,
  cellTexts,
  cellValuesCount,
  columnData,
  columnValuesMap,
  isRender,
  property,
  renderCount,
  row,
  splitConfig
}) {
  let cellEachIndex = 0

  if (!isRender && cellValuesCount) {
    let cellLabel
    let cellValues = [row[property]]

    // 默认不开启
    if (splitConfig.enabled === true) {
      cellValues = (row[property] || '').split(splitConfig.valueSplit || ',')
    }

    // 拼接单元格内容
    while (cellEachIndex < cellValuesCount) {
      const activeValue = cellValues[cellEachIndex]
      const currentRow = columnValuesMap[activeValue]

      cellLabel = typeof currentRow === 'object' ? currentRow.label : currentRow
      cellTexts.push(cellLabel)
      columnData.push({
        label: cellLabel,
        value: cellValues[cellEachIndex],
        row: currentRow
      })

      cellEachIndex++
      renderCount++
    }

    row[asyncColumnName] = cellTexts.join(splitConfig.textSplit || ',')
  }

  return renderCount
}

export function handleResolveColumnComplete({ _vm, columnData, complete }) {
  if (typeof complete === 'function') {
    complete({ columnData, $table: _vm })
  }
}
