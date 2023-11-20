<template>
  <tiny-slider v-model="value2" @stop="stop"></tiny-slider>
</template>

<script>
import { Slider, Notify } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value2: 40
    }
  },
  methods: {
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
