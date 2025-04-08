<template>
  <div :class="tableClasses" :style="tableStyles">
    <!-- 隐藏列容器 - 用于存放列组件以便收集列信息 -->
    <div class="tiny-grid-hidden-column" ref="hideColumn">
      <slot></slot>
    </div>

    <!-- 表头组件 -->
    <grid-header v-if="showHeader" ref="tableHeader" v-bind="headerProps" :class="viewCls('tableHeader')" />

    <!-- 表格主体区域 -->
    <grid-body ref="tableBody" v-bind="bodyProps" :class="viewCls('tableBody')" />

    <!-- 表尾合计区域 -->
    <grid-footer v-if="showFooter" ref="tableFooter" v-bind="footerProps" :class="viewCls('tableFooter')" />

    <!-- 边框线 -->
    <div :class="['tiny-grid__border-line', viewCls('borderLine')]" />

    <!-- 列宽调整参考线 -->
    <div
      v-if="isResizable"
      ref="resizeBar"
      :class="['tiny-grid__resizable-bar', viewCls('resizeBar')]"
      :style="resizeBarStyle"
    />

    <!-- 加载中遮罩 -->
    <grid-loading :visible="loading" :loading-component="loadingComponent" :class="viewCls('gridLoading')" />

    <!-- 插件包装器容器 -->
    <div :class="`tiny-grid${id}-wrapper ${staticClass}`" ref="tableWrapper">
      <!-- 筛选面板 -->
      <grid-filter v-if="hasFilter" ref="filterWrapper" :optimize-opts="optimizeOpts" :filter-store="filterStore" />

      <!-- 右键菜单 -->
      <grid-menu v-if="isCtxMenu" ref="ctxWrapper" :ctx-menu-store="ctxMenuStore" />

      <!-- 提示框 -->
      <tooltip v-if="hasTip" ref="tooltip" v-bind="tooltipContentOpts" />

      <!-- 校验提示 -->
      <tooltip v-if="showValidTooltip" ref="validTip" class="tiny-grid__valid-error" v-bind="validTooltipOpts" />
    </div>

    <!-- 多选工具栏 -->
    <div v-if="$grid.selectToolbar" ref="selectToolbar" class="tiny-grid__select-toolbar" :style="selectToolbarStyle">
      <slot name="toolbar"></slot>
    </div>

    <!-- 多端表格组件 -->
    <mf-table v-if="!isShapeTable" ref="mfTable" v-bind="mfTableProps" />

    <!-- 表尾边框线 -->
    <div
      v-if="showFooterBorder"
      ref="footerBorder"
      :class="['tiny-grid__footer-border-line', viewCls('footerBorder')]"
      :style="{ bottom: `${footerBorderBottom}px` }"
    />
  </div>
</template>

<script lang="ts">
import { $prefix, resolveTheme, useInstanceSlots, useRelation, hooks, defineComponent } from '@opentiny/vue-common'
import { extend } from '@opentiny/utils'
import Tooltip from '@opentiny/vue-tooltip'
import { isNull, isObject, isEmptyObject, isServer } from '@opentiny/utils'
import { uniqueId, template, toNumber, isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { getRowkey, GlobalEvent, hasChildrenList, getListeners } from '@opentiny/vue-renderless/grid/utils'
import TINYGrid from '../../adapter'
import GridBody from '../../body'
import GridFilter from '../../filter'
import GridMenu from '../../menu'
import GridLoading from '../../loading'
import MfTable from '../../mobile-first/index.vue'
import GlobalConfig from '../../config'
import { error } from '../../tools'
import { clearOnTableUnmount } from './strategy'
import methods from './methods'
import { useDrag, useRowGroup } from '../../composable'

// 导入全局配置常量
const { themes, viewConfig, columnLevelKey, defaultColumnName } = GlobalConfig
const { TINY: T_TINY, SAAS: T_SAAS } = themes
const { DEFAULT: V_DEFAULT, MF: V_MF, CARD: V_CARD, LIST: V_LIST } = viewConfig
const { MF_SHOW_LIST: V_MF_LIST } = viewConfig

/**
 * 校验必要的插件是否已注册
 * @param {Object} _vm - 组件实例
 */
function verifyConfig(_vm) {
  // 校验是否设置了行主键
  if (!getRowkey(_vm)) {
    error('ui.grid.error.rowIdEmpty', true)
  }

  // 校验编辑插件
  if (!TINYGrid._edit && _vm.editConfig) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Edit' }))
  }

  // 校验验证插件
  if (!TINYGrid._valid && _vm.editRules) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Validator' }))
  }

  // 校验键盘操作插件
  if (!TINYGrid._keyboard && (_vm.keyboardConfig || _vm.mouseConfig)) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Keyboard' }))
  }

  // 校验自适应插件
  if (!TINYGrid._resize && _vm.autoResize) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Resize' }))
  }
}

/**
 * 合并虚拟滚动配置
 * @param {Object} scrollDir - 滚动方向配置
 * @param {Object} scrollDirStore - 滚动存储对象
 */
function mergeScrollDirStore(scrollDir, scrollDirStore) {
  if (scrollDir) {
    Object.assign(scrollDirStore, {
      startIndex: 0,
      visibleIndex: 0,
      adaptive: isBoolean(scrollDir.adaptive) ? scrollDir.adaptive : true,
      renderSize: toNumber(scrollDir.rSize),
      offsetSize: toNumber(scrollDir.oSize)
    })
  }
}

/**
 * 合并树形表格配置
 * @param {Object} _vm - 组件实例
 */
function mergeTreeConfig(_vm) {
  if (_vm.treeConfig) {
    const { ordered } = _vm.treeConfig
    _vm.treeOrdered = isNull(ordered) ? true : Boolean(ordered)
  }
}

/**
 * 获取表格的样式类
 * @param {Object} tableVm - 表格组件实例
 * @returns {Object} 样式类对象
 */
function getTableClasses(tableVm) {
  const { isShapeTable, vSize, editConfig, showHeader, showFooter, overflowY, overflowX, showOverflow } = tableVm
  const { showHeaderOverflow, highlightCell, optimizeOpts, stripe, border, isGroup } = tableVm
  const { loading, highlightHoverRow, highlightHoverColumn, validOpts } = tableVm
  const { stripeSaas, borderSaas, borderVertical, isThemeSaas, rowSpan } = tableVm

  // 当用户传null值，解构得到的值为null，因此需要使用fallback值
  const dropConfig = tableVm.dropConfig || {}
  const mouseConfig = tableVm.mouseConfig || {}

  return {
    'tiny-grid h-full sm:h-auto !bg-transparent sm:!bg-color-bg-1 after:border-none sm:after:border-solid': true,
    [`row__valid-${validOpts.message}`]: true,
    [`size__${vSize}`]: vSize,
    'tiny-grid-editable': editConfig,
    'show__head': showHeader,
    'show__foot': showFooter,
    'scroll__y': overflowY,
    'scroll__x': overflowX,
    'all-overflow': showOverflow,
    'all-head-overflow': showHeaderOverflow,
    'tiny-grid-cell__highlight': highlightCell,
    'tiny-grid__animat': optimizeOpts.animat,
    'tiny-grid__stripe': !isThemeSaas && stripe, // saas主题下，无此类名
    'tiny-grid__stripe-saas': isThemeSaas && stripeSaas,
    'tiny-grid__border': border || isGroup,
    'tiny-grid__border-saas': isThemeSaas && borderSaas,
    'tiny-grid__group-saas': isThemeSaas && isGroup,
    'tiny-grid__border-vertical': borderVertical,
    'tiny-grid__checked': mouseConfig.checked,
    'mark-insert': editConfig && editConfig.markInsert,
    'edit__no-border': editConfig && editConfig.showBorder === false,
    'is__loading': loading,
    'row__highlight': highlightHoverRow,
    'column__highlight': highlightHoverColumn,
    'is__row-span': rowSpan && rowSpan.length > 0,
    'row__drop-handle--index': dropConfig.rowHandle === 'index'
  }
}

/**
 * 获取表格的内联样式
 * @param {Object} tableVm - 表格组件实例
 * @returns {Object} 样式对象
 */
function getTableStyles(tableVm) {
  const { isShapeTable, maxHeight } = tableVm
  const style = {}

  // 多端表格的最大高度在多端模板中处理，此处仅处理pc端表格逻辑
  if (isShapeTable && maxHeight) {
    style.maxHeight = Number(maxHeight) ? maxHeight + 'px' : maxHeight
  }

  return style
}

/**
 * 绑定全局事件
 * @param {Object} ctx - 组件上下文
 */
const bindEvent = (ctx) => {
  GlobalEvent.on(ctx, 'mousedown', ctx.handleGlobalMousedownEvent)
  // 因为冒泡事件部分情况下被阻止继续传播，导致处理异常，因此注册 mousedown 捕获事件
  GlobalEvent.on(ctx, 'mousedown', ctx.handleGlobalMousedownCaptureEvent, true)
  GlobalEvent.on(ctx, 'blur', ctx.handleGlobalBlurEvent)
  GlobalEvent.on(ctx, 'mousewheel', ctx.handleGlobalMousewheelEvent)
  GlobalEvent.on(ctx, 'keydown', ctx.handleGlobalKeydownEvent)
  GlobalEvent.on(ctx, 'resize', ctx.handleGlobalResizeEvent)
  GlobalEvent.on(ctx, 'contextmenu', ctx.handleGlobalContextmenuEvent)
}

/**
 * 解绑全局事件
 * @param {Object} table - 表格实例
 */
const unbindEvent = (table) => {
  GlobalEvent.off(table, 'mousedown')
  GlobalEvent.off(table, 'mousedown', true)
  GlobalEvent.off(table, 'blur')
  GlobalEvent.off(table, 'mousewheel')
  GlobalEvent.off(table, 'keydown')
  GlobalEvent.off(table, 'resize')
  GlobalEvent.off(table, 'contextmenu')
}

// 导出表格组件
export default defineComponent({
  name: `${$prefix}GridTable`,
  components: {
    GridHeader: () => {},
    GridBody,
    GridFooter: () => {},
    GridFilter,
    GridMenu,
    GridLoading,
    MfTable,
    Tooltip
  },
  // 组件属性定义
  props: {
    // 所有的列对齐方式
    align: { type: String, default: () => GlobalConfig.align },
    // 是否自动监听父容器变化去更新响应式表格宽高
    autoResize: Boolean,
    // 是否带有纵向边框
    border: { type: Boolean, default: () => GlobalConfig.border },
    // 给单元格附加 className
    cellClassName: [String, Function],
    // 主键配置
    columnKey: Boolean,
    // 所有列最小宽度，把剩余宽度按比例分配
    columnMinWidth: [Number, String],
    // 所有列宽度
    columnWidth: [Number, String],
    // 快捷菜单配置项
    contextMenu: Object,
    // 初始化绑定动态列
    customs: Array,
    // 数据
    data: [Array, Object],
    // 行拖拽和列拖拽的配置
    dropConfig: Object,
    // 编辑配置项
    editConfig: [Object, Boolean],
    // 校验规则配置项
    editRules: Object,
    // 展开行配置项
    expandConfig: Object,
    // 列的宽度是否自撑开
    fit: { type: Boolean, default: () => GlobalConfig.fit },
    // 所有的表尾列的对齐方式
    footerAlign: { type: String, default: () => GlobalConfig.footerAlign },
    // 给表尾的单元格附加 className
    footerCellClassName: [String, Function],
    // 表尾合计的计算方法
    footerMethod: Function,
    // 给表尾的行附加 className
    footerRowClassName: [String, Function],
    // 表尾合并行或列
    footerSpanMethod: Function,
    // 所有的表头列的对齐方式
    headerAlign: { type: String, default: () => GlobalConfig.headerAlign },
    // 给表头的单元格附加 className
    headerCellClassName: [String, Function],
    // 给表头的行附加 className
    headerRowClassName: [String, Function],
    // 表头后置图标是否绝对定位
    headerSuffixIconAbsolute: Boolean,
    // 表格的高度
    height: [Number, String],
    // 激活单元格编辑时是否高亮显示
    highlightCell: Boolean,
    // 是否要高亮当前选中列
    highlightCurrentColumn: {
      type: Boolean,
      default: () => GlobalConfig.highlightCurrentColumn
    },
    // 是否要高亮当前选中行
    highlightCurrentRow: {
      type: Boolean,
      default: () => GlobalConfig.highlightCurrentRow
    },
    // 鼠标移到列是否要高亮显示
    highlightHoverColumn: {
      type: Boolean,
      default: () => GlobalConfig.highlightHoverColumn
    },
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: {
      type: Boolean,
      default: () => GlobalConfig.highlightHoverRow
    },
    // 是否开启异步列功能
    isAsyncColumn: Boolean,
    isCenterEmpty: Boolean,
    // 是否拖拽表头调整列顺序
    isDragHeaderSorting: Boolean,
    // 按键配置项
    keyboardConfig: Object,
    // 表格是否加载中
    loading: Boolean,
    loadingComponent: Object,
    // 表格的最大高度
    maxHeight: [Number, String],
    // 表格的最小高度
    minHeight: [Number, String],
    // 鼠标配置项
    mouseConfig: Object,
    // 优化配置项
    optimization: Object,
    // 额外的参数
    params: Object,
    // 单选配置
    radioConfig: Object,
    // 是否所有服务端筛选
    remoteFilter: Boolean,
    // 是否所有服务端排序
    remoteSort: Boolean,
    // 空数据渲染
    renderEmpty: Function,
    // 自定义表格行渲染后的逻辑
    renderRowAfter: Function,
    // 所有列是否允许拖动列宽调整大小
    resizable: { type: Boolean, default: () => GlobalConfig.resizable },
    // 可调整列宽的配置
    resizableConfig: Object,
    // 给行附加 className
    rowClassName: [String, Function],
    // 行分组配置映射表
    rowGroup: Object,
    rowId: { type: String, default: () => GlobalConfig.rowId },
    rowKey: Boolean,
    // 行合并
    rowSpan: Array,
    // 滚动加载(滚动分页加载)
    scrollLoad: Object,
    // 多选配置项
    selectConfig: Object,
    // 是否显示表尾合计
    showFooter: Boolean,
    // 是否显示表头
    showHeader: { type: Boolean, default: () => GlobalConfig.showHeader },
    // 设置表头所有内容过长时显示为省略号
    showHeaderOverflow: {
      type: [Boolean, String],
      default: () => GlobalConfig.showHeaderOverflow
    },
    // 设置所有内容过长时显示为省略号
    showOverflow: {
      type: [Boolean, String],
      default: () => GlobalConfig.showOverflow
    },
    // 表格的尺寸
    size: { type: String, default: () => GlobalConfig.size },
    // 排序配置项
    sortConfig: Object,
    // 自定义所有列的排序方法
    sortMethod: Function,
    // 全局开关控制所有的列是否可以排列
    sortable: { type: Boolean, default: true },
    // 合并行或列
    spanMethod: Function,
    // 只对 type=index 时有效，自定义序号的起始值
    startIndex: { type: Number, default: 0 },
    // 是否带有斑马纹
    stripe: { type: Boolean, default: () => GlobalConfig.stripe },
    // saas下是否带有斑马纹
    stripeSaas: { type: Boolean, default: () => GlobalConfig.stripeSaas },
    // saas下是否带有下边框线
    borderSaas: { type: Boolean, default: () => GlobalConfig.borderSaas },
    // saas下配置竖线
    borderVertical: { type: Boolean, default: () => GlobalConfig.borderVertical },
    // 默认统计配置
    summaryConfig: Object,
    // 是否自动根据状态属性去更新响应式表格宽高
    syncResize: Boolean,
    tableLayout: String,
    // tooltip 配置项
    tooltipConfig: { type: Object, default: () => ({}) },
    // 树形结构配置项
    treeConfig: Object,
    // 校验配置项
    validConfig: Object,
    // 多端卡片配置
    cardConfig: Object,
    // 视图类型
    viewType: { type: String, default: () => V_DEFAULT },
    // 移动优先视图下展示类型
    mfShow: { type: String, default: () => V_MF_LIST },
    // 列锚点
    columnAnchor: Array,
    // 表尾自定义渲染
    renderFooter: Function,
    // 多端列表配置
    listConfig: Object,
    // 多端甘特配置
    ganttConfig: Object,
    // 多端custom配置
    customConfig: Object,
    // 数据预取配置
    prefetch: [Boolean, Array],
    // 相交配置
    intersectionOption: Object,
    // 值比较方法
    equals: Function,
    // 操作列（type为index或radio或selection的列）是否可拖动列宽
    operationColumnResizable: { type: Boolean, default: () => GlobalConfig.operationColumnResizable },
    // 自动清空鼠标选中
    autoClearMouseChecked: { type: Boolean, default: true },
    // 自动清空键盘复制
    autoClearKeyboardCopy: { type: Boolean, default: false },
    // 自定义列组件名称（列表）
    customColumnNames: { type: [String, Array], default: defaultColumnName }
  },

  // 提供注入
  provide() {
    return {
      $table: this,
      $column: null // 嵌套表格场景下屏蔽父表格列
    }
  },

  // 注入依赖
  inject: {
    $grid: {
      default: null
    }
  },

  // 组件方法
  methods: {
    ...methods,
    viewCls(module) {
      return (this as any).$grid.viewCls(module)
    }
  },

  // 组件逻辑设置
  setup(props, { slots, attrs, listeners }) {
    // 获取实例
    const instance = hooks.getCurrentInstance().proxy
    const cellStatus = hooks.ref(new Map())
    // 条件处理后数据
    const afterFullData = hooks.ref([])
    // 分组表场景全量数据（包含虚拟行）
    const groupFullData = hooks.ref([])
    const elemStore = hooks.ref({})
    // 表尾高度
    const footerHeight = hooks.ref(0)
    // 缓存数据集 rowid --> { row, rowid: rowId, index }
    const fullAllDataRowIdData = hooks.ref({})
    // 缓存数据集 row --> { row, rowid: rowId, index }
    const fullAllDataRowMap = new Map()
    // 缓存数据集 columnId --> { colid: column.id, column, index }
    const fullColumnIdData = hooks.ref({})
    // 缓存数据集 column --> { colid: column.id, column, index }
    const fullColumnMap = new Map()
    const fullDataRowIdData = hooks.ref({})
    const fullDataRowMap = new Map()
    // 缓存树形表格行数据以及其父级行数据的映射关系
    const parentRowMap = new Map()
    // 临时插入数据集
    const temporaryRows = hooks.ref([])
    // 表头高度
    const headerHeight = hooks.ref(0)
    // 最后滚动位置
    const lastScrollLeft = hooks.ref(0)
    const lastScrollTop = hooks.ref(0)
    // 表格父容器的高度
    const parentHeight = hooks.ref(0)
    const scrollDirection = hooks.ref('N') // N,X,Y （滚动方向）
    // 存放横向 X 虚拟滚动相关的信息
    const scrollXStore = hooks.ref({})
    // 存放纵向 Y 虚拟滚动相关信息
    const scrollYStore = hooks.ref({})
    // 完整数据
    const tableFullData = hooks.ref([])
    // 表格高度
    const tableHeight = hooks.ref(0)
    // 表格宽度
    const tableWidth = hooks.ref(0)
    // 存放 tooltip 相关信息
    const tooltipStore = hooks.ref({})
    // 表格已挂载完成
    const afterMounted = hooks.ref(false)
    // 临时任务
    const tasks = hooks.ref({})
    // 列初始就绪
    const isColumnInitReady = hooks.ref(false)
    // 列就绪
    const isColumnReady = hooks.ref(false)
    // 分组表场景是否具有虚拟行
    const hasVirtualRow = hooks.ref(false)
    // 是否是标签式用法场景
    const isTagUsageSence = hooks.ref(false)
    // 收集列信息（列数量和列顺序）
    const columnCollectKey = hooks.ref('')
    // treeConfig.ordered的取值处理
    const treeOrdered = hooks.ref(true)
    // 存储异步加载过的行\列数据
    const asyncRenderMap = hooks.ref({})
    // 存放列相关的信息
    const columnStore = hooks.ref({
      // 自适应的列表集合
      autoList: [],
      centerList: [],
      // 左侧冻结列表集合
      leftList: [],
      // 右侧冻结列表集合
      rightList: [],
      // 固定像素宽度列表集合
      pxList: [],
      // 设置了最小宽度列表集合
      pxMinList: [],
      // 可调整列宽列表集合
      resizeList: [],
      // 百分比宽度列表集合
      scaleList: [],
      // 百分比最小宽度列表集合
      scaleMinList: []
    })
    // 存放快捷菜单的信息
    const ctxMenuStore = hooks.ref({
      list: [],
      selectChild: null,
      selected: null,
      showChild: false,
      style: null,
      visible: false
    })
    // 当前行
    const currentRow = hooks.ref(null)
    // 存放可编辑相关信息
    const editStore = hooks.ref({
      editorAutoRefreshKey: 0,
      // 激活
      actived: { column: null, row: null },
      // 所有选中
      checked: { columns: [], rows: [], tColumns: [], tRows: [] },
      // 已复制源
      copyed: { columns: [], cut: false, rows: [] },
      indexs: { columns: [] },
      insertList: [],
      removeList: [],
      // 选中源
      selected: { column: null, row: null },
      titles: { columns: [] }
    })
    // 已展开的行
    const expandeds = hooks.ref([])
    // 当前选中的筛选列
    const filterStore = hooks.ref({
      column: null,
      condition: { input: '', relation: 'equals' },
      id: '',
      multi: false,
      options: [],
      visible: false
    })
    // 表尾合计数据
    const footerData = hooks.ref([])
    // 所有列已禁用
    const headerCheckDisabled = hooks.ref(false)
    // 是否全选
    const isAllSelected = hooks.ref(false)
    // 多选属性，有选中且非全选状态
    const isIndeterminate = hooks.ref(false)
    // 是否存在横向滚动条
    const overflowX = hooks.ref(false)
    // 是否存在纵向滚动条
    const overflowY = hooks.ref(true)
    // 存储滚动加载，上次滚动的位置
    const scrollLoadStore = hooks.ref({ bodyHeight: 0, scrollHeight: 0 })
    // 是否启用了横向 X 可视渲染方式加载
    const scrollXLoad = hooks.ref(false)
    // 是否启用了纵向 Y 可视渲染方式加载
    const scrollYLoad = hooks.ref(false)
    // 横向滚动条的高度
    const scrollbarHeight = hooks.ref(0)
    // 纵向滚动条的宽度
    const scrollbarWidth = hooks.ref(0)
    // 单选属性，选中行
    const selectRow = hooks.ref(null)
    // 存放多选工具栏相关信息
    const selectToolbarStore = hooks.ref({
      layout: { height: 0, left: 0, top: 0, width: 0, zIndex: 1 },
      visible: false
    })
    // 多选属性，已选中的列
    const selection = hooks.ref([])
    // 渲染中的数据
    const tableData = hooks.ref([])
    // tooltip提示内容
    const tooltipContent = hooks.ref('')
    // tooltip提示内容是否处理换行字符
    const tooltipContentPre = hooks.ref(false)
    // 已展开树节点
    const treeExpandeds = hooks.ref([])
    // 树节点不确定状态的列表
    const treeIndeterminates = hooks.ref([])
    // 存放数据校验相关信息
    const validStore = hooks.ref({
      column: null,
      content: '',
      isArrow: false,
      row: null,
      rule: null,
      visible: false
    })
    // 校验tip提示内容
    const validTipContent = hooks.ref('')
    // 在编辑模式下 单元格在失去焦点验证的状态
    const validatedMap = hooks.ref({})
    // 表尾边框线是否显示和位置
    const showFooterBorder = hooks.ref(false)
    const footerBorderBottom = hooks.ref(0)
    const tableBodyHeight = hooks.ref(0)

    // 创建ID
    const id = hooks.ref(uniqueId())

    // 列相关状态
    const collectColumn = hooks.ref([])
    const tableFullColumn = hooks.ref([])
    const visibleColumn = hooks.ref([])
    const tableColumn = hooks.ref([])

    // 主题相关
    const tinyTheme = hooks.ref(resolveTheme(props))

    // 静态样式类
    const staticClass = attrs.class || ''

    // 计算属性
    const isGroup = hooks.computed(() => {
      return collectColumn.value.some((column) => hasChildrenList(column))
    })

    const isShapeTable = hooks.computed(() => {
      // 表格处于默认视图或mf视图大屏时显示为普通表格；其它视图都显示为多端形式
      return props.viewType === V_DEFAULT || (props.viewType === V_MF && props.$grid?.currentBreakpoint !== 'default')
    })

    const isCardOrListView = hooks.computed(() => {
      return props.viewType === V_CARD || props.viewType === V_LIST
    })

    const isThemeSaas = hooks.computed(() => {
      return tinyTheme.value === T_SAAS
    })

    const isThemeTiny = hooks.computed(() => {
      return tinyTheme.value === T_TINY
    })

    const computerTableBodyHeight = hooks.computed(() => {
      return tableBodyHeight.value === 0 ? 'calc(100% - 36px)' : `${tableBodyHeight.value}px`
    })

    const vSize = hooks.computed(() => {
      return props.size
    })

    const emptyText = hooks.computed(() => {
      return GlobalConfig.i18n('ui.grid.emptyText')
    })

    const validOpts = hooks.computed(() => {
      const config = Object.assign(
        { message: 'tooltip' },
        GlobalConfig.validConfig,
        props.$grid?.designConfig?.validConfig,
        props.validConfig
      )

      config.isMessageTooltip = config.message === 'tooltip'
      config.isMessageDefault = config.message === 'default'
      config.isMessageInline = config.message === 'inline'

      return config
    })

    const tableClasses = hooks.computed(() =>
      getTableClasses({
        // 从props传入的参数
        ...props,
        // 从state中解构的参数
        editConfig: props.editConfig,
        showHeader: props.showHeader,
        showFooter: props.showFooter,
        overflowY: overflowY.value,
        overflowX: overflowX.value,
        loading: props.loading,
        editRules: props.editRules,
        mouseConfig: props.mouseConfig || {},
        dropConfig: props.dropConfig || {},
        rowSpan: props.rowSpan,

        // 计算属性的值
        isShapeTable: isShapeTable.value,
        vSize: vSize.value,
        isGroup: isGroup.value,
        isThemeSaas: isThemeSaas.value,
        validOpts: validOpts.value,
        optimizeOpts: optimizeOpts.value,

        // 其他必要的状态值
        stripe: props.stripe,
        border: props.border,
        borderSaas: props.borderSaas,
        borderVertical: props.borderVertical,
        highlightCell: props.highlightCell,
        highlightHoverRow: props.highlightHoverRow,
        highlightHoverColumn: props.highlightHoverColumn
      })
    )

    const tableStyles = hooks.computed(() =>
      getTableStyles({
        isShapeTable: isShapeTable.value,
        maxHeight: props.maxHeight
      })
    )

    const optimizeOpts = hooks.computed(() => {
      return extend(true, {}, GlobalConfig.optimization, props.optimization)
    })

    const resizeBarStyle = hooks.computed(() => {
      return overflowX.value ? { 'padding-bottom': `${scrollbarHeight.value}px` } : null
    })

    // 多端表格属性
    const mfTableProps = hooks.computed(() => {
      return {
        tableData: tableData.value,
        tableColumn: tableColumn.value,
        visibleColumn: visibleColumn.value,
        collectColumn: collectColumn.value,
        size: vSize.value,
        isGroup: isGroup.value,
        resizableConfig: props.resizableConfig,
        cardConfig: props.cardConfig,
        listConfig: props.listConfig,
        ganttConfig: props.ganttConfig,
        customConfig: props.customConfig
      }
    })

    // 表头属性
    const headerProps = hooks.computed(() => {
      return {
        tableData: tableData.value,
        tableColumn: tableColumn.value,
        visibleColumn: visibleColumn.value,
        collectColumn: collectColumn.value,
        size: vSize.value,
        isGroup: isGroup.value,
        resizableConfig: props.resizableConfig
      }
    })

    // 表体属性
    const bodyProps = hooks.computed(() => {
      return {
        tableData: tableData.value,
        tableColumn: tableColumn.value,
        visibleColumn: visibleColumn.value,
        collectColumn: collectColumn.value,
        size: vSize.value,
        isGroup: isGroup.value,
        resizableConfig: props.resizableConfig
      }
    })

    // 表尾属性
    const footerProps = hooks.computed(() => {
      return {
        footerData: footerData.value,
        footerMethod: props.footerMethod,
        tableColumn: tableColumn.value,
        visibleColumn: visibleColumn.value,
        size: vSize.value
      }
    })

    // tooltip相关
    const tooltipContentOpts = hooks.computed(() => {
      return extend(
        true,
        {
          content: tooltipContent.value,
          pre: tooltipContentPre.value,
          placement: 'right',
          type: props.tooltipConfig.effect ? undefined : 'normal'
        },
        props.tooltipConfig
      )
    })

    const validTooltipOpts = hooks.computed(() => {
      return extend(
        true,
        {
          isArrow: false,
          placement: 'top',
          type: 'error',
          content: validTipContent.value
        },
        props.tooltipConfig
      )
    })

    const showValidTooltip = hooks.computed(() => {
      return (
        props.hasTip &&
        props.editRules &&
        (validOpts.value.isMessageDefault ? !props.height : validOpts.value.isMessageTooltip)
      )
    })

    const selectToolbarStyle = hooks.computed(() => {
      const { visible, layout } = selectToolbarStore.value
      return [
        layout,
        {
          visibility: visible ? 'visible' : 'hidden'
        }
      ]
    })

    /**
     * 判断表格是否有过滤功能
     * 通过检查每一列的filter属性是否为非空对象来判断
     * @returns {boolean} 是否有过滤功能
     */
    const hasFilter = hooks.computed(() => {
      return tableColumn.value.some((column) => isObject(column.filter) && !isEmptyObject(column.filter))
    })

    /**
     * 判断表格是否有tooltip功能
     * 通过检查TINYGrid是否注册了tooltip插件来判断
     * @returns {boolean} 是否有tooltip功能
     */
    const hasTip = hooks.computed(() => {
      return TINYGrid._tooltip
    })

    /**
     * 判断表格是否可调整列宽
     * 当全局resizable为true或任一列的resizable为true时返回true
     * @returns {boolean} 是否可调整列宽
     */
    const isResizable = hooks.computed(() => {
      return props.resizable || tableFullColumn.value.some((column) => column.resizable)
    })

    /**
     * 判断表格是否有右键菜单
     * 通过检查右键菜单列表中是否有菜单项来判断
     * @returns {boolean} 是否有右键菜单
     */
    const isCtxMenu = hooks.computed(() => {
      return ctxMenuStore.value?.list?.some((item) => item.length > 0)
    })

    /**
     * 获取排序配置
     * 将全局排序配置与组件传入的排序配置深度合并
     * @returns {Object} 合并后的排序配置对象
     */
    const sortOpts = hooks.computed(() => {
      return extend(true, {}, GlobalConfig.sortConfig, props.sortConfig)
    })
    // 初始化列
    const initColumns = () => {
      // 初始化表格实例的插槽
      useInstanceSlots()

      // 使用 useRelation 处理列与列之间的关系
      // 主要用于处理多级表头、列分组等场景
      useRelation({
        // 关系标识,由列级别key和表格id组成,用于标识列之间的层级关系
        relationKey: `${columnLevelKey}-${id.value}`,
        // 子列的属性名称
        childrenKey: 'childColumns',
        // 获取隐藏列容器DOM元素
        relationContainer: () => (!isServer ? instance.$el.querySelector('.tiny-grid-hidden-column') : null),
        // 当列关系发生变化时的回调函数
        onChange: () => {
          // 计算列收集的key值
          const collectKey = instance.computeCollectKey()

          // 如果key值发生变化,说明列结构有更新
          if (collectKey !== columnCollectKey.value) {
            // 更新列收集key值
            columnCollectKey.value = collectKey
            // 重新组装列配置
            instance.assembleColumns()
          }
        }
      })

      // 初始化列拖拽功能
      // 用于实现列的拖拽排序、拖拽调整宽度等功能
      useDrag({
        // 拖拽配置,响应式获取props中的dropConfig
        dropConfig: hooks.computed(() => props.dropConfig),
        // 收集的列配置
        collectColumn,
        // 表格当前显示的列
        tableColumn
      })

      // 初始化行分组功能
      // 用于实现表格数据的分组展示
      useRowGroup({
        // 行分组配置,响应式获取props中的rowGroup
        rowGroup: hooks.computed(() => props.rowGroup),
        // 当前可见的列
        visibleColumn,
        // 完整的表格列配置
        tableFullColumn,
        // 表格当前显示的列
        tableColumn
      })
    }

    // 监听数据变化
    // 监听表格数据变化
    hooks.watch(
      // 监听props中的data属性
      () => props.data,
      // 当data发生变化时的回调函数
      (newData) => {
        // 判断新数据是否为数组类型
        if (Array.isArray(newData)) {
          // 1. 加载新的表格数据,第二个参数true表示重置表格状态
          // 2. 处理默认行为,如默认选中、展开等
          // 3. 处理表头选择框状态
          instance.loadTableData(newData, true).then(instance.handleDefault).then(instance.handleSelectionHeader)
        }
      }
    )

    hooks.watch(
      () => props.height,
      () => {
        instance.recalculate()
      }
    )

    // 监听列配置变化
    hooks.watch(
      // 监听收集的列配置
      () => collectColumn.value,
      // 当列配置发生变化时的回调函数
      (value) => {
        // 调用实例方法处理列变化
        // 主要用于:
        // 1. 重新计算列宽
        // 2. 更新固定列
        // 3. 处理列的显示/隐藏状态
        instance.watchColumn(value)
      }
    )

    hooks.watch(
      () => tableColumn.value,
      () => {
        // 对所有列的列宽进行分类：百分比/px
        instance.analyColumnWidth()
        // 处理空数据时表头是否禁用
        instance.handleSelectionHeader()
      }
    )

    hooks.watch(
      () => parentHeight.value,
      () => {
        instance.recalculate()
      }
    )

    // 生命周期钩子
    hooks.onBeforeUnmount(() => {
      // 获取表格包装器DOM引用
      const tableWrapper = instance.$refs.tableWrapper

      // 如果表格包装器存在且有父节点,从DOM中移除表格包装器
      if (tableWrapper && tableWrapper.parentNode) {
        tableWrapper.parentNode.removeChild(tableWrapper)
      }

      // 如果启用了表格大小调整功能,解绑相关事件监听
      if (TINYGrid._resize) {
        instance.unbindResize()
      }

      // 关闭筛选面板
      instance.closeFilter()
      // 关闭右键菜单
      instance.closeMenu()

      // 解绑所有表格相关的事件监听器
      unbindEvent(instance)
      // 清理表格卸载时的状态和缓存
      clearOnTableUnmount(instance)
    })

    hooks.onActivated(() => {
      // 检查是否存在上次滚动位置的记录
      if (lastScrollLeft.value || lastScrollTop.value) {
        // 恢复表格到上次的滚动位置
        instance.scrollTo(lastScrollLeft.value, lastScrollTop.value)

        // 如果启用了横向虚拟滚动,触发横向滚动事件
        // 用于加载新的列数据
        scrollXLoad.value && instance.triggerScrollXEvent()

        // 如果启用了纵向虚拟滚动,触发纵向滚动事件
        // 传入上次的滚动位置,用于加载新的行数据
        scrollYLoad.value && instance.triggerScrollYEvent({ target: { scrollTop: lastScrollTop.value } })
      }

      // 重新绑定表格相关的事件监听器
      // 包括滚动、点击、键盘等事件
      bindEvent(instance)
    })

    // 初始化
    const initialize = () => {
      const optimizeProps = optimizeOpts.value

      // 判断表格对应的插件是否注册
      verifyConfig(instance)

      // 合并用户传递过来的虚拟滚动相关逻辑
      mergeScrollDirStore(optimizeProps.scrollX, scrollXStore.value)
      mergeScrollDirStore(optimizeProps.scrollY, scrollYStore.value)

      // 合并树表配置项
      mergeTreeConfig(instance)

      // 初始化表格渲染数据
      if (props.data && props.data.length > 0) {
        instance.loadTableData(props.data, true).then(() => {
          instance.handleDefault()
          instance.updateStyle()
        })
      }

      bindEvent(instance)

      // 设置表格实例
      if (props.$grid) {
        props.$grid.connect({ name: 'table', vm: instance })
      }
    }

    // 初始化列
    initColumns()

    // 挂载后处理
    hooks.nextTick().then(() => {
      // 调用初始化函数,完成表格的初始化配置和数据加载
      initialize()
      // 标记表格已完成挂载
      afterMounted.value = true

      // 如果开启了自动调整大小功能且已注册了resize插件
      if (props.autoResize && TINYGrid._resize) {
        // 绑定resize事件监听器,用于响应容器大小变化
        instance.bindResize()
      }

      // 延迟执行表格底部边框相关的处理
      setTimeout(() => {
        // 获取表格底部组件实例
        const tableFooter = instance.$refs.tableFooter
        // 根据是否存在底部组件来设置是否显示底部边框
        showFooterBorder.value = !!tableFooter
        // 获取底部组件的实际高度,用于设置底部边框的位置
        // 如果底部组件存在则获取其高度,否则为0
        footerBorderBottom.value = tableFooter ? tableFooter.$el.getBoundingClientRect().height : 0
      })
    })
    const tableListeners = getListeners(attrs, listeners)
    return {
      cellStatus,
      afterFullData,
      afterMounted,
      asyncRenderMap,
      columnCollectKey,
      columnStore,
      ctxMenuStore,
      currentRow,
      editStore,
      expandeds,
      filterStore,
      footerData,
      headerCheckDisabled,
      isAllSelected,
      isIndeterminate,
      overflowX,
      overflowY,
      scrollLoadStore,
      scrollXLoad,
      scrollYLoad,
      scrollbarHeight,
      scrollbarWidth,
      selectRow,
      selectToolbarStore,
      selection,
      tableData,
      tooltipContent,
      tooltipContentPre,
      treeExpandeds,
      treeIndeterminates,
      validStore,
      validTipContent,
      validatedMap,
      showFooterBorder,
      footerBorderBottom,
      tableBodyHeight,
      parentHeight,
      fullDataRowIdData,
      tableListeners,
      groupFullData,
      elemStore,
      fullAllDataRowIdData,
      fullAllDataRowMap,
      fullColumnIdData,
      fullColumnMap,
      fullDataRowMap,
      parentRowMap,
      temporaryRows,
      headerHeight,
      lastScrollLeft,
      lastScrollTop,
      scrollDirection,
      scrollXStore,
      scrollYStore,
      tableFullData,
      tableHeight,
      tableWidth,
      footerHeight,
      tooltipStore,
      tableFullColumn,
      visibleColumn,
      tableColumn,
      tasks,
      isColumnInitReady,
      isColumnReady,
      hasVirtualRow,
      isTagUsageSence,
      treeOrdered,
      collectColumn,
      // 计算属性
      id,
      tinyTheme,
      isShapeTable,
      isCardOrListView,
      isGroup,
      vSize,
      hasFilter,
      hasTip,
      isResizable,
      isCtxMenu,
      isThemeSaas,
      isThemeTiny,
      computerTableBodyHeight,
      tableClasses,
      tableStyles,
      optimizeOpts,
      resizeBarStyle,
      mfTableProps,
      headerProps,
      bodyProps,
      footerProps,
      tooltipContentOpts,
      validOpts,
      validTooltipOpts,
      showValidTooltip,
      selectToolbarStyle,
      staticClass,
      emptyText,
      sortOpts
    }
  }
})
</script>
