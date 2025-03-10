import GlobalConfig from '../../../../vue/src/grid/src/config'
import { hooks } from '../../../../vue-common'
import { error, warn } from '../../../../vue/src/grid/src/tools'
import { isArray, clone, filterTree, find, remove as _remove, destructuring, get, set } from '../static'
import { emitEvent, getCell, getCellValue, getRowid, setCellValue } from '../utils'
import {
  handleActivedCheckCell,
  handleActivedCanActive,
  handleActivedDoActive,
  handleActivedClearActive,
  handleActivedTryActive
} from './utils/handleActived'
import { Renderer } from '../../../../vue/src/grid/src/adapter'
import browser from '../../common/browser'
import { addClass } from '../../common/deps/dom'
import debounce from '../../common/deps/debounce'

function operArrs({ _vm, editStore, newRecords, newRecordsCopy, nowData, row, tableFullData, tableSourceData }) {
  if (row === -1) {
    Array.prototype.push.apply(nowData, newRecords)
    Array.prototype.push.apply(tableFullData, newRecords)
    Array.prototype.push.apply(tableSourceData, newRecordsCopy)
  }

  if (row && row !== -1) {
    let targetIndex = nowData.indexOf(row)

    if (targetIndex === -1) {
      throw new Error(error('ui.grid.error.unableInsert'))
    }

    let insertIndex = tableFullData.indexOf(row)

    Array.prototype.splice.apply(nowData, [targetIndex, 0].concat(newRecords))
    Array.prototype.splice.apply(tableFullData, [insertIndex, 0].concat(newRecords))
    Array.prototype.splice.apply(tableSourceData, [insertIndex, 0].concat(newRecordsCopy))
  }

  if (!row) {
    Array.prototype.unshift.apply(nowData, newRecords)
    Array.prototype.unshift.apply(tableFullData, newRecords)
    Array.prototype.unshift.apply(tableSourceData, newRecordsCopy)
  }

  Array.prototype.unshift.apply(editStore.insertList, newRecords)
  Array.prototype.push.apply(_vm.state.temporaryRows, newRecordsCopy)
}

export const insert =
  ({ api }) =>
  (records) => {
    return api.insertAt(records)
  }

// 根据位置从指定行添加数据
export const insertAt =
  ({ state, props, api, vm }) =>
  (records, row) => {
    const { afterFullData, editStore, scrollYLoad, tableFullData } = state
    const { tableSourceData = [] } = vm
    const isAsyncColumn = props.isAsyncColumn
    let treeConfig = props.treeConfig

    if (treeConfig) {
      throw new Error(error('ui.grid.error.treeInsert'))
    }

    // 增加新增标识
    if (isAsyncColumn) {
      const columnSet = api.getColumns()

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
    let newRecords = records.map((record) => hooks.reactive(api.defineField({ ...record })))
    let newRecordsCopy = clone(newRecords, true)

    operArrs({ _vm: vm, editStore, newRecords, newRecordsCopy, nowData, row, tableFullData, tableSourceData })

    api.updateCache(true)
    api.handleTableData(true)
    api.checkSelectionStatus()

    if (scrollYLoad) {
      api.updateScrollYSpace()
    }
    let res = {
      row: newRecords.length ? newRecords[newRecords.length - 1] : null,
      rows: newRecords
    }
    return vm.$nextTick().then(() => {
      api.recalculate()
      return res
    })
  }

export const setActiveCell =
  ({ state, api, vm }) =>
  (row, field) => {
    let next1 = () => {
      if (!row || !field) {
        return vm.$nextTick()
      }

      let column = find(state.visibleColumn, (column) => column.property === field)

      if (!column || !column.editor) {
        return vm.$nextTick()
      }

      let next2 = (cell) => {
        if (!cell) {
          return
        }

        let rowIndex = api.getRowIndex(row)
        let columnIndex = api.getColumnIndex(column)

        api.handleActived({ row, rowIndex, column, columnIndex, cell, $table: vm })
        state.lastCallTime = Date.now()
      }

      getCell(vm, { row, column }).then(next2)

      return vm.$nextTick()
    }

    return api.scrollToRow(row, true).then(next1)
  }

/**
 * 激活行编辑
 */
export const setActiveRow =
  ({ state, api }) =>
  (row) => {
    let editColumn = find(state.visibleColumn, (column) => column.editor)
    return api.setActiveCell(row, editColumn.property)
  }

/**
 * 获取新增数据列表
 */
export const getInsertRecords =
  ({ state }) =>
  () => {
    return state.editStore.insertList
  }

/**
 * 获取更新数据列表
 * 只精准匹配row的更改。如果是树表格，子节点更改状态不会影响父节点的更新状态
 */
export const getUpdateRecords =
  ({ state, api, props }) =>
  () => {
    let { tableFullData } = state
    let { treeConfig } = props
    let handler = (row) => !api.isTemporaryRow(row) && api.hasRowChange(row)
    let updateRecords = treeConfig ? filterTree(tableFullData, handler, treeConfig) : tableFullData.filter(handler)

    return updateRecords
  }

/**
 * 处理激活编辑
 */
export const handleActived =
  ({ state, vm, props }) =>
  async (params, event) => {
    let { editStore, tableColumn } = state
    const editConfig = props.editConfig
    let { cell, column, row } = params
    let { editor } = column
    let { actived } = editStore
    let isActiveCell = handleActivedCheckCell({ actived, column, editConfig, row })

    if (editor && cell && isActiveCell) {
      // 判断是否禁用编辑
      let type = 'edit-disabled'
      let canActive = await handleActivedCanActive({ editConfig, params })
      let args = { _vm: vm, actived, canActive, cell, column, editConfig }

      Object.assign(args, { event, params, row, tableColumn, type })

      type = handleActivedDoActive(args)

      handleActivedClearActive({ _vm: vm, canActive, event })
      emitEvent(vm, type, [params, event])
    }

    handleActivedTryActive({ _vm: vm, actived, cell, column, editor, event, isActiveCell, params, row })

    return vm.$nextTick()
  }

/**
 * 清除已激活的编辑
 */
export const clearActived =
  ({ state, props, api, vm }) =>
  (event) => {
    let { editStore, tableColumn } = state
    const editConfig = props.editConfig || {}
    let { actived } = editStore
    let { args, column, row } = actived
    let isActived = row || column

    if (isActived && editConfig.mode === 'row') {
      tableColumn.forEach((column) => api.setColumnModel(row, column))
    }

    if (isActived && editConfig.mode !== 'row') {
      api.setColumnModel(row, column)
    }

    if (isActived) {
      api.updateFooter()

      // 处理数字输入框返回string类型数据，导致还原初始数字还是编辑状态的问题
      const { row, column } = args
      const { editor } = column || {}
      if (editor?.component === 'input' && editor?.attrs?.type === 'number') {
        row[column.property] = +row[column.property]
      }

      emitEvent(vm, 'edit-closed', [args, event])
    }

    actived.args = null
    actived.column = null
    actived.row = null

    return api.clearValidate().then(api.recalculate)
  }

export const setColumnModel = () => (row, column) => {
  let { model, editor } = column

  if (editor && model.update) {
    setCellValue(row, column, model.value)
    model.update = false
    model.value = null
  }
}

export const getColumnModel = () => (row, column) => {
  let { model, editor } = column

  if (editor) {
    model.value = getCellValue(row, column)
    model.update = false
  }
}

export const getActiveRow =
  ({ state, vm }) =>
  () => {
    let { editStore, tableData } = state
    const $el = vm.$el
    let { actived } = editStore
    let { args, row } = actived
    let length = $el.querySelectorAll('.tiny-grid-body__column.col__actived').length

    return args && ~tableData.indexOf(row) && length ? { ...args } : null
  }

/**
 * 处理聚焦
 */
export const handleFocus = () => (params) => {
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

    if (browser.name !== 'ie') {
      return
    }

    let textRange = inputElem.createTextRange()

    textRange.collapse(false)
    textRange.select()
  }
  // 异步组件需要延时
  setTimeout(handler, focusDelay || 50)
}

/**
 * 只对trigger为dblclick有效，选中单元格
 */
export const setSelectCell =
  ({ state, props, vm, api }) =>
  (row, field) => {
    let { tableData, visibleColumn } = state
    const editConfig = props.editConfig || {}

    if (!row || !field || editConfig.trigger === 'manual') {
      return vm.$nextTick()
    }

    let column = find(visibleColumn, (column) => column.property === field)
    let rowIndex = tableData.indexOf(row)

    if (!~rowIndex || !column) {
      return vm.$nextTick()
    }

    let next = (cell) => {
      let columnIndex = visibleColumn.indexOf(column)
      let params = { row, rowIndex, column, columnIndex, cell }

      api.handleSelected(params, {})
    }

    getCell(vm, { row, rowIndex, column }).then(next)

    return vm.$nextTick()
  }

/**
 * 处理选中源
 */
export const handleSelected =
  ({ state, props, vm, api }) =>
  (params, event) => {
    let { editStore, elemStore } = state
    const editConfig = props.editConfig || {}
    const mouseConfig = props.mouseConfig || {}
    let { actived, selected } = editStore
    let { cell, column, row } = params || {}
    let selectMethod = () => {
      if (
        (selected.row === row && selected.column === column) ||
        (actived.row === row && (editConfig.mode !== 'cell' || actived.column === column))
      ) {
        return vm.$nextTick()
      }

      if (props.keyboardConfig || props.mouseConfig) {
        api.clearChecked(event)
        api.clearIndexChecked()
        api.clearHeaderChecked()
        api.clearSelected(event)
      }

      api.clearActived(event)

      selected.args = params
      selected.row = row
      selected.column = column

      api.updateSelectedCls()

      if (!mouseConfig.checked) {
        return vm.$nextTick()
      }
      // 如果配置了批量选中功能，则为批量选中状态
      let headerElem = elemStore['main-header-list']

      api.handleChecked([[cell]])

      if (!headerElem) {
        return vm.$nextTick()
      }

      api.handleHeaderChecked([[headerElem.querySelector(`.${column && column.id}`)]])
      api.handleIndexChecked([[cell && cell.parentNode && cell.parentNode.querySelector('.col__index')]])

      return vm.$nextTick()
    }

    selectMethod = debounce(20, selectMethod)

    return selectMethod()
  }

export const updateSelectedCls =
  ({ state, api, props }) =>
  (clear) => {
    let { editStore, elemStore } = state
    const mouseConfig = props.mouseConfig || {}
    let { column, row } = editStore.selected

    clear && api.clearSelected(true)

    if (!mouseConfig.selected || !row || !column) {
      return
    }

    let listElem = elemStore['main-body-list']
    let rowid = getRowid(vm, row)
    let trElem = listElem.querySelector(`[data-rowid="${rowid}"]`)

    if (!trElem) {
      return
    }

    addClass(trElem.querySelector(`.${column.id}`), 'col__selected')
  }

/**
 * 删除选中数据
 */
export const removeSelecteds =
  ({ api }) =>
  () => {
    let selectRecords = api.getSelectRecords(true)
    let callback = (params) => {
      api.clearSelection()
      return params
    }

    return api.remove(selectRecords).then(callback)
  }

export const revert =
  ({ api }) =>
  (...args) => {
    warn('ui.grid.error.delRevert')
    return api.revertData(...args)
  }

/**
 * 对数据进行还原
 * 如果不传任何参数，则还原整个表格；
 * 如果传row则还原一行；
 * 如果传rows则还原多行；
 * 如果还额外传了field则还原指定单元格。
 */
export const revertData = ({ state, vm, api }) =>
  function (rows, field) {
    let { tableSourceData, tableSynchData } = vm

    if (arguments.length && rows && !isArray(rows)) {
      rows = [rows]
    }

    if (!arguments.length) {
      rows = tableSynchData || []
    }

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i]
      let oRow = find(tableSourceData, (item) => getRowid(vm, row) === getRowid(vm, item))

      if (oRow && row) {
        if (field) {
          set(row, field, get(oRow, field))
        } else {
          destructuring(row, oRow)
        }
      }
    }

    if (arguments.length) {
      return vm.$nextTick()
    }

    return api.reloadData(tableSynchData)
  }

/**
 * 删除指定行数据
 * 如果传 row 则删除一行
 * 如果传 rows 则删除多行
 */
export const remove =
  ({ state, props, api, vm }) =>
  (rows) => {
    let { selection, tableFullData, afterFullData, scrollYLoad } = state
    let tableSourceData = vm.tableSourceData || []
    let { treeConfig, selectConfig = {} } = props
    let { insertList, removeList } = state.editStore
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
      if (api.hasRowInsert(row)) continue
      removeList.push(row)
    }

    // 如果绑定了多选属性，则更新状态
    if (!checkField) {
      _remove(selection, (row) => inArr(row, rows))
    }

    // 从数据源中移除
    if (tableFullData === rows) {
      rows = tableFullData.slice(0)
      tableFullData.length = 0
      nowData.length = 0
    } else {
      rest = _remove(tableFullData, (row) => inArr(row, rows))
      _remove(nowData, (row) => inArr(row, rows))
    }

    // 从备份中移除新增数据
    _remove(
      tableSourceData,
      (row) =>
        find(insertList, (r) => getRowid(vm, r) === getRowid(vm, row)) &&
        find(rows, (r) => getRowid(vm, r) === getRowid(vm, row))
    )

    // 从新增中移除已删除的数据
    _remove(insertList, (row) => inArr(row, rows))

    // 修改缓存
    api.updateCache(true)
    api.handleTableData(true)

    api.checkSelectionStatus()

    if (scrollYLoad) {
      api.updateScrollYSpace()
    }

    let res = {
      row: rows && rows.length ? rows[rows.length - 1] : null,
      rows: rest
    }

    return vm.$nextTick().then(() => {
      api.recalculate()
      return res
    })
  }

/**
 * 获取删除数据列表
 */
export const getRemoveRecords =
  ({ state }) =>
  () => {
    return state.editStore.removeList
  }

/**
 * 获取表格操作数据集
 */
export const getRecordset =
  ({ api }) =>
  () => {
    let res = {}

    res.insertRecords = api.getInsertRecords()
    res.removeRecords = api.getRemoveRecords()
    res.updateRecords = api.getUpdateRecords()

    return res
  }

export const hasActiveRow =
  ({ state }) =>
  (row) => {
    return state.editStore.actived.row === row
  }
