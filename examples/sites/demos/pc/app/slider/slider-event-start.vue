<template>
  <tiny-slider v-model="value2" @start="start"></tiny-slider>
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
    start(val) {
      Notify({
        title: '触发开始滑动事件',
        message: `${JSON.stringify(val)}`,
        offset: 100
      })
    }
  }
}
</script>
