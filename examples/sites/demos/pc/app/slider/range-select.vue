<template>
  <tiny-slider v-model="value"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: [20, 40]
    }
  }
}
</script>
