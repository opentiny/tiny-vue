<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" @confirm="handleConfirm">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popconfirm as TinyPopconfirm, Button as TinyButton, Modal } from '@opentiny/vue'

const title = ref('这是气泡标题')
const content = ref('这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。')

function handleConfirm() {
  Modal.message({
    message: 'confirm事件触发了',
    status: 'info'
  })
}
</script>
