<template>
  <div class="content">
    <tiny-button @click="btnClick">打开带事件消息</tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    btnClick() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const $this = this

      TinyModal.message({
        message: '自定义消息的内容',
        events: {
          show(ev) {
            $this.handleEvent('show', ev)
          },
          hide(ev) {
            $this.handleEvent('hide', ev)
          },
          close(ev) {
            $this.handleEvent('close', ev)
          }
        }
      })
    },
    handleEvent(eventName, eventArgs) {
      TinyModal.message({ status: 'info', message: `${eventName} 事件触发了` })
      console.log({ eventName, eventArgs })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
