<template>
  <tiny-numeric v-model="num1" :unit="unit"></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const num1 = ref(1)
const unit = ref('斤')
</script>
