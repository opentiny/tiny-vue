<template>
  <tiny-slider v-model="value2" disabled></tiny-slider>
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
