import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { numericProp, makeNumericProp, makeArrayProp } from '@opentiny/vue-renderless/common/prop-util'

import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'VirtualScrollBox',
  props: {
    ...$props,
    width: numericProp, // 区域的宽度
    height: numericProp, // 区域的高度
    rowBuffer: makeNumericProp(200), // 行缓冲区高度
    columnBuffer: makeNumericProp(200), // 列缓冲区宽度
    scrollbarSize: numericProp, // 滚动条尺寸
    columns: makeArrayProp(), // 所有的列
    columnSizes: makeArrayProp(), // 每个列对应的宽度
    rows: makeArrayProp(), // 所有的行
    rowSizes: makeArrayProp(), // 每个行对应的高度
    fixedRows: makeArrayProp(), // 行固定配置
    fixedColumns: makeArrayProp(), // 列固定配置
    spanConfig: makeArrayProp() // 单元格合并配置
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
