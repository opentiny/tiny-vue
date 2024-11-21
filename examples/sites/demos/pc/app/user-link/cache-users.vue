<template>
  <tiny-user-link v-model="user" :cache="true" cache-key="test-user" :cache-fields="['email']"></tiny-user-link>
</template>

<script lang="jsx">
import { TinyUserLink } from '@opentiny/vue'

export default {
  components: {
    TinyUserLink
  },
  data() {
    return {
      user: '441047913162396'
    }
  }
}
</script>
