<template>
  <tiny-slider-button-group v-model="radio2" @change="change">
    <tiny-slider-button label="label1"></tiny-slider-button>
    <tiny-slider-button label="label"></tiny-slider-button>
    <tiny-slider-button label="label3"></tiny-slider-button>
    <tiny-slider-button text="label4"></tiny-slider-button>
  </tiny-slider-button-group>
</template>

<script>
import { SliderButton, SliderButtonGroup, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySliderButton: SliderButton,
    TinySliderButtonGroup: SliderButtonGroup
  },
  data() {
    return {
      radio2: 'label1'
    }
  },
  methods: {
    change(label) {
      Modal.message({
        message: 'change 事件，选中的 Radio label 值为：' + label,
        status: 'info'
      })
    }
  }
}
</script>
