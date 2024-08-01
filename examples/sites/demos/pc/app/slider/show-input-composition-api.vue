<template>
  <tiny-slider v-model="value" :show-input="true" unit="%"></tiny-slider>
  <tiny-slider v-model="value2" :show-input="true"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(40)
const value2 = ref([40, 60])
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
