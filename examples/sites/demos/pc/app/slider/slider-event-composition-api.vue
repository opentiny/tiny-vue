<template>
  <tiny-slider v-model="value2" @change="change" @start="start" @stop="stop"></tiny-slider>
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

function change(val) {
  Notify({
    title: '触发change事件',
    message: `改变值为${val}`,
    offset: 100
  })
}

function stop(val) {
  Notify({
    title: '触发停止滑动事件',
    message: `停止后值为${val}`,
    offset: 150
  })
}
</script>
