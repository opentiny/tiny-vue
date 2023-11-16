<template>
  <tiny-slider v-model="value" vertical height="200px"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(30)
</script>
