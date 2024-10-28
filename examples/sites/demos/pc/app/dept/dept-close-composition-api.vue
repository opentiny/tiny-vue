<template>
  <tiny-dept v-model="value" @close="close"></tiny-dept>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept, TinyModal } from '@opentiny/vue'

const value = ref('022471')

function close() {
  TinyModal.message('关闭弹出框')
}
</script>
