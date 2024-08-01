<template>
  <tiny-slider v-model="value" vertical height="200px"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(30)
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
