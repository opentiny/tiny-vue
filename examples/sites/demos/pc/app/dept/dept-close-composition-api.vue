<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value" @close="close"></tiny-dept>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept, TinyModal } from '@opentiny/vue'

const value = ref('022471')

function close() {
  TinyModal.message('关闭弹出框')
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
