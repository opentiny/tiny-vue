import { isBoolean } from '../../utils/static/'
import { emitEvent } from '../../utils/utils'

// 比较两个值的大小
// @param valueP - 第一个值
// @param valueQ - 第二个值
// @returns {boolean} - 如果valueP大于valueQ返回true,否则返回false
const greaterThan = (valueP, valueQ) => {
  const typeP = typeof valueP
  const typeQ = typeof valueQ
  // 如果两个值类型相同且是number/string/boolean类型,直接比较
  if (typeP === typeQ && ['number', 'string', 'boolean'].includes(typeP)) {
    return valueP > valueQ
  } else {
    // 其他情况转换为字符串比较
    return String(valueP) > String(valueQ)
  }
}

export default {
  // 点击排序事件
  triggerSortEvent(event, column, order) {
    let property = column.property
    let isColumnSortable = column.type ? false : column.sortable || column.remoteSort
    if (this.sortable && isColumnSortable) {
      let evntParams = { $table: this, column, order, property }

      evntParams.prop = property
      evntParams.field = evntParams.prop

      if (order === column.order) {
        evntParams.order = null
        this.clearSort(column.property)
      } else {
        this.sort(property, order)
      }
      emitEvent(this, 'sort-change', [evntParams, event])
    }
  },
  sort(field, order) {
    const { remoteSort, tableFullColumn, visibleColumn } = this
    const column = visibleColumn.find((item) => item.property === field)
    const isRemote = isBoolean(column.remoteSort) ? column.remoteSort : remoteSort
    const isColumnSortable = column.type ? false : column.sortable || column.remoteSort

    if (this.sortable && isColumnSortable) {
      if (column.order !== order) {
        tableFullColumn.forEach((column) => (column.order = null))
        column.order = order
        // 如果是服务端排序，则跳过本地排序处理
        !isRemote && this.handleTableData(true)
      }
      return this.$nextTick().then(this.updateStyle)
    }
    return this.$nextTick()
  },
  clearSort() {
    this.tableFullColumn.forEach((column) => (column.order = null))
    this.$grid && (this.$grid.sortData = {})

    return this.handleTableData(true)
  },
  // 多字段排序
  sortMultiple: (rows, columns, _vm) => {
    // 获取多列排序配置
    const { multipleColumnSort } = _vm.sortOpts

    // 如果配置了自定义排序方法,使用自定义方法
    if (typeof multipleColumnSort === 'function') {
      rows = multipleColumnSort({ $table: _vm, tableData: rows, sortColumns: columns })
    } else {
      // 默认多列排序实现
      rows = rows.sort((p, q) => {
        // 遍历所有排序列
        for (let i = 0; i < columns.length; i++) {
          const { property, order } = columns[i]
          // 根据排序方向设置系数,升序为1,降序为-1
          const flag = order === 'asc' ? 1 : -1
          // 获取当前列的值
          const valueP = p[property]
          const valueQ = q[property]

          // 如果两个值不相等,根据大小关系返回排序结果
          if (!Object.is(valueP, valueQ)) {
            return greaterThan(valueP, valueQ) ? flag : -flag
          }
        }

        // 所有列的值都相等时返回0,保持原有顺序
        return 0
      })
    }

    return rows
  },
  // 按顺序切换列的排序状态（null --> asc --> desc --> null --> ...）
  toggleColumnOrder(column) {
    return column.order ? (column.order === 'asc' ? 'desc' : null) : 'asc'
  }
}
