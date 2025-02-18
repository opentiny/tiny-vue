<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value" @selected="selected"></tiny-dept>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept, TinyModal } from '@opentiny/vue'

const value = ref('022471')

function selected(value) {
  TinyModal.message({ message: '下拉选项值改变为：' + value, status: 'info' })
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
