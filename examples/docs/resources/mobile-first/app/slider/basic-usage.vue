<template>
  <div class="mt-10">
    <tiny-slider v-model="value"></tiny-slider>
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
      value: 10
    }
  }
}
</script>
