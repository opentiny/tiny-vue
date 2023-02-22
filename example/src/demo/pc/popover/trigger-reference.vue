<template>
  <tiny-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <template #reference>
      <button>触发源</button>
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
