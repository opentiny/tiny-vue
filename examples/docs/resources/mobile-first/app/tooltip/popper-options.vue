<template>
  <tiny-tooltip content="popper-options配置" :popper-options="options">
    <tiny-button type="primary">
      popper-options配置
    </tiny-button>
  </tiny-tooltip>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  },
  data() {
    return {
      options: {
        gpuAcceleration: true, // 当这一属性被设置为 true 时，popper 的位置将通过 CSS3 的 translate3d 来改变
        removeOnDestroy: false // 当你想要在调用 `destroy` 方法时不自动移除 popper 时，应当将此项设置为 false
      }
    }
  }
}
</script>
