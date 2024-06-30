<template>
  <tiny-modal
    width="800"
    title=" "
    class="tiny-grid-toolbar-modal"
    v-model="visible"
    @input="handleInput"
    @close="handleClose"
  >
    <template #default>
      <div class="tiny-grid-custom" v-if="visible">
        <div class="tiny-grid-custom__tabs">
          <div class="tiny-grid-custom__tabs-head">
            <ul>
              <li
                @click="activeName = 'base'"
                :class="{
                  'tiny-grid-custom__tabs-selected': activeName === 'base' && other,
                  'tiny-grid-custom__tabs-base': !other
                }"
              >
                <span>{{ t('ui.grid.individuation.columnSet') }}</span>
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
              <tiny-split v-model="splitVal" trigger-simple collapse-left-top>
                <template #left>
                  <div class="left-panel">
                    <div v-if="multipleHistory" class="select-template">
                      <tiny-select
                        v-model="selectedTemplate"
                        shape="filter"
                        :label="t('ui.grid.individuation.selectTemplate')"
                        @change="selectedTemplateChange"
                        clearable
                      >
                        <tiny-option v-for="item in templateOptions" :key="item.id" :label="item.name" :value="item.id">
                        </tiny-option>
                      </tiny-select>
                    </div>
                    <tiny-search
                      v-if="search"
                      v-model="searchValue"
                      @input="searchChange"
                      :placeholder="t('ui.grid.individuation.toolbar.search')"
                    ></tiny-search>
                    <div v-if="isGroup">
                      <div class="multi-check-all-btn" v-if="!searchValue">
                        <tiny-checkbox
                          :indeterminate="isMultiIndeterminate"
                          v-model="multiCheckAll"
                          @change="checkAllChange"
                        >
                          {{ t('ui.grid.individuation.toolbar.all') }}
                        </tiny-checkbox>
                      </div>
                      <tiny-tree
                        ref="tree"
                        :data="columns"
                        default-expand-all
                        check-on-click-node
                        show-checkbox
                        node-key="id"
                        :default-checked-keys="defaultcheckedkeys"
                        @check="checkNode"
                        :filter-node-method="filterTreeNode"
                        :props="{ label: 'title' }"
                      >
                        <template #default="sourceData">
                          <div class="tiny-tree-node__label">
                            <title-render :column="sourceData.data"></title-render>
                          </div>
                        </template>
                      </tiny-tree>
                    </div>
                    <div v-else>
                      <div v-if="searchValue">
                        <tiny-checkbox-group v-model="checkedColumns" vertical>
                          <tiny-checkbox
                            v-for="column in searchColumns"
                            :label="column.property"
                            :disabled="column.alwaysShow"
                            :key="column.property"
                          >
                            <title-render :column="column"></title-render>
                          </tiny-checkbox>
                        </tiny-checkbox-group>
                      </div>
                      <div v-else>
                        <div class="check-all-btn">
                          <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll">
                            {{ t('ui.grid.individuation.toolbar.all') }}
                          </tiny-checkbox>
                        </div>
                        <tiny-checkbox-group v-model="checkedColumns" vertical>
                          <template v-for="(group, index) in groupedColumns">
                            <div v-if="defer(Math.floor(index / 5))" :key="index">
                              <p v-if="group.label" class="group-label" :class="[index === 0 && 'group-label-first']">
                                {{ group.label }}
                              </p>
                              <tiny-checkbox
                                v-for="column in group.data"
                                :label="column.property"
                                :disabled="column.alwaysShow"
                                :key="column.property"
                              >
                                <title-render :column="column"></title-render>
                              </tiny-checkbox>
                            </div>
                          </template>
                        </tiny-checkbox-group>
                      </div>
                    </div>
                  </div>
                </template>
                <template #right>
                  <div class="right-panel">
                    <div class="header">
                      <p>
                        {{ t('ui.grid.individuation.toolbar.selected') }} ({{ visibleColumns.length }}/{{
                          columns.length
                        }})
                      </p>
                      <span v-if="!hideFixedColumn">{{ t('ui.grid.individuation.toolbar.freeze') }}</span>
                      <span v-if="!hideSortColumn">{{ t('ui.grid.individuation.toolbar.sort') }}</span>
                      <span v-if="!isGroup" class="clear-all" @click="handelClearAll">{{
                        t('ui.grid.individuation.toolbar.clear')
                      }}</span>
                    </div>
                    <ul ref="list" class="column-list-panel">
                      <li
                        v-for="(column, index) in visibleColumns"
                        :key="column.property + index"
                        :class="[
                          column.fixed,
                          getRowClassName(column),
                          'column-list-item',
                          !column.expand && 'item-collapse'
                        ]"
                        data-tag="tiny-grid-toolbar-item"
                        :data-row="column.property"
                      >
                        <div>
                          <div
                            v-if="defer(Math.floor(index / 3))"
                            class="column-container"
                            :class="[!isGroup && 'with-padding']"
                          >
                            <div v-if="dropConfig.plugin && !isGroup" class="drag-icon toolbar-drag-item">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <div
                              v-if="isGroup && column.children"
                              class="toolbar-icon-expand"
                              :class="[column.expand && 'toolbar-icon-collapse']"
                            >
                              <icon-chevron-right @click="column.expand = !column.expand"></icon-chevron-right>
                            </div>
                            <div class="sort-number" v-if="!isGroup">
                              <div
                                v-if="column.numberSortVisible && !isGroup"
                                class="sort-number-editor"
                                v-clickoutside="clickEditorOutside"
                              >
                                <tiny-select
                                  :ref="'select' + index"
                                  v-model="column.sortingIndex"
                                  automatic-dropdown
                                  @focus="selectFocus($event, column.sortingIndex)"
                                  @change="sortSelectChange"
                                >
                                  <tiny-option v-for="item in sortingOptions" :key="item" :label="item" :value="item">
                                  </tiny-option>
                                </tiny-select>
                              </div>
                              <div v-else class="sort-number-display" @click="clickSortDisplay(column, index)">
                                {{ column.sortingIndex }}
                              </div>
                            </div>
                            <p
                              class="name toolbar-drag-item"
                              :class="[dropConfig.plugin && !isGroup && 'dragable']"
                              @mouseenter="handleMouseenter"
                              @mouseleave="handleMouseleave"
                            >
                              <title-render :column="column"></title-render>
                            </p>
                            <div v-if="!hideFixedColumn && (!isGroup || !column.children)" class="dropdown-column">
                              <tiny-dropdown :show-icon="false" @item-click="handleFixedItemClick" trigger="hover">
                                <span :class="['left', 'right'].includes(column.fixed) && 'dropdown-btn'">
                                  <icon-left-frozen v-if="column.fixed === 'left'"></icon-left-frozen>
                                  <icon-right-frozen v-else-if="column.fixed === 'right'"></icon-right-frozen>
                                  <span v-else class="set-btn">{{ t('ui.grid.individuation.toolbar.set') }}</span>
                                </span>
                                <template #dropdown>
                                  <tiny-dropdown-menu
                                    @mouseenter="handleDropdownMouseenter($event, index)"
                                    @mouseleave="handleDropdownMouseleave($event, index)"
                                  >
                                    <tiny-dropdown-item
                                      v-for="item in column.fixedOption"
                                      :key="item.value"
                                      :label="item.label"
                                      :item-data="{ value: item.value, property: column.property }"
                                      >{{ item.label }}</tiny-dropdown-item
                                    >
                                  </tiny-dropdown-menu>
                                </template>
                              </tiny-dropdown>
                            </div>
                            <div
                              v-if="!hideSortColumn"
                              class="dropdown-column"
                              :class="[!column.sortable && 'visibility-hidden']"
                            >
                              <tiny-dropdown :show-icon="false" @item-click="handleSortItemClick" trigger="hover">
                                <span :class="['asc', 'desc'].includes(column.order) && 'dropdown-btn'">
                                  <icon-ascending v-if="column.order === 'asc'"></icon-ascending>
                                  <icon-descending v-else-if="column.order === 'desc'"></icon-descending>
                                  <span v-else class="set-btn" :class="[!column.sortable && 'visibility-hidden']">{{
                                    t('ui.grid.individuation.toolbar.set')
                                  }}</span>
                                </span>
                                <template #dropdown>
                                  <tiny-dropdown-menu
                                    @mouseenter="handleDropdownMouseenter($event, index)"
                                    @mouseleave="handleDropdownMouseleave($event, index)"
                                  >
                                    <tiny-dropdown-item
                                      v-for="item in column.sortOption"
                                      :key="item.value"
                                      :label="item.label"
                                      :item-data="{ value: item.value, property: column.property }"
                                      >{{ item.label }}</tiny-dropdown-item
                                    >
                                  </tiny-dropdown-menu>
                                </template>
                              </tiny-dropdown>
                            </div>
                            <span
                              v-if="!isGroup"
                              class="close-icon"
                              :class="[column.alwaysShow && 'visibility-hidden']"
                              @click="hiddenColumn(column.property)"
                              ><icon-close></icon-close
                            ></span>
                          </div>

                          <ul v-if="column.children">
                            <li
                              v-for="(column, index) in column.children"
                              :key="column.property + index"
                              :class="[column.fixed, getRowClassName(column)]"
                              :data-row="column.property"
                              v-show="column.visible"
                            >
                              <div class="column-container">
                                <p
                                  class="name child-name"
                                  @mouseenter="handleMouseenter"
                                  @mouseleave="handleMouseleave"
                                >
                                  <title-render :column="column"></title-render>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
              </tiny-split>
            </div>
            <div
              v-show="activeName === 'other'"
              :class="['tabs-body-item', animateShow === 'other' ? 'active-item' : '']"
            >
              <div class="other-setting">
                <span class="label">{{ t('ui.grid.individuation.tabs.other.pageSize') }}</span>
                <tiny-radio-group v-model="settings.pageSize">
                  <tiny-radio v-for="(item, index) in initSettings.pageSizes" :key="index" :label="item">{{
                    item
                  }}</tiny-radio>
                </tiny-radio-group>
              </div>
            </div>
          </div>
        </div>
        <div class="tiny-grid-custom__footer" :dir="tinyTheme === 'saas' ? 'rtl' : 'ltr'">
          <tiny-button type="primary" @click="saveSettings">{{ t('ui.grid.individuation.saveBtn') }}</tiny-button>
          <tiny-custom-switch
            v-if="multipleHistory && activeName === 'base'"
            ref="switch"
            :custom-mode="customMode"
            :selected-template-val="selectedTemplateVal"
            :history-config="historyConfig"
            @init-storage="initStorage"
          ></tiny-custom-switch>
          <tiny-button @click="handleReset">{{ t('ui.grid.individuation.resetBtn') }}</tiny-button>
          <tiny-button @click="cancelSettings">{{ t('ui.grid.individuation.cancelBtn') }}</tiny-button>
        </div>
      </div>
      <tiny-tooltip
        ref="tooltip"
        v-model="tooltipVisible"
        popper-class="absolute"
        :manual="true"
        effect="light"
        :content="tooltipContent"
        placement="top"
      >
      </tiny-tooltip>
    </template>
  </tiny-modal>
</template>

<script lang="tsx">
import Button from '@opentiny/vue-button'
import Modal from '@opentiny/vue-modal'
import Tree from '@opentiny/vue-tree'

import { t } from '@opentiny/vue-locale'
import { find, isArray, mapTree } from '@opentiny/vue-renderless/grid/static'
import {
  IconClose,
  IconLeftFrozen,
  IconRightFrozen,
  IconDescending,
  IconAscending,
  IconChevronRight
} from '@opentiny/vue-icon'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'
import Split from '@opentiny/vue-split'
import Checkbox from '@opentiny/vue-checkbox'
import Radio from '@opentiny/vue-radio'
import CheckboxGroup from '@opentiny/vue-checkbox-group'
import RadioGroup from '@opentiny/vue-radio-group'
import Search from '@opentiny/vue-search'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import Tooltip from '@opentiny/vue-tooltip'
import CustomSwitch from './custom-switch.vue'
import { extend } from '@opentiny/vue-renderless/common/object'
import { isNull } from '@opentiny/vue-renderless/grid/static'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { $props, isVue2, directive, useDefer, h, defineComponent } from '@opentiny/vue-common'
import { GridConfig } from '@opentiny/vue-grid'
import { mergeArray } from './multiple-history'
import '@opentiny/vue-theme/grid-toolbar/index.less'

const position = ['left', 'right']

const TitleRender = {
  props: ['column'],
  render() {
    const { column, $parent } = this
    const { title } = column
    const { tinyTable } = $parent

    return h('span', { class: ['custom-saas-title-render', column.id] }, [
      typeof title === 'function' ? title(h, { $table: tinyTable, column }) : title
    ])
  }
}

export default defineComponent({
  components: {
    TinyModal: Modal,
    TinyButton: Button,
    TinySplit: Split,
    TinySelect: Select,
    TinyOption: Option,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyCustomSwitch: CustomSwitch,
    IconClose: IconClose(),
    IconLeftFrozen: IconLeftFrozen(),
    IconRightFrozen: IconRightFrozen(),
    IconDescending: IconDescending(),
    IconAscending: IconAscending(),
    IconChevronRight: IconChevronRight(),
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup,
    TinyRadioGroup: RadioGroup,
    TinyTooltip: Tooltip,
    TinyRadio: Radio,
    TinySearch: Search,
    TinyTree: Tree,
    TitleRender
  },
  directives: directive({ Clickoutside }),
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
    alwaysShowColumns: {
      type: Array,
      default() {
        return []
      }
    },
    columnsGroup: {
      type: Array,
      default() {
        return []
      }
    },
    other: {
      type: Boolean,
      default: true
    },
    search: {
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
    customMode: String,
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
    resetMethod: Function,
    hideSortColumn: Boolean,
    hideFixedColumn: Boolean
  },
  data() {
    return {
      maxFixedNum: 6,
      tooltipContent: '',
      tooltipVisible: false,
      templateVisible: false,
      activeName: 'base',
      animateShow: 'base',
      selectedTemplate: '',
      lastSelectIndex: 0,
      searchValue: '',
      splitVal: 0.4,
      columns: [],
      searchColumns: [],
      fullColumn: [],
      customColumns: [{ field: 'level' }, { field: 'property' }],
      settings: {
        sortType: this.initSettings.sortType || 'page',
        pageSize: this.initSettings.pageSize || this.pageSizes[0] || 10,
        columns: []
      },
      originColumns: [],
      groupedColumns: [],
      checkedColumns: [],
      sortingOptions: [],
      templateOptions: [],
      defaultcheckedkeys: [],
      colIds: [],
      multipleHistoryId: null,
      saveDisabled: false,
      updatedSorting: false,
      opt: {},
      allCheckedKeys: []
    }
  },
  setup() {
    const { defer, reset } = useDefer(80)
    return { defer, reset }
  },
  created() {
    this.initOpt()
    this.columns = this.getColumnConfigs(this.data)
  },
  watch: {
    value(val) {
      if (val) {
        this.initOpt()
        this.columns = this.getColumnConfigs(this.data)
        this.groupedColumns = this.getGroupedColumns()
        this.checkedColumns = this.columns.filter((col) => col.visible).map((col) => col.property)
        this.defaultcheckedkeys = this.getDefaultcheckedkeys()
        setTimeout(() => {
          this.initDragEvent()
          this.initDrag = true
          if (this.$refs.tree) {
            this.allCheckedKeys = [...this.$refs.tree.getCheckedKeys(), ...this.$refs.tree.getHalfCheckedKeys()]
          }
        }, 100)
        this.reset()
      } else {
        this.selectedTemplate = ''
      }
    },
    checkedColumns: {
      handler(val) {
        this.columns.forEach((column) => {
          column.visible = !!~val.indexOf(column.property)
        })

        this.sortingOptions = []
        let index = 1

        this.columns.forEach((column) => {
          if (column.visible) {
            column.sortingIndex = index
            this.sortingOptions.push(column.sortingIndex)
            index++
          } else {
            column.sortingIndex = null
          }
        })
      },
      deep: !isVue2
    },
    data: {
      handler(val) {
        this.columns = this.getColumnConfigs(val)
        this.groupedColumns = this.getGroupedColumns()
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
      return this.$grid
    },
    tinyTable() {
      return (this.$grid && this.$grid.$refs.tinyTable) || {}
    },
    isGroup() {
      return this.tinyTable.isGroup
    },
    historyConfig() {
      const multipleHistory =
        isNull(this.multipleHistory) || typeof this.multipleHistory === 'boolean' ? {} : this.multipleHistory

      return extend(true, {}, this.initSettings.multipleHistory || {}, multipleHistory)
    },
    tinyTheme() {
      return this.tinyTable.tinyTheme || GridConfig.themes.AURORA
    },
    visibleColumns() {
      if (this.isGroup) {
        return this.columns.filter((column) => this.allCheckedKeys.includes(column.id))
      } else {
        return this.columns.filter((column) => column.visible)
      }
    },
    selectedTemplateVal() {
      return this.templateOptions.find((item) => item.id === this.selectedTemplate) || {}
    },
    isIndeterminate: {
      get() {
        return !(this.checkedColumns.length === 0 || this.checkedColumns.length === this.columns.length)
      }
    },
    isMultiIndeterminate() {
      return this.allCheckedKeys.length !== 0 && this.allCheckedKeys.length !== this.colIds.length
    },
    multiCheckAll: {
      get() {
        return this.allCheckedKeys.length === this.colIds.length
      },
      set(val) {
        if (val) {
          this.allCheckedKeys = [...this.colIds]
        } else {
          this.allCheckedKeys = []
        }
      }
    },
    checkAll: {
      get() {
        return this.checkedColumns.length === this.columns.length
      },
      set(val) {
        if (val) {
          this.checkedColumns = this.columns.map((item) => item.property)
        } else {
          this.checkedColumns = [...this.alwaysShowColumns]
        }
      }
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
    initOpt() {
      this.opt = {
        asc: {
          value: 'asc',
          label: t('ui.grid.individuation.colConfigs.asc')
        },
        desc: {
          value: 'desc',
          label: t('ui.grid.individuation.colConfigs.desc')
        },
        left: {
          value: 'left',
          label: t('ui.grid.individuation.colConfigs.frozenLeft')
        },
        right: {
          value: 'right',
          label: t('ui.grid.individuation.colConfigs.frozenRight')
        },
        cancelSort: {
          value: 'cancel',
          label: t('ui.grid.individuation.colConfigs.unsort')
        },
        cancelFixed: {
          value: 'cancel',
          label: t('ui.grid.individuation.colConfigs.unfreeze')
        }
      }
    },
    initStorage(option) {
      this.templateOptions = option
    },
    updateTemplateOptions(id, name) {
      this.templateOptions.forEach((opt) => {
        if (opt.id === id) {
          opt.name = name
        }
      })
    },
    checkAllChange(val) {
      if (val) {
        this.$refs.tree.setCheckedKeys(this.colIds)
        this.hideOrShowColumns(true)
      } else {
        this.$refs.tree.setCheckedKeys([])
        this.hideOrShowColumns(false)
      }
    },
    checkNode(node, data, checked) {
      node.visible = checked

      if (node.children && Array.isArray(node.children)) {
        node.children.forEach((item) => {
          item.visible = node.visible
        })
      }

      const checkedKeys = this.$refs.tree.getCheckedKeys()
      const halfCheckedKeys = this.$refs.tree.getHalfCheckedKeys()

      this.allCheckedKeys = checkedKeys.concat(halfCheckedKeys)
    },
    hideOrShowColumns(visible) {
      setColumnsVisible(this.columns)
      function setColumnsVisible(columns) {
        columns.forEach((col) => {
          if (col.children) {
            setColumnsVisible(col.children)
          }
          col.visible = visible
        })
      }
    },
    getRowClassName(row) {
      if (typeof this.rowClassName === 'function') {
        return this.rowClassName({ row })
      } else {
        return this.rowClassName
      }
    },
    getColumnConfigs(configs) {
      const alwaysShowColumns = this.alwaysShowColumns
      this.colIds = []
      const getColNodes = (columns) => {
        return columns
          .map(({ id, title, property, fixed, visible, order, sortable, level, children }) => {
            if (property) {
              const column = {
                id,
                title,
                property,
                alwaysShow: alwaysShowColumns.includes(property),
                fixed,
                visible,
                order,
                sortable,
                level,
                children,
                numberSortVisible: false,
                expand: true
              }

              children && (column.children = getColNodes(children))
              this.colIds.push(id)

              return column
            }
            // eslint规则检测，map必须有return
            return null
          })
          .filter((i) => i)
      }
      if (configs.length && this.$grid) {
        const { collectColumn } = this.$grid.getTableColumn()
        const columns = getColNodes(collectColumn)
        this.originColumns = [...columns]
        const sortColumns = this.initSortingColumns(columns)
        this.initSortAndFixedOption(columns)
        return sortColumns
      } else {
        return []
      }
    },
    initSortAndFixedOption(columns) {
      columns.forEach((column) => {
        column.sortOption =
          column.order === 'asc'
            ? [this.opt.desc, this.opt.cancelSort]
            : column.order === 'desc'
              ? [this.opt.asc, this.opt.cancelSort]
              : [this.opt.asc, this.opt.desc]
        column.fixedOption =
          column.fixed === 'left'
            ? [this.opt.right, this.opt.cancelFixed]
            : column.fixed === 'right'
              ? [this.opt.left, this.opt.cancelFixed]
              : [this.opt.left, this.opt.right]
      })
    },
    initSortingColumns(columns) {
      const leftCols = []
      const rightCols = []
      const visibleCols = []
      const hiddenCols = []

      columns.forEach((col) => {
        if (col.visible) {
          if (col.fixed === 'left') {
            leftCols.push(col)
          } else if (col.fixed === 'right') {
            rightCols.push(col)
          } else {
            visibleCols.push(col)
          }
        } else {
          hiddenCols.push(col)
        }
      })

      const result = [...leftCols, ...visibleCols, ...rightCols, ...hiddenCols]
      this.sortingOptions = []

      result.forEach((column, index) => {
        column.sortingIndex = index + 1
        column.visible && this.sortingOptions.push(column.sortingIndex)
      })

      return result
    },

    getGroupedColumns() {
      const result = []

      if (this.columnsGroup.length) {
        this.columnsGroup.forEach((item) => {
          const data = []
          item.data.forEach((col) => {
            const column = this.originColumns.find((c) => c.property === col)
            if (column) {
              data.push(column)
            }
          })
          result.push({
            label: item.label,
            data
          })
        })
      } else {
        result.push({
          label: '',
          data: [...this.originColumns]
        })
      }

      return result
    },
    getDefaultcheckedkeys() {
      const checkedkeys = []
      getCheckedkeys(this.columns)

      function getCheckedkeys(columns) {
        columns.forEach((col) => {
          if (col.children) {
            getCheckedkeys(col.children)
          } else {
            col.visible && checkedkeys.push(col.id)
          }
        })
      }

      return checkedkeys
    },
    selectedTemplateChange() {
      let selected = this.templateOptions.find((opt) => opt.id === this.selectedTemplate)

      if (selected) {
        this.columns = mergeArray(this.columns, selected.setting.custom.columns)
        this.columns = this.initSortingColumns(this.columns)
        this.initSortAndFixedOption(this.columns)
        this.groupedColumns = this.getGroupedColumns()
        this.isGroup && (this.defaultcheckedkeys = this.getDefaultcheckedkeys())
        this.checkedColumns = this.columns.filter((col) => col.visible).map((col) => col.property)
        this.settings.pageSize = selected.setting.custom.pageSize
        this.multipleHistoryId = selected.id
        this.updatedSorting = true
        if (this.$refs.tree) {
          setTimeout(() => {
            this.allCheckedKeys = [...this.$refs.tree.getCheckedKeys(), ...this.$refs.tree.getHalfCheckedKeys()]
          }, 100)
        }
      }
    },
    sortSelectChange(index) {
      const newIndex = index - 1
      const oldIndex = this.lastSelectIndex - 1
      this.handleFixed('sort', 1, 1, oldIndex, newIndex)
    },
    selectFocus(event, index) {
      this.lastSelectIndex = index
    },
    // 莫同步AUI， search组件的input事件的第一个参数就是value.
    searchChange(val) {
      const getRenderedTitle = (col) => {
        let result = ''

        if (typeof col.title === 'function') {
          const titleElm = this.$el.querySelector(`.custom-saas-title-render.${col.id}`)

          result = (titleElm && titleElm.textContent) || ''
          result = result.toUpperCase()
        } else if (col.title) {
          result = col.title && col.title.toUpperCase()
        }

        return result
      }

      if (this.isGroup) {
        this.$refs.tree.filter(val)
      } else {
        this.searchColumns = this.columns.filter((col) => {
          const title = getRenderedTitle(col)
          const upperVal = val && val.toUpperCase()
          return title.includes(upperVal)
        })
      }
    },
    filterTreeNode(value, data) {
      if (!value) return true
      let label = data.label || ''
      if (typeof data.label !== 'string') {
        label = data.label.toString()
      }
      return label.includes(value)
    },
    handelClearAll() {
      this.checkedColumns = [...this.alwaysShowColumns]
    },
    hiddenColumn(val) {
      const index = this.checkedColumns.findIndex((col) => col === val)
      this.checkedColumns.splice(index, 1)
    },
    handleSortItemClick(item) {
      const column = this.columns.find((col) => col.property === item.property)
      if (column) {
        column.order = item.value === 'cancel' ? undefined : item.value
        column.sortOption =
          column.order === 'asc'
            ? [this.opt.desc, this.opt.cancelSort]
            : column.order === 'desc'
              ? [this.opt.asc, this.opt.cancelSort]
              : [this.opt.asc, this.opt.desc]
      }
    },
    // TODO: 待完善具体类型  vm dropdown组件示例
    handleFixedItemClick(itemData: { itemData: object; vm: any } | object, vm: any) {
      let item
      // aui传参和tiny不一致, aui传参为(itemData, vm) tiny传参为({ itemData, vm })
      if (vm) {
        item = itemData
      } else {
        item = itemData?.itemData
      }
      const index = this.columns.findIndex((col) => col.property === item.property)
      const column = this.columns[index]
      item.fixed = column.fixed

      if (column) {
        if (position.includes(item.value) && !position.includes(column.fixed) && this.fixedNumberIsMax()) {
          Modal.message({
            message: t('ui.grid.individuation.maxFreezeNumMsg'),
            status: 'warning',
            id: 'drop-fixed-max-waring'
          })
          return
        }

        this.columns.splice(index, 1)
        const leftIdx = this.columns.reduce(
          (result, col, index) => (col.fixed === 'left' && col.visible ? index : result),
          -1
        )
        const rightIdx = this.columns.findIndex((col) => col.fixed === 'right' && col.visible)
        column.fixed = item.value === 'cancel' ? undefined : item.value

        if (item.value === 'left') {
          this.columns.splice(leftIdx >= 0 ? leftIdx + 1 : 0, 0, column)
          column.fixedOption = [this.opt.right, this.opt.cancelFixed]
        } else if (item.value === 'right') {
          this.columns.splice(rightIdx >= 0 ? rightIdx : this.visibleColumns.length, 0, column)
          column.fixedOption = [this.opt.left, this.opt.cancelFixed]
        } else {
          if (item.fixed === 'left' && leftIdx >= 0) {
            this.columns.splice(leftIdx + 1, 0, column)
          } else if (item.fixed === 'right' && rightIdx >= 0) {
            this.columns.splice(rightIdx, 0, column)
          } else {
            this.columns.splice(index, 0, column)
          }

          column.fixedOption = [this.opt.left, this.opt.right]
        }
        this.updateSortingIndex()
      }
    },
    fixedNumberIsMax() {
      return this.columns.filter((col) => col.visible && col.fixed).length >= this.maxFixedNum
    },
    updateSortingIndex() {
      this.columns.forEach((col, index) => {
        col.sortingIndex = index + 1
      })
    },
    handleDropdownMouseenter($event, index) {
      const childNode = this.$refs.list.children[index]
      childNode && childNode.classList.add('show-dropdown')
    },
    handleDropdownMouseleave($event, index) {
      const childNode = this.$refs.list.children[index]
      childNode && childNode.classList.remove('show-dropdown')
    },
    handleMouseenter($event) {
      const dom = $event.target
      const text = dom.textContent
      const tooltip = this.$refs.tooltip

      if (dom.scrollWidth > dom.offsetWidth) {
        tooltip.state.referenceElm = dom
        tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
        tooltip.doDestroy()
        this.tooltipVisible = true
        this.tooltipContent = text

        setTimeout(tooltip.updatePopper, 20)
      }
    },
    handleMouseleave() {
      this.tooltipVisible = false
    },
    handleInput(val) {
      this.$emit('input', val)
    },
    buildSettings() {
      const props = ['order', 'fixed', 'visible', 'sortable'].concat(this.keys)
      !this.updatedSorting &&
        (this.columns = [...this.groupedColumns[0].data].sort((a, b) => a?.sortingIndex - b?.sortingIndex))

      this.settings.columns = mapTree(this.columns, ({ property, ...rest }) => {
        const node = { property }

        props.forEach((prop) => {
          node[prop] = rest[prop]
        })

        return node
      })

      return this.settings
    },
    saveSettings(val) {
      const visible = typeof val === 'boolean' ? val : false
      this.buildSettings()
      this.$emit('saveSettings', this.settings, visible)

      !visible && this.handleClose()
    },
    resetSettings(event) {
      if (this.activeName === 'base') {
        this.columns = this.getColumnConfigs(this.data)
        this.checkedColumns = this.columns.filter((col) => col.visible).map((col) => col.property)
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
      this.updatedSorting = false
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
          this.updatedSorting = true
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

              columns.forEach((source) => {
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

          this.checkedColumns = this.columns.filter((col) => col.visible).map((col) => col.property)
        })
      } else {
        this.resetSettings(event)
      }
    },
    handleFixed(type, from, to, oldIndex, newIndex) {
      if (from === to && oldIndex !== newIndex) {
        const newCol = this.columns[newIndex]
        const oldCol = this.columns[oldIndex]
        if (
          type === 'sort' &&
          position.includes(newCol.fixed) &&
          !position.includes(oldCol.fixed) &&
          this.fixedNumberIsMax()
        ) {
          this.columns[oldIndex].sortingIndex = this.lastSelectIndex
          Modal.message({
            message: t('ui.grid.individuation.maxFreezeNumMsg'),
            status: 'warning',
            id: 'select-fixed-max-waring'
          })
          return
        }
        if (newCol.fixed === 'left') {
          oldCol.fixed = 'left'
          oldCol.fixedOption = [this.opt.right, this.opt.cancelFixed]
        } else if (newCol.fixed === 'right') {
          oldCol.fixed = 'right'
          oldCol.fixedOption = [this.opt.left, this.opt.cancelFixed]
        } else {
          oldCol.fixed = undefined
          oldCol.fixedOption = [this.opt.left, this.opt.right]
        }
        this.columns.splice(oldIndex, 1)
        this.columns.splice(newIndex, 0, oldCol)
        this.updateSortingIndex()
        this.updatedSorting = true
      }
    },
    initDragEvent() {
      const handleUpdate = (e) => {
        const { from, to, oldIndex, newIndex } = e
        this.handleFixed('drag', from, to, oldIndex, newIndex)
      }
      if (!this.dropConfig.plugin) return

      this.dropConfig.plugin.create(this.$refs.list, {
        animation: 200,
        draggable: '[data-tag="tiny-grid-toolbar-item"]',
        handle: '.toolbar-drag-item',
        onUpdate: handleUpdate,
        onMove: (e) => {
          if (
            e.related &&
            (e.related.classList.contains('left') || e.related.classList.contains('right')) &&
            !(e.dragged.classList.contains('left') || e.dragged.classList.contains('right')) &&
            this.fixedNumberIsMax()
          ) {
            Modal.message({
              message: t('ui.grid.individuation.maxFreezeNumMsg'),
              status: 'warning',
              id: 'drag-fixed-max-waring'
            })
            return false
          }

          const rowName = e.dragged && e.dragged.getAttribute('data-row')
          const row = this.columns.find((row) => row.property === rowName) || {}
          const cancel = typeof this.onBeforeMove === 'function' ? this.onBeforeMove('row', row, e) : true

          return cancel === undefined || cancel
        }
      })
    },
    clickSortDisplay(column, index) {
      column.numberSortVisible = true

      this.columns.forEach((col) => col !== column && (col.numberSortVisible = false))

      this.$nextTick(() => {
        let selectVm = this.$refs['select' + index]

        selectVm = isArray(selectVm) && selectVm[0] ? selectVm[0] : null

        if (selectVm) {
          selectVm.focus()
        }
      })
    },
    clickEditorOutside() {
      this.columns.forEach((col) => (col.numberSortVisible = false))
    }
  }
})
</script>
