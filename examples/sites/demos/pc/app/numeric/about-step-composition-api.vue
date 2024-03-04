<template>
  <tiny-numeric v-model="value" :step="step"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(0)
const step = ref(2)
</script>
