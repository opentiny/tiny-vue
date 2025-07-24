<template>
  <div class="demo-dept-class">
    <h3 class="title">基本用法</h3>
    <tiny-dept v-model="value" @confirm="confirm"></tiny-dept>
  </div>
</template>

<script setup lang="jsx">
import { TinyDept, TinyModal } from '@opentiny/vue'
import { ref } from 'vue'

const value = ref('022471')

function confirm() {
  TinyModal.message({ message: 'Dept 部门 confirm 事件' })
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
.title {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
