<template>
  <div>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="0">
      <template #reference>
        <tiny-button class="mr-32">提示</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="100">
      <template #reference>
        <tiny-button class="mr-32">提示</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="200">
      <template #reference>
        <tiny-button class="mr-32">提示</tiny-button>
      </template>
    </tiny-popover>
  </div>
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
