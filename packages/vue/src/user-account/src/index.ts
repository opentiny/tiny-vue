import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'UserAccount',
  props: {
    ...$props,
    getLangData: Function,
    getUserInfo: Function,
    getUserImageUrl: Function,
    getLogoutUrl: Function,
    redirectUrl: String,
    isLocal: Boolean,
    network: Function,
    isMock: Boolean,
    isGuestUser: Function,
    showLogin: Function,
    showArrow: {
      type: Boolean,
      default: false
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    beforeLogout: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
