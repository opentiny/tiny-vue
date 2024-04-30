import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const $constants = {
  PREFIX: 'tiny-statistic'
}

export const statisticProps = {
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
    type: Number,
    default: 0
  },
  prefix: String,
  suffix: String,
  title: [String, Object],
  valueStyle: {
    type: [Object, Array]
  },
  groupSeparator: {
    type: String,
    default: ','
  }
}

export default defineComponent({
  name: $prefix + 'Statistic',
  props: statisticProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
