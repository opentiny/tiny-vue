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
import { assemColumn, destroyColumn } from '@opentiny/vue-renderless/grid/utils'
import { findTree } from '@opentiny/vue-renderless/grid/static/'
import Cell from '../../cell'
import { h, hooks, $prefix } from '@opentiny/vue-common'

const SLOT_VM_CACHE = new WeakMap()

export default {
  name: $prefix + 'GridColumn',
  componentName: 'GridColumn',
  props: {
    // 列对其方式
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
    // 渲染类型 index,radio,selection,expand
    type: String,
    // 列宽度
    width: [Number, String]
  },
  provide() {
    return { $column: this }
  },
  setup(props, { slots }) {
    const { reactive, onBeforeUnmount, inject, getCurrentInstance, watch, nextTick, markRaw } = hooks
    const currentInstance = getCurrentInstance()
    const instance = currentInstance.proxy
    const $grid = inject('$grid')
    const $table = inject('$table')
    const $column = inject('$column', null)

    const state = reactive({
      columnConfig: Cell.createColumn($table, props),
      slots,
      cacheKey: markRaw({ uid: currentInstance.uid }),
      // 如果是静态数据源，就拿第一行数据
      firstRow: !$grid.fetchOption && $grid.data && $grid.data.length ? $grid.data[0] : {}
    })

    watch(
      () => props.formatConfig,
      () => {
        state.columnConfig = instance.createColumn($table, props)
      }
    )

    nextTick(() => assemColumn($table, $column, instance))

    onBeforeUnmount(() => {
      destroyColumn($table, instance)
      SLOT_VM_CACHE.delete(state.cacheKey)
    })

    return state
  },
  render() {
    const { slots, cacheKey, firstRow, columnConfig } = this
    let slotVm

    if (SLOT_VM_CACHE.has(cacheKey)) {
      slotVm = SLOT_VM_CACHE.get(cacheKey)
    } else {
      slotVm = slots.default && slots.default({ row: firstRow, column: columnConfig })
      SLOT_VM_CACHE.set(cacheKey, slotVm)
    }

    const hasSubColumn = findTree(slotVm, ({ componentOptions, type }) => {
      const componentName = (type && type.name) || (componentOptions && componentOptions.Ctor.extendOptions.name)

      return componentName === 'TinyGridColumn'
    })

    return h('div', hasSubColumn && slotVm)
  },
  methods: Cell
}
