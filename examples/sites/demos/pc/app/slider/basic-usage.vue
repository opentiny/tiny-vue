<template>
  <div>
    <tiny-button @click="setValue">设置值</tiny-button>
    <tiny-slider v-model="value"></tiny-slider>
  </div>
</template>

<script>
import { Slider, Button } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider,
    TinyButton: Button
  },
  data() {
    return {
      value: 20
    }
  },
  methods: {
    setValue() {
      this.value = 50
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 32px;
}
</style>
