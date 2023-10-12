<template>
  <tiny-tooltip content="出现位置的偏移量" :offset="20">
    <tiny-button type="primary"> 出现位置的偏移量 </tiny-button>
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
    return {}
  }
}
</script>
