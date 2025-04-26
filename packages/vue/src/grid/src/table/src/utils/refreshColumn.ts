import { findTree, eachTree, toNumber } from '../../../utils/static/'
import { error, warn } from '../../../tools'

/**
 * 处理表头分组显示的逻辑
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Boolean} params.isGroup - 是否为分组表头
 * @param {Object} params.headerProps - 表头属性
 */
export function onGroupHeader({ _vm, isGroup, headerProps }) {
  if (isGroup) {
    eachTree(
      _vm.collectColumn,
      (column) => {
        if (column.children && column.children.length) {
          // 如果列有子列，则根据子列的可见性决定父列的可见性
          column.visible = !!findTree(
            column.children,
            (subColumn) => (subColumn.children && subColumn.children.length ? 0 : subColumn.visible),
            headerProps
          )
        }
      },
      headerProps
    )
  }
}

/**
 * 重新分配非固定列的列表
 * @param {Object} params - 参数对象
 * @param {Array} params.centerList - 中间列列表
 * @param {Object} params.column - 当前列对象
 */
export function reassignNotFixed({ centerList, column }) {
  if (!column.fixed) {
    centerList.push(column)
  }
}

/**
 * 重新分配右侧固定列的列表
 * @param {Object} params - 参数对象
 * @param {Object} params.column - 当前列对象
 * @param {Number} params.columnIndex - 列索引
 * @param {Boolean} params.isColspan - 是否跨列
 * @param {Number} params.rightEndIndex - 右侧结束索引
 * @param {Array} params.rightList - 右侧列列表
 * @returns {Object} 返回更新后的跨列状态和右侧结束索引
 */
export function reassignFixedRight({ column, columnIndex, isColspan, rightEndIndex, rightList }) {
  if (column.fixed === 'right') {
    if (!isColspan) {
      if (rightEndIndex === null) {
        rightEndIndex = columnIndex
      }

      if (columnIndex - rightEndIndex !== 0) {
        isColspan = true
      } else {
        rightEndIndex++
      }
    }

    rightList.push(column)
  }

  return { isColspan, rightEndIndex }
}

/**
 * 重新分配左侧固定列的列表
 * @param {Object} params - 参数对象
 * @param {Object} params.column - 当前列对象
 * @param {Number} params.columnIndex - 列索引
 * @param {Boolean} params.isColspan - 是否跨列
 * @param {Array} params.leftList - 左侧列列表
 * @param {Number} params.leftStartIndex - 左侧开始索引
 * @param {Number} params.letIndex - 左侧索引
 * @returns {Object} 返回更新后的左侧开始索引、左侧索引和跨列状态
 */
export function reassignFixedLeft({ column, columnIndex, isColspan, leftList, leftStartIndex, letIndex }) {
  if (column.fixed === 'left') {
    if (leftStartIndex === null) {
      leftStartIndex = letIndex
    }

    if (!isColspan) {
      if (columnIndex - letIndex !== 0) {
        isColspan = true
      } else {
        letIndex++
      }
    }

    leftList.push(column)
  }

  return { leftStartIndex, letIndex, isColspan }
}

/**
 * 显示分组固定列的错误信息
 * @param {Object} params - 参数对象
 * @param {Boolean} params.isColspan - 是否跨列
 * @param {Boolean} params.isGroup - 是否为分组表头
 * @param {Number} params.leftStartIndex - 左侧开始索引
 * @param {Number} params.rightEndIndex - 右侧结束索引
 * @param {Array} params.visibleColumn - 可见列数组
 */
export function showGroupFixedError({ isColspan, isGroup, leftStartIndex, rightEndIndex, visibleColumn }) {
  if (isGroup && (isColspan || leftStartIndex || (rightEndIndex !== null && rightEndIndex !== visibleColumn.length))) {
    error('ui.grid.error.groupFixed')
  }
}

/**
 * 处理横向滚动加载的逻辑
 * @param {Object} params - 参数对象
 * @param {Object} params._vm - Vue实例
 * @param {Object} params.scrollX - 横向滚动配置
 * @param {Boolean} params.scrollXLoad - 是否启用横向滚动加载
 * @param {Object} params.scrollXStore - 横向滚动状态存储
 * @param {Array} params.tableColumn - 表格列数组
 * @param {Array} params.visibleColumn - 可见列数组
 * @returns {Array} 返回处理后的表格列数组
 */
export function onScrollXLoad({ _vm, scrollX, scrollXLoad, scrollXStore, tableColumn, visibleColumn }) {
  if (scrollXLoad) {
    // 检查是否启用了可调整大小功能
    if (_vm.resizable || visibleColumn.some((column) => column.resizable)) {
      warn('ui.grid.error.notResizable')
    }

    // 更新滚动状态
    Object.assign(scrollXStore, {
      startIndex: 0,
      visibleIndex: 0,
      renderSize: toNumber(scrollX.rSize),
      offsetSize: toNumber(scrollX.oSize)
    })

    // 根据滚动状态截取需要显示的列
    tableColumn = visibleColumn.slice(scrollXStore.startIndex, scrollXStore.startIndex + scrollXStore.renderSize)
  }

  return tableColumn
}
