<template>
  <div>
    <tiny-popover placement="top-start" content="这是一段内容" :offset="0">
      <template #reference>
        <tiny-button class="mr-32">提示0</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :offset="100">
      <template #reference>
        <tiny-button class="mr-32">提示100</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :offset="200">
      <template #reference>
        <tiny-button class="mr-32">提示200</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  }
}
</script>
