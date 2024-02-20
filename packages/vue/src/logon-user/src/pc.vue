<template>
  <div class="tiny-logon-user">{{ state.userName }}</div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent, $props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/logon-user/vue'

export default defineComponent({
  name: $prefix + 'LogonUser',
  props: {
    ...$props,
    getUserInfo: Function
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
