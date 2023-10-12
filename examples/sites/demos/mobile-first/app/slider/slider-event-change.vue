<template>
  <div class="mt-10">
    <tiny-slider v-model="value2" @change="change"></tiny-slider>
  </div>
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
    change(val) {
      Notify({
        title: '触发change事件',
        message: `改变值为${val}`,
        offset: 100
      })
    }
  }
}
</script>
