<template>
  <tiny-tooltip content="不显示 Tooltip 箭头" :visible-arrow="false">
    <button class="tiny-button tiny-button--primary">
      不显示 Tooltip 箭头
    </button>
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
