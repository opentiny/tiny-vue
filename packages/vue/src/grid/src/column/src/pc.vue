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
<script lang="tsx">
import { $props, setup, defineComponent, h } from '@opentiny/vue-common'
import { findTree } from '@opentiny/vue-renderless/grid/static'
import { renderless, api } from '@opentiny/vue-renderless/grid/column/vue'
import { warn } from '../../tools'

import GlobalConfig from '../../config'

const { columnLevelKey, defaultColumnName } = GlobalConfig

export default defineComponent({
  name: defaultColumnName,
  componentName: 'GridColumn',
  props: {
    ...$props,
    // 列对齐方式
    align: String,
    // 给单元格附加 className
    className: [String, Function],
    // 单元格编辑渲染配置项
    editor: [Object, Function],
    // 列属性
    field: String,
    filter: {},
    // 自定义筛选方法
    filterMethod: Function,
    // 筛选是否允许多选
    filterMultiple: { type: Boolean, default: true },
    // 筛选模板配置项
    filterRender: Object,
    // 配置筛选条件数组
    filters: Array,
    // 将列固定在左侧或者右侧
    fixed: String,
    // 表尾列的对齐方式
    footerAlign: String,
    // 给表尾单元格附加 className
    footerClassName: [String, Function],
    // 格式化配置
    formatConfig: {
      type: Object,
      default: () => ({ data: [] })
    },
    // 格式化显示内容
    formatText: [Function, String],
    // 格式化单元格编辑器组件的传入值
    formatValue: Function,
    group: {
      type: Boolean,
      default: false
    },
    // 表头对齐方式
    headerAlign: String,
    // 给表头单元格附加 className
    headerClassName: [String, Function],
    // 自定义索引方法
    indexMethod: Function,
    // 在 v3.0 中废弃 label
    label: String,
    // 列最小宽度，把剩余宽度按比例分配
    minWidth: [Number, String],
    // 额外的参数
    params: Object,
    // 在 v3.0 中废弃 prop
    prop: String,
    // 是否服务端排序
    remoteSort: { type: Boolean, default: null },
    // 单元格渲染配置项
    renderer: [Object, Function],
    // 是否必填，如不设置，则会根据校验规则自动生成
    required: {
      type: Boolean,
      default: false
    },
    // 是否允许拖动列宽调整大小
    resizable: { type: Boolean, default: null },
    // 表单的验证功能
    rules: Object,
    // 当表头内容过长时显示为省略号
    showHeaderOverflow: { type: [Boolean, String], default: null },
    // 显示列头提示
    showHeaderTip: { type: Boolean, default: null },
    // 是否显示列头编辑图标
    showIcon: {
      type: Boolean,
      default: true
    },
    // 当内容过长时显示为省略号
    showOverflow: { type: [Boolean, String], default: null },
    // 显示列内容提示
    showTip: { type: Boolean, default: null },
    // 自定义排序的属性
    sortBy: [String, Array],
    // 自定义排序方法
    sortMethod: Function,
    // 是否允许排序
    sortable: {
      type: Boolean,
      default: false
    },
    // 列标题
    title: [String, Function],
    // 指定为树节点
    treeNode: Boolean,
    // 渲染类型: index,radio,selection,expand,operation,默认值空串
    type: String,
    // 列宽度
    width: [Number, String],
    // 操作列配置
    operationConfig: Object,
    // 值比较方法
    equals: Function
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as any
  },
  render() {
    const { state } = this
    const { firstRow, $table, columnConfig } = state

    const instanceSlots = this.$slots

    let slotVnode
    try {
      slotVnode = instanceSlots.default && instanceSlots.default({ row: firstRow, column: columnConfig, skip: true })
    } catch (e) {
      slotVnode = null
      warn('ui.grid.error.chainCallError')
    }

    const hasSubColumn = findTree(
      slotVnode,
      ({ componentOptions, type }) => {
        const componentName = (type && type.name) || (componentOptions && componentOptions.Ctor.extendOptions.name)

        return $table.isValidCustomColumn(componentName)
      },
      null,
      null
    )

    const columnProps = {
      key: columnConfig.id,
      attrs: { 'data-colid': columnConfig.id }
    }

    return h('div', columnProps, hasSubColumn && slotVnode)
  }
})
</script>
