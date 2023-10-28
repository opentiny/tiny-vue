<template>
  <tiny-numeric v-model="stepNum" :mouse-wheel="mouseWheel"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const mouseWheel = ref(true)
const stepNum = ref(1)
</script>
