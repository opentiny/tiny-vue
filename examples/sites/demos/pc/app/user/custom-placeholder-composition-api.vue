<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" placeholder="请输入工号"></tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('441047913162396')
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
