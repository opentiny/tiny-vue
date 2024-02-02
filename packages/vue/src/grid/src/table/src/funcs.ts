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
import { warn } from '../../tools'
import { isArray, get } from '@opentiny/vue-renderless/grid/static/'
import { preprocessDataObjectFormat, preventDupRender, handleResolveColumnComplete } from './utils/handleResolveColumn'

// Module methods
export const funcs = [
  'closeMenu',
  'getMouseSelecteds',
  'getMouseCheckeds',
  'clearCopyed',
  'clearChecked',
  'clearHeaderChecked',
  'clearIndexChecked',
  'clearSelected',
  'insert',
  'insertAt',
  'remove',
  'removeSelecteds',
  'revert',
  'revertData',
  'getRecordset',
  'getInsertRecords',
  'getRemoveRecords',
  'getUpdateRecords',
  'clearActived',
  'getActiveRow',
  'hasActiveRow',
  'setActiveRow',
  'setActiveCell',
  'setSelectCell',
  'clearValidate',
  'fullValidate',
  'validate',
  'exportCsv',
  'exportExcel'
]

// 分组表头的属性
export const headerProps = {
  children: 'children'
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

        columnValues = isArray(item) ? item : get(item, fields.data || 'values')
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
