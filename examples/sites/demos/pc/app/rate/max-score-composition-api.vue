<template>
  <tiny-rate v-model="rate" :max="8"></tiny-rate>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(7)
</script>
