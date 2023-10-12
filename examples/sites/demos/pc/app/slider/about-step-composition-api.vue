<template>
  <tiny-slider v-model="value" :step="10"></tiny-slider>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(20)
</script>
