<template>
  <tiny-tooltip content="出现位置的偏移量" :offset="20">
    <button class="tiny-button tiny-button--primary">出现位置的偏移量</button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  data() {
    return {}
  }
}
</script>
