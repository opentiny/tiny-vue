import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile|mobile-first'

const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  STACK_NODES_MAX: '7',
  LIMITED_STACK_NODES: '3'
}

export default defineComponent({
  name: $prefix + 'TimeLine',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    vertical: {
      type: Boolean,
      default: false
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    nameField: {
      type: String,
      default: 'name'
    },
    timeField: {
      type: String,
      default: 'time'
    },
    tipsField: {
      type: String,
      default: 'tips'
    },
    autoColorField: {
      type: String,
      default: 'autoColor'
    },
    start: {
      type: Number,
      default: 1
    },
    data: Array,
    space: Number,
    active: {
      type: Number,
      default: -1
    },
    reverse: {
      type: Boolean,
      default: false
    },
    showStatus: {
      type: Boolean,
      default: false
    },
    subField: {
      type: Boolean,
      default: false
    },
    foldDisabled: {
      type: Boolean,
      default: false
    },
    nodeMax: {
      type: [Number, String],
      default: $constants.STACK_NODES_MAX
    },
    limitedNodes: {
      type: [Number, String],
      default: $constants.LIMITED_STACK_NODES
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
