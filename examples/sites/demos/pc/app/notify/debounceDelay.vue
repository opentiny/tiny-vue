<template>
  <div class="content">
    <tiny-button @click="handleClick" :reset-time="0">Debounce</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Notify, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      handleClick: Notify({
        type: 'info',
        title: (h, params) => <h4>通知消息的标题</h4>,
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
