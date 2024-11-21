<template>
  <tiny-user-link v-model="user"></tiny-user-link>
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
