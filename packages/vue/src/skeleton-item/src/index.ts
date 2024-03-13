import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import type { PropType } from '@opentiny/vue-common'

import template from 'virtual-template?pc'

export type VariantType = 'image' | 'circle' | 'square'
export type SizeType = 'large' | 'medium' | 'small'

export const $constants = {}

export const skeletonItemProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: String,
  variant: {
    type: String as PropType<VariantType>,
    default: 'square'
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  }
}

export default defineComponent({
  name: $prefix + 'SkeletonItem',
  props: skeletonItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
