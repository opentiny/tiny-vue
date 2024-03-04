<template>
  <div>
    <tiny-popover
      placement="top-start"
      title="标题"
      :visible-arrow="true"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button class="mr-32">有提示箭头</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="top-start"
      title="标题"
      :visible-arrow="false"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button class="mr-32">无提示箭头</tiny-button>
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
