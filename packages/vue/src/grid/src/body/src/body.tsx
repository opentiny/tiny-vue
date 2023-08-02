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

import { isFunction, find } from '@opentiny/vue-renderless/grid/static/'
import { isNull } from '@opentiny/vue-renderless/common/type'
import {
  updateCellTitle,
  emitEvent,
  getClass,
  getFuncText,
  getRowid,
  formatText
} from '@opentiny/vue-renderless/grid/utils'
import { getCellLabel } from '../../tools'
import GlobalConfig from '../../config'
import { iconChevronRight, iconChevronDown } from '@opentiny/vue-icon'
import { h, hooks, $prefix } from '@opentiny/vue-common'
import { getTreeChildrenKey, getTreeShowKey } from '../../table/src/strategy'
import { generateFixedClassName } from '../../table/src/utils/handleFixedColumn'

// 滚动、拖动过程中不需要触发鼠标移入移出事件
const isOperateMouse = ($table) =>
  $table._isResize || ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover)

// 解决静态扫描驼峰变量问题
const classMap = {
  colEdit: 'col__edit',
  colIndex: 'col__index',
  colRadio: 'col__radio',
  colSelection: 'col__selection',
  colEllipsis: 'col__ellipsis',
  editVisible: 'edit__visible',
  fixedColumn: 'fixed__column',
  colDirty: 'col__dirty',
  colActived: 'col__actived',
  rowNew: 'row__new',
  rowSelected: 'row__selected',
  rowActived: 'row__actived',
  isScrollload: 'is__scrollload'
}

const renderBorder = (h, type) => {
  let vnTop = h('span', {
    class: 'tiny-grid-border-top',
    ref: `${type}Top`
  })
  let vnRight = h('span', {
    class: 'tiny-grid-border-right',
    ref: `${type}Right`
  })
  let vnBottom = h('span', {
    class: 'tiny-grid-border-bottom',
    ref: `${type}Bottom`
  })
  let vnLeft = h('span', {
    class: 'tiny-grid-border-left',
    ref: `${type}Left`
  })

  return h(
    'div',
    {
      class: `tiny-grid-${type}ed-borders`,
      ref: `${type}Borders`
    },
    [vnTop, vnRight, vnBottom, vnLeft]
  )
}

function buildColumnProps(args) {
  let { attrs, cellAlign, cellClassName, className, column, columnActived, columnIndex, columnKey, editor } = args
  let { fixedHiddenColumn, hasEllipsis, isDirty, params, tdOns, validError, validated } = args

  return {
    class: [
      'tiny-grid-body__column',
      column.id,
      {
        [`col__${cellAlign}`]: cellAlign,
        [classMap.colEdit]: editor,
        [classMap.colIndex]: column.type === 'index',
        [classMap.colRadio]: column.type === 'radio',
        [classMap.colSelection]: column.type === 'selection',
        [classMap.colEllipsis]: hasEllipsis,
        [classMap.editVisible]: editor && editor.type === 'visible',
        [classMap.fixedColumn]: fixedHiddenColumn,
        [classMap.colDirty]: isDirty,
        [classMap.colActived]: columnActived,
        'col__valid-error': validError && validated,
        'col__valid-success': columnActived ? !validError && !validated : isDirty && !validated,
        'col__treenode': column.treeNode
      },
      getClass(className, params),
      getClass(cellClassName, params)
    ],
    key: columnKey ? column.id : columnIndex,
    attrs,
    on: tdOns
  }
}

function buildColumnChildren(args) {
  let { h, hasDefaultTip, params, row, validError, column } = args
  let { showEllipsis, showTip, showTitle, showTooltip, validStore } = args
  let cellNode: any[] = []
  let validNode: any = null
  if (hasDefaultTip) {
    validNode = [null]
    if (validError) {
      validNode = h(
        'div',
        {
          class: 'tiny-grid-cell__valid',
          style: validStore.rule && validStore.rule.width ? { width: `${validStore.rule.width}px` } : null
        },
        [h('span', { class: 'tiny-grid-cell__valid-msg' }, validStore.content)]
      )
    }
  }
  cellNode = [
    h(
      'div',
      {
        class: [
          'tiny-grid-cell',
          {
            'tiny-grid-cell__title': showTitle,
            'tiny-grid-cell__tooltip': showTooltip || showTip,
            'tiny-grid-cell__ellipsis': showEllipsis
          }
        ],
        attrs: { title: showTitle ? getCellLabel(row, column, params) : null }
      },
      // 调用column组件的renderCell渲染单元格内部的内容
      column.renderCell(h, params)
    ),
    validNode
  ]
  return cellNode
}

function modifyCellAlign({ cellAlign, column }) {
  if (~['radio', 'selection', 'index'].indexOf(column.type)) {
    cellAlign = cellAlign || 'center'
  }

  return cellAlign
}

function modifyShowEllipsis({ hasEllipsis, scrollXLoad, scrollYLoad, showEllipsis }) {
  if ((scrollXLoad || scrollYLoad) && !hasEllipsis) {
    showEllipsis = true
  }

  return showEllipsis
}

function addListenerMouseenter({ $table, evntParams, showTip, showTitle, showTooltip, tableListeners, tdOns }) {
  if (showTip || showTitle || showTooltip || tableListeners['cell-mouseenter']) {
    tdOns.mouseenter = (event) => {
      if (isOperateMouse($table)) {
        return
      }

      evntParams.cell = event.currentTarget

      if (showTitle) {
        updateCellTitle(event)
      } else if (showTip || showTooltip) {
        // 如果配置了显示 tooltip
        $table.triggerTooltipEvent(event, evntParams)
      }

      emitEvent($table, 'cell-mouseenter', [evntParams, event])
    }
  }
}

function addListenerMouseleave({ $table, evntParams, showTip, showTooltip, tableListeners, tdOns }) {
  if (showTip || showTooltip || tableListeners['cell-mouseleave']) {
    tdOns.mouseleave = (event) => {
      if (isOperateMouse($table)) {
        return
      }

      if (showTip || showTooltip) {
        $table.clostTooltip()
      }

      evntParams.cell = event.currentTarget

      emitEvent($table, 'cell-mouseleave', [evntParams, event])
    }
  }
}

function addListenerMousedown({ $table, evntParams, mouseConfig, tdOns }) {
  if (mouseConfig.checked || mouseConfig.selected) {
    tdOns.mousedown = (event) => {
      evntParams.cell = event.currentTarget
      $table.triggerCellMousedownEvent(event, evntParams)
    }
  }
}

function addListenerClick(args) {
  let { $table, column, editConfig, editor, evntParams, expandConfig, highlightCurrentRow } = args
  let { mouseConfig, radioConfig, selectConfig, tableListeners, tdOns, treeConfig } = args
  let satisfy = (equal, trigger) => trigger === 'row' || (equal(column) && trigger === 'cell')

  if (
    highlightCurrentRow ||
    tableListeners['cell-click'] ||
    mouseConfig.checked ||
    (editor && editConfig) ||
    satisfy(() => true, expandConfig.trigger) ||
    satisfy(({ type }) => type === 'radio', radioConfig.trigger) ||
    satisfy(({ type }) => type === 'selection', selectConfig.trigger) ||
    satisfy(({ treeNode }) => treeNode, treeConfig.trigger)
  ) {
    tdOns.click = (event) => {
      evntParams.cell = event.currentTarget
      $table.triggerCellClickEvent(event, evntParams)
    }
  }
}

function getRowSpanMethod(rowSpan) {
  return ({ row, $rowIndex, column, data }) => {
    let fields = []

    if (rowSpan) {
      rowSpan.forEach((item) => {
        column.visible && fields.push(item.field)
      })
    }

    let cellVal = row[column.property]

    if (cellVal && ~fields.indexOf(column.property)) {
      let prevSiblingRow = data[$rowIndex - 1]
      let nextSiblingRow = data[$rowIndex + 1]

      if (prevSiblingRow && prevSiblingRow[column.property] === cellVal) {
        return { rowspan: 0, colspan: 0 }
      } else {
        let rowspanCount = 1

        while (nextSiblingRow && nextSiblingRow[column.property] === cellVal) {
          nextSiblingRow = data[++rowspanCount + $rowIndex]
        }

        if (rowspanCount > 1) {
          return { rowspan: rowspanCount, colspan: 1 }
        }
      }
    }
  }
}

function addListenerDblclick({ $table, evntParams, tableListeners, tdOns, triggerDblclick }) {
  if (triggerDblclick || tableListeners['cell-dblclick']) {
    tdOns.dblclick = (event) => {
      evntParams.cell = event.currentTarget
      $table.triggerCellDBLClickEvent(event, evntParams)
    }
  }
}

function doSpan({ attrs, params, rowSpan, spanMethod }) {
  const rowSpanMethod = getRowSpanMethod(rowSpan)

  if (spanMethod || rowSpan) {
    let { rowspan = 1, colspan = 1 } = (spanMethod ? spanMethod(params) : rowSpanMethod(params)) || {}

    if (!rowspan || !colspan) {
      return false
    }

    attrs.rowspan = rowspan
    attrs.colspan = colspan
  }

  return true
}

function isCellDirty({ $table, column, editConfig, isDirty, row }) {
  if (editConfig && editConfig.showStatus) {
    isDirty = $table.hasRowChange(row, column.property)
  }

  return isDirty
}

const setColumnEvents = (args1) => {
  let { $columnIndex, $rowIndex, $table, column, columnIndex } = args1
  let { row, rowIndex, rowLevel, seq } = args1
  let { editConfig, expandConfig = {} } = $table
  let { radioConfig = {}, showOverflow: allColumnOverflow } = $table
  let { highlightCurrentRow, mouseConfig = {} } = $table
  let { scrollXLoad, scrollYLoad, selectConfig = {} } = $table
  let { tableListeners, treeConfig = {} } = $table
  let tdOns = {}
  let fixedHiddenColumn = column.fixed
  let { editor, showOverflow, showTip } = column
  let cellOverflow = isNull(showOverflow) ? allColumnOverflow : showOverflow
  let showTitle = cellOverflow === 'title'
  let showTooltip = cellOverflow === true || cellOverflow === 'tooltip'
  let showEllipsis = cellOverflow === 'ellipsis'
  let hasEllipsis = showTitle || showTooltip || showEllipsis
  let triggerDblclick = editor && editConfig && editConfig.trigger === 'dblclick'

  let commonParams = { $columnIndex, $rowIndex, $table, column, columnIndex }
  Object.assign(commonParams, { isHidden: fixedHiddenColumn, level: rowLevel, row, rowIndex, seq })

  let evntParams = { showTip, ...commonParams }
  // 滚动的渲染不支持动态行高
  showEllipsis = modifyShowEllipsis({ hasEllipsis, scrollXLoad, scrollYLoad, showEllipsis })
  // 单元格hover 进入事件
  addListenerMouseenter({ $table, evntParams, showTip, showTitle, showTooltip, tableListeners, tdOns })
  // 单元格hover 退出事件
  addListenerMouseleave({ $table, evntParams, showTip, showTooltip, tableListeners, tdOns })
  // 按下事件处理
  addListenerMousedown({ $table, evntParams, mouseConfig, tdOns })

  let args = { $table, column, editConfig, editor, evntParams, expandConfig, highlightCurrentRow }
  Object.assign(args, { mouseConfig, radioConfig, selectConfig, tableListeners, tdOns, treeConfig })
  // 点击事件处理
  addListenerClick(args)
  // 双击事件处理
  addListenerDblclick({ $table, evntParams, tableListeners, tdOns, triggerDblclick })

  return {
    commonParams,
    args,
    cellOverflow,
    showTitle,
    showTooltip,
    showEllipsis,
    hasEllipsis,
    tdOns,
    fixedHiddenColumn
  }
}

// 渲染列
function renderColumn(args1) {
  let { $seq, $table, column, columnIndex } = args1
  let { h, row } = args1
  let { align: allAlign, cellClassName, columnKey, editConfig } = $table
  let { editRules, editStore, rowId, rowSpan, height } = $table
  let { tableData, validOpts, validStore, validatedMap, spanMethod } = $table
  let { isDirty, attrs = { 'data-colid': column.id } } = {}
  let { message } = validOpts
  let { actived } = editStore
  let validated = validatedMap[`${column.id}-${row[rowId]}`]
  let validError = validStore.row === row && validStore.column === column
  let hasDefaultTip = editRules && (message === 'default' ? height || tableData.length > 1 : message === 'inline')
  let { align, className, editor, showTip } = column
  let cellAlign = align || allAlign
  let columnActived =
    editConfig && editor && actived.row === row && (actived.column === column || editConfig.mode === 'row')

  let {
    commonParams,
    args,
    showTitle,
    showTooltip,
    showEllipsis,
    tdOns = {},
    hasEllipsis,
    fixedHiddenColumn
  } = setColumnEvents(args1)
  let params = { $seq, data: tableData, ...commonParams }
  // 索引列、选择列如果不配置对齐方式则默认为居中对齐
  cellAlign = modifyCellAlign({ cellAlign, column })

  // 合并行或列
  if (!doSpan({ attrs, params, rowSpan, spanMethod })) {
    return
  }
  // 编辑后的显示状态（是否该单元格数据被更改）此处如果是树表大数据虚拟滚动+表格编辑器，会造成卡顿，这里需要递归树表数据
  isDirty = isCellDirty({ $table, column, editConfig, isDirty, row })
  args = { attrs, cellAlign, cellClassName, className, column, columnActived, columnIndex, columnKey, editor }
  Object.assign(args, { fixedHiddenColumn, hasEllipsis, isDirty, params, tdOns, validError, validated })

  // 组装渲染单元格td所需要的props属性
  const colProps = buildColumnProps(args)
  args = { column, h, hasDefaultTip, params, row }
  Object.assign(args, { showEllipsis, showTip, showTitle, showTooltip, validError, validStore })

  // 渲染td单元格中的div元素（自定义渲染和编辑器）
  const colChildren = buildColumnChildren(args)

  return h('td', colProps, colChildren)
}

function renderRowGroupTds(args) {
  const { closeable, currentIcon, field, group, render } = args
  const { row, tableColumn, targetColumn, tds, title } = args
  for (let index in tableColumn) {
    if (Object.prototype.hasOwnProperty.call(tableColumn, index)) {
      const column = tableColumn[index]
      if (~['index', 'selection'].indexOf(column.type)) {
        tds.push(<td></td>)
      } else {
        const value = row[field]
        const header = title || (targetColumn && formatText(getFuncText(targetColumn.title), 1)) || value
        let groupTitleVNode

        if (render) {
          groupTitleVNode = render(h, {
            value,
            header,
            children: group.children,
            expand: !group.fold
          })
        } else {
          groupTitleVNode = [
            <span class="row-group-title">{header}</span>,
            `:${value}`,
            <span class="tiny-badge">{group.children.length}</span>
          ]
        }
        tds.push(
          <td colspan={tableColumn.length - index} class="tiny-grid-body__column">
            <div class="tiny-grid-cell-group">{[closeable ? currentIcon : null].concat(groupTitleVNode)}</div>
          </td>
        )
        break
      }
    }
  }
}

function renderRowGroupData({ groupData, groupFolds, row, rowGroup, rowid, rows, tableColumn }) {
  if (!groupData[rowid]) {
    return
  }

  const { title, field, closeable = true, render, className } = rowGroup
  const { group = groupData[rowid], tds = [], ChevronRight = iconChevronRight(), ChevronDown = iconChevronDown() } = {}
  const targetColumn = find(tableColumn, (col) => col.property === field)
  const currentIcon = group.fold ? <ChevronRight class="tiny-svg-size" /> : <ChevronDown class="tiny-svg-size" />

  renderRowGroupTds({ closeable, currentIcon, field, group, render, row, tableColumn, targetColumn, tds, title })

  rows.push(
    <tr
      class={['tiny-grid-body__row', 'group', className, { hover: group.hover }]}
      onMouseout={() => {
        group.hover = false
      }}
      onMouseover={() => {
        group.hover = true
      }}
      onClick={() => {
        if (closeable) {
          group.fold = !group.fold
          group.children.forEach((row) => {
            let index = groupFolds.indexOf(row)

            if (index > -1) {
              groupFolds.splice(index, 1)
            } else {
              groupFolds.push(row)
            }
          })
        }
      }}>
      {tds}
    </tr>
  )
}

function renderRow(args) {
  let { $rowIndex, $seq, $table, _vm, editStore } = args
  let { groupFolds, h, row, rowActived } = args
  let { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows } = args
  let { selection, seq, tableColumn, trOn, treeConfig } = args
  let { scrollYLoad } = $table
  let treeShowKey = getTreeShowKey({ scrollYLoad, treeConfig })
  let { hideMethod } = treeConfig || {}

  if ((treeShowKey && !row[treeShowKey]) || (hideMethod && hideMethod(row, rowLevel))) {
    return
  }

  rows.push(
    h(
      'tr',
      {
        class: [
          'tiny-grid-body__row',
          {
            [`row__level-${rowLevel}`]: treeConfig,
            [classMap.rowNew]: editStore.insertList.includes(row),
            [classMap.rowSelected]: selection.includes(row),
            'tiny-hide': groupFolds.includes(row),
            [classMap.rowActived]: rowActived
          },
          rowClassName
            ? isFunction(rowClassName)
              ? rowClassName({ $table, $seq, seq, rowLevel, row, rowIndex, $rowIndex })
              : rowClassName
            : ''
        ],
        attrs: {
          'data-rowid': rowid
        },
        key: rowKey || treeConfig ? rowid : $rowIndex,
        on: trOn
      },
      tableColumn.map((column, $columnIndex) => {
        let columnIndex = $table.getColumnIndex(column)
        let args1 = { $columnIndex, $rowIndex, $seq, $table, _vm, column, columnIndex }

        Object.assign(args1, { h, row, rowIndex, rowLevel, seq })

        return renderColumn(args1)
      })
    )
  )
}

function renderRowAfter({ $table, h, row, rowIndex, rows, tableData }) {
  typeof $table.renderRowAfter === 'function' &&
    $table.renderRowAfter({ rows, row, data: tableData, rowIndex, renderColumn }, h)
}

function renderRowExpanded(args) {
  const { $table, expandMethod, expandeds, h, row, rowIndex } = args
  const { rowLevel, rowid, rows, seq, tableColumn, trOn, treeConfig } = args

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
      const renderData = { $table, seq, row, rowIndex, column, columnIndex, level: rowLevel }
      rows.push(
        h(
          'tr',
          {
            class: 'tiny-grid-body__expanded-row',
            key: `expand_${rowid}`,
            on: trOn
          },
          [
            h(
              'td',
              {
                class: 'tiny-grid-body__expanded-column',
                attrs: { colspan: tableColumn.length }
              },
              [
                h(
                  'div',
                  {
                    class: 'tiny-grid-body__expanded-cell',
                    style: cellStyle
                  },
                  [column.renderData(h, renderData)]
                )
              ]
            )
          ]
        )
      )
    }
  }
}

function renderRowTree(args, renderRows) {
  let { $seq, $table, _vm, h, row, rowLevel } = args
  let { rows, seq, seqCount, tableColumn, treeConfig, treeExpandeds } = args
  let { scrollYLoad } = $table

  // 如果没有树表配置或者树表展开行数为零，则直接跳过
  if (!treeConfig || !treeExpandeds.length) {
    return
  }

  let childrenKey = getTreeChildrenKey({ scrollYLoad, treeConfig })
  let rowChildren = row[childrenKey]

  // 若果当前行不是展开行或者子节点个数为零，则跳过
  if (!rowChildren || !rowChildren.length || !~treeExpandeds.indexOf(row)) {
    return
  }

  let args1 = { h, _vm, $table, $seq: $seq ? `${$seq}.${seq}` : `${seq}` }

  Object.assign(args1, {
    rowLevel: rowLevel + 1,
    tableData: rowChildren,
    tableColumn,
    seqCount
  })

  rows.push.apply(rows, renderRows(args1))
}

function renderRows({ h, _vm, $table, $seq, rowLevel, tableData, tableColumn, seqCount }) {
  let { rowKey, rowClassName, treeConfig, treeExpandeds, groupFolds } = $table
  let { groupData, scrollYLoad, scrollYStore, editConfig, editStore } = $table
  let { expandConfig = {}, expandeds, selection, rowGroup } = $table
  let rows = []
  let expandMethod = expandConfig.activeMethod
  let startIndex = scrollYStore.startIndex
  let isOrdered = treeConfig ? Boolean(treeConfig.ordered) : false
  seqCount = seqCount || { value: 0 }

  // 循环表格数据，生成表格主体内容VNode，此处也是性能优化的整改点
  tableData.forEach((row, $rowIndex) => {
    let trOn = {}
    let rowIndex = $rowIndex
    let { actived } = editStore
    let rowActived = editConfig && actived.row === row

    seqCount.value = seqCount.value + 1
    let seq = isOrdered ? seqCount.value : rowIndex + 1
    if (scrollYLoad) {
      seq += startIndex
    }
    // 确保任何情况下 rowIndex 都精准指向真实 data 索引
    rowIndex = $table.getRowIndex(row)

    let rowid = getRowid($table, row)

    // 如果有表格分组信息，则执行分组逻辑
    renderRowGroupData({ groupData, groupFolds, row, rowGroup, rowid, rows, tableColumn })
    let args = { $rowIndex, $seq, $table, _vm, editStore, groupFolds, h, row, rowActived }
    Object.assign(args, { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows, selection, seq })
    Object.assign(args, { tableColumn, trOn, treeConfig })

    // 输出表格行列的vnode节点列表
    renderRow(args)

    // 允许用户自定义表格行渲染后的逻辑
    renderRowAfter({ $table, h, row, rowIndex, rows, tableData })
    args = { $table, expandMethod, expandeds, h, row, rowIndex, rowLevel }
    Object.assign(args, { rowid, rows, seq, tableColumn, trOn, treeConfig })

    // 如果行被展开了，这里渲染展开行的vnode节点
    renderRowExpanded(args)
    args = { $seq, $table, _vm, h, row, rowLevel, rows }
    Object.assign(args, { seq, seqCount, tableColumn, treeConfig, treeExpandeds })

    // 如果是树形表格，则会递归渲染已展开行的子节点
    renderRowTree(args, renderRows)
  })

  return rows
}

function renderDefEmpty(h) {
  return [
    h('p', {
      class: 'tiny-grid__empty-img'
    }),
    h(
      'span',
      {
        class: 'tiny-grid__empty-text'
      },
      GlobalConfig.i18n('ui.grid.emptyText')
    )
  ]
}

const syncHeaderAndFooterScroll = ({ bodyElem, footerElem, headerElem, isX }) => {
  if (isX && headerElem) {
    headerElem.scrollLeft = bodyElem.scrollLeft
  }
  if (isX && footerElem) {
    footerElem.scrollLeft = bodyElem.scrollLeft
  }
}

function doScrollLoad({ $table, _vm, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad }) {
  let isScrollX = scrollXLoad && isX

  if (isScrollX) {
    // 处理x轴方法虚拟滚动加载数据逻辑
    $table.triggerScrollXEvent(event)
  }

  if (isScrollX && headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
    // 修复拖动滚动条时可能存在不同步问题
    _vm.$nextTick(() => {
      if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
        headerElem.scrollLeft = bodyElem.scrollLeft
      }
    })
  }

  if (scrollYLoad && isY) {
    // 处理y轴方法虚拟滚动加载数据逻辑
    $table.triggerScrollYEvent(event)
  }
}

function renderEmptyBlock({ $slots, $table, _vm, isCenterCls, renderEmpty, tableData }) {
  return h(
    'div',
    {
      class: `tiny-grid__empty-block${tableData.length ? '' : ' is__visible'} ${isCenterCls}`,
      ref: 'emptyBlock'
    },
    $slots.empty ? $slots.empty.call(_vm, { $table }, h) : renderEmpty ? [renderEmpty(h, $table)] : renderDefEmpty(h)
  )
}

function renderBorders({ keyboardConfig, mouseConfig }) {
  let res: any = null

  // 如果用户配置了鼠标和键盘配置项
  if (mouseConfig.checked || keyboardConfig.isCut) {
    res = h('div', { class: 'tiny-grid__borders' }, [
      mouseConfig.checked ? renderBorder(h, 'check') : null,
      keyboardConfig.isCut ? renderBorder(h, 'copy') : null
    ])
  }

  return res
}

function renderTable({ $table, _vm, tableColumn, tableData, tableLayout }) {
  return h(
    'table',
    {
      class: 'tiny-grid__body',
      style: { tableLayout },
      attrs: { cellspacing: 0, cellpadding: 0, border: 0 },
      ref: 'table'
    },
    [
      // 渲染colgroup标签，设置表格列宽度，保证表头的表格和表体的表格每列宽相同
      h(
        'colgroup',
        { ref: 'colgroup' },
        tableColumn.map((column, columnIndex) => h('col', { attrs: { name: column.id }, key: columnIndex }))
      ),
      // 表格每次数据改变都会触发renderRow重新执行，会造成性能损失，此处待优化
      h('tbody', { ref: 'tbody' }, renderRows({ h, _vm, $table, $seq: '', rowLevel: 0, tableData, tableColumn }))
    ]
  )
}

// 如果scrollLoad存在，标识开启了滚动分页功能
function renderYSpace({ scrollLoad }) {
  return h('div', { class: 'tiny-grid-body__y-space visual', ref: 'ySpace' }, [
    scrollLoad ? h('div', { class: 'tiny-grid-body__y-scrollbar' }) : [null]
  ])
}

export default {
  name: `${$prefix}GridBody`,
  props: {
    collectColumn: Array,
    fixedColumn: Array,
    isGroup: Boolean,
    size: String,
    tableColumn: Array,
    tableData: Array,
    visibleColumn: Array
  },
  mounted() {
    const { $el, $parent: $table, $refs } = this as any
    const { elemStore } = $table
    const keyPrefix = 'main-body-'

    // 表体第一层div，出现滚动条的dom元素
    elemStore[`${keyPrefix}wrapper`] = $el
    // 表体table元素
    elemStore[`${keyPrefix}table`] = $refs.table
    // colgroup元素，保持表头和表体宽度保持一致
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    // tbody元素
    elemStore[`${keyPrefix}list`] = $refs.tbody
    // x轴滚动条占位元素
    elemStore[`${keyPrefix}xSpace`] = $refs.xSpace
    // y轴滚动条占位元素
    elemStore[`${keyPrefix}ySpace`] = $refs.ySpace
    // 空数据元素
    elemStore[`${keyPrefix}emptyBlock`] = $refs.emptyBlock

    // 表体第一层div监听滚动事件
    $el.onscroll = this.scrollEvent
    $el._onscroll = this.scrollEvent
  },
  setup(props, { slots }) {
    hooks.onBeforeUnmount(() => {
      const table = hooks.getCurrentInstance().proxy

      table.$el._onscroll = null
      table.$el.onscroll = null
    })

    return { slots }
  },
  render() {
    let { $parent: $table } = this as any
    let { $grid, isCenterEmpty, keyboardConfig = {}, mouseConfig = {}, renderEmpty } = $table
    let { scrollLoad, tableColumn, tableData, tableLayout } = $table
    let $slots = $grid.slots
    let isCenterCls = isCenterEmpty ? 'is__center' : ''

    return h(
      'div',
      {
        ref: 'body',
        class: ['tiny-grid__body-wrapper', 'body__wrapper', { [classMap.isScrollload]: scrollLoad }]
      },
      [
        // 表格主体内容x轴方向虚拟滚动条占位元素
        h('div', { class: 'tiny-grid-body__x-space', ref: 'xSpace' }),
        renderYSpace({ scrollLoad }),
        renderTable({ $table, _vm: this, tableColumn, tableData, tableLayout }),
        // 开启鼠标或者配置项选中边框线
        renderBorders({ keyboardConfig, mouseConfig }),
        // 空数据
        renderEmptyBlock({ $slots, $table, _vm: this, isCenterCls, renderEmpty, tableData })
      ]
    )
  },
  methods: {
    // 滚动处理，如果存在列固定右侧，同步更新滚动状态
    scrollEvent(event) {
      let { $parent: $table } = this as any
      let { $refs, lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad, columnStore } = $table
      let { leftList, rightList } = columnStore
      let { tableBody, tableFooter, tableHeader } = $refs
      let headerElem = tableHeader ? tableHeader.$el : null
      let bodyElem = tableBody.$el
      let footerElem = tableFooter ? tableFooter.$el : null
      let scrollLeft = bodyElem.scrollLeft
      let scrollTop = bodyElem.scrollTop

      // 对比当前滚动位置和最后一次滚动位置，来得到当前滚动的是哪个方向上的滚动条
      let isY = scrollTop !== lastScrollTop
      let isX = scrollLeft !== lastScrollLeft

      $table.lastScrollTime = Date.now()
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTop = scrollTop
      $table.scrollDirection = isX ? 'X' : 'Y'

      // 同步滚动条状态，只同步表头(表尾)滚动条状态，冻结列已优化为sticky方式
      syncHeaderAndFooterScroll({ bodyElem, footerElem, headerElem, isX })

      // 处理关于冻结列最外层div类名
      if (leftList.length || rightList.length) {
        generateFixedClassName({ $table, bodyElem, leftList, rightList })
      }

      // 处理x和y轴方法虚拟滚动数据加载逻辑
      doScrollLoad({ $table, _vm: this, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad })

      // 触发用户监听的表格滚动事件
      emitEvent($table, 'scroll', [{ type: 'body', scrollTop, scrollLeft, isX, isY, $table }, event])
    }
  }
}
