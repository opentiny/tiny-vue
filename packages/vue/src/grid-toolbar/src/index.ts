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
import { isNumber } from '@opentiny/vue-renderless/common/type'
import { iconMinscreen, iconFullscreen } from '@opentiny/vue-icon'
import { h, hooks, $prefix, defineComponent, appProperties, $props, } from '@opentiny/vue-common'
import { toStringJSON, isEmpty, isPlainObject, toJSONString, find } from '@opentiny/vue-renderless/grid/static/'
import {
  getFuncText,
  emitEvent,
  getEventTargetNode,
  GlobalEvent,
  getListeners
} from '@opentiny/vue-renderless/grid/utils'
import GridCustom from './custom.vue'
import GridCustomSelect from './custom-select.vue'
import GridCustomSaas from './custom-saas.vue'
import { GridButton, GridConfig, GridAdapter, GridTools } from '@opentiny/vue-grid'

const classMap = {
  isActive: 'is__active'
}

function createMacroTask({ _vm }) {
  setTimeout(() => {
    if (_vm.settingStore.activeBtn || _vm.settingStore.activeWrapper) return
    _vm.closeSetting()
  }, 300)
}

function renderToolsWrapper({ _vm, $tools, $grid, table }) {
  return h('div', { class: 'tiny-grid-tools__wrapper' }, $tools.call(_vm, { $grid, $table: table }, h))
}

function renderFullScreenWrapper({ _vm }) {
  return h('div', { class: 'tiny-grid-fullscreen__wrapper' }, [
    h(
      'div',
      {
        class: 'tiny-grid-fullscreen__btn',
        on: { click: _vm.fullscreenEvent }
      },
      [
        h(_vm.isFull ? GridConfig.icon.minscreen : GridConfig.icon.fullscreen, {
          class: 'tiny-svg-size'
        })
      ]
    )
  ])
}

function renderRefreshWrapper({ _vm }) {
  return h('div', { class: 'tiny-grid-refresh__wrapper' }, [
    h('div', { class: 'tiny-grid-refresh__btn', on: { click: _vm.refreshEvent } }, [
      h(GridConfig.icon.refresh, {
        class: ['tiny-svg-size', { roll: _vm.isRefresh }]
      })
    ])
  ])
}

function renderCustomWrapper({ _vm, settingStore, settingsBtnOns, tableFullColumn, setting, initSettings }) {
  return h(
    'div',
    {
      class: ['tiny-grid-custom__wrapper', { [classMap.isActive]: settingStore.customVisible }],
      ref: 'customWrapper'
    },
    [
      h('div', { class: 'tiny-grid-custom__setting-btn', on: settingsBtnOns }, [
        setting?.simple
          ? h('tiny-grid-custom-select', {
            on: {
              saveSettings: _vm.handleSaveSettings
            },
            props: {
              data: tableFullColumn,
              setting,
              value: settingStore.customVisible
            }
          })
          : h(GridConfig.icon.custom, { class: 'tiny-svg-size' })
      ]),
      h('div', { class: 'tiny-grid-custom__option-wrapper' }, [
        h(_vm.customMode === 'saas' ? 'tiny-grid-custom-saas' : 'tiny-grid-custom', {
          on: {
            showModal: (modalVisible) => (settingStore.customVisible = modalVisible),
            saveSettings: _vm.handleSaveSettings,
            resetSettings: (settings) => _vm.$emit('reset-setting', settings),
            cancelSettings: () => _vm.$emit('cancel-setting')
          },
          props: {
            customMode: _vm.customMode,
            data: tableFullColumn,
            value: settingStore.customVisible,
            other: setting.other,
            search: setting.search,
            keys: setting.keys,
            sortable: setting.sortable,
            filter: setting.filter,
            onBeforeMove: setting.onBeforeMove,
            rowClassName: setting.rowClassName,
            refresh: setting.refresh,
            numberSorting: setting.numberSorting,
            multipleHistory: setting.multipleHistory,
            initSettings,
            resetMethod: _vm.resetMethod,
            alwaysShowColumns: setting.alwaysShowColumns,
            columnsGroup: setting.columnsGroup
          },
          ref: 'custom'
        })
      ])
    ]
  )
}

function getScopedSlots({ item, _vm }) {
  let scopedSlots = null
  let childHandler = (child) => {
    let res = [null]

    if (child.visible !== false) {
      res = h(
        GridButton,
        {
          on: {
            click: (event) => _vm.btnEvent(event, child)
          },
          props: {
            disabled: child.disabled
          }
        },
        getFuncText(child.name)
      )
    }

    return res
  }

  if (item.dropdowns && item.dropdowns.length) {
    scopedSlots = {
      default: () => getFuncText(item.name),
      dropdowns: () => item.dropdowns.map(childHandler)
    }
  }

  return scopedSlots
}

function renderButtonWrapper({ _vm, $buttons, $grid, table, buttons }) {
  let childrenArg

  if ($buttons) {
    childrenArg = $buttons.call(_vm, { $grid, $table: table }, h)
  } else {
    childrenArg = buttons.map((item) => {
      let res = [null]

      if (item.visible !== false) {
        let scopedSlots = getScopedSlots({ item, _vm })

        res = h(
          GridButton,
          {
            on: {
              click: (event) => _vm.btnEvent(event, item)
            },
            props: {
              disabled: item.disabled
            },
            scopedSlots
          },
          getFuncText(item.name)
        )
      }

      return res
    })
  }

  return h('div', { class: 'tiny-grid-button__wrapper' }, childrenArg)
}

export default defineComponent({
  name: $prefix + 'GridToolbar',
  components: {
    TinyGridCustom: GridCustom,
    TinyGridCustomSelect: GridCustomSelect,
    TinyGridCustomSaas: GridCustomSaas,
    IconFullscreen: iconFullscreen(),
    IconMinscreen: iconMinscreen()
  },
  props: {
    ...$props,
    id: String,
    loading: {
      type: Boolean,
      default: false
    },
    customMode: {
      type: String,
      default: () => {
        const ctx = appProperties()
        return (ctx.aui_theme ? ctx.aui_theme.value : '') || 'aurora'
      }
    },
    resizable: {
      type: [Boolean, Object],
      default: () => GridConfig.toolbar.resizable
    },
    refresh: {
      type: [Boolean, Object],
      default: () => GridConfig.toolbar.refresh
    },
    setting: {
      type: [Boolean, Object],
      default: () => GridConfig.toolbar.setting
    },
    fullScreen: { type: Boolean, default: false },
    buttons: { type: Array, default: () => GridConfig.toolbar.buttons },
    size: String,
    data: Array,
    customs: Array,
    beforeOpenFullScreen: Function,
    beforeCloseFullScreen: Function,
    resetMethod: Function
  },
  inject: {
    $grid: {
      default: null
    }
  },
  data() {
    return {
      table: null,
      isRefresh: false,
      tableFullColumn: [],
      initSettings: {
        pageSizes: [],
        pageSize: 10,
        sortType: 'page',
        showIndex: false,
        multipleHistory: {
          tableMaxHeight: '',
          showTitle: true,
          title: '',
          showSave: true,
          saveDisabled: false,
          saveText: '',
          labelText: '',
          selectPlaceholder: '',
          selectDisabled: false,
          showApply: true,
          applyDisabled: false,
          applyTitle: '',
          applyIcon: null,
          showEdit: true,
          editDisabled: false,
          editTitle: '',
          editIcon: null,
          showDel: true,
          delDisabled: false,
          delTitle: '',
          delIcon: null,
          storageKey: 'TINY_TABLE_MULTI_HISTORY_SETTING',
          remoteMethod: null,
          userKey: '', // userId or userAccount
          remoteSelectedMethod: null
        }
      },
      settingStore: {
        visible: false,
        customVisible: false
      },
      isFull: false
    }
  },
  computed: {
    vSize() {
      return this.size || this.$parent.size || this.$parent.vSize
    },
    refreshOpts() {
      return { ...GridConfig.toolbar.refresh, ...this.refresh }
    },
    resizableOpts() {
      return {
        storageKey: 'TINY_TABLE_CUSTOM_COLUMN_WIDTH',
        ...GridConfig.toolbar.resizable,
        ...this.resizable
      }
    },
    settingOpts() {
      return {
        storageKey: 'TINY_TABLE_CUSTOM_SETTING',
        ...GridConfig.toolbar.setting,
        ...this.setting
      }
    }
  },
  created() {
    let { settingOpts, id, customs, $grid } = this

    this.initSettings.pageSizes = ($grid.pagerConfig && $grid.pagerConfig.pageSizes) || [10, 15, 20, 30, 50, 100]
    this.initSettings.pageSize = ($grid.pagerConfig && $grid.pagerConfig.pageSize) || 10
    this.initSettings.sortType = (this.setting && this.setting.sortType) || 'page'
    this.initSettings.showIndex = this.setting && this.setting.showIndex

    if (settingOpts.storage === 'local') {
      this.initSettings = Object.assign(this.initSettings, this.getStorageMap(settingOpts.storageKey)[id] || {})
    }

    if (customs) {
      this.tableFullColumn = customs
    }

    if (settingOpts.storage && !id) {
      return GridTools.error('ui.grid.error.toolbarId')
    }

    setTimeout(() => {
      this.loadStorage()
    })

    GlobalEvent.on(this, 'mousedown', this.handleGlobalMousedownEvent)
    GlobalEvent.on(this, 'blur', this.handleGlobalBlurEvent)
    this.$grid.toolBarVm = this
  },
  setup(props, { slots, attrs, listeners }) {
    hooks.onBeforeUnmount(() => {
      GlobalEvent.off(this, 'mousedown')
      GlobalEvent.off(this, 'blur')
    })

    const tableListeners = getListeners(attrs, listeners)

    return { slots, tableListeners }
  },
  render() {
    let { $grid, slots: $slots, table, loading, settingStore, refresh, fullScreen } = this
    let { setting, initSettings, buttons = [], vSize, tableFullColumn } = this
    let { buttons: $buttons, tools: $tools } = $slots
    let settingsBtnOns = {}

    setting && (settingsBtnOns.click = this.handleClickCustomEvent)

    const map = {
      isLoading: 'is__loading'
    }

    let propsArg = {
      class: ['tiny-grid-toolbar', { [`size__${vSize}`]: vSize, [map.isLoading]: loading }]
    }

    let args = {
      _vm: this,
      settingStore,
      settingsBtnOns,
      tableFullColumn,
      setting,
      initSettings
    }

    let childrenArg = [
      renderButtonWrapper({ _vm: this, $buttons, $grid, table, buttons }),
      setting ? renderCustomWrapper(args) : null,
      refresh ? renderRefreshWrapper({ _vm: this }) : null,
      fullScreen ? renderFullScreenWrapper({ _vm: this }) : null,
      $tools ? renderToolsWrapper({ _vm: this, $tools, $grid, table }) : $slots.default && $slots.default()
    ]

    return h('div', propsArg, childrenArg)
  },
  methods: {
    updateConf() {
      let data = this.data
      let $children = this.$parent.$children

      let findHandler = (childComp, childIndex) =>
        childComp &&
        childComp.refreshColumn &&
        childIndex > $children.indexOf(this) &&
        (data ? childComp.data === data : childComp.$vnode.componentOptions.tag === 'tiny-grid-table')

      this.table = find($children, findHandler)
    },
    closeSetting() {
      let setting = this.setting
      let settingStore = this.settingStore

      if (settingStore.visible) {
        settingStore.visible = false
      }

      if (settingStore.visible && setting && !settingStore.immediate) {
        this.updateSetting()
      }
    },
    openSetting() {
      this.settingStore.visible = true
    },
    orderSetting() {
      let { id, settingOpts } = this
      let allData = []

      const custumSetting = JSON.parse(localStorage.getItem(settingOpts.storageKey))

      if (custumSetting) {
        const customName = custumSetting[id]

        allData = (customName && customName.columns) || []
      }

      let orderArg = allData
        .map((value) => ({
          fileds: value.property,
          property: value.property,
          order: value.order,
          prop: value.property
        }))
        .filter((item) => item.order !== null)

      return orderArg
    },
    loadColWidth() {
      const { id, resizableOpts } = this

      if (resizableOpts.storage) {
        const width = this.getStorageMap(resizableOpts.storageKey)[id] || {}

        if (width) {
          const widthSet = {}

          for (let key in width) {
            if (Object.prototype.hasOwnProperty.call(width, key)) {
              widthSet[key] = { resizeWidth: width[key] }
            }
          }

          return widthSet
        }
      }
    },
    loadStorage() {
      let { $grid, id, resizable, setting, settingOpts } = this

      if (!$grid) {
        return
      }

      if (resizable || setting) {
        let customSettings = []

        if ($grid) {
          $grid.connect({ toolbar: this })
        } else {
          throw new Error('[tiny-grid-toolbar] Not found tiny-grid.')
        }

        // 加载 'fixed', 'visible', 'order' 列的个性化配置
        if (settingOpts.storage === 'local') {
          const settingsStorage = this.getStorageMap(settingOpts.storageKey)[id]

          customSettings = (settingsStorage && settingsStorage.columns) || []

          if (settingsStorage && settingsStorage.pageSize) {
            const pageSize = settingsStorage.pageSize

            this.$grid.pagerConfig &&
              this.$grid.pagerConfig.pageSize !== pageSize &&
              this.$grid.pageSizeChange(pageSize, $grid.autoLoad === false)
          }
        }

        this.updateCustoms(customSettings.length ? customSettings : this.tableFullColumn)
      }
    },
    // NEXT 未用到
    updateColumn(fullColumn) {
      this.tableFullColumn = fullColumn
    },
    updateCustoms(customs) {
      let { $grid, table, setting } = this
      let comp = $grid || table
      const sort = setting && !!setting.sortable

      if (comp) {
        const colWidth = this.loadColWidth()

        comp.reloadCustoms(customs, sort, colWidth).then((fullColumn) => {
          this.tableFullColumn = fullColumn
        })
      }
    },
    getStorageMap(key) {
      let version = GridConfig.version
      let rest = toStringJSON(localStorage.getItem(key))

      return rest && rest._v === version ? rest : { _v: version }
    },
    // 保存 'fixed', 'visible', 'order' 列的个性化配置
    saveCustomSettings(columnConfigs) {
      let { id, settingOpts } = this

      // 个性化配置本地存储
      if (settingOpts.storage === 'local') {
        let settingsStorageMap = this.getStorageMap(settingOpts.storageKey)
        let settingsStorage = settingsStorageMap[id] || {}

        settingsStorage.columns = columnConfigs
        settingsStorageMap[id] = settingsStorage
        localStorage.setItem(settingOpts.storageKey, toJSONString(settingsStorageMap))
      }

      return this.$nextTick()
    },
    // 保存分页、排序类型数据数据
    savePagerSettings(settingConfigs) {
      let { id, settingOpts } = this

      if (settingOpts.storage) {
        let settingsStorageMap = this.getStorageMap(settingOpts.storageKey)
        let settingsStorage = settingsStorageMap[id]

        if (settingsStorage) {
          Object.assign(settingsStorage, settingConfigs)
        } else {
          settingsStorage = settingConfigs
        }

        settingsStorageMap[id] = settingsStorage
        localStorage.setItem(settingOpts.storageKey, toJSONString(settingsStorageMap))
      }

      return this.$nextTick()
    },
    // 只保存隐藏列配置
    saveColumnHide() {
      let { id, tableFullColumn, settingOpts } = this

      if (settingOpts.storage) {
        let columnHideStorageMap = this.getStorageMap(settingOpts.storageKey)
        let colHides = tableFullColumn.filter((column) => column.property && !column.visible)

        columnHideStorageMap[id] = colHides.length ? colHides.map((column) => column.property).join(',') : undefined
        this.$refs.custom && this.$refs.custom.saveSettings()
      }

      return this.$nextTick()
    },
    saveColumnWidth(isReset) {
      let { id, resizableOpts, tableFullColumn } = this
      let { storage, storageKey } = resizableOpts
      let columnWidthStorageMap

      if (storage) {
        columnWidthStorageMap = this.getStorageMap(storageKey)
      }

      let columnWidthStorage

      if (storage && !isReset) {
        columnWidthStorage = columnWidthStorageMap[id]
        columnWidthStorage = isPlainObject(columnWidthStorage) ? columnWidthStorage : {}

        tableFullColumn.forEach(({ property, resizeWidth, renderWidth }) => {
          if (property && resizeWidth) {
            columnWidthStorage[property] = renderWidth
          }
        })
      }

      if (storage) {
        columnWidthStorageMap[id] = isEmpty(columnWidthStorage) ? undefined : columnWidthStorage
        localStorage.setItem(storageKey, toJSONString(columnWidthStorageMap))
      }

      return this.$nextTick()
    },
    resetResizable() {
      this.updateResizable(this)
    },
    updateResizable(isReset) {
      let tableComp = this.$grid || this.table

      this.saveColumnWidth(isReset)
      tableComp.analyColumnWidth()

      return tableComp.recalculate()
    },
    updateSetting() {
      const tableComp = this.$grid || this.table

      tableComp.refreshColumn()
      this.tableFullColumn = this.tableFullColumn.slice(0)

      return this.$nextTick(() => this.$refs.custom && this.$refs.custom.saveSettings())
    },
    applySettings({ columns, pageSize }) {
      const sort = this.setting && !!this.setting.sortable

      if (this.$grid) {
        if (columns && columns.length) {
          const colWidth = this.loadColWidth()
          this.$grid.reloadCustoms(columns, sort, colWidth).then(() => {
            // 处理表格数据，否则列排序不生效
            this.$grid.handleTableData(true).then(() => {
              // 重新计算内部元素的位置
              this.$grid.recalculate()
            })
          })
        }

        if (isNumber(pageSize) && this.$grid.pagerConfig && this.$grid.pagerConfig.pageSize !== pageSize) {
          this.$grid.pageSizeChange(pageSize)
        }
      }
    },
    handleSaveSettings(settingConfigs) {
      let { settingStore, setting, settingOpts } = this
      let customRef = this.$refs.custom

      settingStore.customVisible = false

      const { columns, pageSize, sortType } = settingConfigs

      this.applySettings({ columns, pageSize })
      // 如果开启本地缓存则保存数据到 localstorage
      if (setting && settingOpts.storage === 'local') {
        // 保存时如果没有设置 id 就使用 null 清除掉本地存储中保存的 id
        const pagerSettings = { pageSize, sortType, id: null }

        if (setting.multipleHistory && customRef.multipleHistoryId) {
          pagerSettings.id = customRef.multipleHistoryId
          customRef.multipleHistoryId = null
        }

        this.saveCustomSettings(columns)
        this.savePagerSettings(pagerSettings)
      } else if (setting && settingOpts.storage === 'remote') {
        // 个性化配置远程服务存储
        if (settingOpts.remote) {
          this.$emit('remote-setting', settingConfigs)

          if (setting.multipleHistory) {
            this.$emit(
              'multiple-history-option',
              toJSONString({
                [settingOpts.storageKey]: {
                  [this.id]: {
                    ...settingConfigs,
                    id: customRef.multipleHistoryId || null
                  }
                }
              })
            )

            customRef.multipleHistoryId = null
          }
        }
      }

      this.$emit('save-setting', settingConfigs)
    },
    handleGlobalMousedownEvent(event) {
      if (!getEventTargetNode(event, this.$refs.customWrapper).flag) {
        this.closeSetting()
      }
    },
    handleGlobalBlurEvent() {
      this.closeSetting()
    },
    // NEXT 未用到
    handleClickSettingEvent() {
      let { settingStore } = this

      settingStore.visible = !settingStore.visible
    },
    handleClickCustomEvent() {
      let { settingStore } = this
      this.$refs.custom.settings.pageSize =
        (this.$grid.pagerConfig && this.$grid.pagerConfig.pageSize) ||
        (this.settingOpts.storage === 'local' && this.$refs.custom.settings.pageSize) ||
        10

      settingStore.customVisible = !settingStore.customVisible
    },
    // NEXT 未用到
    handleMouseenterSettingEvent() {
      this.settingStore.activeBtn = true
      this.openSetting()
    },
    // NEXT 未用到
    handleMouseleaveSettingEvent() {
      this.settingStore.activeBtn = false
      createMacroTask({ _vm: this })
    },
    // NEXT 未用到
    handleWrapperMouseenterEvent() {
      this.settingStore.activeWrapper = true
      this.openSetting()
    },
    // NEXT 未用到
    handleWrapperMouseleaveEvent() {
      this.settingStore.activeWrapper = false
      createMacroTask({ _vm: this })
    },
    refreshEvent() {
      let { $grid, isRefresh, refreshOpts } = this
      let catchHandler = (e) => e
      let nextHandler = () => (this.isRefresh = false)

      if (isRefresh) return

      this.isRefresh = true

      if (refreshOpts.query) {
        refreshOpts.query().catch(catchHandler).then(nextHandler)
        return
      }

      if ($grid && $grid.fetchData) {
        $grid.commitProxy('reload').catch(catchHandler).then(nextHandler)
        return
      }

      if ($grid) {
        $grid.refreshData().then(nextHandler)
      }
    },
    btnEvent(event, item) {
      let { $grid, table, tableListeners } = this
      let { code } = item

      if (code) {
        if ($grid && !tableListeners['button-click']) {
          $grid.triggerToolbarBtnEvent(item, event)
        } else {
          let btnMethod = GridAdapter.buttons.get(code)
          let params = { code, button: item, $grid, $table: table }

          if (btnMethod) {
            btnMethod.call(this, params, event)
          }

          emitEvent(this, 'button-click', [params, event])
        }
      }
    },
    fullscreenEvent() {
      let beforeOpenFullScreen
      let beforeCloseFullScreen
      let interceptFullScreen
      let show = !this.isFull

      if (this.fullScreen) {
        beforeOpenFullScreen = this.beforeOpenFullScreen
        beforeCloseFullScreen = this.beforeCloseFullScreen
        interceptFullScreen =
          (show && typeof beforeOpenFullScreen === 'function' && !beforeOpenFullScreen()) ||
          (!show && typeof beforeCloseFullScreen === 'function' && !beforeCloseFullScreen())

        if (interceptFullScreen) return
      }

      if (this.$grid) {
        this.isFull = !this.isFull
        this.$grid.commitProxy('fullscreen', this.isFull)
      }
    }
  }
})
