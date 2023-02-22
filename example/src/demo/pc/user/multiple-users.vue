<template>
  <tiny-user v-model="user" multiple></tiny-user>
</template>

<script>
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '441047913162396,702973890055088,421000103624183'
    }
  }
}
</script>
