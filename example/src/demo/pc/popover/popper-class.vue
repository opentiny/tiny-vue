<template>
  <div class="container">
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      popper-class="demo-popover-class1"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>单个class</button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      popper-class="demo-popover-class1 demo-popover-class2"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>多个class</button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style>
.demo-popover-class1 {
  background: #eee !important;
}

.demo-popover-class2 {
  background: #999 !important;
}
.container button.tiny-popover__reference {
  margin: 0 30px;
}
</style>
