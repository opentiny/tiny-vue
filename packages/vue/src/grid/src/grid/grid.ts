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

import { isBoolean, toNumber } from '@opentiny/vue-renderless/grid/static/'
import { getListeners, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { extend } from '@opentiny/vue-renderless/common/object'
import {
  h,
  emitter,
  $prefix,
  $props,
  setup,
  defineComponent,
  resolveMode,
  resolveTheme,
  hooks,
  useBreakpoint
} from '@opentiny/vue-common'
import TinyGridTable from '../table'
import GlobalConfig from '../config'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

const { themes, viewConfig } = GlobalConfig
const { SAAS: T_SAAS } = themes
const { GANTT: V_GANTT, MF: V_MF, CARD: V_CARD } = viewConfig

const propKeys = Object.keys(TinyGridTable.props)

// 渲染主入口，创建表格最外层节点
function createRender(opt) {
  const {
    h,
    _vm,
    vSize,
    props,
    selectToolbar,
    slots,
    $slots,
    tableOns,
    renderedToolbar,
    loading,
    pagerConfig,
    pager,
    tableLoading,
    viewType,
    columnAnchorParams,
    columnAnchor,
    fullScreenClass
  } = opt
  return h(
    'div',
    {
      class: {
        [`tiny-grid__wrapper tiny-grid view_${viewType}`]: true,
        '!bg-transparent sm:!bg-color-bg-1': viewType === V_MF || viewType === V_CARD,
        [`size__${vSize}`]: vSize,
        'tiny-grid__animat': props.optimization.animat,
        [fullScreenClass]: true
      }
    },
    [
      selectToolbar ? null : renderedToolbar,
      columnAnchor ? _vm.renderColumnAnchor(columnAnchorParams, _vm) : null,
      // 这里会渲染tiny-grid-column插槽内容，从而获取列配置
      h(TinyGridTable, { props, on: tableOns, ref: 'tinyTable' }, slots.default && slots.default()),
      _vm.renderPager({
        $slots,
        _vm,
        loading,
        pager,
        pagerConfig,
        tableLoading,
        vSize
      })
    ]
  )
}

export default defineComponent({
  name: `${$prefix}Grid`,
  provide() {
    return { $grid: this }
  },
  props: {
    ...$props,
    columns: Array,
    proxyConfig: Object,
    fetchData: Object,
    saveData: Object,
    deleteData: Object,
    toolbar: Object,
    pager: Object,
    dataset: Object,
    autoLoad: {
      type: Boolean,
      default: true
    },
    seqSerial: {
      type: Boolean,
      default: false
    },
    events: Object,
    ...TinyGridTable.props,
    isBeforePageChange: Boolean,
    showSaveMsg: {
      type: Boolean,
      default: false
    },
    isMultipleHistory: Boolean,
    selectToolbar: [Boolean, Object]
  },
  data() {
    return {
      emitter: emitter(),
      fetchOption: null,
      filterData: [],
      listeners: {},
      pagerConfig: null,
      // 存放标记为删除的行数据
      pendingRecords: [],
      sortData: {},
      tableCustoms: [],
      tableData: [],
      tableLoading: false,
      tablePage: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      },
      columnAnchorParams: {},
      columnAnchorKey: '',
      tasks: {},
      fullScreenClass: '',
      isInitialLoading: true // 是否首次加载数据
    }
  },
  computed: {
    // 工具栏按钮保存和删除时是否弹出提示信息
    isMsg() {
      return this.proxyOpts.message !== false
    },
    tableProps() {
      const rest = {}
      // 这里收集table组件的props，然后提供给下层组件使用
      propKeys.forEach((key) => (rest[key] = this[key]))
      return rest
    },
    proxyOpts() {
      // 此处需要深拷贝，不然会影响全局配置
      return extend(true, {}, GlobalConfig.grid.proxyConfig, this.proxyConfig)
    },
    vSize() {
      return this.size || (this.$parent && this.$parent.size) || (this.$parent && this.$parent.vSize)
    },
    seqIndex() {
      let { seqSerial, scrollLoad, pagerConfig, startIndex } = this
      let seqIndexValue = startIndex

      if ((seqSerial || scrollLoad) && pagerConfig) {
        seqIndexValue = (pagerConfig.currentPage - 1) * pagerConfig.pageSize + startIndex
      }

      return seqIndexValue
    },
    isThemeSaas() {
      return this.tinyTheme === T_SAAS
    },
    isModeMobileFirst() {
      return this.tinyMode === 'mobile-first'
    },
    isViewGantt() {
      return this.viewType === V_GANTT
    }
  },
  watch: {
    // 监听配置式columns数组
    columns(cols) {
      this.loadColumn(cols)
    },
    tableCustoms() {
      this.toolbar && this.$refs.toolbar && this.$refs.toolbar.loadStorage()
    },
    columnAnchorParams() {
      setTimeout(() => this.emitter.emit('active-anchor'), this.columnAnchorParams.activeAnchor.delay)
    },
    viewType(value) {
      // 在全屏状态下切换到表格视图时额外刷新一次表格布局，解决此场景下列宽未自动撑开问题
      if (value === V_MF && this.fullScreenClass) {
        this.$nextTick(() => this.recalculate(true))
      }
    }
  },
  created() {
    // 实例缓存，解决grid/toolbar/table等相互关联问题
    this.vmStore = Object.create(null)
    // 初始化fetchApi选项
    this.fetchOption = this.initFetchOption()
    this.pagerConfig = this.initPagerConfig()

    let { customs, events, prefetch, fetchOption, autoLoad } = this

    // 初始化表格个性化配置，用户可以配置customs
    if (customs) {
      this.tableCustoms = customs
    }

    // 处理通过配置式方式传递过来的事件列表events
    if (events) {
      const listeners = {}

      for (let event in events) {
        if (Object.prototype.hasOwnProperty.call(events, event)) {
          let evkey = event.replace(/\B([A-Z])/g, '-$1').toLowerCase()

          listeners[evkey] = events[event]

          if (~['pageChange', 'sortChange', 'filterChange', 'toolbarButtonClick'].indexOf(event)) {
            this.emitter.on(evkey, events[event])
          }
        }
      }

      this.listeners = listeners
    }

    // 在created生命周期阶段执行fetch-data
    if (prefetch && fetchOption && autoLoad !== false) {
      if (Array.isArray(prefetch)) {
        this.commitProxy('prefetch', prefetch)
      } else {
        this.commitProxy('prefetch')
      }
    }
  },
  mounted() {
    let { columns, fetchOption, autoLoad, pagerSlot, prefetch } = this

    // pager插槽中内置pager组件事件处理
    if (pagerSlot) {
      const {
        componentOptions: { listeners = {} },
        componentInstance
      } = pagerSlot

      if (!listeners['size-change']) {
        componentInstance.$on('size-change', this.pageSizeChange)
      }

      if (!listeners['current-change']) {
        componentInstance.$on('current-change', this.pageCurrentChange)
      }
    }

    if (columns && columns.length) {
      this.loadColumn(this.columns)
    }

    // 默认在mounted阶段执行fetch-data
    if (!prefetch && fetchOption) {
      /*
       *_pageSizeChangeCallback：先更新本地缓存的pageSize到表格内部，再判断autoLoad，再发起数据请求（如果autoLoad为true）
       * 功能优化：额外增加autoLoad为false时也执行，保证本地缓存的pageSize更新到表格内部与autoLoad取值无关
       */
      if (this._pageSizeChangeCallback) {
        this._pageSizeChangeCallback()
        this._pageSizeChangeCallback = null
      } else if (autoLoad) {
        // 如果_pageSizeChangeCallback不存在且autoLoad为true就发起数据请求
        const toolbarVm = this.getVm('toolbar')
        this.commitProxy('query', toolbarVm && toolbarVm.orderSetting())
      }
    }

    if (this.isMultipleHistory) {
      this.initMultipleHistory()
    }

    this.addIntersectionObserver()
  },
  setup(props, context) {
    const { listeners, attrs } = context
    // 处理表格用户传递过来的事件监听
    const tableListeners = getListeners(attrs, listeners)
    const tinyTheme = hooks.ref(resolveTheme(props, context))
    const tinyMode = hooks.ref(resolveMode(props, context))
    const breakpoint = useBreakpoint()

    const renderless = (props, hooks, { designConfig = null }) => {
      return { tableListeners, designConfig, tinyTheme, tinyMode, currentBreakpoint: breakpoint.current }
    }

    hooks.onBeforeUnmount(() => {
      const gridVm = hooks.getCurrentInstance().proxy

      gridVm.removeIntersectionObserver()
      // 清空被缓存实例
      gridVm.vmStore = null
    })

    return setup({
      props,
      context,
      renderless,
      api: ['designConfig', 'tableListeners', 'tinyTheme', 'tinyMode', 'currentBreakpoint']
    })
  },
  render() {
    const {
      editConfig,
      fetchOption,
      listeners,
      loading,
      optimization,
      pager,
      pagerConfig,
      remoteFilter,
      remoteSort,
      selectToolbar
    } = this as any
    const {
      seqIndex,
      slots: $slots,
      tableCustoms,
      tableData,
      tableListeners,
      tableLoading,
      tableProps,
      toolbar,
      vSize,
      designConfig,
      viewType
    } = this as any
    const { columnAnchor, columnAnchorParams, fullScreenClass } = this

    // grid全局替换smb图标
    if (designConfig?.icons) {
      Object.assign(GlobalConfig.icon, designConfig.icons)
    }

    // 初始化虚拟滚动优化配置
    const optimizOpt = { ...GlobalConfig.optimization, ...optimization }
    const props = { ...tableProps, optimization: optimizOpt, startIndex: seqIndex }

    // 在用户没有配置stripe时读取design配置
    if (designConfig?.stripe !== undefined && !props.stripe) {
      // aurora规范默认带斑马条纹
      props.stripe = designConfig?.stripe
    }

    const tableOns = { ...listeners, ...tableListeners }
    const { handleRowClassName: rowClassName, sortChangeEvent, filterChangeEvent } = this

    // fetchApi状态下初始化 loading、remoteSort、remoteFilter
    if (fetchOption) {
      Object.assign(props, { loading: loading || tableLoading, data: tableData, rowClassName })
      remoteSort && (tableOns['sort-change'] = sortChangeEvent)
      remoteFilter && (tableOns['filter-change'] = filterChangeEvent)
    }

    // 处理表格工具栏和个性化数据
    toolbar && !(toolbar.setting && toolbar.setting.storage) && (props.customs = tableCustoms)
    toolbar && (tableOns['update:customs'] = (value) => (this.tableCustoms = value))
    // 列就绪事件处理
    tableOns['column-init-ready'] = this.handleColumnInitReady

    // 这里handleActiveMethod处理一些编辑器的声明周期的拦截，用户传递过来的activeMethod优先级最高
    if (editConfig) {
      props.editConfig = {
        trigger: 'click',
        mode: 'cell',
        showStatus: true,
        ...editConfig,
        activeMethod: this.handleActiveMethod
      }
    }

    // 获取工具栏的渲染器
    const renderedToolbar = this.getRenderedToolbar({ $slots, _vm: this, loading, tableLoading, toolbar })

    // 创建表格最外层容器，并加载table组件
    return createRender({
      h,
      _vm: this,
      vSize,
      props,
      selectToolbar,
      renderedToolbar,
      tableOns,
      slots: this.slots,
      $slots,
      loading,
      pager,
      pagerConfig,
      tableLoading,
      viewType,
      columnAnchorParams,
      columnAnchor,
      fullScreenClass
    })
  },
  methods: {
    // 配置高度减去（表格锚点+工具栏+分页）计算得出表格高度
    updateParentHeight() {
      if (!this.tasks.updateParentHeight) {
        this.tasks.updateParentHeight = debounce(10, () => {
          const { $el, $refs } = this
          const { tinyTable, tinyGridColumnAnchor } = $refs
          const toolbarVm = this.getVm('toolbar')

          if (tinyTable) {
            let columnAnchorHeight = 0
            if (tinyGridColumnAnchor) {
              const { height, marginTop, marginBottom } = getComputedStyle(tinyGridColumnAnchor)
              columnAnchorHeight = toNumber(height) + toNumber(marginTop) + toNumber(marginBottom)
            }
            tinyTable.parentHeight =
              $el.parentNode.clientHeight -
              (toolbarVm ? toolbarVm.$el.clientHeight : 0) -
              columnAnchorHeight -
              ($refs.pager ? $refs.pager.$el.clientHeight : 0)
          }
        })
      }

      this.tasks.updateParentHeight()
    },
    // 向缓存添加实例
    connect({ name, vm }) {
      if (name && typeof name === 'string' && vm) {
        this.vmStore[name] = vm
      }
    },
    createJob(type, callback) {
      if (type === 'pageSizeChangeCallback') {
        this._pageSizeChangeCallback = callback
      } else if (type === 'updateCustomsCallback') {
        // 表格可能有多个工具栏，因此工具栏个性化配置的回调应该是个数组
        this._updateCustomsCallback = this._updateCustomsCallback || []
        this._updateCustomsCallback.push(callback)
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
      if (this._updateCustomsCallback) {
        this._updateCustomsCallback.forEach((fn) => {
          fn()
        })
        this._updateCustomsCallback = []
      }
    },
    handleRowClassName(params) {
      let rowClassName = this.rowClassName
      let clss = []

      if (this.pendingRecords.includes(params.row)) {
        clss.push('row__pending')
      }

      return clss.concat(rowClassName ? rowClassName(params) : [])
    },
    handleActiveMethod(params) {
      return (
        !~this.pendingRecords.indexOf(params.row) &&
        (!this.editConfig.activeMethod || this.editConfig.activeMethod(params))
      )
    },
    sortChangeEvent(params) {
      let remoteSort = this.remoteSort
      let column = params.column
      let eventParams = extend(false, { $grid: this }, params)
      // 如果是服务端排序
      if (isBoolean(column.remoteSort) ? column.remoteSort : remoteSort) {
        this.sortData = params
        this.tablePage.currentPage = 1
        this.commitProxy('query')
      }

      emitEvent(this, 'sort-change', eventParams)
      this.emitter.emit('sort-change', eventParams)
    },
    viewCls(module) {
      return GlobalConfig.viewConfig[module][this.viewType] || ''
    },
    // 监听某个元素是否出现在视口中
    addIntersectionObserver() {
      if (this.intersectionOption && this.intersectionOption.disabled) return

      this.intersectionObserver = new IntersectionObserver((entries) => {
        let entry = entries[0]

        if (entries.length > 1) {
          const intersectingEntry = entries.find((entry) => entry.isIntersecting)

          if (intersectingEntry) {
            entry = intersectingEntry
          }
        }

        this.handleVisibilityChange(entry.isIntersecting, entry)
      }, this.intersectionOption)

      this.intersectionObserver.observe(this.$el)
    },
    removeIntersectionObserver() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.$el)
        this.intersectionObserver.disconnect()
        this.intersectionObserver = null
      }
    },
    filterChangeEvent(params) {
      let eventParams = extend(false, { $grid: this }, params)
      // 如果是服务端过滤
      if (this.remoteFilter) {
        this.filterData = params.filters
        this.commitProxy('query')
      }

      emitEvent(this, 'filter-change', eventParams)
      this.emitter.emit('filter-change', eventParams)
    }
  }
})
