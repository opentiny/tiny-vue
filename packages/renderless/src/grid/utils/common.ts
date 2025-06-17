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

import { isNull, find, isFunction } from '@opentiny/utils'
import { get, set } from '../static'

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
export const getColumnList = (columns, options = {}, level = 0) => {
  const result = []

  columns.forEach((column, index) => {
    const hasChildren = column.children?.length

    // 所有层级中，存在固定列配置，就认为存在固定列
    if (!options.hasFixed && column.fixed) {
      options.hasFixed = true
    }

    // 是否存在 type selection 列
    if (!options.isCheckable && column.type === 'selection') {
      options.isCheckable = true
    }

    // 第一层级存在子级，就认为是多级表头
    if (level === 0 && !options.isGroup && hasChildren) {
      options.isGroup = true
    }

    options.columnCaches.push({ colid: column.id, column, index })

    result.push.apply(result, hasChildren ? getColumnList(column.children, options, level + 1) : [column])
  })

  return result
}

export const repairFixed = (root) => {
  const subtree = []
  let fixed

  const recursive = (col) => {
    subtree.push(col)

    if (!fixed && col.fixed) {
      fixed = col.fixed
    }

    if (Array.isArray(col.children) && col.children.length > 0) {
      col.children.forEach((col) => recursive(col))
    }
  }

  recursive(root)

  if (fixed) {
    subtree.forEach((c) => (c.fixed = fixed))
  }
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
  const {
    values,
    value: valueKey = 'value',
    checked: checkedKey = 'checked',
    condition,
    enumable,
    multi,
    inputFilter
  } = filter

  const value: any[] = values?.filter?.((i) => i[checkedKey]).map((i) => i[valueKey]) || []

  const hasChecked = values?.some?.((i) => i[checkedKey]) ?? false

  const filterOptions = {
    condition: { input: '', relation: 'equals', empty: null, type: null, value },
    hasFilter: (inputFilter && !!condition?.input) || (enumable && multi && hasChecked) || false,
    custom: null,
    showClear: true
  }

  return { ...filterOptions, ...filter }
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

export const assemColumn = ($table) => {
  const collectColumn = []

  const assem = (columnVms, columns) => {
    if (Array.isArray(columnVms)) {
      columnVms.forEach((columnVm) => {
        const column = columnVm.columnConfig
        const children = []

        if (column) {
          columns.push(column)
          assem(columnVm.childColumns, children)
          // 兼容旧实现，如果当前列没有子列，children 为 falsy 值
          column.children = children.length > 0 ? children : null
        }
      })
    }
  }

  assem($table.childColumns, collectColumn)
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

/** DFS深度优先遍历树形结构，并生成备份 */
export function dfsCopy(tree, callback, parent = undefined, isTree = false, childrenKey = 'children') {
  let copy

  if (Array.isArray(tree)) {
    copy = []

    tree.forEach((node, index) => {
      const copyItem = callback(node, index, parent)

      if (copyItem) {
        copy.push(copyItem)
      }

      if (isTree) {
        const children = node[childrenKey]

        if (children) {
          const childrenCopy = dfsCopy(children, callback, node, isTree, childrenKey)

          if (copyItem) {
            copyItem[childrenKey] = childrenCopy
          }
        }
      }
    })
  }

  return copy
}

let rowUniqueId = 0

export const getRowUniqueId = () => `row_${++rowUniqueId}`
