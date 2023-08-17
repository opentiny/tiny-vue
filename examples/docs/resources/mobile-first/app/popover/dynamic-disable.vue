<template>
  <div>
    <tiny-button @click="popverDisable = !popverDisable" class="mr-32"
      >{{ popverDisable ? '启用' : '禁用' }}弹出框</tiny-button
    >
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      :disabled="popverDisable"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button>悬浮弹出</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      popverDisable: false
    }
  }
}
</script>
