<template>
  <tiny-slider v-model="value" @change="change" @start="start" @stop="stop"></tiny-slider>
</template>

<script setup>
import { ref } from 'vue'
import { TinySlider, TinyNotify } from '@opentiny/vue'

const value = ref(40)

function start(val) {
  TinyNotify({
    title: '触发开始滑动事件',
    message: `${JSON.stringify(val)}`,
    offset: 100
  })
}

function change(val) {
  TinyNotify({
    title: '触发 change 事件',
    message: `改变值为 ${val}`,
    offset: 100
  })
}

function stop(val) {
  TinyNotify({
    title: '触发停止滑动事件',
    message: `停止后值为 ${val}`,
    offset: 150
  })
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
