<template>
  <tiny-slider v-model="value2" @stop="stop"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { Slider as TinySlider, Notify } from '@opentiny/vue'

const value2 = ref(40)

function stop(val) {
  Notify({
    title: '触发停止滑动事件',
    message: `停止后值为${val}`,
    offset: 150
  })
}
</script>
