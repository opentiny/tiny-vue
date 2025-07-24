<template>
  <tiny-slider v-model="value" :show-tip="true" :format-tooltip="format"></tiny-slider>
</template>

<script>
import { TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 20
    }
  },
  methods: {
    format(value) {
      return '当前值为：' + value
    }
  }
}
</script>

<style scoped>
.tiny-slider-container {
  margin-top: 50px;
}
</style>
