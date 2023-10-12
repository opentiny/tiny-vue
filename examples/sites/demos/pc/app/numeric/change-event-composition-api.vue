<template>
  <tiny-numeric v-model="value" @change="Echange"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

function Echange(newVal, oldVal) {
  Modal.message({
    message: '新值：' + newVal + '，旧值：' + oldVal,
    status: 'info'
  })
}
</script>
