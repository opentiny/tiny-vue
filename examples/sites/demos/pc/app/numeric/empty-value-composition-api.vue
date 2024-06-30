<template>
  <tiny-numeric v-model="stepNum" :step="step" :empty-value="null" @change="onChange" allow-empty></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const step = ref(2)
const stepNum = ref(1)

function onChange(val, oldVal) {
  Modal.message({ message: `${val} ${oldVal}`, status: 'info' })
}
</script>
