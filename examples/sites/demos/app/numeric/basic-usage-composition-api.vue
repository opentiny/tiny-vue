<template>
  <tiny-numeric v-model="num1"></tiny-numeric>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const num1 = ref(1)
</script>
