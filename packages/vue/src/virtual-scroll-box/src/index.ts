import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'

import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'VirtualScrollBox',
  props: {
    ...$props,
    width: [Number, String], // 区域的宽度
    height: [Number, String], // 区域的高度
    rowBuffer: { type: [Number, String], default: 200 }, // 行缓冲区高度
    columnBuffer: { type: [Number, String], default: 200 }, // 列缓冲区宽度
    scrollbarSize: [Number, String], // 滚动条尺寸
    columns: { type: Array, default: () => [] }, // 所有的列
    columnSizes: { type: Array, default: () => [] }, // 每个列对应的宽度
    rows: { type: Array, default: () => [] }, // 所有的行
    rowSizes: { type: Array, default: () => [] }, // 每个行对应的高度
    fixedRows: { type: Array, default: () => [] }, // 行固定配置
    fixedColumns: { type: Array, default: () => [] }, // 列固定配置
    spanConfig: { type: Array, default: () => [] } // 单元格合并配置
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
