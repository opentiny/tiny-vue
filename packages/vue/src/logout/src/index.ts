import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Logout',
  props: {
    ...$props,
    guestRole: {
      type: String,
      default: '-Default-'
    },
    getLogoutUrl: Function,
    redirectUrl: String,
    isLocal: Boolean,
    network: Function,
    isMock: Boolean,
    isGuestUser: Function,
    showLogin: Function,
    beforeLogout: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
