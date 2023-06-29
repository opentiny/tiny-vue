<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" popper-class="custom-class">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { Popconfirm, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm: Popconfirm,
    TinyButton: Button,
  },
  data() {
    return {
      title: '这是气泡标题',
      content: '这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。'
    }
  }
}
</script>

<style>
.tiny-popover.tiny-popper.custom-class {
  background-color: #ccc;
}
</style>
