import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
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
}
