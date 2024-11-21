<template>
  <div class="content">
    <tiny-button @click="handleClick" :reset-time="0">Debounce</tiny-button>
  </div>
</template>

<script lang="jsx">
import { TinyNotify, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  data() {
    return {
      handleClick: TinyNotify({
        type: 'info',
        title: '通知消息的标题',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right',
        duration: 1000,
        customClass: 'my-custom-cls',
        debounceDelay: 3000
      })
    }
  }
}
</script>
