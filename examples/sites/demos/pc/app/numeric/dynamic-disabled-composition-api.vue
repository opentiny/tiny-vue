<template>
  <tiny-numeric v-model="value" :disabled="disabled"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const disabled = ref(true)
</script>
