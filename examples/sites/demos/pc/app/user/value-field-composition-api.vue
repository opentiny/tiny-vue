<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple value-field="userAccount"></tiny-user>
    <p>value 值：{{ user }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('test1,test2,test3')
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
