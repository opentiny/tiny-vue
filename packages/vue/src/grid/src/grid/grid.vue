<template>
  <div
    class="tiny-grid__wrapper tiny-grid"
    :class="{
      [`view_${viewType}`]: true,
      '!bg-transparent sm:!bg-color-bg-1': viewType === V_MF || viewType === V_CARD,
      [`size__${vSize}`]: vSize,
      'tiny-grid__animat': optimization?.animat,
      [fullScreenClass]: true
    }"
  >
    <!-- 工具栏 -->
    <template v-if="!selectToolbar">
      <component :is="renderedToolbar" />
    </template>

    <!-- 列锚点 -->
    <column-anchor v-if="columnAnchor" :params="columnAnchorParams" />

    <!-- 表格主体 -->
    <tiny-grid-table
      ref="tinyTable"
      v-bind="tableOptions"
      :data="fetchOption ? tableData : data"
      :loading="loading"
      v-on="tableEvents"
    >
      <slot></slot>
    </tiny-grid-table>

    <!-- 分页器 -->
    <tiny-pager
      v-if="pager && fetchOption"
      :size="vSize"
      :loading="loading || tableLoading"
      :is-before-page-change="isBeforePageChange || showSaveMsg"
      :accurate-jumper="autoLoad"
      v-bind="pagerConfig"
      :style="pagerStyle"
      @size-change="pageSizeChange"
      @current-change="pageCurrentChange"
      @before-page-change="beforePageChangeHandler"
      ref="pager"
    ></tiny-pager>
  </div>
</template>

<script lang="ts">
import { isBoolean, toNumber } from '@opentiny/vue-renderless/grid/static/'
import { getListeners, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { extend, debounce } from '@opentiny/utils'
import TinyGridTable from '../table'
import GlobalConfig from '../config'
import TinyPager from '@opentiny/vue-pager'
import { ColumnAnchor } from '../column-anchor'
import {
  emitter,
  $prefix,
  $props,
  defineComponent,
  resolveMode,
  resolveTheme,
  hooks,
  useBreakpoint
} from '@opentiny/vue-common'

const { themes, viewConfig } = GlobalConfig
const { SAAS: T_SAAS } = themes
const { GANTT: V_GANTT, MF: V_MF, CARD: V_CARD, DEFAULT: V_DEFAULT, CUSTOM: V_CUSTOM } = viewConfig

const propKeys = Object.keys(TinyGridTable.props)

export default defineComponent({
  name: `${$prefix}Grid`,

  components: {
    TinyGridTable,
    TinyPager,
    ColumnAnchor
  },

  provide() {
    return { $grid: this }
  },

  props: {
    // 继承基础组件属性
    ...$props,
    // 表格列配置，用于定义表格的列结构和属性
    columns: Array,
    // 代理配置，用于配置数据请求代理
    proxyConfig: Object,
    // 获取数据的配置，用于配置数据请求接口
    fetchData: Object,
    // 保存数据的配置，用于配置数据保存接口
    saveData: Object,
    // 删除数据的配置，用于配置数据删除接口
    deleteData: Object,
    // 工具栏配置，用于配置表格顶部的工具栏
    toolbar: Object,
    // 分页器配置，用于配置表格底部的分页
    pager: Object,
    // 数据集配置，用于配置本地数据
    dataset: Object,
    // 是否自动加载数据，默认为true
    autoLoad: {
      type: Boolean,
      default: true
    },
    // 是否开启序号连续，默认为false。开启后序号将跨页连续
    seqSerial: {
      type: Boolean,
      default: false
    },
    // 事件配置，用于配置表格的事件监听
    events: Object,
    // 继承表格组件的所有属性
    ...TinyGridTable.props,
    // 是否在页码改变前进行确认，用于防止误操作
    isBeforePageChange: Boolean,
    // 是否显示保存提示信息，默认为false
    showSaveMsg: {
      type: Boolean,
      default: false
    },
    // 是否启用多历史记录，用于支持多次撤销/重做操作
    isMultipleHistory: Boolean,
    // 选择工具栏配置，可以是布尔值或对象，用于配置选择列的工具栏
    selectToolbar: [Boolean, Object]
  },

  data() {
    return {
      // 视图类型常量引用
      V_GANTT, // 甘特图视图类型
      V_MF, // 移动优先视图类型
      V_CARD, // 卡片视图类型
      V_DEFAULT, // 默认视图类型
      V_CUSTOM, // 自定义视图类型

      // 数据和状态相关
      emitter: emitter(), // 事件发射器实例,用户配置时表格事件处理
      fetchOption: null, // 数据获取配置选项
      filterData: [], // 过滤条件数据
      listeners: {}, // 事件监听器集合
      pagerConfig: null, // 分页器配置
      pendingRecords: [], // 存放标记为删除但尚未提交的行数据
      sortData: {}, // 排序数据
      tableCustoms: [], // 表格自定义配置数据
      tableData: [], // 表格展示数据
      tableLoading: false, // 表格加载状态
      tablePage: {
        // 表格分页基础配置
        total: 0, // 总记录数
        pageSize: 10, // 每页显示条数
        currentPage: 1 // 当前页码
      },
      tablePageLoading: false, // 表格分页加载状态
      realTimeTablePage: {
        // 实时分页数据,用于分页切换时的临时状态
        total: 0, // 总记录数
        pageSize: 10, // 每页显示条数
        currentPage: 1 // 当前页码
      },
      columnAnchorParams: {}, // 列锚点参数
      columnAnchorKey: '', // 列锚点标识
      tasks: {}, // 任务队列,用于存储防抖/节流等任务
      fullScreenClass: '', // 全屏模式样式类
      isInitialLoading: true, // 标记是否为首次加载数据

      // 回调函数存储
      $pageSizeChangeCallback: null, // 页码大小改变回调
      $updateCustomsCallback: null, // 更新自定义配置回调

      // 渲染相关配置
      renderedToolbar: null, // 渲染后的工具栏组件
      pagerComponent: null, // 渲染后的分页器组件
      tableOptions: {}, // 表格配置选项
      tableEvents: {} // 表格事件配置
    }
  },

  computed: {
    // 工具栏按钮保存和删除时是否弹出提示信息
    isMsg() {
      return this.proxyConfig?.message !== false
    },

    pagerStyle() {
      const style = { display: 'none' }

      if (this.isThemeSaas && this.isModeMobileFirst) {
        if (
          !(this.isViewGantt || this.isViewCustom) ||
          ((this.isViewGantt || this.isViewCustom) && this.currentBreakpoint !== 'default')
        ) {
          style.display = 'flex'
          style.justifyContent = 'flex-end'
        }

        if (this.currentBreakpoint === 'default') {
          style.justifyContent = 'center'
        }
      } else {
        style.display = 'block'
      }

      return style
    },

    // 表格属性收集
    tableProps() {
      const rest = {}
      propKeys.forEach((key) => (rest[key] = this[key]))
      return rest
    },

    // 组件尺寸
    vSize() {
      return this.size || (this.$parent && this.$parent.size) || (this.$parent && this.$parent.vSize)
    },

    // 序号计算
    seqIndex() {
      // 从组件实例中解构需要的属性:
      // - seqSerial: 是否启用序号连续模式
      // - scrollLoad: 是否启用滚动加载
      // - pagerConfig: 分页配置
      // - startIndex: 序号起始值
      // - tablePageLoading: 表格分页加载状态
      // - realTimeTablePage: 实时分页数据
      const { seqSerial, scrollLoad, pagerConfig: oldPage, startIndex, tablePageLoading, realTimeTablePage } = this

      // 初始化序号值为起始值
      let seqIndexValue = startIndex

      // 根据表格是否在分页加载中选择使用实时分页数据还是原始分页配置
      const pagerConfig = tablePageLoading ? realTimeTablePage : oldPage

      // 当启用了序号连续模式或滚动加载,且存在分页配置时
      // 计算实际的序号起始值:
      // (当前页码 - 1) * 每页条数 + 起始值
      if ((seqSerial || scrollLoad) && pagerConfig) {
        seqIndexValue = (pagerConfig.currentPage - 1) * pagerConfig.pageSize + startIndex
      }

      // 返回计算后的序号值
      return seqIndexValue
    },

    // 主题相关
    isThemeSaas() {
      return this.tinyTheme === T_SAAS
    },

    // 模式相关
    isModeMobileFirst() {
      return this.tinyMode === 'mobile-first'
    },

    // 视图相关
    isViewGantt() {
      return this.viewType === V_GANTT
    },

    isViewCustom() {
      return this.viewType === V_CUSTOM
    }
  },

  watch: {
    // 监听配置式columns数组
    columns(cols) {
      this.loadColumn(cols)
    },

    // 监听表格自定义配置变化
    tableCustoms() {
      this.toolbar && this.$refs.toolbar && this.$refs.toolbar.loadStorage()
    },

    // 监听列锚点参数变化
    columnAnchorParams() {
      setTimeout(() => this.emitter.emit('active-anchor'), this.columnAnchorParams.activeAnchor.delay)
    },

    // 监听视图类型变化
    viewType(value) {
      // 在全屏状态下切换到表格视图时额外刷新一次表格布局，解决此场景下列宽未自动撑开问题
      if (value === V_MF && this.fullScreenClass) {
        this.$nextTick(() => this.recalculate(true))
      }
    }
  },

  created() {
    // 实例缓存，解决grid/toolbar/table等相互关联问题
    this.vmStore = {}

    // 初始化fetchApi选项
    this.fetchOption = this.initFetchOption()
    this.pagerConfig = this.initPagerConfig()

    // 解构需要的属性
    const { customs, events, prefetch, fetchOption, autoLoad } = this

    // 初始化表格个性化配置
    if (customs) {
      this.tableCustoms = customs
    }

    // 处理事件配置
    this.initEvents(events)

    // 在created生命周期阶段执行fetch-data
    if (prefetch && fetchOption && autoLoad !== false) {
      if (Array.isArray(prefetch)) {
        // prefetch 为数组，指定后端排序字段参数，作为数据接口方法参数 sortBy。例如：[{ property: 'name', order: 'desc' }]
        this.commitProxy('prefetch', prefetch)
      } else {
        this.commitProxy('prefetch')
      }
    }
  },

  mounted() {
    const { columns, fetchOption, autoLoad, pagerSlot, prefetch } = this

    // 处理列配置
    if (columns && columns.length) {
      this.loadColumn(columns)
    }

    // 默认在mounted阶段执行fetch-data
    this.initFetchData(prefetch, fetchOption, autoLoad)

    // 初始化多历史记录
    if (this.isMultipleHistory) {
      this.initMultipleHistory()
    }

    // 添加交叉观察器
    this.addIntersectionObserver()

    // 更新渲染组件
    this.updateRenderComponents()
  },

  beforeUnmount() {
    this.removeIntersectionObserver()
    // 清空被缓存实例
    this.vmStore = null
  },

  setup(props, context) {
    const { listeners, attrs } = context
    // 处理表格用户传递过来的事件监听
    const tableListeners = getListeners(attrs, listeners)
    const tinyTheme = hooks.ref(resolveTheme(props, context))
    const tinyMode = hooks.ref(resolveMode(props, context))
    const breakpoint = useBreakpoint()

    return {
      tableListeners,
      designConfig: null,
      tinyTheme,
      tinyMode,
      currentBreakpoint: breakpoint.current
    }
  },

  methods: {
    // 初始配置化表格传入的事件
    initEvents(events) {
      if (!events) return

      // 需要注册到emitter的事件列表
      const emitterEvents = ['pageChange', 'sortChange', 'filterChange', 'toolbarButtonClick']

      // 转换事件名并注册监听器
      this.listeners = Object.entries(events).reduce((listeners, [event, handler]) => {
        // 驼峰转连字符
        const evkey = event.replace(/\B([A-Z])/g, '-$1').toLowerCase()

        // 注册事件监听
        listeners[evkey] = handler

        // 如果是需要注册到emitter的事件,则同时注册到emitter
        if (emitterEvents.includes(event)) {
          this.emitter.on(evkey, handler)
        }

        return listeners
      }, {})
    },

    // 更新渲染组件
    updateRenderComponents() {
      this.updateTableOptions()
      this.updateTableEvents()

      this.renderedToolbar = this.getRenderedToolbar({
        $slots: this.$slots,
        _vm: this,
        loading: this.loading,
        tableLoading: this.tableLoading,
        toolbar: this.toolbar
      })
    },

    // 更新表格选项
    updateTableOptions() {
      // 处理design配置
      if (this.designConfig?.icons) {
        Object.assign(GlobalConfig.icon, this.designConfig.icons)
      }

      // 初始化虚拟滚动优化配置
      const optimizOpt = { ...GlobalConfig.optimization, ...this.optimization }
      const props = { ...this.tableProps, optimization: optimizOpt, startIndex: this.seqIndex }

      // 初始化 tooltip 配置
      props.tooltipConfig = Object.assign(
        {},
        GlobalConfig.tooltip || {},
        this.designConfig?.tooltip || {},
        props.tooltipConfig || {}
      )

      // 在用户没有配置stripe时读取design配置
      if (this.designConfig?.stripe !== undefined && !props.stripe) {
        props.stripe = this.designConfig.stripe
      }

      // fetchApi状态下初始化 loading、data、rowClassName
      if (this.fetchOption) {
        Object.assign(props, {
          loading: this.loading || this.tableLoading,
          data: this.tableData,
          rowClassName: this.handleRowClassName
        })
      }

      // 处理表格工具栏和个性化数据
      if (this.toolbar && !(this.toolbar.setting && this.toolbar.setting.storage)) {
        props.customs = this.tableCustoms
      }

      // 处理编辑配置
      if (this.editConfig) {
        props.editConfig = {
          trigger: 'click',
          mode: 'cell',
          showStatus: true,
          ...this.editConfig,
          activeMethod: this.handleActiveMethod
        }
      }
      this.tableOptions = props
    },

    // 更新表格事件
    updateTableEvents() {
      const tableOns = { ...this.listeners, ...this.tableListeners }

      // fetchApi状态下初始化 remoteSort、remoteFilter
      if (this.fetchOption && (this.remoteSort || this.remoteFilter)) {
        const { remoteSort, remoteFilter } = this
        remoteSort && (tableOns['sort-change'] = this.sortChangeEvent)
        remoteFilter && (tableOns['filter-change'] = this.filterChangeEvent)
      }

      // 处理表格工具栏和个性化数据
      if (this.toolbar) {
        tableOns['update:customs'] = (value) => (this.tableCustoms = value)
      }

      // 列就绪事件处理
      tableOns['column-init-ready'] = this.handleColumnInitReady

      this.tableEvents = tableOns
    },

    // 配置高度减去（表格锚点+工具栏+分页）计算得出表格高度
    updateParentHeight() {
      // 如果还没有创建更新父容器高度的任务
      if (!this.tasks.updateParentHeight) {
        // 创建一个防抖任务,延迟10ms执行,避免频繁计算
        this.tasks.updateParentHeight = debounce(10, () => {
          // 获取组件实例的DOM元素和refs引用
          const { $el, $refs } = this
          // 获取表格和列锚点的ref引用
          const { tinyTable, tinyGridColumnAnchor } = $refs
          // 获取工具栏组件实例
          const toolbarVm = this.getVm('toolbar')

          if (tinyTable) {
            // 初始化列锚点高度为0
            let columnAnchorHeight = 0

            // 如果存在列锚点,计算其实际占用的总高度(包含margin)
            if (tinyGridColumnAnchor) {
              const { height, marginTop, marginBottom } = getComputedStyle(tinyGridColumnAnchor)
              columnAnchorHeight = toNumber(height) + toNumber(marginTop) + toNumber(marginBottom)
            }

            // 计算表格的父容器高度:
            // 父节点总高度 - 工具栏高度(如果有) - 列锚点高度 - 分页器高度(如果有)
            tinyTable.parentHeight =
              $el.parentNode.clientHeight -
              (toolbarVm ? toolbarVm.$el.clientHeight : 0) -
              columnAnchorHeight -
              ($refs.pager ? $refs.pager.$el.clientHeight : 0)
          }
        })
      }

      // 执行更新父容器高度的任务
      this.tasks.updateParentHeight()
    },

    // 向缓存添加实例
    connect({ name, vm }) {
      if (name && typeof name === 'string' && vm) {
        this.vmStore[name] = vm
      }
    },

    // 创建任务
    createJob(type, callback) {
      if (type === 'pageSizeChangeCallback') {
        this.$pageSizeChangeCallback = callback
      } else if (type === 'updateCustomsCallback') {
        // 表格可能有多个工具栏，因此工具栏个性化配置的回调应该是个数组
        this.$updateCustomsCallback = this.$updateCustomsCallback || []
        this.$updateCustomsCallback.push(callback)
      }
    },

    // 从缓存获取实例
    getVm(name) {
      if (name && typeof name === 'string' && this.vmStore) {
        return this.vmStore[name]
      }
    },

    // 列就绪时的处理
    handleColumnInitReady() {
      // 如果存在更新工具栏动态列回调，就执行
      if (this.$updateCustomsCallback) {
        this.$updateCustomsCallback.forEach((fn) => fn())
        this.$updateCustomsCallback = []
      }
    },

    // 处理行类名
    handleRowClassName(params) {
      let rowClassName = this.rowClassName
      let clss = []

      if (this.pendingRecords.includes(params.row)) {
        clss.push('row__pending')
      }

      return clss.concat(rowClassName ? rowClassName(params) : [])
    },

    // 处理编辑方法
    handleActiveMethod(params) {
      const { row } = params
      const { activeMethod } = this.editConfig

      // 如果行在待处理记录中，不允许编辑
      if (this.pendingRecords.includes(row)) {
        return false
      }

      // 如果没有配置activeMethod或activeMethod返回true，则允许编辑
      return !activeMethod || activeMethod(params)
    },

    // 排序变更事件
    sortChangeEvent(params) {
      // 获取表格的远程排序配置
      let remoteSort = this.remoteSort
      // 获取当前排序的列对象
      let column = params.column
      // 扩展排序参数,添加$grid引用
      let eventParams = extend(false, { $grid: this }, params)

      // 判断是否使用远程排序:
      // 1. 优先使用列的remoteSort配置
      // 2. 如果列没有配置remoteSort,则使用表格的remoteSort配置
      if (isBoolean(column.remoteSort) ? column.remoteSort : remoteSort) {
        // 保存当前排序参数
        this.sortData = params
        // 重置当前页码为第一页
        this.tablePage.currentPage = 1
        // 触发远程查询
        this.commitProxy('query')
      }

      // 触发排序变更事件
      // 1. 通过emitEvent触发sort-change事件
      // 2. 通过事件总线触发sort-change事件
      emitEvent(this, 'sort-change', eventParams) // 触发正常vue监听的事件比如@sort-change
      this.emitter.emit('sort-change', eventParams) // 触发配置式监听的事件
    },

    // 获取视图类名
    viewCls(module) {
      return GlobalConfig.viewConfig[module][this.viewType] || ''
    },

    // 监听某个元素是否出现在视口中
    addIntersectionObserver() {
      // 如果禁用了交叉观察器选项或浏览器不支持IntersectionObserver API,则直接返回
      if ((this.intersectionOption && this.intersectionOption.disabled) || typeof IntersectionObserver === 'undefined')
        return

      // 创建新的交叉观察器实例
      // 当目标元素与视口交叉状态发生变化时触发回调
      this.intersectionObserver = new IntersectionObserver((entries) => {
        // 默认取第一个entry
        let entry = entries[0]

        // 如果有多个entry,优先使用isIntersecting为true的entry
        if (entries.length > 1) {
          const intersectingEntry = entries.find((entry) => entry.isIntersecting)
          if (intersectingEntry) {
            entry = intersectingEntry
          }
        }

        // 调用可见性变化处理函数
        // 传入是否可见的布尔值和entry对象
        this.handleVisibilityChange(entry.isIntersecting, entry)
      }, this.intersectionOption)

      // 开始观察当前组件的根元素
      this.intersectionObserver.observe(this.$el)
    },

    // 移除交叉观察器
    removeIntersectionObserver() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.$el)
        this.intersectionObserver.disconnect()
        this.intersectionObserver = null
      }
    },

    // 过滤变更事件
    filterChangeEvent(params) {
      let eventParams = extend(false, { $grid: this }, params)

      // 如果是服务端过滤
      if (this.remoteFilter) {
        this.filterData = params.filters
        this.commitProxy('query')
      }

      emitEvent(this, 'filter-change', eventParams) // 触发正常vue监听的事件比如@filter-change
      this.emitter.emit('filter-change', eventParams) // 触发配置式监听的事件
    }
  }
})
</script>
