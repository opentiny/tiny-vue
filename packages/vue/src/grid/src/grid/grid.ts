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

import { isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { getListeners, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { extend } from '@opentiny/vue-renderless/common/object'
import { h, emitter, $prefix, $props, setup, defineComponent, resolveMode } from '@opentiny/vue-common'
import TinyGridTable from '../table'
import GlobalConfig from '../config'
import methods from './methods'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

const propKeys = Object.keys(TinyGridTable.props)

// 渲染主入口，创建表格最外层节点
function createRender(opt) {
  const {
    h,
    _vm,
    vSize,
    props,
    selectToolbar,
    $slots,
    tableOns,
    renderedToolbar,
    loading,
    pagerConfig,
    pager,
    tableLoading,
    viewType,
    columnAnchorParams,
    columnAnchor
  } = opt
  return h(
    'div',
    {
      class: [
        `tiny-grid__wrapper tiny-grid view_${viewType}`,
        {
          [`size__${vSize}`]: vSize,
          'tiny-grid__animat': props.optimization.animat
        }
      ]
    },
    [
      selectToolbar ? null : renderedToolbar,
      columnAnchor ? _vm.renderColumnAnchor(columnAnchorParams, _vm) : null,
      // 这里会渲染tiny-grid-column插槽内容，从而获取列配置
      h(TinyGridTable, { props, on: tableOns, ref: 'tinyTable' }, $slots.default && $slots.default()),
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
      seqIndex: this.startIndex,
      sortData: {},
      tableCustoms: [],
      tableData: [],
      tableLoading: false,
      tablePage: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      },
      toolBarVm: null,
      columnAnchorParams: {},
      columnAnchorKey: '',
      tasks: {}
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
    }
  },
  watch: {
    // 监听配置式columns数组
    columns(cols) {
      this.loadColumn(cols)
    },
    startIndex(value) {
      this.seqIndex = value
    },
    tableCustoms() {
      this.toolbar && this.$refs.toolbar && this.$refs.toolbar.loadStorage()
    }
  },
  created() {
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

    if (!prefetch && fetchOption && autoLoad !== false) {
      this.commitProxy('query', this.toolBarVm && this.toolBarVm.orderSetting())
    }

    if (this.isMultipleHistory) {
      this.initMultipleHistory()
    }

    this.addIntersectionObserver()
  },
  beforeUnmount() {
    this.removeIntersectionObserver()
  },
  setup(props, context) {
    const { listeners, attrs } = context
    // 处理表格用户传递过来的事件监听
    const tableListeners = getListeners(attrs, listeners)
    resolveMode(props, context)
    const renderless = (props, hooks, { designConfig = null }) => {
      return { tableListeners, designConfig }
    }

    return setup({ props, context, renderless, api: ['designConfig', 'tableListeners'] })
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
    const { columnAnchor, columnAnchorParams } = this

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
      $slots,
      loading,
      pager,
      pagerConfig,
      tableLoading,
      viewType,
      columnAnchorParams,
      columnAnchor
    })
  },
  methods: {
    ...methods,
    updateParentHeight() {
      if (!this.tasks.updateParentHeight) {
        this.tasks.updateParentHeight = debounce(10, () => {
          const { $el, $refs } = this
          const { tinyTable } = $refs

          if (tinyTable) {
            tinyTable.parentHeight =
              $el.parentNode.clientHeight -
              ($refs.toolbar ? $refs.toolbar.$el.clientHeight : 0) -
              ($refs.pager ? $refs.pager.$el.clientHeight : 0)
          }
        })
      }

      this.tasks.updateParentHeight()
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
