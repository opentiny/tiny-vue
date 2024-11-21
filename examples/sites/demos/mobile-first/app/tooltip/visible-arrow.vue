<template>
  <tiny-tooltip content="不显示 Tooltip 箭头" :visible-arrow="false">
    <tiny-button type="primary"> 不显示 Tooltip 箭头 </tiny-button>
  </tiny-tooltip>
</template>

<script>
import { TinyTooltip, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip,
    TinyButton
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>
