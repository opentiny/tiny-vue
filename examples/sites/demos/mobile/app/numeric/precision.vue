<template>
  <tiny-numeric v-model="stepNum" :precision="precision"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const stepNum = ref(1)
const precision = ref(2)
</script>
