import { get } from '../../utils/static/'
import { warn } from '../../tools'

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

export const handleAllColumnPromises = (opt, ctx) => {
  let { startIndex, fetchColumns, tableData, asyncRenderMap, isScrollLoad } = opt
  return (data) => {
    if (data.length) {
      // 【data属性设置表格数据且开启可视区】防止 渲染导致滚动条跳动（跳到初始位置）
      ctx._isUpdateData = true
      data.forEach((item, i) => {
        let columnValues = []
        let columnValuesMap = {}
        let k = startIndex // 查找起始位置
        let renderCount = 0
        let columnCount = 0
        const columnData = []
        const { format = {}, property } = fetchColumns[i]
        const { splitConfig = {}, fields = {}, complete } = format.async || {}

        columnValues = Array.isArray(item) ? item : get(item, fields.data || 'values')
        columnCount = columnValues.length
        // 预处理数据对象格式
        preprocessDataObjectFormat({ columnCount, columnValues, columnValuesMap, fields })
        for (let len = tableData.length; k < len; k++) {
          const row = tableData[k]
          const cellTexts = []
          const uniqueKey = ctx.getAsyncColumnUniqueKey(property, row)
          const cellValuesCount = asyncRenderMap[uniqueKey]
          const asyncColumnName = ctx.getAsyncColumnName(property)
          const isRender = !!row[asyncColumnName]
          let args = { asyncColumnName, cellTexts, cellValuesCount, columnData }
          Object.assign(args, { columnValuesMap, isRender, property, renderCount, row, splitConfig })
          // 防止重复渲染
          renderCount = preventDupRender(args)
          // 针对可视区滚动优化
          if (isScrollLoad && renderCount >= columnCount) {
            break
          }
        }
        format.data = columnData
        // 用户自定义缓存机制的接口
        handleResolveColumnComplete({ _vm: ctx, columnData, complete })
      })
      ctx.tableData = ctx.tableData.slice(0)
      ctx.$nextTick(() => {
        ctx._isUpdateData = false
      })
    } else {
      warn('Unknown error：the query data is empty.')
    }
  }
}
