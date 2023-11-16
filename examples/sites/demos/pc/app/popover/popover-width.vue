<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    :width="width"
    :height="height"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <tiny-button>悬浮我看效果</tiny-button>
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
      width: '200',
      height: '300'
    }
  }
}
</script>
