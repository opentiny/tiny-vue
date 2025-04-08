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

/**
 * 将列数据获取的Promise进行映射处理
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Array} params.fetchColumns - 需要获取的列配置数组
 * @param {Array} params.tableColumn - 表格列配置
 * @returns {Array} 返回Promise数组
 */
export function mapFetchColumnPromise({ _vm, fetchColumns, tableColumn }) {
  return fetchColumns.map(({ format, columnValues }) =>
    format.async.fetch({ columns: tableColumn, columnValues, $table: _vm })
  )
}

/**
 * 预处理数据对象格式
 * @param {Object} params - 参数对象
 * @param {Number} params.columnCount - 列数量
 * @param {Array} params.columnValues - 列值数组
 * @param {Object} params.columnValuesMap - 列值映射对象
 * @param {Object} params.fields - 字段配置对象
 */
export function preprocessDataObjectFormat({ columnCount, columnValues, columnValuesMap, fields }) {
  if (columnCount) {
    columnValues.forEach((col) => {
      if (typeof col === 'object') {
        // 获取标签和值
        const label = get(col, fields.text || 'label')
        const value = get(col, fields.value || 'value')

        col.label = label
        columnValuesMap[value] = col
      }
    })
  }
}

/**
 * 防止重复渲染单元格内容
 * @param {Object} params - 参数对象
 * @param {String} params.asyncColumnName - 异步列名
 * @param {Array} params.cellTexts - 单元格文本数组
 * @param {Number} params.cellValuesCount - 单元格值数量
 * @param {Array} params.columnData - 列数据数组
 * @param {Object} params.columnValuesMap - 列值映射对象
 * @param {Boolean} params.isRender - 是否已渲染
 * @param {String} params.property - 属性名
 * @param {Number} params.renderCount - 渲染计数
 * @param {Object} params.row - 行数据
 * @param {Object} params.splitConfig - 分割配置
 * @returns {Number} 返回更新后的渲染计数
 */
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

    // 如果启用了分割配置，则按指定分隔符分割值
    if (splitConfig.enabled === true) {
      cellValues = (row[property] || '').split(splitConfig.valueSplit || ',')
    }

    // 遍历处理每个单元格值
    while (cellEachIndex < cellValuesCount) {
      const activeValue = cellValues[cellEachIndex]
      const currentRow = columnValuesMap[activeValue]

      // 获取单元格标签
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

    // 将处理后的文本数组用指定分隔符连接
    row[asyncColumnName] = cellTexts.join(splitConfig.textSplit || ',')
  }

  return renderCount
}

/**
 * 处理列解析完成后的回调
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Array} params.columnData - 列数据数组
 * @param {Function} params.complete - 完成回调函数
 */
export function handleResolveColumnComplete({ _vm, columnData, complete }) {
  if (typeof complete === 'function') {
    complete({ columnData, $table: _vm })
  }
}
