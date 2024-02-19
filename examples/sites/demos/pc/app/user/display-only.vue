<template>
  <tiny-user v-model="user" display-only auto-close allow-copy></tiny-user>
</template>

<script>
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '702973890055088'
    }
  }
}
</script>
