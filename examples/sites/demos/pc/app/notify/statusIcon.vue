<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义类型图标</tiny-button>
  </div>
</template>

<script>
import { Button, Notify } from '@opentiny/vue'
import { IconInfo } from '@opentiny/vue-icon'

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
        statusIcon: IconInfo(),
        position: 'top-right'
      })
    }
  }
}
</script>
