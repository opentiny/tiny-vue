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

import { extend } from '../../common/object'
import { isNull } from '../../common/type'
import { find } from '../../common/array'
import { get, isFunction, set, findTree } from '../static'

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
    result.push.apply(result, column.children && column.children.length ? getColumnList(column.children) : [column])
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
  const filterOpt = extend({}, filter, true)

  filterOpt.condition = {
    input: '',
    relation: 'equals',
    empty: null,
    type: null,
    value: []
  }
  filterOpt.hasFilter = false
  filterOpt.custom = null

  return filterOpt
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

export const destroyColumn = ($table, { columnConfig }) => {
  const matchObj = findTree($table.collectColumn, (column) => column === columnConfig)

  if (matchObj) {
    matchObj.items.splice(matchObj.index, 1)
  }

  $table.collectColumn = $table.collectColumn.slice(0)
}

export const emitEvent = (vnode, type, args) => {
  if (vnode.tableListeners[type]) {
    vnode.$emit.apply(vnode, [type].concat(args))
  }
}

export const assemColumn = ($table, $column, instance) => {
  const { columnConfig, $el: elm, $scopedSlots, $slots, $parent } = instance
  const { collectColumn } = $table

  columnConfig.slots = $scopedSlots || $slots

  const parentNode = elm.parentNode
  const insertIndex = [].indexOf.call(parentNode.children, elm)

  if (!$column || $column !== $parent) {
    collectColumn.splice(insertIndex, 0, columnConfig)
  } else {
    // 如果存在$column父级表格列组件实例
    const parentConfig = $column.columnConfig

    if (!parentConfig.children) {
      parentConfig.children = []
    }
    parentConfig.children.splice(insertIndex, 0, columnConfig)
  }

  $table.collectColumn = collectColumn.slice(0)
}

export const getCellValue = (row, column) => get(row, column.property)

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
      listeners[name.substr(2).replace(regHyphenate, '-$1').toLowerCase()] = event
    }
  })

  return listeners
}
