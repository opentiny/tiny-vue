<template>
  <tiny-tooltip v-model="showTooltip" popper-class="tippoper" content="为 Tooltip 的 popper 添加类名" :manual="false">
    <tiny-button type="primary"> 为 Tooltip 的 popper 添加类名 </tiny-button>
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
      showTooltip: true
    }
  }
}
</script>
