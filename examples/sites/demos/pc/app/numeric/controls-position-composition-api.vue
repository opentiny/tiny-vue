<template>
  <tiny-numeric v-model="stepNum" controls-position="right"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const controls = ref(false)
const stepNum = ref(2)
</script>
