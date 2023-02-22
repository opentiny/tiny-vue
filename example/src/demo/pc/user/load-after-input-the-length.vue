<template>
  <tiny-user v-model="user" :suggest-length="6"></tiny-user>
</template>

<script>
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
