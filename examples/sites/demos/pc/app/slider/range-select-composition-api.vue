<template>
  <tiny-slider v-model="value"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref([20, 40])
</script>
