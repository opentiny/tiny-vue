<template>
  <tiny-user v-model="user" multiple @error="queryError"></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser, Modal } from '@opentiny/vue'

const user = ref('')

function queryError(error) {
  Modal.message({
    message: `查询失败:[${error.join(',')}]`,
    status: 'error'
  })
}
</script>
