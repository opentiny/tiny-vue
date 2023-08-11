<template>
  <tiny-tooltip :tabindex="1" content="Tooltip 组件的 tabindex 为1">
    <button>Tooltip 组件的 tabindex 为1</button>
  </tiny-tooltip>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  }
}
</script>
