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
import {
  h,
  hooks,
  $prefix,
  $props,
  resolveTheme,
  defineComponent,
  useInstanceSlots,
  useRelation,
  isVue2
} from '@opentiny/vue-common'
import Tooltip from '@opentiny/vue-tooltip'
import { extend } from '@opentiny/utils'
import { isEmptyObject, isObject, isNull } from '@opentiny/utils'
import { uniqueId, template, toNumber, isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { getRowkey, GlobalEvent, hasChildrenList, getListeners } from '@opentiny/vue-renderless/grid/utils'
import TINYGrid from '../../adapter'
import GridBody from '../../body'
import GridFilter from '../../filter'
import GridMenu from '../../menu'
import GridLoading from '../../loading'
import methods from './methods'
import GlobalConfig from '../../config'
import { error } from '../../tools'
import MfTable from '../../mobile-first/index.vue'
import { useData, useDrag, useRowGroup } from '../../composable'
import { isServer } from '@opentiny/utils'

const { themes, viewConfig, columnLevelKey, defaultColumnName } = GlobalConfig
const { TINY: T_TINY, SAAS: T_SAAS } = themes
const { DEFAULT: V_DEFAULT, MF: V_MF } = viewConfig
const { MF_SHOW_LIST: V_MF_LIST } = viewConfig

const hiddenContainerClass = 'tiny-grid-hidden-column'

// 校验插件是否被注册
function verifyConfig(_vm) {
  if (!getRowkey(_vm)) {
    error('ui.grid.error.rowIdEmpty')
  }

  if (!TINYGrid._edit && _vm.editConfig) {
    throw new Error(template(error('ui.grid.error.reqModule'), { name: 'Edit' }))
  }

  if (!TINYGrid._valid && _vm.editRules) {
    throw new Error(template(error('ui.grid.error.reqModule'), { name: 'Validator' }))
  }

  if (!TINYGrid._keyboard && (_vm.keyboardConfig || _vm.mouseConfig)) {
    throw new Error(template(error('ui.grid.error.reqModule'), { name: 'Keyboard' }))
  }

  if (!TINYGrid._resize && _vm.autoResize) {
    throw new Error(template(error('ui.grid.error.reqModule'), { name: 'Resize' }))
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

function loadStatic(data, _vm) {
  // 此段代码与 watch(data) 功能重复，只在配置了 data 属性后生效
  if (data && data.length > 0) {
    _vm.loadTableData(data, true)
    _vm.updateStyle()
  }
}

function mergeTreeConfig(_vm) {
  if (_vm.treeConfig) {
    const { ordered } = _vm.treeConfig
    _vm.treeOrdered = isNull(ordered) ? true : Boolean(ordered)
  }
}

function bindEvent(ctx) {
  GlobalEvent.on(ctx, 'mousedown', ctx.handleGlobalMousedownEvent)
  // 因为冒泡事件部分情况下被阻止继续传播，导致处理异常，因此注册 mousedown 捕获事件
  GlobalEvent.on(ctx, 'mousedown', ctx.handleGlobalMousedownCaptureEvent, true)
  GlobalEvent.on(ctx, 'blur', ctx.handleGlobalBlurEvent)
  GlobalEvent.on(ctx, 'mousewheel', ctx.handleGlobalMousewheelEvent)
  GlobalEvent.on(ctx, 'keydown', ctx.handleGlobalKeydownEvent)
  GlobalEvent.on(ctx, 'resize', ctx.handleGlobalResizeEvent)
  GlobalEvent.on(ctx, 'contextmenu', ctx.handleGlobalContextmenuEvent)
}

function unbindEvent(table) {
  GlobalEvent.off(table, 'mousedown')
  GlobalEvent.off(table, 'mousedown', true)
  GlobalEvent.off(table, 'blur')
  GlobalEvent.off(table, 'mousewheel')
  GlobalEvent.off(table, 'keydown')
  GlobalEvent.off(table, 'resize')
  GlobalEvent.off(table, 'contextmenu')
}

export default defineComponent({
  name: $prefix + 'GridTable',
  props: {
    ...$props,
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
    dropConfig: { type: Object, default: () => ({}) },
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
    highlightCurrentColumn: { type: Boolean, default: () => GlobalConfig.highlightCurrentColumn },
    // 是否要高亮当前选中行
    highlightCurrentRow: { type: Boolean, default: () => GlobalConfig.highlightCurrentRow },
    // 鼠标移到列是否要高亮显示
    highlightHoverColumn: { type: Boolean, default: () => GlobalConfig.highlightHoverColumn },
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: { type: Boolean, default: () => GlobalConfig.highlightHoverRow },
    // 是否开启异步列功能
    isAsyncColumn: Boolean,
    isCenterEmpty: Boolean,
    // 是否拖拽表头调整列顺序
    isDragHeaderSorting: Boolean,
    // 按键配置项
    keyboardConfig: { type: Object, default: () => ({}) },
    // 表格是否加载中
    loading: Boolean,
    loadingComponent: Object,
    // 表格的最大高度
    maxHeight: [Number, String],
    // 表格的最小高度
    minHeight: [Number, String],
    // 鼠标配置项
    mouseConfig: { type: Object, default: () => ({}) },
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
    showHeaderOverflow: { type: [Boolean, String], default: () => GlobalConfig.showHeaderOverflow },
    // 设置所有内容过长时显示为省略号
    showOverflow: { type: [Boolean, String], default: () => GlobalConfig.showOverflow },
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
    // 自动清空鼠标选中
    autoClearMouseChecked: { type: Boolean, default: true },
    // 操作列（type为index或radio或selection的列）是否可拖动列宽
    operationColumnResizable: { type: Boolean, default: () => GlobalConfig.operationColumnResizable },
    // 自动清空键盘复制
    autoClearKeyboardCopy: { type: Boolean, default: false },
    // 自定义列组件名称（列表）
    customColumnNames: { type: [String, Array], default: GlobalConfig.defaultColumnName }
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
  data() {
    return {
      // 存储异步加载过的行\列数据
      asyncRenderMap: {},
      // 存放快捷菜单的信息
      ctxMenuStore: {
        list: [],
        selectChild: null,
        selected: null,
        showChild: false,
        style: null,
        visible: false
      },
      // 当前行
      currentRow: null,
      // 存放可编辑相关信息
      editStore: {
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
      },
      // 已展开的行
      expandeds: [],
      // 当前选中的筛选列
      filterStore: {
        column: null,
        condition: { input: '', relation: 'equals' },
        id: '',
        multi: false,
        options: [],
        visible: false,
        searchValue: ''
      },
      // 所有列已禁用
      headerCheckDisabled: false,
      // 是否全选
      isAllSelected: false,
      // 多选属性，有选中且非全选状态
      isIndeterminate: false,
      // 是否存在横向滚动条
      overflowX: false,
      // 是否存在纵向滚动条
      overflowY: true,
      // 存储滚动加载，上次滚动的位置
      scrollLoadStore: { bodyHeight: 0, scrollHeight: 0 },
      // 横向滚动条的高度
      scrollbarHeight: 0,
      // 纵向滚动条的宽度
      scrollbarWidth: 0,
      // 单选属性，选中行
      selectRow: null,
      // 存放多选工具栏相关信息
      selectToolbarStore: {
        layout: { height: 0, left: 0, top: 0, width: 0, zIndex: 1 },
        visible: false
      },
      // 多选属性，已选中的列
      selection: [],
      // tooltip提示内容
      tooltipContent: '',
      // tooltip提示内容是否处理换行字符
      tooltipContentPre: false,
      // 已展开树节点
      treeExpandeds: [],
      // 树节点不确定状态的列表
      treeIndeterminates: [],
      // 存放数据校验相关信息
      validStore: {
        column: null,
        content: '',
        isArrow: false,
        row: null,
        rule: null,
        visible: false
      },
      // 校验tip提示内容
      validTipContent: '',
      // 在编辑模式下 单元格在失去焦点验证的状态
      validatedMap: {},
      // 表格父容器的高度
      parentHeight: 0,
      // 水平滚动条的状态
      horizonScroll: { fixed: false, threshold: 2, max: 0, isLeft: true, isRight: false }
    }
  },
  computed: {
    bodyCtxMenu() {
      return this.ctxMenuOpts.body && this.ctxMenuOpts.body.options ? this.ctxMenuOpts.body.options : []
    },
    ctxMenuList() {
      let rest = []
      this.ctxMenuStore.list.forEach((list) => list.forEach((item) => rest.push(item)))
      return rest
    },
    ctxMenuOpts() {
      return extend(true, {}, GlobalConfig.menu, this.contextMenu)
    },
    hasFilter() {
      return this.tableColumn.some((column) => isObject(column.filter) && !isEmptyObject(column.filter))
    },
    hasTip() {
      return TINYGrid._tooltip
    },
    headerCtxMenu() {
      return this.ctxMenuOpts.header && this.ctxMenuOpts.header.options ? this.ctxMenuOpts.header.options : []
    },
    isCtxMenu() {
      return this.headerCtxMenu.length || this.bodyCtxMenu.length
    },
    // 是否使用了分组表头
    isGroup() {
      return this.collectColumn.some((column) => hasChildrenList(column))
    },
    isResizable() {
      return this.resizable || this.tableFullColumn.some((column) => column.resizable)
    },
    sortOpts() {
      return extend(true, {}, GlobalConfig.sortConfig, this.sortConfig)
    },
    tooltipContentOpts() {
      return extend(
        true,
        {
          content: this.tooltipContent,
          pre: this.tooltipContentPre,
          renderContent: this.tooltipConfig.renderContent,
          placement: 'right',
          type: this.tooltipConfig.effect ? undefined : 'normal'
        },
        this.tooltipConfig
      )
    },
    vaildTipOpts() {
      return extend(
        true,
        {
          isArrow: false,
          placement: 'top',
          type: 'error',
          content: this.validTipContent
        },
        this.tooltipConfig
      )
    },
    validOpts() {
      const config = Object.assign(
        { message: 'tooltip' },
        GlobalConfig.validConfig,
        this.$grid?.designConfig?.validConfig,
        this.validConfig
      )

      config.isMessageTooltip = config.message === 'tooltip'
      config.isMessageDefault = config.message === 'default'
      config.isMessageInline = config.message === 'inline'

      return config
    },
    isThemeTiny() {
      return this.tinyTheme === T_TINY
    },
    isThemeSaas() {
      return this.tinyTheme === T_SAAS
    },
    isViewDefault() {
      return this.viewType === V_DEFAULT
    },
    isShapeTable() {
      // 表格处于默认视图或mf视图大屏时显示为普通表格；其它视图都显示为多端形式
      return this.isViewDefault || (this.viewType === V_MF && this.$grid.currentBreakpoint !== 'default')
    },
    columnNames() {
      const { customColumnNames } = this
      const columnNames = [defaultColumnName]

      const pushIfNot = (columnName) => {
        if (typeof columnName === 'string' && !columnNames.includes(columnName)) {
          columnNames.push(columnName)
        }
      }

      if (Array.isArray(customColumnNames) && customColumnNames.length > 0) {
        customColumnNames.forEach(pushIfNot)
      } else if (typeof customColumnNames === 'string') {
        pushIfNot(customColumnNames)
      }

      return columnNames
    }
  },
  watch: {
    collectColumn(value) {
      // 这里在表格初始化的时候会触发两次（标签式），造成性能损失，待整改
      this.watchColumn(value)
    },
    customs(value) {
      !this.isUpdateCustoms && this.mergeCustomColumn(value)
      this.isUpdateCustoms = false
    },
    height() {
      this.$nextTick(this.recalculate)
    },
    syncResize(value) {
      // 是否自动根据状态属性去更新响应式表格宽高
      value && this.$nextTick(this.recalculate)
    },
    tableColumn() {
      // 处理空数据时表头是否禁用
      this.handleSelectionHeader()
    },
    parentHeight() {
      this.recalculate()
    },
    // 选项式监控在vue2可以检测到顶层数组splice项替换/$set项替换
    // array.splice(index, 1, newItem)
    // this.$set(array, index, newItem)
    data(array1, array2) {
      if (isVue2 && array1 === array2 && array1.length === array2.length) {
        this.handleDataChange()
      }
    }
  },
  created() {
    let { scrollXStore, scrollYStore, optimizeOpts, data } = Object.assign(this, {
      // 条件处理后数据
      afterFullData: [],
      // 分组表场景全量数据（包含虚拟行）
      groupFullData: [],
      elemStore: {},
      // 缓存数据集 columnId --> { colid: column.id, column, index }
      fullColumnIdData: {},
      // 缓存数据集 column --> { colid: column.id, column, index }
      fullColumnMap: new Map(),
      fullDataRowIdData: {},
      fullDataRowMap: new Map(),
      // 临时插入数据集
      temporaryRows: [],
      // 最后滚动位置
      lastScrollLeft: 0,
      lastScrollTop: 0,
      scrollDirection: 'N', // N,X,Y （滚动方向）
      // 存放横向 X 虚拟滚动相关的信息
      scrollXStore: {},
      // 存放纵向 Y 虚拟滚动相关信息
      scrollYStore: {},
      // 完整数据
      tableFullData: [],
      // 表格高度
      tableHeight: 0,
      // 可见列总宽度
      totalWidth: 0,
      // 存放 tooltip 相关信息
      tooltipStore: {},
      // 表格已挂载完成
      afterMounted: false,
      // 临时任务
      tasks: {},
      // 列初始就绪
      isColumnInitReady: false,
      // 列就绪
      isColumnReady: false,
      // 分组表场景是否具有虚拟行
      hasVirtualRow: false,
      // 是否是标签式用法场景
      isTagUsageSence: false,
      // 收集列信息（列数量和列顺序）
      columnCollectKey: '',
      // treeConfig.ordered的取值处理
      treeOrdered: undefined,
      // 水平滚动时新进入渲染的列
      addedColumn: [],
      // 单元格状态
      cellStatus: new Map(),
      // 是否具有type selection列
      isCheckable: false
    })
    let { scrollX, scrollY } = optimizeOpts

    // 判断表格对应的插件是否注册，没注册会报对应的警告（这块插件还没有进行解耦，待整改）
    verifyConfig(this)

    // 合并用户传递过来的虚拟滚动相关逻辑
    mergeScrollDirStore(scrollX, scrollXStore)
    mergeScrollDirStore(scrollY, scrollYStore)

    // 合并树表配置项
    mergeTreeConfig(this)

    // 初始化表格渲染数据
    loadStatic(data, this)

    bindEvent(this)

    // 设置表格实例
    this.$grid.connect({ name: 'table', vm: this })
  },
  setup(props, context) {
    const { slots, attrs, listeners } = context
    const id = hooks.ref(uniqueId())
    // 列分组配置
    const collectColumn = hooks.ref([])
    // 完整所有列
    const tableFullColumn = hooks.ref([])
    // 显示的列
    const visibleColumn = hooks.ref([])
    // 渲染的列
    const tableColumn = hooks.ref([])
    // 渲染中的数据节点
    const tableNode = hooks.ref([])
    // 渲染中的数据
    const tableData = hooks.ref([])
    // 表尾合计数据
    const footerData = hooks.ref([])
    // 是否启用了横向 X 可视渲染方式加载
    const scrollXLoad = hooks.ref(false)
    // 是否启用了纵向 Y 可视渲染方式加载
    const scrollYLoad = hooks.ref(false)
    // 表头总体高度
    const headerHeight = hooks.ref(0)
    // 表尾高度
    const footerHeight = hooks.ref(0)
    // 是否已分配列宽
    const isColumnWidthAssigned = hooks.ref(false)
    // 外部设置的表体容器高度
    const bodyWrapperHeight = hooks.ref()
    // 外部设置的表体容器最小高度
    const bodyWrapperMinHeight = hooks.ref()
    // 外部设置的表体容器最大高度
    const bodyWrapperMaxHeight = hooks.ref()
    // 表体表格元素宽度
    const bodyTableWidth = hooks.ref()
    // 滚动加载滚动高度
    const scrollLoadScrollHeight = hooks.ref()
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

    // body组件参数
    const bodyProps = hooks.computed(() => ({
      collectColumn: collectColumn.value,
      tableColumn: tableColumn.value,
      tableNode: tableNode.value,
      tableData: tableData.value,
      footerData: footerData.value
    }))
    // 多端表格组件参数
    const mfTableProps = hooks.computed(() => ({
      tableData: tableData.value,
      cardConfig: props.cardConfig,
      listConfig: props.listConfig,
      ganttConfig: props.ganttConfig,
      customConfig: props.customConfig
    }))
    // 模板引用
    const tableWrapper = hooks.ref()

    // TINY主题变量
    const tinyTheme = hooks.ref(resolveTheme(props, context))
    const $table = hooks.getCurrentInstance().proxy
    const $grid = hooks.inject('$grid', null)
    const vSize = hooks.computed(() => props.size || $grid?.size || $grid?.vSize)
    const optimizeOpts = hooks.computed(() => extend(true, {}, GlobalConfig.optimization, props.optimization))
    const rowHeight = hooks.computed(
      () =>
        optimizeOpts.value?.scrollY?.rHeight ||
        GlobalConfig.rowHeight[tinyTheme.value]?.[vSize.value || 'default'] ||
        40
    )
    const headerRowHeight = hooks.computed(
      () => GlobalConfig.headerRowHeight[tinyTheme.value]?.[vSize.value || 'default'] || 40
    )
    useInstanceSlots()

    useRelation({
      relationKey: `${columnLevelKey}-${id.value}`,
      childrenKey: 'childColumns',
      relationContainer: () => (!isServer ? $table.$el.querySelector(`.${hiddenContainerClass}`) : null),
      onChange: () => {
        const collectKey = $table.computeCollectKey()

        if (collectKey !== $table.columnCollectKey) {
          $table.columnCollectKey = collectKey
          $table.assembleColumns()
        }
      }
    })

    useDrag({ props, collectColumn, tableColumn })

    useRowGroup({ props, visibleColumn, tableFullColumn, tableColumn, columnStore })

    const { tiledLength } = useData(props)

    hooks.onMounted(() => {
      $table.addIntersectionObserver()

      // 复杂场景下，当表格刚开始挂载就被用户使用v-if销毁，会导致$refs全部被清空
      if (tableWrapper.value) {
        document.body.appendChild(tableWrapper.value)
      }

      hooks.nextTick(() => {
        $table.afterMounted = true

        if (props.autoResize && TINYGrid._resize) {
          $table.bindResize()
        }
      })
    })

    hooks.onBeforeUnmount(() => {
      if (tableWrapper.value?.parentNode) {
        tableWrapper.value?.parentNode.removeChild(tableWrapper.value)
      }
      $table.removeIntersectionObserver()

      if (TINYGrid._resize) {
        $table.unbindResize()
      }

      $table.closeFilter()
      $table.closeMenu()

      const ySpaceElem = $table.elemStore[`main-body-ySpace`]

      if (ySpaceElem) {
        ySpaceElem.onscroll = null
      }

      unbindEvent($table)

      $table._tileInfo = $table._graphInfo = null
    })

    hooks.onActivated(() => {
      const { lastScrollLeft, lastScrollTop } = $table

      if (lastScrollLeft || lastScrollTop) {
        $table.scrollTo(lastScrollLeft, lastScrollTop)
        scrollXLoad.value && $table.triggerScrollXEvent()
        scrollYLoad.value && $table.triggerScrollYEvent({ target: { scrollTop: lastScrollTop } })
      }

      bindEvent($table)
    })

    hooks.onDeactivated(() => {
      unbindEvent($table)
    })

    const tableListeners = getListeners(attrs, listeners)

    return {
      slots,
      tableListeners,
      tinyTheme,
      id,
      collectColumn,
      tableFullColumn,
      visibleColumn,
      tableColumn,
      tableNode,
      tableData,
      footerData,
      bodyProps,
      mfTableProps,
      vSize,
      optimizeOpts,
      rowHeight,
      headerRowHeight,
      tableWrapper,
      scrollXLoad,
      scrollYLoad,
      headerHeight,
      footerHeight,
      isColumnWidthAssigned,
      bodyWrapperHeight,
      bodyWrapperMinHeight,
      bodyWrapperMaxHeight,
      bodyTableWidth,
      scrollLoadScrollHeight,
      columnStore,
      tiledLength
    }
  },
  render() {
    const { $grid, bodyProps, border, borderSaas, borderVertical } = this
    const { ctxMenuStore, dropConfig, editConfig, editRules, filterStore } = this
    const { hasFilter, hasTip, height, highlightCell, highlightHoverColumn, highlightHoverRow } = this
    const { horizonScroll, id, instanceSlots, isCtxMenu, isGroup, isResizable } = this
    const { isShapeTable, isThemeTiny, isThemeSaas, loading, loadingComponent, mfTableProps } = this
    const { mouseConfig, optimizeOpts, overflowX, overflowY, rowSpan } = this
    const { scrollbarHeight, selectToolbarStore, showFooter, showHeader } = this
    const { showHeaderOverflow, showOverflow, spanMethod, stripe, stripeSaas, tableData } = this
    const { tooltipContentOpts, vSize, vaildTipOpts, validOpts } = this

    const { isMessageDefault, isMessageTooltip } = validOpts

    return h(
      'div',
      {
        class: {
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
          'is__row-span': (rowSpan && rowSpan.length > 0) || typeof spanMethod === 'function',
          'row__drop-handle--index': dropConfig.rowHandle === 'index',
          'fixed__sticky': horizonScroll.fixed,
          'tiny-grid-fixed__left': !horizonScroll.isLeft,
          'tiny-grid-fixed__right': !horizonScroll.isRight
        }
      },
      [
        // 隐藏列
        h('div', { class: hiddenContainerClass, ref: 'hideColumn' }, instanceSlots.default && instanceSlots.default()),
        // 主内容
        h(GridBody, { ref: 'tableBody', props: bodyProps, class: this.viewCls('tableBody') }),
        // 边框线
        h('div', { class: ['tiny-grid__border-line', this.viewCls('borderLine')], key: 'tinyGridBorderLine' }),
        // 列宽线
        isResizable
          ? h('div', {
              class: ['tiny-grid__resizable-bar', this.viewCls('resizeBar')],
              style: overflowX ? { 'padding-bottom': `${scrollbarHeight}px` } : null,
              ref: 'resizeBar',
              key: 'tinyGridResizeBar'
            })
          : null,
        // 加载中
        h(GridLoading, { props: { visible: loading, loadingComponent }, class: this.viewCls('gridLoading') }),
        // 筛选、快捷菜单、Tip提示、校验提示
        h(
          'div',
          {
            class: [`tiny-grid${id}-wrapper ${this.$attrs.staticClass || ''}`, this.viewCls('tableWrapper')],
            ref: 'tableWrapper'
          },
          [
            // 筛选
            hasFilter
              ? h(GridFilter, {
                  props: { optimizeOpts, filterStore },
                  ref: 'filterWrapper'
                })
              : null,
            // 快捷菜单
            isCtxMenu ? h(GridMenu, { props: { ctxMenuStore }, ref: 'ctxWrapper' }) : null,
            // Ellipsis tooltip
            hasTip ? h(Tooltip, { ref: 'tooltip', props: tooltipContentOpts }) : null,
            // valid error tooltip
            hasTip && editRules && (isMessageDefault ? !height : isMessageTooltip)
              ? h(Tooltip, {
                  class: 'tiny-grid__valid-error',
                  props: isMessageTooltip || tableData.length === 1 ? vaildTipOpts : null,
                  ref: 'validTip'
                })
              : null
          ]
        ),
        // 多选工具栏
        $grid.selectToolbar
          ? h(
              'div',
              {
                ref: 'selectToolbar',
                class: ['tiny-grid__select-toolbar', this.viewCls('selectToolbar')],
                style: [selectToolbarStore.layout, { visibility: selectToolbarStore.visible ? 'visible' : 'hidden' }]
              },
              $grid.renderedToolbar ? $grid.renderedToolbar : [null]
            )
          : null,
        // 多端表格（默认主题或默认视图/mf大屏下，不渲染）
        !isThemeTiny && !isShapeTable ? h(MfTable, { ref: 'mfTable', props: mfTableProps }) : null
      ]
    )
  },
  methods: {
    ...methods,
    viewCls(module) {
      return (this as any).$grid.viewCls(module)
    }
  }
})
