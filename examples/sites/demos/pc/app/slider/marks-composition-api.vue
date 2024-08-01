<template>
  <tiny-slider v-model="value" :marks="marks"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const marks = ref({
  10: '10%',
  40: '40%',
  50: '50%'
})

const value = ref(20)
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
