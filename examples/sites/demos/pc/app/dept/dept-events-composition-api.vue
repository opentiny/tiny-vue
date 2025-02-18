<template>
  <div class="demo-dept-class">
    <tiny-dept v-model="value" @change="change" @open="open"></tiny-dept>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept, TinyModal } from '@opentiny/vue'

const value = ref('022471')

function open() {
  TinyModal.message('打开弹出框')
}

function change(value) {
  TinyModal.message({ message: '改变的部门值：' + value, status: 'info' })
}
</script>

<style scoped>
.demo-dept-class {
  width: 280px;
}
</style>
