<template>
  <tiny-slider v-model="value" :show-input="true" unit="%"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(40)
</script>
