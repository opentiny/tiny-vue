<template>
  <div class="tiny-logout" @click="logout">
    {{ state.logout ? t('ui.logout.in') : t('ui.logout.out') }}
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/logout/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'guestRole', 'beforeLogout', 'getLogoutUrl', 'redirectUrl', 'isLocal', 'network', 'isMock', 'isGuestUser', 'showLogin'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
