<template>
  <tiny-numeric v-model="stepNum" :step="step" :step-strictly="true"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const step = ref(2)
const stepNum = ref(1)
</script>
