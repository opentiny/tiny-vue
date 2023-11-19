<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" custom-class="custom-class">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popconfirm as TinyPopconfirm, Button as TinyButton } from '@opentiny/vue'

const title = ref('这是气泡标题')
const content = ref('这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。')
</script>

<style>
.tiny-popover.tiny-popper.custom-class {
  background-color: #ccc;
}

.tiny-popover.tiny-popper.custom-class .popper__arrow::after {
  border-top-color: #ccc;
}
</style>
