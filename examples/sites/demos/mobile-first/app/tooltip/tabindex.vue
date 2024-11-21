<template>
  <tiny-tooltip :tabindex="1" content="Tooltip 组件的 tabindex 为1">
    <tiny-button>Tooltip 组件的 tabindex 为1</tiny-button>
  </tiny-tooltip>
</template>

<script>
import { TinyTooltip, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip,
    TinyButton
  }
}
</script>
