<template>
  <tiny-tooltip :tabindex="1" content="Tooltip 组件的 tabindex 为1">
    <tiny-button>Tooltip 组件的 tabindex 为1</tiny-button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  }
}
</script>
