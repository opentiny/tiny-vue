<template>
  <tiny-slider v-model="value" :show-input="true" unit="%"></tiny-slider>
  <tiny-slider v-model="value2" :show-input="true"></tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value: 40,
      value2: [40, 60]
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
