<template>
  <tiny-slider-button-group v-model="radio2" :options="options"></tiny-slider-button-group>
</template>

<script>
import { TinySliderButtonGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySliderButtonGroup
  },
  data() {
    return {
      radio2: '很好',
      options: [{ label: '很好', events: { click: this.handleClick } }, { label: '一般' }]
    }
  },
  methods: {
    handleClick() {
      TinyModal.message({ message: 'click' })
    }
  }
}
</script>
