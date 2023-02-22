<template>
  <div>
    <tiny-user v-model="user" multiple value-field="userAccount" tag-selectable></tiny-user>
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
      user: 'test1,test2,test3'
    }
  }
}
</script>
