<template>
  <div>
    <tiny-slider v-model="offset" :min="-200" :max="200"></tiny-slider>
    <tiny-tooltip content="出现位置的偏移量" :offset="offset" manual v-model="show" :key="offset">
      <button class="tiny-button tiny-button--primary">出现位置的偏移量</button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip, Slider } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinySlider: Slider
  },
  data() {
    return {
      offset: 10,
      show: true
    }
  }
}
</script>
