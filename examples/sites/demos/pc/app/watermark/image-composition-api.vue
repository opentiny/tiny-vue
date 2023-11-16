<template>
  <tiny-watermark v-bind="params">
    <div style="height: 500px"></div>
  </tiny-watermark>
</template>

<script setup>
import { reactive } from 'vue'
import { Watermark as TinyWatermark } from '@opentiny/vue'

const params = reactive({
  width: 136,
  height: 120,
  content: ['Tiny Watermark', 'Happy Working'],
  image: import.meta.env.VITE_APP_BUILD_BASE_URL
    ? `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg',
  font: {
    color: '#ccc',
    fontSize: 16
  },
  rotate: -22,
  gap: [100, 100],
  zIndex: 9,
  customClass: 'test',
  interlaced: true
})
</script>
