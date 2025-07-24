<template>
  <tiny-slider v-model="value"></tiny-slider>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: [20, 40]
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
