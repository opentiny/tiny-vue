<template>
  <tiny-tooltip content="不显示 Tooltip 箭头" :visible-arrow="false">
    <tiny-button type="primary">
      不显示 Tooltip 箭头
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
      disabled: false
    }
  }
}
</script>
