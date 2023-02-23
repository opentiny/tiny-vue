<template>
  <tiny-tooltip v-model="showTooltip" popper-class="tippoper" content="为 Tooltip 的 popper 添加类名" :manual="false">
    <button class="tiny-button tiny-button--primary">为 Tooltip 的 popper 添加类名</button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  data() {
    return {
      showTooltip: true
    }
  }
}
</script>
