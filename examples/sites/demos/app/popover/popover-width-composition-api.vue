<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    :width="width"
    :height="height"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <tiny-button>悬浮我看效果</tiny-button>
    </template>
  </tiny-popover>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

const width = ref('200')
const height = ref('300')
</script>
