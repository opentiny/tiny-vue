<template>
  <tiny-slider v-model="value" @change="change" @start="start" @stop="stop"></tiny-slider>
</template>

<script>
import { TinySlider, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 40
    }
  },
  methods: {
    start(val) {
      TinyNotify({
        title: '触发开始滑动事件',
        message: `${JSON.stringify(val)}`,
        offset: 100
      })
    },
    change(val) {
      TinyNotify({
        title: '触发 change 事件',
        message: `改变值为 ${val}`,
        offset: 100
      })
    },
    stop(val) {
      TinyNotify({
        title: '触发停止滑动事件',
        message: `停止后值为 ${val}`,
        offset: 150
      })
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
