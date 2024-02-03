<template>
  <div class="tiny-user-account">
    <user-contact
      :data="state"
      :show-arrow="showArrow"
      :popper-class="'tiny-user-account' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
    >
      <div class="user-account-pop">
        <div class="user-account-custom">
          <slot></slot>
        </div>
        <logout
          :guest-role="guestRole"
          :get-logout-url="getLogoutUrl"
          :is-local="isLocal"
          :redirect-url="redirectUrl"
          :network="network"
          :is-mock="isMock"
          :is-guest-user="isGuestUser"
          :show-login="showLogin"
          :before-logout="beforeLogout"
        ></logout>
      </div>
    </user-contact>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-account/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import UserContact from '@opentiny/vue-user-contact'
import Logout from '@opentiny/vue-logout'

export default defineComponent({
  components: {
    UserContact,
    Logout
  },
  props: [
    ...props,
    'showArrow',
    'guestRole',
    'getUserInfo',
    'getLangData',
    'getUserImageUrl',
    'getLogoutUrl',
    'redirectUrl',
    'isLocal',
    'network',
    'isMock',
    'isGuestUser',
    'showLogin',
    'popperClass',
    'popperAppendToBody',
    'beforeLogout'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
