<template>
  <tiny-slider v-model="value" vertical height="200px"></tiny-slider>
</template>

<script lang="jsx">
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
