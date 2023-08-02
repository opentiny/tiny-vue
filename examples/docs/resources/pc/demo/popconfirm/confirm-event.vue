<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" @confirm="handleConfirm">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { Popconfirm, Button, Modal } from '@opentiny/vue'

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
  },
  methods: {
    handleConfirm() {
      Modal.message({
        message: 'confirm事件触发了',
        status: 'info'
      })
    }
  }
}
</script>
