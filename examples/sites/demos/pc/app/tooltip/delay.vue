<template>
  <div>
    <tiny-tooltip content="延迟 2000ms 出现" :open-delay="2000" :boundaries-padding="30">
      <button class="tiny-button tiny-button--primary">延迟 2s 出现</button>
    </tiny-tooltip>
    <tiny-tooltip content="延迟 2000ms 关闭" :close-delay="2000">
      <button class="tiny-button tiny-button--primary">延迟 2s 关闭</button>
    </tiny-tooltip>
    <tiny-tooltip content="2000ms后自动隐藏" :hide-after="2000">
      <button class="tiny-button tiny-button--primary">2s 后自动隐藏</button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
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
