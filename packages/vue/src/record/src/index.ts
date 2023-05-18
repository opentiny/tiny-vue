import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

const $constants = {
  STATUS: {
    READY: 'ready',
    RECORDING: 'recording',
    PAUSE: 'pause',
  }
}

export default {
  name: $prefix + 'Record',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
