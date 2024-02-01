<template>
  <tiny-numeric v-model="value" @change="onChange"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const value = ref(1)

const onChange = (newVal: number, oldVal: number) => {
  Modal.message({
    message: '新值：' + newVal + '，旧值：' + oldVal,
    status: 'info'
  })
}
</script>
