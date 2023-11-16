<template>
  <div class="content">
    <tiny-button @click="infoClick" :reset-time="0">默认bottom-right</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">top-right</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    infoClick() {
      Notify({
        type: 'info',
        title: (h, params) => <h4>通知消息的标题</h4>,
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文'
      })
    },
    successClick() {
      Notify({
        type: 'success',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right'
      })
    }
  }
}
</script>
