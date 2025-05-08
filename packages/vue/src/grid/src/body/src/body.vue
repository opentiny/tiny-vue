<template>
  <div
    ref="body"
    class="tiny-grid__body-wrapper body__wrapper"
    :class="{ 'is__scrollload': $table?.scrollLoad }"
    :style="computedStyle"
    @scroll="scrollEvent"
  >
    <!-- 表格主体内容x轴方向虚拟滚动条占位元素 -->
    <div class="tiny-grid-body__x-space" ref="xSpace"></div>

    <!-- y轴滚动条占位元素 -->
    <div class="tiny-grid-body__y-space visual" v-if="$table?.scrollYLoad" ref="ySpace" :style="computedYSpaceStyle">
      <div v-if="$table?.scrollLoad" class="tiny-grid-body__y-scrollbar"></div>
    </div>

    <!-- 表格主体 -->
    <table
      ref="table"
      class="tiny-grid__body"
      :style="{ tableLayout }"
      cellspacing="0"
      cellpadding="0"
      border="0"
      :data-tableid="$table?.id"
    >
      <!-- 列宽设置 -->
      <colgroup ref="colgroup">
        <col
          v-for="(column, columnIndex) in tableColumn"
          :key="columnIndex"
          :width="column.renderWidth"
          :name="column.id"
        />
      </colgroup>

      <!-- 表头 -->
      <thead ref="thead">
        <tr
          v-for="(cols, $rowIndex) in headerColumn"
          :key="$rowIndex"
          class="tiny-grid-header__row"
          :class="[
            headerRowClassName
              ? typeof headerRowClassName === 'function'
                ? headerRowClassName({ $table, $rowIndex })
                : headerRowClassName
              : ''
          ]"
        >
          <th
            v-for="(column, $columnIndex) in cols"
            :key="columnKey ? column.id : $columnIndex"
            class="tiny-grid-header__column"
            :class="[
              column.id,
              {
                [`col__${headAlign}`]: headAlign,
                'col__fixed': column.fixed,
                'col__index': column.type === 'index',
                'col__radio': column.type === 'radio',
                'col__selection': column.type === 'selection',
                'col__group': column.children && column.children.length,
                'col__ellipsis': hasEllipsis,
                'fixed__column': column.fixed,
                'is__sortable': !['index', 'radio', 'selection'].includes(column.type) && column.sortable,
                'is__editable': column.editor,
                'is__filter': isObject(column.filter),
                'filter__active': column.filter && column.filter.hasFilter,
                'fixed-left-last__column': column.fixed === 'left' && leftList[leftList.length - 1] === column,
                'fixed-right-first__column': column.fixed === 'right' && rightList[0] === column
              },
              getClass(headerClassName, params),
              getClass(headerCellClassName, params)
            ]"
            :style="
              column.fixed
                ? {
                    left: `${column.style?.left}px`,
                    right: `${column.style?.right + scrollbarWidth}px`
                  }
                : null
            "
            :colspan="column.colSpan"
            :rowspan="column.rowSpan"
            :data-colid="column.id"
            @mouseover="handleHeaderMouseover($event, column, $rowIndex, $columnIndex)"
            @mouseout="handleHeaderMouseout($event, column)"
            @click="handleHeaderClick($event, column, $rowIndex, $columnIndex)"
            @dblclick="handleHeaderDblclick($event, column, $rowIndex, $columnIndex)"
            @mousedown="handleHeaderMousedown($event, column, $rowIndex, $columnIndex)"
          >
            <div
              class="tiny-grid-cell"
              :class="{
                'tiny-grid-cell__title': showTitle,
                'tiny-grid-cell__tooltip': showTooltip || showHeaderTip,
                'tiny-grid-cell__ellipsis': showEllipsis,
                'tiny-grid-cell__header-suffix': headerSuffixIconAbsolute
              }"
            >
              <component
                v-if="$table?.isShapeTable"
                :is="column.renderHeader"
                :params="{
                  isHidden: column.fixed,
                  $table,
                  $rowIndex,
                  column,
                  columnIndex: $table?.getColumnIndex?.(column),
                  $columnIndex
                }"
              />
            </div>
            <!-- 列宽拖动 -->
            <div
              v-if="
                !column.children?.length && isColResize && (isBoolean(column.resizable) ? column.resizable : resizable)
              "
              class="tiny-grid-resizable"
              :class="{ 'is__line': !border }"
              @mousedown="
                resizeMousedown($event, {
                  isHidden: column.fixed,
                  $table,
                  $rowIndex,
                  column,
                  columnIndex: $table?.getColumnIndex?.(column),
                  $columnIndex
                })
              "
            ></div>
          </th>
          <th class="col__gutter"></th>
        </tr>
      </thead>

      <!-- 表格内容 -->
      <tbody ref="tbody">
        <template v-for="row in tableData">
          <!-- 分组行 -->
          <tr
            v-if="rowGroup && row._group"
            :key="'group_' + row.id"
            class="tiny-grid-body__row group"
            :class="[rowGroup.className, { hover: row.hover }]"
            :data-rowid="row.id"
            @mouseout="row.hover = false"
            @mouseover="row.hover = true"
            @click="handleRowGroupFold(row)"
          >
            <td
              v-for="column in tableColumn"
              :key="column.id"
              :class="[
                'tiny-grid-body__column',
                column.id,
                column === ($table as TableInstance)._rowGroupTargetColumn ? 'td-group' : 'td-placeholder'
              ]"
              :colspan="column._rowGroupColspan"
            >
              <div class="tiny-grid-cell-group">
                <template v-if="column === ($table as TableInstance)._rowGroupTargetColumn">
                  <component
                    v-if="rowGroup.closeable"
                    :is="row.fold ? 'ChevronRight' : 'ChevronDown'"
                    class="tiny-svg-size"
                  />
                  <span class="row-group-title">{{
                    rowGroup.title || formatText(getFuncText(column.title)) || row.value
                  }}</span>
                  <span v-if="row.value">:{{ row.value }}</span>
                  <span class="tiny-badge">{{ row.children.length }}</span>
                </template>
                <template v-else>
                  <component
                    v-if="rowGroup.renderGroupCell"
                    :is="rowGroup.renderGroupCell"
                    :params="{
                      value: row.value,
                      header: rowGroup.title,
                      children: row.children,
                      expand: !row.fold,
                      row,
                      column,
                      columnIndex: ($table as TableInstance).getColumnIndex?.(column)
                    }"
                  />
                </template>
              </div>
            </td>
          </tr>

          <!-- 普通数据行 -->
          <tr
            v-else
            :key="row.id"
            class="tiny-grid-body__row"
            :class="[
              { [`row__level-${rowLevel}`]: treeConfig },
              { 'row__new': editStore.insertList.includes(row) },
              { 'row__selected': selection.includes(row) },
              { 'row__radio': selectRow === row },
              { 'row__actived': rowActived },
              rowClassName
                ? typeof rowClassName === 'function'
                  ? rowClassName({ $table: $table as TableInstance, $seq: 0, seq: 0, rowLevel, row, rowIndex: 0 })
                  : rowClassName
                : ''
            ]"
            :data-rowid="row.id"
            @click="handleRowClick(row)"
          >
            <td
              v-for="column in tableColumn"
              :key="column.id"
              class="tiny-grid-body__column"
              :class="[
                column.id,
                { [`col__${cellAlign}`]: cellAlign },
                { 'col__edit': editor },
                { 'col__index': column.type === 'index' },
                { 'col__radio': column.type === 'radio' },
                { 'col__selection': column.type === 'selection' },
                { 'col__ellipsis': hasEllipsis },
                { 'edit__visible': editor && editor.type === 'visible' },
                { 'fixed__column': fixedHiddenColumn },
                { 'col__dirty': getIsDirty(row, column) },
                { 'col__actived': columnActived },
                { 'col__valid-error': validError && validated },
                {
                  'col__valid-success': columnActived
                    ? !validError && !validated
                    : getIsDirty(row, column) && !validated
                },
                { 'col__treenode': column.treeNode },
                { 'fixed-left-last__column': column.fixed === 'left' && leftList[leftList.length - 1] === column },
                { 'fixed-right-first__column': column.fixed === 'right' && rightList[0] === column }
              ]"
              :style="
                fixedHiddenColumn
                  ? {
                      left: column.style?.left + 'px',
                      right: column.style?.right + 'px'
                    }
                  : null
              "
              @mouseenter="handleCellMouseenter($event, row, column)"
              @mouseleave="handleCellMouseleave($event, row, column)"
              @mousedown="handleCellMousedown($event, row, column)"
              @click="handleCellClick($event, row, column)"
              @dblclick="handleCellDblclick($event, row, column)"
            >
              <div
                class="tiny-grid-cell"
                :class="{
                  'tiny-grid-cell__title': showTitle,
                  'tiny-grid-cell__tooltip': showTooltip || showTip,
                  'tiny-grid-cell__ellipsis': showEllipsis
                }"
                :title="showTitle ? getCellLabel(row, column, params) : null"
              >
                <component
                  :is="column.renderCell"
                  :params="{
                    row,
                    column,
                    $table: $table as TableInstance,
                    $seq: ($table as TableInstance).getRowIndex(row) + 1,
                    seq: ($table as TableInstance).getRowIndex(row) + 1,
                    rowIndex: ($table as TableInstance).getRowIndex(row),
                    $rowIndex: tableData.indexOf(row)
                  }"
                />
              </div>
              <div
                v-if="hasDefaultTip && validError"
                class="tiny-grid-cell__valid"
                :style="validStore.rule && validStore.rule.width ? { width: validStore.rule.width + 'px' } : null"
              >
                <component v-if="validOpts?.icon" :is="validOpts.icon" class="tiny-grid-cell__valid-icon" />
                <span class="tiny-grid-cell__valid-msg" :title="validStore.content">{{ validStore.content }}</span>
              </div>
            </td>
          </tr>

          <!-- 展开行 -->
          <tr
            v-if="expandeds.includes(row) && (typeof expandMethod === 'function' ? expandMethod(row, rowLevel) : true)"
            :key="'expand_' + row.id"
            class="tiny-grid-body__expanded-row"
          >
            <td class="tiny-grid-body__expanded-column" :colspan="tableColumn.length">
              <div
                class="tiny-grid-body__expanded-cell"
                :style="treeConfig ? { paddingLeft: rowLevel * (treeConfig.indent || 16) + 30 + 'px' } : null"
              >
                <component
                  v-if="$table.isShapeTable"
                  :is="find(tableColumn, (col) => col.type === 'expand').renderData"
                  :params="{
                    $table: $table as TableInstance,
                    seq: 0,
                    row,
                    rowIndex: 0,
                    column: find(tableColumn, (col) => col.type === 'expand'),
                    columnIndex: ($table as TableInstance).getColumnIndex?.(
                      find(tableColumn, (col) => col.type === 'expand')
                    ),
                    level: rowLevel
                  }"
                />
              </div>
            </td>
          </tr>
        </template>
      </tbody>

      <!-- 表尾 -->
      <tfoot ref="tfoot">
        <tr
          v-for="(list, $rowIndex) in footerData"
          :key="$rowIndex"
          class="tiny-grid-footer__row"
          :class="[
            footerRowClassName
              ? typeof footerRowClassName === 'function'
                ? footerRowClassName({ $table, $rowIndex })
                : footerRowClassName
              : ''
          ]"
        >
          <td
            v-for="(column, $columnIndex) in tableColumn"
            :key="columnKey ? column.id : $columnIndex"
            class="tiny-grid-footer__column"
            :class="[
              column.id,
              {
                [`col__${footAlign}`]: footAlign,
                'fixed__column': column.fixed,
                'col__ellipsis': hasEllipsis,
                'filter__active': column.filter && column.filter.hasFilter,
                'fixed-left-last__column': column.fixed === 'left' && leftList[leftList.length - 1] === column,
                'fixed-right-first__column': column.fixed === 'right' && rightList[0] === column,
                'col__radio': column.type === 'radio',
                'col__selection': column.type === 'selection'
              },
              getClass(footerClassName, params),
              getClass(footerCellClassName, params)
            ]"
            :style="
              column.fixed
                ? {
                    left: `${column.style?.left}px`,
                    right: `${column.style?.right + scrollbarWidth}px`
                  }
                : null
            "
            :data-colid="column.id"
            @mouseover="handleFooterMouseover($event, column, $rowIndex, $columnIndex)"
            @mouseout="handleFooterMouseout($event, column)"
            @click="handleFooterClick($event, column, $rowIndex, $columnIndex)"
            @dblclick="handleFooterDblclick($event, column, $rowIndex, $columnIndex)"
          >
            <div
              class="tiny-grid-cell"
              :class="{
                'cell__summary': $table?.summaryConfig,
                'tiny-grid-cell__title': isShowTitle,
                'tiny-grid-cell__tooltip': showTooltip || column.showTip,
                'tiny-grid-cell__ellipsis': isShowEllipsis
              }"
            >
              <component
                v-if="$table?.isShapeTable"
                :is="formatText"
                :params="list[$table?.tableColumn?.indexOf(column)]"
              />
            </div>
          </td>
          <td class="col__gutter"></td>
        </tr>
      </tfoot>
    </table>

    <!-- 边框 -->
    <div v-if="mouseConfig.checked || keyboardConfig.isCut" class="tiny-grid__borders">
      <div v-if="mouseConfig.checked" class="tiny-grid__borders-check">
        <span class="tiny-grid-border-top" ref="checkTop"></span>
        <span class="tiny-grid-border-right" ref="checkRight"></span>
        <span class="tiny-grid-border-bottom" ref="checkBottom"></span>
        <span class="tiny-grid-border-left" ref="checkLeft"></span>
      </div>
      <div v-if="keyboardConfig.isCut" class="tiny-grid__borders-copy">
        <span class="tiny-grid-border-top" ref="copyTop"></span>
        <span class="tiny-grid-border-right" ref="copyRight"></span>
        <span class="tiny-grid-border-bottom" ref="copyBottom"></span>
        <span class="tiny-grid-border-left" ref="copyLeft"></span>
      </div>
    </div>

    <!-- 空数据 -->
    <div
      v-if="!tableData.length"
      ref="emptyBlock"
      class="tiny-grid__empty-block"
      :class="{ 'is__visible': !tableData.length, 'is__center': isCenterEmpty }"
    >
      <slot v-if="$slots.empty" name="empty" :table="$table"></slot>
      <template v-else>
        <component v-if="renderEmpty" :is="renderEmpty" :table="$table" />
        <template v-else>
          <p class="tiny-grid__empty-img"></p>
          <span class="tiny-grid__empty-text">{{ GlobalConfig.i18n('ui.grid.emptyText') }}</span>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { $prefix, defineComponent, hooks } from '@opentiny/vue-common'
import { updateCellTitle, emitEvent, getClass } from '../../utils/utils'
import { isBoolean } from '../../utils/static'
import GlobalConfig from '../../config'
import { handleRowGroupFold } from '../../table/src/strategy'
import { generateFixedClassName } from '../../table/src/utils/handleFixedColumn'
import { isObject, isNull } from '@opentiny/utils'
import type { TableColumn, TableRow, TableConfig, EventParams, GridBodyInstance } from './types'

// 定义工具函数类型
type FormatTextFn = (text: string) => string

// 定义组件参数类型
interface ComponentParams {
  $table: TableInstance
  $seq: number
  seq: number
  rowLevel: number
  row: TableRow
  rowIndex: number
  $rowIndex: number
}

// 定义行组类型
interface RowGroup {
  className?: string
  closeable?: boolean
  title?: string
  renderGroupCell?: any
  [key: string]: any
}

// 定义编辑器类型
interface Editor {
  type?: string
  [key: string]: any
}

// 定义表格实例类型
interface TableInstance {
  isShapeTable?: boolean
  scrollLoad?: boolean
  _isResize?: boolean
  lastScrollTime?: number
  optimizeOpts?: {
    delayHover: number
  }
  elemStore?: {
    [key: string]: any
  }
  dropConfig?: {
    plugin?: any
    row?: boolean
  }
  rowDrop?: (el: HTMLElement) => any
  triggerScrollXEvent?: (event: Event) => void
  triggerScrollYEvent?: (event: Event) => void
  triggerTooltipEvent?: (event: MouseEvent, params: any) => void
  clostTooltip?: () => void
  triggerCellMousedownEvent?: (event: MouseEvent, params: any) => void
  triggerCellClickEvent?: (event: MouseEvent, params: any) => void
  triggerCellDBLClickEvent?: (event: MouseEvent, params: any) => void
  triggerRowClickEvent?: (row: TableRow) => void
  tableListeners?: {
    [key: string]: any
  }
  getRowIndex?: (row: TableRow) => number
  getColumnIndex?: (column: TableColumn) => number
  _rowGroupTargetColumn?: TableColumn
  [key: string]: any
}

export default defineComponent({
  name: $prefix + 'GridBody',
  props: {
    collectColumn: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    fixedColumn: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number]
    },
    size: {
      type: String,
      default: ''
    },
    tableColumn: {
      type: Array as PropType<TableColumn[]>,
      required: true
    },
    tableData: {
      type: Array as PropType<TableRow[]>,
      required: true
    },
    visibleColumn: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    editStore: {
      type: Object as PropType<{
        insertList: TableRow[]
        [key: string]: any
      }>,
      default: () => ({
        insertList: []
      })
    },
    selection: {
      type: Array as PropType<TableRow[]>,
      default: () => []
    },
    selectRow: {
      type: Object as PropType<TableRow | null>,
      default: null
    },
    rowActived: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: [String, Function] as PropType<string | ((params: ComponentParams) => string)>,
      default: ''
    },
    treeConfig: {
      type: Object as PropType<{
        indent?: number
        [key: string]: any
      } | null>,
      default: null
    },
    expandeds: {
      type: Array as PropType<TableRow[]>,
      default: () => []
    },
    expandMethod: {
      type: Function as PropType<(row: TableRow, level: number) => boolean>,
      default: null
    },
    mouseConfig: {
      type: Object as PropType<{
        checked?: boolean
        selected?: boolean
        [key: string]: any
      }>,
      default: () => ({
        checked: false,
        selected: false
      })
    },
    keyboardConfig: {
      type: Object as PropType<{
        isCut?: boolean
        [key: string]: any
      }>,
      default: () => ({
        isCut: false
      })
    },
    $table: {
      type: Object as PropType<TableInstance>,
      required: true
    },
    rowGroup: {
      type: Object as PropType<RowGroup | null>,
      default: null
    },
    editor: {
      type: Object as PropType<Editor | null>,
      default: null
    },
    hasEllipsis: {
      type: Boolean,
      default: false
    },
    fixedHiddenColumn: {
      type: Boolean,
      default: false
    },
    columnActived: {
      type: Boolean,
      default: false
    },
    validError: {
      type: Boolean,
      default: false
    },
    validated: {
      type: Boolean,
      default: false
    },
    validStore: {
      type: Object,
      default: () => ({})
    },
    validOpts: {
      type: Object,
      default: null
    },
    leftList: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    rightList: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    },
    showTitle: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: false
    },
    showTip: {
      type: Boolean,
      default: false
    },
    showEllipsis: {
      type: Boolean,
      default: false
    },
    hasDefaultTip: {
      type: Boolean,
      default: false
    },
    cellAlign: {
      type: String,
      default: ''
    },
    rowLevel: {
      type: Number,
      default: 0
    },
    isCenterEmpty: {
      type: Boolean,
      default: false
    },
    renderEmpty: {
      type: [Object, Function] as PropType<any>,
      default: null
    },
    tableLayout: {
      type: String as PropType<'fixed' | 'auto'>,
      default: 'fixed'
    },
    formatText: {
      type: Function as PropType<FormatTextFn>,
      default: (text: string) => text
    },
    isOrdered: {
      type: Boolean,
      default: false
    },
    seqCount: {
      type: Object as PropType<{ value: number }>,
      default: () => ({ value: 0 })
    },
    scrollYLoad: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Number,
      default: 0
    },
    startIndex: {
      type: Number,
      default: 0
    },
    hasVirtualRow: {
      type: Boolean,
      default: false
    },
    virtualRow: {
      type: Object as PropType<TableRow | null>,
      default: null
    },
    afterFullData: {
      type: Array as PropType<TableRow[]>,
      default: () => []
    },
    footerData: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    headerRowClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    footerRowClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    headerCellClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    footerCellClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    headerClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    footerClassName: {
      type: [String, Function] as PropType<string | ((params: any) => string)>,
      default: ''
    },
    headerSuffixIconAbsolute: {
      type: Boolean,
      default: false
    },
    highlightCurrentColumn: {
      type: Boolean,
      default: false
    },
    isDragHeaderSorting: {
      type: Boolean,
      default: false
    },
    columnKey: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: true
    },
    operationColumnResizable: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    sortOpts: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const rowSortable = hooks.ref<any>(null)

    hooks.onBeforeUnmount(() => {
      const table = hooks.getCurrentInstance()?.proxy
      if (table) {
        table.$el._onscroll = null
        table.$el.onscroll = null
      }
    })

    // 计算表格外层容器高度，拥有滚动条
    const computedStyle = hooks.computed(() => {
      return {
        height: props.height ? (`${props.height}`.endsWith('px') ? props.height : `${props.height}px`) : undefined
      }
    })

    return {
      slots,
      rowSortable,
      GlobalConfig,
      computedStyle,
      isObject,
      isNull,
      isBoolean,
      getClass
    }
  },
  computed: {
    computedYSpaceStyle() {
      return {
        height: this.$table?.tableFullData.length * 36 + 'px'
      }
    },
    headAlign() {
      return this.$table?.headerAlign || this.$table?.align
    },
    footAlign() {
      return this.$table?.footerAlign || this.$table?.align
    },
    scrollbarWidth() {
      return this.$table?.scrollbarWidth
    },
    leftList() {
      return this.$table?.columnStore?.leftList || []
    },
    rightList() {
      return this.$table?.columnStore?.rightList || []
    },
    headerColumn() {
      return this.isGroup ? this.sliceColumnTree(this.tableColumn) : [this.tableColumn]
    }
  },
  inject: {
    $table: {
      default: null
    }
  },
  mounted() {
    const { $el, $parent: $table, $refs } = this as GridBodyInstance
    if (!$table) return

    const { elemStore, dropConfig } = $table
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

    if (dropConfig) {
      const { plugin, row = true } = dropConfig
      plugin && row && (this.rowSortable = $table.rowDrop(this.$el))
    }
  },
  beforeUnmount() {
    this.rowSortable?.destroy()
  },
  methods: {
    // 滚动处理
    scrollEvent(event: Event) {
      // 获取表格实例
      const { $table } = this as GridBodyInstance
      if (!$table) return

      // 从表格实例中获取相关状态和引用
      const { $refs, lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad, columnStore } = $table
      const { leftList, rightList } = columnStore
      const { tableBody, tableHeader } = $refs

      // 获取表格各个部分的DOM元素
      // 表头元素(可能不存在)
      const headerElem = tableHeader ? tableHeader.$el : null
      // 表体元素
      const bodyElem = tableBody.$el

      // 获取当前表体的滚动位置
      const scrollLeft = bodyElem.scrollLeft // 水平滚动距离
      const scrollTop = bodyElem.scrollTop // 垂直滚动距离

      // 判断滚动方向
      // 通过对比上一次的滚动位置,判断是垂直滚动还是水平滚动
      const isY = scrollTop !== lastScrollTop // 是否垂直滚动
      const isX = scrollLeft !== lastScrollLeft // 是否水平滚动

      // 更新表格实例中的滚动相关状态
      $table.lastScrollTime = Date.now() // 记录最后滚动时间
      $table.lastScrollLeft = scrollLeft // 更新最后水平滚动位置
      $table.lastScrollTop = scrollTop // 更新最后垂直滚动位置
      $table.scrollDirection = isX ? 'X' : 'Y' // 记录滚动方向

      // 如果存在固定列(左固定或右固定),则处理固定列相关的类名
      if (leftList.length || rightList.length) {
        generateFixedClassName({ $table, bodyElem, leftList, rightList })
      }

      // 处理虚拟滚动的数据加载
      // 根据滚动方向(X/Y)和是否开启了对应方向的虚拟滚动来加载数据
      this.doScrollLoad({
        $table,
        _vm: this,
        bodyElem,
        event,
        headerElem,
        isX,
        isY,
        scrollLeft,
        scrollXLoad,
        scrollYLoad
      })

      // 触发表格的scroll事件,传递滚动相关的参数
      emitEvent($table, 'scroll', [{ type: 'body', scrollTop, scrollLeft, isX, isY, $table }, event])
    },

    // 处理滚动加载
    doScrollLoad({
      $table,
      _vm,
      bodyElem,
      event,
      headerElem,
      isX,
      isY,
      scrollLeft,
      scrollXLoad,
      scrollYLoad
    }: {
      $table: any
      _vm: any
      bodyElem: HTMLElement
      event: Event
      headerElem: HTMLElement | null
      isX: boolean
      isY: boolean
      scrollLeft: number
      scrollXLoad: boolean
      scrollYLoad: boolean
    }) {
      // 判断是否触发横向虚拟滚动加载,需同时满足开启了横向虚拟滚动且当前是横向滚动
      const isScrollX = scrollXLoad && isX

      // 如果是横向虚拟滚动,触发横向滚动事件,加载数据
      if (isScrollX) {
        $table.triggerScrollXEvent(event)
      }

      // 如果开启了纵向虚拟滚动且当前是纵向滚动,触发纵向滚动事件加载数据
      if (scrollYLoad && isY) {
        $table.triggerScrollYEvent(event)
      }
    },

    // 处理单元格事件
    handleCellMouseenter(event: MouseEvent, row: TableRow, column: TableColumn) {
      // 获取表格实例
      const $table = this.$parent

      // 如果表格正在进行拖动或滚动操作,则不触发鼠标事件
      if (this.isOperateMouse($table)) {
        return
      }

      // 构造事件参数对象,包含当前单元格元素、行数据、列配置和表格实例
      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement,
        row,
        column,
        $table
      }

      // 如果配置了显示单元格标题
      if (column.showTitle) {
        // 更新单元格的title属性
        updateCellTitle(event)
      }
      // 如果配置了显示tooltip提示
      else if (column.showTip || column.showTooltip) {
        // 触发tooltip显示事件
        $table.triggerTooltipEvent(event, evntParams)
      }

      // 触发单元格鼠标进入自定义事件
      emitEvent($table, 'cell-mouseenter', [evntParams, event])
    },

    handleCellMouseleave(event: MouseEvent, row: TableRow, column: TableColumn) {
      // 获取表格实例
      const $table = this.$parent

      // 如果表格正在进行拖动或滚动操作,则不触发鼠标事件
      if (this.isOperateMouse($table)) {
        return
      }

      // 如果配置了显示tooltip提示,则关闭tooltip
      if (column.showTip || column.showTooltip) {
        $table.clostTooltip()
      }

      // 构造事件参数对象,包含当前单元格元素、行数据、列配置和表格实例
      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement, // 当前单元格DOM元素
        row, // 当前行数据
        column, // 当前列配置
        $table // 表格实例
      }

      // 触发单元格鼠标离开自定义事件
      emitEvent($table, 'cell-mouseleave', [evntParams, event])
    },

    handleCellMousedown(event: MouseEvent, row: TableRow, column: TableColumn) {
      const { mouseConfig } = this.$parent
      if (mouseConfig?.checked || mouseConfig?.selected) {
        const evntParams: EventParams = {
          cell: event.currentTarget as HTMLElement,
          row,
          column,
          $table: this.$parent
        }
        this.$parent.triggerCellMousedownEvent(event, evntParams)
      }
    },

    handleCellClick(event: MouseEvent, row: TableRow, column: TableColumn) {
      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement,
        row,
        column,
        $table: this.$parent
      }
      this.$parent.triggerCellClickEvent(event, evntParams)
    },

    handleCellDblclick(event: MouseEvent, row: TableRow, column: TableColumn) {
      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement,
        row,
        column,
        $table: this.$parent
      }
      this.$parent.triggerCellDBLClickEvent(event, evntParams)
    },

    // 处理行点击
    handleRowClick(row: TableRow) {
      // TODO 此处没有用到，是AI自己生成出来的
      //   this.$parent.triggerRowClickEvent(row)
    },

    // 处理分组行折叠
    handleRowGroupFold(row: TableRow) {
      handleRowGroupFold(row, this.$parent)
      if (this.$parent.tableListeners['toggle-group-change']) {
        emitEvent(this.$parent, 'toggle-group-change', [{ $table: this.$parent, row }])
      }
    },

    // 判断是否在操作鼠标
    isOperateMouse($table: TableConfig) {
      return (
        $table._isResize ||
        ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover)
      )
    },

    // ----------- columns相关方法 -----------
    getIsDirty(row, column) {
      const $table = this.$parent
      return $table.getCellStatus(row, column)?.isDirty
    },

    // 表头相关方法
    handleHeaderMouseover(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (!this.$table) return

      const { showHeaderOverflow, showHeaderTip, headerAlign, align } = column
      const headOverflow = isNull(showHeaderOverflow) ? this.$table.showHeaderOverflow : showHeaderOverflow
      const showTitle = headOverflow === 'title'
      const showTooltip = headOverflow === true || headOverflow === 'tooltip'
      const showEllipsis = headOverflow === 'ellipsis'

      if (showTitle || showTooltip || showHeaderTip) {
        if (this.$table._isResize) {
          return
        }

        if (showTitle) {
          updateCellTitle(event, column)
        } else if (showTooltip || showHeaderTip) {
          this.$table.triggerHeaderTooltipEvent(event, {
            showHeaderTip,
            $table: this.$table,
            rowIndex,
            column,
            columnIndex,
            $columnIndex: columnIndex
          })
        }
      }
    },

    handleHeaderMouseout(event: MouseEvent, column: TableColumn) {
      const { showHeaderOverflow, showHeaderTip } = column
      const headOverflow = isNull(showHeaderOverflow) ? this.$table.showHeaderOverflow : showHeaderOverflow
      const showTooltip = headOverflow === true || headOverflow === 'tooltip'

      if (showTooltip || showHeaderTip) {
        if (this.$table._isResize) {
          return
        }

        this.$table.clostTooltip()
      }
    },

    handleHeaderClick(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (
        this.highlightCurrentColumn ||
        this.$table.tableListeners['header-cell-click'] ||
        this.mouseConfig.checked ||
        this.sortOpts.trigger === 'cell'
      ) {
        this.$table.triggerHeaderCellClickEvent(event, {
          cell: event.currentTarget as HTMLElement,
          $table: this.$table,
          rowIndex,
          column,
          columnIndex,
          $columnIndex: columnIndex
        })
      }
    },

    handleHeaderDblclick(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (this.$table.tableListeners['header-cell-dblclick']) {
        emitEvent(this.$table, 'header-cell-dblclick', [
          {
            cell: event.currentTarget as HTMLElement,
            $table: this.$table,
            rowIndex,
            column,
            columnIndex,
            $columnIndex: columnIndex
          },
          event
        ])
      }
    },

    handleHeaderMousedown(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (this.mouseConfig.checked) {
        this.$table.triggerHeaderCellMousedownEvent(event, {
          cell: event.currentTarget as HTMLElement,
          $table: this.$table,
          rowIndex,
          column,
          columnIndex,
          $columnIndex: columnIndex
        })
      }
    },

    // 表尾相关方法
    handleFooterMouseover(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      const { showOverflow, footerAlign, align } = column
      const cellOverflowValue = isNull(showOverflow) ? this.$table.showOverflow : showOverflow
      const isShowTitle = cellOverflowValue === 'title'
      const showTooltip = cellOverflowValue === true || cellOverflowValue === 'tooltip'
      const isShowEllipsis = cellOverflowValue === 'ellipsis'

      if (isShowTitle || showTooltip) {
        if (isShowTitle) {
          updateCellTitle(event, column)
        } else if (showTooltip) {
          this.$table.triggerFooterTooltipEvent(event, {
            $table: this.$table,
            rowIndex,
            column,
            columnIndex,
            $columnIndex: columnIndex
          })
        }
      }
    },

    handleFooterMouseout(event: MouseEvent, column: TableColumn) {
      const { showOverflow } = column
      const cellOverflowValue = isNull(showOverflow) ? this.$table.showOverflow : showOverflow
      const showTooltip = cellOverflowValue === true || cellOverflowValue === 'tooltip'

      if (showTooltip) {
        this.$table.clostTooltip()
      }
    },

    handleFooterClick(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (this.$table.tableListeners['footer-cell-click']) {
        emitEvent(this.$table, 'footer-cell-click', [
          {
            cell: event.currentTarget as HTMLElement,
            $table: this.$table,
            rowIndex,
            column,
            columnIndex,
            $columnIndex: columnIndex
          },
          event
        ])
      }
    },

    handleFooterDblclick(event: MouseEvent, column: TableColumn, rowIndex: number, columnIndex: number) {
      if (this.$table.tableListeners['footer-cell-dblclick']) {
        emitEvent(this.$table, 'footer-cell-dblclick', [
          {
            cell: event.currentTarget as HTMLElement,
            $table: this.$table,
            rowIndex,
            column,
            columnIndex,
            $columnIndex: columnIndex
          },
          event
        ])
      }
    },

    // 列宽调整相关方法
    resizeMousedown(event: MouseEvent, params: any) {
      if (!this.$table) return

      const { $el, $parent: $table, resizableConfig } = this
      const { clientX: dragClientX, target: dragBtnElem } = event
      const { column } = params
      const { dragLeft = 0, minInterval = 36, fixedOffsetWidth = 0 } = {}
      const { resizeBar: resizeBarElem, tableBody } = $table.$refs
      const cell = dragBtnElem?.parentNode as HTMLElement
      const dragBtnWidth = (dragBtnElem as HTMLElement)?.clientWidth || 0
      const startColumnLeft = cell?.offsetLeft || 0
      const dragBtnOffsetWidth = Math.floor(dragBtnWidth / 2)
      const tableBodyElem = tableBody?.$el
      const btnLeft =
        (dragBtnElem as HTMLElement)?.getBoundingClientRect()?.left - $el?.getBoundingClientRect()?.left || 0
      const dragMinLeft = btnLeft - (cell?.clientWidth || 0) + dragBtnWidth + minInterval
      const dragPosLeft = btnLeft + dragBtnOffsetWidth
      const { oldMousemove = document.onmousemove, oldMouseup = document.onmouseup } = {}

      // 处理拖动事件
      const handleMousemoveEvent = (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()

        const { offsetX = event.clientX - dragClientX, left = offsetX + dragPosLeft } = {}
        const scrollLeft = tableBodyElem.scrollLeft
        const args = {
          cell,
          dragMinLeft,
          dragPosLeft,
          fixedOffsetWidth,
          resizableConfig,
          scrollLeft,
          column,
          dragBtnOffsetWidth,
          startColumnLeft,
          left,
          minInterval,
          tableBodyElem
        }

        const ret = this.computeDragLeft(args)
        const currentLeft = ret.dragLeft - scrollLeft

        resizeBarElem.style.left = `${currentLeft}px`
      }

      resizeBarElem.style.display = 'block'
      addClass($table.$el, 'tiny-grid-cell__resize')
      $table._isResize = true

      document.onmousemove = handleMousemoveEvent
      document.onmouseup = () => {
        this.documentOnmouseup({
          oldMousemove,
          oldMouseup,
          column,
          dragPosLeft,
          dragLeft,
          resizeBarElem,
          $table,
          params
        })
      }
      handleMousemoveEvent(event)
    },

    computeDragLeft(args: any) {
      const { dragMinLeft, resizableConfig, scrollLeft, column, startColumnLeft, left } = args

      let dragLeft = Math.max(left, dragMinLeft)

      if (resizableConfig?.limit instanceof Function) {
        const currentMouseLeft = dragLeft - scrollLeft
        const width = resizableConfig.limit({ field: column.own.field, width: currentMouseLeft - startColumnLeft })
        dragLeft = startColumnLeft + width
      }

      return { left, dragMinLeft, dragLeft }
    },

    documentOnmouseup(args: any) {
      const { oldMousemove, oldMouseup, column, dragPosLeft, dragLeft, resizeBarElem, $table, params } = args

      document.onmousemove = oldMousemove
      document.onmouseup = oldMouseup

      let resizeWidth = column.renderWidth + dragLeft - dragPosLeft
      resizeWidth = typeof resizeWidth === 'number' ? resizeWidth : parseInt(resizeWidth, 10) || 40
      column.resizeWidth = resizeWidth < 40 ? 40 : resizeWidth

      resizeBarElem.style.display = 'none'
      removeClass($table.$el, 'tiny-grid-cell__resize')
      Object.assign($table, { _isResize: false, _lastResizeTime: Date.now() })

      $table.analyColumnWidth()
      $table.recalculate().then(() => {
        // 拖拽后，需要同步表头的scrollLeft
        const { tableBody, tableFooter, tableHeader } = $table.$refs || {}
        const headerElm = tableHeader?.$el
        const bodyElm = tableBody?.$el
        const footerElm = tableFooter?.$el
        if (!headerElm) {
          return
        }
        const elemStore = $table.elemStore
        if (bodyElm) {
          bodyElm.scrollLeft = headerElm.scrollLeft
        }
        if (footerElm) {
          footerElm.scrollLeft = headerElm.scrollLeft
        }

        if (!elemStore['main-header-repair']) {
          return
        }
        elemStore['main-body-xSpace'].style.width = elemStore['main-header-repair'].style.width
        if (elemStore['main-footer-xSpace']) {
          elemStore['main-footer-xSpace'].style.width = elemStore['main-header-repair'].style.width
        }
      })
      this.updateResizableToolbar($table)
      emitEvent($table, 'resizable-change', [params])
    },

    updateResizableToolbar($table: any) {
      const toolbarVm = $table.getVm('toolbar')

      if (toolbarVm) {
        toolbarVm.updateResizable()
      }
    }
  }
})
</script>
