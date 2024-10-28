<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义关闭图标</tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyNotify } from '@opentiny/vue'
import { IconCloseSquare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton
  },
  methods: {
    baseClick() {
      TinyNotify({
        type: 'info',
        title: '通知',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        closeIcon: IconCloseSquare(),
        position: 'top-right'
      })
    }
  }
}
</script>
