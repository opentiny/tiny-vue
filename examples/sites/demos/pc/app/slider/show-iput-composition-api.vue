<template>
  <tiny-slider v-model="value2" :show-input="true"></tiny-slider>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value2 = ref(40)
</script>
