<template>
  <tiny-amount v-model="value" currency="HKD" disabled></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Amount as TinyAmount } from '@opentiny/vue'

const value = ref(88.88)
</script>
