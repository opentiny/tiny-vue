import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const stepsProps = {
  ...$props,
  nameField: {
    type: String,
    default: 'name'
  },
  countField: {
    type: String,
    default: 'count'
  },
  statusField: {
    type: String,
    default: 'status'
  },
  data: [Object, Array],
  space: [String, Number],
  active: {
    type: Number,
    default: -1
  },
  visibleNum: {
    type: Number,
    default: 5
  },
  descriptionField: {
    type: String,
    default: 'description'
  },
  size: {
    type: String,
    default: 'medium'
  },
  vertical: {
    type: Boolean,
    default: false
  },
  advanced: {
    type: Boolean,
    default: false
  },
  line: Boolean,
  duration: {
    type: Number,
    default: 300
  },
  noArrow: Boolean,
  flex: Boolean
}

export default defineComponent({
  name: $prefix + 'Steps',
  props: stepsProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
