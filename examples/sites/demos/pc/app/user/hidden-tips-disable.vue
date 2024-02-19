<template>
  <div>
    <tiny-user v-model="user" multiple disabled :show-tips="false"></tiny-user>
    {{ user }}
  </div>
</template>

<script>
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '702973890055088,421000103624002,421000103624003'
    }
  }
}
</script>
