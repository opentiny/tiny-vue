<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">关闭前的事件</tiny-button>
  </div>
</template>

<script>
import { Button, Notify, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Notify({
        type: 'info',
        title: '通知',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        beforeClose: () => {
          Modal.message({ message: '在通知框关闭前触发的事件,返回 false 可阻止关闭通知框' })
          return false
        },
        duration: 500000,
        position: 'top-right'
      })
    }
  }
}
</script>
