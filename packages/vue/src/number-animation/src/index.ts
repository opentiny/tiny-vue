import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const $constants = {
  PREFIX: 'tiny-number-animation'
}

export const numberAnimationProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  separator: {
    type: String,
    default: ','
  },
  from: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 2000
  }
}

export default defineComponent({
  name: $prefix + 'NumberAnimation',
  props: numberAnimationProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
