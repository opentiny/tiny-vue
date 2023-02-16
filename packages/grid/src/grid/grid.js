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
import { h, hooks, emitter, $prefix } from '@opentiny/vue-common'
import Modal from '@opentiny/vue-modal'
import Pager from '@opentiny/vue-pager'
import { Buttons } from '../adapter'
import { error } from '../tools'
import Table from '../table'
import GlobalConfig from '../config'
import methods, { setBodyRecords, invokeSaveDataApi, doRemoveOrShowMsg } from './methods'

const propKeys = Object.keys(Table.props)

function getRenderedToolbar({ $slots, _vm, loading, tableLoading, toolbar }) {
  return (_vm.renderedToolbar = (() => {
    let res = null

    if ($slots.toolbar) {
      res = $slots.toolbar()
    } else if (toolbar) {
      res = h(hooks.toRaw(toolbar.component), {
        ref: 'toolbar',
        props: { loading: loading || tableLoading, ...toolbar }
      })
    }

    return res
  })())
}

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
      ref: 'pager'
    })
  }

  return res
}

const createRender = (opt) => {
  const { h, _vm, vSize, props, selectToolbar, $slots, tableOns, renderedToolbar, loading, pagerConfig, pager, tableLoading } = opt
  return h(
    'div',
    {
      class: [
        'tiny-grid__wrapper',
        {
          [`size__${vSize}`]: vSize,
          'tiny-grid__animat': props.optimization.animat
        }
      ]
    },
    [
      selectToolbar ? null : renderedToolbar,
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

export default {
  name: `${$prefix}Grid`,
  components: {
    TinyGridTable: Table
  },
  provide() {
    return { $grid: this }
  },
  props: {
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
      toolBarVm: null
    }
  },
  computed: {
    isMsg() {
      return this.proxyOpts.message !== false
    },
    tableProps() {
      let rest = {}
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
    this.fetchOption = this.initFetchOption()
    this.pagerConfig = this.initPagerConfig()

    let { customs, events } = this

    if (customs) {
      this.tableCustoms = customs
    }

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
  },
  mounted() {
    let { columns, fetchOption, autoLoad, pagerSlot } = this

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

    if (fetchOption && autoLoad !== false) {
      this.commitProxy('query', this.toolBarVm && this.toolBarVm.orderSetting())
    }

    if (this.isMultipleHistory) {
      this.initMultipleHistory()
    }
  },
  setup(props, { slots, listeners, attrs }) {
    const tableListeners = getListeners(attrs, listeners)

    return { slots, tableListeners }
  },
  render() {
    let { editConfig, fetchOption, listeners, loading, optimization, pager, pagerConfig, remoteFilter, remoteSort, selectToolbar } = this
    let { seqIndex, slots: $slots, tableCustoms, tableData, tableListeners, tableLoading, tableProps, toolbar, vSize } = this
    let optimizOpt = { ...GlobalConfig.optimization, ...optimization }
    let props = { ...tableProps, optimization: optimizOpt, startIndex: seqIndex }
    let tableOns = { ...listeners, ...tableListeners }
    let { handleRowClassName: rowClassName, sortChangeEvent, filterChangeEvent } = this

    fetchOption && Object.assign(props, { loading: loading || tableLoading, data: tableData, rowClassName })
    fetchOption && remoteSort && (tableOns['sort-change'] = sortChangeEvent)
    fetchOption && remoteFilter && (tableOns['filter-change'] = filterChangeEvent)

    toolbar && !(toolbar.setting && toolbar.setting.storage) && (props.customs = tableCustoms)
    toolbar && (tableOns['update:customs'] = (value) => (this.tableCustoms = value))

    let editConfigOpt = { trigger: 'click', mode: 'cell', showStatus: true, ...editConfig }

    editConfig && (props.editConfig = Object.assign(editConfigOpt, { activeMethod: this.handleActiveMethod }))

    let renderedToolbar = getRenderedToolbar({ $slots, _vm: this, loading, tableLoading, toolbar })

    return createRender({ h, _vm: this, vSize, props, selectToolbar, renderedToolbar, tableOns, $slots, loading, pager, pagerConfig, tableLoading })
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
    getParentHeight() {
      let { $el, $refs } = this

      return $el.parentNode.clientHeight - ($refs.toolbar ? $refs.toolbar.$el.clientHeight : 0) - ($refs.pager?.$el ? $refs.pager.$el.clientHeight : 0)
    },
    handleRowClassName(params) {
      let rowClassName = this.rowClassName
      let clss = []

      if (this.pendingRecords.some((item) => item === params.row)) {
        clss.push('row__pending')
      }

      return clss.concat(rowClassName ? rowClassName(params) : [])
    },
    handleActiveMethod(params) {
      return !~this.pendingRecords.indexOf(params.row) && (!this.editConfig.activeMethod || this.editConfig.activeMethod(params))
    },
    handleFetch(code, sortArg) {
      let { pager, sortData, filterData, pagerConfig, fetchOption, fetchData, dataset } = this
      this.clearRadioRow()
      this.resetScrollTop()
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

      this.recalculate(true)

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
      } else if (~['reload', 'query'].indexOf(code)) {
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
          let selectedPending = pendings.some((item) => data === item)

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
}
