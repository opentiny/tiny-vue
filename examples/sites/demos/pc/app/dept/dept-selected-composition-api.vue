<template>
  <tiny-dept v-model="value" @selected="selected"></tiny-dept>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Dept as TinyDept, Modal } from '@opentiny/vue'

const value = ref('022471')

function selected(value) {
  Modal.message({ message: '下拉选项值改变为: ' + value, status: 'info' })
}
</script>
