<template>
  <tiny-popover placement="top-start" content="这是一段内容">
    <template #reference>
      <tiny-button>提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script>
import { TinyPopover, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopover,
    TinyButton
  }
}
</script>
