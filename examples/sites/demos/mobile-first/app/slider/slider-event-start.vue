<template>
  <div class="mt-10">
    <tiny-slider v-model="value2" @start="start"></tiny-slider>
  </div>
</template>

<script>
import { TinySlider, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value2: 40
    }
  },
  methods: {
    start(val) {
      TinyNotify({
        title: '触发开始滑动事件',
        message: `${JSON.stringify(val)}`,
        offset: 100
      })
    }
  }
}
</script>
