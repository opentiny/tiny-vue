<template>
  <tiny-numeric style="width: 500px" v-model="stepNum" :step="step" string-mode :precision="20"></tiny-numeric>
</template>

<script setup>
import { Numeric as TinyNumeric } from '@opentiny/vue'
import { ref } from 'vue'
const step = ref('0.00000000000000000002')
const stepNum = ref('0.00000000000000000002')
</script>
