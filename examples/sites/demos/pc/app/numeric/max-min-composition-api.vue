<template>
  <tiny-numeric v-model="value" :step="step" :min="min" :max="max" circulate></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const step = ref(2)
const min = ref(0)
const max = ref(5)
</script>
