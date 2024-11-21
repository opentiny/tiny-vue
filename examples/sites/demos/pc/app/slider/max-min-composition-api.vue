<template>
  <tiny-slider v-model="value" :min="30" :max="70"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { TinySlider } from '@opentiny/vue'

const value = ref(30)
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
