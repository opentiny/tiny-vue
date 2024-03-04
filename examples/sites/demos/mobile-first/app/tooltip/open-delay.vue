<template>
  <div>
    <tiny-tooltip content="延迟 2000ms 出现" :open-delay="2000">
      <tiny-button type="primary"> 延迟 2s 出现 </tiny-button>
    </tiny-tooltip>
    <tiny-tooltip content="2000ms后自动隐藏" :hide-after="2000">
      <tiny-button type="primary"> 2s 后自动隐藏 </tiny-button>
    </tiny-tooltip>
  </div>
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
