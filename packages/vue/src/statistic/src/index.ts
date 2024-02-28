import type { PropType } from '@opentiny/vue-common'
import type { StyleValue } from 'vue'
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const $constants = {
  PREFIX: 'tiny-statistic'
}

export const definePropType = <T>(val: any): PropType<T> => val

export default defineComponent({
  name: $prefix + 'Statistic',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    precision: {
      type: Number,
      default: 0
    },
    formatter: Function,
    value: {
      type: definePropType<number | object>([Number, Object]),
      default: 0
    },
    prefix: String,
    suffix: String,
    title: [String, Object],
    valueStyle: {
      type: definePropType<StyleValue>([String, Object, Array])
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
