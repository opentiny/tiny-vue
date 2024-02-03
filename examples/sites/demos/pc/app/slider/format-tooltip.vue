<template>
  <tiny-slider v-model="value" :show-tip="true" :format-tooltip="format"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 20
    }
  },
  methods: {
    format(value) {
      return '当前值为：' + value
    }
  }
}
</script>
