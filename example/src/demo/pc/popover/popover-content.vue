<template>
  <tiny-popover placement="top-start" content="这是一段内容">
    <template #reference>
      <button>提示</button>
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
