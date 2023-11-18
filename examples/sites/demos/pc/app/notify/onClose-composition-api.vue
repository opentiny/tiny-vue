<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">点击关闭按钮时触发事件</tiny-button>
  </div>
</template>

<script setup>
import { Button as TinyButton, Notify, Modal } from '@opentiny/vue'

function baseClick() {
  Notify({
    type: 'info',
    title: '通知',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    onClose: () => Modal.message({ message: '点击关闭按钮时触发事件' }),
    duration: 500000,
    position: 'top-right'
  })
}
</script>
