<template>
  <div class="mt-10">
    <tiny-slider v-model="value"></tiny-slider>
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
      value: 10
    }
  }
}
</script>
