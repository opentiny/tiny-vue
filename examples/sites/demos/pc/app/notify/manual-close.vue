<template>
  <div class="content">
    <tiny-button @click="manualCloseClick" :reset-time="0">通过 instance 关闭</tiny-button>
    <tiny-button @click="closebyIdClick" :reset-time="0">通过 id 关闭</tiny-button>
    <tiny-button @click="closeAllClick" :reset-time="0">批量全部关闭</tiny-button>
  </div>
</template>

<script>
import { Button, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    manualCloseClick() {
      const instance = Notify({
        type: 'info',
        title: '通知',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right',
        showClose: false
      })

      setTimeout(() => {
        instance.close()
      }, 4000)
    },
    closebyIdClick() {
      const instance = Notify({
        type: 'info',
        title: '通知',
        message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
        position: 'top-right',
        showClose: false
      })

      setTimeout(() => {
        Notify.close(instance.id, () => console.log(`即将关闭 id=${instance.id} 的通知`))
      }, 4000)
    },
    closeAllClick() {
      for (let i = 1; i <= 3; i++) {
        Notify({
          type: 'info',
          title: '通知' + i,
          message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
          position: 'top-right',
          showClose: false
        })
      }

      setTimeout(() => {
        Notify.closeAll()
      }, 4000)
    }
  }
}
</script>
