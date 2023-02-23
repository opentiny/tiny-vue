import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const $constants = {
  AUTH: 'authenticated',
  ANONYMOUS: 'anonymous',
  GLOBAL: 'global',
  ROLE: 'role'
}

const template = () => PCTemplate

export default {
  name: $prefix + 'Roles',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    fetchRole: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
