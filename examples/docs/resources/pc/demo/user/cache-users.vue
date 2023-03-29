<template>
  <div>
    <p>无缓存</p>
    <tiny-user v-model="user1" multiple :cache="false" value-field="userAccount"></tiny-user>
    <p>有缓存</p>
    <tiny-user v-model="user2" multiple cache-key="test-user" :cache-fields="['email']" value-field="userAccount"></tiny-user>
  </div>
</template>

<script lang="jsx">
import { User } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user1: 'test1,test2,test3',
      user2: 'test1,test10'
    }
  }
}
</script>
