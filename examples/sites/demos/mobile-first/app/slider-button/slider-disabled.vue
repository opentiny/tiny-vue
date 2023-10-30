<template>
  <div>
    <tiny-slider-button-group v-model="radio1">
      <tiny-slider-button disabled label="1">选项</tiny-slider-button>
      <tiny-slider-button label="2">选项选项选选项</tiny-slider-button>
      <tiny-slider-button disabled label="3">选项</tiny-slider-button>
      <tiny-slider-button label="4">选项选项</tiny-slider-button>
    </tiny-slider-button-group>
    <br /><br /><br /><br /><br />
    <tiny-slider-button-group disabled v-model="radio2">
      <tiny-slider-button label="1">选项</tiny-slider-button>
      <tiny-slider-button label="2">选项选项选选项</tiny-slider-button>
      <tiny-slider-button label="3">选项</tiny-slider-button>
      <tiny-slider-button label="4">选项选项</tiny-slider-button>
    </tiny-slider-button-group>
  </div>
</template>

<script>
import { SliderButton, SliderButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinySliderButton: SliderButton,
    TinySliderButtonGroup: SliderButtonGroup
  },
  data() {
    return {
      radio1: '1',
      radio2: '1'
    }
  }
}
</script>
