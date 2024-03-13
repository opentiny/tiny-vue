<template>
  <tiny-rate v-model="rate" disabled :disabled-void-color="disabledcolor1"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(3)
const disabledcolor1 = ref('red')
</script>
