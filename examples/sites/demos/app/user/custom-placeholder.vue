<template>
  <tiny-user v-model="user" placeholder="请输入工号"></tiny-user>
</template>

<script lang="jsx">
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '441047913162396'
    }
  }
}
</script>
