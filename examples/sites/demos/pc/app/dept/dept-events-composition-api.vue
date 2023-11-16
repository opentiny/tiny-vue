<template>
  <tiny-dept v-model="value" @change="change" @open="open"></tiny-dept>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Dept as TinyDept, Modal } from '@opentiny/vue'

const value = ref('022471')

function open() {
  Modal.message('打开弹出框')
}

function change(value) {
  Modal.message({ message: '改变的部门值: ' + value, status: 'info' })
}
</script>
