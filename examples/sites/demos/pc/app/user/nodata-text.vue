<template>
  <tiny-user v-model="user" no-data-text="查无此人"></tiny-user>
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
