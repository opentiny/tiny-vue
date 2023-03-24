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
        <tiny-button>单个class</tiny-button>
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
        <tiny-button>多个class</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="jsx">
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

<style>
.demo-popover-class1 {
  background: #eee !important;
}

.demo-popover-class2 {
  background: #999 !important;
}
.container .reference-wrapper .tiny-button {
  margin: 0 30px;
}
</style>
