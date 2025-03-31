<template>
  <div :key="columnConfig.id" :data-colid="columnConfig.id">
    <slot v-if="hasSubColumn" :row="firstRow" :column="columnConfig" :skip="true" />
  </div>
</template>

<script lang="ts">
import { useRelation, useInstanceSlots } from '@opentiny/vue-common'
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
  methods: Cell,
  setup(props, { slots }) {
    // 获取当前组件实例
    const currentInstance = getCurrentInstance()
    // 获取组件实例的代理对象
    const instance = currentInstance?.proxy
    // 注入grid组件实例
    const $grid = inject('$grid', null)
    // 注入table组件实例
    const $table = inject('$table', null)
    // 用于缓存插槽内容
    let slotsCache = {}

    // 标记表格为标签使用场景
    if ($table && !$table.isTagUsageSence) {
      $table.isTagUsageSence = true
    }

    useInstanceSlots()

    useRelation({ relationKey: `${columnLevelKey}-${$table.id}` })

    // 创建响应式状态对象
    const state = reactive({
      // 创建列配置对象
      columnConfig: Cell.createColumn($table, props),
      // 存储插槽
      slots,
      // 获取第一行数据,用于预览列内容
      firstRow: !$grid?.fetchOption && $grid?.data?.length ? $grid.data[0] : {}
    })

    // 监听formatConfig属性变化,更新列格式化配置
    watch(
      () => props.formatConfig,
      () => setColumnFormat(state.columnConfig, props)
    )

    // 组件更新时处理插槽变化
    onUpdated(() => {
      // 处理 vue2 的插槽代理问题,获取未代理的插槽
      const noProxySlots = instance?.$scopedSlots || instance?.slots
      // 检查插槽是否发生变化
      const slotsChange = Object.keys(noProxySlots || {}).some((key) => !(slotsCache?.[key] === noProxySlots[key]))
      if (slotsChange) {
        // 更新插槽缓存
        slotsCache = { ...noProxySlots }
        state.columnConfig.slots = slotsCache
      }
    })

    // 在下一个tick更新列配置的插槽
    nextTick(() => {
      state.columnConfig.slots = instance?.instanceSlots || slots
    })

    // 判断是否存在子列的工具函数
    const hasSubColumn = (slotVnode: any) => {
      return findTree(
        slotVnode,
        (node) => {
          const { type } = node || {}
          const componentName = type?.name
          // 检查是否为有效的自定义列组件
          return $table?.isValidCustomColumn(componentName)
        },
        null,
        null
      )
    }

    // 返回组件状态和计算属性
    return {
      ...state,
      // 计算是否包含子列
      hasSubColumn: computed(() => {
        let slotVnode
        try {
          // 尝试渲染默认插槽获取子节点
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
