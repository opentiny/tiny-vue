<template>
  <div class="box">
    <tiny-tooltip content="Top Center 提示文字" placement="top">
      <button>Dark</button>
    </tiny-tooltip>
    <tiny-tooltip effect="light" content="Bottom Center 提示文字" placement="bottom">
      <button>Light</button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  }
}
</script>
