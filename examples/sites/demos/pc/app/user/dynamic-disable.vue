<template>
  <tiny-user v-model="user" disabled></tiny-user>
</template>

<script lang="jsx">
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '421000103624183'
    }
  }
}
</script>
