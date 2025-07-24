<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">关闭前的事件</tiny-button>
    <tiny-button @click="baseClick2" :reset-time="0">点击关闭按钮时触发事件</tiny-button>
  </div>
</template>

<script setup>
import { TinyButton, TinyNotify, TinyModal } from '@opentiny/vue'

function baseClick() {
  TinyNotify({
    type: 'info',
    title: '通知',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    beforeClose: () => {
      TinyModal.message({ message: '在通知框关闭前触发的事件，返回 false 可阻止关闭通知框', status: 'info' })
      return false
    },
    position: 'top-right'
  })
}

function baseClick2() {
  TinyNotify({
    type: 'info',
    title: '通知',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    onClose: () => TinyModal.message({ message: '点击关闭按钮时触发事件', status: 'info' }),
    position: 'top-right'
  })
}
</script>
