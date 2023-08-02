import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

const $constants = {
  STATUS: {
    READY: 'ready',
    RECORDING: 'recording',
    PAUSE: 'pause',
  },
  HWH5_STATUS: {
    START: 'start',
    PAUSE: 'pause',
    CONTINUE: 'continue',
    CANCEL: 'cancel',
    END: 'end'
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
    modelValue: Boolean,
    isHwh5: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
