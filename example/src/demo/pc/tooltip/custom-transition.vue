<template>
  <tiny-tooltip
    content="定义渐变动画"
    transition="custom-transition"
    placement="bottom"
  >
    <button class="tiny-button tiny-button--primary">定义渐变动画</button>
  </tiny-tooltip>
</template>

<script>
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

<style>
.tiny-tooltip.custom-transition-enter,
.tiny-tooltip.custom-transition-enter-from,
.tiny-tooltip.custom-transition-leave-to {
  opacity: 0;
  transform: translateX(-999px);
  transform-origin: center top;
}

.custom-transition-enter-active,
.custom-transition-leave-active {
  opacity: 1;
  transform: translateX(0);
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
