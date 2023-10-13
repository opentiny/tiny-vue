<template>
  <tiny-rate v-model="rate" allow-half disabled></tiny-rate>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(2.5)
</script>
