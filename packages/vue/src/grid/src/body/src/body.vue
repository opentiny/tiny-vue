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
    <table
      ref="table"
      class="tiny-grid__body"
      :style="{ tableLayout }"
      cellspacing="0"
      cellpadding="0"
      border="0"
      :data-tableid="$table.id"
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
import { updateCellTitle, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import GlobalConfig from '../../config'
import { handleRowGroupFold } from '../../table/src/strategy'
import { generateFixedClassName } from '../../table/src/utils/handleFixedColumn'
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
    const rowSortable = hooks.ref<any>(null)

    hooks.onBeforeUnmount(() => {
      const table = hooks.getCurrentInstance()?.proxy
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
  methods: {
    // 滚动处理
    scrollEvent(event: Event) {
      // 获取表格实例
      const { $parent: $table } = this as GridBodyInstance
      if (!$table) return

      // 从表格实例中获取相关状态和引用
      const { $refs, lastScrollLeft, lastScrollTop, scrollXLoad, scrollYLoad, columnStore } = $table
      const { leftList, rightList } = columnStore
      const { tableBody, tableFooter, tableHeader } = $refs

      // 获取表格各个部分的DOM元素
      // 表头元素(可能不存在)
      const headerElem = tableHeader ? tableHeader.$el : null
      // 表体元素
      const bodyElem = tableBody.$el
      // 表尾元素(可能不存在)
      const footerElem = tableFooter ? tableFooter.$el : null

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

      // 同步表头和表尾的滚动位置,保持三者滚动同步
      this.syncHeaderAndFooterScroll({ bodyElem, footerElem, headerElem, isX })

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
      // 判断是否触发横向虚拟滚动加载,需同时满足开启了横向虚拟滚动且当前是横向滚动
      const isScrollX = scrollXLoad && isX

      // 如果是横向虚拟滚动,触发横向滚动事件,加载数据
      if (isScrollX) {
        $table.triggerScrollXEvent(event)
      }

      // 当横向滚动到最右侧时,需要同步表头的滚动位置
      // scrollLeft + clientWidth >= scrollWidth 表示滚动到最右侧
      if (isScrollX && headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
        _vm.$nextTick(() => {
          // 如果表头和表体的滚动位置不一致,则同步表头的滚动位置
          if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
            headerElem.scrollLeft = bodyElem.scrollLeft
          }
        })
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
    }
  }
})
</script>
