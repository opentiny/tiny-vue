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
import { emitEvent } from '../../utils/utils'

export default {
  /**
   * 触发展开行事件
   * @param {Event} event - 事件对象
   * @param {Object} params - 参数对象
   */
  triggerRowExpandEvent(event, { row }) {
    let rest = this.toggleRowExpansion(row)
    let eventParams = { $table: this, row, rowIndex: this.getRowIndex(row) }
    emitEvent(this, 'toggle-expand-change', [eventParams, event])
    return rest
  },
  toggleGroupExpansion(row) {
    this.groupExpandeds.push(row)
  },

  /**
   * 切换展开行
   * @param {Object} row - 行数据
   * @returns {Promise}
   */
  toggleRowExpansion(row) {
    return this.setRowExpansion(row)
  },

  /**
   * 处理默认展开行
   */
  handleDefaultRowExpand() {
    let { fullDataRowIdData, tableFullData } = this
    let { expandAll, expandRowKeys } = this.expandConfig || {}
    if (expandAll) {
      this.expandeds = tableFullData.slice(0)
      return
    }
    if (expandRowKeys) {
      let defExpandeds = []
      expandRowKeys.forEach((rowid) => {
        let rowCache = fullDataRowIdData[rowid]
        rowCache && defExpandeds.push(rowCache.row)
      })
      this.expandeds = defExpandeds
    }
  },

  /**
   * 设置所有行的展开状态
   * @param {Boolean} expanded - 是否展开
   * @returns {Promise}
   */
  setAllRowExpansion(expanded) {
    this.expandeds = !expanded ? [] : this.tableFullData.slice(0)
    return this.$nextTick()
  },

  /**
   * 设置展开行，二个参数设置这一行展开与否
   * @param {Array|Object} rows - 行数据或行数据数组
   * @param {Boolean} expanded - 是否展开
   * @returns {Promise}
   */
  setRowExpansion(rows, expanded) {
    let { expandeds } = this
    let { accordion } = this.expandConfig || {}

    // 是否是切换模式
    let isToggle = arguments.length === 1

    // 手风琴模式是否关闭了所有展开行
    let isAccordionCloseAll = false

    if (!rows) {
      return this.$nextTick()
    }
    if (!Array.isArray(rows)) {
      rows = [rows]
    }
    // 手风琴模式只能同时展开一个
    if (accordion) {
      rows = rows.slice(rows.length - 1, rows.length)

      // 如果是手风琴模式，则需要判断是当前切换时关闭还是展开，解决手风琴模式无法关闭当前行的问题
      if (rows.length && isToggle) {
        isAccordionCloseAll = expandeds.includes(rows[0])
      }
      expandeds.length = 0
    }

    rows.forEach((row) => {
      let index = expandeds.indexOf(row)
      // 切换模式下此行已展开，或者非切换模式下合起已展开的行，就合起此行
      if ((isToggle && ~index) || (!isToggle && !expanded && ~index)) {
        expandeds.splice(index, 1)
        // 直接返回，因为合起了不会又要展开
        return
      }
      // 切换模式下此行未展开，或者非切换模式下展开已合起的行，就展开此行
      if ((isToggle && !isAccordionCloseAll && !~index) || (!isToggle && expanded && !~index)) {
        expandeds.push(row)
      }
    })
    return this.$nextTick()
  },

  /**
   * 检查行是否已展开
   * @param {Object} row - 行数据
   * @returns {Boolean}
   */
  hasRowExpand(row) {
    return ~this.expandeds.indexOf(row)
  },

  /**
   * 清空展开行
   * @returns {Promise}
   */
  clearRowExpand() {
    this.expandeds = []
    return this.$nextTick()
  }
}
