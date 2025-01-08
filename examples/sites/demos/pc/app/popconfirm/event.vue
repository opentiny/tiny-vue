<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" @show="show" @hide="hide" @confirm="confirm">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { TinyPopconfirm, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm,
    TinyButton
  },
  data() {
    return {
      title: '这是气泡标题',
      message: '这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。'
    }
  },
  methods: {
    show() {
      TinyModal.message({
        status: 'info',
        message: 'show 事件触发了'
      })
    },
    hide() {
      TinyModal.message({
        status: 'info',
        message: 'hide 事件触发了'
      })
    },
    confirm() {
      TinyModal.message({
        status: 'info',
        message: 'confirm 事件触发了'
      })
    }
  }
}
</script>
