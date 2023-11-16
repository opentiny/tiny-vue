<template>
  <tiny-slider v-model="value2" :num-pages="3"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value2: 40
    }
  }
}
</script>
