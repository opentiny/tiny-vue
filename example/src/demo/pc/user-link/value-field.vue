<template>
  <tiny-user-link v-model="user" value-field="userAccount"></tiny-user-link>
</template>

<script>
import { UserLink } from '@opentiny/vue'

export default {
  components: {
    TinyUserLink: UserLink
  },
  data() {
    return {
      user: '441047913162396,421000103624183'
    }
  }
}
</script>
