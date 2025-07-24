<template>
  <div>
    <tiny-tooltip placement="bottom">
      <template #content>
        <div class="h-24">通过 slot = "content" 自定义提示内容</div>
      </template>
      <tiny-button type="primary"> 插槽的使用 </tiny-button>
    </tiny-tooltip>
  </div>
</template>

<script>
import { TinyTooltip, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip,
    TinyButton
  },
  data() {
    return {}
  }
}
</script>
