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
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { hooks } from '@opentiny/vue-common'
import { addClass } from '@opentiny/vue-renderless/common/deps/dom'
import browser from '@opentiny/vue-renderless/common/browser'
import { isArray, destructuring, set, get, remove, filterTree, find, clone } from '@opentiny/vue-renderless/grid/static/'
import { getCell, getCellValue, setCellValue, emitEvent, getRowid } from '@opentiny/vue-renderless/grid/utils'
import { Renderer } from '../../adapter'
import { error, warn } from '../../tools'
import GlobalConfig from '../../config'
import { handleActivedCheckCell, handleActivedCanActive, handleActivedDoActive, handleActivedClearActive, handleActivedTryActive } from './utils/handleActived'

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
  Array.prototype.push.apply(_vm.temporaryRows, newRecordsCopy)
}

function removeFromTableSourceData({ _vm, rows, tableSourceData }) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = tableSourceData.length - 1; j >= 0; j--) {
      if (getRowid(_vm, rows[i]) === getRowid(_vm, tableSourceData[j])) {
        tableSourceData.splice(j, 1)

        break
      }
    }
  }
}

const _setActiveCell = function (row, field) {
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
  _insert(data) {
    return this.insertAt(data)
  },
  // ????????????????????????????????????
  _insertAt(records, row) {
    let { afterFullData, editStore, isAsyncColumn, scrollYLoad, tableFullData, tableSourceData = [], treeConfig } = this
    if (treeConfig) {
      throw new Error(error('ui.grid.error.treeInsert'))
    }
    // ??????????????????
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
    this.modifyCache()
    this.handleTableData(true)
    this.checkSelectionStatus()
    if (scrollYLoad) {
      this.updateScrollYSpace()
    }
    let res = {
      row: newRecords.length ? newRecords[newRecords.length - 1] : null,
      rows: newRecords
    }
    return this.$nextTick().then(() => {
      this.recalculate()
      return res
    })
  },

  /**
   * ?????????????????????
   * ????????? row ???????????????
   * ????????? rows ???????????????
   */
  _remove(rows) {
    let { afterFullData: nowData, scrollYLoad, selectConfig = {}, selection, tableFullData, treeConfig, tableSourceData = [] } = this
    let { insertList, removeList } = this.editStore
    let { checkField } = selectConfig
    let { rest = [], rowsOld = rows } = {}
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
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i]
      if (!this.hasRowInsert(row)) {
        removeList.push(row)
      }
    }
    // ?????????????????????????????????????????????
    if (!checkField) {
      remove(selection, (row) => inArr(row, rows))
    }
    if (tableFullData === rows) {
      rows = tableFullData.slice(0)
      nowData.length = 0
      tableFullData.length = 0
    } else {
      rest = remove(tableFullData, (row) => inArr(row, rows))
      remove(nowData, (row) => inArr(row, rows))
    }
    // ????????????????????????????????????
    remove(insertList, (row) => inArr(row, rows))
    // ???tableSourceData???????????????
    removeFromTableSourceData({ _vm: this, rows, tableSourceData })
    // ????????????
    this.modifyCache()
    this.handleTableData(true)
    this.checkSelectionStatus()
    if (scrollYLoad) {
      this.updateScrollYSpace()
    }
    let res = { row: rows && rows.length ? rows[rows.length - 1] : null, rows: rest }
    return this.$nextTick().then(() => {
      this.recalculate()
      return res
    })
  },

  /**
   * ??????????????????
   */
  _removeSelecteds() {
    let selectRecords = this.getSelectRecords(true)
    let callback = (params) => {
      this.clearSelection()
      return params
    }

    return this.remove(selectRecords).then(callback)
  },
  _revert(...args) {
    warn('ui.grid.error.delRevert')
    return this.revertData.apply(this, args)
  },

  /**
   * ?????????????????????
   * ???????????????????????????????????????????????????
   * ?????????row??????????????????
   * ?????????rows??????????????????
   * ?????????????????????field???????????????????????????
   */
  _revertData(rows, field) {
    let { tableSourceData, tableSynchData } = this

    if (arguments.length && rows && !isArray(rows)) {
      rows = [rows]
    }

    if (!arguments.length) {
      rows = tableSynchData || []
    }

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i]
      let rowIndex = this.getRowIndex(row)
      let oRow = tableSourceData[rowIndex]

      if (oRow && row) {
        if (field) {
          set(row, field, get(oRow, field))
        } else {
          destructuring(row, oRow)
        }
      }
    }

    if (arguments.length) {
      return this.$nextTick()
    }

    return this.reloadData(tableSynchData)
  },

  /**
   * ???????????????????????????
   */
  _getRecordset() {
    let res = {}

    res.insertRecords = this.getInsertRecords()
    res.removeRecords = this.getRemoveRecords()
    res.updateRecords = this.getUpdateRecords()

    return res
  },

  /**
   * ????????????????????????
   */
  _getRemoveRecords() {
    return this.editStore.removeList
  },

  /**
   * ????????????????????????
   */
  _getInsertRecords() {
    return this.editStore.insertList
  },

  /**
   * ????????????????????????
   * ???????????????row??????????????????????????????????????????????????????????????????????????????????????????
   */
  _getUpdateRecords() {
    let { tableFullData, treeConfig } = this
    let handler = (row) => !this.isTemporaryRow(row) && this.hasRowChange(row)
    let updateRecords = treeConfig ? filterTree(tableFullData, handler, treeConfig) : tableFullData.filter(handler)

    return updateRecords
  },

  /**
   * ??????????????????
   */
  handleActived(params, event) {
    let { editConfig, editStore, tableColumn } = this
    let { cell, column, row } = params
    let { editor } = column
    let { actived } = editStore
    let isActiveCell = handleActivedCheckCell({ actived, column, editConfig, row })

    if (editor && cell && isActiveCell) {
      // ????????????????????????
      let type = 'edit-disabled'
      let canActive = handleActivedCanActive({ editConfig, params })
      let args = { _vm: this, actived, canActive, cell, column, editConfig }

      Object.assign(args, { event, params, row, tableColumn, type })

      type = handleActivedDoActive(args)

      handleActivedClearActive({ _vm: this, canActive, event })
      emitEvent(this, type, [params, event])
    }

    handleActivedTryActive({ _vm: this, actived, cell, column, editor, event, isActiveCell, params, row })

    return this.$nextTick()
  },
  _getColumnModel(row, column) {
    let { model, editor } = column

    if (editor) {
      model.value = getCellValue(row, column)
      model.update = false
    }
  },
  _setColumnModel(row, column) {
    let { model, editor } = column

    if (editor && model.update) {
      setCellValue(row, column, model.value)
      model.update = false
      model.value = null
    }
  },
  _getActiveRow() {
    let { $el, editStore, tableData } = this
    let { actived } = editStore
    let { args, row } = actived
    let length = $el.querySelectorAll('.tiny-grid-body__column.col__actived').length

    return args && ~tableData.indexOf(row) && length ? { ...args } : null
  },

  /**
   * ????????????????????????
   */
  _clearActived(event) {
    let { editConfig = {}, editStore, tableColumn } = this
    let { actived } = editStore
    let { args, column, row } = actived
    let isActived = row || column

    if (isActived && editConfig.mode === 'row') {
      tableColumn.forEach((column) => this._setColumnModel(row, column))
    }

    if (isActived && editConfig.mode !== 'row') {
      this._setColumnModel(row, column)
    }

    if (isActived) {
      this.updateFooter()
      emitEvent(this, 'edit-closed', [args, event])
    }

    actived.args = null
    actived.column = null
    actived.row = null

    return this.clearValidate().then(this.recalculate)
  },
  _hasActiveRow(row) {
    return this.editStore.actived.row === row
  },

  /**
   * ????????????
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
      // ???????????????????????????????????? class
      if (autofocus) {
        inputElem = cell.querySelector(autofocus)
      }
      // ????????????????????????????????????
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
    // ????????????????????????
    setTimeout(handler, focusDelay || 50)
  },

  /**
   * ?????????????????????
   */
  _setActiveCell,

  /**
   * ???????????????
   */
  _setActiveRow(row) {
    let editColumn = find(this.visibleColumn, (column) => column.editor)
    return this.setActiveCell(row, editColumn.property)
  },

  /**
   * ??????trigger???dblclick????????????????????????
   */
  _setSelectCell(row, field) {
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

    let listElem = elemStore[`${column.fixed}-body-list`] || elemStore['main-body-list']
    let rowid = getRowid(this, row)
    let trElem = listElem.querySelector(`[data-rowid="${rowid}"]`)

    if (!trElem) {
      return
    }

    addClass(trElem.querySelector(`.${column.id}`), 'col__selected')
  },

  /**
   * ???????????????
   */
  handleSelected(params, event) {
    let { editConfig, editStore, elemStore, mouseConfig = {} } = this
    let { actived, selected } = editStore
    let { cell, column, row } = params || {}
    let selectMethod = () => {
      if ((selected.row === row && selected.column === column) || (actived.row === row && (editConfig.mode !== 'cell' || actived.column === column))) {
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
      // ????????????????????????????????????????????????????????????
      let headerElem = elemStore['main-header-list']

      this.handleChecked([[cell]])

      if (!headerElem) {
        return this.$nextTick()
      }

      this.handleHeaderChecked([[headerElem.querySelector(`.${column && column.id}`)]])
      this.handleIndexChecked([[cell && cell.parentNode && cell.parentNode.querySelector('.col__index')]])

      return this.$nextTick()
    }

    selectMethod = debounce(20, selectMethod)

    return selectMethod()
  }
}
