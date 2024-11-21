<template>
  <div class="mt-10">
    <tiny-slider v-model="value3" :show-input="true"></tiny-slider>
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
      value3: [20, 40]
    }
  }
}
</script>
