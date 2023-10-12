<template>
  <div class="box">
    <tiny-tooltip content="Top Center 提示文字" placement="top">
      <tiny-button>Dark</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip effect="light" content="Bottom Center 提示文字" placement="bottom">
      <tiny-button>Light</tiny-button>
    </tiny-tooltip>
  </div>
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
