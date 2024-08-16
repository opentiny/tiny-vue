<template>
  <tiny-slider v-model="value" @change="change" @start="start" @stop="stop"></tiny-slider>
</template>

<script>
import { Slider, Notify } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 40
    }
  },
  methods: {
    start(val) {
      Notify({
        title: '触发开始滑动事件',
        message: `${JSON.stringify(val)}`,
        offset: 100
      })
    },
    change(val) {
      Notify({
        title: '触发change事件',
        message: `改变值为${val}`,
        offset: 100
      })
    },
    stop(val) {
      Notify({
        title: '触发停止滑动事件',
        message: `停止后值为${val}`,
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
