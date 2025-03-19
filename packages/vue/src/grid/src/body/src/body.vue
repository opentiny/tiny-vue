<template>
  <div
    ref="body"
    class="tiny-grid__body-wrapper body__wrapper"
    :class="{ 'is__scrollload': $table.scrollLoad }"
    @scroll="scrollEvent"
  >
    <!-- 表格主体内容x轴方向虚拟滚动条占位元素 -->
    <div class="tiny-grid-body__x-space" ref="xSpace"></div>

    <!-- y轴滚动条占位元素 -->
    <div class="tiny-grid-body__y-space visual" ref="ySpace">
      <div v-if="$table.scrollLoad" class="tiny-grid-body__y-scrollbar"></div>
    </div>

    <!-- 表格主体 -->
    <table ref="table" class="tiny-grid__body" :style="{ tableLayout }" cellspacing="0" cellpadding="0" border="0">
      <!-- 列宽设置 -->
      <colgroup ref="colgroup">
        <col v-for="(column, columnIndex) in tableColumn" :key="columnIndex" :name="column.id" />
      </colgroup>

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
                { 'col__dirty': isDirty },
                { 'col__actived': columnActived },
                { 'col__valid-error': validError && validated },
                { 'col__valid-success': columnActived ? !validError && !validated : isDirty && !validated },
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
                    $seq: isOrdered
                      ? seqCount.value
                      : scrollYLoad
                        ? rowIndex + startIndex + 1
                        : hasVirtualRow && !virtualRow
                          ? afterFullData.indexOf(row) + 1
                          : rowIndex + 1,
                    seq: isOrdered
                      ? seqCount.value
                      : scrollYLoad
                        ? rowIndex + startIndex + 1
                        : hasVirtualRow && !virtualRow
                          ? afterFullData.indexOf(row) + 1
                          : rowIndex + 1,
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
import { defineComponent, ref, onBeforeUnmount, getCurrentInstance } from 'vue'
import { updateCellTitle, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import GlobalConfig from '../../config'
import { handleRowGroupFold } from '../../table/src/strategy'
import type { TableColumn, TableRow, TableConfig, EventParams, GridBodyInstance } from './types'

// 定义工具函数类型
type FormatTextFn = (text: string) => string
type GetFuncTextFn = (text: string) => string
type GetCellLabelFn = (row: TableRow, column: TableColumn, params: any) => string
type FindFn = <T>(array: T[], predicate: (item: T) => boolean) => T | undefined

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

// 定义表格样式类型
interface TableStyle {
  tableLayout: string
}

// 定义验证规则类型
interface ValidationRule {
  width?: number
  [key: string]: any
}

// 定义验证存储类型
interface ValidationStore {
  rule?: ValidationRule
  content?: string
  row?: TableRow
  column?: TableColumn
  [key: string]: any
}

// 定义验证选项类型
interface ValidationOptions {
  icon?: any
  [key: string]: any
}

// 定义列样式类型
interface ColumnStyle {
  left?: number
  right?: number
  [key: string]: any
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
  updateTableBodyHeight?: () => void
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

// 滚动、拖动过程中不需要触发鼠标移入移出事件
const isOperateMouse = ($table: TableConfig) =>
  $table._isResize || ($table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover)

let renderRowFlag = false

export default defineComponent({
  name: 'TinyGridBody',
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
    isDirty: {
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
      type: Object as PropType<ValidationStore>,
      default: () => ({})
    },
    validOpts: {
      type: Object as PropType<ValidationOptions | null>,
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
    getFuncText: {
      type: Function as PropType<GetFuncTextFn>,
      default: (text: string) => text
    },
    getCellLabel: {
      type: Function as PropType<GetCellLabelFn>,
      default: (row: TableRow, column: TableColumn, params: any) => ''
    },
    find: {
      type: Function as PropType<FindFn>,
      default: <T,>(array: T[], predicate: (item: T) => boolean) => array.find(predicate)
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
    }
  },
  setup(props, { slots }) {
    const rowSortable = ref<any>(null)

    onBeforeUnmount(() => {
      const table = getCurrentInstance()?.proxy
      if (table) {
        table.$el._onscroll = null
        table.$el.onscroll = null
      }
    })

    return {
      slots,
      rowSortable,
      GlobalConfig
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
  updated() {
    const { $parent: $table, fixedType } = this as GridBodyInstance
    if ($table && !fixedType) {
      $table.updateTableBodyHeight()
    }
  },
  methods: {
    // 滚动处理
    scrollEvent(event: Event) {
      const { $parent: $table } = this as GridBodyInstance
      if (!$table) return

      const { $refs, lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad, columnStore } = $table
      const { leftList, rightList } = columnStore
      const { tableBody, tableFooter, tableHeader } = $refs

      // 获取主表头，主表体，主表尾，左表体，右表体
      const headerElem = tableHeader ? tableHeader.$el : null
      const bodyElem = tableBody.$el
      const footerElem = tableFooter ? tableFooter.$el : null

      // 获取主表体元素的滚动位置
      const scrollLeft = bodyElem.scrollLeft
      const scrollTop = bodyElem.scrollTop

      // 对比当前滚动位置和最后一次滚动位置，来得到当前滚动的是哪个方向上的滚动条
      const isY = scrollTop !== lastScrollTop
      const isX = scrollLeft !== lastScrollLeft

      // 记录新的滚动位置和时间
      $table.lastScrollTime = Date.now()
      $table.lastScrollLeft = scrollLeft
      $table.lastScrollTop = scrollTop
      $table.scrollDirection = isX ? 'X' : 'Y'

      // 同步滚动条状态
      this.syncHeaderAndFooterScroll({ bodyElem, footerElem, headerElem, isX })

      // 处理关于冻结列最外层div类名
      if (leftList.length || rightList.length) {
        this.generateFixedClassName({ $table, bodyElem, leftList, rightList })
      }

      // 处理x和y轴方法虚拟滚动数据加载逻辑
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

      // 触发用户监听的表格滚动事件
      this.emitEvent($table, 'scroll', [{ type: 'body', scrollTop, scrollLeft, isX, isY, $table }, event])
    },

    // 同步表头和表尾滚动
    syncHeaderAndFooterScroll({
      bodyElem,
      footerElem,
      headerElem,
      isX
    }: {
      bodyElem: HTMLElement
      footerElem: HTMLElement | null
      headerElem: HTMLElement | null
      isX: boolean
    }) {
      const scrollLeft = bodyElem.scrollLeft
      if (isX && headerElem) {
        headerElem.scrollLeft = scrollLeft
      }
      if (isX && footerElem) {
        footerElem.scrollLeft = scrollLeft
      }
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
      const isScrollX = scrollXLoad && isX

      if (isScrollX) {
        $table.triggerScrollXEvent(event)
      }

      if (isScrollX && headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
        _vm.$nextTick(() => {
          if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
            headerElem.scrollLeft = bodyElem.scrollLeft
          }
        })
      }

      if (scrollYLoad && isY) {
        $table.triggerScrollYEvent(event)
      }
    },

    // 处理单元格事件
    handleCellMouseenter(event: MouseEvent, row: TableRow, column: TableColumn) {
      const $table = this.$parent
      if (this.isOperateMouse($table)) {
        return
      }

      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement,
        row,
        column,
        $table
      }

      if (column.showTitle) {
        updateCellTitle(event)
      } else if (column.showTip || column.showTooltip) {
        $table.triggerTooltipEvent(event, evntParams)
      }

      emitEvent($table, 'cell-mouseenter', [evntParams, event])
    },

    handleCellMouseleave(event: MouseEvent, row: TableRow, column: TableColumn) {
      const $table = this.$parent
      if (this.isOperateMouse($table)) {
        return
      }

      if (column.showTip || column.showTooltip) {
        $table.clostTooltip()
      }

      const evntParams: EventParams = {
        cell: event.currentTarget as HTMLElement,
        row,
        column,
        $table
      }

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
    }
  }
})
</script>
