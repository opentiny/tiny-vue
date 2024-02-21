<template>
  <tiny-rate v-model="rate" :void-color="color"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { Rate as TinyRate } from '@opentiny/vue'

const rate = ref(2)
const color = ref('red')
</script>
