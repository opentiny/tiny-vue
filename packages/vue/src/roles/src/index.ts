import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {
  AUTH: 'authenticated',
  ANONYMOUS: 'anonymous',
  GLOBAL: 'global',
  ROLE: 'role'
}

export default defineComponent({
  name: $prefix + 'Roles',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    fetchRole: Function,
    getEnvInfoSync: Function,
    getChangeRoleUrl: Function,
    getCustomized: Function,
    pushCustomized: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
