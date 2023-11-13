<template>
  <tiny-slider v-model="value" :min="0" :max="100"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 30
    }
  }
}
</script>
