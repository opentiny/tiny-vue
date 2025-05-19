<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" ref="popconfirm">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
      <template #message>
        <p>{{ customMessage }}</p>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { TinyPopconfirm, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm,
    TinyButton
  },
  data() {
    return {
      title: '这是气泡标题',
      message: '这是气泡确认框提示内容文本描述。',
      customMessage: '这是气泡确认框自定义提示内容文本描述。'
    }
  }
}
</script>
