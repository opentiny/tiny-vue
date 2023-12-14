<template>
  <tiny-popover placement="top-start" title="标题" content="这是一段内容。" width="200">
    <template #reference>
      <tiny-button>点击我提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'
</script>
