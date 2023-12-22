<template>
  <tiny-slider v-model="value" :show-input="true" unit="%"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 40
    }
  }
}
</script>
