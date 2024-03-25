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

import { isFunction } from '@opentiny/vue-renderless/grid/static/'
import { getClass, emitEvent, formatText, updateCellTitle } from '@opentiny/vue-renderless/grid/utils'
import { isNull } from '@opentiny/vue-renderless/common/type'
import { h, $prefix } from '@opentiny/vue-common'

const classMap = {
  fixedHidden: 'fixed__column',
  colEllipsis: 'col__ellipsis',
  filterActive: 'filter__active',
  cellSummary: 'cell__summary',
  fixedLeftLast: 'fixed-left-last__column',
  fixedRightFirst: 'fixed-right-first__column'
}

function doFooterSpan({ attrs, footerData, footerSpanMethod, params }) {
  if (footerSpanMethod) {
    let { rowspan = 1, colspan = 1 } = footerSpanMethod({ data: footerData, ...params }) || {}

    if (!rowspan || !colspan) {
      return null
    }

    attrs.rowspan = rowspan
    attrs.colspan = colspan
  }
}

function addListenerDblclick({ $table, params, tableListeners, tfOns }) {
  if (tableListeners['footer-cell-dblclick']) {
    tfOns.dblclick = (event) => {
      emitEvent($table, 'footer-cell-dblclick', [{ cell: event.currentTarget, ...params }, event])
    }
  }
}

function addListenerClick({ $table, params, tableListeners, tfOns }) {
  if (tableListeners['footer-cell-click']) {
    tfOns.click = (event) => {
      emitEvent($table, 'footer-cell-click', [{ cell: event.currentTarget, ...params }, event])
    }
  }
}

function addListenerMouseout({ $table, showTooltip, tfOns }) {
  if (showTooltip) {
    tfOns.mouseout = () => {
      $table.clostTooltip()
    }
  }
}

function addListenerMouseover({ $table, params, showTitle, showTooltip, tfOns }) {
  if (showTitle || showTooltip) {
    tfOns.mouseover = (event) => {
      if (showTitle) {
        updateCellTitle(event)
      } else if (showTooltip) {
        $table.triggerFooterTooltipEvent(event, params)
      }
    }
  }
}

function renderColgroup(tableColumn) {
  return h(
    'colgroup',
    { ref: 'colgroup' },
    tableColumn
      .map((column, columnIndex) => h('col', { attrs: { name: column.id }, key: columnIndex }))
      .concat([h('col', { attrs: { name: 'col_gutter' } })])
  )
}

const renderfoots = (opt) => {
  const { $table, allAlign, allColumnOverflow, allFooterAlign, buildParamFunc, columnKey, columnStore } = opt
  const {
    footerCellClassName,
    footerData,
    footerRowClassName,
    footerSpanMethod,
    overflowX,
    tableColumn,
    tableListeners
  } = opt
  return (list, $rowIndex) =>
    h(
      'tr',
      {
        class: [
          'tiny-grid-footer__row',
          footerRowClassName
            ? isFunction(footerRowClassName)
              ? footerRowClassName({ $table, $rowIndex })
              : footerRowClassName
            : ''
        ]
      },
      tableColumn
        .map((column, $columnIndex) => {
          const arg1 = { $columnIndex, $rowIndex, $table, allAlign, allColumnOverflow, allFooterAlign }
          const arg2 = { column, footerData, footerSpanMethod, overflowX, tableListeners }
          const { attrs, columnIndex, fixedHiddenColumn, footAlign, footerClassName, hasEllipsis, params, tfOns } =
            buildParamFunc(Object.assign(arg1, arg2))
          const { leftList, rightList } = columnStore
          return h(
            'td',
            {
              class: [
                'tiny-grid-footer__column',
                column.id,
                {
                  [`col__${footAlign}`]: footAlign,
                  [classMap.fixedHidden]: fixedHiddenColumn,
                  [classMap.colEllipsis]: hasEllipsis,
                  [classMap.filterActive]: column.filter && column.filter.hasFilter,
                  [classMap.fixedLeftLast]: column.fixed === 'left' && leftList[leftList.length - 1] === column,
                  [classMap.fixedRightFirst]: column.fixed === 'right' && rightList[0] === column
                },
                getClass(footerClassName, params),
                getClass(footerCellClassName, params)
              ],
              style: {
                left: `${column.style?.left}px`,
                right: `${column.style?.right}px`
              },
              attrs,
              on: tfOns,
              key: columnKey ? column.id : columnIndex
            },
            [
              h(
                'div',
                {
                  class: ['tiny-grid-cell', { [classMap.cellSummary]: $table.summaryConfig }]
                },
                // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
                $table.isShapeTable ? formatText(list[$table.tableColumn.indexOf(column)], 1) : null
              )
            ]
          )
        })
        .concat([h('td', { class: 'col__gutter' })])
    )
}

function renderTfoot(opt) {
  return h('tfoot', { ref: 'tfoot' }, opt.footerData.map(renderfoots(opt)))
}

export default {
  name: `${$prefix}GridFooter`,
  props: {
    fixedColumn: Array,
    fixedType: String,
    footerData: Array,
    size: String,
    tableColumn: Array,
    visibleColumn: Array
  },
  mounted() {
    let { $el, $parent: $table, $refs } = this
    let { elemStore } = $table
    let keyPrefix = 'main-footer-'

    elemStore[`${keyPrefix}wrapper`] = $el
    elemStore[`${keyPrefix}table`] = $refs.table
    elemStore[`${keyPrefix}colgroup`] = $refs.colgroup
    elemStore[`${keyPrefix}list`] = $refs.tfoot
    elemStore[`${keyPrefix}x-space`] = $refs.xSpace
  },
  render() {
    let { $parent: $table, buildParamFunc, fixedColumn, fixedType, footerData, tableColumn } = this
    let {
      align: allAlign,
      columnKey,
      footerAlign: allFooterAlign,
      footerCellClassName,
      footerRowClassName,
      footerSpanMethod,
      columnStore
    } = $table
    let { overflowX, showOverflow: allColumnOverflow, tableLayout, tableListeners, renderFooter } = $table

    let tableAttrs = { cellspacing: 0, cellpadding: 0, border: 0 }
    let colgroupVNode = renderColgroup(tableColumn)
    let arg1 = { $table, allAlign, allColumnOverflow, allFooterAlign, buildParamFunc, columnKey, columnStore }
    let arg2 = {
      footerCellClassName,
      footerData,
      footerRowClassName,
      footerSpanMethod,
      overflowX,
      tableColumn,
      tableListeners
    }
    let tfootVNode = renderTfoot(Object.assign(arg1, arg2))

    const renderParams = { $table, columns: tableColumn, footerData, fixedColumns: fixedColumn, fixedType }

    return h(
      'div',
      {
        class: ['tiny-grid__footer-wrapper', 'body__wrapper'],
        on: { scroll: this.scrollEvent }
      },
      [
        h('div', { class: 'tiny-grid-body__x-space', ref: 'xSpace' }),
        typeof renderFooter === 'function'
          ? renderFooter(renderParams, h)
          : h(
              'table',
              {
                class: 'tiny-grid__footer',
                style: { tableLayout },
                attrs: tableAttrs,
                ref: 'table'
              },
              [
                //  列宽
                colgroupVNode,
                // 底部
                tfootVNode
              ]
            )
      ]
    )
  },
  methods: {
    scrollEvent(event) {
      // 滚动处理： 如果存在列固定左侧，同步更新滚动状态；如果存在列固定右侧，同步更新滚动状态。
      let { $parent: $table } = this
      let { $refs, lastScrollLeft, scrollXLoad } = $table
      let { tableBody, tableFooter, tableHeader } = $refs
      let headerElem = tableHeader ? tableHeader.$el : null
      let bodyElem = tableBody ? tableBody.$el : null
      let footerElem = tableFooter ? tableFooter.$el : null
      let scrollLeft = footerElem.scrollLeft
      let isX = scrollLeft !== lastScrollLeft
      let setElemScrollLeft = (elem, scrollLeft) => {
        if (elem) {
          elem.scrollLeft = scrollLeft
        }
      }
      let eventParams = [{ $table, isX, isY: false, scrollLeft, scrollTop: bodyElem.scrollTop, type: 'footer' }, event]

      $table.lastScrollTime = Date.now()
      $table.lastScrollLeft = scrollLeft

      setElemScrollLeft(headerElem, scrollLeft)
      setElemScrollLeft(bodyElem, scrollLeft)

      if (scrollXLoad && isX) {
        $table.triggerScrollXEvent(event)
      }

      emitEvent($table, 'scroll', eventParams)
    },
    buildParamFunc(opt) {
      let { $columnIndex, $rowIndex, $table, allAlign, allColumnOverflow, allFooterAlign } = opt
      let { column, footerData, footerSpanMethod, tableListeners } = opt
      let { showOverflow, footerAlign, align, footerClassName } = column
      let fixedHiddenColumn = column.fixed
      let cellOverflowValue = isNull(showOverflow) ? allColumnOverflow : showOverflow
      let footAlign = footerAlign || align || allFooterAlign || allAlign
      let isShowEllipsis = cellOverflowValue === 'ellipsis'
      let isShowTitle = cellOverflowValue === 'title'
      let showTooltip = cellOverflowValue === true || cellOverflowValue === 'tooltip'
      let hasEllipsis = isShowTitle || showTooltip || isShowEllipsis
      let attrs = { 'data-colid': column.id }
      let tfOns = {}
      let columnIndex = $table.getColumnIndex(column)
      let params = {
        $table,
        $rowIndex,
        column,
        columnIndex,
        $columnIndex
      }

      addListenerMouseover({ $table, params, showTitle: isShowTitle, showTooltip, tfOns })

      addListenerMouseout({ $table, showTooltip, tfOns })

      addListenerClick({ $table, params, tableListeners, tfOns })

      addListenerDblclick({ $table, params, tableListeners, tfOns })
      // 处理行或者列的合并
      doFooterSpan({ attrs, footerData, footerSpanMethod, params })

      return { attrs, columnIndex, fixedHiddenColumn, footAlign, footerClassName, hasEllipsis, params, tfOns }
    }
  }
}
