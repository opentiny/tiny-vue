<template>
  <tiny-numeric v-model="value" :mouse-wheel="mouseWheel"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Numeric as TinyNumeric } from '@opentiny/vue'

const value = ref(1)
const mouseWheel = ref(true)
</script>
