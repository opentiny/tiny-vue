<template>
  <div class="box">
    <tiny-tooltip content="dark 提示文字" placement="top">
      <button>Dark</button>
    </tiny-tooltip>
    <tiny-tooltip effect="light" content="light 提示文字" placement="top">
      <button>Light</button>
    </tiny-tooltip>
    <tiny-tooltip type="normal" content="normal 提示文字" placement="top">
      <button>normal</button>
    </tiny-tooltip>
    <tiny-tooltip type="warning" content="warning 提示文字" placement="top">
      <button>warning</button>
    </tiny-tooltip>
    <tiny-tooltip type="error" content="error 提示文字" placement="top">
      <button>error</button>
    </tiny-tooltip>
    <tiny-tooltip type="info" content="info 提示文字" placement="top">
      <button>info</button>
    </tiny-tooltip>
    <tiny-tooltip type="success" content="success 提示文字" placement="top">
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
