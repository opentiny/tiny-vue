<template>
  <tiny-numeric
    v-model="stepNum"
    :step="step"
    :min="1"
    :max="10"
    @change="onChange"
    circulate
    allow-empty
  ></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric, Modal } from '@opentiny/vue'

const step = ref(2)
const stepNum = ref(1)

function onChange(val, oldVal) {
  Modal.message({ message: `${val} ${oldVal}`, status: 'info' })
}
</script>
