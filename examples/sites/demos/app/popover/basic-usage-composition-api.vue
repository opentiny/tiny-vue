<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    append-to-body
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <tiny-button>悬浮我提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'
</script>
