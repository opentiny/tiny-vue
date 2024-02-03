<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    :popper-options="popperOption"
    content="这是一段内容。"
  >
    <template #reference>
      <tiny-button>悬浮我触发</tiny-button>
    </template>
  </tiny-popover>
</template>

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      popperOption: { bubbling: true }
    }
  }
}
</script>
