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

import { isObject, isNull } from '@opentiny/vue-renderless/common/type'
import { convertToRows } from '@opentiny/vue-renderless/grid/plugins/header'
import { removeClass, addClass } from '@opentiny/vue-renderless/common/deps/dom'
import { isBoolean, isFunction } from '@opentiny/vue-renderless/grid/static/'
import { updateCellTitle, getOffsetPos, emitEvent, getClass } from '@opentiny/vue-renderless/grid/utils'
import { h, $prefix } from '@opentiny/vue-common'
import { random } from '@opentiny/vue-renderless/common/string'

function addListenerMousedown({ $table, mouseConfig, params, thOns }) {
  if (mouseConfig.checked) {
    thOns.mousedown = (event) =>
      $table.triggerHeaderCellMousedownEvent(event, {
        cell: event.currentTarget,
        ...params
      })
  }
}

function addListenerDblclick({ $table, params, tableListeners, thOns }) {
  if (tableListeners['header-cell-dblclick']) {
    thOns.dblclick = (event) => emitEvent($table, 'header-cell-dblclick', [{ cell: event.currentTarget, ...params }, event])
  }
}

function addListenerClick({ $table, highlightCurrentColumn, mouseConfig, params, sortOpts, tableListeners, thOns }) {
  if (highlightCurrentColumn || tableListeners['header-cell-click'] || mouseConfig.checked || sortOpts.trigger === 'cell') {
    thOns.click = (event) =>
      $table.triggerHeaderCellClickEvent(event, {
        cell: event.currentTarget,
        ...params
      })
  }
}

function addListenerMouseout({ $table, showHeaderTip, showTooltip, thOns }) {
  if (showTooltip || showHeaderTip) {
    thOns.mouseout = () => {
      if ($table._isResize) {
        return
      }

      $table.clostTooltip()
    }
  }
}

function addListenerMouseover({ $table, params, showHeaderTip, showTitle, showTooltip, thOns }) {
  if (showTitle || showTooltip || showHeaderTip) {
    thOns.mouseover = (event) => {
      if ($table._isResize) {
        return
      }

      if (showTitle) {
        updateCellTitle(event)
      } else if (showTooltip || showHeaderTip) {
        $table.triggerHeaderTooltipEvent(event, { showHeaderTip, ...params })
      }
    }
  }
}

function modifyHeadAlign({ column, headAlign }) {
  if (~['radio', 'selection', 'index'].indexOf(column.type)) {
    headAlign = headAlign || 'center'
  }

  return headAlign
}

function computeDragLeft(args) {
  let { dragMinLeft } = args
  let { left } = args

  let dragLeft = Math.max(left, dragMinLeft)

  return { left, dragMinLeft, dragLeft }
}

function renderTableColgroup(tableColumn) {
  return h(
    'colgroup',
    {
      ref: 'colgroup'
    },
    tableColumn.map((column, columnIndex) => h('col', { attrs: { name: column.id }, key: columnIndex })).concat([h('col', { attrs: { name: 'col_gutter' } })])
  )
}

function renderRepair() {
  return h('div', { class: 'tiny-grid__repair', ref: 'repair' })
}

function renderXSpace() {
  return h('div', { class: 'tiny-grid-body__x-space', ref: 'xSpace' })
}

const classMap = {
  colFixed: 'col__fixed',
  colIndex: 'col__index',
  colRadio: 'col__radio',
  colSelection: 'col__selection',
  colGroup: 'col__group',
  colEllipsis: 'col__ellipsis',
  fixedHidden: 'fixed__column',
  isSortable: 'is__sortable',
  isEditable: 'is__editable',
  isFilter: 'is__filter',
  filterActive: 'filter__active'
}

function getThPropsArg(args) {
  let { column, columnIndex, columnKey, fixedHiddenColumn, hasEllipsis, headAlign } = args
  let { headerCellClassName, headerClassName, isColGroup, isDragHeaderSorting, params, thOns } = args
  return {
    class: [
      'tiny-grid-header__column',
      column.id,
      {
        [`col__${headAlign}`]: headAlign,
        [classMap.colFixed]: column.fixed,
        [classMap.colIndex]: column.type === 'index',
        [classMap.colRadio]: column.type === 'radio',
        [classMap.colSelection]: column.type === 'selection',
        [classMap.colGroup]: isColGroup,
        [classMap.colEllipsis]: hasEllipsis,
        [classMap.fixedHidden]: fixedHiddenColumn,
        [classMap.isSortable]: !['index', 'radio', 'selection'].includes(column.type) && column.sortable,
        [classMap.isEditable]: column.editor,
        [classMap.isFilter]: isObject(column.filter),
        [classMap.filterActive]: column.filter && column.filter.hasFilter
      },
      getClass(headerClassName, params),
      getClass(headerCellClassName, params)
    ],
    attrs: {
      'data-colid': column.id,
      colspan: column.colSpan,
      rowspan: column.rowSpan
    },
    on: thOns,
    key: isDragHeaderSorting ? random() : columnKey || isColGroup ? column.id : columnIndex
  }
}

function renderThPartition({ border, column, isColGroup, resizable }) {
  let res = null

  const classMap = {
    isLine: 'is__line'
  }

  if (!isColGroup && !(isBoolean(column.resizable) ? column.resizable : resizable) && column.type !== 'index') {
    res = h('div', {
      class: ['tiny-grid-thead-partition', { [classMap.isLine]: !border }]
    })
  }

  return res
}

function renderThCell(args) {
  let { column, fixedHiddenColumn, headerSuffixIconAbsolute, params } = args
  let { showEllipsis, showHeaderTip, showTitle, showTooltip } = args

  return h(
    'div',
    {
      class: [
        'tiny-grid-cell',
        {
          'tiny-grid-cell__title': showTitle,
          'tiny-grid-cell__tooltip': showTooltip || showHeaderTip,
          'tiny-grid-cell__ellipsis': showEllipsis,
          'tiny-grid-cell__header-suffix': headerSuffixIconAbsolute
        }
      ]
    },
    column.renderHeader(h, { isHidden: fixedHiddenColumn, ...params })
  )
}
function renderThResize({ _vm, border, column, fixedHiddenColumn, isColGroup, params, resizable }) {
  let res = null

  const classMap = {
    isLine: 'is__line'
  }

  if (
    !fixedHiddenColumn &&
    !isColGroup &&
    !~['index', 'radio', 'selection'].indexOf(column.type) &&
    (isBoolean(column.resizable) ? column.resizable : resizable)
  ) {
    res = h('div', {
      class: ['tiny-grid-resizable', { [classMap.isLine]: !border }],
      on: {
        mousedown: (event) => _vm.resizeMousedown(event, { isHidden: fixedHiddenColumn, ...params })
      }
    })
  }

  return res
}

function getThHandler(args) {
  let { $rowIndex, $table, _vm, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey, headerCellClassName } = args
  let { headerSuffixIconAbsolute, highlightCurrentColumn, isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts, tableListeners } = args

  return (column, $columnIndex) => {
    let { showHeaderOverflow, showHeaderTip, headerAlign, align, headerClassName } = column
    let isColGroup = column.children && column.children.length
    let fixedHiddenColumn = column.fixed
    let headOverflow = isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow
    let showEllipsis = headOverflow === 'ellipsis'
    let showTitle = headOverflow === 'title'
    let headAlign = headerAlign || align || allHeaderAlign || allAlign
    let showTooltip = headOverflow === true || headOverflow === 'tooltip'
    let thOns = {}
    let hasEllipsis = showTitle || showTooltip || showEllipsis

    // 索引列、选择列如果不配置对齐方式则默认为居中对齐
    headAlign = modifyHeadAlign({ column, headAlign })
    // 确保表格索引的准确性
    let columnIndex = $table.getColumnIndex(column)
    let params = { $table, $rowIndex, column }
    Object.assign(params, { columnIndex, $columnIndex })
    addListenerMouseover({ $table, params, showHeaderTip, showTitle, showTooltip, thOns })
    addListenerMouseout({ $table, showHeaderTip, showTooltip, thOns })

    let args1 = { $table, highlightCurrentColumn, mouseConfig, params }
    Object.assign(args1, { sortOpts, tableListeners, thOns })
    addListenerClick(args1)
    addListenerDblclick({ $table, params, tableListeners, thOns })

    // 按下事件处理
    addListenerMousedown({ $table, mouseConfig, params, thOns })
    args1 = { column, columnIndex, columnKey, fixedHiddenColumn, hasEllipsis, headAlign }
    Object.assign(args1, { headerCellClassName, headerClassName, isColGroup, isDragHeaderSorting, params, thOns })
    let args2 = { column, fixedHiddenColumn, headerSuffixIconAbsolute, params }
    Object.assign(args2, { showEllipsis, showHeaderTip, showTitle, showTooltip })

    return h('th', getThPropsArg(args1), [
      renderThPartition({ border, column, isColGroup, resizable }),
      renderThCell(args2),
      // 列宽拖动
      renderThResize({ _vm, border, column, fixedHiddenColumn, isColGroup, params, resizable })
    ])
  }
}

function renderTableThead(args) {
  let { $table, _vm, allAlign, allColumnHeaderOverflow } = args
  let { allHeaderAlign, border, columnKey } = args
  let { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute } = args
  let { highlightCurrentColumn, isDragHeaderSorting, mouseConfig } = args
  let { overflowX, resizable, sortOpts, tableListeners } = args

  return h(
    'thead',
    {
      ref: 'thead'
    },
    headerColumn.map((cols, $rowIndex) => {
      let args1 = { $rowIndex, $table, _vm, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey }

      Object.assign(args1, { headerCellClassName, headerSuffixIconAbsolute, highlightCurrentColumn })
      Object.assign(args1, { isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts, tableListeners })

      return h(
        'tr',
        {
          class: [
            'tiny-grid-header__row',
            headerRowClassName ? (isFunction(headerRowClassName) ? headerRowClassName({ $table, $rowIndex }) : headerRowClassName) : ''
          ]
        },
        cols.map(getThHandler(args1)).concat([h('th', { class: 'col__gutter' })])
      )
    })
  )
}

function updateResizableToolbar($table) {
  if ($table.$toolbar) {
    $table.$toolbar.updateResizable()
  }
}

function renderTable(args) {
  let { $table, _vm, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey } = args
  let { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute } = args
  let { highlightCurrentColumn, isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts } = args
  let { tableColumn, tableLayout, tableListeners } = args
  let args1 = { $table, _vm, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey }

  Object.assign(args1, { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute })
  Object.assign(args1, { highlightCurrentColumn, isDragHeaderSorting, mouseConfig })
  Object.assign(args1, { overflowX, resizable, sortOpts, tableListeners })

  return h(
    'table',
    {
      class: 'tiny-grid__header',
      style: { tableLayout },
      attrs: { cellspacing: 0, cellpadding: 0, border: 0 },
      ref: 'table'
    },
    [
      // 列宽
      renderTableColgroup(tableColumn),
      // 头部
      renderTableThead(args1)
    ]
  )
}

const documentOnmouseup = function ({ oldMousemove, oldMouseup, column, dragPosLeft, dragLeft, resizeBarElem, $table, params }) {
  document.onmousemove = oldMousemove
  document.onmouseup = oldMouseup

  let resizeWidth = column.renderWidth + dragLeft - dragPosLeft
  resizeWidth = typeof resizeWidth === 'number' ? resizeWidth : parseInt(resizeWidth, 10) || 40
  column.resizeWidth = resizeWidth < 40 ? 40 : resizeWidth

  resizeBarElem.style.display = 'none'
  removeClass($table.$el, 'tiny-grid-cell__resize')
  Object.assign($table, { _isResize: false, _lastResizeTime: Date.now() })

  $table.analyColumnWidth()
  $table.recalculate()
  updateResizableToolbar($table)
  emitEvent($table, 'resizable-change', [params])
}

export default {
  name: `${$prefix}GridHeader`,
  props: {
    collectColumn: Array,
    fixedColumn: Array,
    size: String,
    isGroup: Boolean,
    tableColumn: Array,
    tableData: Array,
    visibleColumn: Array
  },
  watch: {
    tableColumn() {
      this.uploadColumn()
    }
  },
  data() {
    return {
      headerColumn: []
    }
  },
  mounted() {
    let { $el, $parent: $table, $refs } = this
    let elemStore = $table.elemStore
    let keyPrefix = 'main-header-'

    elemStore[`${keyPrefix}wrapper`] = $el
    elemStore[`${keyPrefix}table`] = $refs.table
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    elemStore[`${keyPrefix}list`] = $refs.thead
    elemStore[`${keyPrefix}x-space`] = $refs.xSpace
    elemStore[`${keyPrefix}repair`] = $refs.repair
  },
  created() {
    this.uploadColumn()
  },
  render() {
    let { $parent: $table, headerColumn, tableColumn } = this
    let { align: allAlign, border, columnKey, headerAlign: allHeaderAlign } = $table
    let { headerCellClassName, headerRowClassName, headerSuffixIconAbsolute } = $table
    let { highlightCurrentColumn, isDragHeaderSorting, mouseConfig = {}, overflowX } = $table
    let { resizable, showHeaderOverflow: allColumnHeaderOverflow } = $table
    let { sortOpts, tableLayout, tableListeners } = $table

    let args = { $table, _vm: this, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey }

    Object.assign(args, { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute })
    Object.assign(args, { highlightCurrentColumn, isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts })
    Object.assign(args, { tableColumn, tableLayout, tableListeners })

    return h(
      'div',
      {
        class: ['tiny-grid__header-wrapper', 'body__wrapper']
      },
      [ // 表格主体内容x轴方向虚拟滚动条占位元素，在表头中属于无效元素，待删除
        renderXSpace(),
        renderTable(args),
        // x轴方向虚拟滚动适配线
        renderRepair()
      ]
    )
  },
  methods: {
    uploadColumn() {
      this.headerColumn = this.isGroup ? convertToRows(this.collectColumn) : [this.tableColumn]
    },
    resizeMousedown(event, params) {
      let { $el, $parent: $table } = this
      let { clientX: dragClientX, target: dragBtnElem } = event
      let { column } = params
      let { dragLeft = 0, minInterval = 36, fixedOffsetWidth = 0 } = {}
      let { resizeBar: resizeBarElem, tableBody } = $table.$refs
      let { cell = dragBtnElem.parentNode, dragBtnWidth = dragBtnElem.clientWidth } = {}
      let { pos = getOffsetPos(dragBtnElem, $el), tableBodyElem = tableBody.$el } = {}
      let dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval
      let dragPosLeft = pos.left + Math.floor(dragBtnWidth / 2)
      let { oldMousemove = document.onmousemove, oldMouseup = document.onmouseup } = {}

      // 处理拖动事件
      let handleMousemoveEvent = function (event) {
        event.stopPropagation()
        event.preventDefault()

        let { offsetX = event.clientX - dragClientX, left = offsetX + dragPosLeft } = {}
        let scrollLeft = tableBodyElem.scrollLeft
        let args = { cell, dragMinLeft, dragPosLeft, fixedOffsetWidth }
        Object.assign(args, { left, minInterval, tableBodyElem })

        let ret = computeDragLeft(args)
        left = ret.left
        dragMinLeft = ret.dragMinLeft
        dragLeft = ret.dragLeft
        resizeBarElem.style.left = `${dragLeft - scrollLeft}px`
      }

      resizeBarElem.style.display = 'block'
      addClass($table.$el, 'tiny-grid-cell__resize')
      $table._isResize = true

      document.onmousemove = handleMousemoveEvent
      document.onmouseup = () => {
        documentOnmouseup({ oldMousemove, oldMouseup, column, dragPosLeft, dragLeft, resizeBarElem, $table, params })
      }
      handleMousemoveEvent(event)
    }
  }
}
