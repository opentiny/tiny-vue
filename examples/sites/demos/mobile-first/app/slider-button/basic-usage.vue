<template>
  <tiny-slider-button-group v-model="radio2" :displayed="false">
    <tiny-slider-button label="1">选项选项选项选项选项选项</tiny-slider-button>
    <tiny-slider-button label="2">选项选项选项选项选项选项</tiny-slider-button>
    <tiny-slider-button label="3">选项选项</tiny-slider-button>
    <tiny-slider-button label="4">选项</tiny-slider-button>
  </tiny-slider-button-group>
</template>

<script>
import { TinySliderButton, TinySliderButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinySliderButton,
    TinySliderButtonGroup
  },
  data() {
    return {
      radio2: '1'
    }
  }
}
</script>
