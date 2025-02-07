import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { browserInfo } from '@opentiny/utils'
import template from 'virtual-template?pc'

export default defineComponent({
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
      default: browserInfo.isMobile ? '350' : '510'
    },
    height: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
