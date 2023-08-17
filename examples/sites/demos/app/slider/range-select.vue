<template>
  <tiny-slider v-model="value3"></tiny-slider>
</template>

<script lang="jsx">
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value3: [20, 40]
    }
  }
}
</script>
