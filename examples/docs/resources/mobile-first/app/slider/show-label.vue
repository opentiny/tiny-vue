<template>
  <div class="mt-10">
    <tiny-slider v-model="value" :show-steps="true" :show-label="true" :step="10" :format-label="formatLabel"></tiny-slider>
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
  },
  methods: {
    formatLabel(val) {
      return val + 'M'
    }
  }
}
</script>
