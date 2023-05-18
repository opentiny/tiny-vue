<template>
  <div class="box">
    <tiny-tooltip content="Top Center 提示文字" placement="top">
      <button>Dark</button>
    </tiny-tooltip>
    <tiny-tooltip effect="light" content="Top Center 提示文字" placement="top">
      <button>Light</button>
    </tiny-tooltip>
    <tiny-tooltip type="normal" content="Top Center 提示文字" placement="top">
      <button>normal</button>
    </tiny-tooltip>
    <tiny-tooltip type="warning" content="Top Center 提示文字" placement="top">
      <button>warning</button>
    </tiny-tooltip>
    <tiny-tooltip type="error" content="Top Center 提示文字" placement="top">
      <button>error</button>
    </tiny-tooltip>
    <tiny-tooltip type="info" content="Top Center 提示文字" placement="top">
      <button>info</button>
    </tiny-tooltip>
    <tiny-tooltip type="success" content="Top Center 提示文字" placement="top">
      <button>success</button>
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

<style scoped>
.tiny-tooltip {
  margin-right: 16px;
}
</style>
