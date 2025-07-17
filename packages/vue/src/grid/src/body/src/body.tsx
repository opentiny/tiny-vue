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

import { isFunction, find, isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { removeClass, addClass, isObject, throttle } from '@opentiny/utils'
import {
  emitEvent,
  getClass,
  getFuncText,
  getRowid,
  formatText,
  getOffsetPos
} from '@opentiny/vue-renderless/grid/utils'
import { getCellLabel } from '../../tools'
import GlobalConfig from '../../config'
import { iconGridNoData, iconChevronRight, iconChevronDown } from '@opentiny/vue-icon'
import { h, hooks, $prefix, defineComponent } from '@opentiny/vue-common'
import { handleRowGroupFold, isVirtualRow, getFixedStyle, getFixedClass } from '../../table/src/strategy'
import { usePool } from './usePool'
import { getConfigOverflow, useCellEvent, useCellSpan, useHeader } from '../../composable'

const ChevronRight = iconChevronRight()
const ChevronDown = iconChevronDown()
const GridNoData = iconGridNoData()

let renderRowFlag = true

const renderBorder = (type) => {
  return (
    <div ref={`${type}Borders`} class={`tiny-grid-${type}ed-borders`}>
      <span ref={`${type}Top`} class="tiny-grid-border-top" />
      <span ref={`${type}Right`} class="tiny-grid-border-right" />
      <span ref={`${type}Bottom`} class="tiny-grid-border-bottom" />
      <span ref={`${type}Left`} class="tiny-grid-border-left" />
    </div>
  )
}

/** 渲染列 */
function renderColumn({ $columnIndex, $table, _vm, column, id, row, rowid, seq, used }) {
  const { align: allAlign, cellClassName, dropConfig = {}, editConfig, editRules, editStore } = $table
  const { height, rowId, scrollXLoad, scrollYLoad, validOpts, validStore, validatedMap } = $table
  const { normalRows } = _vm
  const { attrs = { rowspan: 1, colspan: 1, visible: true }, params = { $table, row, column } } =
    normalRows[rowid]?.[column.id] || {}
  const { isMessageDefault, isMessageInline } = validOpts
  const { actived } = editStore
  const validated = validatedMap[column.id + '-' + row[rowId]]
  const validError = validStore.row === row && validStore.column === column
  const hasDefaultTip = editRules && (isMessageDefault ? height || !_vm.isNoData : isMessageInline)
  const { align, className, editor } = column

  let cellAlign = align || allAlign

  // 索引列、选择列如果不配置对齐方式则默认为居中对齐
  if (['radio', 'selection', 'index'].includes(column.type)) {
    cellAlign = cellAlign || 'center'
  }

  let { cellTip, cellOverflowTitle, cellOverflowTooltip, cellOverflowEllipsis, cellOverflowHint } = getConfigOverflow(
    column,
    $table
  )

  // 滚动的渲染不支持动态行高
  if ((scrollXLoad || scrollYLoad) && !cellOverflowHint) {
    cellOverflowEllipsis = true
  }

  const columnActived =
    editConfig && editor && actived.row === row && (actived.column === column || editConfig.mode === 'row')

  // 如果显示状态
  const isDirty = $table.getCellStatus(row, column).isDirty

  params.$columnIndex = $columnIndex

  return (
    <td
      key={id}
      style={[
        getFixedStyle(column, $table),
        attrs._stickyStyle,
        { display: used && attrs.visible ? undefined : 'none' }
      ]}
      data-colid={column.id}
      data-seq={seq}
      data-colindex={$columnIndex}
      rowspan={attrs.rowspan > 1 ? attrs.rowspan : undefined}
      colspan={attrs.colspan > 1 ? attrs.colspan : undefined}
      class={[
        'tiny-grid-body__column',
        column.id,
        {
          [`col__${cellAlign}`]: cellAlign,
          'col__edit': editor,
          'col__index': column.type === 'index',
          'col__radio': column.type === 'radio',
          'col__selection': column.type === 'selection',
          'col__ellipsis': cellOverflowHint,
          'edit__visible': editor && editor.type === 'visible',
          'col__dirty': isDirty,
          'col__actived': columnActived,
          'col__valid-error': validError && validated,
          'col__valid-success': columnActived ? !validError && !validated : isDirty && !validated,
          'col__treenode': column.treeNode
        },
        getClass(className, params),
        getClass(cellClassName, params),
        getFixedClass(column, $table),
        attrs._stickyClass || ''
      ]}>
      {[
        // 行拖拽手柄
        dropConfig.rowHandle === 'index' && column.type === 'index' ? <div class="row__drop-handle" /> : null,
        // 单元格主内容
        // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
        <div
          class={{
            'tiny-grid-cell': true,
            'tiny-grid-cell__title': cellOverflowTitle,
            'tiny-grid-cell__tooltip': cellOverflowTooltip || cellTip,
            'tiny-grid-cell__ellipsis': cellOverflowEllipsis
          }}
          title={cellOverflowTitle ? getCellLabel(row, column, params) : null}>
          {$table.isShapeTable ? column.renderCell(h, params) : null}
        </div>,
        // 行内校验
        hasDefaultTip && validError ? (
          <div
            class="tiny-grid-cell__valid"
            style={validStore.rule && validStore.rule.width ? { width: `${validStore.rule.width}px` } : null}>
            <span class="tiny-grid-cell__valid-msg" title={validStore.content}>
              {validStore.content}
            </span>
          </div>
        ) : null
      ]}
    </td>
  )
}

function renderHeaderRows(_vm: any): any {
  const { $parent: $table, headerTable } = _vm
  const { headerCellClassName, headerRowClassName, headerSuffixIconAbsolute } = $table
  const { align: allAlign, border, headerAlign: allHeaderAlign, resizable } = $table
  const { editConfig, operationColumnResizable, mouseConfig = {}, dropConfig = {} } = $table
  return headerTable.map((cols, $rowIndex) => {
    return (
      <tr
        data-rowindex={$rowIndex}
        class={[
          'tiny-grid-header__row',
          headerRowClassName
            ? isFunction(headerRowClassName)
              ? headerRowClassName({ $table, $rowIndex })
              : headerRowClassName
            : ''
        ]}>
        {cols.map(({ id, column, colspan, rowspan, height, top }, $columnIndex) => {
          const isColGroup = column.children?.length
          const { headerAlign, align, headerClassName } = column
          const { headerTip, headerOverflowTitle, headerOverflowTooltip, headerOverflowEllipsis, headerOverflowHint } =
            getConfigOverflow(column, $table)
          const columnIndex = $table.getColumnIndex(column)
          const params = { $table, $rowIndex, column, columnIndex, $columnIndex, isHidden: false }
          const isColResize = ['index', 'radio', 'selection'].includes(column.type) ? operationColumnResizable : true

          let headAlign = headerAlign || align || allHeaderAlign || allAlign

          if (['radio', 'selection', 'index'].includes(column.type)) {
            headAlign = headAlign || 'center'
          }

          return (
            <th
              key={id}
              data-colid={column.id}
              data-colindex={$columnIndex}
              colspan={colspan > 1 ? colspan : undefined}
              rowspan={rowspan > 1 ? rowspan : undefined}
              style={[
                getFixedStyle(column, $table),
                { height: rowspan > 1 ? `${height}px` : undefined, top: `${top}px`, zIndex: column.fixed ? 20 : 10 }
              ]}
              class={[
                'tiny-grid-header__column',
                column.id,
                {
                  [`col__${headAlign}`]: headAlign,
                  'col__fixed': column.fixed,
                  'col__index': column.type === 'index',
                  'col__radio': column.type === 'radio',
                  'col__selection': column.type === 'selection',
                  'col__group': isColGroup,
                  'col__ellipsis': headerOverflowHint,
                  'is__sortable': !['index', 'radio', 'selection'].includes(column.type) && column.sortable,
                  'is__editable': column.editor,
                  'is__filter': isObject(column.filter),
                  'filter__active': column.filter && column.filter.hasFilter,
                  'is__multilevel': rowspan > 1
                },
                getClass(headerClassName, params),
                getClass(headerCellClassName, params),
                getFixedClass(column, $table)
              ]}>
              {[
                !isColGroup &&
                !(isBoolean(column.resizable) ? column.resizable : resizable) &&
                column.type !== 'index' ? (
                  <div class={{ 'tiny-grid-thead-partition': true, 'is__line': !border }} />
                ) : null,
                // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
                <div
                  class={{
                    'tiny-grid-cell': true,
                    'tiny-grid-cell__title': headerOverflowTitle,
                    'tiny-grid-cell__tooltip': headerTip || headerOverflowTooltip,
                    'tiny-grid-cell__ellipsis': headerOverflowEllipsis,
                    'tiny-grid-cell__header-suffix': headerSuffixIconAbsolute,
                    'tiny-grid-cell__header-no-icon': editConfig && !editConfig.showIcon && !column.showIcon
                  }}>
                  {$table.isShapeTable ? column.renderHeader(h, params) : null}
                </div>,
                mouseConfig.checked && dropConfig.column && !column.type && !column.fixed ? (
                  <div class="tiny-grid-cell__drag-bar" onMousedown={(event) => event.stopPropagation()} />
                ) : null,
                !isColGroup && isColResize && (isBoolean(column.resizable) ? column.resizable : resizable) ? (
                  <div
                    class={{ 'tiny-grid-resizable': true, 'is__line': !border }}
                    onMousedown={(event) => _vm.resizeMousedown(event, params)}
                  />
                ) : null
              ]}
            </th>
          )
        })}
      </tr>
    )
  })
}

function renderFooterRows(_vm: any): any {
  const { $parent: $table, footerData, columnPool, rowHeight, footerRows } = _vm
  const { align: allAlign, footerAlign: allFooterAlign, footerCellClassName, footerRowClassName } = $table
  const footerDataLength = footerData.length

  return footerData.map((list, $rowIndex) => {
    const trBottom = (footerDataLength - 1 - $rowIndex) * rowHeight

    return (
      <tr
        data-rowindex={$rowIndex}
        class={[
          'tiny-grid-footer__row',
          footerRowClassName
            ? isFunction(footerRowClassName)
              ? footerRowClassName({ $table, $rowIndex })
              : footerRowClassName
            : ''
        ]}>
        {columnPool.map(({ id, item: column, used }, $columnIndex) => {
          const { footerAlign, align, footerClassName } = column
          const ftAlign = footerAlign || align || allFooterAlign || allAlign
          const { cellOverflowHint } = getConfigOverflow(column, $table)
          const { attrs = { rowspan: 1, colspan: 1, visible: true }, params = { $table, column } } =
            footerRows[$rowIndex]?.[column.id] || {}
          const rowspan = attrs?.rowspan || 1
          const tdBottom = trBottom - (rowspan > 1 ? (rowspan - 1) * rowHeight : 0)

          params.$columnIndex = $columnIndex

          return (
            <td
              key={id}
              data-colid={column.id}
              data-colindex={$columnIndex}
              rowspan={attrs.rowspan > 1 ? attrs.rowspan : undefined}
              colspan={attrs.colspan > 1 ? attrs.colspan : undefined}
              style={[
                getFixedStyle(column, $table),
                attrs._stickyStyle,
                {
                  bottom: `${tdBottom}px`,
                  zIndex: column.fixed ? 20 : 10,
                  display: used && attrs.visible ? undefined : 'none'
                }
              ]}
              class={[
                'tiny-grid-footer__column',
                column.id,
                {
                  [`col__${ftAlign}`]: ftAlign,
                  'col__ellipsis': cellOverflowHint,
                  'filter__active': column.filter && column.filter.hasFilter
                },
                getClass(footerClassName, params),
                getClass(footerCellClassName, params),
                getFixedClass(column, $table),
                attrs._stickyClass || ''
              ]}>
              <div class={{ 'tiny-grid-cell': true, 'cell__summary': $table.summaryConfig }}>
                {$table.isShapeTable ? formatText(list[$columnIndex]) : null}
              </div>
            </td>
          )
        })}
      </tr>
    )
  })
}

function renderRows(_vm) {
  const { $parent: $table, tableColumn, rowPool } = _vm
  const { afterFullData, editConfig, editStore, expandConfig = {}, expandeds, hasVirtualRow } = $table
  const { rowClassName, rowGroup, scrollYLoad, scrollYStore, selection, treeConfig, treeOrdered, selectRow } = $table
  const expandMethod = expandConfig.activeMethod
  const startIndex = scrollYStore.startIndex
  const isOrdered = treeConfig ? !!treeOrdered : false
  const { hideMethod } = treeConfig || {}
  const { actived } = editStore
  const rows = []
  const seqCount = { value: 0 }
  const $seq = ''

  rowPool.forEach(({ id, item: { payload: row, level: rowLevel }, used }, $rowIndex) => {
    const rowActived = editConfig && actived.row === row
    const virtualRow = isVirtualRow(row)
    const isSkipRowRender = (hideMethod && hideMethod(row, rowLevel)) || virtualRow
    const rowid = getRowid($table, row)
    const rowIndex = $table.getRowIndex(row)

    if (!isSkipRowRender) {
      seqCount.value = seqCount.value + 1
    }

    let seq = isOrdered ? seqCount.value : $rowIndex + 1

    if (scrollYLoad) {
      seq += startIndex
    }

    // 分组表场景正常数据行的序号由在afterFullData中的位置提供
    if (hasVirtualRow && !virtualRow) {
      seq = afterFullData.indexOf(row) + 1
    }

    renderRowGroupData({ $table, _vm, id, row, rowGroup, rowid, rows, used, virtualRow })

    let args = { $rowIndex, $seq, $table, _vm, editStore, id, isSkipRowRender, row, rowActived, rowClassName }

    Object.assign(args, { rowIndex, rowLevel, rowid, rows, selection, seq, treeConfig, used, selectRow })

    renderRow(args)

    renderRowAfter({ $table, _vm, id, row, rowIndex, rows, used })

    args = { $table, expandMethod, expandeds, id, row, rowIndex, rowLevel, rows, seq, tableColumn, treeConfig, used }

    // 如果行被展开了
    renderRowExpanded(args)
  })
  renderRowFlag = !renderRowFlag
  return rows
}

function renderRowExpanded(args) {
  const { $table, expandMethod, expandeds, id, row, rowIndex } = args
  const { rowLevel, rows, seq, tableColumn, treeConfig, used } = args

  if (
    expandeds.length &&
    expandeds.includes(row) &&
    (typeof expandMethod === 'function' ? expandMethod(row, rowLevel) : true)
  ) {
    const column = find(tableColumn, (column) => column.type === 'expand')
    const columnIndex = $table.getColumnIndex(column)
    let cellStyle

    if (treeConfig) {
      cellStyle = { paddingLeft: `${rowLevel * (treeConfig.indent || 16) + 30}px` }
    }

    if (column) {
      const options = { $table, seq, row, rowIndex, column, columnIndex, level: rowLevel }

      rows.push(
        <tr key={`expand_${id}`} style={{ display: used ? undefined : 'none' }} class="tiny-grid-body__expanded-row">
          <td colspan={tableColumn.length} class="tiny-grid-body__expanded-column">
            <div style={cellStyle} class="tiny-grid-body__expanded-cell">
              {column.renderData(h, options)}
            </div>
          </td>
        </tr>
      )
    }
  }
}

function renderRowAfter({ $table, _vm, row, rowIndex, rows, id, used }) {
  typeof $table.renderRowAfter === 'function' &&
    $table.renderRowAfter({ rows, row, data: _vm.tableData, rowIndex, renderColumn, id, used }, h)
}

function renderRow(args) {
  const { $rowIndex, $seq, $table, _vm, editStore, id, isSkipRowRender, row, rowActived, rowClassName } = args
  const { rowIndex, rowLevel, rowid, rows, selection, selectRow, seq, treeConfig, used } = args

  if (isSkipRowRender) {
    return
  }

  let key = id
  if (row._isDraging) {
    // 防止数据多次刷新导致key回归rowid
    _vm.$nextTick(() => {
      delete row._isDraging
    })
    if (renderRowFlag) {
      key = `drag_${key}`
    }
  }

  const { columnPool } = _vm

  rows.push(
    <tr
      key={key}
      data-rowid={rowid}
      data-rowindex={$rowIndex}
      data-rowlevel={rowLevel}
      style={{ display: used ? undefined : 'none' }}
      class={[
        'tiny-grid-body__row',
        {
          [`row__level-${rowLevel}`]: treeConfig,
          'row__new': editStore.insertList.includes(row),
          'row__selected': selection.includes(row),
          'row__radio': selectRow === row,
          'row__actived': rowActived
        },
        rowClassName
          ? isFunction(rowClassName)
            ? rowClassName({ $table, $seq, seq, fixedType: undefined, rowLevel, row, rowIndex, $rowIndex })
            : rowClassName
          : ''
      ]}>
      {columnPool.map(({ id, item: column, used }, $columnIndex) =>
        renderColumn({ $columnIndex, $table, _vm, column, id, row, rowid, seq, used })
      )}
    </tr>
  )
}

function renderRowGroupTds({ $table, closeable, render, renderGroupCell, row, tds, title, _vm }) {
  const targetColumn = $table._rowGroupTargetColumn
  const value = row.value || ''
  const { columnPool } = _vm

  for (let { id, item: column, used } of columnPool) {
    const columnIndex = $table.getColumnIndex(column)
    const header = title || formatText(getFuncText(column.title), 1) || value
    const params = { value, header, children: row.children, expand: !row.fold, row, column, columnIndex }
    const isTarget = column === targetColumn

    tds.push(
      <td
        key={id}
        style={[getFixedStyle(column, $table), { display: used && column._rowGroupColspan > 0 ? undefined : 'none' }]}
        class={[
          'tiny-grid-body__column',
          isTarget ? 'td-group' : 'td-placeholder',
          column.id,
          getFixedClass(column, $table),
          column._stickyClass || ''
        ]}
        colspan={column._rowGroupColspan}
        data-colid={column.id}>
        <div class="tiny-grid-cell-group">
          {isTarget
            ? [
                closeable ? (
                  row.fold ? (
                    <ChevronRight class="tiny-svg-size" />
                  ) : (
                    <ChevronDown class="tiny-svg-size" />
                  )
                ) : null
              ].concat(
                render
                  ? render(h, params)
                  : [
                      <span class="row-group-title">{header}</span>,
                      ':' + value,
                      <span class="tiny-badge">{row.children.length}</span>
                    ]
              )
            : renderGroupCell
              ? renderGroupCell(h, params)
              : null}
        </div>
      </td>
    )
  }
}

function renderRowGroupData({ $table, _vm, id, row, rowGroup, rowid, rows, used, virtualRow }) {
  if (!virtualRow) return

  const { title, closeable = true, render, renderGroupCell, className } = rowGroup
  const tds = []

  renderRowGroupTds({ $table, closeable, render, renderGroupCell, row, tds, title, _vm })

  const onClick = (event) => {
    handleRowGroupFold(row, $table)

    if ($table.tableListeners['toggle-group-change']) {
      emitEvent($table, 'toggle-group-change', [{ $table, row }, event])
    }
  }

  rows.push(
    <tr
      key={id}
      class={['tiny-grid-body__row', 'group', className, { hover: row.hover }]}
      style={{ display: used ? undefined : 'none' }}
      data-rowid={rowid}
      onMouseout={() => (row.hover = false)}
      onMouseover={() => (row.hover = true)}
      onClick={onClick}>
      {tds}
    </tr>
  )
}

function renderTable({ $table, _vm }) {
  const { tableLayout, scrollXLoad, scrollYLoad, bodyTableWidth, isColumnWidthAssigned } = $table
  const { columnPool, isNoData } = _vm

  if (!isColumnWidthAssigned) {
    return
  }

  const tableVnode = (
    <table
      ref="table"
      class="tiny-grid__body"
      style={{ tableLayout, width: bodyTableWidth ? `${bodyTableWidth}px` : undefined }}
      cellspacing={0}
      cellpadding={0}
      border={0}
      data-tableid={$table.id}>
      {[
        // 列分组（用于指定列宽）
        <colgroup ref="colgroup">
          {columnPool.map(({ id, item: column, used }) => {
            return (
              <col
                key={id}
                name={column.id}
                width={String(column.renderWidth)}
                style={{ display: used ? undefined : 'none' }}
              />
            )
          })}
        </colgroup>,
        // 表头
        $table.showHeader ? <thead ref="thead">{renderHeaderRows(_vm)}</thead> : null,
        // 表体内容
        <tbody ref="tbody">{renderRows(_vm)}</tbody>,
        // 表尾
        $table.showFooter && !isNoData && typeof $table.renderFooter !== 'function' ? (
          <tfoot ref="tfoot">{renderFooterRows(_vm)}</tfoot>
        ) : null
      ]}
    </table>
  )

  return scrollXLoad || scrollYLoad ? (
    <div ref="stickyWrapper" class="sticky-wrapper">
      {tableVnode}
    </div>
  ) : (
    tableVnode
  )
}

const calcScrollLeft = ($table, wrapperScrollLeft) => {
  const { visibleColumn, tableColumn } = $table
  let start, end, total, offset, column

  start = end = total = offset = 0

  for (const col of visibleColumn) {
    start = end
    end = start + col.renderWidth

    if (wrapperScrollLeft >= start && wrapperScrollLeft < end) {
      offset = wrapperScrollLeft - total
      column = col
      break
    }

    total += col.renderWidth
  }

  total = 0

  for (const col of tableColumn) {
    if (col === column) {
      total += offset
      break
    }

    total += col.renderWidth
  }

  return total
}

const calcScrollTop = ($table, wrapperScrollTop) => {
  const { _graphInfo, tableData, headerHeight, rowHeight } = $table
  const graphed = _graphInfo.graphed
  const rows = graphed.map((node) => node.payload)
  let start, end, total, offset, row

  start = end = total = offset = 0

  if (wrapperScrollTop < headerHeight) {
    total = wrapperScrollTop
  } else {
    start = end = total = offset = headerHeight

    for (const r of rows) {
      start = end
      end = start + rowHeight

      if (wrapperScrollTop >= start && wrapperScrollTop < end) {
        offset = wrapperScrollTop - total
        row = r
        break
      }

      total += rowHeight
    }

    total = headerHeight

    for (const r of tableData) {
      if (hooks.toRaw(r) === hooks.toRaw(row)) {
        total += offset
        break
      }

      total += rowHeight
    }
  }

  return total
}
export default defineComponent({
  name: `${$prefix}GridBody`,
  props: {
    collectColumn: Array,
    tableColumn: Array,
    tableNode: Array,
    tableData: Array,
    footerData: Array
  },
  setup(props, { slots }) {
    const vm = hooks.getCurrentInstance()?.proxy
    const $table = vm?.$parent
    const rowHeight = hooks.computed(() => $table.rowHeight)
    const headerRowHeight = hooks.computed(() => $table.headerRowHeight)
    const { headerTable } = useHeader(props, vm, headerRowHeight)
    const { columnPool, rowPool, isNoData } = usePool(props)
    const wrapperScrollLeft = hooks.ref(0)
    const wrapperScrollTop = hooks.ref(0)
    const stickyWrapper = hooks.ref()
    const table = hooks.ref()
    const body = hooks.ref()
    const customFooter = hooks.ref()
    const colgroup = hooks.ref()
    const thead = hooks.ref()
    const tbody = hooks.ref()
    const ySpace = hooks.ref()

    hooks.watch(wrapperScrollLeft, (wrapperScrollLeft) => {
      const el = stickyWrapper.value
      if (!el) return
      hooks.nextTick(() => (el.scrollLeft = calcScrollLeft($table, wrapperScrollLeft)))
    })

    hooks.watch(wrapperScrollTop, (wrapperScrollTop) => {
      const el = stickyWrapper.value
      if (!el) return
      hooks.nextTick(() => (el.scrollTop = calcScrollTop($table, wrapperScrollTop)))
    })

    const resetStickyWrapperScrollPos = () => {
      const el = stickyWrapper.value
      if (!el) return
      el.scrollLeft = calcScrollLeft($table, wrapperScrollLeft.value)
      el.scrollTop = calcScrollTop($table, wrapperScrollTop.value)
    }

    useCellEvent({ table, $table })
    const { normalRows, footerRows } = useCellSpan(vm, props)

    hooks.watch([body, table, thead, tbody, ySpace], () => {
      const { elemStore } = $table

      elemStore['main-body-wrapper'] = body.value
      elemStore['main-body-table'] = table.value
      elemStore['main-body-headerList'] = thead.value
      elemStore['main-body-list'] = tbody.value
      elemStore['main-body-ySpace'] = ySpace.value
    })

    const bodyClientWidth = hooks.ref(0)

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const target = entry.target as HTMLElement

        switch (target) {
          case body.value:
            bodyClientWidth.value = target.clientWidth
            break
          case customFooter.value:
            $table.footerHeight = target.offsetHeight
        }
      }
    })

    hooks.watch(body, (body) => body && resizeObserver.observe(body))

    hooks.watch(tbody, (tbody) => {
      if (tbody && $table.dropConfig) {
        vm.rowSortable?.destroy()
        vm.columnSortable?.destroy()
        // 初始化行列拖拽
        const { plugin, row = true, column = true, scheme } = $table.dropConfig

        plugin && row && (vm.rowSortable = $table.rowDrop(body.value))

        if (scheme !== 'v2') {
          plugin && column && (vm.columnSortable = $table.columnDrop(body.value))
        }
      }
    })

    hooks.watch(customFooter, (customFooter) => customFooter && resizeObserver.observe(customFooter))

    hooks.watchEffect(() => {
      if ($table.isColumnWidthAssigned) {
        const columns = $table.scrollXLoad ? $table.visibleColumn : $table.tableColumn
        const scrollWidth = columns.reduce((total, col) => (total += col.renderWidth), 0)
        const clientWidth = bodyClientWidth.value

        $table.horizonScroll.max = scrollWidth > clientWidth ? scrollWidth - clientWidth : 0
      }
    })

    hooks.onMounted(() => {
      // 节流滚动降低滚动事件处理次数
      vm._throttleScrollHandler = throttle($table.optimizeOpts.scrollDelay, vm.handleScroll)

      body.value?.addEventListener('scroll', vm._throttleScrollHandler)
    })

    hooks.onBeforeUnmount(() => {
      const { rowSortable, columnSortable } = vm

      body.value?.removeEventListener('scroll', vm._throttleScrollHandler)
      vm._throttleScrollHandler = null
      rowSortable?.destroy()
      columnSortable?.destroy()
      resizeObserver.disconnect()
    })

    return {
      slots,
      rowHeight,
      headerTable,
      columnPool,
      rowPool,
      isNoData,
      wrapperScrollLeft,
      wrapperScrollTop,
      stickyWrapper,
      table,
      body,
      customFooter,
      colgroup,
      thead,
      tbody,
      ySpace,
      normalRows,
      footerRows,
      resetStickyWrapperScrollPos
    }
  },
  render() {
    const { $parent: $table, isNoData, tableColumn, footerData } = this
    const { $grid, keyboardConfig, mouseConfig, scrollLoad, showFooter, renderFooter } = $table
    const { containerScrollWidth, containerScrollHeight, scrollLoadScrollHeight } = $table
    const { bodyWrapperHeight, bodyWrapperMinHeight, bodyWrapperMaxHeight } = $table
    const $slots = $grid.slots
    const _vm = this

    return (
      <div
        ref="body"
        class={{
          'tiny-grid__body-wrapper body__wrapper': true,
          'is__scrollload': scrollLoad,
          'no-data': isNoData && $table.isShapeTable
        }}
        style={{
          height: bodyWrapperHeight ? `${bodyWrapperHeight}px` : undefined,
          minHeight: bodyWrapperMinHeight ? `${bodyWrapperMinHeight}px` : undefined,
          maxHeight: bodyWrapperMaxHeight ? `${bodyWrapperMaxHeight}px` : undefined
        }}>
        {[
          <div class="tiny-grid-body__x-space" style={{ width: `${containerScrollWidth}px` }} />,
          <div
            ref="ySpace"
            class="tiny-grid-body__y-space visual"
            style={{ height: `${containerScrollHeight}px` }}
            onScroll={this.handleScrollLoad}>
            {scrollLoad ? (
              <div
                class="tiny-grid-body__y-scrollbar"
                style={{ height: scrollLoadScrollHeight ? `${scrollLoadScrollHeight}px` : undefined }}
              />
            ) : null}
          </div>,
          // 内容表格
          renderTable({ $table, _vm }),
          // 渲染自定义表尾
          showFooter && !isNoData && typeof renderFooter === 'function' ? (
            <div ref="customFooter" class="tiny-grid-custom-footer">
              {renderFooter({ $table, columns: tableColumn, footerData }, h)}
            </div>
          ) : null,
          // 选中边框线
          mouseConfig.checked || keyboardConfig.isCut ? (
            <div class="tiny-grid__borders">
              {[mouseConfig.checked ? renderBorder('check') : null, keyboardConfig.isCut ? renderBorder('copy') : null]}
            </div>
          ) : null,
          // 空数据
          isNoData ? (
            <div ref="emptyBlock" class="tiny-grid__empty-block">
              {$slots.empty
                ? $slots.empty({ $table }, h)
                : $table.renderEmpty
                  ? [$table.renderEmpty(h, $table)]
                  : [
                      <GridNoData class="tiny-grid__empty-img" />,
                      <span class="tiny-grid__empty-text">{GlobalConfig.i18n('ui.grid.emptyText')}</span>
                    ]}
            </div>
          ) : null
        ]}
      </div>
    )
  },
  methods: {
    handleScroll(event) {
      const { $parent: $table, $el }: any = this
      const { lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad, horizonScroll } = $table
      const { max, threshold } = horizonScroll
      const { scrollLeft, scrollTop } = $el
      const isX = scrollLeft !== lastScrollLeft
      const isY = scrollTop !== lastScrollTop

      this.wrapperScrollLeft = scrollLeft
      this.wrapperScrollTop = scrollTop

      $table.lastScrollTime = Date.now()
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTop = scrollTop
      $table.scrollDirection = isX ? 'X' : 'Y'
      $table.horizonScroll.isLeft = scrollLeft < threshold
      $table.horizonScroll.isRight = scrollLeft > max - threshold

      if (isX && scrollXLoad) {
        $table.triggerScrollXEvent(event)
      }

      if (isY && scrollYLoad) {
        $table.triggerScrollYEvent(event)
      }

      emitEvent($table, 'scroll', [{ type: 'body', scrollTop, scrollLeft, isX, isY, $table }, event])
    },
    resizeMousedown(event, params) {
      let { $el, $parent: $table }: any = this
      let { clientX: dragClientX, target: dragBtnElem } = event
      let { column } = params
      let { dragLeft = 0, minInterval = 40 } = {}
      let { resizeBar: resizeBarElem, tableBody } = $table.$refs
      let { cell = dragBtnElem.parentNode, dragBtnWidth = dragBtnElem.clientWidth } = {}
      let { pos = getOffsetPos(dragBtnElem, $el), tableBodyElem = tableBody.$el } = {}
      let dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval
      let dragPosLeft = pos.left + Math.floor(dragBtnWidth)
      let { oldMousemove = document.onmousemove, oldMouseup = document.onmouseup } = {}

      // 处理拖动事件
      let handleMousemoveEvent = function (event) {
        event.stopPropagation()
        event.preventDefault()

        let { offsetX = event.clientX - dragClientX, left = offsetX + dragPosLeft } = {}
        let scrollLeft = tableBodyElem.scrollLeft

        dragLeft = Math.max(left, dragMinLeft)
        if ($table.resizableConfig?.limit) {
          const limitWidth = $table.resizableConfig?.limit({
            field: column.own.field,
            width: column.renderWidth + (dragLeft - dragPosLeft)
          })
          dragLeft = dragMinLeft - minInterval + limitWidth
        }

        resizeBarElem.style.left = dragLeft - scrollLeft + 'px'
      }

      resizeBarElem.style.display = 'block'
      addClass($table.$el, 'tiny-grid-cell__resize')
      $table._isResize = true
      document.onmousemove = handleMousemoveEvent

      document.onmouseup = function () {
        document.onmousemove = oldMousemove
        document.onmouseup = oldMouseup

        let resizeWidth = column.renderWidth + (dragLeft - dragPosLeft)

        resizeWidth = typeof resizeWidth === 'number' ? resizeWidth : parseInt(resizeWidth, 10) || 40
        column.resizeWidth = resizeWidth < 40 ? 40 : resizeWidth

        resizeBarElem.style.display = 'none'
        removeClass($table.$el, 'tiny-grid-cell__resize')
        Object.assign($table, { _isResize: false, _lastResizeTime: Date.now() })
        $table.analyColumnWidth()
        $table.recalculate()

        const toolbarVm = $table.getVm('toolbar')

        if (toolbarVm) {
          toolbarVm.updateResizable()
        }

        emitEvent($table, 'resizable-change', [params])

        // 拖拽列宽后更新水平滚动最大位置
        if ($table.horizonScroll.fixed) {
          setTimeout(() => {
            let { scrollWidth, clientWidth, scrollLeft } = $table.$refs.tableBody.$el

            $table.horizonScroll.max = scrollWidth > clientWidth ? scrollWidth - clientWidth : 0
            $table.horizonScroll.isRight = scrollLeft > $table.horizonScroll.max - $table.horizonScroll.threshold
          }, 50)
        }
      }

      handleMousemoveEvent(event)
    },
    handleScrollLoad(e) {
      const { $parent: $table } = this
      if ($table.scrollLoad) {
        $table.debounceScrollLoad(e)
      }
    }
  }
})
