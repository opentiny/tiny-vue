<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/grid/header/vue'
import { isObject, isNull } from '@opentiny/vue-renderless/common/type'
import { isBoolean, isFunction } from '@opentiny/vue-renderless/grid/static/'
import { updateCellTitle, emitEvent, getClass } from '@opentiny/vue-renderless/grid/utils'
import { h, $prefix, defineComponent, props, setup } from '@opentiny/vue-common'
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
    thOns.dblclick = (event) =>
      emitEvent($table, 'header-cell-dblclick', [{ cell: event.currentTarget, ...params }, event])
  }
}

function addListenerClick({ $table, highlightCurrentColumn, mouseConfig, params, sortOpts, tableListeners, thOns }) {
  if (
    highlightCurrentColumn ||
    tableListeners['header-cell-click'] ||
    mouseConfig.checked ||
    sortOpts.trigger === 'cell'
  ) {
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

// 列宽
function renderTableColgroup(tableColumn) {
  return h(
    'colgroup',
    {
      ref: 'colgroup'
    },
    tableColumn
      .map((column, columnIndex) => h('col', { attrs: { name: column.id }, key: columnIndex }))
      .concat([h('col', { attrs: { name: 'col_gutter' } })])
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
  let { column, columnIndex, columnKey, fixedHiddenColumn, hasEllipsis, headAlign, columnStore } = args
  let { headerCellClassName, headerClassName, isColGroup, isDragHeaderSorting, params, thOns, scrollbarWidth } = args
  const { leftList, rightList } = columnStore

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
        [classMap.filterActive]: column.filter && column.filter.hasFilter,
        'fixed-left-last__column':
          column.fixed === 'left' && (leftList[leftList.length - 1] === column || column.isFixedLeftLast),
        'fixed-right-first__column': column.fixed === 'right' && (rightList[0] === column || column.isFixedRightFirst)
      },
      getClass(headerClassName, params),
      getClass(headerCellClassName, params)
    ],
    attrs: {
      'data-colid': column.id,
      colspan: column.colSpan,
      rowspan: column.rowSpan
    },
    style: {
      left: `${column.style?.left}px`,
      right: `${column.style?.right + scrollbarWidth}px`
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
  let { column, fixedHiddenColumn, headerSuffixIconAbsolute, params, $table } = args
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
    // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
    $table.isShapeTable ? column.renderHeader(h, { isHidden: fixedHiddenColumn, ...params }) : null
  )
}
function renderThResize({ _vm, border, column, fixedHiddenColumn, isColGroup, params, resizable }) {
  let res = null

  const classMap = {
    isLine: 'is__line'
  }

  // 删除fixedHiddenColumn，冻结表头放开可以拖拽调节宽度。
  if (
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
  let {
    $rowIndex,
    $table,
    _vm,
    allAlign,
    allColumnHeaderOverflow,
    allHeaderAlign,
    border,
    columnKey,
    headerCellClassName
  } = args
  let {
    headerSuffixIconAbsolute,
    highlightCurrentColumn,
    isDragHeaderSorting,
    mouseConfig,
    resizable,
    sortOpts,
    tableListeners
  } = args

  // 返回一个回调函数给map函数调用
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
    const { columnStore, scrollbarWidth } = $table

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
    args1 = { column, columnIndex, columnKey, fixedHiddenColumn, hasEllipsis, headAlign, columnStore, scrollbarWidth }
    Object.assign(args1, { headerCellClassName, headerClassName, isColGroup, isDragHeaderSorting, params, thOns })
    let args2 = { column, fixedHiddenColumn, headerSuffixIconAbsolute, params, $table }
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
            headerRowClassName
              ? isFunction(headerRowClassName)
                ? headerRowClassName({ $table, $rowIndex })
                : headerRowClassName
              : ''
          ]
        },
        // 后面再添加一个gutter的作用是什么？——做浏览器兼容性处理
        cols.map(getThHandler(args1)).concat([h('th', { class: 'col__gutter' })])
      )
    })
  )
}

function renderTable(args) {
  // 将传入的args再解构出来
  let { $table, _vm, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey } = args
  let { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute } = args
  let { highlightCurrentColumn, isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts } = args
  let { tableColumn, tableLayout, tableListeners } = args

  // 定义另一个args1
  // Q：为什么要再定义出一个？有什么区别吗？
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

export default defineComponent({
  name: `${$prefix}GridHeader`,
  props: [...props, 'collectColumn', 'fixedColumn', 'size', 'isGroup', 'tableColumn', 'tableData', 'visibleColumn'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    let { $parent: parent, tableColumn, state } = this

    const $table = parent.$parent

    const { headerColumn } = state

    let { align: allAlign, border, columnKey, headerAlign: allHeaderAlign } = $table
    let { headerCellClassName, headerRowClassName, headerSuffixIconAbsolute } = $table
    let { highlightCurrentColumn, isDragHeaderSorting, mouseConfig = {}, overflowX } = $table
    let { resizable, showHeaderOverflow: allColumnHeaderOverflow } = $table
    let { sortOpts, tableLayout, tableListeners } = $table

    let args = { $table, _vm: this, allAlign, allColumnHeaderOverflow, allHeaderAlign, border, columnKey }

    // 将用到的props合并到args，并传给renderTable进行渲染
    Object.assign(args, { headerCellClassName, headerColumn, headerRowClassName, headerSuffixIconAbsolute })
    Object.assign(args, { highlightCurrentColumn, isDragHeaderSorting, mouseConfig, overflowX, resizable, sortOpts })
    Object.assign(args, { tableColumn, tableLayout, tableListeners })

    return h(
      'div',
      {
        class: ['tiny-grid__header-wrapper', 'body__wrapper']
      },
      [
        // 表格主体内容x轴方向虚拟滚动条占位元素，在表头中属于无效元素，待删除
        renderXSpace(),
        renderTable(args),
        // x轴方向虚拟滚动适配线
        renderRepair()
      ]
    )
  }
})
</script>
