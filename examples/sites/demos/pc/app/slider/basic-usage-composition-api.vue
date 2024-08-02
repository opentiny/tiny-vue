<template>
  <div>
    <tiny-button @click="setValue">设置值</tiny-button>
    <tiny-slider v-model="value"></tiny-slider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider, Button as TinyButton } from '@opentiny/vue'

const value = ref(20)

function setValue() {
  value.value = 50
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 32px;
}
</style>
