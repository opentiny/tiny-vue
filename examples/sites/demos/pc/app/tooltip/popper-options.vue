<template>
  <div>
    <tiny-tooltip content="提示内容" :popper-options="options">
      <button class="tiny-button tiny-button--primary">鼠标悬浮到这里</button>
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
    return {
      options: {
        bubbling: true, // 监听元素所有上级有滚动元素的scroll事件,防止弹出层与页面分离
        removeOnDestroy: true // 当你想要在调用 `destroy` 方法时不自动移除 popper 时，应当将此项设置为 false
      }
    }
  }
}
</script>
