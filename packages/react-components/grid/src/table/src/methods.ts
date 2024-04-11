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
import { getColumnList } from '@opentiny/vue-renderless/grid/utils'
import { toDecimal } from '@opentiny/vue-renderless/common/string'
import { addClass, removeClass, isDisplayNone } from '@opentiny/vue-renderless/common/deps/dom'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import {
  isNumber,
  filterTree,
  isArray,
  isBoolean,
  findTree,
  set,
  get,
  has,
  eachTree,
  arrayEach,
  sortBy,
  isUndefined,
  toNumber,
  isEqual,
  mapTree,
  clone,
  destructuring,
  clear,
  sum,
  find
} from '@opentiny/vue-renderless/grid/static/'
import {
  isPx,
  isScale,
  colToVisible,
  getCell,
  getEventTargetNode,
  rowToVisible,
  setCellValue,
  getRowid,
  emitEvent
} from '@opentiny/vue-renderless/grid/utils'
import Cell from '../../cell'
import { error, warn } from '../../tools'
import TINYGrid, { Interceptor } from '../../adapter'
import GlobalConfig from '../../config'
import { handleLayout } from './utils/updateStyle'
import {
  isTargetRadioOrCheckbox,
  onClickExpandColumn,
  onClickTreeNodeColumn,
  onHighlightCurrentRow,
  onClickRadioColumn,
  onClickSelectColumn,
  onClickCellSelect
} from './utils/triggerCellClickEvent'
import {
  onGroupHeader,
  reassignNotFixed,
  reassignFixedRight,
  reassignFixedLeft,
  showGroupFixedError,
  onScrollXLoad
} from './utils/refreshColumn'
import { mapFetchColumnPromise } from './utils/handleResolveColumn'
import { hooks, isVue2 } from '@opentiny/vue-common'
import { computeScrollYLoad, computeScrollXLoad } from './utils/computeScrollLoad'
import { calcTableWidth, calcFixedStickyPosition } from './utils/autoCellWidth'
import { generateFixedClassName } from './utils/handleFixedColumn'
import { funcs, headerProps, handleAllColumnPromises } from './funcs'
import {
  handleGlobalMousedownEvent,
  handleGlobalBlurEvent,
  handleGlobalMousewheelEvent,
  handleArrowKeyDown,
  handleCopyKeyDown,
  handleCtxMenu,
  handleDelKeyDown,
  handleEnterKeyDown,
  handleEscKeyDown,
  handleF2KeyDown,
  handleOtherKeyDown,
  handleSpaceKeyDown,
  handleTabKeyDown,
  handleGlobalKeydownEvent,
  handleGlobalResizeEvent
} from './events'

import {
  getRowUniqueId,
  getTableRowKey,
  getTotalRows,
  setTreeScrollYCache,
  sliceFullData,
  sliceVisibleColumn,
  setSliceColumnTree
} from './strategy'

let run = (names, $table) => names.forEach((name) => $table[name].apply($table))
let debounceScrollLoadDuration = 200
let AsyncCollectTimeout = 100

// 多字段排序
const sortMultiple = (rows, columns, _vm) => {
  const greaterThan = (valueP, valueQ) => {
    const typeP = typeof valueP
    const typeQ = typeof valueQ
    if (typeP === typeQ && ['number', 'string', 'boolean'].includes(typeP)) {
      return valueP > valueQ
    } else {
      return String(valueP) > String(valueQ)
    }
  }

  const { multipleColumnSort } = _vm.sortOpts

  if (typeof multipleColumnSort === 'function') {
    rows = multipleColumnSort({ $table: _vm, tableData: rows, sortColumns: columns })
  } else {
    rows = rows.sort((p, q) => {
      for (let i = 0; i < columns.length; i++) {
        const { property, order } = columns[i]
        const flag = order === 'asc' ? 1 : -1
        const valueP = p[property]
        const valueQ = q[property]

        if (!Object.is(valueP, valueQ)) {
          return greaterThan(valueP, valueQ) ? flag : -flag
        }
      }

      return 0
    })
  }

  return rows
}

// 创建快速缓存
const buildCache = (tableData, treeConfig = {}) => {
  const backupMap = new WeakMap()
  const { children } = treeConfig

  const traverse = (arr) => {
    const backup = []

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((row) => {
        // 深拷贝
        const backupRow = clone({ ...row, [children]: null }, true)

        backup.push(backupRow)
        backupMap.set(row, backupRow)

        if (row[children]) {
          backupRow[children] = traverse(row[children])
        }
      })
    }

    return backup
  }

  const backupData = traverse(tableData)

  return { backupData, backupMap }
}

const Methods = {
  getParentElem() {
    let $el = this.$grid ? this.$grid.$el : this.$el
    return $el.parentNode
  },
  updateParentHeight() {
    if (this.$grid) {
      this.$grid.updateParentHeight()
    } else {
      this.parentHeight = this.getParentElem().clientHeight
    }
  },
  getParentHeight() {
    return this.parentHeight
  },
  clearAll(silent) {
    run(['clearScroll', 'clearSort', 'clearCurrentRow', 'clearCurrentColumn'], this)
    run(['clearSelection', 'clearRowExpand', 'clearTreeExpand'], this)
    if (TINYGrid._filter) {
      this.clearFilter(silent)
    }
    if (this.keyboardConfig || this.mouseConfig) {
      run(['clearIndexChecked', 'clearHeaderChecked', 'clearChecked', 'clearSelected', 'clearCopyed'], this)
    }
    return this.clearActived()
  },
  refreshData(data) {
    const next = () => {
      this.tableData = []
      return this.loadTableData(data || this.tableFullData)
    }
    return this.$nextTick().then(next)
  },
  refreshStyle() {
    let { $el, rowSpan, spanMethod } = this
    // 存在合并时才刷新样式
    if ($el && (rowSpan || spanMethod)) {
      let transform = $el.style.transform
      let restore = () =>
        setTimeout(() => {
          $el.style.transform = transform
        })
      $el.style.transform = 'scale(0.99999)'
      return this.$nextTick().then(restore)
    }
    return this.$nextTick()
  },
  updateData() {
    return this.handleTableData(true)
      .then(() => this.updateFooter())
      .then(() => this.recalculate())
  },
  // 处理表格数据（过滤，排序，虚拟滚动需要渲染数据的条数）
  handleTableData(force) {
    // 这里处理是否强制刷新afterFullData：经过筛选排序后的数据
    force && this.updateAfterFullData()

    // 判断是否有虚拟滚动，有即剪切数据
    this.tableData = sliceFullData(this)

    // updateScrollStatus：处理异步渲染列相关逻辑，buildGroupData：处理表格分组相关逻辑
    run(['updateScrollStatus', 'buildGroupData'], this)

    return this.$nextTick()
  },
  // 全量加载表格数据
  loadTableData(datas, notRefresh) {
    let { $refs, editStore, height, maxHeight, treeConfig } = this as any
    let { lastScrollLeft, lastScrollTop } = this as any
    let { scrollY } = this.optimizeOpts
    // 浅拷贝原始全量数据
    let tableFullData = isArray(datas) ? datas.slice(0) : []
    // 是否开启纵向的虚拟滚动，默认大于等于500条开启纵向的虚拟滚动
    let scrollYLoad = scrollY && scrollY.gt > 0 && scrollY.gt <= tableFullData.length

    // 初始化新增和删除数据列表
    editStore.insertList = []
    editStore.removeList = []
    // 全量数据
    Object.assign(this, { tableFullData })
    // 缓存数据
    this.updateCache(true)
    // 深拷贝原始数据，并建立表格行数据和行数据对应的原始数据的映射关系，可以极大的提高检查编辑态单元格status和还原行数据的速度
    const { backupData, backupMap } = buildCache(tableFullData, treeConfig)
    // tableSynchData：用户传递拖来的原始数据，tableSourceData：深拷贝用户传递过来的初始原始数据
    Object.assign(this, { tableSynchData: datas, tableSourceData: backupData, backupMap, scrollYLoad })

    if (scrollYLoad && !(height || maxHeight)) {
      error('ui.grid.error.scrollYHeight')
    }

    // 如果notRefresh为true表示不刷新表格状态，所以也不需要清除滚动状态
    if (!notRefresh) {
      this.clearScroll()
    }

    // 对全量数据进行筛选、排序、虚拟滚动切割数据等一系列操作
    this.handleTableData(true)
    // reserveCheckSelection：处理分页切换保留选中状态的逻辑，checkSelectionStatus：处理全选、半选等选中状态
    run(['reserveCheckSelection', 'checkSelectionStatus'], this)
    let first = () => !notRefresh && this.recalculate()
    let second = () => {
      // 让表格滚动条滚动到最后一次滚动到的位置
      if (lastScrollLeft || lastScrollTop) {
        return this.scrollTo(lastScrollLeft, lastScrollTop)
      } else {
        // 重置表头滚动条位置
        let headerElem = $refs.tableHeader ? $refs.tableHeader.$el : null
        headerElem && (headerElem.scrollLeft = 0)
      }
    }
    return this.$nextTick().then(first).then(second)
  },
  // 重新加载数据
  reloadData(datas) {
    return this.clearAll()
      .then(() => this.loadTableData(datas))
      .then(() => this.handleDefault())
  },
  // 加载全量数据
  loadData(datas) {
    return new Promise((resolve) => {
      this.loadTableData(datas)
      resolve()
    }).then(this.recalculate)
  },
  reloadRow(row, record, field) {
    let { tableData, tableSourceData } = this
    let rowIndex = this.getRowIndex(row)
    let originRow = tableSourceData[rowIndex]
    let hasSrc = originRow && row
    let hasSrcNoField = hasSrc && !field
    if (hasSrc && field) {
      set(originRow, field, get(record || row, field))
    }
    if (hasSrcNoField && record) {
      tableSourceData[rowIndex] = record
      clear(row, undefined)
      Object.assign(row, this.defineField({ ...record }))
      this.updateCache(true)
    }
    if (hasSrcNoField && !record) {
      destructuring(originRow, clone(row, true))
    }
    this.tableData = tableData.slice(0)
    return this.$nextTick()
  },
  // 从新加载列配置
  reloadColumn(columns) {
    return this.clearAll().then(() => this.loadColumn(columns))
  },
  loadColumn(columns) {
    return new Promise((resolve) => {
      this.collectColumn = mapTree(columns, (column) => Cell.createColumn(this, column), headerProps)
      resolve()
    }).then(() => this.$nextTick())
  },
  // 更新数据的 Map
  updateCache(source) {
    let { fullAllDataRowIdData, fullAllDataRowMap, fullDataRowIdData, fullDataRowMap, tableFullData, treeConfig } = this
    let rowKey = getTableRowKey(this)
    let buildRowCache = (row, index) => {
      let rowId = getRowid(this, row)
      if (!rowId) {
        rowId = getRowUniqueId()
        set(row, rowKey, rowId)
      }
      let rowCache = { row, rowid: rowId, index }
      if (source) {
        fullDataRowIdData[rowId] = rowCache
        fullDataRowMap.set(row, rowCache)
      }
      fullAllDataRowIdData[rowId] = rowCache
      fullAllDataRowMap.set(row, rowCache)
    }

    let clearCache = () => {
      fullAllDataRowIdData = {}
      this.fullAllDataRowIdData = fullAllDataRowIdData
      fullAllDataRowMap.clear()
      if (source) {
        fullDataRowIdData = {}
        this.fullDataRowIdData = fullDataRowIdData
        fullDataRowMap.clear()
      }
    }
    clearCache()
    if (treeConfig) {
      eachTree(tableFullData, buildRowCache, treeConfig)
    } else {
      tableFullData.forEach(buildRowCache)
    }
  },
  // 更新列的 Map
  cacheColumnMap() {
    let { fullColumnMap, tableFullColumn: fullColumn } = this
    let fullColumnIdData = {}
    this.fullColumnIdData = fullColumnIdData
    Map.prototype.clear.apply(fullColumnMap)
    fullColumn.forEach((column, index) => {
      let colCache = { colid: column.id, column, index }
      fullColumnIdData[column.id] = colCache
      fullColumnMap.set(column, colCache)
    })
  },
  // 通过tr的dom元素获取行数据等相关信息
  getRowNode(tr) {
    if (!tr) {
      return null
    }

    const { fullAllDataRowIdData, tableFullData, treeConfig } = this
    const dataRowid = tr.getAttribute('data-rowid')
    if (treeConfig) {
      const matches = findTree(tableFullData, (row) => getRowid(this, row) === dataRowid, treeConfig)
      if (matches) {
        return matches
      }
    } else {
      if (fullAllDataRowIdData[dataRowid]) {
        const rowCache = fullAllDataRowIdData[dataRowid]
        return {
          item: rowCache.row,
          index: rowCache.index,
          items: tableFullData
        }
      }
    }
    return null
  },
  getColumnNode(cell) {
    if (!cell) {
      return null
    }
    let { isGroup, fullColumnIdData, tableFullColumn } = this
    let dataColid = cell.getAttribute('data-colid')
    if (isGroup) {
      let matches = findTree(tableFullColumn, (column) => column.id === dataColid, headerProps)
      if (matches) {
        return matches
      }
    } else {
      let colCache = fullColumnIdData[dataColid]
      return {
        index: colCache.index,
        item: colCache.column,
        items: tableFullColumn
      }
    }
    return null
  },
  getRowIndex(row) {
    let { fullDataRowMap } = this
    return fullDataRowMap.has(row) ? fullDataRowMap.get(row).index : -1
  },
  getColumnIndex(column) {
    let { fullColumnMap } = this
    return fullColumnMap.has(column) ? fullColumnMap.get(column).index : -1
  },
  hasIndexColumn(column) {
    return column && column.type === 'index'
  },
  defineField(row, copy) {
    if (!row || typeof row !== 'object') {
      return row
    }
    if (copy) {
      row = clone(row, true)
    }
    let { visibleColumn } = this
    let rowKey = getTableRowKey(this)

    visibleColumn.forEach(({ property, editor }) => {
      let propNotExist = property && !has(row, property)
      let propDefaultValue = editor && !isUndefined(editor.defaultValue) ? editor.defaultValue : null
      if (propNotExist) {
        set(row, property, propDefaultValue)
      }
    })
    // 如果行数据的唯一主键不存在，则生成
    if (!get(row, rowKey)) {
      set(row, rowKey, getRowUniqueId())
    }
    return row
  },
  isTemporaryRow(row) {
    let rowid = getRowid(this, row)
    return find(this.temporaryRows, (r) => rowid === getRowid(this, r))
  },
  createData(records, copy) {
    let isArr = isArray(records)
    if (!isArr) {
      records = [records]
    }
    let tmp = records.map((record) => this.defineField(record, copy))
    return new Promise((resolve) => {
      resolve(isArr ? tmp : tmp[0])
    })
  },
  createRow(records) {
    return this.createData(records, true)
  },

  /*
   * 清空单元格内容：
   * 如果不传参数，则清空整个表格内容；
   * 如果传row，则清空一行内容；
   * 如果传rows，则清空多行内容；
   * 如果还额外传了field，则清空指定单元格内容；
   */
  clearData(rows, field) {
    rows = !arguments.length ? this.tableFullData : rows && !isArray(rows) ? [rows] : rows
    rows.forEach((row) => {
      if (field) {
        set(row, field, null)
      } else {
        this.visibleColumn.forEach((column) => {
          column.property && setCellValue(row, column, null)
        })
      }
    })
    return this.$nextTick()
  },
  hasRowInsert(row) {
    return ~this.editStore.insertList.indexOf(row)
  },
  compareRow(row, originalRow, field) {
    const value = get(row, field)
    const originalValue = get(originalRow, field)
    const column = this.getColumnByField(field)
    const equals = column.equals || this.equals
    let result

    // 如果存在列级或表格级自定义比较配置，就进行外部比较
    if (equals) {
      result = equals({ value, originalValue, field, row, originalRow, column, $table: this })
    }

    // 如果外部比较的返回值不是布尔类型，仍然进行内部比较
    if (typeof result !== 'boolean') {
      result = isEqual(originalValue, value)
    }

    return result
  },
  hasRowChange(row, field) {
    let { tableSourceData, treeConfig, visibleColumn, backupMap } = this
    let argsLength = arguments.length
    let rowId = getRowid(this, row)
    let originRow
    // 新增的数据不需要检测
    if (this.isTemporaryRow(row)) {
      return false
    }
    if (treeConfig) {
      let children = treeConfig.children
      let cacheRow = backupMap.get(row)

      row = { ...row, [children]: null }

      if (cacheRow) {
        originRow = { ...cacheRow, [children]: null }
      }
    } else {
      originRow = find(tableSourceData, (item) => rowId === getRowid(this, item))
    }
    if (originRow) {
      if (argsLength > 1) {
        return !this.compareRow(row, originRow, field)
      }

      for (let i = 0; i < visibleColumn.length; i++) {
        let { property } = visibleColumn[i]
        if (property && !this.compareRow(row, originRow, property)) {
          return true
        }
      }
    }
    return false
  },
  // 获取表格所有列
  getColumns(columnIndex) {
    let { visibleColumn: columns } = this
    let argsLength = arguments.length
    return argsLength ? columns[columnIndex] : columns.slice(0)
  },
  getColumnById(colid) {
    let { fullColumnIdData } = this
    let colCache = fullColumnIdData[colid]
    return colCache ? colCache.column : null
  },
  getColumnByField(field) {
    let { visibleColumn: columns } = this
    return typeof field === 'string' && field ? find(columns, (column) => column.property === field) : null
  },
  // 获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）
  getTableColumn() {
    let { collectColumn, tableColumn, tableFullColumn, visibleColumn } = this
    return {
      fullColumn: tableFullColumn.slice(0),
      visibleColumn: visibleColumn.slice(0),
      tableColumn: tableColumn.slice(0),
      collectColumn: collectColumn.slice(0)
    }
  },
  // 获取表格所有数据
  getData(rowIndex) {
    let tableSynchData = this.data || this.tableSynchData
    if (!tableSynchData) {
      return tableSynchData
    }
    if (!arguments.length) {
      return tableSynchData.slice(0)
    }
    if (typeof rowIndex === 'number' && rowIndex > -1) {
      return tableSynchData[rowIndex]
    }
    return undefined
  },
  // 获取选中数据。notCopy为true不返回数据副本，表格内部要继续处理其返回值时设置为true
  getSelectRecords(notCopy) {
    let { selectConfig = {}, selection } = this
    let { tableFullData, treeConfig } = this
    let { checkField } = selectConfig
    let { rowList = [] } = {}
    if (checkField && treeConfig) {
      rowList = filterTree(tableFullData, (row) => get(row, checkField), treeConfig)
    }
    if (checkField && !treeConfig) {
      rowList = tableFullData.filter((row) => get(row, checkField))
    }
    if (!checkField && treeConfig) {
      rowList = filterTree(tableFullData, (row) => ~selection.indexOf(row), treeConfig)
    }
    if (!checkField && !treeConfig) {
      rowList = tableFullData.filter((row) => ~selection.indexOf(row))
    }
    return notCopy ? rowList : clone(rowList, true)
  },
  // 对数据进行筛选和排序，获取处理后数据。服务端筛选和排序，在接口调用时已传入参数
  updateAfterFullData() {
    let { remoteFilter, remoteSort, tableFullData, visibleColumn, sortOpts } = this
    let tableData = tableFullData
    let sortColumn = find(visibleColumn, (column) => column.order)
    let filterColumn = visibleColumn.filter(({ filter }) => !!filter)
    let doTableSort = () => {
      let { order, property } = sortColumn
      let params = { $table: this, column: sortColumn, data: tableData, order, property }

      tableData = this.sortMethod(params) || tableData
    }
    let doColumnSort = () => {
      let sortedFlag = false

      // 如果开启了多列排序，并且排序列数量大于1，就进行多列排序
      if (sortOpts.multipleColumnSort) {
        let sortColumns = visibleColumn.filter(({ order }) => !!order)

        if (sortColumns.length > 1) {
          tableData = sortMultiple(tableData, sortColumns, this)
          sortedFlag = true
        }
      }

      if (!sortedFlag) {
        let columnSortMethod = sortColumn.sortMethod
        let sorted = columnSortMethod
          ? tableData.sort(columnSortMethod)
          : sortBy(tableData, sortColumn.sortBy ? sortColumn.sortBy : sortColumn.property)

        tableData = sortColumn.order === 'desc' ? sorted.reverse() : sorted
      }
    }

    tableData = tableData.filter((row) =>
      filterColumn.every((column) => (remoteFilter ? true : this.handleLocalFilter(row, column)))
    )

    if (sortColumn && sortColumn.order) {
      let isRemote = isBoolean(sortColumn.remoteSort) ? sortColumn.remoteSort : remoteSort

      !isRemote && this.sortMethod && doTableSort()
      !isRemote && !this.sortMethod && doColumnSort()
    }

    this.afterFullData = tableData

    setTreeScrollYCache(this)

    return tableData
  },
  // 组装表格分组映射表
  buildGroupData() {
    const { rowGroup, tableData } = this
    Object.assign(this, { groupData: {}, groupFolds: [] })
    if (!rowGroup) {
      return
    }
    let { groups = {}, current = '' } = {}
    tableData.forEach((row, rowIndex) => {
      const rowid = getRowid(this, row)
      const { field } = rowGroup
      let prevRow = tableData[rowIndex - 1]

      if (!prevRow || prevRow[field] !== row[field]) {
        current = rowid
        groups[rowid] = { fold: false, children: [row] }
      } else {
        groups[current].children.push(row)
      }
    })
    this.groupData = groups
  },
  getRowById(rowid) {
    let { fullDataRowIdData } = this
    let rowCache = fullDataRowIdData[rowid]
    return rowCache ? rowCache.row : null
  },
  // 获取处理后的表格数据
  getTableData() {
    let { afterFullData, footerData, tableData, tableFullData } = this
    return {
      visibleData: afterFullData.slice(0),
      footerData: footerData.slice(0),
      tableData: tableData.slice(0),
      fullData: tableFullData.slice(0)
    }
  },
  handleDefault() {
    // 异步列（请求与直接设置props>data）
    this.handleAsyncColumn(this.tableData)
    this.selectConfig && this.handleSelectionDefChecked()
    this.radioConfig && this.handleRadioDefChecked()
    this.expandConfig && this.handleDefaultRowExpand()
    this.treeConfig && this.handleDefaultTreeExpand()
    this.updateFooter()
    this.$nextTick(() => setTimeout(this.recalculate))
  },
  // 动态列处理
  mergeCustomColumn(customColumns, sort, colWidth) {
    let { isGroup, tableFullColumn: fullColumn } = this
    let mergeWidth = (col) => colWidth && Object.assign(col, colWidth[col.property])
    let getCustomCol = (col) => findTree(customColumns, (item) => col.property && item.property === col.property)
    let hasCustomsOrColWidth = customColumns.length || colWidth
    let isGroupOrNonSort = isGroup || !sort
    let matches

    this.isUpdateCustoms = true
    // 不排序时直接合并属性
    if (hasCustomsOrColWidth && isGroupOrNonSort) {
      fullColumn.forEach((column) => {
        mergeWidth(column)
        matches = getCustomCol(column)
        matches && Object.assign(column, matches.item)
      })
    }
    // 排序处理非嵌套列的情况
    if (hasCustomsOrColWidth && !isGroupOrNonSort) {
      let { collectColumn = [], customMap = {}, orderColumn = [] } = {}
      mapTree(customColumns, (customCol) => {
        let targetCol = find(fullColumn, (item) => customCol.property && item.property === customCol.property)
        if (targetCol) {
          Object.assign(targetCol, customCol)
          customMap[customCol.property] = targetCol
          orderColumn.push(targetCol)
        }
      })
      fullColumn.forEach((col) => {
        let newColumn = customMap[col.property] ? orderColumn.shift() : col
        if (newColumn) {
          mergeWidth(newColumn)
          collectColumn.push(newColumn)
        }
      })
      this.collectColumn = collectColumn
    }
    this.$emit('update:customs', fullColumn)
  },
  resetAll() {
    run(['resetCustoms', 'resetResizable'], this)
  },
  hideColumn(tableColumn) {
    // 返回隐藏的列
    return this.handleVisibleColumn(tableColumn, false)
  },
  showColumn(tableColumn) {
    // 返回显示的列
    return this.handleVisibleColumn(tableColumn, true)
  },
  resetCustoms() {
    // 重置个性化设置
    return this.handleVisibleColumn()
  },
  handleVisibleColumn(tableColumn, visible) {
    const { tableFullColumn } = this
    const toolbarVm = this.getVm('toolbar')
    const columns = arguments.length ? [tableColumn] : tableFullColumn

    columns.forEach((column) => {
      column.visible = arguments.length ? visible : true
    })

    if (toolbarVm) {
      toolbarVm.updateSetting()
    }

    return this.$nextTick()
  },
  // 初始化加载动态列：customColumns 列信息，sort 是否按顺序加载
  reloadCustoms(customColumns, sort, colWidth) {
    let first = () => {
      this.mergeCustomColumn(customColumns, sort, colWidth)
    }
    let second = () => {
      this.handleTableData(true)
    }
    let third = () => this.refreshColumn().then(() => this.tableFullColumn)
    return this.$nextTick().then(first).then(second).then(third)
  },
  watchColumn(value) {
    let { customs, treeConfig } = this
    let toolbarVm = this.getVm('toolbar')
    // 获取叶子列数组
    let fullColumn = getColumnList(value)

    setSliceColumnTree(this)
    this.tableFullColumn = fullColumn
    this.cacheColumnMap()

    // 在列初始化完毕后，合并一次动态列配置，并触发一次表格列初始就绪事件
    if (!this.isColumnInitReady) {
      this.isColumnInitReady = true
      customs && this.mergeCustomColumn(customs)
      this.$emit('column-init-ready')
    }

    // 经过动态列个性化合并后，部分列可能被操作隐藏等，此步骤计算可见列
    this.refreshColumn()

    // 可见列确定之后触发一次列就绪事件
    if (!this.isColumnReady) {
      this.isColumnReady = true
      this.$emit('column-ready')
    }

    this.handleTableData(true)

    if (toolbarVm) {
      toolbarVm.updateColumn(fullColumn)
    }

    // 树结构的固定列与展开行功能有冲突
    if (
      treeConfig &&
      fullColumn.some((column) => column.fixed) &&
      fullColumn.some((column) => column.type === 'expand')
    ) {
      warn('ui.grid.error.treeFixedExpand')
    }
  },

  /*
   * 刷新列信息
   * 将固定的列左边、右边分别靠边
   * 如果使用了分组表头，固定列必须在左侧或者右侧
   */
  refreshColumn() {
    let [leftList, centerList, rightList] = [[], [], []]
    let [letIndex, leftStartIndex, rightEndIndex, isColspan] = [0, null, null, undefined]
    let { columnStore, isGroup } = this
    let { scrollXStore, tableFullColumn } = this
    let { scrollX } = this.optimizeOpts
    // 如果是分组表头，如果子列全部被隐藏，则根列也隐藏
    onGroupHeader({ _vm: this, isGroup, headerProps })
    // 重新分配列
    tableFullColumn
      .filter((column) => column.visible)
      .forEach((column, columnIndex) => {
        // 收集左侧冻结列
        let ret = reassignFixedLeft({ column, columnIndex, isColspan, leftList, leftStartIndex, letIndex })
        leftStartIndex = ret.leftStartIndex
        letIndex = ret.letIndex
        isColspan = ret.isColspan

        // 收集右侧冻结列
        ret = reassignFixedRight({ column, columnIndex, isColspan, rightEndIndex, rightList })
        isColspan = ret.isColspan
        rightEndIndex = ret.rightEndIndex

        // 收集非冻结列
        reassignNotFixed({ centerList, column })
      })

    const visibleColumn = leftList.concat(centerList).concat(rightList)

    // 是否开启x轴方向上的虚拟滚动
    let scrollXLoad = scrollX && scrollX.gt && scrollX.gt < tableFullColumn.length
    let tableColumn = visibleColumn
    Object.assign(columnStore, { leftList, centerList, rightList })
    showGroupFixedError({ isColspan, isGroup, leftStartIndex, rightEndIndex, visibleColumn })
    tableColumn = onScrollXLoad({ _vm: this, scrollX, scrollXLoad, scrollXStore, tableColumn, visibleColumn })
    this.scrollXLoad = scrollXLoad

    // 需要渲染的列数据
    this.tableColumn = tableColumn
    this.visibleColumn = visibleColumn
    this.visibleColumnChanged = true

    this.columnAnchor && this.$grid.buildColumnAnchorParams()
    return this.$nextTick().then(() => {
      this.updateFooter()
      this.recalculate()
    })
  },
  // 指定列宽的列进行拆分
  analyColumnWidth() {
    let { columnMinWidth, columnStore, columnWidth, tableFullColumn } = this
    let [autoList, pxList, pxMinList, resizeList, scaleList, scaleMinList] = [[], [], [], [], [], []]
    let ruleChains = [
      {
        match: (col) => col.resizeWidth,
        action: (col) => resizeList.push(col)
      },
      { match: (col) => isPx(col.width), action: (col) => pxList.push(col) },
      {
        match: (col) => isScale(col.width),
        action: (col) => scaleList.push(col)
      },
      {
        match: (col) => isPx(col.minWidth),
        action: (col) => pxMinList.push(col)
      },
      {
        match: (col) => isScale(col.minWidth),
        action: (col) => scaleMinList.push(col)
      },
      { match: () => true, action: (col) => autoList.push(col) }
    ]
    for (let i = 0; i < tableFullColumn.length; i++) {
      let column = tableFullColumn[i]
      columnWidth && !column.width && (column.width = columnWidth)
      columnMinWidth && !column.minWidth && (column.minWidth = columnMinWidth)
      if (column.visible) {
        for (let j = 0; j < ruleChains.length; j++) {
          let ruleChain = ruleChains[j]
          if (ruleChain.match(column)) {
            ruleChain.action(column)
            break
          }
        }
      }
    }
    Object.assign(columnStore, { autoList, pxList, pxMinList, resizeList, scaleList, scaleMinList })
  },

  /**
   * 计算单元格列宽，动态分配可用剩余空间
   * 支持（width=?、width=?px、width=?%、min-width=?、min-width=?px、min-width=?%）
   */
  recalculate() {
    const mainBody = this.elemStore['main-body-wrapper']

    // 如果表格主体是隐藏的，就不重新计算布局
    if (isDisplayNone(mainBody)) {
      return
    }

    const { scrollXLoad, scrollYLoad, scrollLoad } = this
    const { tableBody, tableFooter, tableHeader } = this.$refs
    const getElem = (ref) => (ref ? ref.$el : null)
    const headerElem = getElem(tableHeader)
    const bodyElem = getElem(tableBody)
    const footerElem = getElem(tableFooter)

    if (!bodyElem) {
      return this.computeScrollLoad()
    }

    // 设置表格每列的尺寸(此时还没有设置colgroup的dom元素尺寸)，这里执行之后还需要继续设置滚动条状态
    this.autoCellWidth(headerElem, bodyElem, footerElem)

    if (scrollXLoad || scrollYLoad || scrollLoad) {
      return this.computeScrollLoad().then(() => {
        this.autoCellWidth(headerElem, bodyElem, footerElem)
      })
    }

    // 实现布局，将列renderWidth设置到具体的dom上
    return this.computeScrollLoad()
  },
  // 列宽计算
  autoCellWidth(headerEl, bodyEl, footerEl) {
    // 列宽最少限制 40px
    let minCellWidth = 40
    let { fit, columnStore } = this
    let tableHeight = bodyEl.offsetHeight
    let overflowY = bodyEl.scrollHeight > bodyEl.clientHeight
    let bodyW = bodyEl.clientWidth
    let { leftList, rightList } = columnStore

    // 此处操作很重要，这里会计算所有列的宽度并且计算出表格整体宽度
    let tableWidth = calcTableWidth({ bodyWidth: bodyW, columnStore, fit, minCellWidth, remainWidth: bodyW })
    // offsetWidth（带有滚动条的宽度），clientWidth（不带滚动条的样式）
    let scrollbarWidth = overflowY ? bodyEl.offsetWidth - bodyW : 0
    let parentHeight = this.parentHeight

    // 经过calcTableWidth计算出了所有列的宽度，下一步设置所有冻结列sticky布局的left和right值
    calcFixedStickyPosition({ headerEl, bodyEl, columnStore, scrollbarWidth })

    Object.assign(this, { overflowY, parentHeight, scrollbarWidth, tableHeight, tableWidth })
    if (headerEl) {
      this.headerHeight = headerEl.offsetHeight
    }
    if (footerEl) {
      let footerHeight = footerEl.offsetHeight
      this.scrollbarHeight = Math.max(footerHeight - footerEl.clientHeight, 0)
      this.overflowX = tableWidth > footerEl.clientWidth
      this.footerHeight = footerHeight
    } else {
      this.scrollbarHeight = Math.max(tableHeight - bodyEl.clientHeight, 0)
      this.overflowX = tableWidth > bodyW
    }

    if (leftList.length || rightList.length) {
      // 处理冻结列类名
      generateFixedClassName({ $table: this, bodyElem: bodyEl, leftList, rightList })
    }
  },
  // 同步headerHeight
  syncHeaderHeight() {
    let headerEl = this.$refs.tableHeader?.$el
    if (headerEl) this.headerHeight = headerEl.offsetHeight
  },
  resetResizable() {
    const toolbarVm = this.getVm('toolbar')
    this.visibleColumn.forEach((col) => (col.resizeWidth = 0))
    if (toolbarVm) {
      toolbarVm.resetResizable()
    }
    this.analyColumnWidth()

    return this.recalculate()
  },
  updateStyle() {
    // 窗口resize后，手动调用recalculate父容器高度还是初始值，需要update一下
    this.updateParentHeight()
    let { columnStore, currentRow, height, maxHeight, minHeight, parentHeight, tableColumn, scrollbarWidth } = this
    const { scrollYLoad, scrollXLoad, scrollLoad } = this
    let layoutList = ['header', 'body', 'footer']
    let { customHeight, scaleToPx } = {}
    const { tableBody, tableHeader } = this.$refs
    const getElem = (ref) => (ref ? ref.$el : null)
    const headerEl = getElem(tableHeader)
    const bodyEl = getElem(tableBody)

    if (height === 'auto') {
      customHeight = parentHeight
    } else {
      scaleToPx = Math.floor((parseInt(height) / 100) * parentHeight)
      customHeight = isScale(height) ? scaleToPx : toNumber(height)
    }

    layoutList.forEach((layout) => {
      const args1 = { _vm: this, columnStore, customHeight }
      const args2 = { layout, maxHeight, minHeight, parentHeight, tableColumn }

      // 实现布局，将列renderWidth设置到具体的dom上
      let ret = handleLayout(Object.assign(args1, args2))
      tableColumn = ret.tableColumn
      maxHeight = ret.maxHeight
      minHeight = ret.minHeight
    })
    currentRow && this.setCurrentRow(currentRow)
    // Fixed issue #129
    this.syncHeaderHeight()
    return this.$nextTick(() => {
      const { leftList, rightList } = columnStore
      // 只有在虚拟滚动+冻结列同时存在的情况下才重新计算冻结列位置
      if ((leftList.length || rightList.length) && (scrollYLoad || scrollXLoad || scrollLoad)) {
        calcFixedStickyPosition({ headerEl, bodyEl, columnStore, scrollbarWidth })
      }
      return true
    })
  },
  preventEvent(event, type, args, next, end) {
    let eventList = Interceptor.get(type)
    if (!eventList.some((listener) => listener(args, event, this) === false)) {
      next && next()
    }
    end && end()
  },
  blurOutside({ row, args, column }, event) {
    if (column && row) {
      const { editor } = column
      if (typeof editor.blurOutside === 'function') {
        return !!editor.blurOutside({ cell: args.cell, event })
      }
      const blurClassConfig = editor.blurClass || this.editConfig.blurClass
      if (blurClassConfig) {
        let blurClass = []
        if (typeof blurClassConfig === 'string') {
          blurClass.push(blurClassConfig)
        } else if (isArray(blurClassConfig)) {
          blurClass = blurClassConfig.slice(0)
        }
        return (
          (args.cell && args.cell.contains(event.target)) ||
          blurClass.some((cls) => !this.getEventTargetNode(event, document.body, cls).flag)
        )
      }
    }
  },
  handleGlobalMousedownEvent,
  handleGlobalBlurEvent,
  handleGlobalMousewheelEvent,
  handleEscKeyDown,
  handleEnterKeyDown,
  handleCtxMenu,
  handleArrowKeyDown,
  handleDelKeyDown,
  handleSpaceKeyDown,
  handleTabKeyDown,
  handleCopyKeyDown,
  handleF2KeyDown,
  handleOtherKeyDown,
  handleGlobalKeydownEvent,
  handleGlobalResizeEvent,
  // 处理单选框默认勾选
  handleRadioDefChecked() {
    let { fullDataRowIdData } = this
    let { checkRowKey } = this.radioConfig || {}
    let rowid = checkRowKey && encodeURIComponent(checkRowKey)
    let rowCache = fullDataRowIdData[rowid]
    if (rowid && rowCache) {
      this.setRadioRow(rowCache.row)
    }
  },
  // 单选，行选中事件
  triggerRadioRowEvent(event, params) {
    let { selectRow } = this
    let { checkMethod } = this.radioConfig || {}
    if (checkMethod && !checkMethod(params)) {
      return
    }
    this.setRadioRow(params.row)
    this.setCurrentRow(params.row)
    if (selectRow !== params.row) {
      emitEvent(this, 'radio-change', [params, event])
    }
  },
  triggerCurrentRowEvent(event, params) {
    let { currentRow } = this
    this.setCurrentRow(params.row)
    if (currentRow !== params.row) {
      emitEvent(this, 'current-change', [params, event])
    }
  },
  // 高亮行，设置某一行为高亮状态，如果调不加参数，则会取消目前高亮行的选中状态
  setCurrentRow(row) {
    run(['clearCurrentRow', 'clearCurrentColumn'], this)
    this.currentRow = row
    if (this.highlightCurrentRow) {
      let rowElems = this.$el.querySelectorAll(`[data-rowid="${getRowid(this, row)}"]`)
      arrayEach(rowElems, (elem) => addClass(elem, 'row__current'))
    }
    return this.$nextTick()
  },
  setRadioRow(row) {
    row !== this.selectRow && this.clearRadioRow()
    this.selectRow = row
    return this.$nextTick()
  },
  clearCurrentRow() {
    Object.assign(this, { currentRow: null, hoverRow: null })
    let rowElems = this.$el.querySelectorAll('.row__current')
    arrayEach(rowElems, (elem) => removeClass(elem, 'row__current'))
    return this.$nextTick()
  },
  clearRadioRow() {
    let { selectRow: radioRow } = this
    radioRow && (this.selectRow = null)
    return this.$nextTick()
  },
  getCurrentRow() {
    let { currentRow } = this
    return currentRow
  },
  getRadioRow() {
    let { selectRow: radioRow } = this
    return radioRow
  },
  triggerHeaderCellClickEvent(event, params) {
    let { _lastResizeTime: lastTime, highlightCurrentColumn } = this
    let { cell, column } = params
    const { trigger } = this.sortOpts
    let isResizable = lastTime && lastTime > Date.now() - 300
    let isSort = this.getEventTargetNode(event, cell, 'tiny-grid-sort-wrapper').flag
    let isFilter = this.getEventTargetNode(event, cell, 'tiny-grid-filter-wrapper').flag

    if (trigger === 'cell' && !(isResizable || isSort || isFilter)) {
      let nextOrder = this.toggleColumnOrder(column)

      this.triggerSortEvent(event, column, nextOrder)
    }

    let eventParams = {
      triggerResizable: isResizable,
      triggerSort: isSort,
      triggerFilter: isFilter,
      ...params
    }
    emitEvent(this, 'header-cell-click', [eventParams, event])
    if (highlightCurrentColumn) {
      return this.setCurrentColumn(column, true)
    }
    return this.$nextTick()
  },
  setCurrentColumn(column) {
    run(['clearCurrentRow', 'clearCurrentColumn'], this)
    this.currentColumn = column
    let colElems = this.$el.querySelectorAll(`.${column.id}`)
    arrayEach(colElems, (elem) => addClass(elem, 'col__current'))
    return this.$nextTick()
  },
  clearCurrentColumn() {
    this.currentColumn = null
    let colElems = this.$el.querySelectorAll('.col__current')
    arrayEach(colElems, (elem) => removeClass(elem, 'col__current'))
    return this.$nextTick()
  },
  // 当单元格发生改变时，如果存在规则，则校验
  handleChangeCell(event, params) {
    this.triggerValidate('blur')
      .catch((e) => e)
      .then(() => {
        this.handleActived(params, event)
          .then(() => this.triggerValidate('change'))
          .catch((e) => e)
      })
  },
  // 列点击事件：如果是单击模式，则激活为编辑状态；如果是双击模式，则单击后选中状态
  triggerCellClickEvent(event, params) {
    let { $el, highlightCurrentRow, editStore } = this
    let { radioConfig = {}, selectConfig = {}, expandConfig = {} } = this
    let { treeConfig = {}, editConfig, mouseConfig = {} } = this
    let { actived } = editStore
    let { row, column, cell } = params
    // 解决 checkbox 重复触发两次问题
    if (
      isTargetRadioOrCheckbox(event, column, 'radio') ||
      isTargetRadioOrCheckbox(event, column, 'selection', 'checkbox')
    ) {
      return
    }
    // 如果是展开行
    onClickExpandColumn({ $el, _vm: this, column, event, expandConfig, params })
    // 如果是树形表格
    onClickTreeNodeColumn({ _vm: this, column, event, params, treeConfig })

    if (
      (!column.treeNode || !this.getEventTargetNode(event, $el, 'tiny-grid-tree-wrapper').flag) &&
      (column.type !== 'expand' || !this.getEventTargetNode(event, $el, 'tiny-grid__expanded').flag)
    ) {
      // 如果是高亮行
      onHighlightCurrentRow({ $el, _vm: this, event, highlightCurrentRow, params, radioConfig })
      // 如果是单选
      onClickRadioColumn({ $el, _vm: this, column, event, params, radioConfig })
      // 如果是多选
      onClickSelectColumn({ _vm: this, column, event, params, selectConfig })
      // 如果设置了单元格选中功能，则不会使用点击事件去处理（只能支持双击模式）
      onClickCellSelect({ _vm: this, actived, cell, column, editConfig, event, mouseConfig, params, row })
    }

    emitEvent(this, 'cell-click', [params, event])
  },
  // 列双击点击事件：如果是双击模式，则激活为编辑状态
  triggerCellDBLClickEvent(event, params) {
    let { editStore, editConfig } = this
    let { actived } = editStore
    let isActiveNewCell = !actived.args || event.currentTarget !== actived.args.cell
    let isDblclickNewCell = editConfig && editConfig.trigger === 'dblclick' && isActiveNewCell
    if (isDblclickNewCell && editConfig.mode === 'row') {
      this.triggerValidate('blur')
        .catch((e) => e)
        .then(() => {
          this.handleActived(params, event)
            .then(() => this.triggerValidate('change'))
            .catch((e) => e)
        })
    }
    if (isDblclickNewCell && editConfig.mode === 'cell') {
      this.handleActived(params, event)
        .then(() => this.triggerValidate('change'))
        .catch((e) => e)
    }

    emitEvent(this, 'cell-dblclick', [params, event])
  },
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
    let { remoteSort, tableFullColumn, visibleColumn } = this
    let column = find(visibleColumn, (item) => item.property === field)
    let isRemote = isBoolean(column.remoteSort) ? column.remoteSort : remoteSort
    let isColumnSortable = column.type ? false : column.sortable || column.remoteSort

    if (this.sortable && isColumnSortable) {
      if (column.order !== order) {
        tableFullColumn.forEach((column) => (column.order = null))
        column.order = order
        // 如果是服务端排序，则跳过本地排序处理
        !isRemote && this.handleTableData(true).then(this.refreshStyle)
      }
      return this.$nextTick().then(this.updateStyle)
    }
    return this.$nextTick()
  },
  clearSort() {
    arrayEach(this.tableFullColumn, (column) => (column.order = null))
    this.$grid && (this.$grid.sortData = {})

    return this.handleTableData(true).then(this.refreshStyle)
  },
  toggleGroupExpansion(row) {
    this.groupExpandeds.push(row)
  },
  // 展开行事件
  triggerRowExpandEvent(event, { row }) {
    let rest = this.toggleRowExpansion(row)
    let eventParams = { $table: this, row, rowIndex: this.getRowIndex(row) }
    emitEvent(this, 'toggle-expand-change', [eventParams, event])
    return rest
  },
  // 切换展开行
  toggleRowExpansion(row) {
    return this.setRowExpansion(row)
  },
  // 处理默认展开行
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
  setAllRowExpansion(expanded) {
    this.expandeds = !expanded ? [] : this.tableFullData.slice(0)
    return this.$nextTick().then(this.recalculate)
  },
  // 设置展开行，二个参数设置这一行展开与否；支持单行；支持多行
  setRowExpansion(rows, expanded) {
    let { expandeds } = this
    let { accordion } = this.expandConfig || {}
    // 是否是切换模式
    let isToggle = arguments.length === 1
    if (!rows) {
      return this.$nextTick().then(this.recalculate)
    }
    if (!isArray(rows)) {
      rows = [rows]
    }
    // 只能同时展开一个
    if (accordion) {
      expandeds.length = 0
      rows = rows.slice(rows.length - 1, rows.length)
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
      if ((isToggle && !~index) || (!isToggle && expanded && !~index)) {
        expandeds.push(row)
      }
    })
    return this.$nextTick().then(this.recalculate)
  },
  hasRowExpand(row) {
    return ~this.expandeds.indexOf(row)
  },
  clearRowExpand() {
    let hasExpand = this.expandeds.length
    this.expandeds = []
    return this.$nextTick().then(() => (hasExpand ? this.recalculate() : 0))
  },
  // 获取虚拟滚动状态
  getVirtualScroller() {
    let { scrollXLoad, scrollYLoad } = this
    let { scrollLeft, scrollTop } = this.$refs.tableBody.$el
    return {
      scrollX: scrollXLoad,
      scrollY: scrollYLoad,
      scrollLeft,
      scrollTop
    }
  },
  // 横向 X 可视渲染事件处理
  triggerScrollXEvent(event) {
    this.loadScrollXData(event)
  },
  debounceScrollX(event) {
    if (!this.tasks.debounceScrollX) {
      this.tasks.debounceScrollXHandler = null
      this.tasks.debounceScrollX = () => {
        return requestAnimationFrame(() => {
          this.tasks.debounceScrollXHandler = null
          this.loadScrollXData(event)
        })
      }
    }

    if (this.tasks.debounceScrollXHandler) {
      cancelAnimationFrame(this.tasks.debounceScrollXHandler)
      this.tasks.debounceScrollXHandler = null
    }

    this.tasks.debounceScrollXHandler = this.tasks.debounceScrollX()
  },
  // 处理x轴滚动时，虚拟滚动数据计算
  loadScrollXData() {
    let { scrollXStore, visibleColumn } = this
    let { offsetSize, renderSize, startIndex, visibleIndex, visibleSize } = scrollXStore
    let { scrollLeft } = this.$refs.tableBody.$el
    let { preload = false, toVisibleIndex = 0, width = 0 } = {}
    for (let i = 0; i < visibleColumn.length; i++) {
      width += visibleColumn[i].renderWidth
      if (scrollLeft < width) {
        toVisibleIndex = i
        break
      }
    }
    if (visibleIndex === toVisibleIndex) {
      this.clostTooltip()
      return
    }
    let marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize)
    if (visibleIndex > toVisibleIndex) {
      // 向左
      preload = startIndex >= toVisibleIndex - offsetSize
      if (preload) {
        scrollXStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize))
        this.updateScrollXData()
      }
    } else {
      // 向右
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize
      if (preload) {
        scrollXStore.startIndex = Math.max(0, Math.min(visibleColumn.length - renderSize, toVisibleIndex - marginSize))
        this.updateScrollXData()
      }
    }
    scrollXStore.visibleIndex = toVisibleIndex
    this.clostTooltip()
  },
  // 纵向 Y 可视渲染事件处理
  triggerScrollYEvent(event) {
    this.loadScrollYData(event)
  },
  // 处理滚动分页相关逻辑
  debounceScrollLoad(event) {
    if (!this.tasks.debounceScrollLoad) {
      this.tasks.debounceScrollLoad = debounce(debounceScrollLoadDuration, () => {
        const { scrollHeight, bodyHeight } = this.scrollLoadStore
        const { currentPage, pageSize } = this.$grid.tablePage
        const max = scrollHeight - bodyHeight
        let scrollTop = event.target.scrollTop

        if (scrollTop > max) {
          scrollTop = max
        }

        const { rowHeight } = this.scrollYStore
        let visibleIndex = Math.ceil(scrollTop / rowHeight)
        let page = Math.ceil(visibleIndex / pageSize) + 1

        if (currentPage !== page) {
          this.$grid.pageCurrentChange(page)
        }
      })
    }

    this.tasks.debounceScrollLoad()
  },
  // 纵向 Y 可视渲染处理
  loadScrollYData(event) {
    const { scrollYStore } = this as any
    const { startIndex, renderSize, offsetSize, visibleIndex, visibleSize, rowHeight } = scrollYStore

    // 动态获取容器的scrollTop，这里有可能会造成卡顿，暂时没有好的方案
    let { scrollTop } = event.target
    let toVisibleIndex = Math.ceil(scrollTop / rowHeight)
    let preload = false
    if (visibleIndex === toVisibleIndex) {
      return
    }
    let marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize)
    if (toVisibleIndex < visibleIndex) {
      // 向上
      preload = startIndex >= toVisibleIndex - offsetSize
      if (preload) {
        scrollYStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize))
        this.updateScrollYData()
      }
    } else {
      // 向下
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize
      if (preload) {
        let totalRows = getTotalRows(this)
        scrollYStore.startIndex = Math.max(0, Math.min(totalRows - renderSize, toVisibleIndex - marginSize))
        this.updateScrollYData()
      }
    }
    scrollYStore.visibleIndex = toVisibleIndex
    this.$nextTick(() => {
      this.updateSelectedCls(true)
    })
  },
  getRowHeight() {
    const { $refs, vSize } = this
    const { scrollY } = this.optimizeOpts
    let { tableBody, tableHeader } = $refs
    let rHeight = scrollY.rHeight
    if (!rHeight) {
      // 获取表头或者表格体第一个tr的高度
      let firstTrElem =
        (tableBody && tableBody.$el.querySelector('tbody>tr')) ||
        (tableHeader && tableHeader.$el.querySelector('thead>tr')) ||
        null
      if (firstTrElem) {
        rHeight = firstTrElem.clientHeight
      }
    }
    // 默认的行高，默认行高需要跟 css 样式一致
    if (!rHeight) {
      let vSizeList = ['medium', 'small', 'mini']
      // 这里因为需要适配多套主题配置方案，所以这里的默认高度写死不合适，待整改
      let defSizeList = [44, 40, 36]
      let i = vSizeList.indexOf(vSize)
      rHeight = ~i ? defSizeList[i] : 48
    }
    return rHeight
  },
  // 计算可视渲染相关数据
  computeScrollLoad() {
    return this.$nextTick().then(() => {
      let { $refs, optimizeOpts, visibleColumn } = this as any
      let { scrollLoad, scrollXLoad, scrollXStore, scrollYLoad, scrollYStore } = this as any
      let { scrollX, scrollY } = optimizeOpts
      let { tableBody } = $refs
      let bodyElem = tableBody ? tableBody.$el : null
      if (bodyElem) {
        // 只计算X轴虚拟滚动逻辑,优化正常表格计算效率
        computeScrollXLoad({ _vm: this, scrollX, scrollXLoad, scrollXStore, tableBodyElem: bodyElem, visibleColumn })
        // 只计算Y轴虚拟滚动逻辑,优化正常表格计算效率
        computeScrollYLoad({ _vm: this, scrollLoad, scrollY, scrollYLoad, scrollYStore, tableBodyElem: bodyElem })
      }
      this.$nextTick(this.updateStyle)
    })
  },
  // 处理x轴方向虚拟滚动列数据加载
  updateScrollXData() {
    let { scrollXLoad, scrollXStore, tableColumn, treeConfig, visibleColumn, visibleColumnChanged, columnStore } = this
    let { lastStartIndex = -1, renderSize, startIndex } = scrollXStore
    let args = { lastStartIndex, renderSize, scrollXLoad, startIndex, tableColumn, columnStore }

    Object.assign(args, { treeConfig, visibleColumn, visibleColumnChanged })

    // 获取需要渲染的列数和最后一次渲染列的index值
    let ret = sliceVisibleColumn(args)

    if (ret.sliced) {
      // 更新DOM样式保证表格滚动时的对齐，初始化表格时也需要计算x轴方向滚动条占位符的尺寸
      this.updateScrollXSpace()
      // 处理滚动条滚动后的异步渲染列逻辑
      this.updateScrollStatus()
    }

    this.debounceRaf('updateScrollXDataHandler', () => {
      scrollXStore.lastStartIndex = ret.lastStartIndex
      // 设置新的渲染列触发Vue渲染
      this.tableColumn = ret.tableColumn
      this.visibleColumnChanged = ret.visibleColumnChanged

      this.$nextTick(this.updateStyle)
    })
  },
  // 更新横向 X 可视渲染上下剩余空间大小
  updateScrollXSpace() {
    const { elemStore, scrollXLoad, scrollXStore, scrollbarWidth, tableWidth, visibleColumn } = this
    const { startIndex } = scrollXStore
    let { bodyElem, footerElem, headerElem, leftSpaceWidth, marginLeft } = {}

    // 从缓存中获取主表头/主表体/主表尾表格元素
    headerElem = elemStore['main-header-table']
    bodyElem = elemStore['main-body-table']
    footerElem = elemStore['main-footer-table']

    // 累加已滚动出渲染范围的列的总渲染宽度
    leftSpaceWidth = visibleColumn.slice(0, startIndex).reduce((previous, column) => {
      // 左侧冻结列，不计算margin
      if (column.fixed === 'left') return previous
      return previous + column.renderWidth
    }, 0)
    marginLeft = scrollXLoad ? `${leftSpaceWidth}px` : ''

    // 设置主表头/主表体/主表尾表格元素的marginLeft（已滚动出渲染范围的列，不渲染但是保留宽度占位，保证对齐）
    headerElem && (headerElem.style.marginLeft = marginLeft)
    bodyElem.style.marginLeft = marginLeft
    footerElem && (footerElem.style.marginLeft = marginLeft)
    const layouts = ['header', 'body', 'footer']
    layouts.forEach((layout) => {
      const xSpaceElem = elemStore[`main-${layout}-xSpace`]
      const extra = layout === 'header' ? scrollbarWidth : 0
      // 这里只能找到body中的元素，header和footer永远是false
      if (xSpaceElem) {
        // 表格主体内容x轴方向虚拟滚动条占位元素
        xSpaceElem.style.width = scrollXLoad ? `${tableWidth + extra}px` : ''
      }
    })

    this.$nextTick(this.updateStyle)
  },
  debounceRaf(handlerKey, callback) {
    if (this[handlerKey]) {
      cancelAnimationFrame(this[handlerKey])
    }

    this[handlerKey] = requestAnimationFrame(() => {
      this[handlerKey] = null
      callback()
    })
  },
  // 处理虚拟滚动加载数据，并更新YSpace位置
  updateScrollYData() {
    // 更新DOM样式保证表格滚动时的对齐
    this.updateScrollYSpace()
    // 节流更新响应数据
    this.debounceRaf('updateScrollYDataHandler', () => {
      this.handleTableData().then(() => this.$nextTick(this.updateStyle))
    })
  },
  // 更新纵向虚拟滚动 Y 可视渲染上下剩余空间大小（使用tiny-grid-body__y-space元素撑开足够空间）
  updateScrollYSpace() {
    let { $grid, elemStore, scrollLoad, scrollLoadStore, scrollYLoad } = this
    let { rowHeight, startIndex } = this.scrollYStore
    let totalRows = getTotalRows(this)
    let bodyHeight = totalRows * rowHeight
    let scrollHeight = $grid.pagerConfig ? $grid.pagerConfig.total * rowHeight : 0
    let isVScrollOrLoad = scrollYLoad || scrollLoad
    let { marginTop, ySpaceHeight } = {}

    // 通过开始渲染下标startIndex和表格的行高度来计算marginTop，虚滚场景为已滚动出渲染范围的行的总高度，滚动分页场景为空
    marginTop = isVScrollOrLoad && scrollYLoad ? `${Math.max(startIndex * rowHeight, 0)}px` : ''
    // 虚滚场景的滚动高度，滚动分页场景的视口高度
    ySpaceHeight = isVScrollOrLoad ? `${bodyHeight}px` : ''

    // 滚动分页场景的视口高度和滚动高度缓存
    scrollLoadStore.bodyHeight = bodyHeight
    scrollLoadStore.scrollHeight = scrollHeight

    const tableElem = elemStore['main-body-table']

    // 这里最好使用transform3D,使用gpu加速，防止页面重绘
    if (tableElem) {
      tableElem.style.transform = marginTop ? `translateY(${marginTop})` : ''
    }

    const ySpaceElem = elemStore['main-body-ySpace']
    ySpaceElem && (ySpaceElem.style.height = ySpaceHeight)

    // 滚动分页加载逻辑
    if (ySpaceElem && scrollLoad && $grid) {
      Object.assign(scrollLoadStore, { bodyHeight, scrollHeight })
      ySpaceElem.firstChild.style.height = `${scrollHeight}px`
      ySpaceElem.onscroll = this.debounceScrollLoad
    }
  },
  updateScrollLoadBar(event) {
    let { $el, elemStore, scrollLoad, scrollLoadStore } = this
    if (scrollLoad && $el.contains(event.target)) {
      let wheelDelta = event.wheelDelta ? event.wheelDelta : -event.detail * 40
      let scrollElm = elemStore['main-body-ySpace']
      let { scrollHeight, bodyHeight } = scrollLoadStore
      let max = scrollHeight - bodyHeight
      let top = scrollElm.scrollTop - wheelDelta
      top = max < top ? max : top
      top = top < 0 ? 0 : top
      scrollElm.scrollTop = top
    }
  },
  scrollTo(scrollLeft, scrollTop) {
    let { $refs } = this
    let { tableBody, tableFooter, rightBody } = $refs
    let bodyElem = tableBody.$el
    let footerElem = tableFooter ? tableFooter.$el : null
    let rightBodyElem = rightBody ? rightBody.$el : null
    if (isNumber(scrollLeft)) {
      if (footerElem) {
        footerElem.scrollLeft = scrollLeft
      } else {
        bodyElem.scrollLeft = scrollLeft
      }
    }
    if (isNumber(scrollTop)) {
      rightBodyElem && (rightBodyElem.scrollTop = scrollTop)
      bodyElem.scrollTop = scrollTop
    }
    return this.$nextTick()
  },
  scrollToRow(row, column, isDelay, move) {
    let hasRowCache = this.fullAllDataRowMap.has(row)
    let isDelayArg = isDelay || isBoolean(column)
    row && hasRowCache && rowToVisible(this, row)
    return this.scrollToColumn(column, isDelayArg, move)
  },
  scrollToTreeRow(row) {
    let { tableFullData, treeConfig, treeOpts } = this
    if (!treeConfig) {
      return this.$nextTick()
    }
    let matchObj = findTree(tableFullData, (item) => item === row, treeOpts)
    if (!matchObj) {
      return this.$nextTick()
    }
    let nodes = matchObj.nodes
    nodes.forEach((row, index) => {
      if (index === nodes.length - 1 || this.hasTreeExpand(row)) {
        return
      }
      this.setTreeExpansion(row, true)
    })
    return this.$nextTick()
  },
  scrollToColumn(column, isDelay, move) {
    let hasColCache = this.fullColumnMap.has(column)
    column && hasColCache && colToVisible(this, column, move)
    return isDelay && this.scrollYLoad
      ? new Promise((resolve) => setTimeout(() => resolve(this.$nextTick()), 50))
      : this.$nextTick()
  },
  resetScrollTop() {
    this.lastScrollTop = 0
  },
  clearScroll() {
    let { $refs, scrollXStore, scrollYStore } = this
    Object.assign(this, { lastScrollLeft: 0 })
    Object.assign(scrollXStore, { startIndex: 0, visibleIndex: 0 })
    Object.assign(scrollYStore, { startIndex: 0, visibleIndex: 0 })
    this.$nextTick(() => {
      let { tableBody, tableHeader, tableFooter } = $refs
      let { tableBodyElem, tableHeaderElem, tableFooterElem } = {}
      tableBodyElem = tableBody ? tableBody.$el : null
      tableHeaderElem = tableHeader ? tableHeader.$el : null
      tableFooterElem = tableFooter ? tableFooter.$el : null
      if (this.afterMounted) {
        tableBodyElem && Object.assign(tableBodyElem, { scrollLeft: 0, scrollTop: 0 })
        tableFooterElem && Object.assign(tableFooterElem, { scrollLeft: 0 })
        tableHeaderElem && Object.assign(tableHeaderElem, { scrollLeft: 0 })
      }
    })
    return this.$nextTick()
  },
  // 更新表尾合计
  updateFooter() {
    let { afterFullData, footerMethod, showFooter, summaryConfig, tableColumn } = this
    if (footerMethod && showFooter) {
      let data = footerMethod({ columns: tableColumn, data: afterFullData })
      if (data.length && data.some((value) => !isArray(value))) {
        data = [data]
      }
      this.footerData = tableColumn.length ? data : []
    }
    if (summaryConfig) {
      let { fields, fraction, text, truncate } = summaryConfig
      let summary = tableColumn.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return text || ''
        }
        if (~fields.indexOf(column.property)) {
          return toDecimal(sum(this.afterFullData, column.property), fraction, truncate)
        }
        return null
      })
      this.footerData = [summary]
    }
    return this.$nextTick()
  },
  // 更新列状态：如果组件值v-model发生change，调用该函数更新列的编辑状态。如果单元格配置了校验规则，则进行校验
  updateStatus(scope, cellValue, renderOpts) {
    let customValue = !isUndefined(cellValue)
    return this.$nextTick().then(() => {
      let { $refs, editRules, tableData, validStore } = this
      let { tableBody } = $refs
      if (!scope || !tableBody || !editRules) {
        return
      }

      if (renderOpts && renderOpts.isValidAlways) {
        validStore.visible = true
      }

      let { column, row } = scope
      let type = 'change'
      if (!this.hasCellRules(type, row, column)) {
        return
      }
      let rowIndex = tableData.indexOf(row)
      getCell(this, { row, rowIndex, column }).then((cell) => {
        if (!cell) {
          return
        }
        return this.validCellRules(type, row, column, cellValue)
          .then(() => {
            customValue && validStore.visible && setCellValue(row, column, cellValue)
            this.clearValidate()
          })
          .catch(({ rule }) => {
            customValue && setCellValue(row, column, cellValue)
            this.showValidTooltip({ rule, row, column, cell })
          })
      })
    })
  },
  /* X/Y 方向滚动 */
  updateScrollStatus() {
    if (!this.tasks.updateScrollStatus) {
      this.tasks.updateScrollStatus = debounce(AsyncCollectTimeout, () => {
        const { scrollXLoad, scrollYLoad, isAsyncColumn } = this

        if (isAsyncColumn && (scrollXLoad || scrollYLoad)) {
          const { tableData, scrollXStore, scrollYStore, tableFullData, scrollDirection = 'N' } = this
          const isInit =
            (scrollXLoad && scrollXStore.visibleIndex === 0) || (scrollYLoad && scrollYStore.visibleIndex === 0)

          // 第一次初始化及横、纵向滚动时（用户直接设置 data 属性时将由 handleAsyncColumn 初始化异步列）
          if (isInit || scrollDirection !== 'N') {
            this.handleResolveColumn(tableFullData, this.collectAsyncColumn(tableData))
          }
        }
      })
    }

    this.tasks.updateScrollStatus()
  },

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
    if (!rowId) {
      warn('The (grid-props:rowId) is required for the asynchronous column.')
      return fetchColumns
    }
    tableColumn.forEach((col) => {
      const { async } = col.format || {}
      const { fetch, splitConfig = {} } = async || {}
      if (typeof fetch === 'function') {
        const columnValues = []
        tableData.forEach((row) => {
          let cellValue = row[col.property]
          if (typeof cellValue !== 'string' || (typeof cellValue === 'string' && !cellValue)) {
            cellValue = ' '
          }
          let cellValuesCount = 1
          let cellValues = [cellValue]
          const uniqueKey = this.getAsyncColumnUniqueKey(col.property, row)
          // 默认不开启
          if (splitConfig.enabled === true) {
            cellValues = cellValue.split(splitConfig.valueSplit || ',')
            cellValuesCount = cellValues.length
          }
          if (!asyncRenderMap[uniqueKey]) {
            // 以行主键、列名作为缓存的 Key 防止重复加载（缓存单元格显示值的个数）
            asyncRenderMap[uniqueKey] = cellValuesCount
            // 单元格多值支持
            cellValues.forEach((value) => columnValues.push(value))
          }
        })
        if (columnValues.length) {
          fetchColumns.push({ ...col, columnValues })
        }
      }
    })
    return fetchColumns
  },
  // fetchData 执行
  handleAsyncColumn(tableData) {
    if (this.isAsyncColumn && tableData.length) {
      // 每次请求都需要清空加载缓存
      this.asyncRenderMap = {}
      this.handleResolveColumn(tableData, this.collectAsyncColumn(tableData))
    }
  },
  // 查询异步列
  handleResolveColumn(tableData, fetchColumns) {
    const { tableColumn, scrollYStore, asyncRenderMap, scrollXLoad, scrollYLoad } = this
    const { startIndex } = scrollYStore
    const isScrollLoad = scrollXLoad || scrollYLoad
    if (fetchColumns.length === 0) {
      return
    }
    const promises = mapFetchColumnPromise({ _vm: this, fetchColumns, tableColumn })
    Promise.all(promises).then(
      handleAllColumnPromises({ startIndex, fetchColumns, tableData, asyncRenderMap, isScrollLoad }, this)
    )
  },
  // Publish methods 与工具栏对接
  connect({ toolbar }) {
    this.$toolbar = toolbar
  },
  // 检查触发源是否属于目标节点
  getEventTargetNode,
  // 可见性改变事件处理
  handleVisibilityChange(visible, entry) {
    if (visible) {
      this.updateParentHeight()
      this.updateTableBodyHeight()
      this.recalculate()
    }

    emitEvent(this, 'visible-change', [{ $table: this, visible, entry }])
  },

  // 更新表体高度
  updateTableBodyHeight() {
    if (!this.tasks.updateTableBodyHeight) {
      this.tasks.updateTableBodyHeight = debounce(10, () => {
        const tableBody = this.$refs.tableBody
        this.tableBodyHeight = tableBody ? tableBody.$el.clientHeight : 0
      })
    }

    this.tasks.updateTableBodyHeight()
  },
  // 按顺序切换列的排序状态（null --> asc --> desc --> null --> ...）
  toggleColumnOrder(column) {
    return column.order ? (column.order === 'asc' ? 'desc' : null) : 'asc'
  },
  watchDataForVue3() {
    if (isVue2) return

    const stopWatch = hooks.watch(
      [() => this.data, () => this.data && this.data.length],
      ([newData, newLength], [oldData, oldLength]) => {
        // vue3下额外监控数组长度改变，解决push无响应等问题
        if (Array.isArray(this.data) && newData === oldData && newLength !== oldLength) {
          this.handleDataChange()
        }
      }
    )

    hooks.onBeforeUnmount(() => stopWatch())
  },
  getVm(name) {
    return this.$grid.getVm(name)
  }
}
funcs.forEach((name) => {
  Methods[name] = function (...args) {
    return this[`_${name}`] ? this[`_${name}`](...args) : null
  }
})
export default Methods
