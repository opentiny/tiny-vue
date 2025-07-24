<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple value-field="userAccount" copyable></tiny-user>
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
</style>
