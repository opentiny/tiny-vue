<template>
  <div>
    <div class="row arrow-row">
      <h1>箭头偏移：</h1>
      <tiny-slider v-model="arrowOffset" :min="0" :max="100" show-input></tiny-slider>
      <tiny-popover
        placement="bottom"
        content="箭头偏移的内容"
        :arrow-offset="arrowOffset"
        trigger="manual"
        v-model="show"
        :key="arrowOffset"
      >
        <template #reference>
          <tiny-button>箭头偏移示例</tiny-button>
        </template>
      </tiny-popover>
    </div>

    <div class="row panel-row">
      <h1>面板偏移：</h1>
      <tiny-slider v-model="offset" :min="-100" :max="100" show-input></tiny-slider>
      <tiny-popover
        placement="bottom"
        content="面板偏移的内容"
        :offset="offset"
        trigger="manual"
        v-model="show"
        :key="offset"
      >
        <template #reference>
          <tiny-button>面板偏移示例</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script lang="jsx">
import { Popover, Button, Slider } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    TinySlider: Slider
  },
  data() {
    return {
      show: true,
      arrowOffset: 0,
      offset: 0
    }
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 70px;
}
h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}
.tiny-slider-container {
  margin: 16px 40px;
}

.tiny-button {
  margin-left: 40px;
}
</style>
