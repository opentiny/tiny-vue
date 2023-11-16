<template>
  <tiny-watermark v-bind="params">
    <div style="height: 500px"></div>
  </tiny-watermark>
</template>

<script setup>
import { reactive } from 'vue'
import { Watermark as TinyWatermark } from '@opentiny/vue'

const params = reactive({
  width: 120,
  height: 64,
  content: ['Tiny Watermark', 'Happy Working'],
  font: {
    color: '#ccc',
    fontSize: 25
  },
  gap: [100, 100],
  offset: [20, 20],
  rotate: -25,
  zIndex: 9,
  customClass: 'test',
  interlaced: true
})
</script>
