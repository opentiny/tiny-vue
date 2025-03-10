import { hasCheckField, hasNoCheckField } from './handleSelectRow'
import { hasCheckFieldNoStrictly, hasNoCheckFieldNoStrictly, setSelectionNoStrictly } from './setAllSelection'
import { getTableRowKey } from '../../../../vue/src/grid/src/table/src/strategy'
import { emitEvent } from '../utils'
import { isArray, get, toStringJSON } from '../static'
import { eachTree, find, set, toArray } from '../static'

// 处理默认勾选
export const handleSelectionDefChecked =
  ({ api, state, props }) =>
  () => {
    let fullDataRowIdData = state.fullDataRowIdData
    const checkAll = props.selectConfig && props.selectConfig.checkAll // 初始时是否选中所有行
    const checkRowKeys = props.selectConfig && props.selectConfig.checkRowKeys // 默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）

    if (checkAll) {
      api.setAllSelection(true)
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

      api.setSelection(defCheckedRows, true)
    }
  }

/**
 * 设置选中状态
 *
 * @param {object} params
 * @param {object} params.api - $table API 对象
 * @param {object} params.vm - $table 实例
 * @returns {function}
 */
export const setSelection =
  ({ api, vm }) =>
  (rows, value) => {
    // 如果 rows 不为空
    if (rows) {
      // 如果 rows 不是数组，则转换为数组
      if (!isArray(rows)) {
        rows = [rows]
      }
      // 遍历 rows，调用 handleSelectRow 方法设置选中状态
      rows.forEach((row) => api.handleSelectRow({ row }, !!value))
    }
    return vm.$nextTick()
  }

// 多选，行选中事件。value：选中true、不选false、不确定-1
export const handleSelectRow =
  ({ api, vm }) =>
  ({ row }, value) => {
    hasCheckField({ row }, value, vm)
    hasNoCheckField({ row }, value, vm)
    api.checkSelectionStatus()
  }

/**
 * 多选，行选中状态切换事件
 *
 * @param {object} params
 * @param {object} params.api - $table API 对象
 * @param {object} params.vm - $table 实例
 * @param {object} params.state - $table 状态对象
 * @param {object} params.props - $table props对象
 * @param {object} params.row - 选中的行对象
 * @param {Event} params.event - 事件对象
 * @returns {function}
 */
export const handleToggleCheckRowEvent =
  ({ props, api, state }) =>
  (params, event) => {
    let selection = state.selection
    let checkField = props.selectConfig && props.selectConfig.checkField
    let { row } = params
    let value = checkField ? !get(row, checkField) : !~selection.indexOf(row)
    if (event) {
      api.triggerCheckRowEvent(event, params, value)
    } else {
      api.handleSelectRow(params, value)
    }
  }

/**
 * 多选，行选中事件
 *
 * @param {object} params
 * @param {object} params.api - $table API 对象
 * @param {object} params.vm - $table 实例
 * @param {object} params.state - $table 状态对象
 * @param {object} params.props - $table props对象
 * @param {object} params.row - 选中的行对象
 * @param {Event} params.event - 事件对象
 * @param {boolean} value - 选中的状态
 * @returns {function}
 */
export const triggerCheckRowEvent =
  ({ props, api, vm }) =>
  (event, params, value) => {
    const selectConfig = props.selectConfig || {}
    let { checkMethod } = selectConfig
    if (!checkMethod || checkMethod(params)) {
      api.handleSelectRow(params, value)
      emitEvent(vm, 'select-change', [
        {
          selection: api.getSelectRecords(),
          checked: value,
          $table: vm,
          ...params
        },
        event
      ])
    }
  }

// 多选，切换某一行的选中状态
export const toggleRowSelection =
  ({ api, vm }) =>
  (row) => {
    api.handleToggleCheckRowEvent({ row })
    return vm.$nextTick()
  }

export const setAllSelection =
  ({ state, props, api, vm }) =>
  (value) => {
    const selection = state.selection
    const { afterFullData } = state
    const selectConfig = props.selectConfig || {}
    const treeConfig = props.treeConfig || {}
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
    // 选中每一行
    setSelectionNoStrictly({ _vm: vm, checkStrictly, reserve, selectRows, selection, value, afterFullData })
    api.treeIndeterminates = []
    // 变换表头选中状态为全选
    api.checkSelectionStatus()
  }

export const checkSelectionStatus =
  ({ state, props }) =>
  () => {
    let { afterFullData, selection, treeIndeterminates } = state
    let { checkField, checkStrictly, checkMethod } = props.selectConfig || {}
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
      state.isAllSelected = false
      afterFullData.length && (state.isAllSelected = afterFullData.every(everyHandler))
      state.isIndeterminate = !state.isAllSelected && afterFullData.some(someHandler)
    } else {
      everyHandler = (row, rowIndex) => !checkMethod({ row, rowIndex })
      state.headerCheckDisabled = checkMethod && afterFullData.length && afterFullData.every(everyHandler)
      everyHandler = checkMethod
        ? (row, rowIndex) => !checkMethod({ row, rowIndex }) || ~selection.indexOf(row)
        : (row) => ~selection.indexOf(row)
      someHandler = (row) => ~treeIndeterminates.indexOf(row) || ~selection.indexOf(row)
      state.isAllSelected = false
      afterFullData.length && (state.isAllSelected = afterFullData.every(everyHandler))
      state.isIndeterminate = !state.isAllSelected && afterFullData.some(someHandler)
    }
  }

// 保留选中状态
export const reserveCheckSelection =
  ({ state, props, vm }) =>
  () => {
    let { fullDataRowIdData, selection } = state
    let { reserve } = props.selectConfig || {}
    let rowkey = getTableRowKey(vm)
    if (reserve && selection.length) {
      state.selection = selection.map((row) => {
        let rowCache = fullDataRowIdData[`${get(row, rowkey)}`]
        return rowCache ? rowCache.row : row
      })
    }
  }

// 多选，选中所有事件
export const triggerCheckAllEvent =
  ({ api, vm }) =>
  (event, value) => {
    api.setAllSelection(value)
    let eventParams = {
      selection: api.getSelectRecords(),
      checked: value,
      $table: vm
    }
    emitEvent(vm, 'select-all', [eventParams, event])
  }

// 多选，切换所有行的选中状态
export const toggleAllSelection =
  ({ api, state, vm }) =>
  () => {
    api.triggerCheckAllEvent(null, !state.isAllSelected)
    return vm.$nextTick()
  }

export const clearSelection =
  ({ state, props, vm }) =>
  () => {
    const tableFullData = state.afterFullData
    const treeConfig = props.treeConfig
    let { checkField } = props.selectConfig || {}
    if (checkField) {
      treeConfig
        ? eachTree(tableFullData, (item) => set(item, checkField, false), treeConfig)
        : tableFullData.forEach((item) => set(item, checkField, false))
    }
    Object.assign(state, {
      isAllSelected: false,
      isIndeterminate: false,
      selection: [],
      treeIndeterminates: []
    })

    return vm.$nextTick()
  }

export const initMultipleHistory =
  ({ vm, api }) =>
  () => {
    const { isMultipleHistory } = vm.$grid
    const toolbarVm = api.getVm('toolbar')
    const {
      settingOpts: { storageKey },
      id: toolbarId
    } = toolbarVm
    let remoteSelectedMethod = toolbarVm.setting.multipleHistory.remoteSelectedMethod
    let remoteSelectedPromise

    if (
      isMultipleHistory &&
      toolbarVm &&
      toolbarVm.setting &&
      toolbarVm.setting.multipleHistory &&
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
            toolbarVm.applySettings({ columns, pageSize })
          })
        }
      }
    }
  }

// 显示多选工具栏
export const showSelectToolbar =
  ({ state, vm, api }) =>
  () => {
    const {
      $grid: { selectToolbar, showHeader }
    } = vm
    let { selectToolbarStore } = state
    if (selectToolbar && showHeader) {
      selectToolbarStore.visible = false
      let selectColumn = find(state.visibleColumn, (item) => item.type === 'selection')
      let selected = api.getSelectRecords()
      let position = typeof selectToolbar === 'object' ? selectToolbar.position : ''
      if (selectColumn && selected && selected.length) {
        let selectTh = vm.$el.querySelector('th.tiny-grid-header__column.col__selection')
        let headerWrapper = vm.$el.querySelector('.tiny-grid>.tiny-grid__header-wrapper')
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
        return vm.$nextTick().then(() => {
          selectToolbarStore.layout = layout
          selectToolbarStore.visible = true
        })
      }
    }
    return vm.$nextTick()
  }
// 切换多选工具栏的显示
export const toggleSelectToolbarVisible =
  ({ state, vm }) =>
  () => {
    state.selectToolbarStore.visible = !state.selectToolbarStore.visible
    return vm.$nextTick()
  }

// 在空数据时Selection列表头复选框禁用，headerAutoDisabled设置为false就会和旧版本兼容
export const handleSelectionHeader =
  ({ state, props }) =>
  () => {
    const { tableFullData, visibleColumn } = state
    const selectConfig = props.selectConfig || {}
    const { headerAutoDisabled } = selectConfig
    const selectionColumn = visibleColumn.find((column) => column.type === 'selection')
    if (
      (typeof headerAutoDisabled === 'undefined' || (typeof headerAutoDisabled === 'boolean' && headerAutoDisabled)) &&
      !tableFullData.length &&
      selectionColumn
    ) {
      state.headerCheckDisabled = true
    }
  }
