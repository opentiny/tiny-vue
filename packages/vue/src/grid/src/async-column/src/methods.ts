import { mapFetchColumnPromise, handleAllColumnPromises } from './handleResolveColumn'
import { warn } from '../../tools'
import GlobalConfig from '../../config'

export default {
  // 获取异步列唯一ID
  getAsyncColumnUniqueKey(property, row) {
    return `${property}_${row[this.rowId]}`
  },

  // 获取异步列名称
  getAsyncColumnName(property) {
    return GlobalConfig.constant.asyncPrefix + property
  },

  // 收集异步列
  collectAsyncColumn(tableData) {
    const fetchColumns = []
    const { rowId, asyncRenderMap, tableColumn } = this

    // 确保rowId存在
    if (!rowId) {
      warn('The (grid-props:rowId) is required for the asynchronous column.')
      return fetchColumns
    }

    // 遍历所有列，找出需要异步渲染的列
    tableColumn.forEach((col) => {
      const { async } = col.format || {}
      const { fetch, splitConfig = {} } = async || {}

      if (typeof fetch === 'function') {
        const columnValues = []

        // 收集列中所有行的值
        tableData.forEach((row) => {
          let cellValue = row[col.property]
          if (typeof cellValue !== 'string' || (typeof cellValue === 'string' && !cellValue)) {
            cellValue = ' '
          }

          let cellValuesCount = 1
          let cellValues = [cellValue]
          const uniqueKey = this.getAsyncColumnUniqueKey(col.property, row)

          // 支持值分割配置
          if (splitConfig.enabled === true) {
            cellValues = cellValue.split(splitConfig.valueSplit || ',')
            cellValuesCount = cellValues.length
          }

          // 缓存单元格值计数，避免重复加载
          if (!asyncRenderMap[uniqueKey]) {
            asyncRenderMap[uniqueKey] = cellValuesCount
            // 添加所有单元格值到列值集合
            cellValues.forEach((value) => columnValues.push(value))
          }
        })

        // 如果有需要异步处理的值，将列添加到结果中
        if (columnValues.length) {
          fetchColumns.push({ ...col, columnValues })
        }
      }
    })

    return fetchColumns
  },

  // 处理异步列数据加载
  handleAsyncColumn(tableData) {
    if (this.isAsyncColumn && tableData.length) {
      // 每次请求都需要清空加载缓存
      this.asyncRenderMap = {}
      // 收集并处理异步列
      this.handleResolveColumn(tableData, this.collectAsyncColumn(tableData))
    }
  },

  // 处理异步列数据解析
  handleResolveColumn(tableData, fetchColumns) {
    const { tableColumn, scrollYStore, asyncRenderMap, scrollXLoad, scrollYLoad } = this
    const { startIndex } = scrollYStore
    const isScrollLoad = scrollXLoad || scrollYLoad

    // 如果没有需要处理的列，直接返回
    if (fetchColumns.length === 0) {
      return
    }

    // 创建所有列数据获取的Promise
    const promises = mapFetchColumnPromise({ _vm: this, fetchColumns, tableColumn })

    // 处理所有Promise结果
    Promise.all(promises).then(
      handleAllColumnPromises({ startIndex, fetchColumns, tableData, asyncRenderMap, isScrollLoad }, this)
    )
  }
}
