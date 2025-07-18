<template>
  <tiny-slider v-model="value" :min="0" :max="50" :step="2" style="width: 300px; margin-bottom: 20px" />
  <tiny-space :size="value">
    <tiny-button type="primary">按钮1</tiny-button>
    <tiny-button type="success">按钮2</tiny-button>
    <tiny-button type="danger">按钮3</tiny-button>
  </tiny-space>
</template>

<script>
import { TinyButton, TinySpace, TinySlider } from '@opentiny/vue'

export default {
  components: {
    TinySpace,
    TinyButton,
    TinySlider
  },
  data() {
    return {
      value: 10
    }
  }
}
</script>