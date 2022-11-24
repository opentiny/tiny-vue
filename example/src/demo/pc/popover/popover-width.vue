<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    :width="width"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <button>悬浮我看效果</button>
    </template>
  </tiny-popover>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  },
  data() {
    return {
      width: '200'
    }
  }
}
</script>
