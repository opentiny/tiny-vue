<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" ref="popconfirmRef">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
      <template #footer>
        <tiny-button @click="handleClose"> 自定义关闭按钮 </tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popconfirm as TinyPopconfirm, Button as TinyButton } from '@opentiny/vue'

const title = ref('这是气泡标题')
const message = ref('这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。')
const popconfirmRef = ref()

function handleClose() {
  popconfirmRef.value.hide()
}
</script>
