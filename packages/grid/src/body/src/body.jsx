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
import { updateCellTitle, emitEvent, getClass, getFuncText, getRowid, formatText } from '@opentiny/vue-renderless/grid/utils'
import { getCellLabel } from '../../tools'
import GlobalConfig from '../../config'
import { iconChevronRight, iconChevronDown } from '@opentiny/vue-icon'
import { h, hooks, $prefix } from '@opentiny/vue-common'
import { getTreeChildrenKey, getTreeShowKey, getTableCellKey } from '../../table/src/strategy'

// 滚动、拖动过程中不需要触发
const isOperateMouse = ($table) => $table._isResize || ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover)

// 解决静态扫描驼峰变量问题
const classMap = {
  colEdit: 'col__edit',
  colIndex: 'col__index',
  colRadio: 'col__radio',
  colSelection: 'col__selection',
  colEllipsis: 'col__ellipsis',
  editVisible: 'edit__visible',
  fixedHidden: 'fixed__hidden',
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
        [classMap.fixedHidden]: fixedHiddenColumn,
        [classMap.colDirty]: isDirty,
        [classMap.colActived]: columnActived,
        'col__valid-error': validError && validated,
        'col__valid-success': columnActived ? !validError && !validated : isDirty && !validated
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
  let { h, hasDefaultTip, params, row, validError } = args
  let { allColumnOverflow, column, fixedHiddenColumn } = args
  let { showEllipsis, showTip, showTitle, showTooltip, validStore } = args
  let res = []
  if (!allColumnOverflow || !fixedHiddenColumn) {
    let res1 = null
    if (hasDefaultTip) {
      res1 = [null]
      if (validError) {
        res1 = h(
          'div',
          {
            class: 'tiny-grid-cell__valid',
            style: validStore.rule && validStore.rule.width ? { width: `${validStore.rule.width}px` } : null
          },
          [h('span', { class: 'tiny-grid-cell__valid-msg' }, validStore.content)]
        )
      }
    }
    res = [
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
          attrs: { title: showTitle ? getCellLabel(row, column, params) : null },
          key: getTableCellKey(params)
        },
        column.renderCell(h, params)
      ),
      res1
    ]
  }
  return res
}

function modifyCellAlign({ cellAlign, column }) {
  if (~['radio', 'selection', 'index'].indexOf(column.type)) {
    cellAlign = cellAlign ? cellAlign : 'center'
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

function isCellDirty({ $table, column, editConfig, fixedHiddenColumn, isDirty, row }) {
  if (!fixedHiddenColumn && editConfig && editConfig.showStatus) {
    isDirty = $table.hasRowChange(row, column.property)
  }

  return isDirty
}

const setColumnEvents = (args1) => {
  let { $columnIndex, $rowIndex, $table, column, columnIndex } = args1
  let { fixedType, row, rowIndex, rowLevel, seq } = args1
  let { editConfig, expandConfig = {} } = $table
  let { radioConfig = {}, showOverflow: allColumnOverflow } = $table
  let { highlightCurrentRow, mouseConfig = {}, overflowX } = $table
  let { scrollXLoad, scrollYLoad, selectConfig = {} } = $table
  let { tableListeners, treeConfig = {} } = $table
  let tdOns = {}
  let fixedHiddenColumn = fixedType ? column.fixed !== fixedType : column.fixed && overflowX
  let { editor, showOverflow, showTip } = column
  let cellOverflow = isNull(showOverflow) ? allColumnOverflow : showOverflow
  let showTitle = cellOverflow === 'title'
  let showTooltip = cellOverflow === true || cellOverflow === 'tooltip'
  let showEllipsis = cellOverflow === 'ellipsis'
  let hasEllipsis = showTitle || showTooltip || showEllipsis
  let triggerDblclick = editor && editConfig && editConfig.trigger === 'dblclick'

  let commonParams = { $columnIndex, $rowIndex, $table, column, columnIndex, fixed: fixedType }
  Object.assign(commonParams, { isHidden: fixedHiddenColumn, level: rowLevel, row, rowIndex, seq })

  let evntParams = { showTip, ...commonParams }
  // 滚动的渲染不支持动态行高
  showEllipsis = modifyShowEllipsis({ hasEllipsis, scrollXLoad, scrollYLoad, showEllipsis })
  // hover 进入事件
  addListenerMouseenter({ $table, evntParams, showTip, showTitle, showTooltip, tableListeners, tdOns })
  // hover 退出事件
  addListenerMouseleave({ $table, evntParams, showTip, showTooltip, tableListeners, tdOns })
  // 按下事件处理
  addListenerMousedown({ $table, evntParams, mouseConfig, tdOns })

  let args = { $table, column, editConfig, editor, evntParams, expandConfig, highlightCurrentRow }
  Object.assign(args, { mouseConfig, radioConfig, selectConfig, tableListeners, tdOns, treeConfig })
  // 点击事件处理
  addListenerClick(args)
  // 双击事件处理
  addListenerDblclick({ $table, evntParams, tableListeners, tdOns, triggerDblclick })

  return { commonParams, args, cellOverflow, showTitle, showTooltip, showEllipsis, hasEllipsis, tdOns, fixedHiddenColumn }
}

/**
 * 渲染列
 */
function renderColumn(args1) {
  let { $seq, $table, column, columnIndex } = args1
  let { h, row } = args1
  let { align: allAlign, cellClassName, columnKey, editConfig } = $table
  let { editRules, editStore, rowId, rowSpan } = $table
  let { showOverflow: allColumnOverflow, height } = $table
  let { tableData, validOpts, validStore, validatedMap, spanMethod } = $table
  let { isDirty, attrs = { 'data-colid': column.id } } = {}
  let { message } = validOpts
  let { actived } = editStore
  let validated = validatedMap[`${column.id}-${row[rowId]}`]
  let validError = validStore.row === row && validStore.column === column
  let hasDefaultTip = editRules && (message === 'default' ? height || tableData.length > 1 : message === 'inline')
  let { align, className, editor, showTip } = column
  let cellAlign = align || allAlign
  let columnActived = editConfig && editor && actived.row === row && (actived.column === column || editConfig.mode === 'row')

  let { commonParams, args, showTitle, showTooltip, showEllipsis, tdOns = {}, hasEllipsis, fixedHiddenColumn } = setColumnEvents(args1)
  let params = { $seq, data: tableData, ...commonParams }
  // 索引列、选择列如果不配置对齐方式则默认为居中对齐
  cellAlign = modifyCellAlign({ cellAlign, column })

  // 合并行或列
  if (!doSpan({ attrs, params, rowSpan, spanMethod })) {
    return
  }
  // 如果显示状态
  isDirty = isCellDirty({ $table, column, editConfig, fixedHiddenColumn, isDirty, row })
  args = { attrs, cellAlign, cellClassName, className, column, columnActived, columnIndex, columnKey, editor }
  Object.assign(args, { fixedHiddenColumn, hasEllipsis, isDirty, params, tdOns, validError, validated })

  let colProps = buildColumnProps(args)
  args = { allColumnOverflow, column, fixedHiddenColumn, h, hasDefaultTip, params, row }
  Object.assign(args, { showEllipsis, showTip, showTitle, showTooltip, validError, validStore })
  let colChildren = buildColumnChildren(args)

  return h('td', colProps, colChildren)
}

function renderRowGroupTds(args) {
  let { closeable, currentIcon, field, group, render } = args
  let { row, tableColumn, targetColumn, tds, title } = args
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
          groupTitleVNode = [<span class="row-group-title">{header}</span>, `:${value}`, <span class="tiny-badge">{group.children.length}</span>]
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

function addRowListenerMouseenter({ $table, highlightHoverRow, row, rowIndex, trOn }) {
  if (!highlightHoverRow) {
    return
  }

  trOn.mouseenter = (event) => {
    if (isOperateMouse($table)) {
      return
    }
    $table.triggerHoverEvent(event, { row, rowIndex })
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
      }}
    >
      {tds}
    </tr>
  )
}

function renderRow(args) {
  let { $rowIndex, $seq, $table, _vm, editStore } = args
  let { fixedType, groupFolds, h, row, rowActived } = args
  let { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows } = args
  let { selection, seq, tableColumn, trOn, treeConfig } = args
  let { scrollYLoad } = $table
  let treeShowKey = getTreeShowKey({ scrollYLoad, treeConfig })

  if (treeShowKey && !row[treeShowKey]) {
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
            [classMap.rowNew]: editStore.insertList.indexOf(row) > -1,
            [classMap.rowSelected]: selection.indexOf(row) > -1,
            'tiny-hide': groupFolds.indexOf(row) > -1,
            [classMap.rowActived]: rowActived
          },
          rowClassName ? (isFunction(rowClassName) ? rowClassName({ $table, $seq, seq, fixedType, rowLevel, row, rowIndex, $rowIndex }) : rowClassName) : ''
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

        Object.assign(args1, { fixedType, h, row, rowIndex, rowLevel, seq })

        return renderColumn(args1)
      })
    )
  )
}

function renderRowAfter({ $table, h, row, rowIndex, rows, tableData }) {
  typeof $table.renderRowAfter === 'function' && $table.renderRowAfter({ rows, row, data: tableData, rowIndex, renderColumn }, h)
}

function renderRowExpanded(args) {
  let { $table, expandMethod, expandeds, fixedType, h, row, rowIndex } = args
  let { rowLevel, rowid, rows, seq, tableColumn, trOn, treeConfig } = args

  if (expandeds.length && expandeds.indexOf(row) > -1 && (typeof expandMethod === 'function' ? expandMethod(row) : true)) {
    let column = find(tableColumn, (column) => column.type === 'expand')
    let columnIndex = $table.getColumnIndex(column)
    let cellStyle

    if (treeConfig) {
      cellStyle = { paddingLeft: `${rowLevel * (treeConfig.indent || 16) + 30}px` }
    }

    if (column) {
      const renderData = { $table, seq, row, rowIndex, column, columnIndex, fixed: fixedType, level: rowLevel }
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
                    class: ['tiny-grid-body__expanded-cell', { [classMap.fixedHidden]: fixedType }],
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
  let { $seq, $table, _vm, fixedType, h, row, rowLevel } = args
  let { rows, seq, seqCount, tableColumn, treeConfig, treeExpandeds } = args
  let { scrollYLoad } = $table

  if (!treeConfig || !treeExpandeds.length) {
    return
  }

  let childrenKey = getTreeChildrenKey({ scrollYLoad, treeConfig })
  let rowChildren = row[childrenKey]

  if (!rowChildren || !rowChildren.length || !~treeExpandeds.indexOf(row)) {
    return
  }

  let args1 = { h, _vm, $table, $seq: $seq ? `${$seq}.${seq}` : `${seq}` }

  Object.assign(args1, {
    rowLevel: rowLevel + 1,
    fixedType,
    tableData: rowChildren,
    tableColumn,
    seqCount
  })

  rows.push.apply(rows, renderRows(args1))
}

function renderRows({ h, _vm, $table, $seq, rowLevel, fixedType, tableData, tableColumn, seqCount }) {
  let { rowKey, highlightHoverRow, rowClassName, treeConfig, treeExpandeds, groupFolds } = $table
  let { groupData, scrollYLoad, scrollYStore, editConfig, editStore } = $table
  let { expandConfig = {}, expandeds, selection, rowGroup } = $table
  let rows = []
  let expandMethod = expandConfig.activeMethod
  let startIndex = scrollYStore.startIndex
  let isOrdered = treeConfig ? !!treeConfig.ordered : false

  seqCount = seqCount || { value: 0 }

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

    // 事件绑定
    addRowListenerMouseenter({ $table, highlightHoverRow, row, rowIndex, trOn })
    let rowid = getRowid($table, row)
    renderRowGroupData({ groupData, groupFolds, row, rowGroup, rowid, rows, tableColumn })
    let args = { $rowIndex, $seq, $table, _vm, editStore, fixedType, groupFolds, h, row, rowActived }
    Object.assign(args, { rowClassName, rowIndex, rowKey, rowLevel, rowid, rows, selection, seq })
    Object.assign(args, { tableColumn, trOn, treeConfig })

    renderRow(args)
    renderRowAfter({ $table, h, row, rowIndex, rows, tableData })
    args = { $table, expandMethod, expandeds, fixedType, h, row, rowIndex, rowLevel }
    Object.assign(args, { rowid, rows, seq, tableColumn, trOn, treeConfig })
    // 如果行被展开了
    renderRowExpanded(args)
    args = { $seq, $table, _vm, fixedType, h, row, rowLevel, rows }
    Object.assign(args, { seq, seqCount, tableColumn, treeConfig, treeExpandeds })
    // 如果是树形表格
    renderRowTree(args, renderRows)
  })

  return rows
}

/**
 * 同步滚动条
 * scroll 方式：可以使固定列与内容保持一致的滚动效果，处理相对麻烦
 * mousewheel 方式：对于同步滚动效果就略差了，左右滚动，内容跟随即可
 */
let handlerScrollTimeout

function syncBodyScroll(scrollTop, elemDist1, elemDist2) {
  if (elemDist1) {
    elemDist1.onscroll = null
    elemDist1.scrollTop = scrollTop
  }

  if (elemDist2) {
    elemDist2.onscroll = null
    elemDist2.scrollTop = scrollTop
  }

  clearTimeout(handlerScrollTimeout)

  handlerScrollTimeout = setTimeout(() => {
    elemDist1 && (elemDist1.onscroll = elemDist1._onscroll)
    elemDist2 && (elemDist2.onscroll = elemDist2._onscroll)
    elemDist1 && (elemDist1.scrollTop = scrollTop)
    elemDist2 && (elemDist2.scrollTop = scrollTop)
  }, 100)
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

function syncScrollTop(args) {
  let { $table, bodyElem, fixedType, footerElem, headerElem } = args
  let { isX, isY, leftElem, rightElem, scrollTop } = args
  let ruleChains = [
    {
      match: () => leftElem && fixedType === 'left',
      action: () => {
        scrollTop = leftElem.scrollTop
        syncBodyScroll(scrollTop, bodyElem, rightElem)
      }
    },
    {
      match: () => rightElem && fixedType === 'right',
      action: () => {
        scrollTop = rightElem.scrollTop
        syncBodyScroll(scrollTop, bodyElem, leftElem)
      }
    },
    {
      match: () => true,
      action: () => {
        if (isX && headerElem) {
          headerElem.scrollLeft = bodyElem.scrollLeft
        }
        if (isX && footerElem) {
          footerElem.scrollLeft = bodyElem.scrollLeft
        }

        let fixedElem = leftElem || rightElem

        if (fixedElem) {
          $table.checkScrolling()
        }

        if (fixedElem && isY) {
          syncBodyScroll(scrollTop, leftElem, rightElem)
        }
      }
    }
  ]

  for (let i = 0; i < ruleChains.length; i++) {
    if (ruleChains[i].match()) {
      ruleChains[i].action()
      break
    }
  }

  return scrollTop
}

function doScrollLoad({ $table, _vm, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad }) {
  let isScrollX = scrollXLoad && isX

  if (isScrollX) {
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
    $table.triggerScrollYEvent(event)
  }
}

function renderEmptyBlock({ $slots, $table, _vm, fixedType, isCenterCls, renderEmpty, tableData }) {
  let res = null

  if (!fixedType) {
    res = h(
      'div',
      {
        class: `tiny-grid__empty-block${tableData.length ? '' : ' is__visible'} ${isCenterCls}`,
        ref: 'emptyBlock'
      },
      $slots.empty ? $slots.empty.call(_vm, { $table }, h) : renderEmpty ? [renderEmpty(h, $table)] : renderDefEmpty(h)
    )
  }

  return res
}

function renderBorders({ fixedType, keyboardConfig, mouseConfig }) {
  let res = null

  if (!fixedType && (mouseConfig.checked || keyboardConfig.isCut)) {
    res = h('div', { class: 'tiny-grid__borders' }, [
      mouseConfig.checked ? renderBorder(h, 'check') : null,
      keyboardConfig.isCut ? renderBorder(h, 'copy') : null
    ])
  }

  return res
}

function renderTable({ $table, _vm, clearHoverRow, fixedType, tableColumn, tableData, tableLayout }) {
  return h(
    'table',
    {
      class: 'tiny-grid__body',
      style: { tableLayout },
      attrs: { cellspacing: 0, cellpadding: 0, border: 0 },
      ref: 'table'
    },
    [
      // 列宽
      h(
        'colgroup',
        { ref: 'colgroup' },
        tableColumn.map((column, columnIndex) => h('col', { attrs: { name: column.id }, key: columnIndex }))
      ),
      // 内容
      h('tbody', { ref: 'tbody', on: { mouseleave: clearHoverRow } }, renderRows({ h, _vm, $table, $seq: '', rowLevel: 0, fixedType, tableData, tableColumn }))
    ]
  )
}

function renderYSpace({ scrollLoad }) {
  return h('div', { class: 'tiny-grid-body__y-space visual', ref: 'ySpace' }, [scrollLoad ? h('div', { class: 'tiny-grid-body__y-scrollbar' }) : [null]])
}

function renderXSpace({ fixedType }) {
  return fixedType ? [null] : h('div', { class: 'tiny-grid-body__x-space', ref: 'xSpace' })
}

export default {
  name: `${$prefix}GridBody`,
  props: {
    collectColumn: Array,
    fixedColumn: Array,
    fixedType: String,
    isGroup: Boolean,
    size: String,
    tableColumn: Array,
    tableData: Array,
    visibleColumn: Array
  },
  mounted() {
    let { $el, $parent: $table, $refs, fixedType } = this
    let { elemStore } = $table
    let keyPrefix = `${fixedType || 'main'}-body-`

    elemStore[`${keyPrefix}wrapper`] = $el
    elemStore[`${keyPrefix}table`] = $refs.table
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    elemStore[`${keyPrefix}list`] = $refs.tbody
    elemStore[`${keyPrefix}xSpace`] = $refs.xSpace
    elemStore[`${keyPrefix}ySpace`] = $refs.ySpace
    elemStore[`${keyPrefix}emptyBlock`] = $refs.emptyBlock

    this.$el.onscroll = this.scrollEvent
    this.$el._onscroll = this.scrollEvent
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
    let { $parent: $table, fixedColumn, fixedType } = this
    let { $grid, clearHoverRow, isCenterEmpty, keyboardConfig = {}, mouseConfig = {}, renderEmpty } = $table
    let { scrollLoad, scrollXLoad, showOverflow: allColumnOverflow, tableColumn, tableData, tableLayout } = $table
    let $slots = $grid.slots
    let isCenterCls = isCenterEmpty ? 'is__center' : ''
    // 如果是固定列与设置了超出隐藏
    if (fixedType && (allColumnOverflow || scrollXLoad)) {
      tableColumn = fixedColumn
    }
    return h(
      'div',
      {
        ref: 'body',
        class: ['tiny-grid__body-wrapper', fixedType ? `fixed-${fixedType}__wrapper` : 'body__wrapper', { [classMap.isScrollload]: scrollLoad }]
      },
      [
        renderXSpace({ fixedType }),
        renderYSpace({ scrollLoad }),
        renderTable({ $table, _vm: this, clearHoverRow, fixedType, tableColumn, tableData, tableLayout }),
        // 选中边框线
        renderBorders({ fixedType, keyboardConfig, mouseConfig }),
        // 空数据
        renderEmptyBlock({ $slots, $table, _vm: this, fixedType, isCenterCls, renderEmpty, tableData })
      ]
    )
  },
  methods: {
    // 滚动处理，如果存在列固定右侧，同步更新滚动状态
    scrollEvent(event) {
      let { $parent: $table, fixedType } = this
      let { $refs, highlightHoverRow, lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad } = $table
      let { leftBody, rightBody, tableBody, tableFooter, tableHeader } = $refs
      let headerElem = tableHeader ? tableHeader.$el : null
      let bodyElem = tableBody.$el
      let footerElem = tableFooter ? tableFooter.$el : null
      let scrollLeft = bodyElem.scrollLeft
      let leftElem = leftBody ? leftBody.$el : null
      let rightElem = rightBody ? rightBody.$el : null
      let scrollTop = bodyElem.scrollTop
      let isY = scrollTop !== lastScrollTop
      let isX = scrollLeft !== lastScrollLeft

      $table.lastScrollTime = Date.now()
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTop = scrollTop
      $table.scrollDirection = isX ? 'X' : 'Y'

      if (highlightHoverRow) {
        $table.clearHoverRow()
      }

      let args = { $table, bodyElem, fixedType, footerElem, headerElem }
      Object.assign(args, { isX, isY, leftElem, rightElem, scrollTop })
      scrollTop = syncScrollTop(args)
      doScrollLoad({ $table, _vm: this, bodyElem, event, headerElem, isX, isY, scrollLeft, scrollXLoad, scrollYLoad })
      emitEvent($table, 'scroll', [{ type: 'body', fixed: fixedType, scrollTop, scrollLeft, isX, isY, $table }, event])
    }
  }
}
