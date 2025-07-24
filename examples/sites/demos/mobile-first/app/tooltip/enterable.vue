<template>
  <tiny-tooltip content="鼠标不能进入到 tooltip 中" :enterable="false" placement="bottom">
    <tiny-button type="primary"> 鼠标不能进入到 tooltip 中 </tiny-button>
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
