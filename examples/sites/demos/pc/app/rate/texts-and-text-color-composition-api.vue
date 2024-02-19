<template>
  <tiny-rate v-model="rate" :texts="['很差', '差', '一般', '好', '很好']" show-text text-color="red"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(3)
</script>
