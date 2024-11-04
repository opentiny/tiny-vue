<template>
  <div class="demo-user-class">
    <p>无缓存</p>
    <tiny-user v-model="user1" multiple :cache="false" value-field="userAccount"></tiny-user>
    <p>有缓存</p>
    <tiny-user
      v-model="user2"
      multiple
      cache-key="test-user"
      :cache-fields="['email']"
      value-field="userAccount"
    ></tiny-user>
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
      user1: 'test1,test2,test3',
      user2: 'test1,test10'
    }
  }
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
