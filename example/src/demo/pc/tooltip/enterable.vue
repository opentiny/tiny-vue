<template>
  <tiny-tooltip content="鼠标不能进入到 tooltip 中" :enterable="false" placement="bottom">
    <button class="tiny-button tiny-button--primary">鼠标不能进入到 tooltip 中</button>
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
      disabled: false
    }
  }
}
</script>
