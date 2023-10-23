<template>
  <tiny-popover placement="top-start" content="这是一段内容">
    <template #reference>
      <tiny-button>提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'
</script>
