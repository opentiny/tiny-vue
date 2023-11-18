<template>
  <tiny-rate v-model="rate2" allow-half></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate2 = ref(2.5)
</script>
