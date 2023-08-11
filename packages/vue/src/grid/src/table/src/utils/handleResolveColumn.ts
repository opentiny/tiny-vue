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
import { get } from '@opentiny/vue-renderless/grid/static/'

export function mapFetchColumnPromise({ _vm, fetchColumns, tableColumn }) {
  return fetchColumns.map(({ format, columnValues }) =>
    format.async.fetch({ columns: tableColumn, columnValues, $table: _vm })
  )
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
