<template>
  <tiny-numeric v-model="value" :unit="unit"></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const unit = ref('kg')
</script>
