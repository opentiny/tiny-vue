<template>
  <div :key="columnConfig.id" :data-colid="columnConfig.id">
    <slot v-if="hasSubColumn" :row="firstRow" :column="columnConfig" :skip="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject, onUpdated, watch, nextTick, getCurrentInstance, computed } from 'vue'
import { findTree } from '@opentiny/vue-renderless/grid/static'
import { setColumnFormat } from '@opentiny/vue-renderless/grid/utils'
import Cell from '../../cell'
import { warn } from '../../tools'
import GlobalConfig from '../../config'
import type { PropType } from 'vue'

const { columnLevelKey, defaultColumnName } = GlobalConfig

export default defineComponent({
  name: defaultColumnName,
  componentName: 'GridColumn',
  props: {
    align: String,
    className: [String, Function] as PropType<string | Function>,
    editor: [Object, Function] as PropType<object | Function>,
    field: String,
    filter: {},
    filterMethod: Function as PropType<Function>,
    filterMultiple: { type: Boolean, default: true },
    filterRender: Object,
    filters: Array,
    fixed: String,
    footerAlign: String,
    footerClassName: [String, Function] as PropType<string | Function>,
    formatConfig: {
      type: Object,
      default: () => ({ data: [] })
    },
    formatText: [Function, String] as PropType<Function | string>,
    formatValue: Function as PropType<Function>,
    group: {
      type: Boolean,
      default: false
    },
    headerAlign: String,
    headerClassName: [String, Function] as PropType<string | Function>,
    indexMethod: Function as PropType<Function>,
    label: String,
    minWidth: [Number, String],
    params: Object,
    prop: String,
    remoteSort: { type: Boolean, default: null },
    renderer: [Object, Function] as PropType<object | Function>,
    required: { type: Boolean, default: false },
    resizable: { type: Boolean, default: null },
    rules: Object,
    showHeaderOverflow: { type: [Boolean, String], default: null },
    showHeaderTip: { type: Boolean, default: null },
    showIcon: { type: Boolean, default: true },
    showOverflow: { type: [Boolean, String], default: null },
    showTip: { type: Boolean, default: null },
    sortBy: [String, Array] as PropType<string | Array<string>>,
    sortMethod: Function as PropType<Function>,
    sortable: { type: Boolean, default: false },
    title: [String, Function] as PropType<string | Function>,
    treeNode: Boolean,
    type: String,
    width: [Number, String],
    operationConfig: Object,
    equals: Function as PropType<Function>
  },
  provide() {
    return { $column: this }
  },
  inject: {
    $table: { default: null }
  },
  methods: Cell,
  setup(props, { slots }) {
    const currentInstance = getCurrentInstance()
    const instance = currentInstance?.proxy
    const $grid = inject('$grid', null)
    const $table = inject('$table', null)
    let slotsCache = {}

    if ($table && !$table.isTagUsageSence) {
      $table.isTagUsageSence = true
    }

    // 添加实例插槽关系
    instance?.useInstanceSlots?.()

    // 添加列级关系
    instance?.useRelation?.({ relationKey: `${columnLevelKey}-${$table.id}` })

    const state = reactive({
      columnConfig: Cell.createColumn($table, props),
      slots,
      firstRow: !$grid?.fetchOption && $grid?.data?.length ? $grid.data[0] : {}
    })

    watch(
      () => props.formatConfig,
      () => setColumnFormat(state.columnConfig, props)
    )

    onUpdated(() => {
      // 处理 vue2 的插槽代理问题
      const noProxySlots = instance?.$scopedSlots || instance?.slots
      const slotsChange = Object.keys(noProxySlots || {}).some((key) => !(slotsCache?.[key] === noProxySlots[key]))
      if (slotsChange) {
        slotsCache = { ...noProxySlots }
        state.columnConfig.slots = slotsCache
      }
    })

    nextTick(() => {
      state.columnConfig.slots = instance?.instanceSlots || slots
    })

    // 计算是否有子列
    const hasSubColumn = (slotVnode: any) => {
      return findTree(
        slotVnode,
        (node) => {
          const { type } = node || {}
          const componentName = type?.name
          return $table?.isValidCustomColumn(componentName)
        },
        null,
        null
      )
    }

    return {
      ...state,
      hasSubColumn: computed(() => {
        let slotVnode
        try {
          slotVnode = slots.default?.({ row: state.firstRow, column: state.columnConfig, skip: true })
        } catch (e) {
          slotVnode = null
          warn('ui.grid.error.chainCallError')
        }
        return hasSubColumn(slotVnode)
      })
    }
  }
})
</script>
