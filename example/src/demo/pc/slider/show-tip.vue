<template>
  <tiny-slider v-model="value" :show-tip="false"></tiny-slider>
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
  }
}
</script>
