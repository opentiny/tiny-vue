<template>
  <tiny-watermark v-bind="params">
    <div style="height: 500px"></div>
  </tiny-watermark>
</template>

<script>
import { Watermark } from '@opentiny/vue'

export default {
  components: {
    TinyWatermark: Watermark
  },
  data() {
    return {
      params: {
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
      }
    }
  }
}
</script>
