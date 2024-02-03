<template>
  <tiny-rate v-model="rate" text-on-bottom></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(3)
</script>
