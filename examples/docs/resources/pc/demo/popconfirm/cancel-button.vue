<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" :cancel-button="false">
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
      content: '这是气泡提示框内容。'
    }
  }
}
</script>
