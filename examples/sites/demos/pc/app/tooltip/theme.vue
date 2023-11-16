<template>
  <div class="box">
    Effects示例：
    <tiny-tooltip content="dark 提示文字" placement="top">
      <tiny-button>Dark</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip effect="light" content="light 提示文字" placement="top">
      <tiny-button>Light</tiny-button>
    </tiny-tooltip>
  </div>
  <div class="box">
    Types示例：
    <tiny-tooltip type="normal" content="normal 提示文字" placement="top">
      <tiny-button>normal</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip type="warning" content="warning 提示文字" placement="top">
      <tiny-button>warning</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip type="error" content="error 提示文字" placement="top">
      <tiny-button>error</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip type="info" content="info 提示文字" placement="top">
      <tiny-button>info</tiny-button>
    </tiny-tooltip>
    <tiny-tooltip type="success" content="success 提示文字" placement="top">
      <tiny-button>success</tiny-button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  }
}
</script>

<style scoped>
.tiny-tooltip {
  margin-right: 8px;
  margin-bottom: 16px;
}
</style>
