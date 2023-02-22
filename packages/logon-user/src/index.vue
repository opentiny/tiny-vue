<template>
  <div class="tiny-logon-user">{{ state.userName }}</div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/logon-user/vue'

export default {
  name: $prefix + 'LogonUser',
  props: {
    getUserInfo: Function
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
}
</script>
