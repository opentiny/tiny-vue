<template>
  <div>
    <tiny-user v-model="user" multiple value-field="userAccount" copyable></tiny-user>
  </div>
</template>

<script lang="jsx">
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: 'test1,test2,test3'
    }
  }
}
</script>
