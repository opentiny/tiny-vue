<template>
  <tiny-rate v-model="rate1" show-text></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate1 = ref(2)
</script>
