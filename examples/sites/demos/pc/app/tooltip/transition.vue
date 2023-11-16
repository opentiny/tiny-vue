<template>
  <tiny-tooltip content="渐隐动画" transition="custom-transition" placement="bottom">
    <button class="tiny-button tiny-button--primary">鼠标悬浮到这里</button>
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

<style>
.tiny-tooltip.custom-transition-enter,
.tiny-tooltip.custom-transition-enter-from,
.tiny-tooltip.custom-transition-leave-to {
  opacity: 0;
  transform-origin: center top;
}

.custom-transition-enter-active,
.custom-transition-leave-active {
  opacity: 1;
  transition: opacity 1.5s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
