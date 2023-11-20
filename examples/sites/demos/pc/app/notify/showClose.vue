<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">不显示关闭按钮</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Notify({
        type: 'info',
        title: (h, params) => <h4>通知消息的标题</h4>,
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        showClose: false,
        position: 'top-right',
        duration: 500000
      })
    }
  }
}
</script>
