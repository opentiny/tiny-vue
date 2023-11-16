<template>
  <tiny-slider v-model="value" :min="0" :max="100"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(30)
</script>
