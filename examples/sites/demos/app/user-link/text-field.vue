<template>
  <tiny-user-link v-model="user" text-field="userCN"></tiny-user-link>
</template>

<script lang="jsx">
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
