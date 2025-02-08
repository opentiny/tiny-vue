<template>
  <div>
    <tiny-numeric v-model="stepNum" :step="step" :min="0" :max="10" circulate></tiny-numeric>
    <br />
    <br />
    <tiny-numeric v-model="num1" disabled></tiny-numeric>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNumeric } from '@opentiny/vue-mobile'

const num1 = ref(1)
const step = ref(2)
const stepNum = ref(1)
</script>
