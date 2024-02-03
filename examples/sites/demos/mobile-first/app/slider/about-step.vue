<template>
  <div class="mt-10">
    <tiny-slider v-model="value" :step="10"></tiny-slider>
  </div>
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
