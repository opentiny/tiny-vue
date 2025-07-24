<template>
  <tiny-slider v-model="value" :marks="marks"></tiny-slider>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 40,
      marks: {
        10: '10%',
        40: '40%',
        50: '50%'
      }
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
