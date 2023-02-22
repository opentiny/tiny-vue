import { $prefix, $props, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'Espace',
  props: {
    ...$props,
    data: Array,
    isNewImMode: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
