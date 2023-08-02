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

import { getObj } from '@opentiny/vue-renderless/common/object'
import { isBoolean, slice } from '@opentiny/vue-renderless/grid/static/'
import { removeClass, addClass } from '@opentiny/vue-renderless/common/deps/dom'
import { getDataset } from '@opentiny/vue-renderless/common/dataset'
import { getListeners, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { extend } from '@opentiny/vue-renderless/common/object'
import { h, hooks, emitter, $prefix, $props, setup, defineComponent, resolveMode } from '@opentiny/vue-common'
import Modal from '@opentiny/vue-modal'
import Pager from '@opentiny/vue-pager'
import { Buttons } from '../adapter'
import { error } from '../tools'
import Table from '../table'
import GlobalConfig from '../config'
import methods, { setBodyRecords, invokeSaveDataApi, doRemoveOrShowMsg } from './methods'
import { iconMarkOn } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

const propKeys = Object.keys(Table.props)

// 表格工具栏渲染器
function getRenderedToolbar({ $slots, _vm, loading, tableLoading, toolbar }) {
  return (_vm.renderedToolbar = (() => {
    let res = null

    if ($slots.toolbar) {
      res = $slots.toolbar()
    } else if (toolbar) {
      res = h(hooks.toRaw(toolbar.component), {
        ref: 'toolbar',
        props: { loading: loading || tableLoading, ...toolbar },
        class: _vm.viewCls('toolbar')
      })
    }

    return res
  })())
}

// 表格内置分页渲染器
function renderPager({ $slots, _vm, loading, pager, pagerConfig, tableLoading, vSize }) {
  let res = null
  if ($slots.pager) {
    res = $slots.pager()
  } else if (pager) {
    pager.component = pager.component || Pager
    res = h(hooks.toRaw(pager.component), {
      props: {
        size: vSize,
        loading: loading || tableLoading,
        isBeforePageChange: _vm.isBeforePageChange || _vm.showSaveMsg,
        accurateJumper: _vm.autoLoad,
        ...pagerConfig
      },
      on: {
        'size-change': _vm.pageSizeChange,
        'current-change': _vm.pageCurrentChange,
        'before-page-change': _vm.beforePageChangeHandler
      },
      ref: 'pager',
      class: _vm.viewCls('pager')
    })
  }

  return res
}

function renderColumnAnchor(params, _vm) {
  const { anchors = [], action = () => { } } = params || {}
  const { viewType } = _vm
  return h(
    'div',
    {
      class: ['tiny-grid__column-anchor', _vm.viewCls('columnAnchor')],
      style: viewType === 'default' ? 'display:flex' : '',
      key: _vm.columnAnchorKey
    },
    anchors.map((anchor) => {
      const { active = false, label = '', field = '', render } = anchor

      if (typeof render === 'function') {
        return render({ h, anchor, action })
      }

      const itemClass = { 'tiny-grid__column-anchor-item': true, 'tiny-grid__column-anchor-item--active': active }
      const itemOn = { click: (e) => action(field, e) }
      const iconVnode = active ? h(iconMarkOn(), { class: 'tiny-grid__column-anchor-item-icon' }) : null
      const spanVnode = h('span', label)

      return h('div', { class: itemClass, on: itemOn }, [iconVnode, spanVnode])
    })
  )
}

// 渲染主入口，创建表格最外层节点
function createRender(opt) {
  const { h, _vm, vSize, props, selectToolbar, $slots, tableOns, renderedToolbar, loading, pagerConfig, pager, tableLoading, viewType, columnAnchorParams, columnAnchor } = opt
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
      columnAnchor ? renderColumnAnchor(columnAnchorParams, _vm) : null,
      // 这里会渲染tiny-grid-column插槽内容，从而获取列配置
      h('tiny-grid-table', { props, on: tableOns, ref: 'tinyTable' }, $slots.default && $slots.default()),
      renderPager({
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
  components: {
    TinyGridTable: Table
  },
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
    ...Table.props,
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
    isMsg() {
      return this.proxyOpts.message !== false
    },
    tableProps() {
      let rest = {}
      // 这里收集table组件的props，然后提供给下层组件使用
      propKeys.forEach((key) => (rest[key] = this[key]))
      return rest
    },
    proxyOpts() {
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
      return ({ tableListeners, designConfig })
    }

    return setup({ props, context, renderless, api: ['designConfig', 'tableListeners'] })
  },
  render() {
    const { editConfig, fetchOption, listeners, loading, optimization, pager, pagerConfig, remoteFilter, remoteSort, selectToolbar } = this as any
    const { seqIndex, slots: $slots, tableCustoms, tableData, tableListeners, tableLoading, tableProps, toolbar, vSize, designConfig, viewType } = this as any
    const { columnAnchor, columnAnchorParams } = this

    // grid全局替换smb图标
    if (designConfig?.icons) {
      Object.assign(GlobalConfig.icon, designConfig.icons)
    }

    // 初始化虚拟滚动优化配置
    let optimizOpt = { ...GlobalConfig.optimization, ...optimization }
    let props = { ...tableProps, optimization: optimizOpt, startIndex: seqIndex }
    // 在用户没有配置stripe时读取design配置
    if (designConfig?.stripe !== undefined && !props.stripe) {
      // aurora规范默认带斑马条纹
      props.stripe = designConfig?.stripe
    }

    let tableOns = { ...listeners, ...tableListeners }
    let { handleRowClassName: rowClassName, sortChangeEvent, filterChangeEvent } = this

    // fetchApi状态下初始化 loading、remoteSort、remoteFilter
    fetchOption && Object.assign(props, { loading: loading || tableLoading, data: tableData, rowClassName })
    fetchOption && remoteSort && (tableOns['sort-change'] = sortChangeEvent)
    fetchOption && remoteFilter && (tableOns['filter-change'] = filterChangeEvent)

    // 处理表格工具栏和个性化数据
    toolbar && !(toolbar.setting && toolbar.setting.storage) && (props.customs = tableCustoms)
    toolbar && (tableOns['update:customs'] = (value) => (this.tableCustoms = value))

    // 初始化表格编辑配置
    let editConfigOpt = { trigger: 'click', mode: 'cell', showStatus: true, ...editConfig }

    // 这里handleActiveMethod处理一些编辑器的声明周期的拦截，用户传递过来的activeMethod优先级最高
    editConfig && (props.editConfig = Object.assign(editConfigOpt, { activeMethod: this.handleActiveMethod }))

    // 获取工具栏的渲染器
    let renderedToolbar = getRenderedToolbar({ $slots, _vm: this, loading, tableLoading, toolbar })

    // 创建表格最外层容器，并加载table组件
    return createRender({ h, _vm: this, vSize, props, selectToolbar, renderedToolbar, tableOns, $slots, loading, pager, pagerConfig, tableLoading, viewType, columnAnchorParams, columnAnchor })
  },
  methods: {
    ...methods,
    initPagerConfig() {
      let { $slots, fetchOption, scrollLoad = {} } = this
      let pagerProps = {}

      if (fetchOption) {
        let pagerSlot = $slots.pager && $slots.pager[0]

        if (pagerSlot) {
          let { componentOptions, children } = pagerSlot

          if (componentOptions && !children) {
            this.pagerSlot = pagerSlot
            pagerProps = componentOptions.propsData
          }
        } else if (this.pager) {
          pagerProps = this.pager.attrs
        }

        if (this.pager || $slots.pager || this.scrollLoad) {
          return Object.assign(this.tablePage, { pageSize: scrollLoad.pageSize }, pagerProps)
        }

        return fetchOption.args && fetchOption.args.page
      }
    },
    initFetchOption() {
      let { fetchData = {}, dataset = {} } = this

      if (fetchData.api || dataset.source || dataset.value || dataset.api) {
        let { loading, fields, api } = fetchData || dataset.source || dataset.api || {}

        return { api, dataset, fields, loading }
      }
    },
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
      return !~this.pendingRecords.indexOf(params.row) && (!this.editConfig.activeMethod || this.editConfig.activeMethod(params))
    },
    handleFetch(code, sortArg) {
      let { pager, sortData, filterData, pagerConfig, fetchOption, fetchData, dataset } = this

      if (code !== 'prefetch') {
        this.clearRadioRow()
        this.resetScrollTop()
      }

      if (!fetchOption) {
        error('ui.grid.error.notQuery')
        return this.$nextTick()
      }

      let { args, loading } = fetchData || dataset.source || dataset.api || {}
      let { field, order, prop, property } = sortData
      let sortByData = { field, order, prop, property }
      let params = {
        $grid: this,
        sort: sortData,
        sortBy: sortByData,
        filters: filterData,
        ...args
      }
      let search
      this.tableLoading = loading

      if (pagerConfig) {
        params.page = pagerConfig
      }

      if (code === 'reload') {
        if (pager || args.page) {
          pagerConfig.currentPage = 1
        }
        this.sortData = params.sort = {}
        this.filterData = params.filters = []
        this.pendingRecords = []
        this.clearAll()
      }

      if (sortArg && sortArg.length > 0) {
        params.sortBy = sortArg
      }

      if (fetchData && fetchData.api) {
        search = fetchData.api.apply(this, [params])
      } else {
        search = getDataset({ dataset, service: this.$service }, params)
      }

      return search.then(this.loadFetchData).catch((error) => {
        this.tableLoading = false
        throw error
      })
    },
    loadFetchData(rest) {
      if (!rest) {
        this.tableData = []
        this.tableLoading = false
        return
      }

      let {
        fetchOption: { fields = {} },
        pagerConfig,
        pagerSlot
      } = this

      if (pagerConfig && !Array.isArray(rest)) {
        let total = getObj(rest, fields.total || 'page.total') || rest?.result?.length || 0
        let data = getObj(rest, fields.result || fields.data || 'result') || []

        this.tableData = data
        pagerConfig.total = total
        // 内置pager
        let setTotal = pagerSlot && pagerSlot.componentInstance.setTotal

        setTotal && setTotal(total)
      } else {
        this.tableData = (fields.list ? getObj(rest, fields.list) : rest) || []
      }

      if ((this.seqSerial || this.scrollLoad) && pagerConfig) {
        this.seqIndex = (pagerConfig.currentPage - 1) * pagerConfig.pageSize
      }

      this.tableLoading = false
    },
    handleSave(code, args) {
      let { saveData, isMsg } = this

      if (!saveData) {
        error('ui.grid.error.notSave')
        return
      }

      let body = extend(true, { pendingRecords: this.pendingRecords }, this.getRecordset())
      let { insertRecords, removeRecords, updateRecords, pendingRecords } = body
      let validRows = insertRecords.concat(updateRecords)
      let getCallback = (resolve) => (valid) => {
        if (!valid) {
          resolve(valid)
          return
        }

        let canInvoke = invokeSaveDataApi({ _vm: this, args, body, code, removeRecords, resolve, saveData, updateRecords, valid })

        doRemoveOrShowMsg({ _vm: this, canInvoke, code, isMsg, pendingRecords, resolve, valid })
      }

      // 排除掉新增且标记为删除的数据，排除已标记为删除的数据
      setBodyRecords({ body, insertRecords, pendingRecords })

      // 只校验新增和修改的数据
      return new Promise((resolve) => {
        this.validate(validRows, getCallback(resolve))
      })
    },
    handleDelete(code, args) {
      let { deleteData, isMsg } = this

      if (!deleteData) {
        error('ui.grid.error.notDelete')
        return
      }

      let selecteds = this.getSelectRecords(true)
      let afterRemove = () => {
        let removeds = this.getRemoveRecords()

        if (!removeds.length && isMsg && !selecteds.length) {
          Modal.message({
            id: code,
            message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
            status: 'warning'
          })
        }

        if (removeds.length) {
          let apiArgs = [{ $grid: this, changeRecords: { removeRecords: removeds } }, ...args]
          let stopLoading = () => {
            this.tableLoading = false
          }

          this.tableLoading = true

          return deleteData.api
            .apply(this, apiArgs)
            .then(stopLoading)
            .catch(stopLoading)
            .then(() => this.commitProxy('reload'))
        }
      }

      this.remove(selecteds).then(afterRemove)
    },
    handleFullScreen([show]) {
      const cls = 'tiny-fullscreen-full'

      show ? addClass(this.$el, cls) : removeClass(this.$el, cls)

      this.recalculate()

      emitEvent(this, 'fullscreen', show)
      this.emitter.emit('fullscreen', show)
    },
    commitProxy(code) {
      let btnMethod = Buttons.get(code)
      let args = slice(arguments, 1)

      if (code === 'insert') {
        this.insert()
      } else if (code === 'insert_actived') {
        this.insert().then(({ row }) => this.setActiveRow(row))
      } else if (code === 'mark_cancel') {
        this.triggerPendingEvent(code)
      } else if (code === 'delete_selection') {
        this.handleDeleteRow(code, 'ui.grid.deleteSelectRecord', () => this.commitProxy.apply(this, ['delete'].concat(args)))
      } else if (code === 'remove_selection') {
        this.handleDeleteRow(code, 'ui.grid.removeSelectRecord', () => this.removeSelecteds())
      } else if (code === 'export') {
        this.exportCsv()
      } else if (code === 'reset_custom') {
        this.resetAll()
      } else if (~['reload', 'query', 'prefetch'].indexOf(code)) {
        this.handleFetch(code, args)
      } else if (code === 'delete') {
        this.handleDelete(code, args)
      } else if (code === 'save') {
        this.handleSave()
      } else if (code === 'fullscreen') {
        this.handleFullScreen(args)
      } else if (btnMethod) {
        btnMethod.call(this, { code, $grid: this }, ...args)
      }

      return this.$nextTick()
    },
    handleDeleteRow(code, i18nKey, callback) {
      let selecteds = this.getSelectRecords()

      if (this.isMsg && selecteds.length) {
        Modal.confirm(GlobalConfig.i18n(i18nKey)).then((type) => {
          type === 'confirm' && callback()
        })
      }

      if (this.isMsg && !selecteds.length) {
        Modal.message({
          id: code,
          message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
          status: 'warning'
        })
      }

      if (!this.isMsg && selecteds.length) {
        callback()
      }
    },
    getPendingRecords() {
      return this.pendingRecords
    },
    triggerToolbarBtnEvent(button, event) {
      let { events = {}, tableListeners } = this
      let { code } = button

      if (!events.toolbarButtonClick && !tableListeners['toolbar-button-click']) {
        this.commitProxy(code, event)
      }

      emitEvent(this, 'toolbar-button-click', [{ code, button, $grid: this }, event])

      this.emitter.emit('toolbar-button-click', { code, button, $grid: this }, event)
    },
    triggerPendingEvent(code) {
      let { isMsg, pendingRecords: pendings } = this
      let selectColumn = this.getColumns().filter((col) => ~['selection', 'radio'].indexOf(col.type))
      let isSelection = selectColumn.length && selectColumn[0].type === 'selection'
      let isRadio = selectColumn.length && selectColumn[0].type === 'radio'
      let selecteds = isSelection ? this.getSelectRecords(true) : isRadio ? [this.getRadioRow()] : []

      if (!selecteds.length && isMsg) {
        Modal.message({
          id: code,
          message: GlobalConfig.i18n('ui.grid.selectOneRecord'),
          status: 'warning'
        })
      }

      if (selecteds.length) {
        let { plus = [], minus = [], tmp } = {}

        selecteds.forEach((data) => {
          let selectedPending = pendings.includes(data)

          tmp = selectedPending ? minus : plus
          tmp.push(data)
        })

        tmp = minus.length ? pendings.filter((item) => !~minus.indexOf(item)) : pendings
        this.pendingRecords = tmp.concat(plus)

        isSelection && this.clearSelection()
        isRadio && this.clearRadioRow()
      }
    },
    pageChangeEvent(params) {
      let eventParams = extend(false, { $grid: this }, params)

      emitEvent(this, 'page-change', eventParams)
      this.emitter.emit('page-change', eventParams)
      this.commitProxy('query', this.toolBarVm && this.toolBarVm.orderSetting())
    },
    // size为页大小，load为false则触发change事件与查询，在个性化初始化时根据autoload控制是否加载数据
    pageSizeChange(size, load) {
      this.tablePage.pageSize = size
      this.tablePage.currentPage = 1
      load || this.pageChangeEvent(this.tablePage)
    },
    pageCurrentChange(current) {
      this.tablePage.currentPage = current
      this.pageChangeEvent(this.tablePage)
    },
    beforePageChangeHandler(params) {
      if (!this.showSaveMsg) {
        let eventParams = extend(false, { $grid: this }, params)

        emitEvent(this, 'before-page-change', eventParams)
        this.emitter.emit('before-page-change', eventParams)

        return
      }

      let { callback, rollback } = params
      let { insertRecords, removeRecords, updateRecords } = this.getRecordset()

      if (insertRecords.length || removeRecords.length || updateRecords.length) {
        let next = (res) => {
          if (res === 'confirm') {
            rollback && rollback()
            emitEvent(this, 'cancel-page-change', this)
            this.emitter.emit('cancel-page-change', this)
          } else {
            callback && callback()
          }
        }

        Modal.confirm(GlobalConfig.i18n('ui.grid.isSaveMsg')).then(next)
      } else {
        callback && callback()
      }
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
    buildColumnAnchorParams() {
      let { columnAnchor } = this
      let visibleColumn = this.getColumns()
      let anchors = []
      let getAnchor = (property, label) => {
        const column = visibleColumn.find((col) => !col.type && col.property === property)
        let anchorName = ''
        let anchorRender = null

        if (typeof label !== 'undefined') {
          if (typeof label === 'string') {
            anchorName = label
          } else if (Array.isArray(label) && label.length) {
            anchorName = String(label[0])
            anchorRender = label[1]
          }
        }

        if (column) {
          anchors.push({
            label: anchorName || (typeof column.title === 'string' ? column.title : ''),
            field: property,
            active: false,
            render: anchorRender
          })
        }
      }

      if (Array.isArray(columnAnchor) && columnAnchor.length) {
        columnAnchor.map((item) => {
          if (typeof item === 'string') {
            getAnchor(item)
          } else if (Array.isArray(item) && item.length) {
            getAnchor(item[0], item[1])
          }
        })
      }

      this.columnAnchorParams = { anchors, action: (field, e) => this.anchorAction({ field, anchors, _vm: this, e }) }
    },
    anchorAction({ field, anchors, _vm }) {
      const fromAnchor = anchors.find((anchor) => anchor.active)
      const toAnchor = anchors.find((anchor) => anchor.field === field)

      if (toAnchor && fromAnchor !== toAnchor) {
        if (fromAnchor && fromAnchor.active) {
          fromAnchor.active = false
        }

        if (!toAnchor.active) {
          toAnchor.active = true
          _vm.columnAnchorKey = field

          _vm.$nextTick((found = false) => {
            const visibleColumn = _vm.getColumns()
            const column = visibleColumn.find((col) => !col.type && col.property === field)
            const width = visibleColumn
              .filter((col) => !col.fixed)
              .map((col) => (col === column && (found = true), found ? 0 : col.renderWidth))
              .reduce((p, c) => p + c, 0)

            if (column) {
              _vm.scrollTo(width)
            }
          })
        }
      }
    },
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
