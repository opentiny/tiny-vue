<template>
  <div>
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

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user1 = ref('test1,test2,test3')
const user2 = ref('test1,test10')
</script>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
