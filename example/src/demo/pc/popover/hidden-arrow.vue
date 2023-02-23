<template>
  <div class="container">
    <tiny-popover
      placement="top-start"
      title="标题"
      :visible-arrow="true"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>有提示箭头</button>
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
        <button>无提示箭头</button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  }
}
</script>
<style>
.container button.tiny-popover__reference {
  margin: 0 30px;
}
</style>
