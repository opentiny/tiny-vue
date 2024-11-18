<template>
  <div class="mt-10">
    <tiny-slider v-model="value" :min="0" :max="100"></tiny-slider>
  </div>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 30
    }
  }
}
</script>
