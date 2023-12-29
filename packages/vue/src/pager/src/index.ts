import type { PropType } from 'vue'
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const pagerProps = {
  ...$props,
  accurateJumper: {
    type: Boolean,
    default: () => true
  },
  appendToBody: {
    type: Boolean,
    default: () => true
  },
  currentPage: {
    type: Number,
    default: () => 1
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  hideOnSinglePage: Boolean,
  isBeforePageChange: Boolean,
  layout: String,
  mode: String,
  nextText: String,
  pageCount: Number,
  pageSize: {
    type: Number,
    default: () => 10
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50, 100]
  },
  pagerCount: {
    type: Number,
    validator: (value) => (value | 0) === value && value > 2 && value < 22 && value % 2 === 1,
    default: () => 7
  },
  popperAppendToBody: {
    type: Boolean,
    default: () => true
  },
  showTotalLoading: {
    type: Boolean,
    default: () => false
  },
  customTotal: {
    type: [Boolean, String],
    default: () => false
  },
  popperClass: String,
  prevText: String,
  total: Number,
  size: {
    type: String,
    default: ''
  },
  align: {
    // 分页对齐方式 【left，center，right】
    type: String,
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
}

export default defineComponent({
  name: $prefix + 'Pager',
  props: pagerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
