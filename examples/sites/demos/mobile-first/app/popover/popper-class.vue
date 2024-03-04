<template>
  <div>
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      popper-class="!bg-gray-300"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button class="mr-32">单个class</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      popper-class="bg-color-bg-6 text-color-brand"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button class="mr-32">多个class</tiny-button>
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
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>
