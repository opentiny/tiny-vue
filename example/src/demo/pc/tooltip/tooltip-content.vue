<template>
  <div>
    <tiny-tooltip placement="bottom">
      <template #content>
        <div style="height: 100px">通过 slot = "content" 自定义提示内容</div>
      </template>
      <button class="tiny-button tiny-button--primary">插槽的使用</button>
    </tiny-tooltip>
  </div>
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
