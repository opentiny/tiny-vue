<template>
  <div>
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      :open-delay="2000"
      content="这是一段内容。"
    >
      <template #reference>
        <tiny-button style="margin-right: 16px">两秒后打开</tiny-button>
      </template>
    </tiny-popover>

    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      :close-delay="2000"
      content="这是一段内容。"
    >
      <template #reference>
        <tiny-button style="margin-right: 16px">两秒后关闭</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script setup lang="jsx">
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'
</script>
