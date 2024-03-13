import { $setup, $prefix, $props } from '@opentiny/vue-common'
import template from 'virtual-template?mobile|mobile-first'

export default {
  name: $prefix + 'Exception',

  props: {
    ...$props,
    type: {
      type: String,
      default: 'nodata'
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    imageUrl: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
