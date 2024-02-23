<template>
  <tiny-slider v-model="value" :format-tooltip="format" :show-tip="true"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider } from '@opentiny/vue'

const value = ref(20)

function format(value) {
  return '当前值为：' + value
}
</script>
