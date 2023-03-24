<template>
  <tiny-slider v-model="value" :step="10"></tiny-slider>
</template>

<script lang="jsx">
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
