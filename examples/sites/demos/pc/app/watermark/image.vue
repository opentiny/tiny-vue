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
        width: 136,
        height: 120,
        content: ['Tiny Watermark', 'Happy Working'],
        image: import.meta.env.VITE_APP_BUILD_BASE_URL
          ? `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
          : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg',
        font: {
          color: '#ccc',
          fontSize: 100
        },
        rotate: -22,
        gap: [100, 100],
        zIndex: 9,
        customClass: 'test',
        interlaced: true
      }
    }
  }
}
</script>
