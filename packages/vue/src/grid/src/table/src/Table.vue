<template>
  <div :class="tableClasses" :style="tableStyles">
    <!-- 隐藏列 -->
    <div class="tiny-grid-hidden-column" ref="hideColumn">
      <slot></slot>
    </div>

    <!-- 表头 -->
    <grid-header v-if="showHeader" ref="tableHeader" v-bind="headerProps" :class="viewCls('tableHeader')" />

    <!-- 空数据提示 -->
    <div
      v-if="isCenterEmpty && !tableData.length"
      :class="[{ 'empty-center-block': !isCardOrListView }, viewCls('emptyData')]"
      :style="{ height: computerTableBodyHeight }"
    >
      <slot name="empty">
        <p class="tiny-grid__empty-img"></p>
        <span class="tiny-grid__empty-text">{{ emptyText }}</span>
      </slot>
    </div>

    <!-- 表格主体 -->
    <grid-body ref="tableBody" v-bind="bodyProps" :class="viewCls('tableBody')" />

    <!-- 表尾 -->
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

    <!-- 加载中 -->
    <grid-loading :visible="loading" :loading-component="loadingComponent" :class="viewCls('gridLoading')" />

    <!-- 插件包装器 -->
    <div :class="`tiny-grid${id}-wrapper ${staticClass}`" ref="tableWrapper">
      <!-- 筛选 -->
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

    <!-- 多端表格 -->
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
import { defineComponent, ref, computed, onBeforeUnmount, onActivated, nextTick, watch } from 'vue'
import { $prefix, resolveTheme, useInstanceSlots, useRelation, hooks } from '@opentiny/vue-common'
import { extend } from '@opentiny/utils'
import Tooltip from '@opentiny/vue-tooltip'
import { isNull, isObject, isEmptyObject, isServer } from '@opentiny/utils'
import { uniqueId, template, toNumber, isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { getRowkey, GlobalEvent, hasChildrenList, getListeners } from '@opentiny/vue-renderless/grid/utils'
import TINYGrid from '../../adapter'
import GridHeader from '../../header'
import GridFooter from '../../footer'
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

const { themes, viewConfig, columnLevelKey, defaultColumnName } = GlobalConfig
const { TINY: T_TINY, SAAS: T_SAAS } = themes
const { DEFAULT: V_DEFAULT, MF: V_MF, CARD: V_CARD, LIST: V_LIST } = viewConfig
const { MF_SHOW_LIST: V_MF_LIST } = viewConfig

const hiddenContainerClass = 'tiny-grid-hidden-column'

// 校验插件是否被注册
function verifyConfig(_vm) {
  if (!getRowkey(_vm)) {
    error('ui.grid.error.rowIdEmpty', true)
  }

  if (!TINYGrid._edit && _vm.editConfig) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Edit' }))
  }

  if (!TINYGrid._valid && _vm.editRules) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Validator' }))
  }

  if (!TINYGrid._keyboard && (_vm.keyboardConfig || _vm.mouseConfig)) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Keyboard' }))
  }

  if (!TINYGrid._resize && _vm.autoResize) {
    throw new Error(template(error('ui.grid.error.reqModule', true), { name: 'Resize' }))
  }
}

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

function mergeTreeConfig(_vm) {
  if (_vm.treeConfig) {
    const { ordered } = _vm.treeConfig
    _vm.treeOrdered = isNull(ordered) ? true : Boolean(ordered)
  }
}

// 设置表格最外层元素类名
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

function getTableStyles(tableVm) {
  const { isShapeTable, maxHeight } = tableVm
  const style = {}

  // 多端表格的最大高度在多端模板中处理，此处仅处理pc端表格逻辑
  if (isShapeTable && maxHeight) {
    style.maxHeight = Number(maxHeight) ? maxHeight + 'px' : maxHeight
  }

  return style
}

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

const unbindEvent = (table) => {
  GlobalEvent.off(table, 'mousedown')
  GlobalEvent.off(table, 'mousedown', true)
  GlobalEvent.off(table, 'blur')
  GlobalEvent.off(table, 'mousewheel')
  GlobalEvent.off(table, 'keydown')
  GlobalEvent.off(table, 'resize')
  GlobalEvent.off(table, 'contextmenu')
}

export default defineComponent({
  name: `${$prefix}GridTable`,
  components: {
    GridHeader,
    GridBody,
    GridFooter,
    GridFilter,
    GridMenu,
    GridLoading,
    MfTable,
    Tooltip
  },
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
  provide() {
    return {
      $table: this,
      // 嵌套表格屏蔽父表格列
      $column: null
    }
  },
  inject: {
    $grid: {
      default: null
    }
  },
  methods: {
    ...methods,
    viewCls(module) {
      return (this as any).$grid.viewCls(module)
    }
  },
  setup(props, { slots, attrs, listeners }) {
    // 获取实例
    const instance = hooks.getCurrentInstance().proxy
    // 条件处理后数据
    const afterFullData = ref([])
    // 分组表场景全量数据（包含虚拟行）
    const groupFullData = ref([])
    const elemStore = ref({})
    // 表尾高度
    const footerHeight = ref(0)
    // 缓存数据集 rowid --> { row, rowid: rowId, index }
    const fullAllDataRowIdData = ref({})
    // 缓存数据集 row --> { row, rowid: rowId, index }
    const fullAllDataRowMap = new Map()
    // 缓存数据集 columnId --> { colid: column.id, column, index }
    const fullColumnIdData = ref({})
    // 缓存数据集 column --> { colid: column.id, column, index }
    const fullColumnMap = new Map()
    const fullDataRowIdData = ref({})
    const fullDataRowMap = new Map()
    // 缓存树形表格行数据以及其父级行数据的映射关系
    const parentRowMap = new Map()
    // 临时插入数据集
    const temporaryRows = ref([])
    // 表头高度
    const headerHeight = ref(0)
    // 最后滚动位置
    const lastScrollLeft = ref(0)
    const lastScrollTop = ref(0)
    // 表格父容器的高度
    const parentHeight = ref(0)
    const scrollDirection = ref('N') // N,X,Y （滚动方向）
    // 存放横向 X 虚拟滚动相关的信息
    const scrollXStore = ref({})
    // 存放纵向 Y 虚拟滚动相关信息
    const scrollYStore = ref({})
    // 完整数据
    const tableFullData = ref([])
    // 表格高度
    const tableHeight = ref(0)
    // 表格宽度
    const tableWidth = ref(0)
    // 存放 tooltip 相关信息
    const tooltipStore = ref({})
    // 表格已挂载完成
    const afterMounted = ref(false)
    // 临时任务
    const tasks = ref({})
    // 列初始就绪
    const isColumnInitReady = ref(false)
    // 列就绪
    const isColumnReady = ref(false)
    // 分组表场景是否具有虚拟行
    const hasVirtualRow = ref(false)
    // 是否是标签式用法场景
    const isTagUsageSence = ref(false)
    // 收集列信息（列数量和列顺序）
    const columnCollectKey = ref('')
    // treeConfig.ordered的取值处理
    const treeOrdered = ref(true)
    // 存储异步加载过的行\列数据
    const asyncRenderMap = ref({})
    // 存放列相关的信息
    const columnStore = ref({
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
    const ctxMenuStore = ref({
      list: [],
      selectChild: null,
      selected: null,
      showChild: false,
      style: null,
      visible: false
    })
    // 当前行
    const currentRow = ref(null)
    // 存放可编辑相关信息
    const editStore = ref({
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
    const expandeds = ref([])
    // 当前选中的筛选列
    const filterStore = ref({
      column: null,
      condition: { input: '', relation: 'equals' },
      id: '',
      multi: false,
      options: [],
      visible: false
    })
    // 表尾合计数据
    const footerData = ref([])
    // 所有列已禁用
    const headerCheckDisabled = ref(false)
    // 是否全选
    const isAllSelected = ref(false)
    // 多选属性，有选中且非全选状态
    const isIndeterminate = ref(false)
    // 是否存在横向滚动条
    const overflowX = ref(false)
    // 是否存在纵向滚动条
    const overflowY = ref(true)
    // 存储滚动加载，上次滚动的位置
    const scrollLoadStore = ref({ bodyHeight: 0, scrollHeight: 0 })
    // 是否启用了横向 X 可视渲染方式加载
    const scrollXLoad = ref(false)
    // 是否启用了纵向 Y 可视渲染方式加载
    const scrollYLoad = ref(false)
    // 横向滚动条的高度
    const scrollbarHeight = ref(0)
    // 纵向滚动条的宽度
    const scrollbarWidth = ref(0)
    // 单选属性，选中行
    const selectRow = ref(null)
    // 存放多选工具栏相关信息
    const selectToolbarStore = ref({
      layout: { height: 0, left: 0, top: 0, width: 0, zIndex: 1 },
      visible: false
    })
    // 多选属性，已选中的列
    const selection = ref([])
    // 渲染中的数据
    const tableData = ref([])
    // tooltip提示内容
    const tooltipContent = ref('')
    // tooltip提示内容是否处理换行字符
    const tooltipContentPre = ref(false)
    // 已展开树节点
    const treeExpandeds = ref([])
    // 树节点不确定状态的列表
    const treeIndeterminates = ref([])
    // 存放数据校验相关信息
    const validStore = ref({
      column: null,
      content: '',
      isArrow: false,
      row: null,
      rule: null,
      visible: false
    })
    // 校验tip提示内容
    const validTipContent = ref('')
    // 在编辑模式下 单元格在失去焦点验证的状态
    const validatedMap = ref({})
    // 表尾边框线是否显示和位置
    const showFooterBorder = ref(false)
    const footerBorderBottom = ref(0)
    const tableBodyHeight = ref(0)

    // 创建ID
    const id = ref(uniqueId())

    // 列相关状态
    const collectColumn = ref([])
    const tableFullColumn = ref([])
    const visibleColumn = ref([])
    const tableColumn = ref([])
    // 主题相关
    const tinyTheme = ref(resolveTheme(props))

    // 静态样式类
    const staticClass = attrs.class || ''

    // 计算属性
    const isGroup = computed(() => {
      return collectColumn.value.some((column) => hasChildrenList(column))
    })

    const isShapeTable = computed(() => {
      // 表格处于默认视图或mf视图大屏时显示为普通表格；其它视图都显示为多端形式
      return props.viewType === V_DEFAULT || (props.viewType === V_MF && props.$grid?.currentBreakpoint !== 'default')
    })

    const isCardOrListView = computed(() => {
      return props.viewType === V_CARD || props.viewType === V_LIST
    })

    const isThemeSaas = computed(() => {
      return tinyTheme.value === T_SAAS
    })

    const isThemeTiny = computed(() => {
      return tinyTheme.value === T_TINY
    })

    const computerTableBodyHeight = computed(() => {
      return tableBodyHeight.value === 0 ? 'calc(100% - 36px)' : `${tableBodyHeight.value}px`
    })

    const vSize = computed(() => {
      return props.size
    })

    const emptyText = computed(() => {
      return GlobalConfig.i18n('ui.grid.emptyText')
    })

    const validOpts = computed(() => {
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

    const tableClasses = computed(() =>
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

    const tableStyles = computed(() =>
      getTableStyles({
        isShapeTable: isShapeTable.value,
        maxHeight: props.maxHeight
      })
    )

    const optimizeOpts = computed(() => {
      return extend(true, {}, GlobalConfig.optimization, props.optimization)
    })

    const resizeBarStyle = computed(() => {
      return overflowX.value ? { 'padding-bottom': `${scrollbarHeight.value}px` } : null
    })

    // 多端表格属性
    const mfTableProps = computed(() => {
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
    const headerProps = computed(() => {
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
    const bodyProps = computed(() => {
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
    const footerProps = computed(() => {
      return {
        footerData: footerData.value,
        footerMethod: props.footerMethod,
        tableColumn: tableColumn.value,
        visibleColumn: visibleColumn.value,
        size: vSize.value
      }
    })

    // tooltip相关
    const tooltipContentOpts = computed(() => {
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

    const validTooltipOpts = computed(() => {
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

    const showValidTooltip = computed(() => {
      return (
        props.hasTip &&
        props.editRules &&
        (validOpts.value.isMessageDefault ? !props.height : validOpts.value.isMessageTooltip)
      )
    })

    const selectToolbarStyle = computed(() => {
      const { visible, layout } = selectToolbarStore.value
      return [
        layout,
        {
          visibility: visible ? 'visible' : 'hidden'
        }
      ]
    })

    const hasFilter = computed(() => {
      return tableColumn.value.some((column) => isObject(column.filter) && !isEmptyObject(column.filter))
    })

    const hasTip = computed(() => {
      return TINYGrid._tooltip
    })

    const isResizable = computed(() => {
      return props.resizable || tableFullColumn.value.some((column) => column.resizable)
    })

    const isCtxMenu = computed(() => {
      return ctxMenuStore.value?.list?.some((item) => item.length > 0)
    })

    const sortOpts = computed(() => {
      return extend(true, {}, GlobalConfig.sortConfig, props.sortConfig)
    })
    // 初始化列
    const initColumns = () => {
      // 使用 useRelation 进行列关系处理
      useInstanceSlots()

      useRelation({
        relationKey: `${columnLevelKey}-${id.value}`,
        childrenKey: 'childColumns',
        relationContainer: () => (!isServer ? instance.$el.querySelector(`.${hiddenContainerClass}`) : null),
        onChange: () => {
          const collectKey = instance.computeCollectKey()

          if (collectKey !== columnCollectKey.value) {
            columnCollectKey.value = collectKey
            instance.assembleColumns()
          }
        }
      })

      // 拖拽相关初始化
      useDrag({
        dropConfig: computed(() => props.dropConfig),
        collectColumn,
        tableColumn
      })

      // 行分组相关初始化
      useRowGroup({
        rowGroup: computed(() => props.rowGroup),
        visibleColumn,
        tableFullColumn,
        tableColumn
      })
    }

    // 监听数据变化
    watch(
      () => props.data,
      (newData) => {
        if (Array.isArray(newData)) {
          instance.loadTableData(newData, true).then(instance.handleDefault).then(instance.handleSelectionHeader)
        }
      }
    )

    watch(
      () => collectColumn.value,
      (value) => {
        instance.watchColumn(value)
      }
    )

    // 生命周期钩子
    onBeforeUnmount(() => {
      const tableWrapper = instance.$refs.tableWrapper

      if (tableWrapper && tableWrapper.parentNode) {
        tableWrapper.parentNode.removeChild(tableWrapper)
      }

      if (TINYGrid._resize) {
        instance.unbindResize()
      }

      instance.closeFilter()
      instance.closeMenu()

      unbindEvent(instance)
      clearOnTableUnmount(instance)
    })

    onActivated(() => {
      if (lastScrollLeft.value || lastScrollTop.value) {
        instance.scrollTo(lastScrollLeft.value, lastScrollTop.value)
        scrollXLoad.value && instance.triggerScrollXEvent()
        scrollYLoad.value && instance.triggerScrollYEvent({ target: { scrollTop: lastScrollTop.value } })
      }

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
    nextTick().then(() => {
      // 初始化表格
      initialize()
      afterMounted.value = true

      if (props.autoResize && TINYGrid._resize) {
        instance.bindResize()
      }

      setTimeout(() => {
        const tableFooter = instance.$refs.tableFooter
        showFooterBorder.value = !!tableFooter
        footerBorderBottom.value = tableFooter ? tableFooter.$el.getBoundingClientRect().height : 0
      })
    })
    const tableListeners = getListeners(attrs, listeners)
    return {
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
