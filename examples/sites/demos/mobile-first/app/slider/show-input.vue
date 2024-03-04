<template>
  <div class="mt-10">
    <tiny-slider v-model="value2" :show-input="true"></tiny-slider>
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
      value2: 40
    }
  }
}
</script>
