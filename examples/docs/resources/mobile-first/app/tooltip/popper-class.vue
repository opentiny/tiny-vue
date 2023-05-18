<template>
  <tiny-tooltip v-model="showTooltip" popper-class="tippoper" content="为 Tooltip 的 popper 添加类名" :manual="false">
    <tiny-button type="primary">
      为 Tooltip 的 popper 添加类名
    </tiny-button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  },
  data() {
    return {
      showTooltip: true
    }
  }
}
</script>
