<template>
  <tiny-slider v-model="value5" :show-input="true">
    <template #default="slotScope">
      <b>{{ slotScope.slotScope }}%</b>
    </template>
  </tiny-slider>
</template>

<script>
import { Slider } from '@opentiny/vue'

export default {
  components: {
    TinySlider: Slider
  },
  data() {
    return {
      value5: 40
    }
  }
}
</script>
