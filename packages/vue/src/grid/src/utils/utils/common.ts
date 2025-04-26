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

import { isNull } from '@opentiny/utils'
import { find } from '@opentiny/utils'
import { get, isFunction, set } from '../static'

export const gridSize = ['medium', 'small', 'mini']

export const getSize = ({ size, $parent }) => size || ($parent && gridSize.includes($parent.size) ? $parent.size : null)

export const getFuncText = (content) => (isFunction(content) ? content() : content)

// 行主键 key
export const getRowkey = ($table) => $table.rowId

// 行主键 value
export const getRowid = ($table, row) => {
  const rowId = get(row, getRowkey($table))
  return rowId ? encodeURIComponent(rowId) : ''
}

// 获取所有的列，排除分组
export const getColumnList = (columns) => {
  const result = []

  columns.forEach((column) => {
    if (column.children && column.children.length) {
      result.push(...getColumnList(column.children))
    } else {
      result.push(column)
    }
  })

  return result
}

export const getClass = (property, params) => (property ? (isFunction(property) ? property(params) : property) : '')

export const getFilters = (filters) =>
  (filters || []).map(({ label, value, data, checked }) => ({
    label,
    value,
    data,
    _data: data,
    checked: !!checked
  }))

export const initFilter = (filter) => {
  // 改成这种方式可以让用户配置一些筛选的默认行为，如果用户不配置就采用默认的
  return {
    condition: {
      input: '',
      relation: 'equals',
      empty: null,
      type: null,
      value: []
    },
    hasFilter: false,
    custom: null,
    ...filter
  }
}

export const formatText = (value) => `${isNull(value) ? '' : value}`

export const setCellValue = (row, column, value) => {
  const { format, property } = column

  // 处理异步列
  if (format && format.async && Array.isArray(format.data) && format.data.length > 0 && value) {
    let labelText = ''
    const { enabled, valueSplit, textSplit } = format.async.splitConfig || {}
    const findCellValue = (optionValue) =>
      find(format.data, (col) => {
        if (typeof col === 'object') {
          const colLabel = get(col, format.async.text || 'label')
          const colValue = get(col, format.async.value || 'value')

          col.label = colLabel

          return optionValue === colValue || optionValue === colLabel
        }

        return optionValue === col
      })

    if (enabled) {
      const labelTexts = []

      value.split(valueSplit || ',').forEach((item) => {
        const findValue = findCellValue(item)

        if (findValue) {
          labelTexts.push(findValue.label)
        }
      })

      labelText = labelTexts.join(textSplit || ',')
    } else {
      labelText = findCellValue(value)
    }

    set(row, column.asyncPrefix + property, labelText ? labelText.label : labelText)
  }

  set(row, property, value)
}

export const hasChildrenList = (item) => item && item.children && item.children.length > 0

export const emitEvent = (vm, type, args) => {
  if (vm.tableListeners[type]) {
    const params = [].concat(args)
    vm.$emit(type, ...params)
  }
}

/**
 * 组装列配置，这里很重要，会触发表格collectColumn的watch，从而刷新表格
 * @param {Object} $table - 表格实例
 * @returns {void}
 */
export const assemColumn = ($table) => {
  // 用于存储收集到的所有列配置
  const collectColumn = []

  /**
   * 递归组装列配置
   * @param {Array} columnVms - 列虚拟节点数组
   * @param {Array} columns - 用于存储组装后的列配置数组
   */
  const assem = (columnVms, columns) => {
    // 检查columnVms是否为数组
    if (Array.isArray(columnVms)) {
      // 遍历每个列虚拟节点
      columnVms.forEach((columnVm) => {
        // 获取列的配置信息
        const column = columnVm.columnConfig
        // 用于存储子列配置的数组
        const children = []

        // 如果存在列配置
        if (column) {
          // 将当前列配置添加到columns数组
          columns.push(column)
          // 递归处理子列,将结果存储到children数组
          assem(columnVm.childColumns, children)
          // 设置children属性:
          // 1. 如果有子列,则设置为子列数组
          // 2. 如果没有子列,则设置为null(兼容旧版本实现)
          column.children = children.length > 0 ? children : null
        }
      })
    }
  }

  // 从表格实例的childColumns开始递归组装列配置
  assem($table.childColumns, collectColumn)
  // 将组装好的列配置赋值给表格实例的collectColumn属性
  $table.collectColumn = collectColumn
}

export const getCellValue = (row, column) => get(row, column.own.field)

export const getListeners = ($attrs, $listeners) => {
  const regHyphenate = /\B([A-Z])/g
  const regEventPrefix = /^on[A-Z]/
  const listeners = {}

  if ($listeners) {
    return $listeners
  }

  Object.keys($attrs).forEach((name) => {
    const event = $attrs[name]

    if (regEventPrefix.test(name) && typeof event === 'function') {
      listeners[name.slice(2).replace(regHyphenate, '-$1').toLowerCase()] = event
    }
  })

  return listeners
}
