import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { IconPopup, IconDoubleLeft, IconDoubleRight } from '@opentiny/vue-icon'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'PagerItem',
  props: {
    ...$props,
    disabled: {
      type: Boolean,
      default: false
    },
    currentPage: Number,
    pageCount: Number,
    pagerCount: Number,
    popupIcon: {
      type: Object,
      default: IconPopup
    },
    doubleLeftIcon: {
      type: Object,
      default: IconDoubleLeft
    },
    doubleRightIcon: {
      type: Object,
      default: IconDoubleRight
    },
    isBeforePageChange: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
