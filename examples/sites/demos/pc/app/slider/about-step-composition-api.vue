<template>
  <tiny-slider v-model="value" :step="10"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(20)
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
