<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/grid/body/vue'
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
import { h, $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { getTreeChildrenKey, getTreeShowKey, handleRowGroupFold, isVirtualRow } from '../../table/src/strategy'

// 滚动、拖动过程中不需要触发鼠标移入移出事件
const isOperateMouse = ($table) =>
  $table._isResize ||
  ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.state.optimizeOpts.delayHover)

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
  const { attrs, cellAlign, cellClassName, className, column, columnActived, columnIndex, columnKey, editor } = args
  const { fixedHiddenColumn, hasEllipsis, isDirty, params, tdOns, validError, validated, columnStore } = args

  const { leftList, rightList } = columnStore

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
        'col__treenode': column.treeNode,
        'fixed-left-last__column': column.fixed === 'left' && leftList[leftList.length - 1] === column,
        'fixed-right-first__column': column.fixed === 'right' && rightList[0] === column
      },
      getClass(className, params),
      getClass(cellClassName, params)
    ],
    style: fixedHiddenColumn
      ? {
          left: `${column.style?.left}px`,
          right: `${column.style?.right}px`
        }
      : null,
    key: columnKey ? column.id : columnIndex,
    attrs,
    on: tdOns
  }
}

function buildColumnChildren(args) {
  let { h, hasDefaultTip, params, row, validError, column, $table } = args
  let { showEllipsis, showTip, showTitle, showTooltip, validStore, dropConfig } = args
  const { validOpts } = $table
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
        [
          validOpts?.icon ? h(validOpts.icon, { class: 'tiny-grid-cell__valid-icon' }) : null,
          h('span', { class: 'tiny-grid-cell__valid-msg', attrs: { title: validStore.content } }, validStore.content)
        ]
      )
    }
  }
  cellNode = [
    dropConfig.rowHandle === 'index' && column.type === 'index' ? h('div', { class: 'row__drop-handle' }) : null,
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
      // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
      $table.state.isShapeTable ? column.renderCell(h, params) : null
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
        $table.closeTooltip()
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
  const { showStatus = false, relationFields = true } = editConfig || {}
  // 关联字段配置为true，或者配置包含当前字段时，支持脏数据检查
  const canChange =
    relationFields === true || (Array.isArray(relationFields) && relationFields.includes(column.property))

  if (editConfig && showStatus && column.property && (column.editor || (relationFields && canChange))) {
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
  let { editRules, rowId, rowSpan, height, spanMethod, dropConfig = {} } = $table
  let { tableData, validOpts, validStore, validatedMap, columnStore, editStore } = $table.state
  let { isDirty, attrs = { 'data-colid': column.id } } = {}
  let { isMessageDefault, isMessageInline } = validOpts
  let { actived } = editStore
  let validated = validatedMap[`${column.id}-${row[rowId]}`]
  let validError = validStore.row === row && validStore.column === column
  let hasDefaultTip = editRules && (isMessageDefault ? height || tableData.length > 1 : isMessageInline)
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
  args = {
    attrs,
    cellAlign,
    cellClassName,
    className,
    column,
    columnActived,
    columnIndex,
    columnKey,
    editor,
    columnStore
  }
  Object.assign(args, { fixedHiddenColumn, hasEllipsis, isDirty, params, tdOns, validError, validated })

  // 组装渲染单元格td所需要的props属性
  const colProps = buildColumnProps(args)

  args = { column, h, hasDefaultTip, params, row, $table }
  Object.assign(args, { showEllipsis, showTip, showTitle, showTooltip, validError, validStore, dropConfig })

  // 渲染td单元格中的div元素（自定义渲染和编辑器）
  const colChildren = buildColumnChildren(args)

  return h('td', colProps, colChildren)
}

function renderRowGroupTds(args) {
  const { $table, closeable, currentIcon, render, renderGroupCell } = args
  const { row, tableColumn, tds, title } = args
  const targetColumn = $table._rowGroupTargetColumn
  const value = row.value || ''

  for (let index in tableColumn) {
    if (Object.prototype.hasOwnProperty.call(tableColumn, index)) {
      const column = tableColumn[index]
      const columnIndex = $table.getColumnIndex(column)
      const header = title || formatText(getFuncText(column.title), 1) || value
      const params = { value, header, children: row.children, expand: !row.fold, row, column, columnIndex }

      // 不渲染colspan小于等于0的列
      if (column._rowGroupColspan <= 0) {
        continue
      }
      if (column === targetColumn) {
        let groupTitleVNode

        if (render) {
          // 使用 h 函数和参数来调用 render 函数
          groupTitleVNode = render(h, params)
        } else {
          // 直接使用 h 函数创建 VNode 数组
          groupTitleVNode = [
            h('span', { class: 'row-group-title' }, header),
            `:${value}`,
            h('span', { class: 'tiny-badge' }, row.children.length)
          ]
        }
        tds.push(
          h(
            'td',
            {
              class: ['tiny-grid-body__column td-group', column.id],
              colspan: column._rowGroupColspan
            },
            [h('div', { class: 'tiny-grid-cell-group' }, [closeable ? currentIcon : null].concat(groupTitleVNode))]
          )
        )
      } else {
        tds.push(
          h(
            'td',
            {
              class: ['tiny-grid-body__column td-placeholder', column.id],
              colspan: column._rowGroupColspan
            },
            [h('div', { class: 'tiny-grid-cell-group' }, renderGroupCell ? renderGroupCell(h, params) : null)]
          )
        )
      }
    }
  }
}

function renderRowGroupData({ $table, virtualRow, row, rowGroup, rowid, rows, tableColumn }) {
  if (!virtualRow) {
    return
  }

  const { title, closeable = true, render, renderGroupCell, className } = rowGroup
  const { tds = [], ChevronRight = iconChevronRight(), ChevronDown = iconChevronDown() } = {}
  // const currentIcon = row.fold ? <ChevronRight class="tiny-svg-size" /> : <ChevronDown class="tiny-svg-size" />
  const currentIcon = row.fold
    ? h(ChevronRight, { class: 'tiny-svg-size' })
    : h(ChevronDown, { class: 'tiny-svg-size' })
  const args = { $table, closeable, currentIcon, render, renderGroupCell }
  Object.assign(args, { row, tableColumn, tds, title })
  // 将分组行的td添加到tds数组中
  renderRowGroupTds(args)

  const onClick = (event) => {
    handleRowGroupFold(row, $table)

    if ($table.tableListeners['toggle-group-change']) {
      emitEvent($table, 'toggle-group-change', [{ $table, row }, event])
    }
  }

  rows.push(
    h(
      'tr',
      {
        class: ['tiny-grid-body__row', 'group', className, { hover: row.hover }],
        'data-rowid': rowid,
        onmouseleave: () => {
          row.hover = false
        },
        onmouseover: () => {
          row.hover = true
        },
        onclick: onClick
      },
      tds
    )
  )
}

function renderRow(args) {
  let { $rowIndex, $seq, $table, _vm, editStore } = args
  let { h, row, rowActived } = args
  let { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows } = args
  let { seq, tableColumn, trOn, treeConfig, isNotRenderRow } = args
  const { selection } = $table.state

  if (isNotRenderRow) {
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

  const args1 = {
    h,
    _vm,
    $table,
    // $seq 树表特有序号：1 --> 1.1
    $seq: $seq ? `${$seq}.${seq}` : `${seq}`,
    rowLevel: rowLevel + 1,
    tableData: rowChildren,
    tableColumn,
    seqCount
  }

  rows.push(...renderRows(args1))
}

function renderRows({ h, _vm, $table, $seq, rowLevel, tableData, tableColumn, seqCount }) {
  const { state } = $table
  const hasVirtualRow = $table.hasVirtualRow
  const { treeExpandeds, scrollYLoad, scrollYStore, editStore, expandeds, selection, afterFullData } = state
  let { rowKey, rowClassName, treeConfig, rowGroup } = $table
  let { editConfig, expandConfig = {} } = $table
  let rows = []
  let expandMethod = expandConfig.activeMethod
  let startIndex = scrollYStore.startIndex
  // 子级索引是否按数字递增显示：true(子级索引按数字递增显示，父级1，子级2)；false(子级索引在父级索引基础上增加，父级1，子级1.1)
  let isOrdered = treeConfig ? Boolean(treeConfig.ordered) : false
  seqCount = seqCount || { value: 0 }
  let treeShowKey = getTreeShowKey({ scrollYLoad, treeConfig })
  let { hideMethod } = treeConfig || {}

  // 循环表格数据，生成表格主体内容VNode，此处也是性能优化的整改点
  tableData.forEach((row, $rowIndex) => {
    let trOn = {}
    let rowIndex = $rowIndex
    let { actived } = editStore
    let rowActived = editConfig && actived.row === row
    let virtualRow = isVirtualRow(row)
    const isNotRenderRow = (treeShowKey && !row[treeShowKey]) || (hideMethod && hideMethod(row, rowLevel)) || virtualRow

    // 树表虚拟滚动，如果当前行被剪切不需要渲染，则无需自增序号
    if (!isNotRenderRow) {
      seqCount.value = seqCount.value + 1
    }

    let seq = isOrdered ? seqCount.value : rowIndex + 1
    if (scrollYLoad) {
      seq += startIndex
    }
    // 分组表场景正常数据行的序号由在afterFullData中的位置提供
    if (hasVirtualRow && !virtualRow) {
      seq = afterFullData.indexOf(row) + 1
    }
    // 确保任何情况下 rowIndex 都精准指向真实 data 索引
    rowIndex = $table.getRowIndex(row)

    let rowid = getRowid($table, row)

    // 如果有表格分组信息，则执行分组逻辑
    renderRowGroupData({ $table, virtualRow, row, rowGroup, rowid, rows, tableColumn })
    let args = { $rowIndex, $seq, $table, _vm, editStore, h, row, rowActived }
    Object.assign(args, { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows, selection, seq })

    Object.assign(args, { tableColumn, trOn, treeConfig, isNotRenderRow })

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

export default defineComponent({
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
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    let { $parent: $table } = this as any
    let { $grid, isCenterEmpty, keyboardConfig = {}, mouseConfig = {}, renderEmpty, scrollLoad } = $table
    let { tableColumn, tableData, tableLayout } = $table.state
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
  }
})
</script>
