import { debounce } from '@opentiny/utils'
import { hooks } from '@opentiny/vue-common'
import { addClass } from '@opentiny/utils'
import { browserInfo } from '@opentiny/utils'
import {
  isArray,
  destructuring,
  set,
  get,
  remove,
  filterTree,
  find,
  clone
} from '@opentiny/vue-renderless/grid/static/'
import { getCell, getCellValue, setCellValue, emitEvent, getRowid } from '../../utils/utils'
import { Renderer } from '../../adapter'
import { error, warn } from '../../tools'
import GlobalConfig from '../../config'
import {
  handleActivedCheckCell,
  handleActivedCanActive,
  handleActivedDoActive,
  handleActivedClearActive,
  handleActivedTryActive
} from './utils/handleActived'

function operArrs({ _vm, editStore, newRecords, newRecordsCopy, nowData, row, tableFullData, tableSourceData }) {
  if (row === -1) {
    nowData.push(...newRecords)
    tableFullData.push(...newRecords)
    tableSourceData.push(...newRecordsCopy)
  }

  if (row && row !== -1) {
    let targetIndex = nowData.indexOf(row)

    if (targetIndex === -1) {
      throw new Error(error('ui.grid.error.unableInsert'))
    }

    let insertIndex = tableFullData.indexOf(row)

    nowData.splice(targetIndex, 0, ...newRecords)
    tableFullData.splice(insertIndex, 0, ...newRecords)
    tableSourceData.splice(insertIndex, 0, ...newRecordsCopy)
  }

  if (!row) {
    nowData.unshift(...newRecords)
    tableFullData.unshift(...newRecords)
    tableSourceData.unshift(...newRecordsCopy)
  }

  editStore.insertList.unshift(...newRecords)
  _vm.temporaryRows.push(...newRecordsCopy)
}

export function removeFromTableSourceData({ _vm, rows, tableSourceData }) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = tableSourceData.length - 1; j >= 0; j--) {
      if (getRowid(_vm, rows[i]) === getRowid(_vm, tableSourceData[j])) {
        tableSourceData.splice(j, 1)

        break
      }
    }
  }
}

const setActiveCell = function (row, field) {
  let next1 = () => {
    if (!row || !field) {
      return this.$nextTick()
    }

    let column = find(this.visibleColumn, (column) => column.property === field)

    if (!column || !column.editor) {
      return this.$nextTick()
    }

    let next2 = (cell) => {
      if (!cell) {
        return
      }

      let rowIndex = this.getRowIndex(row)
      let columnIndex = this.getColumnIndex(column)

      this.handleActived({ row, rowIndex, column, columnIndex, cell, $table: this })
      this.lastCallTime = Date.now()
    }

    getCell(this, { row, column }).then(next2)

    return this.$nextTick()
  }

  return this.scrollToRow(row, true).then(next1)
}

export default {
  insert(records) {
    return this.insertAt(records)
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
  },
  // 根据位置从指定行添加数据
  insertAt(records, row) {
    let { afterFullData, editStore, isAsyncColumn, scrollYLoad, tableFullData, tableSourceData = [], treeConfig } = this

    if (treeConfig) {
      throw new Error(error('ui.grid.error.treeInsert'))
    }

    // 增加新增标识
    if (isAsyncColumn) {
      const columnSet = this.getColumns()

      columnSet.forEach((column) => {
        if (column.format && column.format.async && column.format.async.fetch) {
          records[GlobalConfig.constant.insertedField] = true
        }
      })
    }

    if (!isArray(records)) {
      records = [records]
    }

    let nowData = afterFullData
    let newRecords = records.map((record) => hooks.reactive(this.defineField({ ...record })))
    let newRecordsCopy = clone(newRecords, true)

    operArrs({ _vm: this, editStore, newRecords, newRecordsCopy, nowData, row, tableFullData, tableSourceData })

    this.updateCache(true)
    this.handleTableData(true)
    this.checkSelectionStatus()
    this.updateFooter()
    if (scrollYLoad) {
      this.updateScrollYSpace()
    }
    let res = {
      row: newRecords.length ? newRecords[newRecords.length - 1] : null,
      rows: newRecords
    }
    return this.$nextTick().then(() => {
      return res
    })
  },

  /**
   * 删除指定行数据
   * 如果传 row 则删除一行
   * 如果传 rows 则删除多行
   */
  remove(rows) {
    let { afterFullData, scrollYLoad, selectConfig = {} } = this
    let { selection, tableFullData, treeConfig, tableSourceData = [] } = this
    let { insertList, removeList } = this.editStore
    let { checkField } = selectConfig
    let nowData = afterFullData
    let rest = []
    let rowsOld = rows
    let inArr = (row, rows) => ~rows.indexOf(row)

    if (treeConfig) {
      throw new Error(error('ui.grid.error.treeRemove'))
    }

    if (!rowsOld) {
      rows = tableFullData
    }

    if (rowsOld && !isArray(rowsOld)) {
      rows = [rowsOld]
    }

    // 如果不是新增，则保存记录
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i]
      if (this.hasRowInsert(row)) continue
      removeList.push(row)
    }

    // 如果绑定了多选属性，则更新状态
    if (!checkField) {
      remove(selection, (row) => inArr(row, rows))
    }

    // 从数据源中移除
    if (tableFullData === rows) {
      rows = tableFullData.slice(0)
      tableFullData.length = 0
      nowData.length = 0
    } else {
      rest = remove(tableFullData, (row) => inArr(row, rows))
      remove(nowData, (row) => inArr(row, rows))
    }

    // 从备份中移除新增数据
    remove(
      tableSourceData,
      (row) =>
        find(insertList, (r) => getRowid(this, r) === getRowid(this, row)) &&
        find(rows, (r) => getRowid(this, r) === getRowid(this, row))
    )

    // 从新增中移除已删除的数据
    remove(insertList, (row) => inArr(row, rows))

    // 修改缓存
    this.updateCache(true)
    this.handleTableData(true)

    this.checkSelectionStatus()
    this.updateFooter()
    if (scrollYLoad) {
      this.updateScrollYSpace()
    }

    let res = {
      row: rows && rows.length ? rows[rows.length - 1] : null,
      rows: rest
    }

    return this.$nextTick().then(() => {
      return res
    })
  },

  /**
   * 删除选中数据
   */
  removeSelecteds() {
    let selectRecords = this.getSelectRecords(true)
    let callback = (params) => {
      this.clearSelection()
      return params
    }

    return this.remove(selectRecords).then(callback)
  },
  revert(...args) {
    warn('ui.grid.error.delRevert')
    return this.revertData(...args)
  },

  /**
   * 对数据进行还原
   * 如果不传任何参数，则还原整个表格；
   * 如果传row则还原一行；
   * 如果传rows则还原多行；
   * 如果还额外传了field则还原指定单元格。
   */
  revertData(rows, field) {
    let { tableSourceData, tableSynchData } = this

    if (arguments.length && rows && !isArray(rows)) {
      rows = [rows]
    }

    if (!arguments.length) {
      rows = tableSynchData || []
    }

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i]
      let oRow = find(tableSourceData, (item) => getRowid(this, row) === getRowid(this, item))

      if (oRow && row) {
        if (field) {
          set(row, field, get(oRow, field))
        } else {
          destructuring(row, oRow)
        }
      }

      this.updateRowStatus(row)
    }

    if (arguments.length) {
      return this.$nextTick()
    }

    return this.reloadData(tableSynchData)
  },

  /**
   * 获取表格操作数据集
   */
  getRecordset() {
    let res = {}

    res.insertRecords = this.getInsertRecords()
    res.removeRecords = this.getRemoveRecords()
    res.updateRecords = this.getUpdateRecords()

    return res
  },

  /**
   * 获取删除数据列表
   */
  getRemoveRecords() {
    return this.editStore.removeList
  },

  /**
   * 获取新增数据列表
   */
  getInsertRecords() {
    return this.editStore.insertList
  },

  /**
   * 获取更新数据列表
   * 只精准匹配row的更改。如果是树表格，子节点更改状态不会影响父节点的更新状态
   */
  getUpdateRecords() {
    let { tableFullData, treeConfig } = this
    let handler = (row) => !this.isTemporaryRow(row) && this.hasRowChange(row)
    let updateRecords = treeConfig ? filterTree(tableFullData, handler, treeConfig) : tableFullData.filter(handler)

    return updateRecords
  },

  /**
   * 处理激活编辑
   */
  async handleActived(params, event) {
    let { editConfig, editStore, tableColumn } = this
    let { cell, column, row } = params
    let { editor } = column
    let { actived } = editStore
    let isActiveCell = handleActivedCheckCell({ actived, column, editConfig, row })

    if (editor && cell && isActiveCell) {
      // 判断是否禁用编辑
      let type = 'edit-disabled'
      let canActive = await handleActivedCanActive({ editConfig, params })
      let args = { _vm: this, actived, canActive, cell, column, editConfig }

      Object.assign(args, { event, params, row, tableColumn, type })

      type = handleActivedDoActive(args)

      handleActivedClearActive({ _vm: this, canActive, event })
      emitEvent(this, type, [params, event])
    }

    handleActivedTryActive({ _vm: this, actived, cell, column, editor, event, isActiveCell, params, row })

    return this.$nextTick()
  },
  getColumnModel(row, column) {
    let { model, editor } = column

    if (editor) {
      model.value = getCellValue(row, column)
      model.update = false
    }
  },
  setColumnModel(row, column) {
    let { model, editor } = column

    if (editor && model.update) {
      setCellValue(row, column, model.value)
      model.update = false
      model.value = null
    }
  },
  getActiveRow() {
    let { $el, editStore, tableData } = this
    let { actived } = editStore
    let { args, row } = actived
    let length = $el.querySelectorAll('.tiny-grid-body__column.col__actived').length

    return args && ~tableData.indexOf(row) && length ? { ...args } : null
  },

  /**
   * 清除已激活的编辑
   */
  clearActived(event) {
    let { editConfig = {}, editStore, tableColumn } = this
    let { actived } = editStore
    let { args, column, row } = actived
    let isActived = row || column

    if (isActived && editConfig.mode === 'row') {
      tableColumn.forEach((column) => this.setColumnModel(row, column))
    }

    if (isActived && editConfig.mode !== 'row') {
      this.setColumnModel(row, column)
    }

    if (isActived) {
      this.updateRowStatus(row)
      this.updateFooter()

      // 处理数字输入框返回string类型数据，导致还原初始数字还是编辑状态的问题
      const { row, column } = args
      const { editor } = column || {}
      if (editor?.component === 'input' && editor?.attrs?.type === 'number') {
        row[column.property] = +row[column.property]
      }

      emitEvent(this, 'edit-closed', [args, event])
    }

    actived.args = null
    actived.column = null
    actived.row = null

    return this.clearValidate()
  },
  hasActiveRow(row) {
    return this.editStore.actived.row === row
  },

  /**
   * 处理聚焦
   */
  handleFocus(params) {
    let { cell, column } = params
    let { editor } = column

    if (!editor) {
      return
    }

    let inputElem
    let compRender = Renderer.get(editor.component)
    let { autofocus, autoselect, focusDelay } = editor

    let handler = () => {
      // 假如用户设定了聚焦的类名 class
      if (autofocus) {
        inputElem = cell.querySelector(autofocus)
      }
      // 表格渲染器针对逻辑的处理
      let isAutofocus = compRender && compRender.autofocus
      if (isAutofocus && !inputElem) {
        inputElem = cell.querySelector(isAutofocus)
      }

      if (!inputElem) {
        return
      }

      let type = inputElem.type

      inputElem.type = 'text'
      inputElem.selectionEnd = inputElem.value.length
      inputElem.selectionStart = inputElem.selectionEnd
      inputElem.type = type
      inputElem[autoselect ? 'select' : 'focus']()

      if (browserInfo.name !== 'ie') {
        return
      }
      // 以下3行应该是兼容IE的,待移除
      let textRange = inputElem.createTextRange()

      textRange.collapse(false)
      textRange.select()
    }
    // 异步组件需要延时
    setTimeout(handler, focusDelay || 50)
  },

  /**
   * 激活单元格编辑
   */
  setActiveCell,

  /**
   * 激活行编辑
   */
  setActiveRow(row) {
    let editColumn = find(this.visibleColumn, (column) => column.editor)
    return this.setActiveCell(row, editColumn.property)
  },

  /**
   * 只对trigger为dblclick有效，选中单元格
   */
  setSelectCell(row, field) {
    let { editConfig, tableData, visibleColumn } = this

    if (!row || !field || editConfig.trigger === 'manual') {
      return this.$nextTick()
    }

    let column = find(visibleColumn, (column) => column.property === field)
    let rowIndex = tableData.indexOf(row)

    if (!~rowIndex || !column) {
      return this.$nextTick()
    }

    let next = (cell) => {
      let columnIndex = visibleColumn.indexOf(column)
      let params = { row, rowIndex, column, columnIndex, cell }

      this.handleSelected(params, {})
    }

    getCell(this, { row, rowIndex, column }).then(next)

    return this.$nextTick()
  },
  updateSelectedCls(clear) {
    let { editStore, elemStore, mouseConfig = {} } = this
    let { column, row } = editStore.selected

    clear && this.clearSelected(true)

    if (!mouseConfig.selected || !row || !column) {
      return
    }

    let listElem = elemStore['main-body-list']
    let rowid = getRowid(this, row)
    let trElem = listElem.querySelector(`[data-rowid="${rowid}"]`)

    if (!trElem) {
      return
    }

    addClass(trElem.querySelector(`.${column.id}`), 'col__selected')
  },

  /**
   * 处理选中源
   */
  handleSelected(params, event) {
    let { editConfig, editStore, elemStore, mouseConfig = {} } = this
    let { actived, selected } = editStore
    let { cell, column, row } = params || {}
    let selectMethod = () => {
      if (
        (selected.row === row && selected.column === column) ||
        (actived.row === row && (editConfig.mode !== 'cell' || actived.column === column))
      ) {
        return this.$nextTick()
      }

      if (this.keyboardConfig || this.mouseConfig) {
        this.clearChecked(event)
        this.clearIndexChecked()
        this.clearHeaderChecked()
        this.clearSelected(event)
      }

      this.clearActived(event)

      selected.args = params
      selected.row = row
      selected.column = column

      this.updateSelectedCls()

      if (!mouseConfig.checked) {
        return this.$nextTick()
      }
      // 如果配置了批量选中功能，则为批量选中状态
      let headerElem = elemStore['main-body-headerList']

      this.handleChecked([[cell]])

      if (!headerElem) {
        return this.$nextTick()
      }

      this.handleHeaderChecked([[headerElem?.querySelector(`.${column?.id}`)]])
      this.handleIndexChecked([[cell?.parentNode?.querySelector('.col__index')]])

      return this.$nextTick()
    }

    selectMethod = debounce(20, selectMethod)

    return selectMethod()
  }
}
