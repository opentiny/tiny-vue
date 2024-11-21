<template>
  <div class="demo-user-class">
    <tiny-user v-model="user" multiple @error="queryError"></tiny-user>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser, TinyModal } from '@opentiny/vue'

const user = ref('')

function queryError(error) {
  TinyModal.message({
    message: `查询失败:[${error.join(',')}]`,
    status: 'error'
  })
}
</script>

<style scoped>
.demo-user-class {
  width: 280px;
}
</style>
