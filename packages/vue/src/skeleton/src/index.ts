import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import type { PropType } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {}

export const skeletonProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: String,
  loading: {
    type: Boolean,
    default: true
  },
  rows: {
    type: Number,
    default: 3
  },
  avatar: {
    type: Boolean,
    default: false
  },
  rowsWidth: {
    type: Array as PropType<(string | number)[]>,
    default: () => []
  },
  active: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  name: $prefix + 'Skeleton',
  props: skeletonProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
