<template>
  <tiny-popover placement="top-start" content="这是一段内容">
    <template #reference>
      <tiny-button>提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  }
}
</script>
