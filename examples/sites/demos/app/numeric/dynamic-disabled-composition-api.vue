<template>
  <tiny-numeric v-model="stepNum" :step="step" :disabled="disabled"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const step = ref(2)
const stepNum = ref(1)
const disabled = ref(true)
</script>
