<template>
  <tiny-numeric v-model="stepNum" :precision="precision"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const stepNum = ref(1)
const precision = ref(2)
</script>
