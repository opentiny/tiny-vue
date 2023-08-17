<template>
  <div class="demo-dept">
    <h3 class="title">基本用法</h3>
    <div class="content">
      <tiny-dept v-model="value" @cancel="cancel"></tiny-dept>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { Dept as TinyDept, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const value = ref('022471')

function cancel() {
  Modal.message({ message: 'Dept部门 cancel 事件' })
}
</script>

<style scoped>
.demo-dept .tiny-dept {
  width: 270px;
}
</style>
