<template>
  <div>
    <p>尺寸：medium</p>
    <tiny-user v-model="user" size="medium"></tiny-user>
    <p>尺寸：small</p>
    <tiny-user v-model="user" size="small"></tiny-user>
    <p>尺寸：mini</p>
    <tiny-user v-model="user" size="mini"></tiny-user>
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
      user: '421000103624183'
    }
  }
}
</script>
