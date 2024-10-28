<template>
  <tiny-amount v-model="value"></tiny-amount>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyAmount } from '@opentiny/vue'

const value = ref(88.88)
</script>
