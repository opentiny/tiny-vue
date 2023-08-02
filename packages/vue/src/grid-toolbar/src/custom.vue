<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <tiny-modal
    width="600"
    :title="t('ui.grid.individuation.title')"
    v-model="visible"
    @input="handleInput"
    @close="handleClose"
    @custom-mousemove="handleCustomMouseMove"
  >
    <template #default>
      <div class="tiny-grid-custom tiny-grid__wrapper" v-if="visible">
        <div class="tiny-grid-custom__tabs">
          <div class="tiny-grid-custom__tabs-head">
            <ul>
              <li
                @click="activeName = 'base'"
                :class="{
                  'tiny-grid-custom__tabs-selected': activeName === 'base'
                }"
              >
                <span>{{ t('ui.grid.individuation.tabs.base.title') }}</span>
              </li>
              <li
                v-if="other"
                @click="activeName = 'other'"
                :class="{
                  'tiny-grid-custom__tabs-selected': activeName === 'other'
                }"
              >
                <span>{{ t('ui.grid.individuation.tabs.other.title') }}</span>
              </li>
            </ul>
          </div>
          <div class="tiny-grid-custom__tabs-body">
            <div
              v-show="activeName === 'base'"
              :class="['tabs-body-item', animateShow === 'base' ? 'active-item' : '']"
            >
              <div class="tiny-grid-custom__alert">
                <component class="tiny-svg-size" is="icon-help" />
                <p>{{ t('ui.grid.individuation.tabs.base.tips') }}</p>
              </div>
              <tiny-grid
                class="tiny-grid-custom__setting"
                :auto-resize="true"
                :data="columns"
                :row-class-name="rowClassName"
                row-key
                :drop-config="dropConfig"
                :tree-config="{ children: 'children' }"
                :show-header="false"
                :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
                :max-height="historyConfig.tableMaxHeight"
                @row-drop-end="handleRowDropEnd"
              >
                <tiny-grid-column v-if="initSettings.showIndex" type="index" width="60"></tiny-grid-column>
                <tiny-grid-column field="title" tree-node></tiny-grid-column>
                <tiny-grid-column field="property" width="120px" class-name="setting-item">
                  <template #default="{ row, ...data }">
                    <div v-if="!row.children" class="setting-icon">
                      <span class="icon" :title="visibleTitle(row)">
                        <component
                          :class="[{ open: row.visible }]"
                          :is="row.visible ? 'icon-eyeopen' : 'icon-eyeclose'"
                          @click="handlerSetting('visible', row, data)"
                        />
                      </span>
                      <span class="icon" :title="sortTitle(row)">
                        <component
                          :class="{ sort: row.order, 'is-visible': !row.sortable }"
                          :is="row.order ? constants.icon[row.order] : 'icon-minus'"
                          @click="handlerSetting('order', row)"
                        />
                      </span>
                      <span class="icon" :title="fixedTitle(row)">
                        <component
                          v-if="row.level === 1 && showFixed"
                          :class="{ lock: row.fixed }"
                          :is="row.fixed ? constants.icon[row.fixed] : 'icon-unlock'"
                          @click="handlerSetting('fixed', row)"
                        />
                      </span>
                    </div>
                  </template>
                </tiny-grid-column>
                <tiny-grid-column
                  v-if="numberSorting && !isGroup"
                  width="100px"
                  :editor="{}"
                  :renderer="renderNumberSorting"
                >
                  <template #edit="{ row }">
                    <tiny-select v-model="row.sortingIndex" @change="handelNumberSorting($event, row)">
                      <tiny-option v-for="item in sortingOptions" :key="item" :label="item" :value="item">
                      </tiny-option>
                    </tiny-select>
                  </template>
                </tiny-grid-column>
              </tiny-grid>
            </div>
            <div
              v-show="activeName === 'other'"
              :class="['tabs-body-item', animateShow === 'other' ? 'active-item' : '']"
            >
              <div class="tiny-grid-custom__alert">
                <component class="tiny-svg-size" is="icon-help" />
                <p>{{ t('ui.grid.individuation.tabs.other.tips') }}</p>
              </div>
              <ul class="tiny-grid-custom__setting other-setting">
                <li class="setting-item">
                  <span class="label">{{ t('ui.grid.individuation.tabs.other.sortType') }}</span>
                  <span class="selection">
                    <tiny-radio v-model="settings.sortType" label="page">{{
                      t('ui.grid.individuation.tabs.other.currPageSort')
                    }}</tiny-radio>
                    <tiny-radio v-model="settings.sortType" label="all">{{
                      t('ui.grid.individuation.tabs.other.allDataSort')
                    }}</tiny-radio>
                  </span>
                </li>
                <li class="setting-item">
                  <span class="label">{{ t('ui.grid.individuation.tabs.other.pageSize') }}</span>
                  <span class="selection">
                    <tiny-radio
                      v-for="(item, index) in initSettings.pageSizes"
                      :key="index"
                      v-model="settings.pageSize"
                      :label="item"
                      >{{ item }}</tiny-radio
                    >
                  </span>
                </li>
              </ul>
            </div>
            <tiny-custom-switch
              v-if="multipleHistory && activeName === 'base'"
              ref="switch"
              :history-config="historyConfig"
            ></tiny-custom-switch>
          </div>
        </div>
        <div
          v-if="!multipleHistory || (multipleHistory && activeName === 'base')"
          class="tiny-grid-custom__footer"
          :dir="TinyTheme === 'saas' ? 'rtl' : 'ltr'"
        >
          <tiny-button type="primary" @click="saveSettings" :disabled="saveDisabled">
            {{ t('ui.grid.individuation.saveBtn') }}
          </tiny-button>
          <tiny-button @click="handleReset">
            {{ t('ui.grid.individuation.resetBtn') }}
          </tiny-button>
          <tiny-button @click="cancelSettings">
            {{ t('ui.grid.individuation.cancelBtn') }}
          </tiny-button>
        </div>
      </div>
    </template>
  </tiny-modal>
</template>

<script lang="ts">
import Button from '@opentiny/vue-button'
import Modal from '@opentiny/vue-modal'
import { t } from '@opentiny/vue-locale'
import Grid, { GridRadio, GridColumn } from '@opentiny/vue-grid'
import { find, mapTree } from '@opentiny/vue-renderless/grid/static'
import {
  IconEyeopen,
  IconEyeclose,
  IconUnlock,
  IconLock,
  IconMinus,
  IconDescending,
  IconAscending,
  IconHelp,
  IconLeftFrozen,
  IconRightFrozen
} from '@opentiny/vue-icon'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import CustomSwitch from './custom-switch.vue'
import { extend } from '@opentiny/vue-renderless/common/object'
import { isNull } from '@opentiny/vue-renderless/grid/static'
import { appProperties } from '@opentiny/vue-common'
import { $props, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {
    TinyModal: Modal,
    TinyButton: Button,
    TinyRadio: GridRadio,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinySelect: Select,
    TinyOption: Option,
    IconEyeopen: IconEyeopen(),
    IconEyeclose: IconEyeclose(),
    IconUnlock: IconUnlock(),
    IconLeftFrozen: IconLeftFrozen(),
    IconRightFrozen: IconRightFrozen(),
    IconLock: IconLock(),
    IconMinus: IconMinus(),
    IconDescending: IconDescending(),
    IconAscending: IconAscending(),
    IconHelp: IconHelp(),
    TinyCustomSwitch: CustomSwitch
  },
  name: 'TinyGridCustom',
  inject: {
    $grid: {
      default: null
    }
  },
  props: {
    ...$props,
    data: {
      type: Array,
      default() {
        return []
      }
    },
    other: {
      type: Boolean,
      default: true
    },
    initSettings: {
      type: Object,
      default() {
        return {
          pageSizes: [10, 15, 20, 30, 50, 100],
          pageSize: 10,
          sortType: 'page',
          showIndex: false
        }
      }
    },
    value: Boolean,
    sortable: Function,
    rowClassName: [Function, String],
    onBeforeMove: Function,
    filter: String,
    refresh: Boolean,
    keys: {
      type: Array,
      default: () => []
    },
    numberSorting: Boolean,
    multipleHistory: [Object, Boolean],
    resetMethod: Function
  },
  emits: ['input', 'saveSettings', 'resetSettings', 'cancelSettings', 'showModal'],
  data() {
    return {
      activeName: 'base',
      animateShow: 'base',
      constants: {
        icon: {
          asc: 'icon-ascending',
          desc: 'icon-descending',
          left: 'icon-left-frozen',
          right: 'icon-right-frozen'
        }
      },
      columns: [],
      fullColumn: [],
      customColumns: [{ field: 'level' }, { field: 'property' }],
      settings: {
        sortType: this.initSettings.sortType || 'page',
        pageSize: this.initSettings.pageSize || this.pageSizes[0] || 10,
        columns: []
      },
      sortingOptions: [],
      multipleHistoryId: null,
      saveDisabled: false
    }
  },
  created() {
    this.columns = this.getColumnConfigs(this.data)
  },
  watch: {
    value() {
      this.columns = this.getColumnConfigs(this.data)
    },
    data: {
      handler(val) {
        this.columns = this.getColumnConfigs(val)
      }
    },
    activeName: {
      handler(val) {
        setTimeout(() => {
          this.animateShow = val
        }, 0)
      }
    }
  },
  computed: {
    visible: {
      get() {
        return this.value
      },
      set() {}
    },
    showFixed() {
      return (this as any).$grid
    },
    TinyTable() {
      return ((this as any).$grid && (this as any).$grid.$refs.TinyTable) || {}
    },
    isGroup() {
      return this.TinyTable.isGroup
    },
    historyConfig() {
      const multipleHistory =
        isNull(this.multipleHistory) || typeof this.multipleHistory === 'boolean' ? {} : this.multipleHistory

      return extend(true, {}, this.initSettings.multipleHistory || {}, multipleHistory)
    },
    TinyTheme() {
      const ctx = appProperties()

      return (ctx.Tiny_theme ? ctx.Tiny_theme.value : '') || 'aurora'
    },
    dropConfig() {
      return {
        row: true,
        column: false,
        plugin: !this.isGroup && this.sortable,
        onBeforeMove: this.onBeforeMove,
        filter: this.filter,
        refresh: this.refresh
      }
    }
  },
  methods: {
    t,
    getColumnConfigs(configs) {
      const getColNodes = (columns) => {
        return columns
          .map(({ id, title, property, fixed, visible, order, sortable, level, children }) => {
            if (property) {
              const column = {
                id,
                title,
                property,
                fixed,
                visible,
                order,
                sortable,
                level,
                children
              }

              children && (column.children = getColNodes(children))

              return column
            }
          })
          .filter((i) => i)
      }
      if (configs.length && (this as any).$grid) {
        const { collectColumn } = (this as any).$grid.getTableColumn()
        const columns = getColNodes(collectColumn)

        this.initNumberSorting(columns)

        return columns
      }
    },
    initNumberSorting(columns) {
      if (this.isGroup) return

      this.sortingOptions = []

      columns.forEach((column, index) => {
        column.sortingIndex = index + 1
        this.sortingOptions.push(column.sortingIndex)
      })
    },
    handelNumberSorting(sort, row) {
      const oldSort = this.columns.indexOf(row)
      const newSort = sort - 1
      const columns = []

      this.columns.splice(oldSort, 1)
      this.columns.splice(newSort, 0, row)
      this.columns.forEach((column, index) => {
        column.sortingIndex = index + 1
        columns.push(column)
      })

      this.columns = columns
    },
    handleRowDropEnd() {
      if (this.isGroup) return

      this.columns.forEach((column, index) => {
        column.sortingIndex = index + 1
      })
    },
    renderNumberSorting(h, { row }) {
      return h('span', row.sortingIndex + '')
    },
    handleCustomMouseMove() {
      this.$refs.switch && this.$refs.switch.$refs.select && this.$refs.switch.$refs.select.blur()
    },
    handleInput(val) {
      this.$emit('input', val)
    },
    handleFixed(column) {
      const index = this.columns.indexOf(column)
      let splitIndex = 0
      const { fixed } = column

      if (!this.isGroup) {
        column.fixed = fixed ? (fixed === 'left' ? 'right' : undefined) : 'left'
      } else {
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i].children) {
            splitIndex = i
            break
          }
        }

        const leftColumns = this.columns.slice(0, index)
        const rightColumns = this.columns.slice(index + 1)

        const changeFixed = function (left, right, column, type) {
          const fixed = column.fixed

          if (fixed) {
            if (!left.some((column) => column.fixed === type)) {
              column.fixed = undefined
            }
          } else {
            if (!right.length || !right.some((column) => !column.fixed)) {
              column.fixed = type
            }
          }

          if (fixed === column.fixed) {
            Modal.message({
              id: 'customSetting',
              message: t('ui.grid.error.groupFixed'),
              status: 'warning'
            })
          }
        }

        if (index > splitIndex) {
          // 右侧处理
          changeFixed(leftColumns, rightColumns, column, 'right')
        } else {
          // 左侧处理
          changeFixed(rightColumns, leftColumns, column, 'left')
        }
      }
    },
    handlerSetting(type, column) {
      const invisibleCols = this.fullColumn.filter((item) => item.visible).length

      switch (type) {
        case 'visible':
          if (column[type] && invisibleCols === 1) {
            // 最后一条显示的列不能隐藏
            Modal.message({
              id: 'customSetting',
              message: t('ui.grid.individuation.hideMsg'),
              status: 'warning'
            })
          } else {
            column[type] = !column[type]
          }
          break
        case 'fixed':
          this.handleFixed(column)
          break
        case 'order':
          column[type] = column[type] ? (column[type] === 'asc' ? 'desc' : null) : 'asc'
          break
        default:
          break
      }
    },
    buildSettings() {
      const props = ['order', 'fixed', 'visible', 'sortable'].concat(this.keys)

      this.settings.columns = mapTree(this.columns, ({ property, ...rest }) => {
        const node = { property }

        props.forEach((prop) => {
          node[prop] = rest[prop]
        })

        return node
      })

      return this.settings
    },
    saveSettings() {
      this.buildSettings()

      this.$emit('saveSettings', this.settings)
      this.handleClose()
    },
    resetSettings(event) {
      if (this.activeName === 'base') {
        this.columns = this.getColumnConfigs(this.data)

        // 还原个性化设置的数据
        if (this.settings.columns && this.settings.columns.length) {
          this.settings.columns.forEach((setting) => {
            let column = find(this.columns, (item) => item.property === setting.property)

            if (column) {
              Object.assign(setting, column)
            }
          })
        }
      } else if (this.activeName === 'other') {
        this.settings.sortType = this.initSettings.sortType
        this.settings.pageSize = this.initSettings.pageSize
      }

      event && this.$emit('resetSettings', this.settings) // 点击取消时无event，不触发reset事件
    },
    cancelSettings() {
      this.resetSettings()
      this.$emit('cancelSettings')
      this.$emit('input', false)
      this.handleClose()
    },
    handleClose() {
      this.$emit('showModal', false)
    },
    handleReset(event) {
      let equal = (cols1, cols2) => {
        let props1 = []
        let props2 = []

        cols1.forEach((col) => col && col.property && props1.push(col.property))
        cols2.forEach((col) => col && col.property && props2.push(col.property))

        return props1.length === props2.length && props1.sort().join(',') === props2.sort().join(',')
      }

      if (typeof this.resetMethod === 'function') {
        this.resetMethod().then((sourceSettings) => {
          this.buildSettings()

          let { columns, sortType, pageSize } = sourceSettings || {}

          if (columns && columns.length && this.settings.columns && this.settings.columns.length) {
            this.settings.columns.forEach((setting) => {
              let source = find(columns, (item) => item.property === setting.property)
              let target = find(this.columns, (item) => item.property === setting.property)

              if (source) {
                Object.assign(setting, source)
                Object.assign(target, source)
              }
            })

            if (equal(columns, this.settings.columns)) {
              let settingColumns = []
              let gridColumns = []

              columns.map((source) => {
                let settingCol = find(this.settings.columns, (item) => source.property === item.property)
                let targetCol = find(this.columns, (item) => source.property === item.property)

                settingColumns.push(settingCol)
                gridColumns.push(targetCol)
              })

              this.settings.columns = settingColumns
              this.columns = gridColumns
            }
          }

          sortType && (this.settings.sortType = sortType)
          pageSize && (this.settings.pageSize = pageSize)
        })
      } else {
        this.resetSettings(event)
      }
    },
    visibleTitle(row) {
      if (row.visible) {
        return t('ui.grid.individuation.colConfigs.visible')
      } else {
        return t('ui.grid.individuation.colConfigs.invisible')
      }
    },
    sortTitle(row) {
      if (row.sortable) {
        if (row.order) {
          if (row.order === 'asc') {
            return t('ui.grid.individuation.colConfigs.asc')
          } else {
            return t('ui.grid.individuation.colConfigs.desc')
          }
        } else {
          return t('ui.grid.individuation.colConfigs.unsorted')
        }
      } else {
        return ''
      }
    },
    fixedTitle(row) {
      if (row.fixed) {
        if (row.fixed === 'left') {
          return t('ui.grid.individuation.colConfigs.frozenLeft')
        } else {
          return t('ui.grid.individuation.colConfigs.frozenRight')
        }
      } else {
        return t('ui.grid.individuation.colConfigs.unfrozen')
      }
    }
  }
})
</script>
