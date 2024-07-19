<script>
import { renderless, api } from '@opentiny/vue-renderless/grid/footer/vue'
import { h, $prefix, defineComponent, setup } from '@opentiny/vue-common'
import { isFunction } from '@opentiny/vue-renderless/grid/static/'
import { getClass, formatText } from '@opentiny/vue-renderless/grid/utils'

const classMap = {
  fixedHidden: 'fixed__column',
  colEllipsis: 'col__ellipsis',
  filterActive: 'filter__active',
  cellSummary: 'cell__summary',
  fixedLeftLast: 'fixed-left-last__column',
  fixedRightFirst: 'fixed-right-first__column'
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
  const { scrollbarWidth } = $table
  return (list, $rowIndex) => {
    return h(
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
          const {
            attrs,
            columnIndex,
            fixedHiddenColumn,
            footAlign,
            footerClassName,
            hasEllipsis,
            params,
            tfOns,
            isShowEllipsis,
            isShowTitle,
            showTooltip
          } = buildParamFunc(Object.assign(arg1, arg2))
          const { leftList, rightList } = columnStore
          const { left: leftPosition, right } = column.style || {}
          // 表尾右侧冻结列，当有表体有滚动条时，需要加上滚动条的偏移量
          const rightPosition = right >= 0 ? right + scrollbarWidth : ''
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
              style: fixedHiddenColumn
                ? {
                    left: `${leftPosition}px`,
                    right: `${rightPosition}px`
                  }
                : null,
              attrs,
              on: tfOns,
              key: columnKey ? column.id : columnIndex
            },
            [
              h(
                'div',
                {
                  class: [
                    'tiny-grid-cell',
                    {
                      [classMap.cellSummary]: $table.summaryConfig,
                      'tiny-grid-cell__title': isShowTitle,
                      'tiny-grid-cell__tooltip': showTooltip || column.showTip,
                      'tiny-grid-cell__ellipsis': isShowEllipsis
                    }
                  ]
                },
                // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
                $table.isShapeTable ? formatText(list[$table.tableColumn.indexOf(column)]) : null
              )
            ]
          )
        })
        .concat([h('td', { class: 'col__gutter' })])
    )
  }
}

function renderTfoot(opt) {
  return h('tfoot', { ref: 'tfoot' }, opt.footerData.map(renderfoots(opt)))
}

export default defineComponent({
  name: `${$prefix}GridFooter`,
  props: {
    fixedColumn: Array,
    fixedType: String,
    footerData: Array,
    size: String,
    tableColumn: Array,
    visibleColumn: Array
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
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
  }
})
</script>
