import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default {
  name: $prefix + 'Guide',
  props: {
    ...$props,
    showStep: {
      type: Boolean,
      default: false
    },
    domData: Array,
    mainAxis: {
      type: Number,
      default: 18
    },
    crossAxis: {
      type: Number,
      default: null
    },
    alignmentAxis: {
      type: Number,
      default: null
    },
    popPosition: {
      type: String,
      default: 'bottom'
    },
    arrow: {
      type: Boolean,
      default: true
    },
    modalOverlayOpeningPadding: {
      type: Number,
      default: 0
    },
    modalOverlayOpeningRadius: {
      type: Number,
      default: 0
    },
    lightClass: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '510'
    },
    height: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
