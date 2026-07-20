<template>
  <div>
    <tiny-alert size="small" title="size 为 small" description="size 为 small"></tiny-alert>
    <tiny-alert size="medium" title="size 为 medium" description="size 为 medium"></tiny-alert>
    <tiny-alert size="normal" description="size 为 normal"></tiny-alert>
    <tiny-alert size="large" title="size 为 large">
      <!-- <span>自定义内容</span> -->
    </tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert
  }
}
</script>
