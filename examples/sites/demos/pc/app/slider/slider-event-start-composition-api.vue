<template>
  <tiny-slider v-model="value2" @start="start"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider, Notify } from '@opentiny/vue'

const value2 = ref(40)

function start(val) {
  Notify({
    title: '触发开始滑动事件',
    message: `${JSON.stringify(val)}`,
    offset: 100
  })
}
</script>
