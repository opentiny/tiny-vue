<template>
  <tiny-numeric v-model="value" :precision="precision"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const precision = ref(2)
</script>
