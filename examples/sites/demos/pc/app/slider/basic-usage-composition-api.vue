<template>
  <div>
    <tiny-button @click="setValue">设置值</tiny-button>
    <tiny-slider v-model="value" ref="sliderRef"></tiny-slider>
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
