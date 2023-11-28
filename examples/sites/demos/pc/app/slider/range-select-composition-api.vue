<template>
  <tiny-slider v-model="value3"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value3 = ref([20, 40])
</script>
