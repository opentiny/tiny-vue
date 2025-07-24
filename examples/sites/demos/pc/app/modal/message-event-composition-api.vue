<template>
  <div class="content">
    <tiny-button @click="btnClick">打开带事件消息</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'

function btnClick() {
  Modal.message({
    message: '自定义消息的内容',
    events: {
      show(ev) {
        handleEvent('show', ev)
      },
      hide(ev) {
        handleEvent('hide', ev)
      },
      close(ev) {
        handleEvent('close', ev)
      }
    }
  })
}

function handleEvent(eventName, eventArgs) {
  Modal.message({ status: 'info', message: `${eventName} 事件触发了` })
  console.log({ eventName, eventArgs })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
