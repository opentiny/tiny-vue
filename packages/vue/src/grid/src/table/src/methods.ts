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
import { getColumnList, assemColumn, repairFixed } from '@opentiny/vue-renderless/grid/utils'
import { toDecimal } from '@opentiny/utils'
import { addClass, removeClass } from '@opentiny/utils'
import { isNull } from '@opentiny/utils'
import { debounce } from '@opentiny/utils'
import { fastdom } from '@opentiny/utils'
import {
  isNumber,
  filterTree,
  isArray,
  isBoolean,
  findTree,
  set,
  get,
  has,
  arrayEach,
  sortBy,
  isUndefined,
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
  emitEvent,
  getRowkey,
  dfsCopy,
  getRowUniqueId
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
import { hooks } from '@opentiny/vue-common'
import { computeScrollYLoad, computeScrollXLoad } from './utils/computeScrollLoad'
import { calcTableWidth, calcFixedDetails } from './utils/autoCellWidth'
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
  handleGlobalResizeEvent,
  handleGlobalMousedownCaptureEvent
} from './events'

import { sliceVisibleColumn, buildRowGroupFullData } from './strategy'
import { updateRowStatus, getCellStatus, buildRenderGraph } from '../../composable'

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

const Methods = {
  // 监听某个元素是否出现在视口中
  addIntersectionObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    this.intersectionObserver = new IntersectionObserver((entries) => {
      let entry = entries[0]

      if (entries.length > 1) {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting)

        if (intersectingEntry) {
          entry = intersectingEntry
        }
      }

      this.handleVisibilityChange(entry.isIntersecting, entry)
    }, this.intersectionOption)

    this.intersectionObserver.observe(this.$refs.tableBody.$el)
  },
  removeIntersectionObserver() {
    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.$refs.tableBody.$el)
      this.intersectionObserver.disconnect()
      this.intersectionObserver = null
    }
  },
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
    const { fetchOption = {} } = this.$grid
    const { isReloadFilter, isReloadScroll = false } = fetchOption

    let functionNames = [
      'clearScroll',
      'clearSort',
      'clearCurrentRow',
      'clearCurrentColumn',
      'clearSelection',
      'clearRowExpand',
      'clearTreeExpand'
    ]

    // 存在配置时，移除 clearScroll, 重载数据时不清除滚动位置
    if (isReloadScroll) {
      functionNames = functionNames.filter((i) => i !== 'clearScroll')
    }

    run(functionNames, this)
    this.cellStatus.clear()

    if (typeof isReloadFilter === 'undefined' ? TINYGrid._filter : !isReloadFilter) {
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
      this.cellStatus.clear()
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
    // 在表格列就绪后，才处理数据过滤排序、保留选中、表头选中、多选禁用、默认状态
    if (force && (this.tableFullColumn?.length > 0 || this.viewType !== GlobalConfig.viewConfig.DEFAULT)) {
      // 对表格全量数据进行过滤排序得到后全量数据，计算分组表数据，生成图形数据
      this.updateAfterFullData()
      // selectConfig.reserve保留多选状态，使用后全量数据计算表头多选状态
      this.updateSelectionStatus()
      // 处理表头多选禁用
      this.handleSelectionHeader()
    }

    const { scrollYStore, _graphInfo, scrollYLoad } = this
    const { renderSize, startIndex } = scrollYStore
    const graphed = _graphInfo?.graphed
    const tableNode = scrollYLoad ? graphed?.slice(startIndex, startIndex + renderSize) : graphed
    const tableData = tableNode?.map((node) => node.payload) || []

    this.tableNode = tableNode
    this.tableData = tableData

    this.updateScrollStatus()

    // 在表格列就绪后，才处理默认状态
    if (force && this.tableFullColumn?.length > 0) {
      // 处理默认状态，依赖于渲染数据tableData
      this.handleDefault()
    }

    return this.$nextTick()
  },
  // 全量加载表格数据
  loadTableData(datas, notRefresh) {
    const { editStore, height, maxHeight, lastScrollLeft, lastScrollTop, optimizeOpts } = this
    const { scrollY } = optimizeOpts
    const tableFullData = isArray(datas) ? datas.slice(0) : []
    const scrollYLoad = scrollY && scrollY.gt > 0 && scrollY.gt <= tableFullData.length

    editStore.insertList = []
    editStore.removeList = []
    // 设置全量数据，原始数据，行虚滚标记
    Object.assign(this, { tableFullData, tableSynchData: datas, scrollYLoad })
    // 设置数据查找缓存，对数据进行备份，深度克隆
    this.updateCache(true, true)

    if (scrollYLoad && !(height || maxHeight)) {
      error('ui.grid.error.scrollYHeight')
    }

    if (!notRefresh) {
      this.clearScroll()
    }

    return this.handleTableData(true)
      .then(() => !notRefresh && this.recalculate())
      .then(() => {
        if (lastScrollLeft || lastScrollTop) {
          return this.attemptRestoreScroll({ lastScrollLeft, lastScrollTop })
        }
      })
  },
  // 重新加载数据
  reloadData(datas) {
    return this.clearAll().then(() => this.loadTableData(datas))
  },
  // 加载全量数据
  loadData(datas) {
    return new Promise((resolve) => {
      this.loadTableData(datas)
      resolve()
    })
  },
  getOriginRow(row) {
    const { backupMap } = this

    return backupMap.has(row) ? backupMap.get(row) : null
  },
  setOriginRow(row, record) {
    const { backupMap } = this

    if (backupMap.has(row) && record) {
      backupMap.set(row, record)
    }
  },
  reloadRow(row, record, field) {
    const { tableData, treeConfig, treeOrdered } = this
    const { children: childrenKey, temporaryIndex = '_$index_' } = treeConfig || {}
    const rowKey = getRowkey(this)
    const originRow = this.getOriginRow(row)
    const hasSrc = originRow && row
    const hasSrcNoField = hasSrc && !field

    if (hasSrc && field) {
      set(originRow, field, get(record || row, field))
    }

    if (hasSrcNoField && record) {
      const backupRow = this.defineField({ ...record, [rowKey]: originRow[rowKey] })
      let rowChildren, clonedRow

      if (treeConfig) {
        backupRow[childrenKey] = undefined
        rowChildren = row[childrenKey]

        if (!treeOrdered) {
          backupRow[temporaryIndex] = originRow[temporaryIndex]
        }
      }

      clonedRow = clone(backupRow, true)

      if (treeConfig) {
        backupRow[childrenKey] = originRow[childrenKey]
      }

      this.setOriginRow(row, backupRow)
      clear(row, undefined)
      Object.assign(row, clonedRow, treeConfig ? { [childrenKey]: rowChildren } : null)
      this.updateCache()
    }

    if (hasSrcNoField && !record) {
      let clonedRow

      if (treeConfig) {
        clonedRow = clone({ ...row, [childrenKey]: undefined }, true)
        clonedRow[childrenKey] = originRow[childrenKey]
      } else {
        clonedRow = clone(row, true)
      }

      destructuring(originRow, clonedRow)
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
  /** 设置数据查找缓存，对数据进行备份，深度克隆  */
  updateCache(backup = false, deepCopy = false) {
    const { tableFullData, treeConfig, treeOrdered } = this
    const rowKey = getRowkey(this)
    const { children: childrenKey, temporaryIndex = '_$index_' } = treeConfig || {}
    const isTreeOrderedFalse = treeConfig && !treeOrdered
    const backupMap = new WeakMap()

    this.fullDataRowIdData = {}
    this.fullDataRowMap.clear()

    const copyRow = (row, index, parent) => {
      let rowId = getRowid(this, row)

      if (!rowId) {
        rowId = getRowUniqueId()
        set(row, rowKey, rowId)
      }

      const rowCache = { row, rowid: rowId, index }

      this.fullDataRowIdData[rowId] = rowCache
      this.fullDataRowMap.set(hooks.toRaw(row), rowCache)

      if (backup) {
        if (isTreeOrderedFalse) {
          let parentIndex

          if (parent) {
            parentIndex = get(parent, temporaryIndex)
          }

          set(row, temporaryIndex, (parentIndex ? `${parentIndex}.` : '') + (index + 1))
        }

        const childrenField = treeConfig ? { [childrenKey]: undefined } : {}
        const backupRow = deepCopy ? clone({ ...row, ...childrenField }, true) : { ...row, ...childrenField }

        backupMap.set(row, backupRow)

        return backupRow
      }
    }

    const backupData = dfsCopy(tableFullData, copyRow, undefined, treeConfig, childrenKey)

    if (backup) {
      Object.assign(this, { tableSourceData: backupData, backupMap })
    }
  },
  // 更新列的 Map
  cacheColumnMap(options) {
    const { fullColumnMap } = this
    const fullColumnIdData = {}
    this.fullColumnIdData = fullColumnIdData
    fullColumnMap.clear()

    options.columnCaches.forEach((cache) => {
      fullColumnIdData[cache.colid] = cache
      fullColumnMap.set(cache.column, cache)
    })
  },
  // 通过tr的dom元素获取行数据等相关信息
  getRowNode(tr) {
    if (!tr) return null

    const { fullDataRowIdData, tableFullData } = this
    const dataRowid = tr.dataset.rowid
    const rowCache = fullDataRowIdData[dataRowid]

    if (rowCache) {
      return { item: rowCache.row, index: rowCache.index, items: tableFullData }
    }

    return null
  },
  getColumnNode(cell) {
    if (!cell) {
      return null
    }

    const { fullColumnIdData, tableFullColumn } = this
    const dataColid = cell.dataset.colid
    const colCache = fullColumnIdData[dataColid]

    if (colCache) {
      return { index: colCache.index, item: colCache.column, items: tableFullColumn }
    }

    return null
  },
  getRowIndex(row) {
    const rawRow = hooks.toRaw(row)
    const { fullDataRowMap } = this
    return fullDataRowMap.has(rawRow) ? fullDataRowMap.get(rawRow).index : -1
  },
  getColumnIndex(column) {
    const { fullColumnMap } = this

    return fullColumnMap.has(column) ? fullColumnMap.get(column).index : -1
  },
  hasIndexColumn(column) {
    return column?.type === 'index'
  },
  defineField(row, copy) {
    if (!row || typeof row !== 'object') {
      return row
    }

    if (copy) {
      row = clone(row, true)
    }

    const rowKey = getRowkey(this)

    this.visibleColumn.forEach(({ property, editor }) => {
      const propNotExist = property && !has(row, property)
      const propDefaultValue = editor && !isUndefined(editor.defaultValue) ? editor.defaultValue : null

      if (propNotExist) {
        set(row, property, propDefaultValue)
      }
    })
    // 如果行数据的唯一主键不存在，则生成
    const rowId = get(row, rowKey)
    if (isNull(rowId) || rowId === '') {
      set(row, rowKey, getRowUniqueId())
    }

    return row
  },
  isTemporaryRow(row) {
    const rowid = getRowid(this, row)

    return find(this.temporaryRows, (r) => rowid === getRowid(this, r))
  },
  createData(records, copy) {
    const isArr = isArray(records)

    if (!isArr) {
      records = [records]
    }

    const tmp = records.map((record) => this.defineField(record, copy))

    return new Promise((resolve) => {
      resolve(isArr ? tmp : tmp[0])
    })
  },
  createRow(records) {
    return this.createData(records, true)
  },

  /**
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
    return this.editStore.insertList.includes(row)
  },
  compareRow(row, originalRow, field) {
    const value = get(row, field)
    const originalValue = get(originalRow, field)
    const column = this.getColumnByField(field)
    const equals = column?.equals || this.equals
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
    const { treeConfig, visibleColumn, backupMap, editConfig } = this
    const insertChanged = editConfig?.insertChanged ?? false
    const argsLength = arguments.length
    let originRow
    // 新增的数据不需要检测
    if (this.isTemporaryRow(row)) {
      return insertChanged
    }

    const cacheRow = backupMap.get(row)

    if (cacheRow) {
      if (treeConfig) {
        const children = treeConfig.children

        row = { ...row, [children]: null }
        originRow = { ...cacheRow, [children]: null }
      } else {
        originRow = { ...cacheRow }
      }
    }

    if (originRow) {
      if (argsLength > 1) {
        return !this.compareRow(row, originRow, field)
      }

      for (let i = 0; i < visibleColumn.length; i++) {
        const { property } = visibleColumn[i]

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
    const allRows = this.data || this.tableSynchData

    if (!arguments.length) {
      return allRows.slice(0)
    }

    if (typeof rowIndex === 'number' && rowIndex > -1) {
      return allRows[rowIndex]
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
    let tableData = this.tableFullData

    const updateFilter = (tableData) => {
      const { remoteFilter, visibleColumn } = this
      const filterColumn = visibleColumn.filter(({ filter }) => !!filter)

      // 这里创建了一个新数组，避免对表格全量数据tableFullData进行操作
      return tableData.filter((row) =>
        filterColumn.every((column) => (remoteFilter ? true : this.handleLocalFilter(row, column)))
      )
    }

    const updateSort = (tableData) => {
      const { visibleColumn, sortOpts, remoteSort } = this
      const sortColumn = visibleColumn.find((column) => column.order)
      const isRemote = isBoolean(sortColumn?.remoteSort) ? sortColumn?.remoteSort : remoteSort

      if (sortColumn?.order && !isRemote) {
        if (this.sortMethod) {
          const { order, property } = sortColumn
          const params = { $table: this, column: sortColumn, data: tableData, order, property }

          tableData = this.sortMethod(params) || tableData
        } else {
          let sortedFlag = false

          // 如果开启了多列排序，并且排序列数量大于1，就进行多列排序
          if (sortOpts.multipleColumnSort) {
            const sortColumns = visibleColumn.filter(({ order }) => !!order)

            if (sortColumns.length > 1) {
              tableData = sortMultiple(tableData, sortColumns, this)
              sortedFlag = true
            }
          }

          if (!sortedFlag) {
            const columnSortMethod = sortColumn.sortMethod
            const sorted = columnSortMethod
              ? tableData.sort(columnSortMethod)
              : sortBy(tableData, sortColumn.sortBy ? sortColumn.sortBy : sortColumn.property)

            tableData = sortColumn.order === 'desc' ? sorted.reverse() : sorted
          }
        }
      }

      return tableData
    }

    tableData = updateFilter(tableData)
    tableData = updateSort(tableData)

    this.afterFullData = tableData
    // 构建分组表场景全量数据
    this.handleAfterFullData()

    return tableData
  },
  /** 处理后数据，构建分组数据和构建渲染图 */
  handleAfterFullData() {
    const { afterFullData } = this
    // 构建分组表场景全量数据
    buildRowGroupFullData(afterFullData, this)
    buildRenderGraph(this)
  },
  /** 处理外部过滤和重置，区别于表头过滤 */
  handleExternalFilter(value, filter) {
    return new Promise((resolve) => {
      if (value) {
        const { afterFullData } = this

        if (typeof filter === 'function') {
          this.afterFullData = filter(afterFullData) || []
          this.handleAfterFullData()
          // filtered
          this.handleTableData(false)
            .then(() => this.scrollTo(0, 0))
            .then(() => resolve(true))
        }
      } else {
        // filter reset
        this.handleTableData(true)
          .then(() => this.scrollTo(0, 0))
          .then(() => resolve(false))
      }
    })
  },
  updateSelectionStatus() {
    // selectConfig.reserve保留多选状态
    this.reserveCheckSelection()
    // 使用后全量数据计算表头多选状态
    this.checkSelectionStatus()
  },
  getRowCount() {
    return this.scrollLoad ? this.scrollLoad.pageSize || 10 : this._graphInfo?.graphed.length || 0
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

    this.isCheckable && this.selectConfig && this.handleSelectionDefChecked()
    this.radioConfig && this.handleRadioDefChecked()
    this.expandConfig && this.handleDefaultRowExpand()
    this.treeConfig && this.handleDefaultTreeExpand()

    this.updateFooter()
    this.$nextTick(this.recalculate)
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

    const toolbarVm = this.getVm('toolbar')
    // 合并更新toolbar的Column配置
    if (toolbarVm) {
      toolbarVm.updateColumn(fullColumn)
    }
    this.$emit('update:customs', fullColumn)
  },
  resetAll() {
    run(['resetCustoms', 'resetResizable'], this)
  },
  showColumn(column) {
    return this.handleVisibleColumn(column, true)
  },
  hideColumn(column) {
    return this.handleVisibleColumn(column, false)
  },
  handleVisibleColumn(column, visible) {
    const { tableFullColumn } = this
    const toolbarVm = this.getVm('toolbar')
    const columns = arguments.length ? [column] : tableFullColumn

    columns.forEach((column) => {
      column.visible = arguments.length ? visible : true
    })

    if (toolbarVm) {
      toolbarVm.updateSetting()
    }

    return this.$nextTick()
  },
  resetCustoms() {
    // 重置个性化设置
    return this.handleVisibleColumn()
  },
  // 初始化加载动态列：customColumns 列信息，sort 是否按顺序加载
  reloadCustoms(customColumns, sort, colWidth) {
    this.mergeCustomColumn(customColumns, sort, colWidth)
    this.handleTableData(true)
    return this.refreshColumn().then(() => this.tableFullColumn.slice(0))
  },
  watchColumn(value) {
    const { customs, treeConfig } = this
    const toolbarVm = this.getVm('toolbar')

    // 获取叶子列数组
    const options = { columnCaches: [] }
    const fullColumn = getColumnList(value, options)

    if (options.isGroup && options.hasFixed) {
      value.forEach((root) => repairFixed(root))
    }

    this.isCheckable = !!options.isCheckable
    this.tableFullColumn = fullColumn
    this.cacheColumnMap(options)

    // 在列初始化完毕后，合并一次动态列配置，并触发一次表格列初始就绪事件
    if (!this.isColumnInitReady) {
      this.isColumnInitReady = true
      customs && this.mergeCustomColumn(customs)
      this.$emit('column-init-ready')
    }

    // 经过动态列个性化合并后，部分列可能被操作隐藏等，此步骤计算可见列
    this.refreshColumn()

    // 可见列刷新后，更新一下表格服务端过滤参数
    if (this.remoteFilter) {
      this.$grid.filterData = this.getAllFilter()
    }

    // 可见列确定之后触发一次列就绪事件
    if (!this.isColumnReady) {
      this.isColumnReady = true
      this.$emit('column-ready')
    }

    this.handleTableData(true)

    toolbarVm?.updateColumn(fullColumn)

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

    let visibleColumn = leftList.concat(centerList).concat(rightList)
    let scrollXLoad = scrollX && scrollX.gt && scrollX.gt < tableFullColumn.length
    let tableColumn = visibleColumn

    // 对所有列的列宽进行分类：百分比/px
    Object.assign(columnStore, { leftList, centerList, rightList })
    this.analyColumnWidth()

    showGroupFixedError({ isColspan, isGroup, leftStartIndex, rightEndIndex, visibleColumn })

    tableColumn = onScrollXLoad({ _vm: this, scrollX, scrollXLoad, scrollXStore, tableColumn, visibleColumn })

    this.scrollXLoad = scrollXLoad
    this.tableColumn = tableColumn
    this.visibleColumn = visibleColumn
    this.visibleColumnChanged = true
    this.horizonScroll.fixed = leftList.length > 0 || rightList.length > 0

    this.columnAnchor && this.$grid.buildColumnAnchorParams()

    this.updateFooter()
    this.recalculate()

    return this.$nextTick().then(() => {
      // 在列初始化、列动态改变后都会抛出
      this.$emit('after-refresh-column')
      // 在列动态改变后都会尝试恢复滚动位置
      if (this.isColumnReady) {
        this.attemptRestoreScroll()
      }
    })
  },
  // 指定列宽的列进行拆分
  analyColumnWidth() {
    let { columnMinWidth, columnStore, columnWidth, tableFullColumn } = this
    let [autoList, pxList, pxMinList, resizeList, scaleList, scaleMinList] = [[], [], [], [], [], []]
    let ruleChains = [
      { match: (col) => col.resizeWidth, action: (col) => resizeList.push(col) },
      { match: (col) => isPx(col.width), action: (col) => pxList.push(col) },
      { match: (col) => isScale(col.width), action: (col) => scaleList.push(col) },
      { match: (col) => isPx(col.minWidth), action: (col) => pxMinList.push(col) },
      { match: (col) => isScale(col.minWidth), action: (col) => scaleMinList.push(col) },
      { match: () => true, action: (col) => autoList.push(col) }
    ]

    for (let i = 0; i < tableFullColumn.length; i++) {
      let column = tableFullColumn[i]

      columnWidth && !column.width && (column.width = columnWidth)
      columnMinWidth && !column.minWidth && (column.minWidth = columnMinWidth)

      if (!column.visible) {
        continue
      }

      for (let j = 0; j < ruleChains.length; j++) {
        let ruleChain = ruleChains[j]

        if (ruleChain.match(column)) {
          ruleChain.action(column)
          break
        }
      }
    }

    Object.assign(columnStore, {
      autoList,
      pxList,
      pxMinList,
      resizeList,
      scaleList,
      scaleMinList
    })
  },

  /**
   * 计算单元格列宽，动态分配可用剩余空间
   * 支持（width=?、width=?px、width=?%、min-width=?、min-width=?px、min-width=?%）
   */
  recalculate() {
    const { elemStore, scrollXLoad, scrollYLoad, scrollLoad, _tableVisible } = this
    const bodyWrapper = elemStore['main-body-wrapper']
    // 如果表格主体是隐藏的，就不重新计算布局
    if (!_tableVisible) {
      return
    }

    if (!bodyWrapper) {
      return this.computeScrollLoad()
    }

    // 设置表格每列的尺寸(此时还没有设置colgroup的dom元素尺寸)，这里执行之后还需要继续设置滚动条状态
    this.autoCellWidth()

    if (scrollXLoad || scrollYLoad || scrollLoad) {
      return this.computeScrollLoad().then(() => {
        this.autoCellWidth()
      })
    }

    // 实现布局，将列renderWidth设置到具体的dom上
    return this.computeScrollLoad()
  },
  // 列宽计算
  autoCellWidth() {
    const { horizonScroll, headerHeight, footerHeight, rowHeight } = this
    // 获取滚动容器尺寸，分配列宽，计算可见列总宽度
    const { totalWidth, offsetWidth, offsetHeight } = calcTableWidth(this)
    // 计算冻结列位置，父级列位置和宽度
    horizonScroll.fixed && calcFixedDetails(this)
    // 滚动条尺寸
    const scrollbarSize = 10
    // 容器的宽度高度
    const containerWidth = offsetWidth
    const containerHeight = offsetHeight
    // 容器的滚动宽度高度
    const containerScrollWidth = totalWidth
    const containerScrollHeight = this.getRowCount() * rowHeight + headerHeight + footerHeight
    // 容器和内容的尺寸已知，确定是否具有滚动条
    let isScrollX, isScrollY

    if (containerScrollWidth <= containerWidth) {
      if (containerScrollHeight <= containerHeight) {
        isScrollX = isScrollY = false
      } else {
        isScrollY = true
        isScrollX = containerScrollWidth + scrollbarSize > containerWidth
      }
    } else {
      isScrollX = true
      isScrollY = containerScrollHeight + scrollbarSize > containerHeight
    }

    // 虚拟滚动如果没有height的话，表格滚动到底部表头会发生偏移，将height设置为max-height可避免
    if (!this.height) {
      this.bodyWrapperHeight = containerScrollHeight > this.bodyWrapperMaxHeight ? this.bodyWrapperMaxHeight : null
    }

    Object.assign(this, {
      overflowX: isScrollX,
      overflowY: isScrollY,
      scrollbarWidth: isScrollY ? scrollbarSize : 0,
      scrollbarHeight: isScrollX ? scrollbarSize : 0,
      totalWidth,
      tableHeight: offsetHeight,
      containerScrollWidth,
      containerScrollHeight
    })

    if (!this.isColumnWidthAssigned) {
      this.isColumnWidthAssigned = true
    }
  },
  resetResizable() {
    const toolbarVm = this.getVm('toolbar')

    this.visibleColumn.forEach((col) => (col.resizeWidth = 0))
    toolbarVm?.resetResizable()
    this.analyColumnWidth()

    return this.recalculate()
  },
  updateStyle() {
    // 设置滚动容器的高度、最大高度、最小高度；表格的宽度；列的宽度
    handleLayout(this)
    this.currentRow && this.setCurrentRow(this.currentRow)
  },
  preventEvent(event, type, args, next, end) {
    let eventList = Interceptor.get(type)

    if (!eventList.some((listener) => listener(args, event, this) === false)) {
      next && next()
    }

    end && end()
  },
  blurOutside({ row, args, column }, event) {
    const { editConfig, getEventTargetNode, $el } = this

    if (column && row) {
      const { editor } = column

      if (typeof editor.blurOutside === 'function') {
        return Boolean(editor.blurOutside({ cell: args.cell, event }))
      }

      if (typeof editConfig.blurOutside === 'function') {
        const bodyEl = document.body
        if (
          getEventTargetNode(event, bodyEl, 'tiny-autocomplete-suggestion').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-select-dropdown').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-cascader__dropdown').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-cascader-menus').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-picker-panel').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-popper').flag ||
          getEventTargetNode(event, bodyEl, 'tiny-dialog-box').flag
        ) {
          return true
        }
        return Boolean(editConfig.blurOutside({ cell: args.cell, event, $table: this }))
      }

      const blurClassConfig = editor.blurClass || editConfig.blurClass

      if (blurClassConfig) {
        let blurClass = []

        if (typeof blurClassConfig === 'string') {
          blurClass.push(blurClassConfig)
        } else if (isArray(blurClassConfig)) {
          blurClass = blurClassConfig.slice(0)
        }

        if (args?.cell.contains(event.target)) {
          return true
        }
        if (editConfig.mode === 'row' && getEventTargetNode(event, $el, 'tiny-grid-body__column').flag) {
          return true
        }
        return blurClass.every((cls) => !getEventTargetNode(event, document.body, cls).flag)
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
  handleGlobalMousedownCaptureEvent,
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

    // 手风琴模式是否关闭了所有展开行
    let isAccordionCloseAll = false

    if (!rows) {
      return this.$nextTick().then(this.recalculate)
    }
    if (!isArray(rows)) {
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
    // 根据滚动位置计算边界可见列
    for (let i = 0; i < visibleColumn.length; i++) {
      width += visibleColumn[i].renderWidth
      if (scrollLeft < width) {
        toVisibleIndex = i // 边界可见列索引
        break
      }
    }
    // 边界可见列和上次记录的相同，滚动还没超过此列，就关闭Tooltip退出
    if (visibleIndex === toVisibleIndex) {
      this.clostTooltip()
      return
    }
    let marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize)
    marginSize = Math.max(0, marginSize)
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
        let totalRows = this.getRowCount()
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
    return this.rowHeight
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
  updateScrollXData() {
    const { scrollXLoad, scrollXStore, tableColumn, treeConfig, visibleColumn, visibleColumnChanged, columnStore } =
      this
    const { lastStartIndex = -1, renderSize, startIndex } = scrollXStore
    const args = { lastStartIndex, renderSize, scrollXLoad, startIndex, tableColumn, columnStore }

    Object.assign(args, { treeConfig, visibleColumn, visibleColumnChanged })
    // 剪切表格的渲染列
    const ret = sliceVisibleColumn(args)

    // 更新异步列场景
    this.updateScrollStatus()

    if (ret.sliced) {
      scrollXStore.lastStartIndex = ret.lastStartIndex
      // 设置新的渲染列触发Vue渲染
      this.tableColumn = ret.tableColumn
      this.visibleColumnChanged = ret.visibleColumnChanged
      this.addedColumn = ret.addedColumn

      this.$nextTick(this.updateStyle)
    }
  },
  updateScrollYData() {
    // 更新DOM样式保证表格滚动时的对齐
    this.updateScrollYSpace()
    // 更新响应数据
    this.handleTableData().then(() => this.updateStyle())
  },
  // 更新纵向 Y 可视渲染上下剩余空间大小
  updateScrollYSpace() {
    const { $grid, elemStore, scrollLoad, scrollLoadStore, headerHeight, footerHeight, rowHeight } = this
    const totalRows = this.getRowCount()
    const scrollHeight = $grid.pagerConfig ? $grid.pagerConfig.total * rowHeight : 0
    const ySpaceElem = elemStore[`main-body-ySpace`]

    // 滚动分页场景的视口高度和滚动高度缓存
    scrollLoadStore.bodyHeight = totalRows * rowHeight + headerHeight + footerHeight
    scrollLoadStore.scrollHeight = scrollHeight

    if (ySpaceElem && scrollLoad) {
      // 更新滚动分页场景的滚动高度
      this.scrollLoadScrollHeight = scrollHeight
    }
  },
  updateScrollLoadBar(event) {
    const { $el, elemStore, scrollLoad, scrollLoadStore } = this

    if (scrollLoad && $el.contains(event.target)) {
      const wheelDelta = event.wheelDelta ? event.wheelDelta : -event.detail * 40
      const scrollElm = elemStore['main-body-ySpace']
      const { scrollHeight, bodyHeight } = scrollLoadStore
      const max = scrollHeight - bodyHeight
      let top = scrollElm.scrollTop - wheelDelta

      top = max < top ? max : top
      top = top < 0 ? 0 : top

      scrollElm.scrollTop = top
    }
  },
  scrollTo(scrollLeft, scrollTop) {
    const { elemStore } = this
    const tableBodyElem = elemStore['main-body-wrapper']

    if (isNumber(scrollLeft)) {
      tableBodyElem && (tableBodyElem.scrollLeft = scrollLeft)
    }

    if (isNumber(scrollTop)) {
      tableBodyElem && (tableBodyElem.scrollTop = scrollTop)
    }

    return this.$nextTick()
  },
  scrollToRow(row, column, isDelay, move) {
    const hasRowCache = this.fullDataRowMap.has(hooks.toRaw(row))
    const isDelayArg = isDelay || isBoolean(column)

    row && hasRowCache && rowToVisible(this, row)

    return this.scrollToColumn(column, isDelayArg, move)
  },
  scrollToTreeRow(row) {
    let { tableFullData, treeConfig } = this

    if (!treeConfig) {
      return this.$nextTick()
    }

    let matchObj = findTree(tableFullData, (item) => item === row, treeConfig)

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

    // 虚滚场景 DOM 元素会延时渲染，DOM 元素不存在时校验会显示异常
    return isDelay && (this.scrollXLoad || this.scrollYLoad)
      ? new Promise((resolve) => setTimeout(() => resolve(this.$nextTick()), 50))
      : this.$nextTick()
  },
  resetScrollTop() {
    this.lastScrollTop = 0
  },
  clearScroll() {
    const { $grid, scrollXStore, scrollYStore, elemStore } = this
    const { fetchOption = {} } = $grid
    const { isReloadScroll = false } = fetchOption

    if (isReloadScroll) {
      return
    }

    // 额外清除 lastScrollTop 状态
    Object.assign(this, { lastScrollLeft: 0, lastScrollTop: 0 })
    Object.assign(scrollXStore, { startIndex: 0, visibleIndex: 0 })
    Object.assign(scrollYStore, { startIndex: 0, visibleIndex: 0 })

    return this.$nextTick(() => {
      const tableBodyElem = elemStore['main-body-wrapper']

      if (this.afterMounted) {
        fastdom.mutate(() => {
          tableBodyElem && Object.assign(tableBodyElem, { scrollLeft: 0, scrollTop: 0 })
        })
      }
    })
  },
  // 更新表尾合计
  updateFooter() {
    const { afterFullData, footerMethod, showFooter, summaryConfig, tableColumn, rowHeight } = this

    // 行数据或者列数据为空时，不构造表尾数据
    if (!isArray(afterFullData) || afterFullData.length <= 0 || !isArray(tableColumn) || tableColumn.length <= 0) {
      return
    }

    if (footerMethod && showFooter) {
      let data = footerMethod({ columns: tableColumn, data: afterFullData })

      if (data.length && data.some((value) => !isArray(value))) {
        data = [data]
      }
      // 表尾数据
      this.footerData = tableColumn.length ? data : []
    }

    if (summaryConfig) {
      const { fields, fraction, text, truncate } = summaryConfig

      const summary = tableColumn.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return text || ''
        }

        if (~fields.indexOf(column.property)) {
          return toDecimal(sum(afterFullData, column.property), fraction, truncate)
        }

        return null
      })
      // 表尾数据
      this.footerData = [summary]
    }
    // 表尾高度
    this.footerHeight = this.footerData.length * rowHeight

    return this.$nextTick()
  },
  // 更新列状态：如果组件值v-model发生change，调用该函数更新列的编辑状态。如果单元格配置了校验规则，则进行校验
  updateStatus(scope, cellValue, renderOpts) {
    let { $refs, editRules, tableData, validStore } = this
    let { tableBody } = $refs
    if (!scope || !tableBody) {
      return this.$nextTick()
    }

    let { column, row } = scope
    let type = 'change'

    let refreshStatus = () => {
      if (!isUndefined(cellValue)) {
        this.updateRowStatus(row)
        this.$refs.tableBody?.$forceUpdate()
      }
    }
    // 如果没有相关校验规则，直接返回
    if (!editRules || !this.hasCellRules(type, row, column)) {
      refreshStatus()
      return this.$nextTick()
    }

    // 如果设置了始终验证
    if (renderOpts && renderOpts.isValidAlways) {
      validStore.visible = true
    }

    // 获取单元格元素并执行校验
    let rowIndex = tableData.indexOf(row)
    getCell(this, { row, rowIndex, column }).then((cell) => {
      if (!cell) {
        return
      }
      return this.validCellRules(type, row, column, cellValue)
        .then(() => {
          // 校验通过，设置新值并清除验证提示
          refreshStatus()
          this.clearValidate()
        })
        .catch(({ rule }) => {
          refreshStatus()
          this.showValidTooltip({ rule, row, column, cell })
        })
    })

    return this.$nextTick()
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
    this._tableVisible = visible
    if (visible) {
      this.$grid._delayActivateAnchor?.()
      this.updateParentHeight()
      this.recalculate()
    }

    emitEvent(this, 'visible-change', [{ $table: this, visible, entry }])
  },

  // 按顺序切换列的排序状态（null --> asc --> desc --> null --> ...）
  toggleColumnOrder(column) {
    return column.order ? (column.order === 'asc' ? 'desc' : null) : 'asc'
  },
  handleDataChange() {
    if (Array.isArray(this.data)) {
      !this._isUpdateData && this.loadTableData(this.data, true)
      this._isUpdateData = false
    }
  },
  getVm(name) {
    return this.$grid.getVm(name)
  },
  assembleColumns() {
    // 如果没有初始化任何列实例就不进行列组装
    if (!this.isTagUsageSence) return

    assemColumn(this)
  },
  isValidCustomColumn(columnName) {
    return columnName && this.columnNames.includes(columnName)
  },
  computeCollectKey() {
    const columnIds = []

    const traverse = (columns) => {
      if (Array.isArray(columns) && columns.length > 0) {
        columns.forEach((column) => {
          columnIds.push(column.columnConfig.id)

          traverse(column.childColumns)
        })
      }
    }

    traverse(this.childColumns)

    return columnIds.join(',')
  },
  // 获取所有多选数据状态
  getAllSelection() {
    return this.selection
  },
  // 尝试恢复滚动位置，规范了最大滚动位置的取值
  attemptRestoreScroll(options) {
    let { lastScrollTop, lastScrollLeft } = options || this

    const { scrollXLoad, scrollYLoad, elemStore } = this
    const tableBodyElem = elemStore['main-body-wrapper']

    if ((lastScrollTop || lastScrollLeft) && tableBodyElem) {
      fastdom.measure(() => {
        const maxScrollTop = tableBodyElem.scrollHeight - tableBodyElem.offsetHeight
        const maxScrollLeft = tableBodyElem.scrollWidth - tableBodyElem.offsetWidth

        lastScrollTop = Math.min(lastScrollTop, maxScrollTop)
        lastScrollLeft = Math.min(lastScrollLeft, maxScrollLeft)

        fastdom.mutate(() => {
          this.restoreScollFlag = true
          this.scrollTo(lastScrollLeft, lastScrollTop)
          requestAnimationFrame(() => this.$refs.tableBody?.resetStickyWrapperScrollPos())
          scrollXLoad && this.triggerScrollXEvent()
          scrollYLoad && this.triggerScrollYEvent({ target: { scrollTop: lastScrollTop } })
        })
      })
    }

    return this.$nextTick()
  },
  updateRowStatus(row) {
    updateRowStatus(this, row)
  },
  getCellStatus(row, column) {
    return getCellStatus(this, row, column)
  }
}
funcs.forEach((name) => {
  Methods[name] = function (...args) {
    return this[`_${name}`] ? this[`_${name}`](...args) : null
  }
})
export default Methods
