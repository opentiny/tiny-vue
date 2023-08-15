<template>
  <tiny-user-link v-model="user"></tiny-user-link>
</template>

<script lang="jsx">
import { UserLink } from '@opentiny/vue'

export default {
  components: {
    TinyUserLink: UserLink
  },
  data() {
    return {
      user: '441047913162396'
    }
  }
}
</script>
