import { hasCheckField, hasNoCheckField } from './handleSelectRow'
import { hasCheckFieldNoStrictly, hasNoCheckFieldNoStrictly, setSelectionNoStrictly } from './setAllSelection'
import { getTableRowKey } from '../../table/src/strategy'
import { emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { isArray, set, get, eachTree, find, toStringJSON, toArray } from '@opentiny/vue-renderless/grid/static/'

export default {
  // 处理默认勾选
  handleSelectionDefChecked() {
    let fullDataRowIdData = this.fullDataRowIdData
    let { checkAll, checkRowKeys } = this.selectConfig || {}

    if (checkAll) {
      this.setAllSelection(true)
      return
    }
    if (checkRowKeys) {
      let defCheckedRowids = checkRowKeys.map((key) => encodeURIComponent(key))
      let defCheckedRows = []

      defCheckedRowids.forEach((rowid) => {
        let rowCache = fullDataRowIdData[rowid]
        if (rowCache) {
          defCheckedRows.push(rowCache.row)
        }
      })

      this.setSelection(defCheckedRows, true)
    }
  },
  setSelection(rows, value) {
    if (rows) {
      if (!isArray(rows)) {
        rows = [rows]
      }
      rows.forEach((row) => this.handleSelectRow({ row }, !!value))
    }
    return this.$nextTick()
  },
  // 多选，行选中事件。value：选中true、不选false、不确定-1
  handleSelectRow({ row }, value) {
    hasCheckField({ row }, value, this)
    hasNoCheckField({ row }, value, this)
    this.checkSelectionStatus()
  },
  handleToggleCheckRowEvent(params, event) {
    let selection = this.selection
    let { checkField } = this.selectConfig || {}
    let { row } = params
    let value = checkField ? !get(row, checkField) : !~selection.indexOf(row)
    if (event) {
      this.triggerCheckRowEvent(event, params, value)
    } else {
      this.handleSelectRow(params, value)
    }
  },
  triggerCheckRowEvent(event, params, value) {
    let { selectConfig = {} } = this
    let { checkMethod } = selectConfig
    if (!checkMethod || checkMethod(params)) {
      this.handleSelectRow(params, value)
      emitEvent(this, 'select-change', [
        {
          selection: this.getSelectRecords(),
          checked: value,
          $table: this,
          ...params
        },
        event
      ])
    }
  },
  // 多选，切换某一行的选中状态
  toggleRowSelection(row) {
    this.handleToggleCheckRowEvent({ row })
    return this.$nextTick()
  },
  setAllSelection(value) {
    let { afterFullData, selectConfig = {}, treeConfig, selection } = this
    let { checkField: property, reserve, checkStrictly, checkMethod } = selectConfig
    hasCheckFieldNoStrictly({ afterFullData, checkMethod, checkStrictly, property, selection, treeConfig, value })
    let selectRows = hasNoCheckFieldNoStrictly({
      afterFullData,
      checkMethod,
      checkStrictly,
      property,
      selection,
      treeConfig,
      value
    })
    setSelectionNoStrictly({ _vm: this, checkStrictly, reserve, selectRows, selection, value })
    this.treeIndeterminates = []
    this.checkSelectionStatus()
  },
  checkSelectionStatus() {
    let { afterFullData, selection, treeIndeterminates } = this
    let { checkField, checkStrictly, checkMethod } = this.selectConfig || {}
    let { everyHandler, someHandler } = {}
    if (checkStrictly) {
      return
    }
    // 包含新增的数据
    if (checkField) {
      everyHandler = checkMethod
        ? (row, rowIndex) => !checkMethod({ row, rowIndex }) || get(row, checkField)
        : (row) => get(row, checkField)
      someHandler = (row) => get(row, checkField) || ~treeIndeterminates.indexOf(row)
      this.isAllSelected = false
      afterFullData.length && (this.isAllSelected = afterFullData.every(everyHandler))
      this.isIndeterminate = !this.isAllSelected && afterFullData.some(someHandler)
    } else {
      everyHandler = (row, rowIndex) => !checkMethod({ row, rowIndex })
      this.headerCheckDisabled = checkMethod && afterFullData.length && afterFullData.every(everyHandler)
      everyHandler = checkMethod
        ? (row, rowIndex) => !checkMethod({ row, rowIndex }) || ~selection.indexOf(row)
        : (row) => ~selection.indexOf(row)
      someHandler = (row) => ~treeIndeterminates.indexOf(row) || ~selection.indexOf(row)
      this.isAllSelected = false
      afterFullData.length && (this.isAllSelected = afterFullData.every(everyHandler))
      this.isIndeterminate = !this.isAllSelected && afterFullData.some(someHandler)
    }
  },
  // 保留选中状态
  reserveCheckSelection() {
    let { fullDataRowIdData, selection } = this
    let { reserve } = this.selectConfig || {}
    let rowkey = getTableRowKey(this)
    if (reserve && selection.length) {
      this.selection = selection.map((row) => {
        let rowCache = fullDataRowIdData[`${get(row, rowkey)}`]
        return rowCache ? rowCache.row : row
      })
    }
  },
  // 多选，选中所有事件
  triggerCheckAllEvent(event, value) {
    this.setAllSelection(value)
    let eventParams = {
      selection: this.getSelectRecords(),
      checked: value,
      $table: this
    }
    emitEvent(this, 'select-all', [eventParams, event])
  },
  // 多选，切换所有行的选中状态
  toggleAllSelection() {
    this.triggerCheckAllEvent(null, !this.isAllSelected)
    return this.$nextTick()
  },
  clearSelection() {
    let { tableFullData, treeConfig } = this
    let { checkField } = this.selectConfig || {}
    if (checkField) {
      treeConfig
        ? eachTree(tableFullData, (item) => set(item, checkField, false), treeConfig)
        : tableFullData.forEach((item) => set(item, checkField, false))
    }
    Object.assign(this, {
      isAllSelected: false,
      isIndeterminate: false,
      selection: [],
      treeIndeterminates: []
    })

    return this.$nextTick()
  },
  initMultipleHistory() {
    const { isMultipleHistory, toolBarVm } = this.$grid
    const {
      settingOpts: { storageKey },
      id: toolbarId
    } = toolBarVm
    let remoteSelectedMethod = toolBarVm.setting.multipleHistory.remoteSelectedMethod
    let remoteSelectedPromise

    if (
      isMultipleHistory &&
      toolBarVm &&
      toolBarVm.setting &&
      toolBarVm.setting.multipleHistory &&
      remoteSelectedMethod
    ) {
      if (typeof remoteSelectedMethod === 'function') {
        remoteSelectedPromise = remoteSelectedMethod()

        if (typeof remoteSelectedPromise.then === 'function') {
          remoteSelectedPromise.then((storeStr) => {
            let storeObj = toStringJSON(storeStr)
            storeObj = (storeObj && storeObj[storageKey]) || null
            storeObj = (storeObj || {})[toolbarId] || {}
            const { columns, pageSize } = storeObj
            toolBarVm.applySettings({ columns, pageSize })
          })
        }
      }
    }
  },
  // 显示多选工具栏
  showSelectToolbar() {
    let {
      $grid: { selectToolbar, showHeader },
      selectToolbarStore
    } = this
    if (selectToolbar && showHeader) {
      selectToolbarStore.visible = false
      let selectColumn = find(this.visibleColumn, (item) => item.type === 'selection')
      let selected = this.getSelectRecords()
      let position = typeof selectToolbar === 'object' ? selectToolbar.position : ''
      if (selectColumn && selected && selected.length) {
        let selectTh = this.$el.querySelector('th.tiny-grid-header__column.col__selection')
        let headerWrapper = this.$el.querySelector('.tiny-grid>.tiny-grid__header-wrapper')
        let tr = selectTh.parentNode
        let thArr = toArray(tr.childNodes)
        let range = document.createRange()
        let rangeBoundingRect
        let headerBoundingRect = headerWrapper.getBoundingClientRect()
        let layout = { width: 0, height: 0, left: 0, top: 0, zIndex: 1 }
        let adjust = 1
        if (selectColumn.fixed === 'right') {
          range.setStart(tr, thArr.indexOf(selectTh))
          range.setEnd(tr, thArr.length)
          rangeBoundingRect = range.getBoundingClientRect()
          layout.left = `${adjust}px`
        } else {
          range.setStart(tr, 0)
          range.setEnd(tr, thArr.indexOf(selectTh) + 1)
          rangeBoundingRect = range.getBoundingClientRect()
          layout.left = `${rangeBoundingRect.width + adjust}px`
        }
        layout.width = `${headerBoundingRect.width - rangeBoundingRect.width - 2 * adjust}px`
        if (!selectColumn.fixed && position === 'left') {
          range = document.createRange()
          range.setStart(tr, 0)
          range.setEnd(tr, thArr.indexOf(selectTh))
          rangeBoundingRect = range.getBoundingClientRect()
          layout.left = `${adjust}px`
          layout.width = `${rangeBoundingRect.width - 2 * adjust}px`
        }
        layout.top = `${headerBoundingRect.height - rangeBoundingRect.height + adjust}px`
        layout.height = `${rangeBoundingRect.height - 2 * adjust}px`
        return this.$nextTick().then(() => {
          selectToolbarStore.layout = layout
          selectToolbarStore.visible = true
        })
      }
    }
    return this.$nextTick()
  },
  // 切换多选工具栏的显示
  toggleSelectToolbarVisible() {
    this.selectToolbarStore.visible = !this.selectToolbarStore.visible
    return this.$nextTick()
  },
  // 在空数据时Selection列表头复选框禁用，headerAutoDisabled设置为false就会和旧版本兼容
  handleSelectionHeader() {
    const { tableFullData, visibleColumn, selectConfig = {} } = this
    const { headerAutoDisabled } = selectConfig
    const selectionColumn = visibleColumn.find((column) => column.type === 'selection')
    if (
      (typeof headerAutoDisabled === 'undefined' || (typeof headerAutoDisabled === 'boolean' && headerAutoDisabled)) &&
      !tableFullData.length &&
      selectionColumn
    ) {
      this.headerCheckDisabled = true
    }
  }
}
