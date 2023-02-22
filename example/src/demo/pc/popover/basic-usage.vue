<template>
  <tiny-popover placement="top-start" title="标题" width="200" trigger="hover" append-to-body content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <template #reference>
      <button>悬浮我提示</button>
    </template>
  </tiny-popover>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  }
}
</script>
