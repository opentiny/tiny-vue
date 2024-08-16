<template>
  <tiny-slider v-model="value" :step="10"></tiny-slider>
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

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
